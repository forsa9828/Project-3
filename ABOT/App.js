import 'react-native-gesture-handler';
import React, {Component} from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Root, Container, Form } from "native-base";
import * as Font from 'expo-font';
import Avail from "./src/pages/Avail";
import ManageEmployees from "./src/pages/ManageEmployees";
import EmployeeList from "./src/component/EmployeeList";
import NavBar from "./src/component/Navbar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/pages/Signin';
import MyHeader from "./src/component/MyHeader"
import SignUp from './src/pages/Signup';



export default function App() {
  return (
	  <Root>
	<NavigationContainer style={styles.container}>
<SignUp/>
	</NavigationContainer>
	  </Root>

  );
}


const styles = StyleSheet.create({
	container: {
		flex: 10,
	},
	scroll: {
		marginHorizontal: 5
	},

	  });
