'use strict';

var App = angular.module('routingDemoApp',['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
                // For any unmatched url, send to /business
                $urlRouterProvider.otherwise("/")
                
                $stateProvider
                        .state('form', {
                            url: "/form",
                            templateUrl: "form.html"
                        })
                        

                        .state('data', {
                            url: "/data",
                            templateUrl: "data.html"
                                
                        })
                       
            }]);

