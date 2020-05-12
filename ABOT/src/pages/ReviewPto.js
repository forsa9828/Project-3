import React, { Component } from "react";
import { Alert, Text } from "react-native";
import { ActionSheet } from "native-base";
import ActionList from "../component/ActionList";
import API from "../utils/API";

export default class ReviewPto extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			ptoRequests: [],
			error: null,
			isLoaded: false
		};
	}

	componentDidMount() {
		this._isMounted = true;
		API.getRequests()
			.then(response => {
				let ptoRequests = response.data;
				this.setState({ ptoRequests });
				ptoRequests === []
					? Alert.alert("There are no requests to review!")
					: this.render;
			})
			.catch(error => console.log(error))
			.finally(() => {
				this.setState({ isLoaded: false });
			});
	}

	componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}

	handleClick = event => {
		event.preventDefault();
		const BUTTONS = ["Approve", "Deny", "Cancel"];
		const DESTRUCTIVE_INDEX = 1;
		const CANCEL_INDEX = 2;
		ActionSheet.show(
			{
				options: BUTTONS,
				cancelButtonIndex: CANCEL_INDEX,
				destructiveButtonIndex: DESTRUCTIVE_INDEX,
				title: "Select a response to this request:"
			},
			buttonIndex => {
				if (buttonIndex === 1) {
					Alert.alert("Request denied");
				} else if (buttonIndex === 0) {
					API.approveReq({ id, date })
					.then(Alert.alert("Request approved"))
					.catch(function(err) {
						console.log(err);
					});
				} else {
					ActionSheet.hide();
				}
			}
		);
	};

	render() {
		let { ptoRequests } = this.state;
		return ptoRequests.map(ptoRequest => {
			return (
				<ActionList
					key={ptoRequest.id}
					firstName={ptoRequest.firstName}
					lastName={ptoRequest.lastName}
					date={"\n"+ptoRequest.date}
					startTime={"\n"+ptoRequest.startTime + " -"}
					endTime={ptoRequest.endTime}
					clicked={this.handleClick}
				/>
			);
		});
	}
}

//managers only -- handled by the nav bar - do not need to build this logic in

// render from db a list of requests from that table
// swipe for approve and swipe for deny
// need to implement in the backend the function to update from denied default to approve
// in native base the current swipe deletes from the list would then leave the default value of false and would need to update the pending status to false
// some logic for showing: findAll pending: true
//pending queue of time off requests only
//avail of others
//ascending orders of updated at (the newest change request)
