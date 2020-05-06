import axios from "axios";

export default {
	getSchedule: function() {
		return axios.get("/api/schedule");
	},

	getRequests: function() {
		return axios.get("/api/requestoff");
	},

	createSchedule: function() {
		return axios.post("/api/schedule")
	},

	postRequests: function() {
		return axios.post("/api/requestoff");
	},

	postAvail: function() {
		return axios.post("/api/avail");
	},

	getAvail: function() {
		return axios.get("/api/avail");
	},

	approveReq: function() {
		return axios.put("/api/requestoff/:id")
	},

	loggedIn: function(data) {
		return axios.get("http://192.168.1.72:8080/auth/loggedin",data);
	},

	logOut: function() {
		return axios.get("/auth/logout");
	},

	logIn: function(data) {
		return axios.post("http://192.168.1.72:8080/auth/signin", data);
	},

	authUser: function(data) {
		return axios.post("http://192.168.1.72:8080/auth/signup", data);
	},

	renderSignup: function() {
		return axios.get("http://192.168.1.72:8080/auth/signup");
	},

	renderSignin: function() {
		return axios.get("http://192.168.1.72:8080/auth/signin");
	}
};
