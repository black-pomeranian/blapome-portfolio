import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AudioVisualBattleSystem = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">BENE Dream Football</h1>
            <p className="text-left date">2025.5</p>
          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <video controls src={`${process.env.PUBLIC_URL}/images/DreamFootball/bene-game.mp4`} alt="Playing Video" className="img-fluid py-1" />
            <Link to="/Project/DreamFootball/game" className="header-link" >Play</Link>
          </div>
        </div>
        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              Football Game for BENE(<a href="https://www.instagram.com/bene.ec/">@bene.ec</a>)<br></br>
              bene fc(<a href="https://www.instagram.com/bene.ec/">@bene.fc</a>)のユニフォームを着たプレイヤーで遊べるPKゲーム。<br></br>
              5月10日に4BFC(<a href="https://www.instagram.com/4bfc_tokyo/">@4bfc_tokyo</a>)2周年イベントにて展示。<br></br>
              グラフィックスはPS1をモチーフにして、オリジナルのローポリのモデルを作成。<br></br>
              グラフィックスや解像度も可能な限り再現。<br></br>
              ゲームシステムからデザインまで作成。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
               Football Game for BENE(<a href="https://www.instagram.com/bene.ec/">@bene.ec</a>)<br></br>
               A PK game where you can play as a player wearing the bene fc (<a href="https://www.instagram.com/bene.ec/">@bene.fc</a>) uniform.<br></br>
              Exhibited on May 10th at the 4BFC (<a href="https://www.instagram.com/4bfc_tokyo/">@4bfc_tokyo</a>) 2nd anniversary event.<br></br>
              Graphics inspired by the PS1, with original low-poly models created.<br></br>
              Graphics and resolution faithfully reproduced as much as possible.<br></br>
              Everything from game system to design was created from scratch.<br></br>
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              ディレクター、開発（ビジュアル）、デザイン：Black Pomeranian<br></br>
              開発（Uゲームロジック）：maruken<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioVisualBattleSystem;
