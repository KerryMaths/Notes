(function () {
	'use strict';

	function NotesController ($scope, $rootScope, $location, UserService) {

		if (!UserService.getLoggedInUser()) {
			$location.path('/login');
		}

 		$scope.addNote = function() {
 			$scope.noteTextArea = true;
 			$scope.cancelNote = true;
 			$scope.submitNote = true;
 			$scope.toOverview = true;
 			$scope.additionalNote = true;
 		};

 		$scope.submitNoteFn = function() {
 			$scope.noteTextArea = false;
 			$scope.cancelNote = false;
 			$scope.submitNote = false;
 			$scope.toOverview = false;
 			$scope.additionalNote = false;
 		};

	}

	angular
		.module('notesApp')
		.controller('NotesController', ['$scope', '$rootScope', '$location', 'UserService', NotesController]);

})(); 