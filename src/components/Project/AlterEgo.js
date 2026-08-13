import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlterEgo = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Kommune 「ALTerEGO」ジャケット</h1>
            <p className="text-left date"><time dateTime="2025-03">2026.08</time></p>

          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/ALTerEGO/front.png`} alt="Kommune 「ALTerEGO」ジャケットのデザイン" className="img-fluid small-image d-block mx-auto py-1 half-size" />
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              Kommune 「ALTerEGO」ジャケットのデザインを制作。<br></br>
              クラブリミックスを収録したEPということで、ダークさをベースに、古典的な要素と現代的な処理を融合させた。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
            Designed the jacket for Kommune's "ALTerEGO".<br></br>
            Since it is an EP that includes club remixes, I based the design on a dark theme, blending classical elements with contemporary processing.<br></br>
            </p>
          </div>
          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              デザイン：Black Pomeranian<br></br>
              音楽：Kommune<br></br>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default AlterEgo;
