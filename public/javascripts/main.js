angular.module('AB', [])
.controller('MainController', ['$http', '$scope', function($http, $scope) {

  var map, currentLocation, service;
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    $scope.$apply(function(){
      $scope.latitude = position.coords.latitude;
      $scope.longitude = position.coords.longitude;
      currentLocation = new google.maps.LatLng($scope.latitude, $scope.longitude);
      map = new google.maps.Map(document.getElementById('map'), { center: currentLocation, zoom: 15 });
    });
  });

  $scope.fetchPlaces = function() {
    var request = {
      location: currentLocation,
      radius: '1600',
      types: ['amusement_park', 'aquarium', 'art_gallery', 'bar', 'book_store', 'bowling_alley', 'cafe', 'casino', 'food', 'library', 'museum', 'night_club', 'park', 'restaurant', 'shopping_mall', 'spa', 'zoo']
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function(results, status) {
      var destination = pickRandom(results);
      var directionsDisplay;
      var directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(document.getElementById("directionsPanel"))
      var request = {
        origin: currentLocation,
        destination: destination.geometry.location,
        travelMode: google.maps.TravelMode.WALKING
      };
      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
        }
      });
    });
  };

  var pickRandom = function(places) {
    return places[Math.floor(Math.random()*places.length)];
  };

}]);
