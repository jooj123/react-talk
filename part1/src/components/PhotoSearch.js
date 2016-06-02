import React, { Component } from 'react';
import PhotoList from './PhotoList';
import request from 'superagent';
import Spinner from './Spinner';


// ID: 727f5efe1caf7fe
// Secret: 74b39e7de41285eff32ab2533cedda92626570e

class PhotoSearch extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      results: [],
      loading: false,
      searched: false,
    };

    this.search = this.search.bind(this);
    this.submit = this.submit.bind(this);
  }

  search(event) {
    this.setState({
      search: event.target.value,
    });
  }

  submit(event) {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    request
      .get('https://api.imgur.com/3/gallery/search')
      .query({ q_all: this.state.search })
      .query({q_size_px: 'small'})
      .query({q_type: 'png'})
      .set('Authorization', 'Client-ID 727f5efe1caf7fe')
      .end((err, res) => {
        if (err || !res.ok) {
          // handle error
          // console.log('Fail: ', err);
          this.setState({
            results: [],
            loading: false,
          });
        } else {
          const results = res.body.data.filter((result) => {
            return !result.is_album;
          });

          this.setState({
            results: results,
            loading: false,
            searched: true,
          });
        }
      });
  }

  render() {
    const styles = {
      container: {
        width: 600,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      input: {
        display: 'inline-block',
        margin: 0,
        width: '80%',
        height: 34,
        fontFamily: 'sans-serif',
        fontSize: 18,
        outline: 'none',
        boxSizing: 'border-box',
      },
      button: {
        display: 'inline-block',
        width: '20%',
        boxSizing: 'border-box',
        height: 34,
        border: 'none',
        verticalAlign: 'top',
        backgroundColor: 'dodgerblue',
        fontWeight: 'bold',
        color: 'white',
      },
    };

    let loading = '';

    if (this.state.loading) {
      loading = (
        <Spinner />
      );
    }

    return (
      <div style={styles.container}>
        <h1>Photo Search</h1>
        <form onSubmit={this.submit}>
          <input
            value={this.state.search}
            style={styles.input}
            onChange={this.search} />
          <input type="button" value="Submit" style={styles.button} onClick={this.submit} />
        </form>
        <PhotoList photos={this.state.results} showSummary={this.state.searched} />
        {loading}
      </div>
    );
  }
}

export default PhotoSearch;
