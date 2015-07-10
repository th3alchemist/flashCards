angular.module('starter.controllers', [])

.controller('ReviewCtrl', function($scope) {})

.controller('QuizCtrl', function($scope) {})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SettingsCtrl', function($scope, $stateParams, Chats) {
  $scope.cardFront = "Hello";
  $scope.cardBack = "Hola";
});
