'use strict';

/* Animations */

angular.module('myApp.animations', [])

.animation('.slide-up', function() {

  return {

    addClass: function(elm, className) {

      TweenLite.to(elm, 0.125, {
        top: "0%",
        ease: "Sine.easeIn"
      });
    }

    ,
    removeClass: function(elm, className) {

      TweenLite.to(elm, 0.075, {
        top: "100%",
        ease: "Sine.easeOut"
      });
    }
  }
})

;