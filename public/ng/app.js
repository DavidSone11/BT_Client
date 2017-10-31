var app = angular.module('BTAPP', ['ui.bootstrap', 'ui.router', 'ngCookies', 'oc.lazyLoad']);

app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('dashboard', {
                template: '<dashboard></dashboard>',
                url: '/dashboard',
                controller: 'dashboardCtrl',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'BTAPP',
                                files: [
                                    'ng/directives/dashboard/dashboard.js',
                                    'ng/controller/dashboardCtrl.js',
                                    'ng/directives/dashboard/header/header.js',
                                    'ng/directives/dashboard/sidebar/sidebar.js',

                                ]
                            });
                    }
                }
            }).state('dashboard.user', {
                url: '/user',
                templateUrl: 'ng/directives/dashboard/user/user.html',
                controller: 'userCtrl',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'BTAPP',
                                files: [
                                   
                                    'ng/controller/userCtrl.js',
                                    


                                ]
                            });
                    }
                }
              }).state('login', {
                url: '/login',
                templateUrl: 'ng/directives/login/login.html',
                controller: 'loginCtrl',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'BTAPP',
                                files: [
                                   
                                    'ng/controller/loginCtrl.js',

                                ]
                            });
                    }
                }
              });

    }]);


