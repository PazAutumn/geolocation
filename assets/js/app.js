function initMap() {
    var laboratoriaLima = {
        lat: -12.1191427,
        lng: -77.0349046
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: laboratoriaLima
    });

    var markadorLaboratoria = new google.maps.Marker({
        position: laboratoriaLima,
        map: map
    });
}

document.getElementById('encuentrame').addEventListener('click', buscar);

function buscar() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

var latitude, longitude;
var success = function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    var miUbicacion = new google.maps.Marker({
        position: ({
            lat: latitude,
            lng: longitude
        }),
        setMap: map
    });

    /*
    map.setZoom(18),
    map.setCenter({
        lat: latitude,
        lng: longitude
    })
    */

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: ({
            lat: latitude,
            lng: longitude
        })
    })
}

var error = function(error) {
    alert('Tenemos un problema con encontrar tu ubicación');
}






/*
$(document).ready(function() {

});

$('#findme').click(function() {
    if (navigator.geolocation) {
        alert('Tu navegador soporta geolocalización');
    } else {
        alert('Tu navegador no soporta geolocalización')
    }

    function localización(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        alert('tu latitud es: ' + latitude + ', tu longitud es: ' + longitude);
    }

    function error(error) {
        console.warn('ERROR(' + error.code + '): ' + error.message);
    };

    navigator.geolocation.getCurrentPosition(localización, error);
});





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



function initMap() {
    var currentPosition = {
        lat: -33.421673999999996,
        lng: -70.6882608
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: currentPosition
    });
    var marker = new google.maps.Marker({
        position: currentPosition,
        map: map
    });
};
*/