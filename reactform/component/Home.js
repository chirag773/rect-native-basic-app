import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import Profile from "./Profile"
import Notification from "./Notification"
import HomeScreen from "./HomeScreen"
import Explore from "./Explore"
import Icons from "react-native-vector-icons/Ionicons"
export default class Home extends React.Component {

    static navigationOptions = {
        header:null
    }

  render() {
    return (
      <View style={styles.container}>
        <AppcreateMaterialBottomTabNavigator/>
      </View>
    );
  }
}

const AppcreateMaterialBottomTabNavigator = createMaterialBottomTabNavigator({
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel:"Home",
            tabBarIcon:({tintColor}) =>(
                <Icons name="ios-home" size={24} color={tintColor}/>
            )
        }
    },Notification:{
        screen:Notification,
        navigationOptions:{
            tabBarLabel:"Notification",
            tabBarIcon:({tintColor}) =>(
                <Icons name="ios-notifications" size={24} color={tintColor}/>
            )
        }
    },
    Explore:{
        screen:Explore,
        navigationOptions:{
            tabBarLabel:"Explore",
            tabBarIcon:({tintColor}) =>(
                <Icons name="ios-search-outline" color={tintColor} size={24}/>
            )
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            tabBarLabel:"Profile",
            tabBarIcon:({tintColor}) =>(
                <Icons name="ios-person" size={24} color={tintColor}/>
            )
        }
    }
},{
    tabBarOptions:{
      tabBarColor:"blue",
      activeTintColor:"red",
      inactiveTintColor:"black"
    }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
 