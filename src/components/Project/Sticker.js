import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sticker = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">BlackPomeranian ステッカー</h1>
            <p className="text-left date"><time dateTime="2025-10">2025.10</time></p>

          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/Sticker/Sticker_dither.png`} alt="Black Pomeranianのアイコンをディザ加工したステッカーのデザイン" className="img-fluid small-image d-block mx-auto py-1 half-size" />
          </div>
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/Sticker/Sticker_desk.jpg`} alt="机の上に置かれたBlack Pomeranianステッカーの実物写真" className="img-fluid small-image d-block mx-auto py-1 half-size" />
          </div>
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/Sticker/Sticker.webp`} alt="名刺代わりにも使えるBlack Pomeranianステッカーのモーション映像" className="img-fluid small-image d-block mx-auto py-1 half-size" />
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              ブラックポメラニアンのステッカー。<br></br>
              アイコンをそのままプリンタしたステッカーと、名刺代わりにもなるステッカーの2種類を作成。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
            Black Pomeranian Stickers. <br></br>
            Available in two types: a standard sticker featuring the icon design, and a multi-purpose sticker that can also be used as a business card.<br></br>
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

export default Sticker;
