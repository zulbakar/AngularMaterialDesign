'use strict';

describe('Controller: ToolbarHeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMaterialBoilerplateApp'));

  var ToolbarHeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolbarHeaderCtrl = $controller('ToolbarHeaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ToolbarHeaderCtrl.awesomeThings.length).toBe(3);
  });
});
