import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <button
        type="submit"
        className="button_LoadMore"
        onClick={this.props.onClickBtn}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};
