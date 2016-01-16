(function () {
	'use strict';

	function NotesController ($scope, $rootScope, $sessionStorage, $location, $routeParams, UserService, NotesService) {

		//Notes collection && current user
		$scope.notesCollection = $sessionStorage.notesCollection ;
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
		 		$location.path('/notes');
			}
			
			$scope.newFormError = true;
		};

		// delete note
		$scope.deleteNote = function(id){
			// call service function
			NotesService.deleteNote(id);
				
		};

	}

	angular
		.module('notesApp')
		.controller('NotesController', ['$scope', '$rootScope', '$sessionStorage', '$location', '$routeParams', 'UserService', 'NotesService', NotesController ]);

})(); 


(function () {
	'use strict';

	function NoteDetailController ($scope, $routeParams, NotesService) {
		
		//Get current Note
		$scope.currentNote = NotesService.getCurrentNote($routeParams.noteId); 

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

 				//hide form && empty text area
 				$scope.viewForm = false;
 				$scope.newNoteContent = null;
	 		}
 		};

	}

	angular
		.module('notesApp')
		.controller('NoteDetailController', ['$scope', '$routeParams', 'NotesService', NoteDetailController ]);

})();





















































