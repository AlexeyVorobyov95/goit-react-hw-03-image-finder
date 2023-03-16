import { getApi } from '../../server/Api';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    image: [],
    status: `idle`,
  };

  clearImage = () => {
    this.setState({ image: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.props;
    const prevValue = prevProps.value;
    const prevPage = prevProps.page;

    if (value !== prevValue || page !== prevPage) {
      if (value !== prevValue && this.state.image.length > 0) {
        this.clearImage();
      }
      this.setState({ status: `panding` });

      getApi(value, page).then(image => {
        if (image.hits.length === 0) {
          alert(`No results were found for your request`);
        }

        if (value !== prevValue) {
          this.setState({
            status: `resolved`,
            image: [...image.hits],
          });
        }

        if (page > 1) {
          const totalPages = Math.ceil(image.totalHits / 12);

          if (page > totalPages || page === totalPages) {
            alert(`You reached end of results`);
          }

          this.setState({
            status: `resolved`,
            image: [...prevState.image, ...image.hits],
          });
        }
      });
    }
  }

  render() {
    const { image, status } = this.state;

    return (
      <>
        {image.length > 0 && (
          <GalleryList>
            {image.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webImage={webformatURL}
                largeImage={largeImageURL}
                tags={tags}
              />
            ))}
          </GalleryList>
        )}
        {status === `panding` && <Loader />}
        {status === `resolved` && <Button onClick={this.props.onClick} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
