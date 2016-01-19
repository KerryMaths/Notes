(function () {
	'use strict';

	function NoteDetailController ($scope, $routeParams, $location,  UserService, NotesService) {
		
		//Checking to see if user is logged in, if not redirect to login
		if (!UserService.getLoggedInUser()) {
			$location.path('/login');
		}

		//Get current Note
		$scope.currentNote = NotesService.getCurrentNote($routeParams.noteId); 

		//Get current additionalNote
		$scope.currentAdditionalNotes = NotesService.getCurrentAdditionalNotes($routeParams.noteId); 

		//toggle view form
 		$scope.toggleViewForm = function(flag) {
 			$scope.viewForm = flag; 
 			if (!$scope.viewForm){
 				$scope.addingNoteError = false;
 				$scope.newNoteContent = null;
 			}
 		};

 		//submit additional note
 		$scope.submitNote = function() {
 			
 			if (!$scope.newNoteContent) {
 				$scope.addingNoteError = true;
 			}

 			else {
 				$scope.addingNoteError = false;

 				//save additional note
 				NotesService.saveAdditionalNotes($routeParams.noteId, $scope.newNoteContent);
 				NotesService.getCurrentAdditionalNotes($routeParams.noteId); 

 				//hide form && empty text area
 				$scope.viewForm = false;
 				$scope.newNoteContent = null;
	 		}
 		};

	}

	angular
		.module('notesApp')
		.controller('NoteDetailController', ['$scope', '$routeParams', '$location', 'UserService', 'NotesService', NoteDetailController ]);

})();