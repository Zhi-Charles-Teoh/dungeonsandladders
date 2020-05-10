var members = require('../models/users');

const getAllUsers = (req, res) => {
	res.send(members);
};

const getUserByID = (req, res) => {
	const IDuser = members.users.find(IDuser => IDuser.id === req.params.id);
	
	if (IDuser)res.send(IDuser);
	else res.send([]);
};

module.exports = {
	getAllUsers, getUserByID
};
