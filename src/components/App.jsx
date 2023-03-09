import React, { Component } from 'react';
import { GlobalStyles } from './GlobalStyled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    value: '',
    paga: 1,
  };

  handleCilck = () => {
    this.setState(prevState => {
      return {
        paga: prevState.paga + 1,
      };
    });
  };

  handleSerchForm = value => {
    this.setState({ value });
  };

  render() {
    const { value, paga } = this.state;

    return (
      <div>
        <GlobalStyles />
        <Searchbar onSabmit={this.handleSerchForm} />
        <ImageGallery onClick={this.handleCilck} paga={paga} value={value} />
      </div>
    );
  }
}
