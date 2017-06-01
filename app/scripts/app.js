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
    'ngMaterialSidemenu',
    'perfect_scrollbar'
  ])
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/form', {
        templateUrl: 'views/forminput.html'
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
