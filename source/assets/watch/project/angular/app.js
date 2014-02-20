'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp',

    [
      'ngRoute'
      , 'ngAnimate'
      , 'route-segment'
      , 'view-segment'
      , 'truncate'
      , 'angularSpinner'
      , 'myApp.filters'
      , 'myApp.services'
      , 'myApp.directives'
      , 'myApp.controllers'
    ]

)

.run(function($rootScope, $log) {
  $rootScope.$log = $log;
})

.config(function($routeSegmentProvider, $routeProvider) {

  // Configuring provider options

  $routeSegmentProvider.options.autoLoadTemplates = true;

  // Setting routes. This consists of two parts:
  // 1. `when` is similar to vanilla $route `when` but takes segment name instead of params hash
  // 2. traversing through segment tree to set it up

  $routeSegmentProvider

  .when('/home', 'home')
    .when('/products', 'products')
    .when('/products/:id', 'products.detail')
    .when('/sign-up', 'signup')
    .when('/sign-in', 'signin')

  .segment('home', {
    templateUrl: 'assets/partials/home.html',
    controller: 'HomeCtrl'
  })

  .segment('products', {
    templateUrl: 'assets/partials/products.html',
    controller: 'ProductCtrl'
  })

  .within()

  .segment('detail', {
    templateUrl: 'assets/partials/products-detail.html',
    controller: 'ProductDetailCtrl',
    dependencies: ['id']
  })

  .up()

  .segment('signup', {
    templateUrl: 'assets/partials/sign-up.html',
    controller: 'SignCtrl'
  })

  .segment('signin', {
    templateUrl: 'assets/partials/sign-in.html',
    controller: 'SignCtrl'
  })

  ;

  $routeProvider.otherwise({
    redirectTo: '/home'
  });
})

;