$(document).ready(function(){

	TOKEN = "lWyD+pRka4fN0agKZINbMk08Js5jOWvHK8t1c2h/twv4/MKiJHPv5uYXJoc2y+55RCcqauLLHqGNHASX0UNI7A==";
	DOMAIN_BASE = "http://hackathon.goldarkapi.com";

	function loadDemandas(){
		$.ajax({
	       type: 'GET',
	       url: DOMAIN_BASE + "/opportunities",
	       headers: {
	       	'X-Api-Token' : TOKEN
	   	   },
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
