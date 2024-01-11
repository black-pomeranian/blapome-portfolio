import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-start"> {/* 行を作成し、アイテムを上揃えにします */}
        <div className="col-md-6"> {/* 左側のカラム */}
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.png`} 
            alt="profile"
            className="img-fluid" // 画像がコンテナの幅に合わせて調整されるようにします
          />
        </div>
        <div className="col-md-6"> {/* 右側のカラム */}
          <h1 className="text-start">Black Pomeranian</h1> {/* タイトルを左揃えにします */}
          <p className="text-start">
            プログラマ、VJ。オーディオビジュアル、XR、インタラクティブ作品等の制作を行う。
            認知を変容させる表現をテーマに、表現や技術について実験的なアプローチを実施。
            このアプローチを通じて、文化への貢献を志向している。
          </p>
          <div className="text-start"> {/* ボタンを左揃えにします */}
            <a href="https://twitter.com/black_pomerania">X (Twitter)</a>
            <a href="https://www.instagram.com/_black_pomeranian/" >Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
