(function () {
	'use strict';

	function NotesService ($sessionStorage, $location, $route, UserService) {

		$sessionStorage.notesCollection = $sessionStorage.notesCollection || {};
		$sessionStorage.additionalNotes = $sessionStorage.additionalNotes || {};

		this.getAllNotes = function () {

			var notes = $sessionStorage.notesCollection;

			for (var key in notes) {
				for (var i = 0; i < Object.keys(notes).length; i++) {
					var note = notes[key];
					UserService.getBasicUserDetails(note.ownerId).then( function (response) {
						note.owner = response;
					}); 
				}
			}

			return notes;
		};

		this.saveNewNote = function(newNote, user){

			//setting properties for new note obj
			newNote.noteId = new Date().getTime();
			newNote.ownerId = user.username;
			
			//adding new note to notes collection
			$sessionStorage.notesCollection[newNote.noteId] = newNote;

		};

		//retrieving note content
		this.getCurrentNote = function (noteId) { 

			return $sessionStorage.notesCollection[noteId];
		};

		//retrieving additional note content
		this.getCurrentAdditionalNotes = function (noteId) { 

			var currentAdditionalNotes = $sessionStorage.additionalNotes[noteId];

			for (var key in currentAdditionalNotes) {
				for (var i = 0; i < Object.keys(currentAdditionalNotes).length; i++) {
					var note = currentAdditionalNotes[key];
					UserService.getBasicUserDetails(currentAdditionalNotes[key].createdBy).then( function (response) {
						note.owner = response;
					}); 
				}
			}

			return currentAdditionalNotes;
		};


		//delete note 
		this.deleteNote = function (noteId, username) { 
			// DONE: don't pass in owner, compare username in note object 
			if ($sessionStorage.currentUser.username === username) {

				//delete note
				delete $sessionStorage.notesCollection[noteId];
				delete $sessionStorage.additionalNotes[noteId];
	}
		};

		// save additional notes
		this.saveAdditionalNotes = function(parentNoteId, content){

			//current user
			var currentUser = $sessionStorage.currentUser;

			//setting properties for obj
			var additionalNote = {};
			additionalNote.createdBy = currentUser.username;
			additionalNote.content = content;
			additionalNote.dateCreated = new Date().getTime();

			//adding main note to note collection
			if ($sessionStorage.additionalNotes[parentNoteId]) {
				var parent  = $sessionStorage.additionalNotes[parentNoteId];
				parent[additionalNote.dateCreated] = additionalNote;
			}
			else {
				$sessionStorage.additionalNotes[parentNoteId] = {};
				$sessionStorage.additionalNotes[parentNoteId][additionalNote.dateCreated] = additionalNote;
				$route.reload();
			}
			
			return $sessionStorage.additionalNotes;

		};

	}

	angular
		.module('notesApp')
		.service('NotesService', ['$sessionStorage', '$location', '$route', 'UserService', NotesService]);
})(); 