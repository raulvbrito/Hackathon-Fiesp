$(document).ready(function(){

	loadDemandas()

	function loadDemandas(){
		$.ajax({
	       type: 'GET',
	       url: "https://agile-sands-2308.herokuapp.com/oportunidades.json",
	       success: function(data){
	       	var atividades-list = $(".atividades-list");
	       },
	       error: function(){
	           console.log(data);
	           alert('ERRO!');
	       }
	    });
	}

})