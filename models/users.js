const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email:{ type: String, required: true },
	password:{ type: String, required: true },
	profile_name:{ type: String, required: true },
	real_name: String,
	birth_date: Date,
	join_date:{ type: Date, required: true },
	lives_in:{ type: String, required: true },
	games_owned: Array,
	games_wishlist: Array,
});

const User = mongoose.model("user", userSchema, "user");
module.exports = User;