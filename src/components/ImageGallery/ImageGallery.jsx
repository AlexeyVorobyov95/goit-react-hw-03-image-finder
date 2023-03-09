import { getApi } from '../../server/Api';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    image: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { paga, value } = this.props;
    if (prevProps.value !== value || prevProps.paga !== paga) {
      getApi(value, paga).then(image =>
        this.setState({
          image: [...image],
        })
      );
    }
    if (prevProps.value !== value) {
      getApi(value, paga).then(image =>
        this.setState({
          image,
        })
      );
    } else {
      // getApi(value, paga).then(image =>
        // this.setState({
          // image: [...prevState.image, ...this.state.image],
        // })
      // );
    }
  }

  render() {
    const { image } = this.state;

    return (
      <>
        <ul>
          {image.map(({ id, webformatURL }) => (
            <ImageGalleryItem key={id} webImage={webformatURL} />
          ))}
        </ul>
        <Button onClick={this.props.onClick} />
      </>
    );
  }
}
