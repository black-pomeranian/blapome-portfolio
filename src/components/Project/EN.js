import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VJSystem = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">EN</h1>
            <p className="text-left date">2024.07</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/EN/EN_graphic.png`} alt="EN's Flyer" className="img-fluid small-image d-block mx-auto py-1" />
            <img src={`${process.env.PUBLIC_URL}/images/EN/EN_sticker.jpg`} alt="EN's Sticker" className="img-fluid small-image d-block mx-auto py-1" />
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              DJパーティ「EN」を開催。<br></br>
              自身でのDJに加え、ビジュアルの制作も実施。<br></br>
              ENのタイトルは、日本語での縁、円、炎、宴、演など多義的な意味、<br></br>
              英語における接頭語として名詞や形容詞と組み合わすことで動詞に変化することを踏まえ、<br></br>
              一面的な事象や概念に囚われない場所という意味で名付けた。<br></br>
              そこから着想を得て、多様な形の円に支持されるロゴや、<br></br>
              数珠のように円の連なりが広がっていく様を象ったメインビジュアルを作成した。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
              I hosted the DJ party "EN".<br></br>
              In addition to performing as a DJ, I also created the visuals.<br></br>
              The title "EN" has multiple meanings in Japanese, such as connection, circle, flame, feast, and performance.<br></br>
              Additionally, in English, the prefix "EN" can transform nouns and adjectives into verbs, highlighting the idea of a place not confined to a single concept or phenomenon.<br></br>
              Inspired by this, I designed the logo supported by various forms of circles, and the main visual symbolizes a chain of circles spreading like a string of beads.<br></br>
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              オーガナイズ、DJ、ビジュアル制作：Black Pomeranian<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VJSystem;
