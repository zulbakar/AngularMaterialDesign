'use strict';

/**
 * @ngdoc overview
 * @name angularMaterialBoilerplateApp
 * @description
 * # angularMaterialBoilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('angularMaterialBoilerplateApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMaterialSidemenu'
  ])
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        template: '<amd-main></amd-main>'
      })
      .when('/about', {
        template: '<amd-about></amd-about>'
      })
      .when('/form', {
        template: '<amd-form></amd-form>'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('');

    var primaryColorMap = $mdThemingProvider.extendPalette('blue', {
      '500': '#0288d1'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('primaryColorMap', primaryColorMap);

    var accentsColorMap = $mdThemingProvider.extendPalette('pink', {
      'A200': '#e91e63'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('accentsColorMap', accentsColorMap);

    $mdThemingProvider.setDefaultTheme('altTheme');

    $mdThemingProvider.theme('altTheme')
      .primaryPalette('primaryColorMap')
      .accentPalette('accentsColorMap');
  });
