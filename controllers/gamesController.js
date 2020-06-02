const mongoose = require("mongoose");
const Game = mongoose.model("Games");


const getAllGames = async (req, res) => {
	try {
		const all_games = await Game.find();
		return res.send(all_games);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};
 

const updateGame = async (req, res) => {
	res.send("Working on this feature");
};


const addGame = async (req, res) => {
	res.send("Working on this feature");
};

const getGameByID = async (req, res) => {
	try {
		const ID_game = await Game.findOne({_id: req.params.id});
		return res.send(ID_game);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};

const getGamesByTags = (req, res) => {
	res.send("Working on this feature");
};

module.exports = {
  getAllGames,
  getGameByID,
  addGame,
  updateGame,
  getGamesByTags,
};