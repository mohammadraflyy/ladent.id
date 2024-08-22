import React from 'react';
import ReactDOM from 'react-dom';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto'>
        <img
          src={imageSrc}
          alt='Zoomed'
          className='w-full h-auto object-contain rounded-lg'
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
