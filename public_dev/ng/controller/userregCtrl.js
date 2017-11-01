/**
 * Login Controller
 */

var app = angular.module('BTAPP');
app.controller('userregCtrl', function ($scope, $location, toaster, $http) {
    console.log("Inside Regi Controller");

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


