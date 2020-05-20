import React, { Component } from "react";
import { FormLogin } from "../component/Form";
import API from "../utils/API";
import { Alert } from "react-native";

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			emailMsg: "",
			pswdMsg: "",
			isLoggedIn: false,
			users: {}
		};
	}

	onValueChange = value => {
		this.setState(value);
	};

	//this is method allows to go to forgotPassword screen
	forgotPassword = () => {
		this.props.navigation.navigate("ForgotPassword");
	};

	//this method will allow to go to sign up screen
	goToSignUp = () => {
		this.props.navigation.navigate("Signup");
	};

	signInSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		// //validation here
		const checkEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;

		if (!checkEmail.test(email)) {
			this.setState({
				emailMsg: "Enter valid email"
			});
		} else if (password == "") {
			this.setState({
				emailMsg: "",
				pswdMsg: "Enter your password"
			});
			console.log("nothing here");
		} else {
			this.setState({ pswdMsg: "" });

			API.logIn(
				{
					email,
					password
				},
				{
					//headers are to check network errors if any
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer "
					}
				}
			).then(response => {
				console.log(response);
				if (!response) {
					Alert.alert(
						"Oh no! We are experiencing some network issues. Please try again later."
					);
				} else if (response === null) {
					Alert.alert("User does not exist.");
				} else {
					console.log("good to go");
					let isLoggedIn = true;
					this.setState({ isLoggedIn });
					console.log(isLoggedIn);

					API.getCurrentUser(email)
						.then(response => {
							let users = response.data[0];
							console.log(users);
							this.setState({ users });
							let type = this.state.users.employmentType;
							if (type === "Employee") {
								this.props.navigation.navigate("NavBar");
								Alert.alert("Welcome back " + users.firstName + "!");
							} else {
								this.props.navigation.navigate("NavBarManager");
								Alert.alert("Welcome back " + users.firstName + "!");
							}
						})
						.catch(error => {
							console.log(error);
						});
				}
			});
		}
	};

	render() {
		return (
			<FormLogin
				email={this.state.email}
				password={this.state.password}
				onValueChange={this.onValueChange}
				clickedIn={this.signInSubmit}
				checkEmail={this.checkEmail}
				errEmail={this.state.emailMsg}
				errPswd={this.state.pswdMsg}
				forgotPassword={this.forgotPassword}
				goToSignUp={this.goToSignUp}
			/>
		);
	}
}
export default SignIn;
