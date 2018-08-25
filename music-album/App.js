import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./src/componenets/Header"
import AlbumList from "./src/componenets/AlbumList"


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={"Album"}/>
        <AlbumList/>
      </View>
    );
  }
}



