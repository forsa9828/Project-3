import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Form, Item, Input, Label } from "native-base";

function FormAvailPto(props) {
	return (
		<View>
			<Text style={styles.inputText}>{props.title}</Text>
			<Form style={styles.formBody}>
				<Item stackedLabel>
					<Label style={styles.inputText}>First Name</Label>
					<Input
						value={props.firstName}
						onChangeText={value => props.onValueChange({ firstName: value })}
					/>
				</Item>
				<Item stackedLabel>
					<Label style={styles.inputText}>Last Name</Label>
					<Input
						style={styles.fixToText}
						value={props.lastName}
						onChangeText={value => props.onValueChange({ lastName: value })}
					/>
				</Item>
				<Item stackedLabel style={styles.fixToText}>
					<Button
						color='#d6ad86'
						title='Select date'
						onPress={props.dateOptions}
					></Button>
					<Text style={styles.date}>{props.date}</Text>
				</Item>
				<Item stackedLabel>
					<Label style={styles.inputText}>Start Time</Label>
					<Input
						value={props.startTime}
						placeholder='08:00am'
						onChangeText={value => props.onValueChange({ startTime: value })}
					/>
				</Item>
				<Item stackedLabel>
					<Label style={styles.inputText}>End Time</Label>
					<Input
						value={props.endTime}
						placeholder='12:00pm'
						onChangeText={value => props.onValueChange({ endTime: value })}
					/>
				</Item>
				<View style={styles.openButton}>
					<Button color='#d6ad86' title='Submit' onPress={props.clicked} />
				</View>
			</Form>
		</View>
	);
}

const styles = StyleSheet.create({
	inputText: {
		fontWeight: "bold"
	},
	dateButton: {
		flex: 1,
		backgroundColor: "#d6ad86",
		color: "#d6ad86"
	},
	openButton: {
		padding: 10,
		flexDirection: "row",
		marginTop: 5,
		marginLeft: 5
	},
	fixToText: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	date: {
		marginRight: 25,
		fontSize: 16
	},
	formBody: {
		marginVertical: 50
	}
});
export default FormAvailPto;
