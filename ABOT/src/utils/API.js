import axios from "axios";

export default {
	getSchedule: function() {
		return axios.get("http://192.168.0.6:8080/api/schedule");
	},

	getRequests: function() {
		return axios.get("http://192.168.0.6:8080/api/requestoff");
	},

	getPending: function() {
		return axios.get("http://192.168.0.6:8080/api/pendingrequest");
	},

	createSchedule: function(data) {
		return axios.post("http://192.168.0.6:8080/api/schedule", data)
	},

	postRequests: function(data) {
		return axios.post("http://192.168.0.6:8080/api/requestoff", data);
	},

	postAvail: function(data) {
		return axios.post("http://192.168.0.6:8080/api/schedule", data);
	},

	getAvail: function() {
		return axios.get("http://192.168.0.6:8080/api/avail");
	},

	approveReq: function(key) {
		return axios.put(`http://192.168.0.6:8080/api/approverequestoff/${key}`)
	},

	denyReq: function(key) {
		return axios.put(`http://192.168.0.6:8080/api/denyrequestoff/${key}`)
	},

	createUser: function(data) {
		return axios.post("http://192.168.0.6:8080/api/user", data)
	},


	getUser: function() {
		return axios.get("http://192.168.0.6:8080/api/user");
	},

	deleteUser: function(key) {
		return axios.delete(`http://192.168.0.6:8080/api/user/${key}`)
	},

	loggedIn: function() {
		return axios.get("http://192.168.0.6:8080/auth/loggedin");
	},

	logOut: function() {
		return axios.get("http://192.168.0.6:8080/auth/logout");
	},

	logIn: function(data) {
		return axios.post("http://192.168.0.6:8080/signin", data);
	},

	authUser: function(data) {
		return axios.post("http://192.168.0.6:8080/auth/signup", data);
	},

	forgotPassword: function(data) {
		return axios.post("http://192.168.0.6:8080/forgotpassword", data);
	},

	renderSignup: function() {
		return axios.get("http://192.168.0.6:8080/auth/signup");
	},

	renderSignin: function() {
		return axios.get("http://192.168.0.6:8080/auth/signin");
	},

	getCurrentUser: function(email) {
		return axios.get(`http://192.168.0.6:8080/api/user/${email}`)
	}
};


