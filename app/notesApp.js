(function () {
	'use strict';

	function config ($routeProvider) {

    $routeProvider
      .when('/login', {
        templateUrl: 'user/login.html',
        controller: 'AuthController',
        controllerAs: 'loginvm',  
      })
      .otherwise({
      	redirectTo: '/login'
      });
  }

  angular
		.module('notesApp', ['ngRoute'])
		.config(['$routeProvider', config]);

})();