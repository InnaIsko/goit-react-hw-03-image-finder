import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    data: [],
    page: 1,
  };

  onFetchApi = name => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = 'key=30946911-c6f6e3f672fcb97cd0cd3059d';
    const OPTIONS = '&image_type=photo&orientation=horizontal&per_page=12';

    const response = fetch(
      `${BASE_URL}?q=${name}&page=${this.state.page}&${API_KEY}${OPTIONS}`
    );
    return response;
  };

  onSubmit = name => {
    this.onFetchApi(name)
      .then(resp => resp.json())
      .then(data => {
        this.setState(prevState => ({
          data: [...prevState.data, ...data.hits],
        }));
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.setState(prevState => ({ page: (prevState.page += 1) }));
    }
  }
  render() {
    return (
      <div className="finderWraper">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.data} />
        {this.state.data.length >= 12 && <Button onClickBtn={this.onSubmit} />}
      </div>
    );
  }
}
