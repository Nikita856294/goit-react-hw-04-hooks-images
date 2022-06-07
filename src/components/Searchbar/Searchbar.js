import { useState } from 'react';
import { SearchForm, SubmitButton, InputForm } from './SearchbarStyled';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [image, setImage] = useState('');
  const handleChange = e => {
    setImage(e.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(image);

    setImage(image);
  };

  return (
    <SearchForm className="form" onSubmit={handleSubmit}>
      <SubmitButton type="submit" className="button">
        <span className="button-label">Search</span>
      </SubmitButton>

      <InputForm
        className="input"
        type="text"
        value={image}
        placeholder="Search images and photos"
        onChange={handleChange}
      />
    </SearchForm>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
