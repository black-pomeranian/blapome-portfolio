import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DOMVJ = () => {
  const movs = [1,2,3,4,5,6];

  return (
    <main className="container">

      <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">DOM-VJ</h1>
            <p className="text-left date"><time dateTime="2026-05">2026.05</time></p>
          </div>
        </header>

        {/* メイン画像 */}


        {/* ギャラリー */}
          <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
            <div className="col-12 col-md-8">
              {movs.map(n => (
                <div key={n} className="w-100 mb-3 text-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/DOM-VJ/mov${n}.webp`}
                    alt={`Chrome拡張「DOM-VJ」のデモ${n}：音楽の解析結果に合わせてWebサイトのDOM要素が動くリアルタイム演出`}
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              ))}
            </div>
          </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              コンピューターやプログラミング、及びハッカーは昔、分散・自由・反権威と強く結びついてたいたようです。<br></br>
              思い返してみると、小学生になりたての頃に実家のパソコンで見ていたものは、どこの誰かも分からない人物が作った自作のWEBサイトでした。<br></br>

              翻って今は、WEBサイトの多くは商業的な意味合いでしか作られなくなり、個人の発信も大手プラットフォーム上がメインへと移り変わっています。<br></br>
              その潮流に僕自身もいると思います。<br></br>

              ただ、パターナリズム的に与えられた自由の中で暮らしていても癪なので、音楽に合わせてWEBサイト上の構成要素を踊らせるChrome拡張を作りました。<br></br>

              踊りとは、社会の規定から自己を逸脱する行為だと感じています。<br></br>
              自己を規定しているWEBサイトを踊りに転用させることで、支配構造に抗った気になれます。<br></br>

              このChrome拡張では、入力された音を解析し、WEBの構成要素に設定された動きをさせます。
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
              Computers, programming, and hackers were once strongly associated with decentralization, freedom, and anti-authoritarianism.<br></br>
              Looking back, when I first started elementary school, what I saw on my family's computer were self-made websites created by unknown individuals.<br></br>
              In contrast, nowadays, most websites are created for commercial purposes, and individual expression has shifted to major platforms.<br></br>
              I feel that I am also part of that trend.<br></br>
              However, I created a Chrome extension that makes the elements of a website dance to music, just to be defiant while living within the freedom given by paternalism.<br></br>
              I feel that dancing is an act of deviating from the regulations of society.<br></br>
              By repurposing the website that defines the self into a dance, I can feel like I'm resisting the power structure.<br></br>
              This Chrome extension analyzes the input sound and makes the elements of the web move accordingly.
            </p>
          </div>
          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All: Black Pomeranian
            </p>
            <p>
              GitHub: <a href="https://github.com/black-pomeranian/DOM-VJ" target="_blank" rel="noopener noreferrer">https://github.com/black-pomeranian/DOM-VJ</a>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default DOMVJ;
