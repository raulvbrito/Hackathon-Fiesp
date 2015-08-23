$(document).ready(function(){	

	userData = JSON.parse(localStorage.getItem("usuarioData"));
	$("#nm_usuario").val(userData["name"]);
	$("#email").val(userData["username"]);

	$.ajaxSetup({
	  headers: {
	    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
	  }
	});
	
	$("#perfilForm").on('submit', function( e ){
		e.preventDefault();
		var form = $(this).serializeArray();
		updateUsuario(form, userData);
	})
});

function updateUsuario(form){	
		$.ajax({
	       type: 'PUT',
	       data: form,
	       url: "https://agile-sands-2308.herokuapp.com/users/" + userData["id"] + ".json",
	       success: function(data){
	           console.log(data);
	           Materialize.toast('Conta atualizada com sucesso!', 3000);
	           location.href = 'perfil.html';
	       	});
	       },
	       error: function(){
	           console.log(data);
	           Materialize.toast('Erro ao cadastrar usuário', 3000);
	       }
	   });
	}