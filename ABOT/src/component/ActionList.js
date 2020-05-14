import React, { Component } from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";

function ActionList(props) {
	return (
		<View>
			<TouchableHighlight style={styles.button} onPress={props.clicked}>
				<Text>
					{props.firstName} {props.lastName} {props.date}
					{props.startTime} {props.endTime}
					{props.phone}
					{props.emergencyContact}
					{props.emergencyContactPhone}
				</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		padding: 10,
		margin: 1,
		backgroundColor: "#d6ad86"
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10
	}
});

export default ActionList;
