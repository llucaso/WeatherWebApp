$(function() {

	var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var temp = $('#temp');




	$('#search')
		.click(getTemp);

	function getTemp() {
		var cityName = $('#city-name').val();

		$.ajax({
			url: url + cityName + '&mode=json&units=metric' + '&APPID=9ca0cfe713c745eb66268a80dfa1ef98',
			method: 'GET',
			success: function(res) {
				temp.text(res.main.temp);
				$('#temp').append('*C');
			}
		});

	}





	




















	});