var games = require('../models/games');

const getAllGames = (req, res) => {
	res.send(games);
};

module.exports = {
	getAllGames,
};
