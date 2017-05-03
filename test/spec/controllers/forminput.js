'use strict';

describe('Controller: ForminputCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMaterialBoilerplateApp'));

  var ForminputCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForminputCtrl = $controller('ForminputCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForminputCtrl.awesomeThings.length).toBe(3);
  });
});
