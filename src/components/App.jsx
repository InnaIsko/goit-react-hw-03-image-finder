import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    data: [],
    page: 1,
    name: '',
    error: null,
  };

  onFetchApi = nameImg => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = 'key=30946911-c6f6e3f672fcb97cd0cd3059d';
    const OPTIONS = '&image_type=photo&orientation=horizontal&per_page=12';

    const response = fetch(
      `${BASE_URL}?q=${this.state.name}&page=${this.state.page}&${API_KEY}${OPTIONS}`
    );
    return response;
  };

  onSubmit = nameImg => {
    this.setState({ name: nameImg });
  };

  // notify = () => toast('123');

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.setState(prevState => ({ page: (prevState.page += 1) }));
    }
    if (prevState.name !== this.state.name) {
      this.onFetchApi()
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }
          return Promise.reject(
            new Error(`There are no images for your request`)
          );
        })
        .then(data => {
          // console.log(data.hits.length);
          // if (data.hits.length === 0) {
          //   console.log(123);
          //   this.notify();
          // }
          this.setState(prevState => ({
            data: [...data.hits],
          }));
        })
        .catch(error => this.setState({ error }));
    }
  }

  onLoadMore = () => {
    this.onFetchApi()
      .then(resp => resp.json())
      .then(data => {
        this.setState(prevState => ({
          data: [...prevState.data, ...data.hits],
        }));
      });
  };
  render() {
    return (
      <div className="finderWraper">
        {this.state.error && <p>{this.state.error.massage}</p>}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.data} />
        {this.state.data.length >= 12 && (
          <Button onClickBtn={this.onLoadMore} />
        )}
      </div>
    );
  }
}
