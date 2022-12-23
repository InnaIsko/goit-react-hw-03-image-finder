import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    data: [],
    page: 1,
    name: '',
    error: null,
    visibleLoader: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ visibleLoader: true });
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
          if (data.hits.length === 0) {
            this.notify();
          }
          this.setState(prevState => ({
            data: [...prevState.data, ...data.hits],
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ visibleLoader: false });
        });
    }
  }
  notify = () => toast.info('There are no images for your request');

  onFetchApi = () => {
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
    if (this.state.name) {
      this.setState({ data: [] });
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: (prevState.page += 1) }));
  };

  render() {
    const { error, data, visibleLoader } = this.state;
    return (
      <div className="finderWraper">
        {error && <p>{error.massage}</p>}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={data} />
        <Loader visible={visibleLoader} />
        {data.length >= 12 && <Button onClickBtn={this.onLoadMore} />}
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}
