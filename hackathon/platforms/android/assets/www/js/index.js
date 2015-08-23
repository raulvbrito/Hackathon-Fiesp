$(document).ready(function(){	

	// RECUPERAR DAtA
	// JSON.parse(localStorage.getItem("usuarioData"));

	$('.yellow-btn').click(function(){
		$('.landing-picture').fadeOut();
	});
	
	$('form').on('submit', function(e){
		e.preventDefault();
		var form = $(this).serializeArray();
		
		login(form);
	});
	
	$('.login-btn').click(function(){
		var form = $('form#loginForm').serializeArray();
		login(form);
	});
	
	$('.cadastro').click(function(){
		$('.landing-picture').fadeOut();
		$('form#loginForm, footer').fadeOut('fast');
		$('form#cadastroForm').fadeIn('slow').parent().css({
			'padding-top':'7rem',
			'transition':'padding-top 0.5s'
		});
	});

	$('.cadastro-btn').click(function(){
		var form = $('form#cadastroForm').serializeArray();
		
		cadastrarUsuario(form);
	});
});

function login(form){
//	$('.preloader-wrapper').fadeIn();
	$.ajax({
    	type: 'POST',
    	data: form,
    	url: "https://agile-sands-2308.herokuapp.com/user/login.json",
    	success: function(data){
        	console.log(data);
            alert('Login efetuado com sucesso!');
            location.href = 'atividades.html';
            localStorage.setItem("usuarioData", JSON.stringify(data));
        },
        error: function(data){
            console.log(data);
            Materialize.toast('Falha ao logar. Usuário ou senha incorretos', 3000);
        }
    });

//    location.href = 'dashboard.html';
}

function cadastrarUsuario(form){	

	$.ajax({
       type: 'POST',
       data: form,
       url: "https://agile-sands-2308.herokuapp.com/users.json",
       success: function(data){
           console.log(data);
           alert('Conta criada com sucesso!');
           $('form#cadastroForm').fadeOut('slow');
       	   $('form#loginForm').fadeIn('slow').parent().css({
       		'padding-top':'11rem',
       		'transition':'padding-top 0.5s'
       	});
       },
       error: function(){
           console.log(data);
           Materialize.toast('Erro ao cadastrar usuário', 3000);
       }
   });
	
	$('form#cadastroForm').fadeOut('slow');
	$('form#loginForm').fadeIn('slow').parent().css({
		'padding-top':'11rem',
		'transition':'padding-top 0.5s'
	});
}