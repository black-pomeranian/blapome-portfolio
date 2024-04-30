import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VJSystem = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">VJ System</h1>
            <p className="text-left date">2023.6</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/VJSystem/UI.webp`} alt="VJ System's UI" className="img-fluid small-image d-block mx-auto py-1" />
            <img src={`${process.env.PUBLIC_URL}/images/VJSystem/playing.png`} alt="Playing the VJ System" className="img-fluid small-image" />
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              クラブにてVJを実施するために開発したシステム。<br></br>
              リアルタイムに音響を解析し、低音域、中音域、高音域、キックを取得。<br></br>
              解析結果に応じて映像に変化が生じる。<br></br>
              また、Midiコントローラを操作することによる映像素材の切り替えや、UI操作による色調の変化が可能となっている。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
              System developed to perform VJ at clubs.<br></br>
              Acoustics are analyzed in real time to acquire low, mid, and high frequencies and kicks.<br></br>
              The video image changes according to the results of the analysis.<br></br>
              In addition, the video material can be switched by operating the midi controller, and the color tone can be changed by operating the UI.<br></br>
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

export default VJSystem;
