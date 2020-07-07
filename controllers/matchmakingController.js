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
}; //done


const getSessionByID = async (req, res) => {
	try {
		const ID_session = await Session.findOne({_id: req.params.id}).exec();
		return res.send(ID_session);
	} catch (err) {
		res.status(400);
		return res.send("Session query failed");
	}
}; //done

const createSession = async (req, res, next) => {
	try {
		var new_session = new Session(req.body);
		var result = await new_session.save();
		return res.send(result);
	} catch (err) {
		res.status(400);
		return res.send("Failed to create a new session.");
	}
}; //done


const editSession = async (req, res) => {
	try {
		const ID_session = await Session.findOne({_id: req.params.id}).exec();
		ID_session.set(req.body);
		var result = await ID_session.save();
		res.send(result);
	} catch (err) {
		res.status(400);
		return res.send("Failed to edit session.");
	}
}; //done

const joinSession = async (req, res) => {
	try{
		const ID_session = await Session.findOne({_id: req.params.id}).exec();
		ID_session.players.push(req.params.user);
		var result = await ID_session.save();
		res.send(result);
	} catch (err) {
		res.status(400);
		return res.send("Session joining failed");
	}
}; //done

const cancelSession = async (req, res) => {
	try {
		const ID_session = await Session.deleteOne({_id: req.params.id}).exec();
		return res.send(ID_session);
	} catch (err) {
		res.status(400);
		return res.send("Session cancellation failed");
	}
}; //done, but add function to let host cite reason, and to inform all who joined of cancellation

module.exports = {
  getAllSessions,
  editSession,
  getSessionByID,
  createSession,
  joinSession,
  cancelSession,
};