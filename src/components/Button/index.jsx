import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMoreClick }) => {
  return (
    <button
      onClick={() => onLoadMoreClick()}
      className={css.button}
      type="button"
    >
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
};
