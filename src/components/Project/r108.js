import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const r108 = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">r108 動画フライヤー</h1>
            <p className="text-left date">2025.12</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/r108/KV.png`} alt="r108's flyer" className="img-fluid small-image d-block mx-auto py-1 half-size" />
            <video className="img-fluid small-image d-block mx-auto py-1 half-size" controls loop muted playsInline>
              <source src={`${process.env.PUBLIC_URL}/images/r108/r108_flyer_1203.mp4`} type="video/mp4" />
              お使いのブラウザは動画タグに対応していません。
            </video>

          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              クリエイティブコレクティブ「5 FEET FARM」のロゴを制作。<br></br>
              コレクティブ名にもあるファームを定義する檻をモチーフにした。<br></br>
              さらに、クライアントのリクエストや同時代性の強調のために、クロムタイプっぽさを付与した。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
            Created the logo for the creative collective "5 FEET FARM".<br></br>
            The design is inspired by a cage, symbolizing the "farm" referenced in the collective's name.<br></br>
            Additionally, a chrome-like style was added to reflect the client's request and emphasize a contemporary feel.<br></br>
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              デザイン・3Dモデル制作：Black Pomeranian<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default r108;
