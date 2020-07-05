const express = require('express');

const gamesRouter = express.Router();

const gamesController = require('../controllers/gamesController.js');

gamesRouter.get('/', (req, res ) => gamesController.getAllGames(req, res));
gamesRouter.get('/:id', (req, res) => gamesController.getGameByID(req, res));
gamesRouter.get('/:tags', (req, res) => gamesController.getGamesByTags(req, res)); //find a way to allow multiple input
gamesRouter.post('/add', (req, res) => gamesController.addGame(req, res));
gamesRouter.put('/:id', (req, res) => gamesController.updateGame(req, res));
gamesRouter.delete('/:id', (req, res) => gamesController.deleteGame(req, res));

module.exports = gamesRouter;

