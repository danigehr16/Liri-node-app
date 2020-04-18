 
require("dotenv").config();

var keys = require("keys.js");

var Spotify = require('node-spotify-api');

var spotify = new spotify(keys.spotify);

var moment = require('moment');
moment().format();

var axios = require("axios");

var fs = require('fs');


var command = process.argv[2];
var value = process.argv[3];

switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifySong();
            break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doThis();
        break;

        
};
// if statements 

function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for (var i = 0; i< response.data.length; i++) {
            var datetime = response.data[i].datetime;
            var dateArr = datetime.split(",");
            var concertResults =
            "Venue Name: " + response.data[i].venue.name +
            "Venue Location: " + response.data[i].venue.city +
            "Date of the Event: " + moment(dataArr[0], "MM-DD-YYYY");
            console.log(concertResults);
        };
    });

    if(err){
        return console.log("Sorry could not find Concert information!")
    };
}










// if (comment === "spotify-this-song") {
//     console.log("song")
// }


// if(comment === "movie-this"){
//     console.log("movie")
// }

// if( comment === "do-what-it-says"){
//     console.log("haha i got you now")
// }