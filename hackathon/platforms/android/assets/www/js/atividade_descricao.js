$(document).ready(function(){
	var atividade_descricao = localStorage.getItem('atividade_descricao');
	
	$.ajax({
       type: 'GET',
       url: 'https://agile-sands-2308.herokuapp.com/oportunidades/'+atividade_descricao+'.json',
       success: function(data){
       	var card_content = $(".card-content");
       	$('.header-title h5').html(data.organizacao_nome);
   		var item = 	'<i class="icon circle left" style="background-image: url('+data.imagem+')"></i>'
   				 +	'<div class="col s9 user-info-to-edit" style="text-align: left">'
   				 +		'<span class="title bold">'+data.titulo+'</span>'
  				 +		'<p class="description">'+data.categoria+' - '+data.horas+' horas</p>'
  				 + 	'</div>'
  				 + 	'<div class="col s12" style="padding: 0; margin: 1rem 0">'
  				 +		'<p>'+data.descricao+'</p>'
  				 +		'<div class="clear"></div>'
   				 +	'</div>';
   		card_content.append(item);
       },
       error: function(){
           console.log(data);
           alert('ERRO!');
       }
    });
});

function atividadeAceita(){
	localStorage.setItem('atividade_aceita', 'true');
	location.href = "atividades.html";
}