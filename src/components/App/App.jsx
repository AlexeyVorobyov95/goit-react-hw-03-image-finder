import React, { Component } from 'react';
import { GlobalStyles } from '../GlobalStyled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    value: '',
    page: 1,
  };

  handleCilck = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  
  handleSerchForm = value => {
    this.setState({ value });
  };

  render() {
    const { value, page } = this.state;

    return (
      <Container>
        <GlobalStyles />
        <Searchbar onSabmit={this.handleSerchForm} />
        <ImageGallery onClick={this.handleCilck} page={page} value={value} />
      </Container>
    );
  }
}
