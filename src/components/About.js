import React from 'react'
import profileImage from "../images/profile.png"

const About = () => {
  return (
    <div>
        <h1>Black Pomeranian</h1>
        <img src={profileImage} alt="Profile-Image" />
        <p>プログラマ、VJ。オーディオビジュアル、XR、インタラクティブ作品等の制作を行う。
            認知を変容させる表現をテーマに、表現や技術について実験的なアプローチを実施。
            このアプローチを通じて、文化への貢献を志向している。
        </p>
        <a href="https://twitter.com/black_pomerania">X (Twitter)</a>
        <a href="https://www.instagram.com/_black_pomeranian/">Instagram</a>
    </div>
  )
}

export default About