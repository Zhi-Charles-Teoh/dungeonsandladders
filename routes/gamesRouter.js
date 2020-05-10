const express = require('express');

const gamesRouter = express.Router();

const gamesController = require('../controllers/gamesController.js');

gamesRouter.get('/', (req, res ) => gamesController.getAllGames(req, res));
gamesRouter.get('/:id', (req, res) => gamesController.getGameByID(req, res));
gamesRouter.get('/:tags', (req, res) => gamesController.getGamesByTags(req, res));

module.exports = gamesRouter;