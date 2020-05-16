import 'react-native-gesture-handler';
import React, {Component} from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Root, Container } from "native-base";
import * as Font from 'expo-font';
import SignIn from "./src/pages/Signin";
import SignUp from "./src/pages/Signup";
import ForgotPassword from "./src/pages/forgotPassword";
// import Table from "./src/component/Table";
// import RequestOff from "./src/pages/RequestOff";
// import SchedulePage from "./src/pages/SchedulePage";
// import FormAvailPto from "./src/component/FormAvailPto";
// import ActionList from "./src/component/ActionList";
import ReviewPto from "./src/pages/ReviewPto";
import SchedulePage from "./src/pages/SchedulePage";
import RequestOff from "./src/pages/RequestOff";
import Avail from "./src/pages/Avail";
import ManageEmployees from "./src/pages/ManageEmployees";
import EmployeeList from "./src/component/EmployeeList";
import NavBar from "./src/component/Navbar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Image, TouchableOpacity } from 'react-native';



export default function App() {
  return (
	<Container style={styles.container}>
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
	</Container>
  );
}


const styles = StyleSheet.create({
	container: {
		flex: 10,
		backgroundColor: "#fff",
		alignItems: "stretch",
		justifyContent: "space-evenly"
	},
	scroll: {
		marginHorizontal: 5
	},

	  });

