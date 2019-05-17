// LOADER PAGE //
$(window).load(function() {
    $(".loader").delay(6500).fadeOut();
});
// ------- //

// fav - perfil - buscador - chat //

//REGISTRO/LOGUEO//
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
function visitPage(){
        window.location='instrucciones.html';
    }
document.getElementsByClassName('reg_button').href="www.google.es";
document.getElementById('licence_button').onchange = function() {
document.getElementById('licence').disabled = !this.checked;
};
// ------- //


// ACORDEON INSTRUCCIONES //
$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  } );
// --------- //

// EMPRESAS //

var posterslist=["imgs/empresas/mcdonalds.jpeg",
              "imgs/empresas/ribs.jpg",
              "imgs/empresas/starbucks.jpg",
              "imgs/empresas/tapa-tapa.jpg",
              "imgs/empresas/tribuwoki.jpg",
              "imgs/empresas/viena.jpg"];
var post=document.getElementsByClassName('apartados');
var i=0;

// REPETICIÓN //
for(i; i < post.length; i++){
  post[i].style.backgroundImage="url(" + posterslist[i%posterslist.length] + ")"; // i%posterslist.length - Modul - Bucle amb residu de divisio (per repetir una llista).
}

// --------- //


// perfil
var openinfo=document.getElementById('info');
function openinfo(){
  openinfo.style.display="block";
}
