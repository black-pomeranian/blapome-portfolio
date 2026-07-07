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
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    isMobile = p.windowWidth <= 768 || /Mobi|Android|iPhone|iPad|iPod/.test(ua);
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

    let spacing = 15;
    let segmentSize = 15;
    let maxWeight = 12;
    let minWeight = 0.5;
    let effectRadius = p.width / 2;

    p.stroke(0);
    for (let x = 0; x <= p.width; x += spacing) {
      for (let y = 0; y <= p.height; y += segmentSize) {
        let dMouse = p.dist(x, y, virtualMouseX, virtualMouseY);
        let dRandom = p.dist(x, y, targetX, targetY);

        let weightMouse = p.map(dMouse, 0, effectRadius, maxWeight, 0);
        let weightRandom = p.map(dRandom, 0, effectRadius, maxWeight, 0);

        let totalWeight = p.constrain(weightMouse + weightRandom + minWeight, minWeight, maxWeight * 1.5);

        if (totalWeight > 0.1) {
          p.strokeWeight(totalWeight);
          p.line(x, y, x, y + segmentSize);
        }
      }
    }

    p.noStroke();
    p.fill(173, 255, 47, 150);
    p.rect(virtualMouseX, virtualMouseY, 20, 20);
    p.fill(173, 255, 47, 150);
    p.rect(targetX, targetY, 20, 20);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const P5Background = () => {
  const canvasRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
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
