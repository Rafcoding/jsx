import React, { Component } from 'react';
import { connect } from 'react-redux';

// different way of defining a class, importing Component as above shwon
class SongList extends Component {
  render(){
    return <div>SongList</div>
  }
}

export default connect()(SongList);
