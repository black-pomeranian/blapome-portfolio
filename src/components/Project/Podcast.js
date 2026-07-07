import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Podcast = () => {
  return (
    <div className="container">

        <div className='project'>
        {/* タイトル */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="project-title text-left">ポッドキャスト番組「BlackPomeranianの犬小屋」</h1>
            <p className="text-left date">2025.01</p>

          </div>
        </div>

        {/* 画像 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <img src={`${process.env.PUBLIC_URL}/images/podcast/podcast.jpg`} alt="FFF's logo" className="img-fluid small-image d-block mx-auto py-1 half-size" />
          </div>
        </div>

        {/* 説明 */}
        <div className="row justify-content-center">
          <div className="descliption-jp col-12 col-md-8">
            <p>
              ポッドキャスト番組「BlackPomeranianの犬小屋」を制作・配信。<br></br>
              日常的な気づきから、雑談、活動報告等を実施。<br></br>
              <a href="https://open.spotify.com/show/06zKHRmTybDUiNSByMieQ2?si=7974de0e3ca041b0">Spotify</a>、<a href="https://podcasts.apple.com/jp/podcast/%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%83%9D%E3%83%A1%E3%83%A9%E3%83%8B%E3%82%A2%E3%83%B3%E3%81%AE%E7%8A%AC%E5%B0%8F%E5%B1%8B/id1792710759">Apple Podcast</a>にて毎週火曜日の朝5時配信中。<br></br>
            </p>
          </div>
          <div className="descliption-en col-12 col-md-8">
            <p>
            Producer and host of the podcast "BlackPomeranian's Doghouse." <br></br>
            Featuring daily insights, casual chats, and activity updates. <br></br>
            New episodes released every Tuesday at 5 AM on <a href="https://open.spotify.com/show/06zKHRmTybDUiNSByMieQ2?si=7974de0e3ca041b0">Spotify</a> and <a href="https://podcasts.apple.com/jp/podcast/%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%83%9D%E3%83%A1%E3%83%A9%E3%83%8B%E3%82%A2%E3%83%B3%E3%81%AE%E7%8A%AC%E5%B0%8F%E5%B1%8B/id1792710759">Apple Podcast</a>. <br></br>
            </p>
          </div>
          <div className="credit col-12 col-md-8 py-2">
            <p>
              Credit<br></br>
              All：Black Pomeranian<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podcast;
