import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ReviewPto from "../component/ReviewPto";

function Review() {
	return (
		<View>
<ScrollView contentContainerStyle = {styles.ScrollView}>
<ReviewPto />
</ScrollView>
		</View>
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