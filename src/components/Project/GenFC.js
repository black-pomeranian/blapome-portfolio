import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GenFC = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">GenFC</h1>
            <p className="text-left date">2024.07</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
          <img src={`${process.env.PUBLIC_URL}/images/GenFC/GenFC1.webp`} alt="GenFC movie 1" className="img-fluid small-image d-block mx-auto py-1" />
          <img src={`${process.env.PUBLIC_URL}/images/GenFC/GenFC2.webp`} alt="GenFC movie 2" className="img-fluid small-image d-block mx-auto py-1" />
          <img src={`${process.env.PUBLIC_URL}/images/GenFC/GenFC3.webp`} alt="GenFC movie 3" className="img-fluid small-image d-block mx-auto py-1" />
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              <br></br>
              生成的な手続き（Generative）で作成されたサッカーチームのユニフォーム。<br></br>
              統一感を持ちつつ、変数によって微妙に異なる柄で個性を出すユニフォームを提案。<br></br>
              サッカーアパレルのポップアップで行われたイベントにて、VJでの映像演出としても使用した。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
                Uniforms for a soccer team created using generative procedures. <br></br>
                Proposing uniforms that maintain a sense of unity while showcasing individuality through subtly varying patterns influenced by variables. <br></br>
                Also used as a visual presentation for VJ performances at an event held at a soccer apparel pop-up. <br></br>
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

export default GenFC;
