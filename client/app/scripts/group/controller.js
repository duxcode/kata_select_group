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
      var person_denied = []
      data.map(function(group) {
        group.map(function(person) {
          var person_rep = []
          data.map(function(group_validate) {
            var cond = group_validate.indexOf(person) >= 0 ? true : false
            var identification_denied = person_denied.indexOf(person)
            if (cond && identification_denied < 0) {
              person_rep.push(person)
            }
          })
          if (person_rep.length > 1) {
            if (person_beach.indexOf(person) < 0) {
              data.map(function(group_validate) {
                var identification = group_validate.indexOf(person)
                if (identification === 0) {
                  person_denied.push(group_validate[1])
                }
                if (identification === 1) {
                  person_denied.push(group_validate[0])
                }
              })
              person_beach.push(person)
            }
          }
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