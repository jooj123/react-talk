import React, { Component } from 'react';

class PhotoSummary extends Component {

  static propTypes = {
    length: React.PropTypes.int,
    style: React.PropTypes.object,
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div style={this.props.style}>
        <p>{this.props.length} Results Found.</p>
      </div>
    );
  }
}

export default PhotoSummary;
