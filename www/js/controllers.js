angular.module('starter.controllers', [])

.controller('ReviewCtrl', function($scope, $http) {
	$http.get("res/greetings.json")
		.success(function(data){
			$scope.cardList = data;
		});
})
.controller('QuizCtrl', function($scope) {})

.controller('StudyCtrl', function($scope) {});