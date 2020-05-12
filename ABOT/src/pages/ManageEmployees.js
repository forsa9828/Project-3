import React, { Component } from "react";
import {
	Modal,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	TextInput
} from "react-native";
import Table from "../component/Table";
import API from "../utils/API";

class ManageEmployees extends Component {
	state = {
        modalVisible: false,
        firstName: "",
        lastName: ""
	};

    onValueChange = value => {
		this.setState(value);
    };
    
	setModalVisible = visible => {
		this.setState({ modalVisible: visible });
    };
    
    // oncomponent mount to get users from db and display in table view

	render() {
		const { modalVisible } = this.state;
		return (
           <View>
                <Text>Hallie Rae </Text>
            
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
                                onChangeText={value => this.onValueChange({ firstName: value })}
							></TextInput>
							<TextInput
								style={styles.modalText}
                                placeholder='Employee last name'
                                value={this.state.lastName}
                                onChangeText={value => this.onValueChange({ lastName: value })}
							></TextInput>

							<TouchableHighlight
								style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
								onPress={() => {
                                    const { firstName, lastName } = this.state;
                                    console.log(firstName)
                                    // Add in the function to submit first name and last name to db -- needs to be created first in back end and then called in API.js
									this.setModalVisible(!modalVisible);
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
