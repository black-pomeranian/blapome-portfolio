import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AudioVisualBattleSystem = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">BENE Dream Football</h1>
            <p className="text-left date"><time dateTime="2025-05">2025.5</time></p>
          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <video controls src={`${process.env.PUBLIC_URL}/images/DreamFootball/bene-game.mp4`} aria-label="BENE Dream Football（PS1風グラフィックスのUnity製PKゲーム）のプレイ動画" className="img-fluid py-1" />
            <Link to="/Project/DreamFootball/game" className="header-link" aria-label="ブラウザでBENE Dream Footballをプレイする">Play</Link>
          </div>
        </section>
        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              Football Game for BENE(<a href="https://www.instagram.com/bene.ec/">@bene.ec</a>)<br></br>
              bene fc(<a href="https://www.instagram.com/bene.ec/">@bene.fc</a>)のユニフォームを着たプレイヤーで遊べるPKゲーム。<br></br>
              5月10日に4BFC(<a href="https://www.instagram.com/4bfc_tokyo/">@4bfc_tokyo</a>)2周年イベントにて展示。<br></br>
              グラフィックスはPS1をモチーフにして、オリジナルのローポリのモデルを作成。<br></br>
              グラフィックスや解像度も可能な限り再現。<br></br>
              ゲームシステムからデザインまで作成。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
               Football Game for BENE(<a href="https://www.instagram.com/bene.ec/">@bene.ec</a>)<br></br>
               A PK game where you can play as a player wearing the bene fc (<a href="https://www.instagram.com/bene.ec/">@bene.fc</a>) uniform.<br></br>
              Exhibited on May 10th at the 4BFC (<a href="https://www.instagram.com/4bfc_tokyo/">@4bfc_tokyo</a>) 2nd anniversary event.<br></br>
              Graphics inspired by the PS1, with original low-poly models created.<br></br>
              Graphics and resolution faithfully reproduced as much as possible.<br></br>
              Everything from game system to design was created from scratch.<br></br>
            </p>
          </div>
          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              ディレクター、開発（ビジュアル）、デザイン：Black Pomeranian<br></br>
              開発（Uゲームロジック）：maruken<br></br>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default AudioVisualBattleSystem;
