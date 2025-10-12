import React from 'react';
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

  return (
<div className="container px-sm-2 px-md-4"> 
    {/* gx-0 に変更し、カード間の左右のパディングを削除 */}
    {/* gy-1 (上下のガター) は残しておきます */}
    <Row className="gx-0 gy-1 justify-content-center"> 
      {projects.map((image, index) => (
        // sm={10} (スマホで幅10/12) に設定し、カードを小さくして、Rowの justify-content-center で中央寄せにする
        // md={5} はPCなどの表示を維持
        <Col xs={10} sm={10} md={5} key={index} className="mb-4"> 
            <Link to={image.url}>
              <div className="image-overlay-container card-aspect-ratio">
                <img src={image.src} alt={image.alt} className="img-fluid img-rounded" />
                <div className="image-overlay"></div>
              </div>
            </Link>
            <p className="project-title">{image.title}</p>

          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;
