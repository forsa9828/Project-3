import React, { Component } from "react";
import {Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Container, Header, Content, Form, Item, Input, Picker, Left, Right, Body, Title, Icon} from "native-base";


class ForgotPassword extends Component{
    state={
       email:"",
       emailMsg: ""
    }


    onValueChange= (value) => {
        this.setState(value)
    }


    sendEmailSubmit= () => {
        const {email} = this.state;
        //check email format first
        const checkEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        if(!checkEmail.test(email)){
            console.log(email)
            this.setState(
                {
                    emailMsg: "Enter valid email",
                })
        }else{
            console.log("good to go")
            //add logic to send email
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
                      <Title>Forgot Password</Title>
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