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
            プログラマ / VJ / DJ。
            クラブやライブの映像演出やデザインの制作、インタラクティブコンテンツの開発等を手掛ける。
            プログラマとして、ゲーム、Web、AI、VRなど、視覚に関連するものを横断的に制作。
            制作では、コードを中心としつつも、3DCG、実写、生成AIなどあらゆるツールを用いている。
            VJとしては自作のVJソフトを用いてクラブやライブハウスでリアルタイムレンダリングの映像表現を行っている。
            DJでは、テクノを軸としたレベルミュージックをプレイしている。
            昼と夜、デジタルとアナログ、都市とローカル、人工物と自然などを越境する過程で残された記憶や感情をもとに活動している。
            既存の仕組みの内部から立ち上がり、既存の仕組みに対するつまらなさを破壊したい。

          </p>
          <p className="profile-en text-start py-2">
            Programmer / VJ / DJ.
            Engaged in video production and design production for clubs and live performances, as well as the development of interactive content.
            As a programmer, I create games, web, AI, VR, and other visually related works in a cross-sectional manner.
            In production, I mainly use code, but also utilize various tools such as 3DCG, live-action footage, and generative AI.
            As a VJ, I use my own VJ software to create real-time rendered video expressions in clubs and live houses.
            As a DJ, I play level music centered around techno.
            My activities are based on memories and emotions left behind in the process of crossing over between day and night, digital and analog, urban and local, artificial and natural.
            I want to rise from within existing systems and destroy the boredom towards them.
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
                    href="mailto:info@black-pomeranian.com"
                    rel="noopener noreferrer"
                    className="d-block mb-1"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Logo/mail.png`}
                      alt="info@black-pomeranian.com"
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
