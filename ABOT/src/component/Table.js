import React, { Component } from "react";
import { View, Container, List, Body, ListItem, Text } from "native-base";

function Table(props) {
	return (
		<View>
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
		</View>
	);
}

export default Table;
