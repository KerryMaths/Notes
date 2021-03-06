(function () {
	'use strict';

	function NotesController ($scope, $rootScope, $sessionStorage, $location, $routeParams, UserService, NotesService) {

		//Notes collection && current user
		$scope.notesCollection = NotesService.getAllNotes();

		$scope.currentUser = $sessionStorage.currentUser;

		//Checking to see if user is logged in, if not redirect to login
		if (!UserService.getLoggedInUser()) {
			$location.path('/login');
		}

		//Processing New Note form
		$scope.addNewNote = function(){
			// call service function
			if ($scope.newNote && $scope.newNote.title && $scope.newNote.content) {
				NotesService.saveNewNote($scope.newNote, $rootScope.currentUser);
				NotesService.getAllNotes();
		 		$location.path('/notes');
			}
			
			$scope.newFormError = true;
		};

		// delete note
		$scope.deleteNote = function(noteId, username){
			// call service function
			NotesService.deleteNote(noteId, username);
		};

	}

	angular
		.module('notesApp')
		.controller('NotesController', ['$scope', '$rootScope', '$sessionStorage', '$location', '$routeParams', 'UserService', 'NotesService', NotesController ]);

})(); 