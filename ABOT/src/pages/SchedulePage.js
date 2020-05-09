import React, { Component } from "react";
import Table from "../component/Table";
import { Alert, View, Text } from "react-native";
import API from "../utils/API";

class SchedulePage extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			schedules: [],
			error: null,
			isLoaded: false,
			// firstName,
			// lastName: null,
			// date: null,
			// startTime: null,
			// endTime: null
		};
	}

	componentDidMount() {
		this._isMounted = true;
		API.getSchedule()
			.then(response => {
				let schedules = response.data;
				this.setState({ schedules });
				// const { firstName, lastName, date, startTime, endTime }  = this.state

				console.log(schedules);
			})
			.catch(error => console.error(error))
			.finally(() => {
				this.setState({ isLoaded: false });
			});
	}

	componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}

	render() {
		let { schedules } = this.state;
		// console.log(schedules)
		return schedules.map(schedule => {
		return (
			<Table
				date = {schedule.date}
				{...console.log(schedule.date)}
				firstName = {schedule.firstName}
				lastName = {schedule.lastName}
				startTime = {schedule.startTime}
				endTime = {schedule.endTime}
				
				/>
					);
				})
				}
}

export default SchedulePage;
