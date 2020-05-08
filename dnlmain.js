const express = require('express') 
const app = express();
const gamesRouter = require('./routes/gamesRouter');
const usersRouter = require('./routes/usersRouter');

app.use('/games', gamesRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => { 
	res.write('<H1>Test Dungeons and Ladders app</H1>');
	res.write('<p><a href="/users">Click here to access all users.</a></p>');
	res.write('<p><a href="/games">Click here to access all games.</a></p>');
	res.end();
});


app.listen(3000, () => { 
	console.log('The library app is running!') 
});