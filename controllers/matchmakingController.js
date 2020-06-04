const mongoose = require("mongoose");
const Matchmaking = mongoose.model("Matchmakings");


const getAllSessions = async (req, res) => {
	try {
		const all_sessions = await Matchmaking.find();
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

const createSession = async (req, res) => {
	res.send("Working on this feature");
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