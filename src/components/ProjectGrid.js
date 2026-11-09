import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import projectsData from '../projects.json';
import { Link } from 'react-router-dom';

// プロジェクトのカード一覧（Project ページとホームのダイジェストで共用）
// limit を渡すと先頭（最新）から指定件数だけ表示する。fullWidth で親の幅いっぱいに並べる
function ProjectGrid({ limit, fullWidth = false }) {
  const projects = (limit ? projectsData.slice(0, limit) : projectsData).map(img => ({
    ...img,
    src: `${process.env.PUBLIC_URL}${img.src}`
  }));

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

    // ホバーできない端末（スマホ）では、画面中央に来たカードだけ色を戻す
    let centerObserver;
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
      centerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const card = entry.target.querySelector('.project-card');
            if (card) card.classList.toggle('is-active', entry.isIntersecting);
          });
        },
        { rootMargin: '-45% 0px -45% 0px' }
      );
      itemRefs.current.forEach((el) => {
        if (el) centerObserver.observe(el);
      });
    }

    return () => {
      observer.disconnect();
      if (centerObserver) centerObserver.disconnect();
    };
  }, [projects.length]);

  return (
    <Row as="ul" className="gx-4 gy-4 justify-content-center" style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
      {projects.map((image, index) => (
        <Col
          as="li"
          xs={fullWidth ? 12 : 10}
          sm={fullWidth ? 12 : 10}
          md={fullWidth ? 6 : 5}
          key={index}
          className="mb-4 fade-item"
          ref={(el) => (itemRefs.current[index] = el)}
        >
          <Link to={image.url} className="project-card" aria-label={`プロジェクト「${image.title}」の詳細を見る`}>
            <div className="image-overlay-container card-aspect-ratio">
              <img src={image.src} alt={image.alt} className="img-fluid img-rounded" loading="lazy" />
              <div className="image-overlay" aria-hidden="true"></div>
            </div>
            <div className="project-meta">
              <p className="project-title">{image.title}</p>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectGrid;
