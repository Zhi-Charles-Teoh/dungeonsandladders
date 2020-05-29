var games = require('../models/games');

const getAllGames = (req, res) => {
	res.send(games);
};

const getGameByID = (req, res) => {
	const IDgame = games.find(IDgame => IDgame.id === req.params.id);
	
	if (IDgame)res.send(IDgame);
	else res.send([]);
};

const getGamesByTags = (req, res) => {
	const TAGgame = games.filter(TAGgame => TAGgame.tags === req.params.tags);
	
	if (TAGgame)res.send(TAGgame);
	else res.send([]);
};

module.exports = {
	getAllGames, getGameByID, getGamesByTags
};
const mongoose = require("mongoose");

// import author model
const Game = mongoose.model("game");

    
// function to handle a request to get all authors
const getAllGames = async (req, res) => {
	try {
		const all_games = await Game.find();
		return res.send(all_games);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};
 

// function to modify author by ID
const updateGame = async (req, res) => {
	res.send("Working on this feature");
};


const addGame = async (req, res) => {
	res.send("Working on this feature");
};

const getGameByID = (req, res) => {
	try {
		const ID_game = await Game.find(ID_game => ID_game.id === req.params.id);
		return res.send(ID_game);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};

const getGamesByTags = (req, res) => {
	res.send("Working on this feature");
};

// remember to export the functions
module.exports = {
  getAllGames,
  getGameByID,
  addGame,
  updateGame,
  getGamesByTags,
};