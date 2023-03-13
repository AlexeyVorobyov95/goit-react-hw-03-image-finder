import React, { Component } from 'react';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai/index';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const value = this.state.value;
    event.preventDefault();
    if (value.trim() === '') {
      alert('Please enter a value in the search');
    }
    this.props.onSabmit(value);
    this.props.clearForm();
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineSearch
              style={{ fill: `black`, width: `100%`, height: `100%` }}
            />
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSabmit: PropTypes.func.isRequired,
};
