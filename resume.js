var resume = angular.module('resume', ['ngAnimate', 'ui.bootstrap', 'ngRoute']);

resume.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/views/intro.html',
      controller: 'resumeCtrl',
      caseInsensitiveMatch: true
    })
    .when('/burchfield', {
      templateUrl: '/views/burchfield.html',
      controller: 'resumeCtrl',
      caseInsensitiveMatch: true
    })
    .when('/rockwell', {
      templateUrl: '/views/rockwell.html',
      controller: 'resumeCtrl',
      caseInsensitiveMatch: true
    })
    .when('/theatre', {
      templateUrl: '/views/theatre.html',
      controller: 'resumeCtrl',
      caseInsensitiveMatch: true
    })
    .when('/former-employers', {
      templateUrl: '/views/former-employers.html',
      controller: 'resumeCtrl',
      caseInsensitiveMatch: true
    })
    .otherwise({
      redirectTo: '/'
    });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});

resume.controller('resumeCtrl', function ($scope, $uibModal, $location) {

  $scope.setView = function(path){
    $location.path(path);
  };

  $scope.open = function (filename) {
    $scope.imageUrl = '/images/' + filename;

    var modalInstance = $uibModal.open({
      animation: true,
      size: 'lg',
      templateUrl: 'info-modal',
      scope: $scope
    });
  };
});
