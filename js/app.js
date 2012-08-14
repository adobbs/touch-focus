function GoalCtrl($scope) {
  $scope.goals = [];
 
  $scope.addGoal = function() {
    $scope.goals.push({text:$scope.goalText, done:false});
    $scope.goalText = '';
  };
}