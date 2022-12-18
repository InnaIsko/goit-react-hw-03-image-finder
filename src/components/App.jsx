import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = { data: [] };

  onSubmit = name => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = 'key=30946911-c6f6e3f672fcb97cd0cd3059d';
    const OPTIONS = '&image_type=photo&orientation=horizontal&per_page=12';
    const page = 1;

    return fetch(`${BASE_URL}?q=${name}&page=${page}&${API_KEY}${OPTIONS}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ data: data.hits });
      });
  };
  render() {
    return (
      <div className="finderWraper">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.data} />
      </div>
    );
  }
}
