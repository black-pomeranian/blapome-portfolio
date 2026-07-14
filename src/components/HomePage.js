import React from 'react';

const HomePage = () => {
  return (
    <main className="fixed inset-0 z-0 bg-transparent overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent">
          <div className="text-center text-white bg-transparent">
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
            <nav className="mt-12 flex justify-center gap-6 bg-transparent home-links" aria-label="メインコンテンツへのリンク">
              <a href="/about" className="text-lg sm:text-xl text-white hover:underline">About</a>
              <a href="/project" className="text-lg sm:text-xl text-white hover:underline">Project</a>
              <a href="/performance" className="text-lg sm:text-xl text-white hover:underline">Performance</a>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
