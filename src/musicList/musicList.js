import React, { Component } from 'react';
import MusicItem from './../musicItem/musicItem';

class MusicList extends Component {
  render() {

    const { artistList } = this.props;

    return (
      <div className="music-artistList">
        {
           artistList.map((artist, index) => <MusicItem key={index} artist={artist}/>)
        }
      </div>
    );
  }
}

export default MusicList;
