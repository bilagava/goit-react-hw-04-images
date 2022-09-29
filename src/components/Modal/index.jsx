import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './style.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onModalClose, image, tag }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackDropClick}>
      <div className={css.modal}>
        <img className={css.image} src={image} alt={tag} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
  tag: PropTypes.string,
};

export default Modal;
