import React, { Component } from "react";
import { Container, List, Body, ListItem, Text } from "native-base";

function Table(props) {
	return (
		<Container>
			<ListItem itemDivider>
				<Text>{props.date}</Text>
			</ListItem>
			<ListItem>
				<Body>
					<Text>
						{props.firstName} {props.lastName}
					</Text>
					<Text note>
						{"\n"}
						{props.startTime}
						{" - "}
						{props.endTime}
					</Text>
				</Body>
			</ListItem>
		</Container>
	);
}

export default Table;
