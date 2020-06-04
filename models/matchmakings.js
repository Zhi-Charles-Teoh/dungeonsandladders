const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
	start_time:{ type: Date, required: true },
	session_location:{ type: String, required: true },
	game:{ type: String, required: true },
	host:{ type: String, required: true },
	max_playercount: Number,
	players: Array,
	rsvp_by:{ type: Date, required: true },
	notes: String,
});

const Session = mongoose.model("Matchmakings", sessionSchema, "Matchmakings");
module.exports = Session;