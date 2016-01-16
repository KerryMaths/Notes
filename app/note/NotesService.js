(function () {
	'use strict';

	function NotesService ($sessionStorage) {

		$sessionStorage.notesCollection = $sessionStorage.notesCollection || {};

		this.saveNewNote = function(newNote, user){

			//setting properties for new note obj
			newNote.noteId = new Date().getTime();
			newNote.ownerFirstName = user.firstName;
			newNote.ownerLastName = user.lastName;
			newNote.ownerImg = user.img;

			//adding new note to notes collection
			$sessionStorage.notesCollection[newNote.noteId] = newNote;

		};

		//retrieving note content
		this.getCurrentNote = function (noteId) { 
			return $sessionStorage.notesCollection[noteId];
		};

		//delete note 
		this.deleteNote = function (noteId) { 

			//delete note
			delete $sessionStorage.notesCollection[noteId];

			//update note collection
			return $sessionStorage.notesCollection;
		};

		// save additional notes
		this.saveAdditionalNotes = function(key, content){

			//current note and user
			var currentNote = $sessionStorage.notesCollection[key];
			var currentUser = $sessionStorage.currentUser;

			//setting properties for obj
			var additionalNote = {};
			additionalNote.dateCreated = new Date().getTime();
			additionalNote.content = content;
			additionalNote.createdBy = currentUser.firstName;
			additionalNote.createrImg = currentUser.img;

			//adding additional note to notes collection
			currentNote.additionalNotes = currentNote.additionalNotes || {};
			currentNote.additionalNotes[additionalNote.dateCreated] = additionalNote;

			return currentNote;

		};

	}

	angular
		.module('notesApp')
		.service('NotesService', ['$sessionStorage', NotesService]);
})(); 