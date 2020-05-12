import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Form, Item, Input, Label } from "native-base";

function FormAvailPto(props) {
	return (
		<View>
			<Text style={styles.titleText} >{props.title}</Text>
		<Form>
			<Item stackedLabel>
				<Label>First Name</Label>
				<Input
					placeholder="First"
					value={props.firstName}
					onChangeText={value => props.onValueChange({ firstName: value })}
					/>
			</Item>
			<Item stackedLabel>
				<Label>Last Name</Label>
				<Input
				placeholder="Last"
				value={props.lastName}
				onChangeText={value => props.onValueChange({ lastName: value })}
				/>
			</Item>
			<Item stackedLabel>
				<Label>Date</Label>
				<Input
					value={props.date}
					placeholder="MM/DD/YYYY"
					onChangeText={value => props.onValueChange({ date: value })}
					/>
			</Item>
			<Item stackedLabel>
				<Label>Start Time</Label>
				<Input
					value={props.startTime}
					placeholder="08:00am"
					onChangeText={value => props.onValueChange({ startTime: value })}
					/>
			</Item>
			<Item stackedLabel>
				<Label>End Time</Label>
				<Input
					value={props.endTime}
					placeholder="12:00pm"
					onChangeText={value => props.onValueChange({ endTime: value })}
					/>
			</Item>
			<Button title='Submit' onPress={props.clicked} />
		</Form>
					</View>
	);
}

const styles = StyleSheet.create({
	titleText: {
	  fontSize: 20,
	  fontWeight: "bold",
	  margin: 10
	}
  });
export default FormAvailPto;
