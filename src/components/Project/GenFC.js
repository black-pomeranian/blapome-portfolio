import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GenFC = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">GenFC</h1>
            <p className="text-left date"><time dateTime="2024-07">2024.07</time></p>

          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
          <img src={`${process.env.PUBLIC_URL}/images/GenFC/GenFC1.webp`} alt="ジェネラティブな手続きで生成されたサッカーユニフォームのバリエーション1" className="img-fluid small-image d-block mx-auto py-1" />
          <img src={`${process.env.PUBLIC_URL}/images/GenFC/GenFC2.webp`} alt="変数によって柄が変化するジェネラティブユニフォームのバリエーション2" className="img-fluid small-image d-block mx-auto py-1" />
          <img src={`${process.env.PUBLIC_URL}/images/GenFC/GenFC3.webp`} alt="サッカーアパレルPOP UPイベントのVJ映像演出にも使用されたジェネラティブユニフォームのバリエーション3" className="img-fluid small-image d-block mx-auto py-1" />
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8" lang="ja">
            <p>
              <br></br>
              生成的な手続き（Generative）で作成されたサッカーチームのユニフォーム。<br></br>
              統一感を持ちつつ、変数によって微妙に異なる柄で個性を出すユニフォームを提案。<br></br>
              サッカーアパレルのポップアップで行われたイベントにて、VJでの映像演出としても使用した。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8" lang="en">
            <p>
                Uniforms for a soccer team created using generative procedures. <br></br>
                Proposing uniforms that maintain a sense of unity while showcasing individuality through subtly varying patterns influenced by variables. <br></br>
                Also used as a visual presentation for VJ performances at an event held at a soccer apparel pop-up. <br></br>
            </p>
          </div>
          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All：Black Pomeranian<br></br>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default GenFC;
