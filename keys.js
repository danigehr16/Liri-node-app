 
console.log("this is loaded");

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret:process.env.SPOTIFY_SECRET,
    
};

exports.bands = {
    API: process.env.Bands_IN_Town
};