//form for sign up and login 
import React, { Component } from "react";
import { Container, Header, Content, Form, Item, Input, Picker, Left, Right, Body, Title, Icon} from "native-base";
import {Button, StyleSheet, Text, TouchableOpacity } from "react-native";


export function FormLogin(props) {
  
  return (
    <Container>
        <Header>
          <Left />
            <Body>
              <Title>Login</Title>
            </Body>
          <Right />
       </Header>
       <Content style={styles.container}>
        <Form>
          <Item rounded style={styles.inputStyle}>
            <Input 
              name="email"
              value={props.email}
              placeholder="Email" 
              onChangeText={(value) => props.onValueChange(
                {
                  email: value.trim()
                }
              )}
              /> 
              <Text style={styles.errorMsg}>
              {props.errEmail}
            </Text>
          </Item>
         
          <Item rounded style={styles.inputStyle}>
            <Input
              name="password"
              value={props.password}
              secureTextEntry= {true}
              placeholder="Password" 
              type="password"
              onChangeText={(value) => props.onValueChange(
                {
                  password: value
                }
              )}
              />
              <Text style={styles.errorMsg}>
              {props.errPswd}
            </Text>
          </Item>
         
          <TouchableOpacity style={styles.btnStyle}>
          <Button 
              title="Submit"
              onPress={props.clickedIn}
          />
          </TouchableOpacity>
    </Form>
    </Content>
  </Container>
    );
  
  }

 

export function  FormSignUp (props) {
  return (

    <Container>
      <Header>
        <Left />
          <Body>
            <Title>Sign Up</Title>
          </Body>
        <Right />
      </Header>

          <Content style={styles.container}>
            <Form>
              <Item  style={styles.inputStyle}>
                <Input 
                  placeholder="First Name" 
                  name="first name"
                  value={props.firstname}
                  onChangeText={(value) => props.onValueChange(
                    {
                      firstname: value.trim()
                    }
                  )}
                  />
                  <Text style={styles.errorMsg}>
                    {props.nameMsg}
                  </Text>
              </Item>
              {/* <Text style={styles.errorMsg}>
              {props.nameMsg}
            </Text> */}
              <Item style={styles.inputStyle}>
                <Input 
                  placeholder="Last Name" 
                  name="last name"
                  value={props.lastname}
                  onChangeText={(value) => props.onValueChange(
                      {
                        lastname: value.trim()
                      }
                    )}
                />
                <Text style={styles.errorMsg}>
                  {props.lastNameMsg}
                </Text>
              </Item>
              <Item style={styles.inputStyle}>
                <Input 
                  placeholder="Email"
                  name="email"
                  value={props.email}
                  onChangeText={(value) => props.onValueChange(
                      {
                        email: value.trim()
                      }
                    )}
                 />
                  <Text style={styles.errorMsg}>
                    {props.emailMsg}
                 </Text>
              </Item>
              
              <Item style={styles.inputStyle}>
                <Input 
                  placeholder="Password"
                  name="password"
                  secureTextEntry= {true}
                  value={props.password}
                  onChangeText={(value) => props.onValueChange(
                    {
                      password: value
                    }
                  )}
                    />
                     {/* <Text style={styles.errorMsg}>
                      {props.pswdMsg}
                    </Text> */}
              </Item>
                   <Text style={styles.errorMsg}>
                      {props.pswdMsg}
                    </Text>
              <Item  style={styles.inputStyle}>
                <Picker 
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Position"
                  selectedValue={props.employmentType}
                  onValueChange={(value) => props.onValueChange(
                      {
                        employmentType: value
                      }
                    )}
                  >
                  <Picker.Item label="Manager" value="Manager"/>
                  <Picker.Item label ="Employee" value="Employee"/>
                </Picker>
                <Text style={styles.errorMsg}>
                {props.employMsg}
              </Text>
              </Item>
              <Item  style={styles.inputStyle}>
                <Input 
                  placeholder="Your Phone Number" 
                  name="phone number"
                  keyboardType="numeric"
                  value={props.phone}
                  maxLength={10}
                  onChangeText={(value) => props.onValueChange(
                    {
                      phone: value.trim()
                    }
                  )}
                  />
                   <Text style={styles.errorMsg}>
                    {props.phoneMsg}
                  </Text>
              </Item>
             
              <Item style={styles.inputStyle}>
                <Input 
                  placeholder="Emergency Contact"
                  name="emergencyContact"
                  value={props.emergencyContact}
                  onChangeText={(value)=> props.onValueChange(
                    {
                      emergencyContact: value.trim()
                    }
                  )}
                 />
                  <Text style={styles.errorMsg}>
                    {props.emerConMsg}
                  </Text>
              </Item>
             
              <Item style={styles.inputStyle}>
                <Input
                  placeholder="Emergency Contact Phone Number"
                  name="emergencyContactPhone"
                  keyboardType="numeric"
                  maxLength={10}
                  value={props.emergencyContactPhone}
                  onChangeText={(value)=> props.onValueChange(
                    {
                      emergencyContactPhone: value.trim()
                    }
                  )}
                 />
                 <Text style={styles.errorMsg}>
                  {props.emerPhoneMsg}
                </Text>
              </Item>

              <TouchableOpacity style={styles.btnStyle}>
              <Button 
                title= "Submit"
                 onPress={props.clicked}
              />
              </TouchableOpacity>
              
            </Form>
          </Content>
    </Container>
  )
    
};

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

 

  loginStyle: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
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
