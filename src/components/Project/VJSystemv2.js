import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VJSystem = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">VJ System v.2</h1>
            <p className="text-left date"><time dateTime="2023-06">2026.01</time></p>

          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/VJSystemv2/vjSystem.gif`} alt="自作VJソフトウェアv.2のUI画面。音響解析に反応するボタン・スライダーと映像プレビュー" className="img-fluid small-image d-block mx-auto py-1" />
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              クラブにてVJを実施するために開発したシステムを更新しました。<br></br>
              詳細は、noteにて公開しています。<br></br>
              <a href="https://note.com/black_pomeranian/n/nb7a3d37a6d9f" target="_blank" rel="noopener noreferrer">noteへのリンク</a><br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
              The system developed for VJing in a club has been updated.<br></br>
              Details are available on note.<br></br>
              <a href="https://note.com/black_pomeranian/n/nb7a3d37a6d9f" target="_blank" rel="noopener noreferrer">Link to note</a><br></br>
            </p>
          </div>
          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All：Black Pomeranian<br></br>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default VJSystem;
