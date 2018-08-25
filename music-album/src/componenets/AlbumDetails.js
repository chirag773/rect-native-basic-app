import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import Card from "./Card";
import CardSections from './CardSections';
import Button from "./Button";

class AlbumDetails extends React.Component {
  render() {
    return (
            <Card>
                <CardSections>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri:this.props.album.thumbnail_image }}
                    />
                </View>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
                    <Text>{this.props.album.artist}</Text>
                </View>
                </CardSections>
                <CardSections>
                        <Image 
                            style={styles.imageStyle}
                            source={{uri:this.props.album.image}}
                        />
                </CardSections>
                <CardSections>
                    <Button onPress={()=> Linking.openURL(this.props.album.url)}/>
                </CardSections>
            </Card>
    );
  }
}

export default AlbumDetails

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headerTextStyle:{
    fontSize: 18,
  },
  thumbnailStyle:{
      height: 50,
      width:50
  },
  thumbnailContainerStyle:{
      justifyContent:"center",
      alignItems: 'center',
      marginLeft: 10,
      marginRight:10
  },
  imageStyle:{
      height:350,
      flex:1,
      width:null
    
    }
});
