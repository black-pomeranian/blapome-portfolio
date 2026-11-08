import React from 'react';

const HomePage = () => {
  return (
    // transform / z-index で重なりコンテキストを作らないよう flex で中央寄せ
    // （タイトルの mix-blend-mode を背景キャンバスに効かせるため）
    <main className="absolute inset-0 overflow-hidden flex items-center justify-center">
      <div>
        <div>
          <div className="text-center">
            {/* h1のブラウザ既定スタイル（margin, font-weight）を打ち消し、従来のspanと同一の見た目を維持 */}
            <h1 className="home-title-text" style={{ margin: 0, fontWeight: 400 }}>
              Black Pomeranian
            </h1>
            {/* 視覚には表示されないが、検索エンジン・AI・スクリーンリーダーに人物概要を伝える */}
            <p className="visually-hidden">
              Black Pomeranian（ブラックポメラニアン）は東京拠点のVJ / DJ / クリエイティブプログラマー。
              自作VJソフトウェアによる音響解析×リアルタイムレンダリングの映像演出、
              インスタレーション・Web・ゲーム・AI・VRのインタラクティブ開発を行う。
            </p>
            <p className="home-sub" aria-hidden="true">Programmer / VJ / DJ — Tokyo</p>
            <nav className="home-links" aria-label="メインコンテンツへのリンク">
              <a href="/about">About</a>
              <a href="/project">Project</a>
              <a href="/performance">Performance</a>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
