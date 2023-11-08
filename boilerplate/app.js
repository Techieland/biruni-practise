var app = angular.module('myApp', []);

app.factory('AppTest', function() {
  // let test = {};
  class Name {
    constructor(name) {
      this.name = name;
    }
  }
  
  return function(name) {
    return new Name(name);
  };
});

app.controller('myCtrl', function ($scope, $timeout, AppTest) {

  let a = {};
  // AppTest.name = 'nimadur';
  
  // $scope.firstName = 'John';
  a.firstName = 'John';
  a.lastName = 'Doe';

  $scope.a = a;
});

app.controller('myTes', function ($scope, AppTest) {
  // AppTest.name = 'nimadur';

  const a = $scope.a;
  console.log(a);

  // $scope.firstName = 'John';
  // $scope.firstName = AppTest.name;
  // $scope.lastName = 'Doe';
});
