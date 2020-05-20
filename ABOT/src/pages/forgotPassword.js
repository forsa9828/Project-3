import React, { Component } from "react";
import {Button, Text, View, StyleSheet, ImageBackground, Image, Alert } from "react-native";
import { Container, Header, Root, Form, Item, Input, Picker, Left, Right, Body, Title, Icon} from "native-base";
import API from "../utils/API";


class ForgotPassword extends Component{
    state={
       email:"",
       password: "",
       emailMsg: "",
       pswdMsg: "Password must have: 8-10 characters. a lowercase letter, an uppercase letter, one numeric digit, and one special character",
       isLoggedIn: false
    }

    onValueChange= (value) => {
        this.setState(value)
    }


    sendEmailSubmit= () => {
        const {email, password} = this.state;
  
        const checkEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        const passwordRegEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/;

        
        if(!checkEmail.test(email)){
            this.setState(
                {
                  emailMsg: "Enter valid email",
                })
       }
       else if(!passwordRegEx.test(password)){
            this.setState(
                {
                    emailMsg: "",
                    pswdMsg: "Password must have: 8-10 characters. a lowercase letter, an uppercase letter, one numeric digit, and one special character"
            })
        
        }else{
            this.setState(
                {
                    emailMsg: "",
                    pswdMsg: ""
                })
       
            API.forgotPassword({
                email,
                password
            }).then(response=>{ 
        
              API.getCurrentUser(email).then(response => {
                let users = response.data[0];
                if (typeof users === "undefined") {
                  Alert.alert("User is not found.");
                } else {
                  this.setState({ users });
                  let firstName = this.state.users.firstName;
                  let lastName = this.state.users.lastName;
                  if (firstName === firstName && lastName === lastName) {
                    Alert.alert("Password changed successfully!")
                    this.props.navigation.navigate("Signin");
                  } else {
                    Alert.alert(
                      "User information does not match. Contact employer."
                    );
                  }
                }
              });
            })
          .catch(error => console.log(error.response))   
          }
        
    }

  
    goToSignIn=() =>{
        this.props.navigation.navigate('Signin')
    }



    render(){
        return (
          <Root>
			<Container>
				<ImageBackground
					style={{
						resizeMode: "cover",
						height: "100%",
						width: "100%"
					}}
					source={require("../images/marble.jpg")}
				>
					<Header transparent androidStatusBarColor='transparent'>
						<Body>
							<Left>
								<Image source={require("../images/logo.png")} />
							</Left>
						</Body>
					</Header>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
					<View>
						<Title
							style={{
								textAlign: "center",
								marginRight: 20,
								padding: 10,
								color: "#000000"
							}}
						>
							Forgot password?
						</Title>
                <Form style={{ textAlign: "center", margin: 5, padding: 15 }}>
                  <Item style={styles.inputStyle}>
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
                 
                  <Item style={styles.inputStyle}>
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
                
                  <View style={styles.myBtn}>
                  <Button 
                  color='#d6ad86'
                      title="Submit"
                      onPress={this.sendEmailSubmit}
                  />
                  </View>
                  <View style={styles.myBtn}>
                  <Button 
                  color='#d6ad86'
                      title="Go Back to Login"
                      onPress={()=> this.goToSignIn("Signin")}
                  />
                  </View>
            </Form>
            </View>
            </ImageBackground>
            </Container>
            </Root>
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
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#D6AB86",
      padding: 20,
      margin: 10
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
      myBtn: {
        padding: 10,
        marginTop: 5,
        marginHorizontal: 25
      }
    
})