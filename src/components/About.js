import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const About = () => {
  return (
    <div className="container ">
      <div className="row justify-content-center align-items-start"> 
        <div className="col-md-5"> 
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.png`} 
            alt="profile"
            className="img-fluid" 
          />
        </div>
        <div className="col-md-5 text-light">
          <p className="rubi text-start m-0">ブラックポメラニアン</p>
          <h1 className="about-title text-start mb-3">Black Pomeranian</h1> 

          <p className="profile-jp text-start mb-1 py-2">
            プログラマ、VJ。オーディオビジュアル、XR、インタラクティブ作品等の制作を行う。
            構造の探求と記号の交換による認知の変容をテーマに、表現や技術について実験的なアプローチを実施。
            このアプローチを通じて、文化への貢献を志向している。
          </p>
          <p className="profile-en text-start py-2">
            Programmer and VJ. I create audio-visual, XR and interactive works.
            I implement an experimental approach to expression and technology, based on the theme of cognitive transformation through the exploration of structure and the exchange of symbols.
            Through this approach, he aims to contribute to culture.
          </p>
          <h3 className="about-performance text-start m-0">出演</h3> 
          <div className="performance-jp text-start py-2">
            <p className="performance">
              2027.07.27 EN vol.1 "en"counter (DJ)<br></br>
              2024.05.23 UMBRO 100th Aniversary BENE×UMBRO POPUP STORE RECEPTION PARTY (VJ)<br></br>
              2024.03.30 PLAYGROUND vol.6 (VJ)<br></br>
              2024.02.16 さざれ場#5 (VJ)<br></br>
              2023.08.26 Jack in the box (DJ)<br></br>
              2023.07.15 MID NIGHT ECHORS (VJ)<br></br>
              2023.06.17 RIP CURRENT (DJ)<br></br>
            </p>
          </div>

          <div className="sns">
            <div className="text-start mb-2 py-2"> 
              <ul>
                <li><a href="https://twitter.com/black_pomerania" target="_blank" rel="noopener noreferrer" className="d-block mb-1" ><img src={`${process.env.PUBLIC_URL}/images/Logo/logo-white.png`} alt="X account"className="snsImg" /></a></li>
                <li><a href="https://www.instagram.com/_black_pomeranian/" target="_blank" rel="noopener noreferrer" className="d-block mb-1" ><img src={`${process.env.PUBLIC_URL}/images/Logo/Instagram_Glyph_White.png`} alt="Instagram account"className="snsImg" /></a></li>
                <li><a href="https://github.com/black-pomeranian" target="_blank" rel="noopener noreferrer" className="d-block" ><img src={`${process.env.PUBLIC_URL}/images/Logo/github-mark-white.png`} alt="GitHub account"className="snsImg" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
