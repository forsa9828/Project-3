import React, { Component } from "react";
import {Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Container, Header, Content, Form, Item, Input, Picker, Left, Right, Body, Title, Icon} from "native-base";
import API from "../utils/API";


class ForgotPassword extends Component{
    state={
       email:"",
       password: "",
       emailMsg: "",
       pswdMsg: "",
    }


    onValueChange= (value) => {
        this.setState(value)
    }


    sendEmailSubmit= () => {
        const {email, password} = this.state;
        console.log(password, email)
        //check email format first
        const checkEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        const passwordRegEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/;

        
        if(!checkEmail.test(email)){
           
            this.setState(
                {
                    emailMsg: "Enter valid email",
            })
        // }else if(!passwordRegEx.test(password)){
        //     this.setState(
        //         {
        //             emailMsg: "",
        //             pswdMsg: "Password must have: 8-10 characters. a lowercase letter, an uppercase letter, one numeric digit, and one special character"

        //     })
        
        }else{
            console.log("good to go")
            this.setState(
                {
                    emailMsg: "",
                    pswdMsg: ""

            })

            API.forgotPassword({
                email,
                password
            })
            .then(res=> console.log(res))
            //add logic here if email doesn't exist, can't update
            .catch(error => console.log(error))
        }
        
    }

    //this method will allow to go to sign IN screen
    goToSignIn=() =>{
        //add route to go to signIN
        //ex: this.props.navigation.navigate('Signin')
    }



    render(){
        return (
            <Container>
                <Header>
                
                    <Body>
                      <Title>Forgot Password? Create New One</Title>
                    </Body>
                 
               </Header>
               <Content style={styles.container}>
                <Form>
                  <Item rounded style={styles.inputStyle}>
                    <Input 
                      name="email"
                      value={this.state.email}
                      placeholder="Email" 
                      onChangeText={(value) => this.onValueChange(
                        {
                          email: value.trim()
                        }
                      )}
                      /> 
                      <Text style={styles.errorMsg}>
                      {this.state.emailMsg}
                    </Text>
                  </Item>
                 
                  <Item rounded style={styles.inputStyle}>
                    <Input 
                      name="password"
                      value={this.state.password}
                      placeholder="Enter new password" 
                      secureTextEntry= {true}
                      onChangeText={(value) => this.onValueChange(
                        {
                          password: value.trim()
                        }
                      )}
                      /> 
                  </Item>
                  <Text style={styles.errorMsg}>
                      {this.state.pswdMsg}
                    </Text>
                 
                 
                  <TouchableOpacity style={styles.btnStyle}>
                  <Button 
                      title="Submit"
                      onPress={this.sendEmailSubmit}
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Button 
                      title="Go Back to Login"
                      //onPress={this.goToSignIn}
                  />
                  </TouchableOpacity>
               
            </Form>
            </Content>
          </Container>
        );
    }
}

export default ForgotPassword;

const styles = StyleSheet.create({
    errorMsg:{
      color: "red",
      textAlign: "center",
      marginRight: 15
    },
    container:{
        // flex: 1,
        backgroundColor: "#d6ad86",
       
    },

    inputStyle:{
        marginTop: 12,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: "#F0FFFF",
      },
    
    btnStyle: {
        // borderRadius: 20,
        width: 100,
        marginTop: 10,
        paddingHorizontal: 13,
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        marginLeft: 140,
      },
    
})