/**
 * Master Controller
 */



var app = angular.module('BTAPP');
app.controller('dashboardCtrl', function($scope, $cookieStore) {
    var mobileView = 992;
    
    $scope.$watch(window.innerWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }
    
    });
    
    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };
    
    window.onresize = function() {
        $scope.$apply();
    };
});


