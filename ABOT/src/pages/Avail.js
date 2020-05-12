import React, { Component } from "react";
import { Alert } from "react-native";
import FormAvailPto from "../component/FormAvailPto";
import API from "../utils/API";

class Avail extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			date: "",
			startTime: "",
			endTime: "",
		};
	}

	// componentDidMount = () => {
	// 	API.loggedIn()
	// 	.then(this.state = {
	// 		firstName: ,
	// 		lastName: 
	// 	});
	// };

	onValueChange = value => {
		this.setState(value)
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
			: API.postAvail({ firstName, lastName, date, startTime, endTime })
					.then(Alert.alert("Request Success!"))
					.catch(function(err) {
						console.log(err);
						console.log("Promise Rejected");
					});
	};

	render() {
		return (
			<FormAvailPto
			title="Submit Availability!"
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

export default Avail;
