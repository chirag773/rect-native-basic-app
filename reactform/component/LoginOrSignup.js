import React from 'react';
import { StyleSheet, 
         Text, 
         View,
         TouchableOpacity ,
         Button,
         Image
        } from 'react-native';
import Instagram from "../assets/instagram-photo-camera-logo-outline.png"

class LoginOrSignup extends React.Component {

    static navigationOptions = {
        header:null
    }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.Logo}>
         <Image source={Instagram}/>
        </View> */}
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("LoginForm")}
                          style={styles.Loginbutton}
                        >
            <Text style={styles.Loginbuttontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignupForm")} 
                          style={styles.Signupbutton}
                        >
            <Text style={styles.Signupbuttontext}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")} style={styles.Signupbutton}> 
            <Text style={styles.Signupbuttontext}> Go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginOrSignup


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1FE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Logo:{
    paddingBottom: 80,
  },
  Loginbutton:{
    width:200,
    backgroundColor:"#89C4F4",
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 30,
  },
  Signupbutton:{
    width:200,
    backgroundColor:"#00E640",
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 30,
  },
  Loginbuttontext:{
      color:"black",
      fontWeight:"500",
      textAlign:"center",
      fontSize: 16,
  },
  Signupbuttontext:{
    color:"black",
    fontWeight:"500",
    textAlign:"center",
    fontSize: 16,
  }
});
 