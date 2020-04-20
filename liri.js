
require("dotenv").config();

var keys = require("./keys.js");


var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format();

var axios = require("axios");

var fs = require('fs');


var command = process.argv[2];
var value = process.argv[3];

// if/else statements 
switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
};

// function for bands to show concert information
function concertThis(artist) {
    if (!value) {
        console.log("---------------------------");
        console.log("\nYou need to pick an artist/band to do a search...\n");
        console.log("-------------------------");
        return;
    }
    // console.log(keys.bands.API);
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bands.API)
    
    
        .then(function (response) {

            for (var i = 0; i < 3; i++) {
                var datetime = response.data[i].datetime;
                var dataArr = datetime.split("T");
                var concertResults = "\nVenue Name: " + response.data[i].venue.name + 
                    "\nVenue Location: " + response.data[i].venue.location +
                    "\nDate of the Event: " + (dataArr[0]);
                    console.log(dataArr[0]);

                console.log(concertResults);
                
            }
        })

        .catch(function (error) {
            if (error.response) {
            
            console.log(error);
        }
        });
};

// function for spotify
function spotifySong(value) {
    if (!value) {
        value = "The Sign"
        
        console.log("------------------------");
        console.log("\nSorry there was an error, but here try this song!\n"); 
    }
    spotify.search({type: 'track' , query: value}).then(function(response){
        for (var i = 0; i < 3; i++) {
            var spotifyResults = "Artist(s): " + response.tracks.items[i].artists[0].name + "\nSong Title: " + response.tracks.items[i].name +
            "\nAlbum Name: " + response.tracks.items[i].album.name + "\nPreview link: " + response.tracks.items[i].preview_url;
            console.log("---------------------------");
            console.log(spotifyResults)
        }
    })
    .catch(function(err) {
        console.log(err)
    });
    
}


function movieThis(value) {
    if (!value) {
        value = "Mr. Nobody";
        console.log("-------------------------");
        console.log("\nMr. Nobody\n" + " \nIf you haven't watch Mr. Nobody, then you should: <http://www.imdb.com/title/tt0485947/>\n" + "\nThe movie is also on Netflix!\n");
        console.log("-------------------------");
        return;
    }
    axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
                var movieResults = "\nMovie Title: " + response.data.Title +
                    "\nRelease Date: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating +
                    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry Produced: " + response.data.Country +
                    "\nMovie Language: " + response.data.Language + " Movie Plot: " + response.data.Plot + "Movie Cast: " + response.data.Actors;
                console.log("---------------------");
                console.log(movieResults);
        })
        .catch(function (error) {
            if (error.response) {   
            }
        });
}

function doThis(value) {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        spotifySong(dataArr[1]);
    })
}