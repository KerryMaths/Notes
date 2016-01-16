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
	
	}

	angular
		.module('notesApp')
		.service('NotesService', ['$sessionStorage', NotesService]);
})(); 