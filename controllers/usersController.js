const mongoose = require("mongoose");
const User = mongoose.model("Users");


const getAllUsers = async (req, res) => {
	try {
		const all_users = await User.find();
		return res.send(all_users);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
}; //done
 

const editProfile = async (req, res) => {
	try{
		const ID_user = await User.findOne({_id: req.params.id}).exec();
		ID_user.set(req.body);
		var result = await ID_user.save();
		res.send(result);
	} catch (err) {
		res.status(400);
		return res.send("Profile updating failed");
	}
}; //done


const addUser = async (req, res) => {
	try{
		var new_user = new User(req.body);
		var result = await new_user.save();
		res.send(result);
	} catch (err) {
		res.status(400);
		return res.send("Sign up failed");
	}
}; //done

const getUserByID = async (req, res) => {
	try {
		const ID_user = await User.findOne({_id: req.params.id}).exec();
		return res.send(ID_user);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
}; //done

const deleteAccount = async (req, res) => {
	try{
		const ID_user = await User.deleteOne({_id: req.params.id}).exec();
		return res.send(ID_user);
	} catch (err) {
		res.status(400);
		return res.send("Account deletion failed");
	}
}; //done


module.exports = {
  getAllUsers,
  getUserByID,
  addUser,
  editProfile,
  deleteAccount,
};