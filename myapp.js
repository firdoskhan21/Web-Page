var app = angular.module("myApp", ['ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('ShowData', {
                url: "/ShowData",
                templateUrl: "show.html"
            })
            .state('data', {
                url: "/data",
                templateUrl: "route.html"
            });
    }])
    .factory("myFactory", function() {
        var savedData = {};
        set = function(data) {
            savedData = data;
        };

        get = function() {
            return savedData;
        };
        // };
        return {
            set: set,
            get: get
        };
    })
    .controller("showCtrl", function($scope, $location, myFactory) {

        $scope.data = [
            { Name: 'abc', Address: 'xyz', Email: 'jsbjhjsh@hsh.cc' },
            { Name: 'abc', Address: 'xyz', Email: 'jsbjhjsh@hsh.cc' },
            { Name: 'abc', Address: 'xyz', Email: 'jsbjhjsh@hsh.cc' }
        ];

        $scope.Edit = function(d) {
            myFactory.set(d);
            $location.path('/dataSave');

        };
    })
    .controller("editCtrl", function($scope, $location, myFactory) {

        $scope.data = myFactory.get();
        $scope.Back = function() {
            $location.path('/ShowData');
        };

    })
    .controller("myCtrl", function($location) {
        $location.path('/ShowData');
    });