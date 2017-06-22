'use strict';

/**
 * @ngdoc directive
 * @name angularMaterialBoilerplateApp.directive:amd
 * @description
 * # amd
 */
angular.module('angularMaterialBoilerplateApp')
  .component('amd', {
    templateUrl: 'views/amd.html',
    controller: ['$log', '$location', '$route',
      function amd($log, $location, $route) {
        var $ctrl = this;

        $ctrl.$location = $location;

      }]
  });
