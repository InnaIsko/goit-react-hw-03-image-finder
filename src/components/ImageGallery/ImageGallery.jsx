import React, { Component } from 'react';

import { ImageGalleryItem } from './ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = { url: '', tags: '', hidden: true };

  handlerClickImg = (url, tags) => {
    this.setState({ url, tags, hidden: false });
    console.log(this.state);
  };

  render() {
    console.log(this.state);
    const { data } = this.props;
    return (
      <ul className="gallery">
        {data.map(element => (
          <ImageGalleryItem
            key={element.id}
            imageInfo={element}
            handlerClickImg={this.handlerClickImg}
          />
        ))}
        <Modal
          url={this.state.url}
          tags={this.state.tags}
          hidden={this.state.hidden}
        />
      </ul>
    );
  }
}
