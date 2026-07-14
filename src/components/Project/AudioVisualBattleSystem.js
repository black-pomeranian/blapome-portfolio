import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AudioVisualBattleSystem = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Audio Visual Battle</h1>
            <p className="text-left date"><time dateTime="2024-02">2024.2</time></p>
          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/AVBattle/playing.webp`} alt="Audio Visual Battle Systemを使い、音と映像が対戦するライブパフォーマンスの様子" className="img-fluid py-1" />
            <div className="ratio ratio-16x9"><iframe width='100%' src="https://www.youtube.com/embed/gSeWsXbDG0A?si=u5RboPsXIFQwh89R" title="Audio Visual Battle System 実演動画（YouTube）" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
            <img src={`${process.env.PUBLIC_URL}/images/AVBattle/System.jpg`} alt="OSC連携で音と映像を1つのシーケンサーとして機能させるAudio Visual Battleのシステム構成図" className="img-fluid" />
          </div>
        </section>
        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              Audio Visualライブ用に設計されたシステム。<br></br>
              AudioとVisual、それぞれに攻撃と防御、回復のコマンドが割り当てられている。<br></br>
              AudioとVisualはOSCによって連携しており、1つのシーケンサーとして機能し、その枠組みで対戦を行う。<br></br>
              対戦状況はHPとして映像に表示される。<br></br>
              従来のAudio Visualライブは、AudioとVisualの協調によって成立する。<br></br>
              一方このシステムでは、AudioとVisualが競争を行うことで、1つのアウトプットを創る可能性を提示する。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
              System designed for Audio Visual live performance.<br></br>
              Audio and Visual are assigned attack, defense, and recovery commands, respectively.<br></br>
              Audio and Visual are linked by OSC, functioning as a single sequencer and playing against each other within this framework.<br></br>
              The status of the match is displayed on the video as HP.<br></br>
              Conventional Audio Visual Live is established by the coordination of Audio and Visual.<br></br>
              This system, on the other hand, presents the possibility of creating a single output by having Audio and Visual compete with each other.<br></br>
            </p>
          </div>
          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              映像：Black Pomeranian<br></br>
              音楽：Akinori Maeda<br></br>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default AudioVisualBattleSystem;
