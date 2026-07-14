import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio2 = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Webサイトの更新</h1>
            <p className="text-left date"><time dateTime="2026-01">2026.1</time></p>

          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <video className="img-fluid small-image d-block mx-auto py-1 " controls loop muted playsInline aria-label="p5.jsで実装した黒いポメラニアンの影が動くポートフォリオサイト背景のデモ動画">
              <source src={`${process.env.PUBLIC_URL}/images/Portfolio2/portfolio2.mp4`} type="video/mp4" />
              お使いのブラウザは動画タグに対応していません。
            </video>
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              Black Pomeranianのポートフォリオ用Webサイトの更新。<br></br>
              背景には、黒いポメラニアンを模した自由に動く黒い影を表示。<br></br>
              黒い影は、PC版ではマウスと部分的に連動し、モバイル版では完全にランダムに動く。<br></br>
              黒い影の場所によっては読みたい箇所が自由に読めない様で、野生を表現。<br></br>

            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
              Updating the portfolio website for Black Pomeranian.<br></br>
              The background features a freely moving black shadow modeled after a black Pomeranian.<br></br>
              On the PC version, the black shadow partially interacts with the mouse, while on the mobile version, it moves completely randomly.<br></br>
              Depending on the position of the black shadow, certain sections may be obscured, representing its wild nature.<br></br>
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

export default Portfolio2;
