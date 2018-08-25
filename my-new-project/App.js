import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons"

import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import Saved from "./screens/Saved";
import Messages from "./screens/Messages";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>my first react native app</Text>
      </View>
    );
  }
}



export default createBottomTabNavigator ({
  Explore:{
    screen:Explore,
    navigationOptions:{
      tabBarLabel:'Explore',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-search-outline" color={tintColor} size={24}/>
      )
    }
  },
  Saved:{
    screen:Saved,
    navigationOptions:{
      tabBarLabel:'Save',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-heart-outline" color={tintColor} size={24}/>
      )
    }
  },
  Messages:{
    screen:Messages,
    navigationOptions:{
      tabBarLabel:'Messages',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-chatboxes-outline" color={tintColor} size={24}/>
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarLabel:'Profile',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor:"red",
    inactiveTintColor:"grey"
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});