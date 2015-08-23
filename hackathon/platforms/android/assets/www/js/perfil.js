$(document).ready(function(){
	var userData = JSON.parse(localStorage.getItem("usuarioData"));
	
	$(".nome").html(userData["name"]);
	$(".email").html(userData["username"]);
	$(".faculdade").html(userData["faculdade"]);
});