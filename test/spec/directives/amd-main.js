'use strict';

describe('Directive: amdMain', function () {

  // load the directive's module
  beforeEach(module('angularMaterialDesignApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<amd-main></amd-main>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the amdMain directive');
  }));
});
