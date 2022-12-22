import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  render() {
    const { children } = this.props;
    return createPortal(
      <div className="overlay">
        <div className="modal">{children}</div>
      </div>,
      modalRoot
    );
  }
}
