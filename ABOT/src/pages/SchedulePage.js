import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, ImageBackground } from "react-native";
import {Root} from "native-base";
import ScheduleInfo from "../component/ScheduleInfo";

function SchedulePage() {
	
	return (
		<Root>
			<ScrollView>
			<Text>{"\n"}</Text>
<ScheduleInfo/>

</ScrollView>
		</Root>
	);
}

export default SchedulePage;