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
    .when('/previous', {
      templateUrl: '/views/former.html',
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

  $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 1;

  $scope.slides = [
    { image: '/images/IMG_3561.JPG', text:'something about the first image', id:'1'},
    { image: '/images/IMG_3562.JPG', text:'something about the second image', id:'2'},
    { image: '/images/IMG_3563.JPG', text:'something about the third image', id:'3'}
  ];

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
