/**
 * Login Controller
 */

var app = angular.module('BTAPP');
app.controller('userregCtrl', function ($scope, $location, toaster) {
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
    ]

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
    ]


});


