'use strict';

describe('Directive: amdAbout', function () {

  // load the directive's module
  beforeEach(module('angularMaterialBoilerplateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<amd-about></amd-about>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the amdAbout directive');
  }));
});
