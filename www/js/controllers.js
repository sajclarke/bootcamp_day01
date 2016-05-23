angular.module('starter.controllers', ["ionic", "firebase"])

.controller('MapCtrl', function($scope, Points) {

  $scope.points = Points.all();

  console.log($scope.points);

  //After points have loaded from firebase then load map
  $scope.points.$loaded(function(points){

    //TODO: Replace with geolocation API
    var myLatLng = {lat: 13.1345059, lng: -59.6312021};

    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 12
    });

    for(var int = 0; int < points.length; int++){

      //Loading coords from firebase
      var coords = {lat: points[int].latitude, lng: points[int].longitude};

      var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: points[int].title
      });

    }


  });

  

})

.controller('PointsCtrl', function($scope, Points) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.points = Points.all();

  console.log($scope.points);

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
