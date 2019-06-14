var app = angular.module('mainApp', []);
app.controller('MainCtrl',
        ['$scope', 'dataShare',

            function($scope, dataShare) {
                $scope.txtData = '';
                $scope.send = function() {

                    dataShare.sendData($scope.txtData);
                };
            }
        ])

 app.controller('ctrl_scope',
        ['$scope', 'dataShare',

            function($scope, dataShare) {

                $scope.txtData = '';
                $scope.$on('data_shared', function()

                    {
                        var text = dataShare.getData();
                        $scope.txtData = text;
                    });

            }
        ])
    .service('dataShare', function($rootScope) {

        var service = {};
        service.data = false;
        service.sendData = function(data) {

            this.data = data;
            $rootScope.$broadcast('data_shared');
        };
        service.getData = function() {
            return this.data;
        };
        return service;

    });