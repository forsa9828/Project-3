import React, { Component } from "react";
import FormAvailPto from "../FormAvailPto";

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

	handleFormSubit = event => {
		event.preventDefault();
	};

	render() {
		return (
			<FormAvailPto>
				<Input name='firstname' value={this.setState.firstname} />
				<Input name='lastname' value={this.setState.lastname} />
				<Input
					name='date'
					value={this.setState.date}
					onChange={this.handleInputChange}
				/>
				<Input
					name='starttime'
					value={this.setState.starttime}
					onChange={this.handleInputChange}
				/>
				<Input
					name='endtime'
					value={this.setState.endtime}
					onChange={this.handleInputChange}
				/>
				<Button onClick={this.handleFormSubit} />
			</FormAvailPto>
		);
	}
}

export default RequestOff;
