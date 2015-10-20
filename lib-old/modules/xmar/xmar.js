/* 
 * Written by J Gibbens
 
 */

var xmar = angular.module('xmar', [])
    .constant('MODULE_VERSION', '0.0.1')
    .value('defaults', {
        foo: 'bar'
    })
    .factory('xmar_factory', function() {/* stuff here */})
    .directive('xmar_directive', function() {/* stuff here */})
;// and so on


