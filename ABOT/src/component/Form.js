//form for sign up and login 
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Picker, Left, Right, Body, Title, Icon} from "native-base";

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
            placeholder="Email" />
        </Item>
        <Item>
          <Input 
            name="password"
            value={props.password}
            placeholder="Password" />
        </Item>
    </Form>
  </Container>
    );
  
  }

 

export function  FormSignUp () {
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
                <Input placeholder="First Name" />
              </Item>
              <Item>
                <Input placeholder="Last Name" />
              </Item>
              <Item>
                <Input 
                  placeholder="Email" />
              </Item>
              <Item>
                <Input 
                  placeholder="Password" />
              </Item>
              <Item>
                <Picker 
                  mode="dropdown"
                  placeholder="Position" //place holder not showing up...
                   iosIcon={<Icon name="arrow-down" />}
                  //  selectedValue={this.state.selected2} //comment ths out to let us know we need somethin like this from state
                  //  onValueChange={this.onValueChange2.bind(this)} //comment this out to let us know we need this type of method 
                >
                  <Picker.Item label="Manager" />
                  <Picker.Item label ="Employee" />
                </Picker>
              </Item>
            </Form>
          </Content>

    </Container>
  )
    
};

