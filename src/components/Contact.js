import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto text-left">
          <div className="mb-2">black.pomera@gmail.com</div> {/* mb-2 は下マージンを設定 */}
          <div className="mb-2"><a href="https://twitter.com/black_pomerania">X (Twitter)</a></div>
          <div><a href="https://www.instagram.com/_black_pomeranian/">Instagram</a></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
