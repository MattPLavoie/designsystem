/* global angular */
/* global _ */
  'use strict';

  var fetch = function($http, requestUrl, success) {
    $http.get(requestUrl)
    .then(
      success,
      function(error) {
        console.log("error", error);
      });
  };

  window.app = angular.module('app', [
    'ngSanitize',
    'ngRoute'
  ])
  .config(['$routeProvider',routingConfig])
  .controller('appController', ['$scope', '$http', '$location', appController])
  .controller('homeController', ['$scope', homeController]);

  function routingConfig($routeProvider) {
    $routeProvider.
      when('/home/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      }).
      when('/buttons/', {
        templateUrl: 'partials/buttons.html',
        controller: 'compontentController'
      }).
      otherwise({
        redirectTo: '/buttons/'
      });
  }

  function appController($scope, $http, $location) {


  }

  function homeController($scope) {


  }
