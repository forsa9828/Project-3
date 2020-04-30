import React, { Component } from "react";
import {
	Container,
	Header,
	Content,
	List,
	Body,
	ListItem,
	Text
} from "native-base";
export default class Table extends Component {
	render(props) {
		return (
			<Container>
				<Content>
					<ListItem itemDivider>
						<Text>{props.date}</Text>
					</ListItem>
					<ListItem>
						<Body>
							<Text>{props.firstname}{' '}{props.lastname}</Text>
							<Text note>{"\n"}{props.starttime}{' - '}{props.endtime}</Text>
						</Body>
					</ListItem>
					{/* <ListItem>
						<Body>
							<Text>Employee Name</Text>
							<Text note>{"\n"}Start Time - End Time</Text>
						</Body>
					</ListItem>
					<ListItem>
						<Body>
							<Text>Employee Name</Text>
							<Text note>{"\n"}Start Time - End Time</Text>
						</Body>
					</ListItem>
					<ListItem itemDivider>
						<Text>05/02/2020</Text>
					</ListItem>
					<ListItem>
						<Body>
							<Text>Employee Name</Text>
							<Text note>{"\n"}Start Time - End Time</Text>
						</Body>
					</ListItem>
					<ListItem>
						<Body>
							<Text>Employee Name</Text>
							<Text note>{"\n"}Start Time - End Time</Text>
						</Body>
					</ListItem> */}
				</Content>
			</Container>
		);
	}
}
