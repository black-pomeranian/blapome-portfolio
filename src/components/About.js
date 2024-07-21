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
            プログラマ、VJ、DJ。オーディオビジュアル、インタラクティブ作品等を制作。
            創造や空想を実現するための手法としてテクノロジーを定義し開発を行う。
            クラブカルチャーをはじめとした文化への貢献、実験的で寛容な場所の醸成を目指している。
          </p>
          <p className="profile-en text-start py-2">
          Programmer, VJ, DJ. I create audiovisual and interactive works. 
          I define and develop technology as a method to realize creativity and imagination. 
          I aim to contribute to culture, including club culture, and foster experimental and inclusive spaces.
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
