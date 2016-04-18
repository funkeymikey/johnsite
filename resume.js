var resume = angular.module('resume', []);

resume.controller('resumeCtrl', function ($scope, $rootScope) {



  $scope.setView = function(view){
    console.log('setting view to ' + view);
    $scope.view = '/views/' + view;
  };

    $scope.setView('intro.html');
});
