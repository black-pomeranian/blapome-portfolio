import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const GenerativeClock = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Generative Clock</h1>
            <p className="text-left date"><time dateTime="2026-11">2026.11</time></p>
          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/GenerativeClock/KV.jpg`} alt="ジェネラティブなコードアートを背景に時刻・気温・天気を表示するデジタル時計「Generative Clock」の画面" className="img-fluid small-image d-block mx-auto py-1" />
            <Link to="/Project/GenerativeClock/clock" className="header-link" aria-label="ブラウザでGenerative Clockを開く">Open Clock</Link>
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              ジェネラティブなコードアートを背景にしたWebのデジタル時計。<br></br>
              時刻とあわせて、現在地の気温と天気をリアルタイムに表示。<br></br>
              画面をクリックすると右上に設定ボタンが現れ、文字の配置・フォント・背景のアートを切り替えられる。<br></br>
              背景はp5.jsで描画し、時刻や天気に反応して変化する。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
              A web-based digital clock set against generative code art.<br></br>
              Along with the time, it shows the current temperature and weather at your location in real time.<br></br>
              Click the screen to reveal a settings button in the top right, where you can change text layout, fonts, and the background artwork.<br></br>
              The background is drawn with p5.js and reacts to the time and weather.<br></br>
            </p>
          </div>
          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All：Black Pomeranian<br></br>
              Weather data：<a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a><br></br>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default GenerativeClock;
