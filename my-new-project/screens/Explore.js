import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
class Explore extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>search bar goes here</Text>
      </View>
    );
  }
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});