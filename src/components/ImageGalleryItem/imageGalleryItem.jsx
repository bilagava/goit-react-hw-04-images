import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImage, onOpen, tag }) => {
  return (
    <li onClick={onOpen} className={css.item}>
      <img className={css.itemImage} src={smallImage} alt={tag} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
