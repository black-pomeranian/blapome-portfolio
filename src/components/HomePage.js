import React from 'react';
import { Link } from 'react-router-dom';
import ProjectGrid from './ProjectGrid';
import { performanceData } from './Performance';

// ホームに載せる最新の出演（年をまたいで新しい順に）
const latestShows = performanceData
  .flatMap((y) => y.achievements.filter((a) => typeof a === 'object').map((a) => ({ ...a, year: y.year })))
  .slice(0, 6);

const SectionHead = ({ id, title, to, linkLabel }) => (
  <div className="home-section-head">
    <h2 id={id}>{title}</h2>
    <Link to={to} className="home-more">{linkLabel} →</Link>
  </div>
);

const HomePage = () => {
  return (
    <main className="home">
      {/* ヒーロー */}
      <section className="home-hero">
        {/* h1のブラウザ既定スタイル（margin, font-weight）を打ち消し、従来のspanと同一の見た目を維持 */}
        <h1 className="home-title-text" style={{ margin: 0, fontWeight: 400 }}>
          Black Pomeranian
        </h1>
        {/* 視覚には表示されないが、検索エンジン・AI・スクリーンリーダーに人物概要を伝える */}
        <p className="visually-hidden">
          Black Pomeranian（ブラックポメラニアン）は東京拠点のVJ / DJ / クリエイティブプログラマー。
          自作VJソフトウェアによる音響解析×リアルタイムレンダリングの映像演出、
          インスタレーション・Web・ゲーム・AI・VRのインタラクティブ開発を行う。
        </p>
      </section>

      <div className="home-body">
        {/* プロフィール */}
        <section className="home-section" aria-labelledby="home-about">
          <SectionHead id="home-about" title="About" to="/about" linkLabel="Profile" />
          <div className="home-about">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt="VJ・DJ・クリエイティブプログラマー Black Pomeranian（ブラックポメラニアン）のプロフィール写真"
              className="home-about-img"
              loading="lazy"
            />
            <div>
              <p className="home-about-role">Programmer / VJ / DJ</p>
              <p className="profile-jp" lang="ja">
                認知科学の研究、プログラミングの経験、クラブカルチャーからの影響を基盤に活動を行う。
                インスタレーションを中心に、ゲーム、Web、AI、VR、映像など、視覚に関連するものを横断的に制作。
                VJとしては、自作のVJソフトを用いて都内のアンダーグラウンドなクラブやライブハウスで活動。
              </p>
              <p className="profile-en" lang="en">
                Based on research in cognitive science, programming experience, and influence from club culture.
                As a VJ, I perform at underground clubs and live houses in Tokyo using my own VJ software.
              </p>
            </div>
          </div>
        </section>

        {/* プロジェクト */}
        <section className="home-section" aria-labelledby="home-project">
          <SectionHead id="home-project" title="Project" to="/project" linkLabel="All projects" />
          <ProjectGrid limit={4} fullWidth />
        </section>

        {/* パフォーマンス */}
        <section className="home-section" aria-labelledby="home-performance">
          <SectionHead id="home-performance" title="Performance" to="/performance" linkLabel="All shows" />
          <ul className="perf-list">
            {latestShows.map(({ role, date, title, location, year }, i) => (
              <li key={i} className="perf-row">
                <time className="perf-date" dateTime={`${year}-${date.replace('.', '-')}`}>{year}.{date}</time>
                <span className="perf-role">{role}</span>
                <span className="perf-title">{title}</span>
                <span className="perf-venue">{location}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
