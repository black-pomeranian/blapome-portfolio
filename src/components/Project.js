import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import contentsData from '../contents.json';

function Projects() {
  const images = contentsData.map(img => {
    return {
      ...img,
      src: `${process.env.PUBLIC_URL}${img.src}`
    };
  });

  return (
    <div className="container">
      <Row className="gx-1 gy-5">
        {images.map((image, index) => (
          <Col md={6} key={index} className="text-center">
            <img src={image.src} alt={image.alt} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;
