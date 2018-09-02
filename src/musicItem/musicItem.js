import React, { Component } from 'react';


class MusicItem extends Component {
  render() {

    const { artist } = this.props;

    return (
      <li className="music-item">{artist.name} born in {artist.year_of_birth}</li>
    );
  }
}

export default MusicItem;
