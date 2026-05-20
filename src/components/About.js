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
            インスタレーションを中心に、ゲーム、Web、AI、VR、映像など、視覚に関連するものを横断的に制作。
            コードを中心としつつも、3DCG、実写、生成AIなどあらゆるツールを用いて制作。
            VJとしては、自作のVJソフトを用いて都内のアンダーグラウンドなクラブやライブハウスで活動。
            その際、音響解析の結果をその場で映像に反映するリアルタイムレンダリングの手法を主に用いている。
            DJでは、暗く反復的なテクノの影響を強く受けつつも、ベースミュージックやレフトフィールド、ハウスなどジャンルレスにミックス。

          </p>
          <p className="profile-en text-start py-2">
            Programmer / VJ / DJ.
            I create installations, games, web, AI, VR, videos, and more, using a wide range of tools including code, 3DCG, live-action footage, and generative AI.
            As a VJ, I perform at underground clubs and live houses in Tokyo using my own VJ software, primarily utilizing real-time rendering techniques that reflect audio analysis results in the visuals on the spot.
            As a DJ, I mix genre-less music influenced by dark and repetitive techno, bass music, leftfield, house, and more.
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
