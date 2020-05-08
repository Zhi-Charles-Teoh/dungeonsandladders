var games = require('../models/games');

var users = [
	{
		"id":"00001",
		"email":"zc970520@hotmail.com",
		"password":"123456",
		"profile_name":"Void Diversion",
		"real_name":"Zhi Charles Teoh",
		"birth_year":1997,
		"birth_month":"May",
		"birth_day":20,
		"join_year":2020,
		"join_month":"April",
		"join_day":20,
		"lives_in":"Melbourne, Australia",
		"games_owned": [
			games[0].name, games[3].name, games[10].name,
		],
		"games_wishlist": [
			games[1].name, games[5].name, games[14].name, games[9].name,
		]
	},
];

module.exports = {
	users,
};