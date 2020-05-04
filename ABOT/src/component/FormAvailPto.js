import React, { Component } from "react";
import { Button } from 'react-native';
import { Form, Item, Input, Label, Text } from "native-base";

function FormAvailPto(props) {
	return (
		<Form>
			<Item stackedLabel>
				<Label>First Name</Label>
				<Input value={props.firstName} />
			</Item>
			<Item stackedLabel>
				<Label>Last Name</Label>
				<Input value={props.lastName} />
			</Item>
			<Item stackedLabel>
				<Label>Date</Label>
				<Input value={props.date} />
			</Item>
			<Item stackedLabel>
				<Label>Start Time</Label>
				<Input value={props.startTime} />
			</Item>
			<Item stackedLabel>
				<Label>End Time</Label>
				<Input value={props.endTime} />
			</Item>
			<Button title="Submit" onPress={props.clicked}/>
		</Form>
	);
}

export default FormAvailPto;
