import React, { Component } from "react";
import { Text, ScrollView, ImageBackground } from "react-native";
import {Root} from "native-base";
import ReviewPto from "../component/ReviewPto";

function Review() {
	
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
<ReviewPto />

</ScrollView>
</ImageBackground>
		</Root>
	);
}


export default Review;