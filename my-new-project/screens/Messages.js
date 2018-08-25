import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Messages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>here goes all Messages which are send to u</Text>
      </View>
    );
  }
}

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});