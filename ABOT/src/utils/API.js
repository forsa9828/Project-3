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

	loggedIn: function() {
		return axios.get("/auth/loggedin");
	},

	logOut: function() {
		return axios.get("/auth/logout");
	},

	logIn: function() {
		return axios.post("/auth/signin");
	},

	authUser: function() {
		return axios.post("/auth/signup");
	},

	renderSignup: function() {
		return axios.get("auth/signup");
	},

	renderSignin: function() {
		return axios.get("/auth/signin");
	}
};
