' use strict';

angular.module('BTAPP')
.directive('sidebar', ['$compile', function($compile) {
        return {
            templateUrl: 'ng/directives/dashboard/sidebar/sidebar.html',
            restrict: 'E',
           
            controller: function ($scope) {
                console.log("DASDAS");

            }
        };
    }]);
