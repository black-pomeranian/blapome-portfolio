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
            米田凌。
            プログラマー、VJ。サッカー、クラブカルチャー、認知科学をバックグラウンドに持つ。
            これらの文脈を起点に、コードを用いた映像の制作、インタラクションを伴うシステムの開発、アイデアのプロトタイピングなどを行う。
            また、イベント"EN"の主催も行う。
            上記の活動を通じて、文化への貢献と実験的で寛容な場所の醸成を目指している。
          </p>
          <p className="profile-en text-start py-2">
          Ryo Yoneda.
          I am a programmer and VJ with a background in football, club culture, and cognitive science. 
          I create visuals through coding, develop interactive systems, and prototype ideas. 
          I also organize the event "EN." 
          Through these activities, I aim to contribute to culture and foster experimental and inclusive spaces.          </p>

          <div className="sns">
            <div className="text-start mb-2 py-2"> 
              <ul>
                <li><a href="https://twitter.com/black_pomerania" target="_blank" rel="noopener noreferrer" className="d-block mb-1" ><img src={`${process.env.PUBLIC_URL}/images/Logo/logo-white.png`} alt="X account"className="snsImg" /></a></li>
                <li><a href="https://www.instagram.com/_black_pomeranian/" target="_blank" rel="noopener noreferrer" className="d-block mb-1" ><img src={`${process.env.PUBLIC_URL}/images/Logo/Instagram_Glyph_White.png`} alt="Instagram account"className="snsImg" /></a></li>
                <li><a href="https://github.com/black-pomeranian" target="_blank" rel="noopener noreferrer" className="d-block" ><img src={`${process.env.PUBLIC_URL}/images/Logo/github-mark-white.png`} alt="GitHub account"className="snsImg" /></a></li>
              </ul>
            </div>
          </div>

          <h3 className="about-performance text-start m-0 pt-2">出演</h3> 
          <div className="performance-jp text-start py-2">
            <ul className="performance list-unstyled space-y-8">
              <li className="py-1">2024.10.07 EN Volume.2 - encircle - (DJ/VJ)</li>
              <li className="py-1">2024.10.07 PLAYGROUND vol.7 (VJ)</li>
              <li className="py-1">2024.08.23 BENE×UMBRO POP UP STORE Mikawaya - Hamamatsu (VJ)</li>
              <li className="py-1">2024.07.27 EN vol.1 "en"counter (DJ)</li>
              <li className="py-1">2024.05.23 UMBRO 100th Anniversary BENE×UMBRO POPUP STORE RECEPTION PARTY (VJ)</li>
              <li className="py-1">2024.03.30 PLAYGROUND vol.6 (VJ)</li>
              <li className="py-1">2024.02.16 さざれ場#5 (VJ)</li>
              <li className="py-1">2023.08.26 Jack in the box (DJ)</li>
              <li className="py-1">2023.07.15 MID NIGHT ECHORS (VJ)</li>
              <li className="py-1">2023.06.17 RIP CURRENT (DJ)</li>
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default About;
