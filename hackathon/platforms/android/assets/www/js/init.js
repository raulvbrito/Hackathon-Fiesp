function onDeviceReady() {
	StatusBar.backgroundColorByHexString('#1474a1');
}
document.addEventListener('deviceready', onDeviceReady, true);

$(function(){	
	$('select').material_select();
	
	var userData = JSON.parse(localStorage.getItem("usuarioData"));
	$(".nome").html(userData["name"]);
	$(".email").html(userData["username"]);
	
	var deviceHeight = $(document).height();
	$('body').css('height', deviceHeight);
	 
	$(".button-collapse").sideNav({
		  menuWidth: 300
	    }
	  );
	
	$('.sync').click(function(){
		sync();
	});
});

function sync(){
	$('.progress').fadeIn();
	//$.post();
	setTimeout(function(){
		$('.progress').fadeOut();
		Materialize.toast('Sincronização concluída', 3000);
	},2000);
}