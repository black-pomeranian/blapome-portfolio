import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">ポートフォリオサイトの開設</h1>
          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="sample" className="img-fluid" />
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

export default Portfolio;
