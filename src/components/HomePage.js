import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

// ----------------------------------------------------
// 1. p5.jsのスケッチ関数を定義 (インスタンスモード)
// ----------------------------------------------------
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

    // 1. ランダムウォークの座標更新
    targetX = p.noise(tx) * p.width;
    targetY = p.noise(ty) * p.height;
    tx += 0.005;
    ty += 0.005;

    // 2. 線のパターンの描画
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

    // 3. マウスとランダムウォークの位置に四角を描画
    p.noStroke();
    p.fill(173, 255, 47, 150); // 半透明の緑

    p.rect(p.mouseX, p.mouseY, 20, 20);
    p.fill(173, 255, 47, 150);
    p.rect(targetX, targetY, 20, 20);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

// ----------------------------------------------------
// 2. Reactコンポーネント (DOM要素へのマウントとクリーンアップ)
// ----------------------------------------------------
const HomePage = () => {
  const canvasRef = useRef(); // p5キャンバスをマウントするコンテナ
  const p5InstanceRef = useRef(null); 

  useEffect(() => {
    // マウント時: p5.jsインスタンスを生成
    if (canvasRef.current && !p5InstanceRef.current) {
        p5InstanceRef.current = new p5(sketch, canvasRef.current);
    }

    // アンマウント時: p5.jsインスタンスを破棄 (クリーンアップ)
    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  return (
    // 【主要な修正点】最上位コンテナをビューポート全体に広げる (fixed inset-0)。
    // これにより、p5.jsが参照するp.windowWidth/Heightが実質的な描画領域全体となります。
    <div className="fixed inset-0 z-0 bg-gray-900 overflow-hidden">

      {/* home-page-containerはp5キャンバスと画像を重ねるためのコンテナとして、画面全体を占めます */}
      <div className="w-full h-full relative">
        
        {/* 1. p5.jsキャンバスを配置するコンテナ (背景レイヤー) 
             親要素いっぱいに広げるために絶対配置に設定
        */}
        <div 
          ref={canvasRef} 
          className="absolute inset-0 p5-canvas-wrapper"
        />

        {/* 2. 画像を配置する要素 (前景レイヤー) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/images/HomePage/blapome.png" // publicフォルダ直下からの相対パス
            alt="Blapome"
            className="blapome-image max-w-full max-h-full object-contain"
          />
        </div>
      </div>

    </div>

  );
};

export default HomePage;
