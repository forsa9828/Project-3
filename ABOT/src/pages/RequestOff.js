import React, { Component } from "react";
import { Alert } from "react-native";
import FormAvailPto from "../component/FormAvailPto";
import API from "../utils/API";

class RequestOff extends Component {
	state = {
		date: "",
		starttime: "",
		endtime: ""
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.postRequests()
		Alert.alert("Request Success!");
	};

	render() {
		return (
			<FormAvailPto
				firstname={this.setState.firstname}
				lastname={this.setState.lastname}
				date={this.setState.date}
				starttime={this.setState.starttime}
				endtime={this.setState.endtime}
				clicked={this.handleFormSubmit}
			/>
		);
	}
}

export default RequestOff;
