import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramPost from '../InstagramPost'; // InstagramPost コンポーネントのインポート


const VJSystem = () => {
  

  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">クラブカルチャー起点のVJをグラフィックスへ落とし込む試み</h1>
            <p className="text-left date">2024.4</p>

          </div>
        </div>

        {/* 画像 */}
        <InstagramPost />
        

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              VJでは手動もしくは音の解析結果に連動した形でパラメータが調整された映像を出力する。<br></br>
              そうした映像には、入力された音楽による聴覚的な情報、クラブ内での熱気や高揚感などの内臓感覚的な情報を内包されていると言える。<br></br>
              それをグラフィックに落とし込むことを試みた。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
              The VJ outputs images with parameters adjusted manually or in conjunction with sound analysis results.<br></br>
              Such images contain auditory information from the music input, as well as visceral information such as the heat and exuberance in the club.<br></br>
              I attempted to incorporate this information into the graphics.<br></br>
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

export default VJSystem;
