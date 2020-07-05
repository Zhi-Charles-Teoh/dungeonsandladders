const express = require('express');

const usersRouter = express.Router();

const usersController = require('../controllers/usersController.js');

usersRouter.get('/', (req, res ) => usersController.getAllUsers(req, res));
usersRouter.get('/:id', (req, res) => usersController.getUserByID(req, res));
usersRouter.put('/:id', (req, res) => usersController.editProfile(req, res));
usersRouter.post('/signup', (req, res) => usersController.addUser(req, res));
usersRouter.delete('/:id', (req, res) => usersController.deleteAccount(req, res));

module.exports = usersRouter;