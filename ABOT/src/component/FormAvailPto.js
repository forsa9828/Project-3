import React, { Component } from "react";
import { Button } from "react-native";
import { Form, Item, Input, Label, Text } from "native-base";

function FormAvailPto(props) {
	return (
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
				<Label>Date</Label>
				<Input
					value={props.date}
					placeholder="MM/DD/YYYY"
					placeholderTextColor = "yellow"
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
	);
}

export default FormAvailPto;
