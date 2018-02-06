/*
var options = {
	enableHighAccuracy: true,
	timeout: 6000,
	maximunAge: 0
};

navigator.geolocation.getCurrentPosition( success, error, options );

function success(position) {
	var coordenadas = position.coords;

	console.log('Tu posición actual es:');
	console.log('Latitud : ' + coordenadas.latitude);
	console.log('Longitud : ' + coordenadas.longitude);
	console.log('Más o menos ' + coordenadas.accuracy + ' metros.');
};

function error(error) {
	console.warn('ERROR(' + error.code + '): ' + error.message);
};
*/

function initMap() {
    var uluru = {
        lat: -25.363,
        lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}