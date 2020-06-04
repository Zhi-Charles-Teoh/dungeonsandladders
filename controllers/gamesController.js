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
}; //done
 

const updateGame = async (req, res) => {
	try{
		const ID_game = await Game.findOne({_id: req.params.id}).exec();
		ID_game.set(req.body);
		var result = await ID_game.save();
		res.send(result);
	} catch (err) {
		res.status(400);
		return res.send("Game update failed");
	}
}; //done


const addGame = async (req, res) => {
	try{
		var new_game = new Game(request.body);
		var result = await new_game.save();
		res.send(result);
	} catch (err) {
		res.status(400);
		return res.send("Game addition failed");
	}
}; //done

const getGameByID = async (req, res) => {
	try {
		const ID_game = await Game.findOne({_id: req.params.id}).exec();
		return res.send(ID_game);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
}; //done

const getGamesByTags = async (req, res) => {
	try{
		res.send("Working on this feature");
		query_array = [];
		const tags_games = await Game.find({
			tags: { $all: query_array }
		}).exec();
		return res.send(tags_games);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
}; //define query-array

const deleteGame = async (req, res) => {
	try{
		const ID_game = await Game.deleteOne({_id: req.params.id}).exec();
		return res.send(ID_game);
	} catch (err) {
		res.status(400);
		return res.send("Game deletion failed");
	}
}; //done

module.exports = {
  getAllGames,
  getGameByID,
  addGame,
  updateGame,
  getGamesByTags,
  deleteGame,
};