'use strict';

describe('Directive: amdLogin', function () {

  // load the directive's module
  beforeEach(module('angularMaterialBoilerplateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<amd-login></amd-login>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the amdLogin directive');
  }));
});