' use strict';

angular.module('BTAPP')
.directive('header', ['$compile', function($compile) {
        return {
            templateUrl: 'ng/directives/dashboard/header/header.html',
            restrict: 'E',
           
            controller: function ($scope,$location) {
                console.log("header");

                $scope.logout = function(){

                    $location.path('login');
                };

            }
        };
    }]);
