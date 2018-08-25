import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { createStackNavigator } from "react-navigation"
import firebase from "firebase"
import LoginForm from "./component/LoginForm"
import SignupForm from "./component/SignupForm"
import Home from "./component/Home"
import LoginOrSignup from "./component/LoginOrSignup"


const firebaseConfig = {
  apiKey: 'AIzaSyAvvxFJhxMlpwitH6PjsT-yxMXfC4dtn7Q',
  authDomain: 'authentication-b973f.firebaseapp.com',
  databaseURL: 'https://authentication-b973f.firebaseio.com',
  projectId: 'authentication-b973f',
  storageBucket: 'authentication-b973f.appspot.com',
  messagingSenderId: '499339976209'
};
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
 
  // componentWillMount(){
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyAvvxFJhxMlpwitH6PjsT-yxMXfC4dtn7Q',
  //     authDomain: 'authentication-b973f.firebaseapp.com',
  //     databaseURL: 'https://authentication-b973f.firebaseio.com',
  //     projectId: 'authentication-b973f',
  //     storageBucket: 'authentication-b973f.appspot.com',
  //     messagingSenderId: '499339976209'
  //   });
  // };
  
  render() {
    return (
      <View style={styles.container}>
        <AppStackNavigator/>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  LoginOrSignup:LoginOrSignup,
  LoginForm:LoginForm,
  SignupForm:SignupForm,
  Home:Home
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19B5FE',
  }
});
 
