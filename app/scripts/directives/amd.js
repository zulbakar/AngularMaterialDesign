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
    controller: ['$log', '$location',
      function amd($log, $location) {
        var $ctrl = this;

        $ctrl.$location = $location;

      }]
  });
