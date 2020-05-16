import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Form, Item, Input, Label } from "native-base";

function FormAvailPto(props) {
	return (
		<View>
			<Text style={styles.titleText}>{props.title}</Text>
			<Form>
				<Item stackedLabel>
					<Label>First Name</Label>
					<Input
						value={props.firstName}
						onChangeText={value => props.onValueChange({ firstName: value })}
						/>
				</Item>
				<Item stackedLabel>
					<Label>Last Name</Label>
					<Input
						value={props.lastName}
						onChangeText={value => props.onValueChange({ lastName: value })}
						/>
				</Item>
				<Item stackedLabel>
					<Button color="#d6ad86" title="Select date" onPress={props.dateOptions} >
					</Button>
					<Text>{props.date}</Text>
					</Item>
				<Item stackedLabel>
					<Label>Start Time</Label>
					<Input
						value={props.startTime}
						placeholder='08:00am'
						onChangeText={value => props.onValueChange({ startTime: value })}
					/>
				</Item>
				<Item stackedLabel>
					<Label>End Time</Label>
					<Input
						value={props.endTime}
						placeholder='12:00pm'
						onChangeText={value => props.onValueChange({ endTime: value })}
					/>
				</Item>
				<Button color="#d6ad86" title='Submit' onPress={props.clicked} />
			</Form>
		</View>
	);
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10
	},
	dateButton: {
		flex: 1,
		backgroundColor: "#d6ad86",
		color: "#d6ad86",
		
	},openButton: {
		backgroundColor: "#d6ad86",
		padding: 10,
		margin: 8,
		elevation: 2
	}
});
export default FormAvailPto;
