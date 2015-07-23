angular.module('starter.controllers', [])

.controller('ReviewCtrl', function($scope, $http, $stateParams) {
	$http.get("res/daysOfTheWeek.json")
		.success(function(data){
			var frontEle = document.getElementById('cardFrontSelection');
			var backEle = document.getElementById('cardBackSelection');
			var optStr = ""

			updateOptionMenu(data[0]);

			$scope.cardList = data;
			$scope.sampleCard = data[0];
			$scope.index = 0;//$stateParams.cardId;
			$scope.deckSize = data.length;
			$scope.nextCard = (parseInt($stateParams.cardId)+1) % data.length;
			$scope.prevCard = (parseInt($stateParams.cardId)-1) % data.length;
			if ($scope.prevCard <0){
				$scope.prevCard = data.length-1;
			}
			$scope.currentCard = $scope.cardList[$scope.index];
			$scope.front = frontEle.options[frontEle.selectedIndex].text;
			$scope.back = backEle.options[backEle.selectedIndex].text;
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