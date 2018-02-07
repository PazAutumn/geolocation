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

    var inputPartida = document.getElementById('punto-partida');
    var inputDestino = document.getElementById('punto-destino');

    new google.maps.places.Autocomplete(inputPartida);
    new google.maps.places.Autocomplete(inputDestino);

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var calculateAndDisplayRoute = function(directionService, directionDisplay) {
        directionsService.route({
            origin: inputPartida.value,
            destination: inputDestino.value,
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('No se encontró una ruta.');
            }
        });
    }

    directionsDisplay.setMap(map);

    var trazarRuta = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    }

    document.getElementById('trazar-ruta').addEventListener('click', trazarRuta);

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

    var myLatlng = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
        zoom: 18,
        center: myLatlng
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var miUbicacion = new google.maps.Marker({
        position: ({
            lat: latitude,
            lng: longitude
        }),
    });

    miUbicacion.setMap(map);
}

/*map.setZoom(18),
map.setCenter({
    lat: latitude,
    lng: longitude
})
    
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
      parking: {
        icon: iconBase + 'parking_lot_maps.png'
      },
      library: {
        icon: iconBase + 'library_maps.png'
      },
      info: {
        icon: iconBase + 'info-i_maps.png'
      }
    };*/


/*var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: ({
        lat: latitude,
        lng: longitude
    }),
    icon: iconBase
})*/

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