import React, { Component } from "react";
import ActionList from "./ActionList";
import { Alert, Text } from "react-native";
import { ActionSheet } from "native-base";
import API from "../utils/API";

class EmployeeList extends Component {
	_isMounted = false;
	state = {
		users: []
	};

	componentDidMount() {
		this._isMounted = true;
		API.getUser()
			.then(response => {
				let users = response.data;
				this.setState({ users });
				users === []
					? Alert.alert("There are no employees! Go add some.")
					: this.render;
			})
			.catch(error => console.log(error))
			.finally(() => {
				this.setState({ isLoaded: false });
			});
	}

	handleClick = key => {
		// event.preventDefault();
		console.log(key)
		const BUTTONS = ["Delete", "Cancel"];
		const DESTRUCTIVE_INDEX = 0;
		const CANCEL_INDEX = 1;
		ActionSheet.show(
			{
				options: BUTTONS,
				cancelButtonIndex: CANCEL_INDEX,
				destructiveButtonIndex: DESTRUCTIVE_INDEX,
				title: "Would you like to delete the employee?"
			},
			buttonIndex => {
				if (buttonIndex === 0) {
					
					API.deleteUser(key)
					.then(Alert.alert("Employee has been deleted"))
				} else {
					ActionSheet.hide();
				}
			}
		);
	};

	render() {
		const { users } = this.state;
		return users.map(user => {
			return (
				<ActionList
					key={user.id}
					firstName={user.firstName}
					lastName={user.lastName}
					clicked={() => this.handleClick(user.id)}
				/>
			);
		});
	}
}

export default EmployeeList;
