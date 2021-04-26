import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from 'firebase'; 

export default class SignupLoginScreen extends React.Component{
constructor(){
    super();
    this.state = {
        email:'',
        password:''
    }
}
userLogIn=(email,password)=>{
firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
    return alert("User signed in successfully")
}).catch((error)=>{
return alert(error.message);
})

}
userSignUp=(email,password)=>{
firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
    return alert("User added successfully")
}).catch((error)=>{
    return alert(error.message);
})
}

    render(){
        return(
            <View>
<TextInput style={styles.inputButton} keyboardType='email-address' placeholder="Email" onChangeText={(text)=>{this.setState({
    email:text
})

}}></TextInput>
<TextInput style={styles.inputButton} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{this.setState({
    password:text
})}}></TextInput>
<TouchableOpacity style={styles.button} onPress={()=>{this.userSignUp(this.state.email,this.state.password)}}>
    <Text>Sign Up</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={()=>{this.userLogIn(this.state.email,this.state.password)}}>
    <Text>Log In</Text>
</TouchableOpacity>
</View>
        )
    }
}
const styles=StyleSheet.create({
    inputButton:{
      
            width:"90%",
            height:50,
            alignSelf:'center',
            borderColor:'#ffa3a9',
            borderRadius:10,
            borderWidth:1,
            marginTop:20,
            padding:10,
          },
    button:{
        width:"90%",
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    margin:10,
    padding:10,
    backgroundColor:"#bfebff",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    }
}
})