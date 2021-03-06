import React, { Component } from "react";
import {
	Modal,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	TextInput,
	Alert,
	ScrollView,
	ImageBackground
} from "react-native";
import API from "../utils/API";
import EmployeeList from "../component/EmployeeList";
import { Root, Header, Title, Body, Left } from "native-base";


class ManageEmployees extends Component {
	_isMounted = false;
	state = {
		modalVisible: false,
		firstName: "",
		lastName: "",
		users: []
	};


	onValueChange = value => {
		this.setState(value);
	};

	setModalVisible = visible => {
		this.setState({ modalVisible: visible });
	};

	render() {
		const { modalVisible } = this.state;
		return (
			<Root>
				<ScrollView>
					<ImageBackground
						style={{
							resizeMode: "cover",
							height: "100%",
							width: "100%"
						}}
						source={require("../images/marble.jpg")}
					>
						<Text>{"\n"}</Text>
						<Text>{"\n"}</Text>
						<Text
							style={{
								textAlign: "left",
								margin: 5,
								fontSize: 20,
								padding: 10,
								color: "#000000",
								width: "100%"
							}}
						>
							MANAGE EMPLOYEES
						</Text>
						<Text>{"\n"}</Text>
						<Text style={styles.infoText}>
							Adding new employees below will give them access to sign up for an
							ABOT account, view the schedule, submit availability, and submit
							time off requests to you. You may delete employee access by
							selecting their information below and choosing the delete option.
						</Text>

						<View style={styles.centeredView}>
							<Modal
								animationType='slide'
								transparent={true}
								visible={modalVisible}
							>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<TextInput
											style={styles.modalText}
											placeholder='Employee first name'
											value={this.state.firstName}
											onChangeText={value =>
												this.onValueChange({ firstName: value })
											}
										></TextInput>
										<TextInput
											style={styles.modalText}
											placeholder='Employee last name'
											value={this.state.lastName}
											onChangeText={value =>
												this.onValueChange({ lastName: value })
											}
										></TextInput>
										<TextInput
											style={styles.modalText}
											placeholder='Employee email'
											value={this.state.email}
											onChangeText={value =>
												this.onValueChange({ email: value })
											}
										></TextInput>

										<TouchableHighlight
											onPress={() => {
												const { firstName, lastName, email } = this.state;
												API.createUser({ firstName, lastName, email })
													.then(this.setModalVisible(!modalVisible))
													.catch(function(err) {
														console.log(err);
													})
													.finally(
														Alert.alert("Employee submitted successfully!")
													);
											}}
										>
											<Text style={styles.openButton}>Submit new employee</Text>
										</TouchableHighlight>
										<TouchableHighlight
											onPress={() => {
												this.setModalVisible(!modalVisible);
											}}
										>
											<Text style={styles.openButton}>Cancel</Text>
										</TouchableHighlight>
									</View>
								</View>
							</Modal>

							<TouchableHighlight
								style={styles.openButton}
								onPress={() => {
									this.setModalVisible(true);
								}}
							>
								<Text style={styles.textStyle}>Add a new employee</Text>
							</TouchableHighlight>
						</View>
						<EmployeeList />
					</ImageBackground>
				</ScrollView>
			</Root>
		);
	}
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		elevation: 5
	},
	openButton: {
		backgroundColor: "#d6ad86",
		padding: 10,
		margin: 8,
		elevation: 2
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	},
	infoText: {
		marginHorizontal: 15
	}
});

export default ManageEmployees;
