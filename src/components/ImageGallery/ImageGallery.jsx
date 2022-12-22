import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { ImageGalleryItem } from './ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = { url: '', tags: '', hidden: true };

  handlerClickVisually = () => {
    this.setState(PrevState => ({ hidden: !PrevState.hidden }));
  };
  handlerClickImg = (url, tags) => {
    this.handlerClickVisually();
    this.setState({ url, tags });
  };

  render() {
    const { data } = this.props;
    const { url, tags, hidden } = this.state;
    return (
      <ul className="gallery">
        {data.map(element => (
          <ImageGalleryItem
            key={element.id}
            imageInfo={element}
            handlerClickImg={this.handlerClickImg}
          />
        ))}
        {!hidden && (
          <Modal onClose={this.handlerClickVisually}>
            <img className="modal__img" src={url} alt={tags} />
            <button
              className="modal__btn"
              type="button"
              onClick={this.handlerClickVisually}
            >
              <AiOutlineClose />
            </button>
          </Modal>
        )}
      </ul>
    );
  }
}
