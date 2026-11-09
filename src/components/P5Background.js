import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const sketch = (p) => {
  let targetX, targetY;
  let tx = 0;
  let ty = 10000;
  let mxNoise = 20000;
  let myNoise = 30000;
  let virtualMouseX = 0;
  let virtualMouseY = 0;
  let isMobile = false;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    targetX = p.width / 2;
    targetY = p.height / 2;
    p.rectMode(p.CENTER);
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    isMobile = p.windowWidth <= 768 || /Mobi|Android|iPhone|iPad|iPod/.test(ua);
    p.background(isMobile ? 50 : 250);
  };

  p.draw = () => {
    p.background(isMobile ? 50 : 250); // 軽いフェード効果

    targetX = p.noise(tx) * p.width;
    targetY = p.noise(ty) * p.height;
    tx += 0.005;
    ty += 0.005;

    // Virtual mouse: on mobile simulate movement with noise, on desktop use actual mouse
    if (isMobile) {
      virtualMouseX = p.noise(mxNoise) * p.width;
      virtualMouseY = p.noise(myNoise) * p.height;
      mxNoise += 0.005;
      myNoise += 0.005;
    } else {
      virtualMouseX = p.mouseX;
      virtualMouseY = p.mouseY;
    }

    const spacing = 15;
    const segmentSize = 15;
    const maxWeight = 12;
    const minWeight = 0.5;
    const effectRadius = p.width / 2;
    const maxTotal = maxWeight * 1.5;
    const k = maxWeight / effectRadius;
    const w = p.width;
    const h = p.height;

    // 高速化：線を1本ずつ p.line + strokeWeight で描く代わりに、
    // 各列を「太さが上下で変わる1つの多角形」としてまとめ、全列を1回の fill で描く。
    // （p5 の関数呼び出しと描画命令の数が数千回 → 1回になる）
    const ctx = p.drawingContext;
    const rows = Math.floor(h / segmentSize) + 2;
    const half = new Float32Array(rows);
    ctx.beginPath();
    for (let x = 0; x <= w; x += spacing) {
      const dxm = x - virtualMouseX;
      const dxr = x - targetX;
      for (let r = 0; r < rows; r++) {
        const y = r * segmentSize;
        const dym = y - virtualMouseY;
        const dyr = y - targetY;
        const t = maxWeight * 2 + minWeight
          - k * (Math.sqrt(dxm * dxm + dym * dym) + Math.sqrt(dxr * dxr + dyr * dyr));
        half[r] = (t < minWeight ? minWeight : t > maxTotal ? maxTotal : t) / 2;
      }
      ctx.moveTo(x - half[0], 0);
      for (let r = 1; r < rows; r++) ctx.lineTo(x - half[r], r * segmentSize);
      for (let r = rows - 1; r >= 0; r--) ctx.lineTo(x + half[r], r * segmentSize);
      ctx.closePath();
    }
    ctx.fillStyle = '#000';
    ctx.fill();

    // 2つの焦点を細い十字線で示す
    drawMarker(virtualMouseX, virtualMouseY);
    drawMarker(targetX, targetY);
  };

  const drawMarker = (x, y) => {
    const arm = 14;
    p.stroke(173, 255, 47);
    p.strokeWeight(1.5);
    p.line(x - arm, y, x - 4, y);
    p.line(x + 4, y, x + arm, y);
    p.line(x, y - arm, x, y - 4);
    p.line(x, y + 4, x, y + arm);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    isMobile = p.windowWidth <= 768 || /Mobi|Android|iPhone|iPad|iPod/.test(ua);
  };
};

const P5Background = () => {
  const canvasRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    // react-snap によるプリレンダリング中はキャンバスを生成しない
    // （静的HTMLにcanvasが混入するとhydration不一致になるため）
    if (navigator.userAgent === 'ReactSnap') {
      return;
    }
    if (canvasRef.current && !p5InstanceRef.current) {
      p5InstanceRef.current = new p5(sketch, canvasRef.current);
    }

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="fixed inset-0 bg-transparent overflow-hidden"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
    />
  );
};

export default P5Background;
