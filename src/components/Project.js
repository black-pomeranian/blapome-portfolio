import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectGrid from './ProjectGrid';

function Projects() {
  return (
    <main className="container px-sm-2 px-md-4">
      {/* 視覚には表示されないページ見出し（検索エンジン・AI・スクリーンリーダー向け） */}
      <h1 className="visually-hidden">Projects — Black Pomeranian の制作実績（VJシステム・インスタレーション・Web・ゲーム・AI・映像）</h1>
      <ProjectGrid />
    </main>
  );
}

export default Projects;
