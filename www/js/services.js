angular.module('starter.services', ["ionic", "firebase"])

.factory('Points', function($firebaseArray) {
  // Might use a resource here that returns a JSON array

  var data = new Firebase("https://uwi-test2.firebaseio.com/points");
  // Some fake testing data
  var points_array = $firebaseArray(data);

  return {
    all: function() {
      return points_array;
    }

  };
});
