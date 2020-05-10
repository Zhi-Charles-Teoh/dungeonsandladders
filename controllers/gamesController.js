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
