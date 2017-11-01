' use strict';

angular.module('BTAPP')
.directive('userreg', ['$compile', function($compile) {
        return {
            templateUrl: 'ng/directives/userregistration/userreg.html',
            restrict: 'E',
           
            controller: function ($scope) {
                console.log("User Registration");

            }
        };
    }]);
