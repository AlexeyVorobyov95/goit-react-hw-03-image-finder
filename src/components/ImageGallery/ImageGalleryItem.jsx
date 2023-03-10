import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Items, Image } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = e => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { webImage, largeImage, tags } = this.props;
    const { isModalOpen } = this.state;

    return (
      <Items>
        <Image
          onClick={this.toggleModal}
          src={webImage}
          alt={tags}
          width={300}
        />
        {isModalOpen && (
          <Modal
            onClose={this.toggleModal}
            largeImage={largeImage}
            tags={tags}
          />
        )}
      </Items>
    );
  }
}

ImageGalleryItem.propsTypes = {
  webImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
