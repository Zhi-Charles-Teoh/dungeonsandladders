const express = require('express') 
const app = express();
require('./models');

const bodyParser = require("body-parser");
const gamesRouter = require('./routes/gamesRouter');
const usersRouter = require('./routes/usersRouter');
const mmRouter = require('./routes/matchmakingRouter');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/games', gamesRouter);
app.use('/users', usersRouter);
app.use('/sessions', mmRouter);


app.get('/', (req, res) => { 
	res.write('<H1>Test Dungeons and Ladders app</H1>');
	res.write('<p><a href="/users">Click here to access all users.</a></p>');
	res.write('<p><a href="/games">Click here to access all games.</a></p>');
	res.write('<p><a href="/sessions">Click here to access all active sessions.</a></p>');
	res.end();
});

app.listen(process.env.PORT || 3000, () => { 
	console.log('The library app is running!') 
});