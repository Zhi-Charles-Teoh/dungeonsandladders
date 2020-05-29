const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
	name:{ type: String, required: true },
	min_playercount:{ type: Number, required: true },
	max_playercount: Number,
	tags_id: Array,
	like_count:{ type: String, required: true },
	dislike_count:{ type: String, required: true },
});

const Game = mongoose.model("game", gameSchema, "game");
module.exports = Game;