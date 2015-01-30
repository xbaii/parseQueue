var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {

  var getParseData = function() {
    parseService.getData();
      then(function(data){
        $scope.queue = data;
      })
  }
  getParseData();

  $scope.postData = function() {
    parseService.postData($scope, question)
    .then(function(){
      getParseData();
      $scope.question = '';
    });
  }

  $scope.escalate = function(questionObj) {
    parseService.escalate(questionObj)
    .then(function() {
      getParseData();
    })
  }

  $scope.delFromData = function() {
    parseService.delFromData(this.q)
    .then(function(){
      getParseData();
    })
  }



})
