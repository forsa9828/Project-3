import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Root } from "native-base";
import * as Font from 'expo-font';
import SignIn from "./src/pages/Signin";
import SignUp from "./src/pages/Signup";
import ForgotPassword from "./src/pages/forgotPassword";
// import Table from "./src/component/Table";
// import RequestOff from "./src/pages/RequestOff";
// import SchedulePage from "./src/pages/SchedulePage";
// import FormAvailPto from "./src/component/FormAvailPto";
// import ActionList from "./src/component/ActionList";
// import ReviewPto from "./src/pages/ReviewPto";
// import SchedulePage from "./src/pages/SchedulePage";
// import RequestOff from "./src/pages/RequestOff";
// import Avail from "./src/pages/Avail";
// import ManageEmployees from "./src/pages/ManageEmployees";
// import EmployeeList from "./src/component/EmployeeList";


export default function App() {
	return (
<Root>

		{/* <SignIn /> */}
			{/* <SignUp /> */}
			<ForgotPassword />
		
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
	}
});
