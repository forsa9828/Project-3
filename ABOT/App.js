import React from "react";
import { StyleSheet, ScrollView, View, ImageBackground } from "react-native";
import { Root } from "native-base";
import * as Font from "expo-font";
import ReviewPto from "./src/pages/ReviewPto";
import SchedulePage from "./src/pages/SchedulePage";
import RequestOff from "./src/pages/RequestOff";
import Avail from "./src/pages/Avail";
import ManageEmployees from "./src/pages/ManageEmployees";
import EmployeeList from "./src/component/EmployeeList";
import Signup from "./src/pages/Signup";

// const image = {require('/assets/marble.jpg')};

export default function App() {
	return (
		<Root>
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.scrollView}>
					<ImageBackground source={require('./assets/marble.jpg')} style={styles.image}>
						<RequestOff />
					</ImageBackground>
				</ScrollView>
			</View>
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
