import 'react-native-gesture-handler';
import React, {Component} from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Root, Container } from "native-base";
import * as Font from 'expo-font';
import Avail from "./src/pages/Avail";
import ManageEmployees from "./src/pages/ManageEmployees";
import EmployeeList from "./src/component/EmployeeList";
import NavBar from "./src/component/Navbar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {
  return (
	  <Root>
	<Container style={styles.container}>
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
	</Container>
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
