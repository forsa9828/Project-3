//form for sign up and login 

import React, {Component} from "react";
import {Text, View, Picker, TextInput, Button, StyleSheet} from "react-native";

//email and password reuseable code in both signup and login
export class Form extends Component {
    state ={
        email:"",
        password: "" 
    }

    //function here to handle change 

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.formLabel}> Demo Form </Text>
                <View>
                <TextInput
                    style={styles.inputStyle}
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                />
                <TextInput
                    style={styles.inputStyle}
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                />
                </View>
            </View>
        )
    }
}

// https://blog.logrocket.com/build-better-forms-with-react-native-ui-components/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
    },
  
    formLabel: {
      fontSize: 20,
      color: '#fff',
    },
    inputStyle: {
      marginTop: 20,
      width: 300,
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: '#DCDCDC',
    },
    formText: {
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 20,
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
  });
//signup

//login