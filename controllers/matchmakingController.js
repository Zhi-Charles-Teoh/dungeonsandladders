const mongoose = require("mongoose");
const Session = mongoose.model("Matchmakings");


const getAllSessions = async (req, res) => {
	try {
		const all_sessions = await Session.find();
		return res.send(all_sessions);
	} catch (err) {
		res.status(400);
		return res.send("Failed to load sessions.");
	}
};
 

const refreshSessions = async (req, res) => {
	res.send("Working on this feature");
};

const getSessionsByLocation = async (req, res) => {
	res.send("Working on this feature");
};

const getSessionsByGame = async (req, res) => {
	res.send("Working on this feature");
};

const getSessionByID = async (req, res) => {
	res.send("Working on this feature");
};

const createSession = async (req, res, next) => {
	try {
		var new_session = new Session(request.body);
		var result = await new_session.save();
		res.send(result);
	} catch (err) {
		res.status(400);
		return res.send("Failed to create a new session.");
	}
};

const joinSession = async (req, res) => {
	res.send("Working on this feature");
};


module.exports = {
  getAllSessions,
  refreshSessions,
  getSessionsByLocation,
  getSessionsByGame,
  getSessionByID,
  createSession,
  joinSession,
};