$(document).ready(function(){
	if(localStorage.getItem('atividade_aceita')){
		Materialize.toast('Ajuda solicitada com sucesso', 3000);
		localStorage.removeItem('atividade_aceita');
	}
	
	loadDemandas();
});

function atividadeDescricao(url){
	localStorage.setItem('atividade_descricao', url);
	location.href = 'atividade_descricao.html';
}

function loadDemandas(){
	$.ajax({
       type: 'GET',
       url: "https://agile-sands-2308.herokuapp.com/oportunidades.json",
       success: function(data){
       	var atividades_list = $(".atividades-list");
       	$.each(data, function(index, value){
       		var item = '<li class="collection-item avatar waves-effect col s12 teatro" onclick=\"atividadeDescricao('+data[index].id+');\">'
       				 + 		'<i class="circle" style="background-image: url('+data[index].imagem+')"></i>'
       				 +		'<div class="col s1 right product-status">'
       				 +			'<a href="#modalMap" class="modal-trigger"></a>'
       				 +		'</div>'
       				 +		'<div class="col s9 right">'
       				 +			'<span class="title">'+data[index].titulo+'</span>'
       				 +			'<p class="description">'+data[index].categoria+' - '+data[index].horas+' horas</p>'
       				 +		'</div>'
       				 +	'</li>';
       		atividades_list.append(item);
       	});
       },
       error: function(){
           console.log(data);
           alert('ERRO!');
       }
    });
}
