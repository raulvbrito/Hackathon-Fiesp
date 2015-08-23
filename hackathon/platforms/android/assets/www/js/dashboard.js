$(document).ready(function(){
	
	function loadDemandas(){
		$.ajax({
	       type: 'GET',
	       url: "https://agile-sands-2308.herokuapp.com/oportunidades.json",
	       success: function(data){
	           console.log(data);   
	       },
	       error: function(){
	           console.log(data);
	           alert('ERRO!');
	       }
	    });
	}

});

$(function(){
	$('.easyPieChart').easyPieChart({
		barColor: '#ffab40',
		trackColor: '#e1e1e1',
		scaleColor: '#e1e1e1',
		animate: 1000,
		onStop: function(){
			$('.percent-chart').fadeIn();
		}
    });
})
