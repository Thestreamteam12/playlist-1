/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Test Drive", "Midsummer Madness", "Broken Smile (My All)", "Kitty"];
var image_links = ["https://www.billboard.com/files/media/joji-test-drive-2018-billboard-1548.jpg", "https://i.ytimg.com/vi/cRrv3PqDq5c/maxresdefault.jpg", "https://media1.fdncms.com/tucsonweekly/imager/u/original/12948510/lilpeep.jpg"];
var artists = ["Joji", "88Rising", "Lil Peep", "Rich Brian"];
var song_lengths = ["2:59", "5:06", "2:15", "2:46"];
var song_links = ["https://www.youtube.com/watch?v=PEBS2jbZce4", "https://www.youtube.com/watch?v=VPSoNx1gyQ4", "https://www.youtube.com/watch?v=gCtn5MJ9N4w", "https://www.youtube.com/watch?v=GjQEWj-gL-E"];

// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo() {
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(songs) {
    $("#images").display("<div>" + songs + "</div>");
});

image_links.forEach(function(image_links) {
   $("#links").display("<div>" + image_links + "</div>"); 
});

artists.forEach(function(artists) {
    $("#songs").display("<div" + songs + "</div");
    
});

song_lengths.forEach(function(songs_lengths) {
    $("")
});

song_links.forEach(function(song_links) {
   $("") 
});

}

function emptySongInfo() {
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo() {
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
