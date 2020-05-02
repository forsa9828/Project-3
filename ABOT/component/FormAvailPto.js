//reference to form already built

import React, { Component } from "react";
import { Form, Item, Input, Label, Text } from "native-base";

handleInputChange = props => {
	firstname = this.firstname.value
	lastname = this.lastname.value
}


function FormAvailPto() {
	return (
		<Form>
			<Item stackedLabel>
				<Label>First Name</Label>
				<Input name="firstname" value={props.firstname} />
			</Item>
			<Item stackedLabel>
				<Label>Last Name</Label>
				<Input name="lastname" value={props.lastname}/>
			</Item>
			<Item stackedLabel>
				<Label>Date</Label>
				<Input name="date" value={props.date}/>
			</Item>
			<Item stackedLabel>
				<Label>Start Time</Label>
				<Input name="starttime" value={props.starttime}/>
			</Item>
			<Item stackedLabel>
				<Label>End Time</Label>
				<Input name="endtime" value={props.endtime}/>
			</Item>
			<Button small primary>
				<Text>Submit</Text>
			</Button>
		</Form>
	);
}

export default FormAvailPto;
