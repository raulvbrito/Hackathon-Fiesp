$(document).ready(function(){
	loadDemandas();
});

function loadDemandas(){
	$.ajax({
       type: 'GET',
       url: "https://agile-sands-2308.herokuapp.com/oportunidades.json",
       success: function(data){
       	var atividades_list = $(".atividades-list");
       	console.log(data);
       	$.each(data, function(index, value){
       		var item = '<li class="collection-item avatar waves-effect col s12 teatro">'
       				 + 		'<i class="circle" style="background-image: url('+data[index].imagem+')"></i>'
       				 +		'<div class="col s1 right product-status">'
       				 +			'<a href="#modalMap" class="modal-trigger"></a>'
       				 +		'</div>'
       				 +		'<div class="col s9 right">'
       				 +			'<span class="title">'+data[index].titulo+'</span>'
       				 +			'<p class="description">'+data[index].categoria+' - '+data[index].horas+' horas</p>'
       				 +		'</div>'
       				 +	'</li>';
       		console.log(item);
       		atividades_list.append(item);
       	});
       },
       error: function(){
           console.log(data);
           alert('ERRO!');
       }
    });
}
