import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
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
    <div className="container">
      <Row className="gx-5 gy-3">
        {projects.map((image, index) => (
          <Col md={6} key={index} className="mb-4">
            <Link to={image.url}>
              <div className="image-overlay-container card-aspect-ratio">
                <img src={image.src} alt={image.alt} className="img-fluid img-rounded" />
                <div className="image-overlay">{image.description}</div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;
