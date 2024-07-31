import React from 'react';
import ReactDOM from 'react-dom';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative'>
        <img
          src={imageSrc}
          alt='Zoomed'
          className='w-fit h-fit object-contain'
        />
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-white text-xl bg-gray-500 px-3 bg-opacity-70 rounded-lg'
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
