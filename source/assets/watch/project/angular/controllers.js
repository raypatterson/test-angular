'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('MainCtrl', [
    '$scope'
    , '$window'
    , '$routeSegment'
    , 'loader'
    ,
  function($scope, $window, $routeSegment, loader) {

    $scope.$routeSegment = $routeSegment;
    $scope.loader = loader;

    $scope.resetScroll = function() {

      $scope.$log.info('Reset Scroll Position');

      angular.element($window)
        .scrollTop(0);
    };

    $scope.$log.info('MainCtrl');

  }])

.controller('HomeCtrl', ['$scope',
  function($scope) {

    $scope.data = {
      name: "Ray"
    };

    $scope.$log.info('HomeCtrl');

  }])

.controller('ProductCtrl', ['$scope', 'Products',
  function($scope, Products) {

    Products.get(function(data) {
      $scope.data = data;
    });

    $scope.$log.info('ProductCtrl');

  }])

.controller('SignUpCtrl', ['$scope',
  function($scope) {

    //  $scope.pw1 = 'password';

    $scope.master = {};
    $scope.signup = function(user) {
      $scope.master = angular.copy(user);
    }
  }])

.controller('ProductDetailCtrl', [

    '$scope'
    , '$routeSegment'
    , '$routeParams'
    , 'Products'
    ,
  function($scope, $routeSegment, $routeParams, Products)
  {

    $scope.$log.info('ProductDetailCtrl');

    $scope.$routeParams = $routeParams;
    $scope.$routeSegment = $routeSegment;

    angular.element('body')
      .css('overflow', 'hidden');

    Products.get(function(data) {

      var products = data.products;
      var i = 0;
      var I = products.length;
      var product = {};

      for (i; i < I; i++) {
        product = products[i];
        if (product.id.toString() === $routeParams.id) {
          break;
        }
      }

      var $el;

      $el = $(".overlay .cover");

      var duration = 0.25;
      var delay = 0;

      TweenLite.from($el, duration, {
        alpha: 0,
        top: '100%',
        ease: "Sine.easeIn"
      });

      delay += duration;

      $el = $(".overlay .content");

      TweenLite.from($el, duration, {
        alpha: 0,
        top: '10%',
        delay: delay,
        ease: "Sine.easeOut"
      });

      delay += duration;

      $el = $(".overlay .close");

      TweenLite.from($el, 0.25, {
        alpha: 0,
        delay: delay,
        ease: "Sine.easeOut"
      });

      $scope.data = {
        product: product
      }

    });

  }])

.controller('SignCtrl', ['$scope',
  function($scope) {

    $scope.master = {};

    $scope.signin = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.isUnchanged = function(user) {
      return angular.equals(user, $scope.master);
    };

}]);