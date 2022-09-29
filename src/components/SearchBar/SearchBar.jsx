import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (inputValue === '') {
      alert('Введите название');
      return;
    }

    onSubmit(inputValue);
    reset();
  };
  const reset = () => {
    setInputValue('');
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={onFormSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.button_label}>Search</span>
        </button>

        <input
          onChange={handleInputChange}
          value={inputValue}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.protoType = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
