import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsData from '../projects.json';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = projectsData.map(img => {
    return {
      ...img,
      src: `${process.env.PUBLIC_URL}${img.src}`
    };
  });

  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, projects.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projects.length]);

  return (
<main className="container px-sm-2 px-md-4">
    {/* 視覚には表示されないページ見出し（検索エンジン・AI・スクリーンリーダー向け） */}
    <h1 className="visually-hidden">Projects — Black Pomeranian の制作実績（VJシステム・インスタレーション・Web・ゲーム・AI・映像）</h1>
    {/* gx-0 に変更し、カード間の左右のパディングを削除 */}
    {/* gy-1 (上下のガター) は残しておきます */}
    <Row as="ul" className="gx-4 gy-1 justify-content-center" style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
      {projects.map((image, index) => (
        // sm={10} (スマホで幅10/12) に設定し、カードを小さくして、Rowの justify-content-center で中央寄せにする
        // md={5} はPCなどの表示を維持
        <Col
          as="li"
          xs={10}
          sm={10}
          md={5}
          key={index}
          className="mb-4 fade-item"
          ref={(el) => (itemRefs.current[index] = el)}
        >
          <Link to={image.url} aria-label={`プロジェクト「${image.title}」の詳細を見る`}>
            <div className="image-overlay-container card-aspect-ratio">
              <img src={image.src} alt={image.alt} className="img-fluid img-rounded" loading="lazy" />
              <div className="image-overlay" aria-hidden="true"></div>
            </div>
          </Link>
          <p className="project-title">{image.title}</p>

          </Col>
        ))}
      </Row>
    </main>
  );
}

export default Projects;
