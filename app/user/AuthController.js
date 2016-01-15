(function () {
	'use strict';

	function AuthController ($scope, $rootScope, $location, $sessionStorage, UserService) {

		if (UserService.getLoggedInUser()) {
			$location.path('/notes');
		}

 		$scope.loginError = false;

 		$scope.login = function() {
 			UserService.verifyUser($scope.user)
 				.then(function(response){
					var verifiedUser = response;

					if (verifiedUser) {

		 				//save user in ngStorage then rootScope
		 				$sessionStorage.currentUser = verifiedUser;
		 				$rootScope.currentUser = $sessionStorage.currentUser;

		 				$scope.loginError = false;

		 				//redirect to overview
		 				$location.path('/notes');
		 			}
		 			else {
		 				// show error message
		 				$scope.loginError = true;
		 			}
				}); 			
  	};
	}

	angular
		.module('notesApp')
		.controller('AuthController', ['$scope', '$rootScope', '$location', '$sessionStorage', 'UserService', AuthController]);

})(); 