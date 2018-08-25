import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import axios from "axios";
import AlbumDetails from './AlbumDetails';

class AlbumList extends React.Component {

    state = { albums:[] };

    componentWillMount(){
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response=>this.setState({albums:response.data}))
    }
renderAlbums(){
  return this.state.albums.map(album => 
    <AlbumDetails key={album.title} album={album}/>
  );
}

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff'
    },
  });