import React from 'react';

const About = () => {
  return (
    <div className="container flex justify-center ">
      <div className="flex flex-col md:flex-row  md:space-x-8 space-y-4 md:space-y-0 w-10/12 md:w-3/4">
        {/* プロフィール画像 */}
        <div className="flex-1">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.png`}
            alt="profile"
            className="w-full rounded"
          />
        </div>

        {/* テキスト内容 */}
        <div className="flex-1 flex flex-col text-light">
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
            Through these activities, I aim to contribute to culture and foster experimental and inclusive spaces.          
          </p>

          <div className="sns">
            <div className="text-start mb-2 py-2">
              <ul>

                <li>
                  <a
                    href="https://www.instagram.com/_black_pomeranian/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block mb-1"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Logo/Instagram_Glyph_White.png`}
                      alt="https://www.instagram.com/_black_pomeranian/"
                      className="snsImg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/black-pomeranian"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Logo/github-mark-white.png`}
                      alt="https://github.com/black-pomeranian"
                      className="snsImg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:black.pomera@gmail.com"
                    rel="noopener noreferrer"
                    className="d-block mb-1"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Logo/mail.png`}
                      alt="black.pomera@gmail.com"
                      className="snsImg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
