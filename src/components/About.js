import React from 'react';

const About = () => {
  return (
    <main className="container flex justify-center ">
      <article className="flex flex-col md:flex-row  md:space-x-8 space-y-4 md:space-y-0 w-10/12 md:w-3/4">
        {/* プロフィール画像 */}
        <figure className="flex-1" style={{ margin: 0 }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.png`}
            alt="VJ・DJ・クリエイティブプログラマー Black Pomeranian（ブラックポメラニアン）のプロフィール写真"
            className="w-full rounded"
          />
        </figure>

        {/* テキスト内容 */}
        <section className="flex-1 flex flex-col text-light" aria-labelledby="about-heading">
          <p className="rubi text-start m-0" lang="ja">ブラックポメラニアン</p>
          <h1 id="about-heading" className="about-title text-start mb-3">Black Pomeranian</h1>

          <p className="profile-jp text-start mb-1 py-2" lang="ja">
            プログラマ / VJ / DJ。
            認知科学の研究、プログラミングの経験、クラブカルチャーからの影響を基盤に活動を行う。
            インスタレーションを中心に、ゲーム、Web、AI、VR、映像など、視覚に関連するものを横断的に制作。
            コードを中心としつつも、3DCG、実写、生成AIなどあらゆるツールを使用。
            VJとしては、自作のVJソフトを用いて都内のアンダーグラウンドなクラブやライブハウスで活動。
            その際、音響解析の結果をその場で映像に反映するリアルタイムレンダリングの手法を主に用いている。
            DJでは、暗く反復的なテクノの影響を強く受けつつも、ベースミュージックやレフトフィールド、ハウスなどジャンルレスにミックス。
          </p>
          <p className="profile-en text-start py-2" lang="en">
            Programmer / VJ / DJ.
            Based on research in cognitive science, programming experience, and influence from club culture.
            I create installations, games, web, AI, VR, videos, and more, using a wide range of tools including code, 3DCG, live-action footage, and generative AI.
            As a VJ, I perform at underground clubs and live houses in Tokyo using my own VJ software, primarily utilizing real-time rendering techniques that reflect audio analysis results in the visuals on the spot.
            As a DJ, I mix genre-less music influenced by dark and repetitive techno, bass music, leftfield, house, and more.
          </p>

          {/* address: 連絡先情報であることを検索エンジン・AIに明示（Bootstrap rebootでfont-style:normal） */}
          <address className="sns" style={{ marginBottom: 0, fontStyle: 'normal' }}>
            <div className="text-start mb-4 py-2">
              <ul aria-label="連絡先・ソーシャルリンク">

                <li>
                  <a
                    href="https://www.instagram.com/_black_pomeranian/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block mb-1"
                    aria-label="Instagram @_black_pomeranian を開く（新しいタブ）"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Logo/Instagram_Glyph_White.png`}
                      alt="Instagram"
                      className="snsImg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/black-pomeranian"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub black-pomeranian を開く（新しいタブ）"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Logo/github-mark-white.png`}
                      alt="GitHub"
                      className="snsImg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@black-pomeranian.com"
                    rel="noopener noreferrer"
                    className="d-block mb-1"
                    aria-label="メールで問い合わせる（info@black-pomeranian.com）"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Logo/mail.png`}
                      alt="メールでのお問い合わせ"
                      className="snsImg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </address>
        </section>
      </article>
    </main>
  );
};

export default About;
