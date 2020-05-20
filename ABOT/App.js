import 'react-native-gesture-handler';
import React, {Component} from "react";
import { Root } from 'native-base';
import * as Font from 'expo-font';
import SignIn from "./src/pages/Signin";
import SignUp from "./src/pages/Signup";
import ForgotPassword from "./src/pages/ForgotPassword";
// import Table from "./src/component/Table";
import RequestOff from "./src/pages/RequestOff";
import SchedulePage from "./src/pages/SchedulePage";
// import FormAvailPto from "./src/component/FormAvailPto";
// import ActionList from "./src/component/ActionList";
// import NavBar from "./src/component/Navbar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Image, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import {AppContainer} from "./src/component/AuthNav";



export default class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = { loading: true };
	}
  async componentDidMount() {
	  await Font.loadAsync({
		Roboto: require('native-base/Fonts/Roboto.ttf'),
		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
	  });
	  this.setState({ loading: false });
	}
  render() {
	  if (this.state.loading) {
		return (
		  <Root>
			<AppLoading />
		  </Root>
		);
	  } else {
		return (
		  <Root>
			<AppContainer />
		  </Root>
		);
	  }
// return(
// 	  <Root>
//  		  <SignUp />
//  	  </Root>
// )
	}
  };

