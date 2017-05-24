angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('', '/')


    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home.html'
    })
    .state('sign-up', {
        url: '/signup',
        templateUrl: 'signUp.html'
    })
    .state('details', {
        url: '/details',
        templateUrl: 'details.html'
    })
})