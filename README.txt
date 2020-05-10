Dungeons and Ladders v1.0

Original idea by Team DnL:
- James Dulfer
- Ingunn Augdal Floevig
- Zhi Charles Teoh
- Samantha Tirtajaya

Designed by Zhi Charles Teoh

Introduction:

This app is still in its preliminary stages, which is to say the
app now contains only some preliminary databases and some functions
that link to them. This includes:

- games.js, a database of all the games that are supposedly available in the app.
- gametags.js, a database of all game tags to facilitate the searching of games by tags. games.js uses this file
in the "tags" attribute.
- users.js, a database of all users, has "games_owned" and "games_wishlist" attributes that use the games.js file.

GIT repository URL: https://github.com/Zhi-Charles-Teoh/dungeonsandladders
Heroku app URL: https://dungeons-and-ladders.herokuapp.com/

Current functionalities:
- The main page links to a list of users (users.js) and a list of games (games.js). 
- You can search for users and games by ID:
  - To search for users by ID, use URL "../users/:id"
  - To search for games by ID, use URL "../games/:id"

Intended functionalities (in the near future):
- The ability to sign up as a new user by means of a POST request that then adds another item in users.js
- The ability to do advanced searching of games by its tags. 

Functionalities for the distant future:
- The ability to display a game's rating by using the "like_count" and "dislike_count" attributes.
- The ability for users to like/dislike a game.
- And more......
