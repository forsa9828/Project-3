//nothing new to add
import React, { Component } from "react";
import { Root } from "native-base";
import { FormLogin } from "../component/Form";
import API from "../utils/API";
import { Alert, Stylesheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SchedulePage from "./SchedulePage";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../component/Navbar";

class SignIn extends Component {
constructor(props){
	super(props)
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
		const { email, password, isLoggedIn } = this.state;
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
			)
				.then(response => {
					//res from server- still needs work
					if (!response) {
						console.log("no response");
					} //maybe add below?
					// else if(managerLoggedIn == true){
					//     console.log("manager in")
					//     //add route to manager navbar
					// }
					else if (response === null) {
						console.log("no such user");
					} else {
						console.log("good to go");
						let isLoggedIn = true;
						this.setState({ isLoggedIn });
						console.log(isLoggedIn);
						// Alert.alert("Welcome Back!");
					}
				})
				.then(
					isLoggedIn => {
					if(!isLoggedIn) {
						
						Alert.alert("Oh no! Something went wrong. Please try again later.");
						
					} else {
						
						API.getCurrentUser(email)
						.then(response => {
							let users = response.data[0];
							this.setState({ users })
							let type = this.state.users.employmentType
							console.log(userName, userLastName, type)
							if(type === "Employee"){

							this.props.navigation.navigate('NavBar');
							} else {
								this.props.navigation.navigate('NavBarManager');
							}
						})
					}
					
				}
				) 
					//will show a catch error if user doesn't exist in db
				.catch(error => {
					console.log(error);
				});
		}
		//now need to get user info and pass it
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
