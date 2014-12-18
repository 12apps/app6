angular.module('AB', [])
.controller('MainController', ['$http', '$scope', function($http, $scope) {
}]);

var map;
var service;
var infowindow;

function fetchPlaces() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var current = new google.maps.LatLng(latitude,longitude);

    map = new google.maps.Map(document.getElementById('map'), { center: current, zoom: 15 });

    var request = {
      location: current,
      radius: '1600',
      types: ['amusement_park', 'aquarium', 'art_gallery', 'bar', 'book_store', 'bowling_alley', 'cafe', 'casino', 'food', 'library', 'museum', 'night_club', 'park', 'restaurant', 'shopping_mall', 'spa', 'zoo']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function(results, status) {
      debugger;
    });
  });
}

fetchPlaces();
