const db = require("../models");
const sequelize = require("sequelize");

module.exports = app => {
	app.get("/api/schedule", (req, res) => {
		//this is to display the full work schedule currently
		db.schedule
			.findAll({
				order: [sequelize.col("date")]
			})
			.then(dbschedule => {
				res.json(dbschedule);
			});
	});

	app.post("/api/schedule", (req, res) => {
		//this is to create schedule entries in db (manager creating the schedule)
		db.schedule
			.create({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				date: Date.parse(req.body.date),
				startTime: req.body.startTime,
				endTime: req.body.endTime
			})
			.then(dbschedule => {
				res.json(dbschedule);
			});
	});

	// show the data submitted in the below post that exists in current db
	app.get("/api/requestoff", (req, res) => {
		db.pto
			.findAll({
				order: [sequelize.col("date")]
			})
			.then(dbpto => {
				res.json(dbpto);
			});
	});

	// Create a request off
	app.post("/api/requestoff", (req, res) => {
		//this is to be able to add the request off
		console.log("api route hit");
		let newRequest = req.body;
		console.log(newRequest);
		db.pto
			.create({
				firstName: newRequest.firstName,
				lastName: newRequest.lastName,
				date: newRequest.date,
				startTime: newRequest.startTime,
				endTime: newRequest.endTime,
				approved: newRequest.approved
			})
			.then(dbpto => {
				res.json(dbpto);
			});
	});

	app.post("/api/avail", (req, res) => {
		//this is to be able to add availability for the week
		db.availability
			.create({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				date: Date.parse(req.body.date),
				startTime: req.body.startTime,
				endTime: req.body.endTime
			})
			.then(dbavailability => {
				res.json(dbavailability);
			});
	});

	app.get("/api/avail", (req, res) => {
		db.availability
			.findAll({
				order: [sequelize.col("date")]
			})
			.then(dbavailability => {
				res.json(dbavailability);
			});
	});

	// Update a PTO request from false to true
	app.put("/api/requestoff/:id", (req, res) => {
		db.pto
			.update({ approved: true }, { where: { id: req.params.id } })
			.then(dbpto => {
				res.json(dbpto);
			});
	});
};
