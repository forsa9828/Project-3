import React, { Component, FlatList } from "react";
import { StyleSheet } from "react-native";
import { Container, Button, Content, Text } from "native-base";

function ActionList(props) {
	return (
		<Button style={styles.button} onPress={props.clicked}>
			<Text>
				{props.firstName} {props.lastName}
			</Text>
			<Text> {"\n"} {props.date} {props.startTime} {" - "} {props.endTime}</Text>
		</Button>
	);
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		padding: 5,
		margin: 1,
		backgroundColor: "#d6ad86"
	}
});

export default ActionList;
