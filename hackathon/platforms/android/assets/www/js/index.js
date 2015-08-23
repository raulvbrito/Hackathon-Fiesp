$(document).ready(function(){	

	TOKEN = "lWyD+pRka4fN0agKZINbMk08Js5jOWvHK8t1c2h/twv4/MKiJHPv5uYXJoc2y+55RCcqauLLHqGNHASX0UNI7A==";
	DOMAIN_BASE = "http://hackathon.goldarkapi.com";

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
	$('.preloader-wrapper').fadeIn();
	$.ajax({
    	type: 'POST',
    	data: form,
    	url: DOMAIN_BASE + "/sessions",
    	headers: {
	    	'X-Api-Token' : TOKEN
	   	},
    	success: function(data){
        	console.log(data);
            alert('Login efetuado com sucesso!');
            location.href = 'atividades.html';
        },
        error: function(){
            console.log(data);
            alert('Ocorreu um erro ao tentar cadastrar o usuário');
        }
    });

    location.href = 'atividades.html';
}

function cadastrarUsuario(form){	

	$.ajax({
       type: 'POST',
       data: form,
       url: DOMAIN_BASE + "/users",
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
           alert('Erro ao tentar cadastrar um usuário');
       }
   });
	
	$('form#cadastroForm').fadeOut('slow');
	$('form#loginForm').fadeIn('slow').parent().css({
		'padding-top':'11rem',
		'transition':'padding-top 0.5s'
	});
}