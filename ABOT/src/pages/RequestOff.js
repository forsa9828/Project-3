import React, { Component } from "react";
import { Alert } from "react-native";
import FormAvailPto from "../component/FormAvailPto";
import API from "../utils/API";

class RequestOff extends Component {
	state = {
		firstName: "",
		lastName: "",
		date: "",
		startTime: "",
		endTime: ""
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		const {firstName, lastName, date, startTime, endTime} = this.state
		API.postRequests({firstName, lastName, date, startTime, endTime})		
		.then(res => console.log(res.data))
		.catch(function(err) {
			console.log(err);
			console.log("Promise Rejected");
		});
		// Alert.alert("Request Success!");
	};

	render() {
		return (
			<FormAvailPto
				firstName={this.setState.firstName}
				lastName={this.setState.lastName}
				date={this.setState.date}
				startTime={this.setState.startTime}
				endTime={this.setState.endTime}
				clicked={this.handleFormSubmit}
			/>
		);
	}
}

export default RequestOff;
