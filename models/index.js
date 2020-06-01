require('dotenv').config()
const mongoose = require("mongoose");

CONNECTION_STRING = "mongodb+srv://ZhiCharlesTeoh:<password>@cluster0-ekjqa.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD);
mongoose.connect(MONGO_URL || "mongodb://localhost/info30005", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	dbName: "INFO30005-DnL",
});

const db = mongoose.connection;
db.on("error", err => {
	console.error(err);
	process.exit(1);
});
db.once("open", async () => {
	console.log("Mongo connection started on " + db.host + ":" + db.port);
});

require("./games");
require("./gametags");
require("./users");
require("./matchmakings");