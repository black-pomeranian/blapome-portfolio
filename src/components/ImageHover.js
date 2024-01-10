import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageHover() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDescription, setSelectedDescription] = useState(''); 

  const openModal = (image, description) => {
    setSelectedImage(image);
    setSelectedDescription(description); 
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const ImageCard = ({ src, alt, description }) => (
    <div className="position-relative m-2">
      <img 
        src={src}
        alt={alt} 
        className="img-fluid cursor-pointer"
        onClick={() => openModal(src, description)}
      />
      <div className="position-absolute bottom-0 start-0 w-100 bg-dark text-white text-center p-2 cursor-pointer"
           style={{opacity: 0, transition: 'opacity .5s ease'}}
           onMouseEnter={e => e.currentTarget.style.opacity = 0.5}
           onMouseLeave={e => e.currentTarget.style.opacity = 0}
      >
        {alt}
      </div>
    </div>
  );

  const ImageModal = ({ isOpen, image, description, onClose }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div 
        id="modal-backdrop" 
        className="modal show d-block" 
        tabIndex="-1" 
        role="dialog" 
        style={{ backgroundColor: 'rgba(0,0,0,.8)' }} 
        onClick={(e) => {
          if (e.target.id === "modal-backdrop") {
            onClose();
          }
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={image} alt="Enlarged" className="img-fluid"/>
              <p>{description}</p>
            </div>
            <div className="modal-footer">
              <p>test</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <ImageCard src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="サンプルです。" description="ここに長文の説明を入れることができます。" />
      <ImageCard src={`${process.env.PUBLIC_URL}/images/blapome.png`} alt="test" description="別の画像に関する長文の説明。" />


      {/* 他のImageCardコンポーネントをここに追加 */}

      <ImageModal isOpen={modalOpen} image={selectedImage} description={selectedDescription} onClose={closeModal} />
    </div>
  );
}

export default ImageHover;
