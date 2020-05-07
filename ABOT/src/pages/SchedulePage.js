import React, { Component } from "react";
import Table from "../component/Table";
import API from "../utils/API";

class SchedulePage extends Component {
	constructor() {
		super();
		state = {
			// firstName: "",
			// lastName: "",
			// date: "",
			// startTime: "",
			// endTime: "",
			schedules: []
		};
	}

	componentDidMount() {
		API.getSchedule().then(res => this.setState({ schedules: res.data }));
		console.log(res);
	}

	render() {
		return (
			<Table>
				{this.state.schedules.map(schedule => {
					return (
						<Text
							date={this.state.schedule.date}
							firstName={this.schedule.firstName}
							lastName={this.schedule.lastName}
							startTime={this.schedule.startTime}
							endTime={schedule.endTime}
						/>
					);
				})}
			</Table>
		);
	}
}

export default SchedulePage;
