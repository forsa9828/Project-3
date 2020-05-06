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

		this.state !== ""
			? Alert.alert(
					"Uh oh, you might be missing some information, please make sure all fields are filled out."
			  )
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


// {this.props.register ? (
//     <React.Fragment>

//     <Item stackedLabel>
//         <Label>Start Time</Label>
//         <Input />
//     </Item>
//     <Item stackedLabel>
//         <Label>End Time</Label>
//         <Input />
//     </Item>
//     </React.Fragment>)
//      : null}
//     <Button small primary>
//         <Text>Submit</Text>
//     </Button>
// </Form>