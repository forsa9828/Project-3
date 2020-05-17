import 'react-native-gesture-handler';
import React, {Component} from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Root, Container } from "native-base";
import * as Font from 'expo-font';
import SignIn from "./src/pages/Signin";
import SignUp from "./src/pages/Signup";
import ForgotPassword from "./src/pages/ForgotPassword";
// import Table from "./src/component/Table";
import RequestOff from "./src/pages/RequestOff";
// import SchedulePage from "./src/pages/SchedulePage";
// import FormAvailPto from "./src/component/FormAvailPto";
// import ActionList from "./src/component/ActionList";
import NavBar from "./src/component/Navbar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Image, TouchableOpacity } from 'react-native';


function App() {
  return (
	
		// <ScrollView>
			// <NavigationContainer>
			// 	<NavBar />
			// </NavigationContainer>
		
		/* </ScrollView> */


	<Root>
	{/* // 	/* //  <ForgotPassword /> 
	// 	//  <AppContainer />   */}
		<SignIn />
	{/* <RequestOff /> */}
	 </Root>
  );
}

export default App;

{/* // const styles = StyleSheet.create({ */}
// 	container: {
// 		flex: 10,
// 		backgroundColor: "#fff",
// 		alignItems: "stretch",
// 		justifyContent: "space-evenly"
// 	},
// 	scroll: {
// 		marginHorizontal: 5
// 	},

// 	  });

