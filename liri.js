 
require("dotenv").config();

var keys = require("./keys.js");
console.log(keys);

// var Spotify = require('node-spotify-api');

// var spotify = new spotify(keys.spotify);

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

function concertThis(artist) {
    axios
    .get("https://rest.bandsintown.com/artists/" + artist +"/events?app_id=" + keys.bands.API)
    .then(function(response) {
        console.log(response)
        for (var i = 0; i < response.data.length; i++) {
            var datetime = response.data[i].datetime;
            var dataArr = datetime.split("T");
            var concertResults = "Venue Name: " + response.data[i].venue.name +
            "Venue Location: " + response.data[i].location.city +
            "Date of the Event: " + moment(dataArr[0], "MM-DD-YYYY");
            
            console.log(concertResults);
        };
    })

    .catch(function(error) {
        if (error.response) {
            console.log ("Sorry there is not Concert information Avaliable")
        }
    })
}









