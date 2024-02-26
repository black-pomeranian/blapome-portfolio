import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AudioVisualBattleSystem = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Audio Visual Battle</h1>
            <p className="text-left date">2024.2</p>
          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/AVBattle/playing.webp`} alt="playing the battle" className="img-fluid" />
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              説明文がここに入ります。
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
              Here is Explanation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioVisualBattleSystem;
