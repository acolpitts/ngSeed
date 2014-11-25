'use strict';

/* jasmine specs for controllers go here */
describe('Unit: ngSeed controllers', function() {

    beforeEach(module('ngSeedApp'));

    describe('MainCtrl', function(){
        var scope, ctrl;

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('MainCtrl', {$scope:scope});
        }));

        it('should have the correct sidebarURL', inject(function($controller) {
            expect(scope.awesomeThings.length).toBe(4);
        }));



    });

});
