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
				!ptoRequests === []
					? <Text>There are no requests to review!</Text>
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

	handleClick = (key) => {
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
					API.denyReq(key)
					.then(Alert.alert("Request denied"));
				} else if (buttonIndex === 0) {
					API.approveReq(key)
					.then(!err ? Alert.alert("Request approved") : null)
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
					clicked={() => this.handleClick(ptoRequest.id, ptoRequest.date)}
				/>
			);
		});
	}
}
