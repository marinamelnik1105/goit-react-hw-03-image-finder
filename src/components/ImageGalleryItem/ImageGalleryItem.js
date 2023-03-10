import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import { Img, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEsc);
  }

  handleImageZoom = () => {
    this.setState({ isOpen: true });
  };

  handleKeyEsc = evt => {
    if (evt.code === 'Escape') {
      this.setState({ isOpen: false });
    }
  };

  handleBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { id, tags, webformatURL, largeImageURL } = this.props;

    return (
      <Item key={id}>
        <Img src={webformatURL} alt={tags} onClick={this.handleImageZoom} />
        {this.state.isOpen && (
          <Modal
            tags={tags}
            imgUrl={largeImageURL}
            onBackdropClick={this.handleBackdrop}
          />
        )}
      </Item>
    );
  }
}
