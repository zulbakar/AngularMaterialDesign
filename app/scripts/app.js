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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('');

    var neonRedMap = $mdThemingProvider.extendPalette('blue', {
      '500': '#0288d1'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('neonRed', neonRedMap);

    var accentsneonRedMap = $mdThemingProvider.extendPalette('pink', {
      'A200': '#e91e63'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('accentsNeonRed', accentsneonRedMap);

    $mdThemingProvider.setDefaultTheme('altTheme');

    $mdThemingProvider.theme('altTheme')
      .primaryPalette('neonRed')
      .accentPalette('accentsNeonRed');
  });
