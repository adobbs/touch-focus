var app = angular.module('focus', []).
  config(function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'entry.html', controller: 'GoalCtrl'}).
    when('/timer', {templateUrl: 'timer.html', controller: 'GoalCtrl'}).
    when('/rating', {templateUrl: 'rating.html'}).
    otherwise({redirectTo:'/'});
});

function GoalCtrl($scope, $rootScope, $location) {
  $scope.addGoal = function() {
    console.log("Entered a goal.");
    $rootScope.goalText = $scope.goalText;
    console.log($scope.goalText);
    console.log($rootScope.goalText);
    $location.path('/timer');
  };

  $scope.declareDone = function () {
    console.log("I'm Done!");
    console.log($scope.goalText);
    console.log($rootScope.goalText);
    $location.path('/rating');
  };  
}

function TimerCtrl($scope, $timeout) {
  $scope.minutes = 25;
  $scope.seconds = 60;
  $scope.displaySeconds = '00';

  function timer() {
    if ($scope.seconds > 1 && $scope.seconds < 60) {
      $scope.seconds -= 1;
    } else if ($scope.seconds === 60) {
      $scope.minutes -= 1;
      $scope.seconds -= 1;    
    } else if ($scope.seconds === 1 && $scope.minutes !== 0) {
      $scope.seconds = 60;
    } else if ($scope.seconds === 1 && $scope.minutes === 0) {
      $scope.seconds = 0;
    }

    // Convert seconds to display format
    if ($scope.seconds === 60) {
      $scope.displaySeconds = '00';  
    } else if ($scope.seconds < 10) {
      $scope.displaySeconds = '0' + $scope.seconds;
    } else {
      $scope.displaySeconds = $scope.seconds;
    } 
    
    if ($scope.seconds !== 0) {
      $timeout(timer, 1000);
    }
  }

  $timeout(timer, 1000);
}

function SignUpCtrl($scope, $location) {
  $scope.signUp = function () {
    console.log("Save my progress.");
    $location.path('/');
  };
}