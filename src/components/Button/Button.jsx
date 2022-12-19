import React, { Component } from 'react';

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
