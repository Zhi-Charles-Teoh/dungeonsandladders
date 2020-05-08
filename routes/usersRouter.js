const express = require('express');

const usersRouter = express.Router();

const usersController = require('../controllers/usersController.js');

usersRouter.get('/', (req, res ) => usersController.getAllUsers(req, res));

module.exports = usersRouter;