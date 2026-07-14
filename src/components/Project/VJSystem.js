import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VJSystem = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">VJ System</h1>
            <p className="text-left date"><time dateTime="2023-06">2023.6</time></p>

          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/VJSystem/UI.webp`} alt="自作VJソフトウェアのUI画面。音響解析に反応するボタン・スライダーと映像プレビュー" className="img-fluid small-image d-block mx-auto py-1" />
            <img src={`${process.env.PUBLIC_URL}/images/VJSystem/params.webp`} alt="MIDIコントローラと連動してパラメータを操作するVJシステムの画面" className="img-fluid small-image" />
            <img src={`${process.env.PUBLIC_URL}/images/VJSystem/playing.png`} alt="クラブで自作VJシステムを使いリアルタイム映像演出を行うパフォーマンスの様子" className="img-fluid small-image" />
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              クラブにてVJを実施するために開発したシステム。<br></br>
              ボタンやスライダーの操作に対応して、UIの装飾も変化する。<br></br>
              映像を音楽に合わせる楽しさに加え、VJプレイ自体の楽しさ・気持ちよさへのサポートも試みた。<br></br>
              また、Midiコントローラでの操作とUIでの操作を、シームレスに切り替えが可能。<br></br>
              音声入力は、解析ソフトのSound2LightからのOSC受信と、マイク入力が選択可能。<br></br>
              その場に応じた最適な手法を選択することができる。<br></br>
              音声の解析結果に応じて映像に変化が生じる。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
              A system developed for VJing in a club.<br></br>
              The UI decorations change in response to the operation of buttons and sliders.<br></br>
              In addition to the fun of synchronizing visuals with music, we also aimed to support the enjoyment and satisfaction of VJing itself.<br></br>
              Furthermore, it is possible to seamlessly switch between operating with a MIDI controller and the UI.<br></br>
              For audio input, you can choose between receiving OSC from the analysis software Sound2Light and using a microphone input.<br></br>
              You can select the optimal method according to the situation.<br></br>
              The visuals change according to the analysis results of the audio.<br></br>
            </p>
          </div>
          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All：Black Pomeranian<br></br>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default VJSystem;
