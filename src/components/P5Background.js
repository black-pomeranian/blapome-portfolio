import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const sketch = (p) => {
  let targetX, targetY;
  let tx = 0;
  let ty = 10000;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    targetX = p.width / 2;
    targetY = p.height / 2;
    p.rectMode(p.CENTER);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);

    targetX = p.noise(tx) * p.width;
    targetY = p.noise(ty) * p.height;
    tx += 0.005;
    ty += 0.005;

    let spacing = 15;
    let segmentSize = 15;
    let maxWeight = 12;
    let minWeight = 0.5;
    let effectRadius = p.width / 2;

    p.stroke(0);
    for (let x = 0; x <= p.width; x += spacing) {
      for (let y = 0; y <= p.height; y += segmentSize) {
        let dMouse = p.dist(x, y, p.mouseX, p.mouseY);
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
    p.rect(p.mouseX, p.mouseY, 20, 20);
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
