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