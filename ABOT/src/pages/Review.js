import React, { Component } from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import {Root} from "native-base";
import ReviewPto from "../component/ReviewPto";

function Review() {
	
	return (
		<Root>
		<ScrollView>
		<ImageBackground
			style={{
				resizeMode: "cover",
				height: "100%",
				width: "100%"
			}}
			source={require("../images/marble.jpg")}
		>
<ReviewPto />
</ImageBackground>
</ScrollView>
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

export default Review;