import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DreamFootball = () => {
  return (
    <div className="container text-center">
      <h1 className="my-4">Dream Football</h1>
      <iframe
        src="/DreamFootball/index.html" 
        title="Dream Football"
        width="960"
        height="600"
        frameBorder="0"
        scrolling="no"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  )
}

export default DreamFootball;
