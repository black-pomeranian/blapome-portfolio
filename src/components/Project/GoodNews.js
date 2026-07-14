import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GOODNEWS = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">GOODNEWS リール動画</h1>
            <p className="text-left date"><time dateTime="2025-10">2025.10</time></p>

          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/GOODNEWS/KV.png`} alt="静岡県で開催されたパーティー「GOODNEWS」告知リール動画のキービジュアル" className="img-fluid small-image d-block mx-auto py-1" />
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              静岡県で開催されたパーティー「GOODNEWS」の告知用リール。<br></br>
              演者の楽曲を利用した2パターンを作成。<br></br>
              詳細はInstagramにて公開中。<br></br>
              <a href="https://www.instagram.com/reel/DOkjuAdD_e5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">動画①</a><br></br>
              <a href="https://www.instagram.com/reel/DOQivgbj-EI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">動画②</a><br></br>

            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
            A promotional reel for the party "GOODNEWS" held in Shizuoka Prefecture.<br></br>
            Two versions were created using tracks from the performers.<br></br>
            Details are available on Instagram.<br></br>
            <a href="https://www.instagram.com/reel/DOkjuAdD_e5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Video ①</a><br></br>
            <a href="https://www.instagram.com/reel/DOQivgbj-EI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Video ②</a><br></br>
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

export default GOODNEWS;
