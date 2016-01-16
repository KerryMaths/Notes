(function () {
	'use strict';

	function NotesController ($scope, $rootScope, $sessionStorage, $location, $routeParams, UserService, NotesService) {

		//Notes collection
		$scope.notesCollection = $sessionStorage.notesCollection ;

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

 		$scope.toggleViewForm = function(flag) {
 			$scope.viewForm = flag; 
 			if (!$scope.viewForm){
 				$scope.addingNoteError = false;
 			}
 		};

 		$scope.submitNoteFn = function() {
 			
 			if (!$scope.newNoteContent) {
 				$scope.addingNoteError = true;
 			}

 			else {
 				$scope.addingNoteError = false;

 				//pass note detail to note service

 				//display in view

 				//hide form && empty text area
	 			}
 		};

	}

	angular
		.module('notesApp')
		.controller('NoteDetailController', ['$scope', '$routeParams', 'NotesService', NoteDetailController ]);

})();





















































