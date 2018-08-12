import React, { Component } from 'react';
import MusicItem from './../musicItems/musicItem';

class MusicList extends Component {
  render() {

    const { artistList } = this.props;

    return (
      <ul className="music-artistList">
        {
           artistList.map((artist, index) => <MusicItem key={index} artist={artist}/>)
        }
      </ul>
    );
  }
}

export default MusicList;
