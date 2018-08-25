import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Contact</Text>
      </View>
    );
  }
}

export default Profile


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
 