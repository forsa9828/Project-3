import React, { Component } from "react";
import { Alert } from "react-native";
import FormAvailPto from "../component/FormAvailPto";
import API from "../utils/API";
import { Input } from "native-base";

class RequestOff extends Component {
	constructor(){
		super();
		this.state = {
			firstName: "",
			lastName: "",
			date: "",
			startTime: "",
			endTime: ""
		}
	};

onValueChange= value => {
	this.setState(value)
}

	handleFormSubmit = event => {
		event.preventDefault();
		const { firstName, lastName, date, startTime, endTime } = this.state;
		console.log({firstName, lastName, date, startTime, endTime});
		API.postRequests({ firstName, lastName, date, startTime, endTime })
			.then(res => console.log(res.data), Alert.alert("Request Success!"))
			.catch(function(err) {
				console.log(err);
				console.log("Promise Rejected");
			});
	};

	render() {
		return (
			<FormAvailPto
				firstName={this.state.firstName}
				lastName={this.state.lastName}
				date={this.state.date}
				startTime={this.state.startTime}
				endTime={this.state.endTime}
				onValueChange={this.onValueChange}
				clicked={this.handleFormSubmit}
				/>
				);
	}
}

export default RequestOff;
