const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const sessionSchema = new mongoose.Schema({
	start_time:{ type: Date, required: true },
	session_location:{ type: String, required: true },
	game:{ type: ObjectID, required: true },
	host:{ type: ObjectID, required: true },
	max_playercount: Number,
	players: [ObjectID],
	rsvp_by:{ type: Date, required: true },
	notes: String,
});

const Session = mongoose.model("Matchmakings", sessionSchema, "Matchmakings");
module.exports = Session;