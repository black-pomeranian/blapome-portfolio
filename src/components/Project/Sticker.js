import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sticker = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">BlackPomeranian ステッカー</h1>
            <p className="text-left date">2025.10</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/Sticker/Sticker_dither.png`} alt="Sticker" className="img-fluid small-image d-block mx-auto py-1 half-size" />
          </div>
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/Sticker/Sticker_desk.jpg`} alt="Sticker on desk" className="img-fluid small-image d-block mx-auto py-1 half-size" />
          </div>
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/Sticker/Sticker.webp`} alt="Sticker Mov" className="img-fluid small-image d-block mx-auto py-1 half-size" />
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              ブラックポメラニアンのステッカー。<br></br>
              アイコンをそのままプリンタしたステッカーと、名刺代わりにもなるステッカーの2種類を作成。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
            Black Pomeranian Stickers. <br></br>
            Available in two types: a standard sticker featuring the icon design, and a multi-purpose sticker that can also be used as a business card.<br></br>
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All：Black Pomeranian<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sticker;
