$(document).ready(function(){
	$(".aprovacao").attr("data-percent", userData["projetos"])
	$(".desempenho").attr("data-percent", userData["horas"])
	$(".desempenhoTxt").html(userData["horas"] + "h")
	$(".aprovacaoTxt").html(userData["projetos"] + "%")
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
