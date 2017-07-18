'use strict';

/**
 * @ngdoc function
 * @name angularMaterialDesignApp.controller:SidenavMenuCtrl
 * @description
 * # SidenavMenuCtrl
 * Controller of the angularMaterialDesignApp
 */
angular.module('angularMaterialDesignApp')
  .controller('SidenavMenuCtrl', ['$mdSidenav', '$log', '$location', function ($mdSidenav, $log, $location) {
    var $ctrl = this;
    $ctrl.classActive = 'active';
    $ctrl.$location = $location;

    $ctrl.go = function (path) {
      $location.path(path);
    };

    $ctrl.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    }
  }]);
