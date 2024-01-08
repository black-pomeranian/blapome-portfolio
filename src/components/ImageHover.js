import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSSのインポート

function ImageHover() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="position-relative m-2">
        <img 
          src={`${process.env.PUBLIC_URL}/images/profile.png`}
          alt="Description" 
          className="img-fluid cursor-pointer"
          onClick={() => openModal(`${process.env.PUBLIC_URL}/images/profile.png`)} 
        />
        <div className="position-absolute bottom-0 start-0 w-100 bg-dark text-white text-center p-2 cursor-pointer"
             style={{opacity: 0, transition: 'opacity .5s ease'}}
             onMouseEnter={e => e.currentTarget.style.opacity = 0.5}
             onMouseLeave={e => e.currentTarget.style.opacity = 0}
        >
          サンプルです。
        </div>
      </div>
      {/* 他の画像カードを同様に追加 */}

      {modalOpen && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{backgroundColor: 'rgba(0,0,0,.8)'}}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedImage} alt="Enlarged" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageHover;
