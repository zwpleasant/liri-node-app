require("dotenv").config();
var keys = require("./keys.js");

// take the user's input from the command line
var userInput = process.argv[2];

// switch-case will direct which user provides input to Liri
switch(userInput) {
  // command example: node liri.js my-tweets
  case "my-tweets":
    getTweets();
    break;

  // command example: node liri.js spotify-this-song '<song name here>'
  case "spotify-this-song":
    getSong();
    break;

  // command example: node liri.js movie-this '<movie name here>'
  case "movie-this":
    getMovie();
    break;

  // command example: node liri.js do-what-it-says
  case "do-what-it-says":
    // eventual output: case should take the text from random.txt and then use it to call one of LIRI's commands

}


// define all functions used within the switch-case

// function to grab tweets from user input
// eventual output: the last 20 tweets that were logged and when they were
function getTweets() {
  var Twitter = require("twitter");
  var client = new Twitter(keys.twitter);
  // set the account that we want to grab tweets from
  var account = {
    screen_name: "bobBop10",
    count: 1
  }
  // code that gets the data and shows the tweets
  client.get("statuses/user_timeline", account, function(error, tweets, response) {
    if (error) throw error;
    console.log("Message: " + (tweets[0].text));
    console.log("Created: " + (tweets[0].created_at));
  })
}

// function to grab a song from user input
// eventual output: Artist(s), song's name, preview link of the song from Spotify, and  album that the song is from
function getSong() {
  var Spotify = require("node-spotify-api");
  var client = new Spotify(keys.spotify);
}

//function to grab a movie from user input
// eventual output: Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, and Actors in the movie.
function getMovie() {
  var request = require("request");
  // Store all of the arguments in an array
  var nodeArgs = process.argv;
  // Create an empty variable for holding the movie name
  var movieName = "";
  // Loop through all the words in the node argument
  for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName += nodeArgs[i];
    }
  }
  // Then run a request to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  request(queryUrl, function(error, response, body) {
    // If the request is successful
    if (!error && response.statusCode === 200) {
      // Parse the body of the site and recover necessary output
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
      console.log("Production Country: " + JSON.parse(body).County);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
}
