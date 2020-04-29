//reference to form already built

import React, { Component } from "react";
import {
	Container,
	Header,
	Content,
	Form,
	Item,
	Input,
	Label,
	Text
} from "native-base";

export default class FormAvailPto extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Form>
						<Item stackedLabel>
							<Label>First Name</Label>
							<Input />
						</Item>
						<Item stackedLabel>
							<Label>Last Name</Label>
							<Input />
						</Item>
						<Item stackedLabel>
							<Label>Date</Label>
							<Input />
						</Item>
						<Item stackedLabel>
							<Label>Start Time</Label>
							<Input />
						</Item>
						<Item stackedLabel>
							<Label>End Time</Label>
							<Input />
						</Item>
						<Button small primary>
							<Text>Submit</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
