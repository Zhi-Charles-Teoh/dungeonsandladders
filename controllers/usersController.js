var users = require('../models/users');

const getAllUsers = (req, res) => {
	res.send(users);
};

module.exports = {
	getAllUsers,
};
