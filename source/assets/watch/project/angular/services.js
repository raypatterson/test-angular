'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

.value('version', '0.1')

.value('loader', {
  show: false
})

.factory('Products', ['$http',
  function($http) {

    return {

      get: function(callback) {

        // $http.get('api/products/', {
        //   cache: true
        // })
        // $http.get('http://www.json-generator.com/j/hsbv?indent=0', {
        //   cache: true
        // })
        $http.get('assets/json/products.json', {
          cache: true
        })
          .success(function(response) {

            callback({
              title: 'Products',
              products: response.result
            });
          });
      }
    };
}])
/*
.value('ProductData',

  {
    title: "Products"
    , products: [
      {
        guid: "0"
        , url_fragment: "0"
        , title: "<%= get_title_copy 3, true %>"
        , description: "<%= get_body_copy 3, true %>"
        , price: "<%= get_number 5, 1000 %>.<%= get_number 0, 99 %>"

        , asset: { image: {
          thumb: "<%= get_image '280x400', 'FPO Product Image', '476DD5' %>"
          , large: "<%= get_image '420x720', 'FPO Product Image', '476DD5' %>"
        } }
      }
      , {
        guid: "1"
        , title: "<%= get_title_copy 3, true %>"
        , url_fragment: "1"
        , description: "<%= get_body_copy 3, true %>"
        , price: "<%= get_number 5, 1000 %>.<%= get_number 0, 99 %>"

        , asset: { image: {
          thumb: "<%= get_image '280x400', 'FPO Product Image', '476DD5' %>"
          , large: "<%= get_image '420x720', 'FPO Product Image', '476DD5' %>"
        } }
      }
      , {
        guid: "2"
        , title: "<%= get_title_copy 3, true %>"
        , url_fragment: "2"
        , description: "<%= get_body_copy 3, true %>"
        , price: "<%= get_number 5, 1000 %>.<%= get_number 0, 99 %>"

        , asset: { image: {
          thumb: "<%= get_image '280x400', 'FPO Product Image', '476DD5' %>"
          , large: "<%= get_image '420x720', 'FPO Product Image', '476DD5' %>"
        } }
      }
      , {
        guid: "3"
        , title: "<%= get_title_copy 3, true %>"
        , url_fragment: "3"
        , description: "<%= get_body_copy 3, true %>"
        , price: "<%= get_number 5, 1000 %>.<%= get_number 0, 99 %>"

        , asset: { image: {
          thumb: "<%= get_image '280x400', 'FPO Product Image', '476DD5' %>"
          , large: "<%= get_image '420x720', 'FPO Product Image', '476DD5' %>"
        } }
      }
      , {
        guid: "4"
        , url_fragment: "4"
        , title: "<%= get_title_copy 3, true %>"
        , description: "<%= get_body_copy 3, true %>"
        , price: "<%= get_number 5, 1000 %>.<%= get_number 0, 99 %>"
        , asset: { image: {
          thumb: "<%= get_image '280x400', 'FPO Product Image', '476DD5' %>"
          , large: "<%= get_image '420x720', 'FPO Product Image', '476DD5' %>"
        } }
      }
    ]
  }
)
*/
;