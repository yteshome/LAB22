var app = angular.module('myModule', []);

app.controller('myCtrl', function($scope, $http) {
  console.log('Controller is loaded');


  $http({
    method: 'GET',
    url: '/quotes/mlk'
  }).then(function(response) {
    $scope.info = response.data;
    console.log(response);
  });

  $http({
    method: 'GET',
    url: '/quotes/mandella'
  }).then(function(response) {
    $scope.info = response.data;
    console.log(response);
  });

  $http({
    method: 'GET',
    url: '/quotes/armstrong'
  }).then(function(response) {
    $scope.info = response.data;
    console.log(response);
  });

  $http({
    method: 'GET',
    url: '/quotes/gandhi'
  }).then(function(response) {
    $scope.info = response.data;
    console.log(response);
  });

});
