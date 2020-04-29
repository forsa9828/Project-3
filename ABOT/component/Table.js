// import React, { Component } from "react";
// import { View, Text } from "react-native";

// export default Table = () => {
// 	return (
// 		<View
// 			style={{
// 				flex: 1,
// 				flexDirection: "row",
//                 alignContent: "center",
//                 height: 50
// 			}}
// 		>
//             <View style={{ backgroundColor: "grey", flexDirection: "column", alignItems: "baseline" }}>
// 				<Text>First Name: </Text>
// 			</View>
//             <View style={{backgroundColor: "red", flexDirection: "column", alignItems: "baseline" }}>
//                 <Text>Last Name: </Text>
//             </View>
//             <View style={{backgroundColor: "grey", flexDirection: "column", alignItems: "baseline" }}>
//                 <Text>Date: </Text>
//             </View>
//             <View style={{backgroundColor: "red", flexDirection: "column", alignItems: "baseline" }}>
//                 <Text>Start Time: </Text>
//             </View>
//             <View style={{backgroundColor: "grey", flexDirection: "column", alignItems: "baseline" }}>
//                 <Text>End Time: </Text>
//             </View>
// 		</View>
// 	);
// };
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
	render() {
		return (
			<Container>
				<Header>
					<Text>Current Schedule</Text>
				</Header>
				<Content>
					<ListItem itemDivider>
						<Text>05/01/2020</Text>
					</ListItem>
					<ListItem>
						<Body>
							<Text>Hallie Employee</Text>
							<Text note>{"\n"}9:00am - 5:00pm</Text>
						</Body>
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
					</ListItem>
				</Content>
			</Container>
		);
	}
}
