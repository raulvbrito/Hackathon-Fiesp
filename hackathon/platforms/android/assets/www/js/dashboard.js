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