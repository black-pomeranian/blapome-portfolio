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
            プログラマ / VJ / DJ。
            昼と夜、デジタルとアナログ、都市とローカル、人工物と自然などを越境する中で立ち現れた記憶や感情を大切にしています。
            プログラマとして、ゲーム、Web、AI、VRなど、視覚に関連するものを横断的に制作しています。
            また、VJとしては自作のVJソフトを用いてクラブやライブハウスでリアルタイムレンダリングの映像表現を行っています。
            プログラミングに加え、3DCG、実写、生成AIなどあらゆるツールを用いています。
          </p>
          <p className="profile-en text-start py-2">
            Ryo Yoneda.
            Programmer / VJ / DJ.
            I value the memories and feelings that arise from crossing the boundaries between day and night, digital and analog, city and country, and the artificial and the natural.
            As a programmer, I create a wide variety of visual-related projects, spanning games, websites, AI, and VR.
            I am also a VJ, performing real-time visual renderings at clubs and live venues with my own custom software.
            Beyond programming, I use a diverse range of tools such as 3DCG, live-action video, and generative AI.      
          </p>

          <div className="sns">
            <div className="text-start mb-4 py-2">
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
