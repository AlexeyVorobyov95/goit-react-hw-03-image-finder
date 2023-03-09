import React, { Component } from 'react';


export class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

    handleSubmit = event => {
      const value = this.state.value
        event.preventDefault();
        if (value.trim() === '') {
            alert('Please enter a value in the search');
        }
    this.props.onSabmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header >
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span >Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
