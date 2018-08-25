import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View ,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
    } from 'react-native';
import firebase from "firebase"

import Icons from 'react-native-vector-icons/Ionicons';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
 
   this.state = {
       email: "",
       passWord: ""
      };
    }

  loginUsers = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
        console.log(user)
      })
    }
    catch(err){
      console.log(err.toString);
      
    }
    
  }

    static navigationOptions = {
        header:null
    }


  //   async onFetchLoginRecords() {
  //     var data = {
  //      email: this.state.emailAddress,
  //      password: this.state.passWord
  //     };
  //     try {
  //      let response = await fetch(
  //       "https://restfullblog-chiragprajapati781452119.codeanyapp.com/",
  //       {
  //         method: "POST",
  //         headers: {
  //          "Accept": "application/json",
  //          "Content-Type": "application/json"
  //         },
  //        body: JSON.stringify(data)
  //      }
  //     );
  //      if (response.status >= 200 && response.status < 300) {
  //         alert("authenticated successfully!!!");
  //      }
  //    } catch (errors) {
  
  //      alert(errors);
  //     } 
  // }
    
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.loginText}>L O G I N</Text>
        </View>
        <View>
          <Icons name="ios-person-outline" size={28}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                    placeholder="Email"
                    placeholderTextColor="black"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    value={this.state.username}
                    onChangeText={email =>  this.setState({email:email})}
          />
        </View>
        <View>
          <Icons name="ios-lock" size={28}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                      placeholder="Password"
                      placeholderTextColor="black"
                      secureTextEntry={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      value={this.state.password}
                      onChangeText={password =>  this.setState({password:password})}
          />
        </View>
          <TouchableOpacity style={styles.button} onPress={() => this.loginUsers(this.state.email,this.state.password)}>
            <Text style={styles.buttonText}>
                Login 
            </Text>    
          </TouchableOpacity>
          <View style={styles.signuptextcont}>
            <Text style={styles.signuptext}>
              Don't have an account yet? 
            </Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignupForm")}> 
              <Text style={styles.signupbutton}> SignUp</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}


export default LoginForm

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#E4F1FE',    
    justifyContent: 'center',

  },
  top:{
    alignItems: 'center',
  },
  loginText:{
    color:"black",
    fontSize: 28,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor:"rgba(255,255,255,0.1)"
  },
  InputIcons:{
    position:"absolute",
    marginTop: 21,
    left:22
  },
  textInput:{
      width:340,
      marginTop: 10,
      fontSize:20,
      height:50,
      borderRadius: 30,
      borderColor:"black", 
      borderWidth: 2,
      paddingLeft: 50,
  },
  button:{
    width:340,
    backgroundColor: "#19B5FE",
    marginVertical: 10,
    paddingVertical: 16,
    borderRadius: 30,
  },
  buttonText:{
      fontSize:16,
      fontWeight:"500",
      textAlign:"center",
      color:"black"
      
  },
  signuptextcont:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  signuptext:{
    fontSize: 15,
    color:"#67809F",
  },
  signupbutton:{
    fontWeight:"500"

  }
});
