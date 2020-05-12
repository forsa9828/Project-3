import React, { Component } from "react";
import { Alert, View, Text } from "react-native";
import FormAvailPto from "../component/FormAvailPto";
import API from "../utils/API";
import ValidationComponent from "react-native-form-validator";

class RequestOff extends ValidationComponent {
	constructor(props) {
		super(props);
		this.state = {
			firstName: null,
			lastName: null,
			date: null,
			startTime: null,
			endTime: null
		};
	}

	onValueChange = value => {
		this.setState(value);
	};

	handleFormSubmit = event => {
		event.preventDefault();
		const { firstName, lastName, date, startTime, endTime } = this.state;
		this.state.firstName == null
			? Alert.alert("Please enter your first name.")
			: this.state.lastName == null
			? Alert.alert("Please enter your last name.")
			: this.state.date == null
			? Alert.alert("Please enter a valid date in MM/DD/YYYY format.")
			: this.state.startTime == null
			? Alert.alert("Please enter a valid start time.")
			: this.state.endTime == null
			? Alert.alert("Please enter a valid end time.")
			: API.postRequests({ firstName, lastName, date, startTime, endTime })
					.then(Alert.alert("Request Success!"))
					.catch(function(err) {
						console.log(err);
						console.log("Promise Rejected");
					});
	};

	render() {
		return (
			<View>
				<FormAvailPto
				title="Submit a time off request!"
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					date={this.state.date}
					startTime={this.state.startTime}
					endTime={this.state.endTime}
					onValueChange={this.onValueChange}
					clicked={this.handleFormSubmit}
				/>
			</View>
		);
	}
}

export default RequestOff;
