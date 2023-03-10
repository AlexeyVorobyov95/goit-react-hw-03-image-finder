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
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.props;
    const prevValue = prevProps.value;
    const prevPage = prevProps.page;

    if (value !== prevValue || page !== prevPage) {
      this.setState({
        loading: true,
      });

      getApi(value, page)
        .then(image => {
          if (image.hits.length === 0) {
            alert(`No results were found for your request`);
            return;
          }
          if (value !== prevValue) {
            this.setState({
              image: [...image.hits],
            });
          }

          if (page !== prevPage) {
            const totalPages = Math.ceil(image.totalHits / 12);

            if (page > totalPages || page === totalPages) {
              alert(`You reached end of results`);
            }
            this.setState({
              image: [...prevState.image, ...image.hits],
            });
          }
        })
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { image, loading } = this.state;

    return (
      <>
        {loading && <Loader visible={loading} />}
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
        {image.length > 0 && <Button onClick={this.props.onClick} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
