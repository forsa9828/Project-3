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
              onChangeText={ 
                (value) => props.onValueChange({
                    email: value})}
              />
          </Item>
          <Item>
            <Input 
              name="password"
              value={props.password}
              secureTextEntry= {true}
              placeholder="Password" 
              type="password"
              onChangeText={ 
                (value) => props.onValueChange({
                  password: value})}
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
                  value={props.firstName}
                  placeholder="First Name"
                  onChangeText={
                    (value) => props.onValueChange({
                         firstName: value})}
                  />
              </Item>
              <Item>
                <Input 
                  placeholder="Last Name" 
                  name="last name"
                  value={props.lastName}
                  placeholder="Last Name"
                  onChangeText={ 
                    (value) => props.onValueChange({
                        lastName: value})}
                />
              </Item>
              <Item>
                <Input 
                  placeholder="Email"
                  name="email"
                  value={props.email}
                  placeholder="Email" 
                  onChangeText={ 
                    (value) => props.onValueChange({
                        email: value})}
                 />
              </Item>
              <Item>
                <Input 
                  placeholder="Password" 
                  name="password"
                  secureTextEntry= {true}
                  value={props.password}
                  placeholder="Password"
                  onChangeText={ 
                    (value) => props.onValueChange({
                      password: value})}
                    />
              </Item>
              <Item>

                <Picker 
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  selectedValue={props.position}
                  onValueChange={
                    (value) => props.onValueChange({
                         position: value})}
                  placeholder="Position"
                >
                  <Picker.Item label="Manager" value="key0"/>
                  <Picker.Item label ="Employee" value="key1"/>
                </Picker>
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

