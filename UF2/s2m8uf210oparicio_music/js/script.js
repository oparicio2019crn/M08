// VARIABLES //
var musicalist=["music/one.mp3",
            "music/two.mp3",
            "music/three.mp3",
            "music/four.mp3",
            "music/five.mp3",
            "music/sixt.mp3",
            "music/seven.mp3",
            "music/eight.mp3",
            "music/nine.mp3",
            "music/ten.mp3",
            "music/eleven.mp3",
            "music/twelve.mp3"];

var posterslist=["img/posters/poster1.jpg",
              "img/posters/poster2.jpg",
              "img/posters/poster3.jpg",
              "img/posters/poster4.jpg",
              "img/posters/poster5.jpg",
              "img/posters/poster6.jpg",
              "img/posters/poster7.jpg",
              "img/posters/poster8.jpg",
              "img/posters/poster9.jpg",
              "img/posters/poster10.jpg",
              "img/posters/poster11.jpg",
              "img/posters/poster12.jpg"];

var namesongs=["Contando Lunares", "Pavos Reales", "Soy Peor", "Pastillas de freno", "Dilemma", "No hay nadie más", "Adan y Eva", "Diez mil porqués", "Cuando te bese", "Amorfoda", "Heathens", "God's Plan"];
var songplaylist=document.getElementsByClassName("songplaylist");


var i=0;
var post=document.getElementsByClassName('poster');
var songs=document.getElementsByClassName('musicahome');

//VARS BOTONS //
var prev=document.getElementById('prev');
var next=document.getElementById('next');

// MUSICA PLAY
var playpause, musica, barra, i;


//POSTERS REPETICIO//

for(i; i < post.length; i++){
  post[i].style.backgroundImage="url(" + posterslist[i%posterslist.length] + ")"; // i%posterslist.length - Modul - Bucle amb residu de divisio (per repetir una llista).
}
console.log(post);

// --------- //

function iniciaRepro(){
  // INDIQUEM VARIABLES //
  playpause=document.getElementById('playpause');
  musica=document.getElementById('musica');
  barra=document.getElementById('track');
  i=0;
  // ------ //

  // INDIQUEM ESDEVENIMENTS //
  playpause.addEventListener("click", playmusic, false);
  barra.addEventListener("change", posicioAudio, false);
  musica.addEventListener("timeupdate", actualitzatemps, false);
  playpause.addEventListener("click", playpauseicn, false);
  prev.addEventListener("click", enrere, false); // enrere
  next.addEventListener("click", endavant, false); // endavant
  // ------ //
}

window.onload = iniciaRepro;

function playmusic(){
  if (musica.paused) {
    musica.play();
    musica.focus();
  } else {
    musica.pause();
    musica.blur();
  }
}


// ICONO PAUSE

var imgplay=document.getElementById('imgplaypause');

function playpauseicn(){
  if (imgplay.src.match("img/icn/play.png")) {
    imgplay.src="img/icn/pause.png";
    imgplay.style.right="0";
  } else {
    imgplay.src="img/icn/play.png";
    imgplay.style.right="-5px";
    document.getElementById('musica').play;
  }
}



//PASSAR TEMPS DE REPRO ACTUAL DE LA CANÇO A LA BARRA.
function posicioAudio(){
  var vesA=musica.duration*(barra.value/100);
  musica.currentTime=vesA;
}

//PER A QUE LA LA BARRA ES MOGUI SEGUINT LA CANÇO.
function actualitzatemps(){
  var noutemps=musica.currentTime*(100/musica.duration);
  barra.value=noutemps;
}




// CAMBIAR DE MUSICA SELECCIONANT //

songs[0].addEventListener('click', song1);
songs[1].addEventListener('click', song2);
songs[2].addEventListener('click', song3);
songs[3].addEventListener('click', song4);
songs[4].addEventListener('click', song5);
songs[5].addEventListener('click', song6);
songs[6].addEventListener('click', song7);
songs[7].addEventListener('click', song8);
songs[8].addEventListener('click', song9);
songs[9].addEventListener('click', song10);
songs[10].addEventListener('click', song11);
songs[11].addEventListener('click', song12);

function song1(){
  musica.src="music/one.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=0;
}

function song2(){
  musica.src="music/two.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=1;
}

function song3(){
  musica.src="music/three.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=2;
}

function song4(){
  musica.src="music/four.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=3;
}

function song5(){
  musica.src="music/five.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=4;
}

function song6(){
  musica.src="music/sixt.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=5;
}

function song7(){
  musica.src="music/seven.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=6;
}

function song8(){
  musica.src="music/eight.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=7;
}

function song9(){
  musica.src="music/nine.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=8;
}

function song10(){
  musica.src="music/ten.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=9;
}

function song11(){
  musica.src="music/eleven.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=10;
}

function song12(){
  musica.src="music/twelve.mp3";
  imgplay.src="img/icn/pause.png";
  imgplay.style.right="0";
  i=11;
}
// ------ //




// NEXT MUSICA //

function endavant(){
  if (i==musicalist.length-1) {
    i=0;
  } else {
    i++;
  }
  musica.src=musicalist[i];
}

function enrere(){
  if (i==0) {
    i=musicalist.length-1;
  } else {
    i--;
  }
  musica.src=musicalist[i];
}



// PLAYLISTS LISTA MUSICA //
var x=0;

for (var x; x < namesongs.length; x++) {
  songplaylist.innerHTML=posterslist[i];
}
