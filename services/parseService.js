var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

  this.postData = function(question) {
    var url = 'https://api.parse.com/1/classes/question'
    var data = {};
    data.question = question;
    data.status = 'red';
    return $http.post(url, data);
  }

  this.getData = function() {
    var deferred = $q.defer();
    $http.get(url + '?order=createdAt'),
      then(function(data){
        deferred.resolve(data.data.results);
      });
      return deferred.promise;
  }

  this.escalate = function(questionObj){
    questionObj.status = 'yellow';
    return $http.put(url + '/' + questionObj.objectId, {status: questoinObj.status});
  }
  this.delFromData = function(questionObj){
    return $http.delete(url + '/' + questionObj.objectId);
  }

});
