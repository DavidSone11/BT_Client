
var app = angular.module('BTAPP');

app.directive('dashboard', ['$compile', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
        controller: function($scope) {
          
            console.log("Inside Dashboard");
        
        }
    };
}]);