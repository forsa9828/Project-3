//form for sign up and login
import React, { Component } from "react";
import {
	Header,
	Form,
	Item,
	Input,
	Picker,
	Left,
	Right,
	Body,
	Title,
	Icon,
	Root,
	Container
} from "native-base";
import {
	Button,
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	AsyncStorage
} from "react-native";

export function FormLogin(props) {
	//const navigation = useNavigation();
  
	return (
		<Root>
			<Container>
				<ImageBackground
					style={{
						resizeMode: "cover",
						height: "100%",
						width: "100%"
					}}
					source={require("../images/marble.jpg")}
				>
					<Header transparent androidStatusBarColor='transparent'>
						<Body>
							<Left>
								<Image source={require("../images/logo.png")} />
							</Left>
						</Body>
					</Header>
					<View>
						<Title
							style={{
								textAlign: "right",
								marginRight: 20,
								padding: 10,
								color: "#000000"
							}}
						>
							SIGN IN
						</Title>
						<Form style={{ textAlign: "center", margin: 5, padding: 15 }}>
							<Text>{"\n"}</Text>
							<Text>{"\n"}</Text>
							<Item style={styles.inputStyle}>
								<Input
									name='email'
									value={props.email}
									placeholder='Email'
									onChangeText={value =>
										props.onValueChange({
											email: value.trim()
										})
									}
								/>
								<Text style={styles.errorMsg}>{props.errEmail}</Text>
							</Item>

							<Item style={styles.inputStyle}>
								<Input
									name='password'
									value={props.password}
									secureTextEntry={true}
									placeholder='Password'
									type='password'
									onChangeText={value =>
										props.onValueChange({
											password: value
										})
									}
								/>
								<Text style={styles.errorMsg}>{props.errPswd}</Text>
							</Item>
							<View style={styles.signInBtn}>
								<Button
									color='#d6ad86'
									title='Sign In'
									onPress={props.clickedIn}
								/>
							</View>
							<Text>{"\n"}</Text>
							<View style={styles.signInBtn}>
								<Button
									color='#d6ad86'
									title="Don't have an account? Sign Up"
									onPress={() => props.goToSignUp()}
								/>
							</View>
							<View style={styles.signInBtn}>
								<Button
									color='#d6ad86'
									title='Forgot Password'
									onPress={() => props.forgotPassword()}
								/>
							</View>
							<Text>{"\n"}</Text>
							<Text>{"\n"}</Text>
						</Form>
					</View>
				</ImageBackground>
			</Container>
		</Root>
	);
}

export function FormSignUp(props) {
	return (
		<Root>
			<Container>
				<ImageBackground
					style={{
						resizeMode: "cover",
						height: "100%",
						width: "100%"
					}}
					source={require("../images/marble.jpg")}
				>
					<Header transparent androidStatusBarColor='transparent'>
						<Body>
							<Left>
								<Image source={require("../images/logo.png")} />
							</Left>
						</Body>
					</Header>
					<View>
						<Title
							style={{
								textAlign: "right",
								marginRight: 20,
								padding: 10,
								color: "#000000"
							}}
						>
							SIGN UP
						</Title>
						<Form style={{ textAlign: "center", margin: 5, padding: 15 }}>
							<Item style={styles.inputStyle}>
								<Input
									placeholder='First Name'
									name='first name'
									value={props.firstName}
									onChangeText={value =>
										props.onValueChange({
											firstName: value.trim()
										})
									}
								/>
								<Text style={styles.errorMsg}>{props.nameMsg}</Text>
							</Item>
							<Item style={styles.inputStyle}>
								<Input
									placeholder='Last Name'
									name='last name'
									value={props.lastName}
									onChangeText={value =>
										props.onValueChange({
											lastName: value.trim()
										})
									}
								/>
								<Text style={styles.errorMsg}>{props.lastNameMsg}</Text>
							</Item>
							<Item style={styles.inputStyle}>
								<Input
									placeholder='Email'
									name='email'
									value={props.email}
									onChangeText={value =>
										props.onValueChange({
											email: value.trim()
										})
									}
								/>
								<Text style={styles.errorMsg}>{props.emailMsg}</Text>
							</Item>

							<Item style={styles.inputStyle}>
								<Input
									placeholder='Password'
									name='password'
									secureTextEntry={true}
									value={props.password}
									onChangeText={value =>
										props.onValueChange({
											password: value
										})
									}
								/>
								{/* <Text style={styles.errorMsg}>
                      {props.pswdMsg}
                    </Text> */}
							</Item>
							<Text style={styles.errorMsg}>{props.pswdMsg}</Text>
							<Item style={styles.inputStyle}>
								<Picker
									mode='dropdown'
									iosIcon={<Icon name='arrow-down' />}
									placeholder='Position'
									style={{ width: 370 }}
									selectedValue={props.employmentType}
									onValueChange={value =>
										props.onValueChange({
											employmentType: value
										})
									}
								>
									<Picker.Item label='Manager' value='Manager' />
									<Picker.Item label='Employee' value='Employee' />
								</Picker>
								<Text style={styles.errorMsg}>{props.employMsg}</Text>
							</Item>
							<Item style={styles.inputStyle}>
								<Input
									placeholder='Your Phone Number'
									name='phone number'
									keyboardType='numeric'
									value={props.phone}
									maxLength={10}
									onChangeText={value =>
										props.onValueChange({
											phone: value.trim()
										})
									}
								/>
								<Text style={styles.errorMsg}>{props.phoneMsg}</Text>
							</Item>

							<Item style={styles.inputStyle}>
								<Input
									placeholder='Emergency Contact'
									name='emergencyContact'
									value={props.emergencyContact}
									onChangeText={value =>
										props.onValueChange({
											emergencyContact: value.trim()
										})
									}
								/>
								<Text style={styles.errorMsg}>{props.emerConMsg}</Text>
							</Item>

							<Item style={styles.inputStyle}>
								<Input
									placeholder='Emergency Contact Phone Number'
									name='emergencyContactPhone'
									keyboardType='numeric'
									maxLength={10}
									value={props.emergencyContactPhone}
									onChangeText={value =>
										props.onValueChange({
											emergencyContactPhone: value.trim()
										})
									}
								/>
								<Text style={styles.errorMsg}>{props.emerPhoneMsg}</Text>
							</Item>
							<View style={styles.signInBtn}>
								<Button
									color='#d6ad86'
									title='Sign Up'
									onPress={props.clicked}
								/>
							</View>
							<View style={styles.signInBtn}>
								<Button
									title='Go Back'
									color='#d6ad86'
									onPress={() => props.goBack()}
								/>
							</View>
							<Text>{"\n"}</Text>
							<Text>{"\n"}</Text>
						</Form>
					</View>
				</ImageBackground>
			</Container>
		</Root>
	);
}

const styles = StyleSheet.create({
	errorMsg: {
		color: "red",
		textAlign: "center",
		marginRight: 15
	},

	container: {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor: "#D6AB86",
		padding: 20,
		margin: 10
	},

	inputStyle: {
		marginTop: 12,
		marginRight: 5,
		marginLeft: 5,
		backgroundColor: "#F0FFFF"
	},

	signInBtn: {
		padding: 10,
		marginTop: 5,
		marginHorizontal: 25
	},

});
