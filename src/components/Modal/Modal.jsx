import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClickEsc);
  }

  handleClickEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handelClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className="overlay" onClick={this.handelClickBackdrop}>
        <div className="modal">{children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
