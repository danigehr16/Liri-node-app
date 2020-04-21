# Liri-node-app


### **Creator:** Danielle Gehr

### **Created on:**  April 15th-20th, 2020

## About the App

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. `The Commands` are:
***

* `concert-this`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`

*** 

## HOW TO USE LIRI
 

## Video Guide


You can watch the video here: https://danigehr16.github.io/Liri-node-app/

## Step by Step Instructions
    
   1. Open you terminal such as bash, or terminal for mac users.
   2. Navigate to the folder that contains the 'Liri.js' file.
   3. Depending on the command you run, the output will vary.
    
       **Example 1:** Run the `concert-this` command
        `node liri.js concert-this <name of artist or band>`
        Output: The system will display a list of 3 events and locations where the artist or band will perform. it can result in multiple records. 
        
      The console will return:
          Name of the venue,
          Venue location,
          Date of the Event,
        
        `See screen-shot below:`
        
        ![alt text](https://github.com/danigehr16/Liri-node-app/blob/master/screenshots/concert.png)
        
      **Example 2:** Run the `spotify-this-song` command
        `node liri.js spotify-this-song <name of song>`
        output: The system will display a list of information associated with the song. It will result in three records. 
        
        The console will return:
          Artist(s),
          Song Name,
          A preview link of the song,
          The album,
          If no song is provided the default is "The Sign" by Ace of Base
          
        `See screen-shot below:`
        
        ![alt text](https://github.com/danigehr16/Liri-node-app/blob/master/screenshots/spotify.png)
        
      **Example 3:** run the `movie-this` command
        `node liri.js movie-this <name of movie>`
        Output: The system will display information associated with the movie. 
        
        The console will return:
          Title,
          Year of release,
          IMDB Rating,
          Rotten Tomatoes Rating,
          Country where the movie was produced,
          Language of the movie,
          Plot of the movie,
          Actors in the movie,
          If a movie isn't provided, a default movie, `Mr. Nobody`, will be used
          
        `See screen-shot below:`
        
       ![alt text](https://github.com/danigehr16/Liri-node-app/blob/master/screenshots/movie.png)
        
        **Example 4:** Run the `do-what-it-says` command
        `node liri.js do-what-it-says`
        Output: The system will read the text in the random.txt file, and perform the command listed in the random.txt file. 
        
        `See screen-shot below:`
        
        ![alt text](https://github.com/danigehr16/Liri-node-app/blob/master/screenshots/do%20what%20it%20says.png)


        

***

## TECHNOLOGIES USED

* Javascript
* nodejs
* Node packages:
  * Node-Spotify-Api
  * Request
  * Moment
  * DotEnv
  
 * APIs used:
  * Bands in Town
  * OMDB
  
 * Git
 * GitHub
