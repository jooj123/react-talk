import React, { Component } from 'react';
import PhotoCell from './PhotoCell.js';
import PhotoSummary from './PhotoSummary.js';

class PhotoList extends Component {

  static propTypes = {
    photos: React.PropTypes.array.isRequired,
    showSummary: React.PropTypes.bool,
  };

  static defaultProps = {
    showSummary: false,
  };

  constructor() {
    super();
  }

  render() {
    let summary = '';
    if (this.props.showSummary) {
      summary = (
        <div>
          <PhotoSummary length={this.props.photos.length} style={{'fontWeight': 'bold'}} />
        </div>
      );
    }

     // summary = (
     //    <div>
     //      <PhotoSummary length={this.props.photos.length} style={{'fontWeight': 'bold'}} />
     //      <PhotoSummary length={this.props.photos.length} style={{'color': 'red'}} />
     //    </div>
     //  );

    return (
      <div>
        {summary}
        {this.props.photos.map((result) => {
          return (
            <PhotoCell src={result.link} key={result.id} title={result.title} />
          );
        })}
      </div>
    );
  }
}

export default PhotoList;
