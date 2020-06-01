const mongoose = require("mongoose");

const gametagSchema = new mongoose.Schema({
	name:{ type: String, required: true },
});

const Gametag = mongoose.model("Gametags", gametagSchema, "Gametags");
module.exports = Gametag;