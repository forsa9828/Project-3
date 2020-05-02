import React, { Component } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

MyAlert() = {
	render() {
		return Alert.alert(title= "Request Sucess", message="Succesful submit.", {
			text: "OK",
			onPress: () => console.log("OK Pressed")
		});
	}
}

export default MyAlert;
