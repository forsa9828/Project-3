import React, { Component } from "react";
import {
	Modal,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	TextInput,
	Alert
} from "react-native";
import API from "../utils/API";

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

	render() {
		const { modalVisible, users } = this.state;
		return users.map(user => {
			return (
				<View>
					<Text>
						{user.firstName} {user.lastName}{" "}
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

									<TouchableHighlight
										style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
										onPress={() => {
											const { firstName, lastName } = this.state;
											API.createUser({ firstName, lastName })
												.then(this.setModalVisible(!modalVisible))
												.then(Alert.alert("Employee submitted successfully!"))
												.catch(function(err) {
													console.log(err);
												});
										}}
									>
										<Text style={styles.textStyle}>Submit new employee</Text>
									</TouchableHighlight>
									<TouchableHighlight
										style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
										onPress={() => {
											this.setModalVisible(!modalVisible);
										}}
									>
										<Text style={styles.textStyle}>Cancel</Text>
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
				</View>
			);
		});
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
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	openButton: {
		backgroundColor: "#F194FF",
		borderRadius: 20,
		padding: 10,
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
	}
});

export default ManageEmployees;
