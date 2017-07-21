'use strict';

/**
 * @ngdoc directive
 * @name angularMaterialDesignApp.directive:amdDashboard
 * @description
 * # amdDashboard
 */
angular.module('angularMaterialDesignApp')
  .component('amdDashboard', {
    templateUrl: 'views/amd-dashboard.html',
    controller: ['$log', '$scope',
      function amdDashboard($log, $scope) {
        var $ctrl = this;
        $ctrl.mdrowheightxs = "2:2";

        /**WINDOW ON RESIZE */
        window.onresize = function (event) {
          $ctrl.applyOrientation();
        }

        $ctrl.applyOrientation = function () {
          if (window.innerHeight > window.innerWidth) {
            // you're in PORTRAIT mode
            $ctrl.mdrowheightxs = "2:2";
          } else {
            // you're in LANDSCAPE mode
            $ctrl.mdrowheightxs = "3:2";
          }
        }
        $ctrl.applyOrientation();

        /**END WINDOW ON RESIZE */
      }]
  });