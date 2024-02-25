import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LieofMemories = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Lie of Memories</h1>
            <p className="text-left date">2023.12</p>
          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/LieofMemories/logo.jpg`} alt="Lie of Memoriesのロゴ画像" className="img-fluid py-1" />
            <img src={`${process.env.PUBLIC_URL}/images/LieofMemories/card.jpg`} alt="Lie of Memoriesのカードの画像" className="img-fluid py-1" />
            <img src={`${process.env.PUBLIC_URL}/images/LieofMemories/hand.jpg`} alt="Lie of Memoriesの手札の画像" className="img-fluid py-1" />
            <img src={`${process.env.PUBLIC_URL}/images/LieofMemories/playing.jpg`} alt="Lie of Memoriesプレイ中の画像" className="img-fluid py-1" />

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

export default LieofMemories;
