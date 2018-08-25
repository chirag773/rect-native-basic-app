import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

class HomeScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>this is HomeScreen</Text>
      </View>
    );
  }
}

export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
 