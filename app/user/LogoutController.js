(function () {
	'use strict';

	function LogoutController ($rootScope, $location, $sessionStorage) {

		$location.path('/login');
		delete $rootScope.currentUser;
		delete $sessionStorage.currentUser;
	}

	angular
		.module('notesApp')
		.controller('LogoutController', ['$rootScope', '$location', '$sessionStorage', LogoutController]);

})(); 