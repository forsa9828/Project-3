import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Table from "./src/component/Table";
import RequestOff from "./src/pages/RequestOff";
import SchedulePage from "./src/pages/SchedulePage";

export default function App() {
	return (
		<View style={styles.container}>
			<SchedulePage
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		backgroundColor: "#fff",
		alignItems: "stretch",
		justifyContent: "space-evenly"
	}
});
