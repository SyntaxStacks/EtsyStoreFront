/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

		$scope.data = 'milkduds';
    $http({
      method: 'POST',
      url: '/api/loadshop',
			data: { shopUrl: "http://www.etsy.com/shop/raptorbaby/rss" }
    }).
    success(function (data, status, headers, config) {
			$scope.data = data;
    }).
    error(function (data, status, headers, config) {
      $scope.data = 'Error!'
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
