angular.module('starter.controllers', [])

.controller('ReviewCtrl', function($scope, $http, $stateParams) {
	$http.get("res/greetings.json")
		.success(function(data){

			$scope.index = $stateParams.cardId;
			$scope.cardList = data;
			var optStr = ""
			updateOptionMenu(data[0]);
		});
})
.controller('QuizCtrl', function($scope) {})

.controller('StudyCtrl', function($scope) {});



function updateOptionMenu(sampleCard){
	var optStr = ""
	var newOpt = Object.keys(sampleCard); //retrieve the first card as a reference

	for (var i = 0; i < newOpt.length; i++) {
	    optStr = optStr + "<option value='" + newOpt[i] + "'>" + newOpt[i] + "</option>\n";
	}

	document.getElementById('cardFrontSelection').innerHTML = optStr;
	document.getElementById('cardBackSelection').innerHTML = optStr;
}