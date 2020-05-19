import React, { Component } from "react";
import { View, Body, ListItem, Text } from "native-base";
import { StyleSheet } from "react-native";

function Table(props) {
	return (
		<View>
			<ListItem itemDivider style = {styles.dateField}>
				<Text >{props.date}</Text>
			</ListItem>
			<ListItem>
				<Body>
					<Text>
						{props.firstName} {props.lastName}
					</Text>
					<Text >
						{"\n"}
						{props.startTime}
						{" - "}
						{props.endTime}
					</Text>
				</Body>
			</ListItem>
			<Text>{"\n"}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	dateField: {
		flex: 10,
		backgroundColor: "#d6ab86",
		textAlign: "left"
	}
});

export default Table;
