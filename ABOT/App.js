import React, { Component } from "react";
import { StyleSheet, Container, ScrollView } from "react-native";
import { Root, View } from "native-base";
import * as Font from "expo-font";
import ReviewPto from "./src/component/ReviewPto";
// import SchedulePage from "./src/pages/SchedulePage";
// import RequestOff from "./src/pages/RequestOff";
import Avail from "./src/pages/Avail";
// import ManageEmployees from "./src/pages/ManageEmployees";
// import EmployeeList from "./src/component/EmployeeList";
import { NavBar } from "./src/component/Navbar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ManageEmployees from "./src/pages/ManageEmployees";
import SchedulePage from "./src/pages/SchedulePage";
import RequestOff from "./src/pages/RequestOff";
import Review from "./src/pages/Review";


export default function App() {
  return (
	  <Root>
<View style={styles.container}>

<SchedulePage/>

</View>
	  </Root>
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
	}
});
