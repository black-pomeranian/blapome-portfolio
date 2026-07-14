import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectTemplate = () => {
  return (
    <main className="container">

        <article className='project'>
        {/* タイトル */}
        <header className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">Title</h1>
            <p className="text-left date"><time dateTime="2026-01">日付</time></p>

          </div>
        </header>

        {/* 画像 */}
        <section className="row mb-4 justify-content-center" aria-label="作品ギャラリー">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="作品の内容（誰が・何を・どの技術で）を具体的に記述する" className="img-fluid" />
          </div>
        </section>

        {/* 説明 */}
        <section className="row justify-content-center" aria-label="作品説明">
          <div className="descliption-jp col-12 col-md-8 py-2" lang="ja">
            <p>
              説明文がここに入ります。
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8 py-2" lang="en">
            <p>
              Here is Explanation
            </p>
          </div>

          <footer className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              aaa：Black Pomeranian<br></br>
              bbb：山田<br></br>
            </p>
          </footer>
        </section>
      </article>
    </main>
  )
}

export default ProjectTemplate;
