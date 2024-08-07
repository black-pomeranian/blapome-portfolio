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

          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8 py-2">
            <p>
              嘘の記憶をテーマにした対戦型トレーディングカードゲーム。<br></br>
              存在し得ない状況に置かれた友人（嘘の記憶）が描かれたカードを用いて対戦を行う。<br></br>
              画像は、友人たちの写真を基に作成したLoRAをStableDiffusionに適用して生成した。<br></br>
              このプロセスにて、嘘の記憶は本当の記憶から分岐した存在となる。<br></br>
              全48種類。2023年12月23、みかわや｜コトバコにて販売、プレイ。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8 py-2">
            <p>
            A competitive trading card game based on the theme of false memories.<br></br>
              Players compete against each other using cards depicting friends ( Lie of Memories ) who have been placed in situations that could never exist.<br></br>
              The images were generated by applying LoRA to StableDiffusion, which was created based on photos of friends.<br></br>
              In this process, Lie of Memories become a branch of real memories.<br></br>
              Total 48 types. sold and played at Mikawaya｜Kotobacco on December 23, 2023.<br></br>
            </p>
          </div>

          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              企画、プログラム：Black Pomeranian<br></br>
              デザイン、写真等：岩谷虎之介<br></br>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LieofMemories;
