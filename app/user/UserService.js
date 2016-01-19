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


		this.getBasicUserDetails = function (username) {
			function onSuccess (response) {
				var user = response.data[username];

				if (user) {
					return {
						"firstName": user.firstName,
						"lastName" : user.lastName,
						"img" : user.img
					};
				}

				return null;
			}

			function onError () {
				return null;
			}

			return $http.get('/user/users.json')
				.then(onSuccess, onError);
		};
	}

	angular
		.module('notesApp')
		.service('UserService', ['$http', '$sessionStorage', UserService]);
})(); 