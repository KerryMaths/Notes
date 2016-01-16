(function () {
	'use strict';

	function UserService ($http, $sessionStorage) {

		this.verifyUser = function (user) {

			function verifyUserSuccess (response){
				var users = response.data;
				var foundUser = users[user.name.toLowerCase()];

				if (foundUser && user.password === foundUser.password)  {
					return foundUser;
				}

				return null;
			}

			//handle failure callback
			function verifyUserError (){
				return null;
			}

			// get user data
			return $http.get('/user/users.json')
				.then(verifyUserSuccess, verifyUserError);

		};

		this.getLoggedInUser = function () {
			return $sessionStorage.currentUser;  	
		};
	}

	angular
		.module('notesApp')
		.service('UserService', ['$http', '$sessionStorage', UserService]);
})(); 