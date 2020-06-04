const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const gameSchema = new mongoose.Schema({
	name:{ type: String, required: true },
	min_playercount:{ type: Number, required: true },
	max_playercount: Number,
	tags_id: [ObjectID],
	like_count:{ type: String, required: true },
	dislike_count:{ type: String, required: true },  
});

const Game = mongoose.model("Games", gameSchema, "Games");
module.exports = Game;