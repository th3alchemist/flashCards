angular.module('starter.controllers', [])

.controller('ReviewCtrl', function($scope, $http) {
	$http.get("res/greetings.json")
		.success(function(data){
			$scope.cardList = data;
			var optStr = ""
			var newOpt = Object.keys(data[0]); //retrieve the first card as a reference

			for (var i = 0; i < newOpt.length; i++) {
			    optStr = optStr + "<option value='" + newOpt[i] + "'>" + newOpt[i] + "</option>\n";
			}

			document.getElementById('cardFrontSelection').innerHTML = optStr;
			document.getElementById('cardBackSelection').innerHTML = optStr;
		});
})
.controller('QuizCtrl', function($scope) {})

.controller('StudyCtrl', function($scope) {});