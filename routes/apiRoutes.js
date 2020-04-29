const db = require("../models");
const sequelize = require("sequelize");

module.exports = app => {
	// Get all examples
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

	// Delete a request off by id -- not implemented
	app.delete("/api/requestoff/:id", (req, res) => {
		db.Schedule.destroy({ where: { id: req.params.id } }).then(dbSchedule => {
			res.json(dbSchedule);
		});
	});
};
