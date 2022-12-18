import React, { Component } from 'react';
import '../../styles.css';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };
  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form">
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
