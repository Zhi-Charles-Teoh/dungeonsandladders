const express = require('express');

const mmRouter = express.Router();

const mmController = require('../controllers/matchmakingController.js');

mmRouter.get('/', (req, res ) => mmController.getAllSessions(req, res));
mmRouter.get('/:glocation?/:game?', (req, res ) => mmController.getSessionsByFilters(req, res)); //Filters by location and/or game, in this order
mmRouter.get('/:id', (req, res ) => mmController.getSessionByID(req, res));
mmRouter.post('/create', (req, res, next) => mmController.createSession(req, res));
mmRouter.put('/:id', (req, res ) => mmController.editSession(req, res));
mmRouter.put('/:id', (req, res ) => mmController.joinSession(req, res));
mmRouter.delete('/:id', (req, res ) => mmController.cancelSession(req, res));

module.exports = mmRouter;