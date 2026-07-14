import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Webサイトの開設</h1>
          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/Portfolio/site.png`} alt="Black Pomeranianのポートフォリオサイト初期バージョンのスクリーンショット" className="img-fluid" />
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              Webサイトを開設しました。<br></br>
              よろしくお願いいたします。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
              Web site is now open.<br></br>
              Please take a look at it.<br></br>
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

export default Portfolio;
