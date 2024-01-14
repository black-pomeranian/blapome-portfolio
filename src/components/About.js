import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-start"> 
        <div className="col-md-5"> 
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.png`} 
            alt="profile"
            className="img-fluid" 
          />
        </div>
        <div className="col-md-5"> 
          <h1 className="about-title text-start"><nobr>𝔅𝔩𝔞𝔠𝔨 𝔓𝔬𝔪𝔢𝔯𝔞𝔫𝔦𝔞𝔫</nobr></h1> 
          <p className="profile-jp text-start">
            プログラマ、VJ。オーディオビジュアル、XR、インタラクティブ作品等の制作を行う。
            認知を変容させる表現をテーマに、表現や技術について実験的なアプローチを実施。
            このアプローチを通じて、文化への貢献を志向している。
          </p>
          <p className="profile-en text-start">
            Programmer and VJ, creating audiovisual, XR, and interactive works.
            He conducts experimental approaches to expression and technology with the theme of expression that transforms perception.
            Through this approach, he aims to contribute to culture.
          </p>
          <div className="sns">
            <div className="text-start mb-2"> 
              <a href="https://twitter.com/black_pomerania" className="d-block mb-2" >X (Twitter)</a>
              <a href="https://www.instagram.com/_black_pomeranian/" className="d-block" >Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
