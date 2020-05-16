import React, { Component } from "react";
import { Alert } from "react-native";
import FormAvailPto from "../component/FormAvailPto";
import { ActionSheet } from "native-base";
import API from "../utils/API";
import moment from "moment";

class Avail extends Component {
	constructor() {
		super();
		this.state = {
			firstName: null,
			lastName: null,
			date: null,
			startTime: null,
			endTime: null,
		};
	}

	onValueChange = value => {
		this.setState(value)
	};

	dateOption = event => {
		event.preventDefault();
		const BUTTONS = [
			`${moment()
				.add(7, "days")
				.format("L")}`,
			`${moment()
				.add(8, "days")
				.format("L")}`,
			`${moment()
				.add(9, "days")
				.format("L")}`,
			`${moment()
				.add(10, "days")
				.format("L")}`,
			`${moment()
				.add(11, "days")
				.format("L")}`,
			`${moment()
				.add(12, "days")
				.format("L")}`,
			"Cancel"
		];
		ActionSheet.show(
			{
				options: BUTTONS,
				cancelButtonIndex: 6,
				title: "Please select a date from the list below:"
			},
			buttondIndex => {
				if (buttondIndex === 0) {
					this.setState({ date: BUTTONS[0] });
				} else if (buttondIndex === 1) {
					this.setState({ date: BUTTONS[1] });
				} else if (buttondIndex === 2) {
					this.setState({ date: BUTTONS[2] });
				} else if (buttondIndex === 3) {
					this.setState({ date: BUTTONS[3] });
				} else if (buttondIndex === 4) {
					this.setState({ date: BUTTONS[4] });
				} else if (buttondIndex === 5) {
					this.setState({ date: BUTTONS[5] });
				} else {
					ActionSheet.hide();
				}
			}
		);
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
			: this.state.startTime == null || this.state.startTime.length > 7
			? Alert.alert("Please enter a valid start time.")
			: this.state.endTime == null || this.state.endTime.length > 7
			? Alert.alert("Please enter a valid end time.")
			: API.postAvail({ firstName, lastName, date, startTime, endTime })
					.then(Alert.alert("Request Success!"))
					.then(this.setState({
						firstName: null,
						lastName: null,
						date: null,
						startTime: null,
						endTime: null
					}))
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
				dateOptions={this.dateOption}
				startTime={this.state.startTime}
				endTime={this.state.endTime}
				onValueChange={this.onValueChange}
				clicked={this.handleFormSubmit}
			/>
		);
	}
}

export default Avail;
