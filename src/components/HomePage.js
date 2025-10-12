import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

// ----------------------------------------------------
// 1. p5.jsのスケッチ関数を定義 (インスタンスモード)
// ----------------------------------------------------
const sketch = (p) => {
  let pawprints = [];
  const MAX_AGE = 90;   // 足跡が完全に消えるまでのフレーム数 (約1.5秒)
  let isLeftPaw = true; 
  const distanceThreshold = 25; 
  let isSetupComplete = false; // エラー対策: セットアップ完了フラグ

  p.setup = () => {
    // p.windowWidthとp.windowHeightはビューポートサイズを参照するため、
    // 親コンテナ（React側）をビューポート全体に広げることで全画面表示を実現
    p.createCanvas(p.windowWidth, p.windowHeight); 
    p.background('#111111');
    p.noStroke();
    
    p.textSize(30); 
    p.textAlign(p.CENTER, p.CENTER); 
    
    // セットアップ完了
    isSetupComplete = true; 
  };

  p.draw = () => {
    p.background('#111111'); 

    // 1. 新しい足跡の追加ロジック
    // 最後に記録された足跡の位置を取得
    const lastPaw = pawprints.length > 0 ? pawprints[pawprints.length - 1] : { x: p.pmouseX, y: p.pmouseY };

    // マウスが一定距離以上移動した場合に新しい足跡を記録
    if (p.dist(p.mouseX, p.mouseY, lastPaw.x, lastPaw.y) > distanceThreshold) {
      
      let angle = p.atan2(p.mouseY - lastPaw.y, p.mouseX - lastPaw.x);
      
      let newPaw = {
        x: p.mouseX,
        y: p.mouseY,
        birthFrame: p.frameCount,
        // 進行方向に向きを合わせるための角度調整
        angle: angle + p.PI / 2,  
        isFlipped: isLeftPaw     
      };
      pawprints.push(newPaw);

      // 次の足跡のためにフラグを反転
      isLeftPaw = !isLeftPaw;
    }

    // 2. 足跡の描画とフェードアウト、削除処理
    for (let i = pawprints.length - 1; i >= 0; i--) {
      let paw = pawprints[i];
      let age = p.frameCount - paw.birthFrame;
      
      // 透明度の計算 (map: 0-MAX_AGE を 255-0 に変換)
      let alpha = p.map(age, 0, MAX_AGE, 255, 0);
      
      // 寿命が尽きた足跡を配列から削除
      if (age > MAX_AGE) {
        pawprints.splice(i, 1);
        continue;
      }

      drawEmojiPawprint(p, paw.x, paw.y, paw.angle, alpha, paw.isFlipped);
    }
  };

  // 3. 絵文字の足跡を描画するカスタム関数
  const drawEmojiPawprint = (p, x, y, angle, alpha, isFlipped) => {
    p.push(); 

    p.translate(x, y); 
    p.rotate(angle);    

    if (isFlipped) {
      p.scale(-1, 1); // 左右反転を適用
    }

    // 透明度を適用したグレースケールで描画
    p.fill(200, 200, 200, alpha); 
    p.text('🐾', 0, 0); 

    p.pop(); 
  };
  
  // 4. ウィンドウサイズ変更時の処理 
  p.windowResized = () => {
    if (isSetupComplete) { 
      // ウィンドウサイズに合わせてキャンバスをリサイズ
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      p.background('#111111'); 
    }
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
