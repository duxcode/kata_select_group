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

        $scope.beach = function(data) {
            var person_beach = []
            var data1 = angular.copy(data)
            data.map(function(group) {
                console.log(group)
                group.map(function(person) {

                    // var person_rep = []
                    // data1.map(function(group_validate) {
                    //     if (person > 0) {
                    //         var cond = group_validate.indexOf(person) >= 0 ? true : false
                    //         if (cond) {
                    //             person_rep.push(person)
                    //         }
                    //     }
                    // })

                    // if (person_rep.length > 1) {
                    //     if (person_beach.indexOf(person) < 0) {
                    //         person_beach.push(person)
                    //     }
                    // }
                })
            })

            return person_beach
        }

    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/group', {
                templateUrl: 'scripts/group/views/group.html',
                controller: 'group'
            });
    });