import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AudioVisualBattleSystem = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Audio Visual Battle</h1>
            <p className="text-left date">2024.2</p>
          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/AVBattle/playing.webp`} alt="playing the battle" className="img-fluid py-1" />
            <div class="ratio ratio-16x9"><iframe width='100%' src="https://www.youtube.com/embed/gSeWsXbDG0A?si=u5RboPsXIFQwh89R" title="Playing Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <img src={`${process.env.PUBLIC_URL}/images/AVBattle/System.jpg`} alt="system" className="img-fluid" />
          </div>
        </div>
        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              Audio Visualライブ用に設計されたシステム。<br></br>
              AudioとVisual、それぞれに攻撃と防御、回復のコマンドが割り当てられている。<br></br>
              AudioとVisualはOSCによって連携しており、1つのシーケンサーとして機能し、その枠組みで対戦を行う。<br></br>
              対戦状況はHPとして映像に表示される。<br></br>
              従来のAudio Visualライブは、AudioとVisualの協調によって成立する。<br></br>
              一方このシステムでは、AudioとVisualが競争を行うことで、1つのアウトプットを創る可能性を提示する。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
              System designed for Audio Visual live performance.<br></br>
              Audio and Visual are assigned attack, defense, and recovery commands, respectively.<br></br>
              Audio and Visual are linked by OSC, functioning as a single sequencer and playing against each other within this framework.<br></br>
              The status of the match is displayed on the video as HP.<br></br>
              Conventional Audio Visual Live is established by the coordination of Audio and Visual.<br></br>
              This system, on the other hand, presents the possibility of creating a single output by having Audio and Visual compete with each other.<br></br>
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              映像：Black Pomeranian<br></br>
              音楽：Akinori Maeda<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioVisualBattleSystem;
