(function () {
	'use strict';

	function config ($routeProvider) {

    $routeProvider
      .when('/login', {
        templateUrl: 'user/login.html',
        controller: 'AuthController',
      })
      .when('/notes', {
        templateUrl: 'note/overview.html',
        controller: 'NotesController',
      })
      .when('/notes/create', {
        templateUrl: 'note/newNoteForm.html',
        controller: 'NotesController',
      })
      .when('/notes/:noteId', {
        templateUrl: 'note/notesDetails.html',
        controller: 'NoteDetailController',
      })
      .when('/logout', {
        templateUrl: 'user/login.html',
        controller: 'LogoutController',
      })
      .otherwise({
      	redirectTo: '/login'
      });
  }

  function run ($rootScope, $sessionStorage) {
    //to save sessionStorage in rootscope
    $rootScope.currentUser = $sessionStorage.currentUser;
  }

  angular
		.module('notesApp', ['ngRoute','ngStorage' ])
		.config(['$routeProvider', config])
    .run(['$rootScope', '$sessionStorage', run]);

})();