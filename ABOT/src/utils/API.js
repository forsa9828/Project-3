import axios from "axios";

export default {
	getSchedule: function() {
		return axios.get("/api/schedule");
	},

	getRequests: function() {
		return axios.get("/api/requestoff");
	},

	postRequests: function() {
		return axios.post("exp://192.168.1.210:19000/api/requestoff");
	},

	postAvail: function() {
		return axios.post("/api/avail");
	},

	deleteRequest: function() {
		return axios.destroy("/api/requestoff/:id");
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
