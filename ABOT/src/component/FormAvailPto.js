import React, { Component } from "react";
import { Button } from 'react-native';
import { Form, Item, Input, Label, Text } from "native-base";

function FormAvailPto(props) {
	return (
		<Form>
			<Item stackedLabel>
				<Label>First Name</Label>
				<Input value={props.firstname} />
			</Item>
			<Item stackedLabel>
				<Label>Last Name</Label>
				<Input value={props.lastname} />
			</Item>
			<Item stackedLabel>
				<Label>Date</Label>
				<Input value={props.date} />
			</Item>
			<Item stackedLabel>
				<Label>Start Time</Label>
				<Input value={props.starttime} />
			</Item>
			<Item stackedLabel>
				<Label>End Time</Label>
				<Input value={props.endtime} />
			</Item>
			<Button title="Submit" onPress={props.clicked}/>
		</Form>
	);
}

export default FormAvailPto;
