import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, ImageBackground } from "react-native";
import {Root} from "native-base";
import ScheduleInfo from "../component/ScheduleInfo";

function SchedulePage() {
	
	return (
		<Root>
		<ImageBackground
			style={{
				resizeMode: "cover",
				height: "100%",
				width: "100%"
			}}
			source={require("../images/marble.jpg")}
			>
			<ScrollView>
			<Text>{"\n"}</Text>
<ScheduleInfo/>

</ScrollView>
</ImageBackground>
		</Root>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		backgroundColor: "#fff",
		alignItems: "stretch",
		justifyContent: "space-evenly"
	},
	scroll: {
		marginHorizontal: 5
	},
	image: {
		flex: 1,
		resizeMode: 'cover'
	}
});

export default SchedulePage;