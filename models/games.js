var tags = require('../models/gametags');

var games_list = [
	{
		"id":0,
		"name":"Risk",
		"min_playercount":2,
		"max_playercount":4,
		"tags":[
			tags[6].name, tags[4].name, tags[14].name, tags[19].name, tags[18].name, tags[20].name, tags[25].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":1,
		"name":"UNO",
		"min_playercount":2,
		"max_playercount":null,
		"tags":[
			tags[21].name, tags[8].name, tags[4].name, tags[28].name, tags[16].name, tags[23].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":2,
		"name":"Monopoly",
		"min_playercount":2,
		"max_playercount":4,
		"tags":[
			tags[8].name, tags[9].name, tags[14].name, tags[25].name, tags[26].name, tags[27].name, tags[28].name, tags[21].name, tags[18].name, tags[16].name, tags[20].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":3,
		"name":"Snakes and Ladders",
		"min_playercount":2,
		"max_playercount":null,
		"tags":[
			tags[5].name, tags[25].name, tags[14].name, tags[28].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":4,
		"name":"Chess",
		"min_playercount":2,
		"max_playercount":2,
		"tags":[
			tags[5].name, tags[6].name, tags[20].name, tags[19].name, tags[25].name, tags[4].name, tags[9].name, tags[16].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":5,
		"name":"Checkers",
		"min_playercount":2,
		"max_playercount":2,
		"tags":[
			tags[5].name, tags[6].name, tags[20].name, tags[25].name, tags[4].name, tags[16].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":6,
		"name":"Chinese chess",
		"min_playercount":2,
		"max_playercount":2,
		"tags":[
			tags[5].name, tags[6].name, tags[20].name, tags[19].name, tags[25].name, tags[4].name, tags[9].name, tags[16].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":7,
		"name":"Go",
		"min_playercount":2,
		"max_playercount":2,
		"tags":[
			tags[5].name, tags[6].name, tags[20].name, tags[19].name, tags[26].name, tags[4].name, tags[9].name, tags[16].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":8,
		"name":"Settlers of Catan",
		"min_playercount":2,
		"max_playercount":4,
		"tags":[
			tags[5].name, tags[6].name, tags[20].name, tags[19].name, tags[26].name, tags[4].name, tags[9].name, tags[16].name,
		],
		"like_count":0,
		"dislike_count":0,
	},	
	{
		"id":9,
		"name":"Dungeons and Dragons",
		"min_playercount":2,
		"max_playercount":null,
		"tags":[
			tags[23].name, tags[14].name, tags[24].name, tags[15].name, tags[17].name, tags[18].name, tags[27].name, tags[28].name, tags[5].name, tags[8].name, tags[16].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":10,
		"name":"Exploding Kittens",
		"min_playercount":2,
		"max_playercount":6,
		"tags":[
			tags[21].name, tags[27].name, tags[28].name, tags[23].name, tags[4].name, tags[5].name, tags[8].name, tags[20].name, tags[15].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":11,
		"name":"Cards Against Humanity",
		"min_playercount":2,
		"max_playercount":null,
		"tags":[
			tags[1].name, tags[21].name, tags[28].name, tags[23].name, tags[24].name, tags[10].name, tags[12].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":12,
		"name":"Poker",
		"min_playercount":2,
		"max_playercount":null,
		"tags":[
			tags[21].name, tags[16].name, tags[28].name, tags[15].name, tags[20].name, tags[10].name, tags[9].name, tags[23].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":13,
		"name":"Scrabble",
		"min_playercount":2,
		"max_playercount":4,
		"tags":[
			tags[5].name, tags[0].name, tags[15].name, tags[21].name, tags[26].name, tags[16].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":14,
		"name":"Cluedo",
		"min_playercount":2,
		"max_playercount":4,
		"tags":[
			tags[14].name, tags[25].name, tags[26].name, tags[2].name, tags[15].name, tags[19].name, tags[17].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":15,
		"name":"Battleship",
		"min_playercount":2,
		"max_playercount":2,
		"tags":[
			tags[26].name, tags[15].name, tags[16].name, tags[7].name, tags[4].name, tags[6].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
	{
		"id":16,
		"name":"Connect 4",
		"min_playercount":2,
		"max_playercount":4,
		"tags":[
			tags[5].name, tags[8].name, tags[19].name, tags[26].name, tags[16].name,
		],
		"like_count":0,
		"dislike_count":0,
	},
];

module.exports = games_list;