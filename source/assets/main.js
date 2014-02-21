/**
 * jQuery
 */
//= require jquery/jquery

/**
 * Plugins
 */

//= require eventEmitter/EventEmitter
//= require eventie/eventie
//= require imagesloaded/imagesloaded

/**
 * Animation
 */

//= require greensock-js/src/uncompressed/easing/EasePack
//= require greensock-js/src/uncompressed/plugins/CSSPlugin
//= require greensock-js/src/uncompressed/TweenLite

//= require spin.js/spin

/**
 * Angular
 */

//= require angular/angular
//= require angular-animate/angular-animate
//= require angular-route/angular-route


/**
 * Modules
 */

//= require angular-spinner/angular-spinner
//= require angular-truncate/dist/angular-truncate
//= require angular-route-segment/build/angular-route-segment

/**
 * Bootstrap
 */

//= require angular-bootstrap/ui-bootstrap
//= require angular-bootstrap/ui-bootstrap-tpls

/**
 * Project
 */

//= require project/angular/app
//= require project/angular/services
//= require project/angular/controllers
//= require project/angular/filters
//= require project/angular/directives
//= require project/angular/animations


/**
 * Notes

#####  Mock Data
#####  Remote   :    http://www.json-generator.com/j/hsbv?indent=0
#####  Local    :    assets/json/products.json

[
    '{{repeat(30, 100)}}',
    {
        id: '{{index}}',
        guid: '{{guid}}',
        is_sold: '{{bool}}',
        price: {
            current: '{{numeric(5,10000,%=$0,0.00)}}',
            original: '{{numeric(5,15,%=$0,0.00)}}'
        },
        title: function(idx) {
            return this.lorem(this.numeric(0, 5), 'words');
        },
        description: function(idx) {
            return this.lorem(this.numeric(0, 3), 'paragraphs');
        },
        asset: {
            image: {
                thumb: 'http://lorempixel.com/280/400/abstract/FPO-Thumb-Image',
                large: [
                    '{{repeat(1, 5)}}',
                    function(idx) {
                        return 'http://lorempixel.com/420/720/abstract/FPO-Large-Image-' + ( idx + 1 );
                        }
                    ]
            }
        },
        tags: [
            '{{repeat(7)}}',
            '{{lorem(1)}}'
        ],
        seller: {
            id: '{{index}}',
            name: '{{firstName}} {{surname}}',
            company: '{{company}}',
            country: '{{country}}',
            joined: '{{date(YYYY)}}/{{date(MM)}}/{{date(dd)}}'
        },
        buyers: [
            '{{repeat(3)}}',
            {
                id: '{{index}}',
                name: '{{firstName}} {{surname}}'
            }
        ]
    }
]

*/