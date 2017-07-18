'use strict';

describe('Directive: amdPageLogin', function () {

  // load the directive's module
  beforeEach(module('angularMaterialDesignApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<amd-page-login></amd-page-login>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the amdPageLogin directive');
  }));
});
