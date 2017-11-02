/**
 * Login Controller
 */

var app = angular.module('BTAPP');
app.controller('userregCtrl', function ($scope, $location, toaster, $http) {
    console.log("Inside Regi Controller");
    $scope.isUserFieldError = false;
    $scope.isPasswordFieldError = false;
    $scope.isEmailFieldError = false;
    $scope.isCreateUserFieldError = false;
    $scope.isPasswordFieldError = false;
    $scope.isConfirmPasswordFieldError = false;
    $scope.isMobileFieldError = false;
    $scope.enableSignUp = false;

    $scope.roles = [
        {
            name: 'Admin'
        },
        {
            name: 'Super'
        },
        {
            name: 'Guest'
        },
        {
            name: 'User'
        }
    ];

    $scope.genders = [
        {
            name: 'Male'
        },
        {
            name: 'Female'
        },
        {
            name: 'Other'
        }
    ];

    $scope.checkUser = function () {
        if ($scope.userRegister.name == "" || typeof ($scope.userRegister.name) == 'undefined') {
            $scope.isUserFieldError = true;
            $scope.isPasswordFieldError = false;
        } else if ($scope.userRegister.name !== "" || typeof ($scope.userRegister.name) !== 'undefined') {
            $scope.isUserFieldError = false;
        }

        if ($scope.userRegister.email == "" || typeof ($scope.userRegister.email) == 'undefined') {
            $scope.isEmailFieldError = true;
        } else if ($scope.userRegister.email !== "" || typeof ($scope.userRegister.email) !== 'undefined') {
            $scope.isEmailFieldError = false;
        }

        if ($scope.userRegister.username == "" || typeof ($scope.userRegister.username) == 'undefined') {
            $scope.isCreateUserFieldError = true;
        } else if ($scope.userRegister.username !== "" || typeof ($scope.userRegister.username) !== 'undefined') {
            $scope.isCreateUserFieldError = false;
        }

        if ($scope.userRegister.password == "" || typeof ($scope.userRegister.password) == 'undefined') {
            $scope.isPasswordFieldError = true;
        } else if ($scope.userRegister.password !== "" || typeof ($scope.userRegister.password) !== 'undefined') {
            $scope.isPasswordFieldError = false;
        }

        if ($scope.userRegister.confirmPassword == "" || typeof ($scope.userRegister.confirmPassword) == 'undefined') {
            $scope.isConfirmPasswordFieldError = true;
        } else if ($scope.userRegister.confirmPassword !== "" || typeof ($scope.userRegister.confirmPassword) !== 'undefined') {
            $scope.isConfirmPasswordFieldError = false;
        }

        if ($scope.userRegister.mobileNumber == "" || typeof ($scope.userRegister.mobileNumber) == 'undefined') {
            $scope.isMobileFieldError = true;
        } else if ($scope.userRegister.mobileNumber !== "" || typeof ($scope.userRegister.mobileNumber) !== 'undefined') {
            $scope.isMobileFieldError = false;
        }
    };

    $scope.users = [];
    $scope.userRegister = {};

    $scope.registerUser = function () {

        var regUrl = "http://localhost:4000/user/create";


        $http.post(regUrl, $scope.userRegister, {


        }).then(function (responseData) {
            console.log("dasds");
        });




    };

    $scope.getUsers = function () {

        var regUrl = "http://localhost:4000/user/getUsers";
        $http.get(regUrl).then(function (responseData) {
            $scope.users = responseData.data.results;
        }, function error(res) {

        });

    };

    $scope.getUsers();


    $scope.removeUser = function (user) {

        console.log(user);
        var id = user._id;
        $scope.users.splice(user, 1);
        $http.delete("http://localhost:4000/user/remove/", { params: { "id": id } }).then(function (result) {
            console.log(result);

            toaster.pop({
                type: 'success',
                title: 'Remove',
                body: 'Remove User Successfully!!!!!',
                timeout: 3000
            });

        }, function (err) {

        });

    };

});


