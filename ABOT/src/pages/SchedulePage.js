import React, { Component } from "react";
import Table from "../component/Table";
import API from "../utils/API";

class SchedulePage extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			schedules: [],
			error: null,
			isLoaded: false
		};
	}

	componentDidMount() {
		this._isMounted = true;
		API.getSchedule()
			.then(response => {
				console.log(response.data)
				let schedules = response.data;
				this.setState({ schedules });
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
		return schedules.map(schedule => {
			return (
				<Table
					key={schedule.id}
					date={schedule.date}
					firstName={schedule.firstName}
					lastName={schedule.lastName}
					startTime={schedule.startTime}
					endTime={schedule.endTime}
				/>
			);
		});
	}
}

export default SchedulePage;
