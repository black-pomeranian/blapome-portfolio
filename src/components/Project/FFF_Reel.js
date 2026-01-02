import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FFF_Real = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">5 FEET FARM リール動画</h1>
            <p className="text-left date">2025.06</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <video className="img-fluid small-image d-block mx-auto py-1 half-size" controls loop muted playsInline>
              <source src={`${process.env.PUBLIC_URL}/images/FFF_Reel/reel.mp4`} type="video/mp4" />
              お使いのブラウザは動画タグに対応していません。
            </video>
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              ビートメーカーKonfigによる楽曲に合わせたビジュアライザー動画。<br></br>
              楽曲情報を分析し、変化するエフェクトを開発し、作成した。<br></br>
              <a href="https://www.instagram.com/p/DLMkY1AOPFB/">Instagram</a>にて全編公開中。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
              A visualizer video synchronized to a track by beatmaker Konfig.<br></br>
              Developed and created effects that change in response to analyzed track information.<br></br>
              Available on <a href="https://www.instagram.com/p/DLMkY1AOPFB/">Instagram</a>.<br></br>
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              楽曲：Konfig<br></br>
              動画：Black Pomeranian<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FFF_Real;
