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
              />
          </Item>
          <Item>
            <Input 
              name="password"
              value={props.password}
              placeholder="Password" 
              type="password"
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
                  />
              </Item>
              <Item>
                <Input 
                  placeholder="Last Name" 
                  name="last name"
                  value={props.firstName}
                  placeholder="Last Name" 
                />
              </Item>
              <Item>
                <Input 
                  placeholder="Email"
                  name="email"
                  value={props.email}
                  placeholder="Email" />
              </Item>
              <Item>
                <Input 
                  placeholder="Password" 
                  name="password"
                  value={props.password}
                  placeholder="Password"/>
              </Item>
              <Item>

                <Picker 
                  mode="dropdown"
                   iosIcon={<Icon name="arrow-down" />}
                  //  selectedValue={props.position}
                  //  onValueChange={this.onValueChange2.bind(this)} //comment this out to let us know we need this type of method 
                >
                  <Picker.Item label="Manager" value={props.position} />
                  <Picker.Item label ="Employee" value ={props.position}/>
                </Picker>
              </Item>
              <Button 
                title="Submit"
              />
            </Form>
          </Content>

    </Container>
  )
    
};

