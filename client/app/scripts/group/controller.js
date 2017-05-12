'use strict';

angular.module('Group')
    .controller('group', function($scope) {

        $scope.controller_loaded = 'Group loaded!';

        $scope.multiplication = function(data) {
            var res = 1
            data.map(function(value) {
                res = Number(res) * Number(value)
            })
            return res
        }

    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/group', {
                templateUrl: 'scripts/group/views/group.html',
                controller: 'group'
            });
    });