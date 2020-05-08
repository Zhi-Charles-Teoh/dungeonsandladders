const express = require('express') 
const app = express();
const gamesRouter = require('./routes/gamesRouter');
const usersRouter = require('./routes/usersRouter');

app.get('/', (req, res) => { 
	res.send('<H1>Test Dungeons and Ladders app</H1>') 
});

app.use('/games', gamesRouter);
app.use('/users', usersRouter);


app.listen(3000, () => { 
	console.log('The library app is running!') 
});