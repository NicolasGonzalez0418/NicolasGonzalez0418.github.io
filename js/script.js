document.getElementById("icon-menu") .addEventListener("click", mostrar_menu);

function mostrar_menu(){

     document.getElementById("move-content").classList.toggle('move-container-all');
     document.getElementById("show-menu").classList.toggle('show-lateral');
}
/*INGRESAR*/

$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");});