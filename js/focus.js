angular.module('focus', []).
  config(function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'entry.html', controller: GoalCtrl}).
    when('/timer', {templateUrl: 'timer.html', controller: TimerCtrl}).
    when('/rating', {templateUrl: 'rating.html', controller: SignUpCtrl}).
    otherwise({redirectTo:'/'});
});

function GoalCtrl($scope, $location) {
  $scope.goals = [];
 
  $scope.addGoal = function() {
    $scope.goals.push({text:$scope.goalText, done:false});
    console.log($scope.goalText);
    $scope.goalText = '';
    $location.path('/timer');
  };
}

function TimerCtrl($scope, $location) {
  $scope.declareDone = function () {
    console.log("I'm Done!");
    $location.path('/rating');
  };
}

function SignUpCtrl($scope, $location) {
  $scope.signUp = function () {
    console.log("Save my progress.");
    $location.path('/');
  };
}