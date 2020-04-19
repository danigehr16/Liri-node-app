
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
    if (value === "undefined") {
        console.log("You need to pick an artist/band to do a search...");
        return;
    }
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bands.API)
        .then(function (response) {

            for (var i = 0; i < response.data.length; i++) {
                var datetime = response.data[i].datetime;
                var dataArr = datetime.split("T");
                var concertResults = "\nVenue Name: " + response.data[i].venue.name +
                    "\nVenue Location: " + response.data[i].location.city +
                    "\nDate of the Event: " + moment(dataArr[0], "MM-DD-YYYY");

                console.log(concertResults);
            }
        })

        .catch(function (error) {
            if (error.response) {
            }
        });
};

// function for spotify
function spotifySong(value) {
    if (!value) {
        value = "The Sign";
        console.log(value);
    }
    spotify.search({type: 'track' , query: value}).then(function(response){
        for (var i = 0; i < 5; i++) {
            console.log("--------------------");
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
    if (value === undefined) {
        value = "Mr. Nobody";
        console.log("\nMr. Nobody\n" + " \nIf you haven't watch Mr. Nobody, then you should: <http://www.imdb.com/title/tt0485947/>\n" + "\nThe movie is also on Netflix!\n");
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












// function for movies
// function movieThis(movie) {
//     if (movie === undefined) {
//         movie = 'Mr. Nobody'
//         console.log("---------------");
//         console.log("If you haven't watched Mr. Nobody, then you should: <http://www.imdb.com/title/tt0485947/>");
//         console.log("It's on Netflix");
//     }
//     var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&" + keys.movie.API;
//     console.log(queryURL);

//     for(var i = 2; i < value.length; i++){
//         if (i > 2 && i < value.length) {
//             movie = movie + "+" + value[i];
//         }else {
//             movie += value[i];
//         }
//     }

//     axios.get(queryURL).then(
//         function (response) {
//             console.log("Movie Title: " + response.data.title);
//             console.log("Release Year: " + response.data.year);
//             console.log("IMDB Rating: " + response.data.IMDB.rating);
//             console.log("Rotten Tomatoes Rating: " + response.data.RottenTomatoes.rating);
//             console.log("Country: " + response.data.movie.country);
//             console.log("Language: " + response.data.movie.language);
//             console.log("Plot: " + response.data.movie.plot);
//             console.log("Cast: " + response.data.movie.actors);
//         })
//         .catch(function (error) {
//             if (error.response) {
//                 console.log(error.response.data);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             } else if (error.request) {
//                 console.log(error.request)
//             } else {
//                 console.log("Error", error.message);
//             }
//             console.log(error.config);
//         });
// }












