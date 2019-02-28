import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// different way of defining a class, importing Component as above shwon
class SongList extends Component {
  renderList() {
    // key is not necessarrily required but highly recommended for a list of elements
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render(){
    // console.log(this.props);
    // this.props === { songs: state.songs }
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// mapStateToProps by convention name (we can call it anyway)
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);
