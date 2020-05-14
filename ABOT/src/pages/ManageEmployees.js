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
import EmployeeList from "../component/EmployeeList";

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
			<View>
				<EmployeeList />

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
									onPress={() => {
										const { firstName, lastName } = this.state;
										API.createUser({ firstName, lastName })
											.then(this.setModalVisible(!modalVisible))
											.then(this.setState())
											.catch(function(err) {
												console.log(err);
											})
											.finally(Alert.alert("Employee submitted successfully!"))
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
			</View>
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
		elevation: 5,
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
		textAlign: "center",
		
		
	}
});

export default ManageEmployees;
