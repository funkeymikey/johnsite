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

resume.run(function($rootScope, $location){
  $rootScope.pages = [
    {name:"Home", path:"/"},
    {name:"Bufchfield", path:"/burchfield"},
    {name:"Rockwell", path:"/rockwell"},
    {name:"Theatre", path:"/theatre"},
    {name:"Previous Employment", path:"/previous"}
  ];

  $rootScope.navigate = function(){
    $location.path($rootScope.currentPath);
  };

  $rootScope.currentPath = $location.path();


  $rootScope.$on("$routeChangeStart", function (event, next, old) {
    $rootScope.currentPath = next.$$route.originalPath;
  });
});

resume.controller('resumeCtrl', function ($scope, $uibModal, $location) {

  $scope.myInterval = 5000;
   $scope.noWrapSlides = false;
   $scope.active = 0;
   var slides = $scope.slides = [];
   var currIndex = 0;

   slides.push({
     image: '/images/bpac/Aud/cuomo.jpg',
     id: currIndex++
   });
   slides.push({
     image: '/images/IMG_3570.JPG',
     id: currIndex++
   });

   slides.push({
     image: '/images/bpac/yard/FY1.jpg',
     id: currIndex++
   });
   slides.push({
     image: '/images/rockwell/performers/p3.jpg',
     id: currIndex++
   });
   slides.push({
     image: '/images/theatre/flex/f1.jpg',
     id: currIndex++
   });
   slides.push({
     image: '/images/previous/studio/s1.jpg',
     id: currIndex++
   });
   slides.push({
     image: '/images/theatre/upton/u1.jpg',
     id: currIndex++
   });

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
