const express = require('express');

const usersRouter = express.Router();

const usersController = require('../controllers/usersController.js');

usersRouter.get('/', (req, res ) => usersController.getAllUsers(req, res));
usersRouter.get('/:id', (req, res) => usersController.getUserByID(req, res));

module.exports = usersRouter;