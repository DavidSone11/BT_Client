/**
 * Login Controller
 */

var app = angular.module('BTAPP');
app.controller('loginCtrl', function ($scope, $location, toaster) {

    $scope.isUserFieldError = false;
    $scope.isPasswordFieldError = false;

    $scope.login = function (username, password) {
        $scope.userError = false;
        $scope.passwordError = false;
        if (username == 'admin' && password == 'admin') {

            $location.path("dashboard");
            $scope.userError = false;
            $scope.passwordError = false;

        } else if (username !== 'admin' && password !== 'admin') {
            $scope.userError = true;
            $scope.passwordError = true;
            $location.path("login");
        } else if (username == 'admin' && password !== 'admin') {
            $scope.passwordError = true;
            $scope.userError = false;
            $location.path("login");
        } else if (username !== 'admin' && password == 'admin') {
            $scope.passwordError = false;
            $scope.userError = true;
            $location.path("login");
        }
    };

    $scope.loginError = function () {
        if (($scope.username == "" || $scope.password == "")) {
            console.log("skjdhasjhadsff");
            $scope.userError = false;
            $scope.passwordError = false;
        }
        else if (typeof $scope.username || typeof $scope.password == 'undefined') {
            console.log("ghtkhkhghgd");
            $scope.userError = false;
            $scope.passwordError = false;

        }
    };

    $scope.checkUser = function () {

        if ($scope.username == "" || typeof ($scope.username) == 'undefined') {
            $scope.isUserFieldError = true;
            $scope.isPasswordFieldError = false;
        } else if ($scope.username !== "" || typeof ($scope.username) !== 'undefined') {
            $scope.isUserFieldError = false;
        }
    };

    $scope.CheckPassowrd = function () {
        if ($scope.password == "" || typeof ($scope.password) == 'undefined') {
            $scope.isPasswordFieldError = true;
        } else if ($scope.password !== "" || typeof ($scope.password) !== 'undefined') {
            $scope.isPasswordFieldError = false;
        }
    };

    $scope.inputType = 'password';
    $scope.hideShowPassword = function () {
        if ($scope.inputType == 'password')
            $scope.inputType = 'text';
        else
            $scope.inputType = 'password';
    };

    $scope.register = function () {
        $location.path("userreg");

    };

});


