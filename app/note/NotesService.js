(function () {
	'use strict';

	function UserService ($http, $sessionStorage) {

		this.verifyUser = function (user) {

			return $http.get('/user/users.json')
				.then(function(response){
					var users = response.data;
					var foundUser = users[user.name.toLowerCase()];

					if (foundUser && user.password === foundUser.password)  {
						return foundUser;
					}

					return null;
				});
				//TODO
				//handle failure callback
		};

		this.getLoggedInUser = function () {
			return $sessionStorage.currentUser;  	
		};
	}

	angular
		.module('notesApp')
		.service('UserService', ['$http', '$sessionStorage', UserService]);
})(); 