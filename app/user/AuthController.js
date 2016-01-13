(function () {
	'use strict';

	function AuthController ($scope) {
		$scope.name = "";
	}

	angular
		.module('notesApp')
		.controller('AuthController', AuthController);

})(); 