import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DogDetection = () => {
  const imgs = [
    'dog-1-17.webp',
    'dog-1-9.webp',
    'dog-1-10.webp',
    'dog-1-14.webp',
    'dog-1-15.webp',
    'dog-1-16.webp',
    'dog-1-18.webp',
    'dog-1-20.webp',
    'dog-1-5.webp',
  ];

  return (
    <div className="container">
      <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Dog Detection</h1>
            <p className="text-left date">2026.03</p>
          </div>
        </div>



        {/* ギャラリー（3列） */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-10">
            <div className="row">
              {imgs.map(name => (
                <div key={name} className="col-4 mb-3 text-center">
                  <img src={`${process.env.PUBLIC_URL}/images/DogDetection/${name}`} alt={name} className="img-fluid d-block mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              犬のデータセットを用いて、ニューラルネットワークを構築。<br></br>
              これをTouchDesignerでリアルタイムに動かし、検出の可視化やアノテーションの実験を行った。
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
              Using a dog dataset, I built a neural network. <br></br>
              I ran this in real-time with TouchDesigner, experimenting with visualization of detection and annotation.
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All: Black Pomeranian
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogDetection;
