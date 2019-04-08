var holding = false;
var track = document.getElementById('track');
var progress = document.getElementById('progress');
var play = document.getElementById('play');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var art = document.getElementById('art');
var current_track = 0;
var song, audio, duration;
var playing = false;
var songs = [{
    title: 'Contando Lunares',
    artist: 'Don Patricio',
    url: '../music/one.mp3',
    art: '../img/posters/poster1.jpg'
},

{
    title: 'Blackout City',
    artist: 'Anamanaguchi',
    url: 'http://abarcarodriguez.com/365/files/anamanaguchi.mp3',
    art: 'http://abarcarodriguez.com/365/files/anamanaguchi.jpg'
},

{
    title: 'The Primordial Booze',
    artist: 'Rainbowdragoneyes',
    url: 'http://abarcarodriguez.com/365/files/rainbow.mp3',
    art: 'http://abarcarodriguez.com/365/files/rainbow.jpg'
}];

window.addEventListener('load', init(), false);

function init() {
    song = songs[current_track];
    audio = new Audio();
    audio.src = song.url;
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
}
