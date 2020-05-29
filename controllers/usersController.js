const mongoose = require("mongoose");
const User = mongoose.model("user");


const getAllUsers = async (req, res) => {
	try {
		const all_users = await User.find();
		return res.send(all_users);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};
 

const updateUser = async (req, res) => {
	res.send("Working on this feature");
};


const addUser = async (req, res) => {
	res.send("Working on this feature");
};

const getUserByID = async (req, res) => {
	try {
		const ID_user = await User.find(ID_user => ID_user.id === req.params.id);
		return res.send(ID_user);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};


module.exports = {
  getAllUsers,
  getUserByID,
  addUser,
  updateUser,
};