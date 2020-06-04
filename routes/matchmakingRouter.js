const express = require('express');

const mmRouter = express.Router();

const mmController = require('../controllers/matchmakingController.js');

mmRouter.get('/', (req, res ) => mmController.getAllSessions(req, res));
mmRouter.get('/refresh', (req, res ) => mmController.refreshSessions(req, res));
mmRouter.get('/:location', (req, res ) => mmController.getSessionsByLocation(req, res));
mmRouter.get('/:game', (req, res ) => mmController.getSessionsByGame(req, res));
mmRouter.get('/:id', (req, res ) => mmController.getSessionByID(req, res));
mmRouter.post('/create', (req, res, next) => mmController.createSession(req, res));
mmRouter.get('/join/:id', (req, res ) => mmController.joinSession(req, res));

module.exports = mmRouter;