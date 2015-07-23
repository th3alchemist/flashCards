// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .directive('flippy', function() {
    return {
      restrict: 'EA',
      link: function($scope, $elem, $attrs) {
        $scope.flipped = false;
        var options = {
          flipDuration: ($attrs.flipDuration) ? $attrs.flipDuration : 400,
          timingFunction: 'ease-in-out',
        };

        // setting flip options
        angular.forEach(['flippy-front', 'flippy-back'], function(name) {
          var el = $elem.find(name);
          if (el.length == 1) {
            angular.forEach(['', '-ms-', '-webkit-'], function(prefix) {
              angular.element(el[0]).css(prefix + 'transition', 'all ' + options.flipDuration/1000 + 's ' + options.timingFunction);
            });
          }
        });

        /**
         * behaviour for flipping effect.
         */
        $scope.flip = function() {
          $elem.toggleClass('flipped');
          $scope.flipped = !$scope.flipped;
        }

      }
    };
  })

  .directive('navigate', function(){
    return{
      link: function($scope) {
        $scope.incCard = function() {
          $scope.index = ($scope.index+1) % $scope.deckSize;
        }

        $scope.decCard = function() {
          $scope.index = ($scope.index-1) % $scope.deckSize;
          if ($scope.index <0){
              $scope.index = $scope.deckSize -1;
          }
        }        
      }
    };
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.review', {
    url: '/review',
    views: {
      'tab-review': {
        templateUrl: 'templates/tab-review.html',
        controller: 'ReviewCtrl'
      }
    }
  })
  .state('tab.quiz', {
      url: '/quiz',
      views: {
        'tab-quiz': {
          templateUrl: 'templates/tab-quiz.html',
          controller: 'QuizCtrl'
        }
      }
    })

  .state('tab.study', {
    url: '/study',
    views: {
      'tab-study': {
        templateUrl: 'templates/tab-study.html',
        controller: 'StudyCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/review');

});
