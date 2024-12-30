import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const About = () => {
  return (
    <div className="container ">
      <div className="flex flex-col justify-content-center align-items-center">
        <h1 className="mb-12 text-light text-6xl">Black Pomeranian</h1> 
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.png`} 
            alt="profile"
            className="img-fluid" 
          />
      </div>
      <div className="flex justify-content-center ">
        <p className="profile-jp text-base p-8 my-4 mx-1 bg-green-500">
          米田凌。
          プログラマー、VJ。サッカー、クラブカルチャー、認知科学をバックグラウンドに持つ。
          これらの文脈を起点に、コードを用いた映像の制作、インタラクションを伴うシステムの開発、アイデアのプロトタイピングなどを行う。
          また、イベント"EN"の主催も行う。
          上記の活動を通じて、文化への貢献と実験的で寛容な場所の醸成を目指している。
        </p>
        <p className="profile-en text-base p-8 my-4 mx-1 bg-green-500">
          Ryo Yoneda.
          I am a programmer and VJ with a background in football, club culture, and cognitive science. 
          I create visuals through coding, develop interactive systems, and prototype ideas. 
          I also organize the event "EN." 
          Through these activities, I aim to contribute to culture and foster experimental and inclusive spaces.          
        </p>
      </div>
      <div className="flex flex-col justify-content-center align-items-center">
        <div className="sns">
          <div className="text-start mb-2 py-2"> 
            <ul>
              <li><a href="https://twitter.com/black_pomerania" target="_blank" rel="noopener noreferrer" className="d-block mb-1" ><img src={`${process.env.PUBLIC_URL}/images/Logo/logo-white.png`} alt="https://twitter.com/black_pomerania"className="snsImg" /></a></li>
              <li><a href="https://www.instagram.com/_black_pomeranian/" target="_blank" rel="noopener noreferrer" className="d-block mb-1" ><img src={`${process.env.PUBLIC_URL}/images/Logo/Instagram_Glyph_White.png`} alt="https://www.instagram.com/_black_pomeranian/"className="snsImg" /></a></li>
              <li><a href="https://github.com/black-pomeranian" target="_blank" rel="noopener noreferrer" className="d-block" ><img src={`${process.env.PUBLIC_URL}/images/Logo/github-mark-white.png`} alt="https://github.com/black-pomeranian"className="snsImg" /></a></li>
              <li><a href="mailto:black.pomera@gmail.com" rel="noopener noreferrer" className="d-block mb-1"><img src={`${process.env.PUBLIC_URL}/images/Logo/mail.png`} alt="black.pomera@gmail.com" className="snsImg"/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
