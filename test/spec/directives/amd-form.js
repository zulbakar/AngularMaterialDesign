'use strict';

describe('Directive: amdForm', function () {

  // load the directive's module
  beforeEach(module('angularMaterialDesignApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<amd-form></amd-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the amdForm directive');
  }));
});
