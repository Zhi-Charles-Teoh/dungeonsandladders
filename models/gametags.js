const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const gametagSchema = new mongoose.Schema({
	name:{ type: String, required: true },
});

const Gametag = mongoose.model("Gametags", gametagSchema, "Gametags");
module.exports = Gametag;