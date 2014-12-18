// navigator.geolocation.getCurrentPosition(function(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
//   console.log(latitude, longitude);
// });

angular.module('AB', [])
.controller('MainController', ['$http', '$scope', function($http, $scope) {
}]);

var map;
var service;
var infowindow;

function initialize() {
  var current = new google.maps.LatLng(37.495395099999996,-121.91775819999998);

  map = new google.maps.Map(document.getElementById('map'), { center: current, zoom: 15 });

  var request = {
    location: current,
    radius: '1600',
    types: ['amusement_park', 'aquarium', 'art_gallery', 'bar', 'book_store', 'bowling_alley', 'cafe', 'casino', 'food', 'library', 'museum', 'night_club', 'park', 'restaurant', 'shopping_mall', 'spa', 'zoo']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  debugger;
}

initialize();
