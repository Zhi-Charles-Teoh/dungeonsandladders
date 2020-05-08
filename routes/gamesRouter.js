const express = require('express');

const gamesRouter = express.Router();

const gamesController = require('../controllers/gamesController.js');

gamesRouter.get('/', (req, res ) => gamesController.getAllGames(req, res));

module.exports = gamesRouter;