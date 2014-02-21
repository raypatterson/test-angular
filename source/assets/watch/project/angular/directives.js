'use strict';

/* Directives */

angular.module('myApp.directives', ['myApp.animations'])

.directive('disableAnimation', ['$animate',
  function($animate) {
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        $attrs.$observe('disableAnimation', function(value) {
          $animate.enabled(!value, $element);
        });
      }
    }
}])

.directive('stickyElement', ['$window',
  function($window) {

    return {

      link: function(scope, elm, attr) {

        var stickyTop = attr.stickyTop;
        var stickyIndex = attr.stickyIndex;
        var offsetStart = elm.offset()
          .top;

        var offsetScroll = 0;
        var offsetTop = 0;
        var offsetTotal = 0;

        var resetPosition = function() {

          // $log.info('Sticky Reset Position');
          elm.css('position', 'relative');
          elm.css('top', '0px');

          offsetStart = elm.offset()
            .top;
        };

        var updatePosition = function() {

          // console.log('Sticky Update Position', scope, elm, attr);
          offsetScroll = $window.pageYOffset;
          offsetTotal = offsetStart - offsetScroll;

          // $log.info('offsetStart: ', offsetStart);
          // $log.info('offsetScroll: ', offsetScroll);
          // $log.info('offsetTop: ', offsetTop);
          // $log.info('offsetTotal: ', offsetTotal);
          // $log.info('------');
          if (offsetTotal <= stickyTop) {

            elm.css('position', 'fixed');
            elm.css('z-index', stickyIndex);
            elm.css('top', stickyTop + 'px');

          } else {

            resetPosition();
          }
        };

        angular.element($window)
          .on('resize', function(event) {

            // $log.info('Sticky Resize Event');
            resetPosition();
            updatePosition();
          });

        angular.element($window)
          .on('scroll', function(event) {

            // $log.info('Sticky Scroll Event');
            updatePosition();
          });
      }
    };

}])

.directive('pwCheck', [

  function() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attr, ctrl) {

        var firstPassword = '#' + attr.pwCheck;
        elem.add(firstPassword)
          .on('keyup', function() {
            scope.$apply(function() {
              scope.$log.info(elem.val() === $(firstPassword)
                .val());
              ctrl.$setValidity('pwmatch', elem.val() === $(firstPassword)
                .val());
            });
          });
      }
    }

}])

.directive('animationToggle', ['$animate',

  function($animate) {

    return {

      link: function(scope, elm, attr) {

        var selectors = attr.animationToggleSelectors;
        var classname = attr.animationToggleClassname;

        var animate = function(toggleFunc) {
          $animate[toggleFunc]($(elm)
            .find(selectors), classname);
        };

        scope.animateOn = function() {
          animate('addClass');
        };

        scope.animateOff = function() {
          animate('removeClass');
        };
      }
    }
}])

.directive('productInfo', [

  function() {

    return {
      restrict: "E"

      ,
      controller: function($scope) {

        this.bar = function() {
          scope.$log.info("productInfo : bar");
        }
      }
    }
}])

.directive('closeBtn', ['$location',
  function($location) {

    return {

      link: function(scope, elm, attr) {

        scope.closeOverlay = function(params) {
          scope.$log.info('close overlay', params);

          angular.element('body')
            .css('overflow', 'auto');

          var $el = $(".overlay .container");

          TweenLite.to($el, 0.125, {
            alpha: 0,
            top: '50%',
            delay: 0.25,
            ease: "Sine.easeOut",
            onComplete: function() {

              // Note : [RKP] : Need to call $apply because we're using jQuery
              $location.path(params.path);
              scope.$apply();
              $location.replace();
            }
          });
        }
      }
    }
}])

.directive('imageLoader', [

  function() {

    return {

      link: function(scope, elm, attr) {

        elm = elm[0];

        var container = $("a", elm)[0];
        var spinner = $(".spinner", elm)[0];

        TweenLite.to(container, 0.0, {
          opacity: 0.0
        });

        new imagesLoaded(elm)

        .on('progress', function(instance) {
          // $log.info('PROGRESS', instance);
          TweenLite.to(container, 0.0, {
            opacity: 0.0
          });
        })
          .on('done', function(instance) {
            // $log.info('DONE', instance);
            TweenLite.to(spinner, 0.5, {
              opacity: 0.0,
              onComplete: function() {
                TweenLite.to(spinner, 0.0, {
                  display: 'none'
                });
                TweenLite.to(container, 0.5, {
                  delay: 0.5,
                  opacity: 1.0
                });
              }
            });
          });
      }
    }
}])

// .directive('imageZoomer', [ function() {
//   return {
//     link: {
//       pre: function PreLinkingFunction(scope, elm, attr) {
//         $log.info('pre link');
//       },
//       post: function PostLinkingFunction(scope, elm, attr) {
//         $log.info('post link');
//         elm.attr('data-zoom-image', attr.ngSrc);
//         elm.elevateZoom({
//           zoomWindowPosition: 11,
//           zoomWindowHeight: 200,
//           zoomWindowWidth: 200,
//           borderSize: 0,
//           easing: true,
//           scrollZoom: true
//         });
//       }
//     }
//   };
// }])

// .directive('productRequire', [
//   function() {
//     return {
//       restrict: "A"
//       ,
//       require: 'productInfo'
//       ,
//       link: function(scope, elm, attr, productInfoCtrl) {
//         elm.bind("mouseenter", function(event) {
//           productInfoCtrl.bar();
//         });
//         elm.bind("mouseleave", function(event) {
//           productInfoCtrl.bar();
//         });
//       }
//     }
// }])
;