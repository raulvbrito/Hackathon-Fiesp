$(document).ready(function(){	
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
	//$('.preloader-wrapper').fadeIn();
	
//	$.ajax({
//        type: 'POST',
//        data: form,
//        url: 'http://hospedagem/login.php',
//        success: function(data){
//            console.log(data);
//            alert('Your comment was successfully added');
//            location.href = 'home.html';
//        },
//        error: function(){
//            console.log(data);
//            alert('There was an error adding your comment');
//        }
//    });
	
	location.href = 'dashboard.html';
}

function cadastrarUsuario(form){	
//	$.ajax({
//        type: 'POST',
//        data: form,
//        url: 'http://hospedagem/cadastroUsuario.php',
//        success: function(data){
//            console.log(data);
//            alert('Your comment was successfully added');
//            $('form#cadastroForm').fadeOut('slow');
//        	$('form#loginForm').fadeIn('slow').parent().css({
//        		'padding-top':'11rem',
//        		'transition':'padding-top 0.5s'
//        	});
//        },
//        error: function(){
//            console.log(data);
//            alert('There was an error adding your comment');
//        }
//    });
	
	$('form#cadastroForm').fadeOut('slow');
	$('form#loginForm').fadeIn('slow').parent().css({
		'padding-top':'11rem',
		'transition':'padding-top 0.5s'
	});
}