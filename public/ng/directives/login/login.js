' use strict';

angular.module('BTAPP')
.directive('login', ['$compile', function($compile) {
        return {
            templateUrl: 'ng/directives/login/login.html',
            restrict: 'E',
           
            controller: function ($scope) {
                console.log("Login");

            }
        };
    }]);
