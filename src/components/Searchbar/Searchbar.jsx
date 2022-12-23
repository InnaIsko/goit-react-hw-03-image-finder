import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles.css';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };
  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSabmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSabmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
