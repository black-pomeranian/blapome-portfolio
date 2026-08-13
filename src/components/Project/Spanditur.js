import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Spanditur = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Spanditur</h1>
            <p className="text-left date">2026.08</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/spanditur/spanditur_1.png`} alt="spanditur_1" className="img-fluid small-image d-block mx-auto py-1 " />
          </div>
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/spanditur/spanditur_2.png`} alt="spanditur_2" className="img-fluid small-image d-block mx-auto py-1 " />
          </div>
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/spanditur/spanditur_3.png`} alt="spanditur_3" className="img-fluid small-image d-block mx-auto py-1" />
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              TouchDesignerを触っていると、こんなノードがあるといいなって思うことがある。<br></br>
              Pythonやシェーダーも書けるし、最近はClaudeをMCP経由で呼び出したりとかできるけど、それも提供されたプラットフォームの周辺をうろうろ歩いてる感じがしてスッキリしない。<br></br>
              だから、ノードを自作できるTouchDesignerみたいなのを作ってみた。<br></br>
              コードが書けない人も、AIとのチャットで欲しいノードを作れる。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
            When using TouchDesigner, there are times when I wish for certain nodes to exist. <br></br>
            While I can write Python and shaders, and even call Claude via MCP recently, it still feels like I'm just wandering around the provided platform, which isn't very satisfying. <br></br>
            So, I decided to create a TouchDesigner-like environment where I can create my own nodes. <br></br>
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All：Black Pomeranian<br></br>
            </p>
            <p>
              GitHub: <a href="https://github.com/black-pomeranian/vj-web-app" target="_blank" rel="noopener noreferrer">https://github.com/black-pomeranian/vj-web-app</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spanditur;
