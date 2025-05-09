import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FFF = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">5 FEET FARMロゴ</h1>
            <p className="text-left date">2025.03</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/FFF/FFF.png`} alt="FFF's logo" className="img-fluid small-image d-block mx-auto py-1 half-size" />
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

export default FFF;
