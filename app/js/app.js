'use strict';

/* App Module */

var ngSeedApp = angular.module('ngSeedApp', [
  'ngRoute'
]);

ngSeedApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);