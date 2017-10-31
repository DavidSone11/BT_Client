/**
 * Login Controller
 */

var app = angular.module('BTAPP');
app.controller('loginCtrl', function ($scope, $location) {
    console.log("Inside Login Controller");
    $scope.login = function (username, password) {

        if (username == 'admin' && password == 'admin') {

            $location.url("dasbhoard");
            console.log("success");

        } else {
            console.log("failure");
            $location.url("login");
        }
    };

});


