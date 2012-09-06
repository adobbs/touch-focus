var app = angular.module('focus', []).
  config(function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'entry.html', controller: GoalCtrl}).
    when('/timer', {templateUrl: 'timer.html', controller: TimerCtrl}).
    when('/rating', {templateUrl: 'rating.html', controller: SignUpCtrl}).
    otherwise({redirectTo:'/'});
});

app.factory('goal', function() {
    var goalService = {};
    
    goalService.text = 'default';

    return goalService;
});

function GoalCtrl($scope, $location, goal) {
  $scope.addGoal = function() {
    console.log("Entered a goal.");
    goal = {text:$scope.goalText, done:false};
    console.log($scope.goalText);
    console.log(goal.text);
    $location.path('/timer');
  };

  $scope.declareDone = function () {
    $scope.goalText = goal.text;
    console.log("I'm Done!");
    console.log($scope.goalText);
    console.log(goal.text);
    $location.path('/rating');
  };  
}

function TimerCtrl($scope, $location, $timeout) {
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