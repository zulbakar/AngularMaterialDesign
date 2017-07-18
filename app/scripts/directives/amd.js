'use strict';

/**
 * @ngdoc directive
 * @name angularMaterialDesignApp.directive:amd
 * @description
 * # amd
 */
angular.module('angularMaterialDesignApp')
  .component('amd', {
    templateUrl: 'views/amd.html',
    controller: ['$log', '$location',
      function amd($log, $location) {
        var $ctrl = this;

        $ctrl.$location = $location;

      }]
  });
