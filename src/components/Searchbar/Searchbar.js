import { Component } from 'react';
import { SearchForm, SubmitButton, InputForm } from './SearchbarStyled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    image: '',
  };
  handleChange = e => {
    this.setState({
      image: e.target.value.toLowerCase(),
    });
  };
  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state.image);
    this.setState({
      image: '',
    });
  };

  render() {
    const { image } = this.state;
    return (
      <SearchForm className="form" onSubmit={this.handleSubmit}>
        <SubmitButton type="submit" className="button">
          <span className="button-label">Search</span>
        </SubmitButton>

        <InputForm
          className="input"
          type="text"
          value={image}
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
      </SearchForm>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
