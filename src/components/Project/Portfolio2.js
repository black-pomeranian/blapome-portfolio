import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio2 = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Webサイトの更新</h1>
            <p className="text-left date">2026.1</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <video className="img-fluid small-image d-block mx-auto py-1 " controls loop muted playsInline>
              <source src={`${process.env.PUBLIC_URL}/images/Portfolio2/portfolio2.mp4`} type="video/mp4" />
              お使いのブラウザは動画タグに対応していません。
            </video>          
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              Black Pomeranianのポートフォリオ用Webサイトの更新。<br></br>
              背景には、黒いポメラニアンを模した自由に動く黒い影を表示。<br></br>
              黒い影は、PC版ではマウスと部分的に連動し、モバイル版では完全にランダムに動く。<br></br>
              黒い影の場所によっては読みたい箇所が自由に読めない様で、野生を表現。<br></br>

            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
              Updating the portfolio website for Black Pomeranian.<br></br>
              The background features a freely moving black shadow modeled after a black Pomeranian.<br></br>
              On the PC version, the black shadow partially interacts with the mouse, while on the mobile version, it moves completely randomly.<br></br>
              Depending on the position of the black shadow, certain sections may be obscured, representing its wild nature.<br></br>
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

export default Portfolio2;
