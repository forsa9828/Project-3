//form for sign up and login 
import React, { Component } from "react";
import { Container, Header, Content, Form, Item, Input, Picker, Left, Right, Body, Title, Icon} from "native-base";
import {Button} from "react-native";


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
        <Form>
          <Item>
            <Input
              name="email"
              value={props.email}
              placeholder="Email" 
              onChangeText={(value) => props.onValueChange(
                {
                  email: value
                }
              )}
              />
          </Item>
          <Item>
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
          </Item>
          <Button 
              title="Submit"
          />
    </Form>
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

          <Content>
            <Form>
              <Item>
                <Input 
                  placeholder="First Name" 
                  name="first name"
                  value={props.firstname}
                  onChangeText={(value) => props.onValueChange(
                    {
                      firstname: value
                    })}
                  />
              </Item>
              <Item>
                <Input 
                  placeholder="Last Name" 
                  name="last name"
                  value={props.lastname}
                  onChangeText={(value) => props.onValueChange(
                      {
                        lastname: value
                      }
                    )}
                />
              </Item>
              <Item>
                <Input 
                  placeholder="Email"
                  name="email"
                  value={props.email}
                  onChangeText={(value) => props.onValueChange(
                      {
                        email: value
                      }
                    )}
                 />
              </Item>
              <Item>
                <Input 
                  placeholder="Password" 
                  name="password"
                  secureTextEntry= {true}
                  value={props.password}
                  placeholder="Password"
                  onChangeText={(value) => props.onValueChange(
                    {
                      password: value
                    }
                  )}
                    />
              </Item>
              <Item>
                <Picker 
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  selectedValue={props.employmentType}
                  onValueChange={(value) => props.onValueChange(
                      {
                        employmentType: value
                      }
                    )}
                  placeholder="Position"
                >
                  <Picker.Item label="Manager" value="Manager"/>
                  <Picker.Item label ="Employee" value="Employee"/>
                </Picker>
              </Item>
              <Item>
                <Input 
                  placeholder="Your Phone Number" 
                  name="phone number"
                  value={props.phone}
                  onChangeText={(value) => props.onValueChange(
                    {
                      phone: value
                    }
                  )}
                    />
              </Item>
              <Item>
                <Input
                  placeholder="Emergency Contact"
                  name="emergencyContact"
                  value={props.emergencyContact}
                  onChangeText={(value)=> props.onValueChange(
                    {
                      emergencyContact: value
                    }
                  )}
                 />
              </Item>
              <Item>
                <Input
                  placeholder="Emergency Contact Phone Number"
                  name="emergencyContactPhone"
                  value={props.emergencyContactPhone}
                  onChangeText={(value)=> props.onValueChange(
                    {
                      emergencyContactPhone: value
                    }
                  )}
                 />
              </Item>
              <Button 
                title="Submit"
                onPress={props.clicked}
              />
            </Form>
          </Content>

    </Container>
  )
    
};

