require("dotenv").config();
var keys = require("keys.js");

// take the user's input from the command line
var userInput = process.argv[2];

// switch-case will direct which function gets ran
switch(userInput) {
  // command example: node liri.js my-tweets
  case "my-tweets":
    // eventual output: the last 20 tweets that were logged and when they were
    var Twitter = require("twitter");
    var client = new Twitter(keys.twitter);

  // command example: node liri.js spotify-this-song '<song name here>'
  case "spotify-this-song":
    // eventual output: Artist(s), song's name, preview link of the song from Spotify, and  album that the song is from
    var Spotify = require("node-spotify-api");
    var client = new Spotify(keys.spotify);

  // command example: node liri.js movie-this '<movie name here>'
  case "movie-this":
    // eventual output: Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, and Actors in the movie.


  // command example: node liri.js do-what-it-says
  case "do-what-it-says":
    // eventual output: case should take the text from random.txt and then use it to call one of LIRI's commands

}
