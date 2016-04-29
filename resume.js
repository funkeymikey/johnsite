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
   $scope.active = 0;
   var slides = $scope.slides = [];
   var currIndex = 0;

   slides.push({
     image: '/images/1280_profile.jpg',
     text: 'Nice image',
     id: currIndex++
   });
   slides.push({
     image: '/images/IMG_3570.JPG',
     text: 'Awesome photograph',
     id: currIndex++
   });
   slides.push({
     image: '/images/IMG_3563.JPG',
     text: 'That is so cool',
     id: currIndex++
   });
   slides.push({
     image: '/images/IMG_3564.JPG',
     text: 'I love that',
     id: currIndex++
   });

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
