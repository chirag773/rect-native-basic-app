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


class SignupForm extends React.Component {

    static navigationOptions = {
        header:null
    }

    state = {
      email:"",
      username:"",
      password:""
    }

    signUpUsers = (email,password)=>{
      try{
        if(this.state.password.length<8){
          alert("please enter atleast 8 character")
        }
        firebase.auth().createUserWithEmailAndPassword(email,password)
      }
      catch(err){
        console.log(err.toString);
        
      }
    }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.loginText}>S I G N U P</Text>
        </View>
        <View>
          <Icons name="ios-mail" size={28}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                    placeholder="Email"
                    autoCorrect={false}
                    placeholderTextColor="black"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onSubmitEditing={event => {
                    this.refs.txtPassword.focus();
                    }}
                    onChangeText={email =>  this.setState({email:email})}
          />
        </View>
        <View>
          <Icons name="ios-person-outline" size={28}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                    placeholder="Username"
                    placeholderTextColor="black"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={username =>  this.setState({username:username})}
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
                    onChangeText={password =>  this.setState({password:password})}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.signUpUsers(this.state.email,this.state.password)}>
            <Text style={styles.buttonText}>
                Signup 
            </Text> 
        </TouchableOpacity>   
        <View style={styles.signuptextcont}>
            <Text style={styles.signuptext}>
                Already have an account? 
            </Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("LoginForm")}> 
                <Text style={styles.signupbutton}> SignIn</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignupForm

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: "#E4F1FE",
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
    fontWeight:"500",
  }
});
