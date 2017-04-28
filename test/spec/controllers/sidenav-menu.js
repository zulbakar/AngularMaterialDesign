'use strict';

describe('Controller: SidenavMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMaterialBoilerplateApp'));

  var SidenavMenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidenavMenuCtrl = $controller('SidenavMenuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SidenavMenuCtrl.awesomeThings.length).toBe(3);
  });
});
