'use strict';

/* jasmine specs for controllers go here */
describe('Unit: bestbuyMVC controllers', function() {

    beforeEach(module('bestbuyMVC'));

    describe('MainCtrl', function(){
        var scope, ctrl;

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('MainCtrl', {$scope:scope});
        }));

        it('should have the correct sidebarURL', inject(function($controller) {
            expect(scope.sidebarURL).toMatch('partials/categoryList.html');
        }));

        it('should not have any products to start', function () {
            expect(scope.products).toBe(null);
        });

        it('should default to list all products from all departments', function() {
            expect(scope.currentCategory.id).toBe('departments');
        });

        it('should change $scope.currentCategoy when calling changeCategory', function() {
            var oldCat = scope.currentCategory
            scope.changeCategory({id: 'mockCat'});
            expect(oldCat).not.toEqual(scope.currentCategory);
        });

    });

    describe('CategoriesCtrl', function(){
        var scope, ctrl;

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('CategoriesCtrl', {$scope:scope});
        }));

        it('should not have any categories to start', function() {
            expect(scope.departments).toBe(null);
        });
    })

    describe('ProductsCtrl', function(){
        var scope, ctrl;

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('ProductsCtrl', {$scope:scope});
        }));

        it('should not have a currentProduct defined', function() {
            expect(scope.currentProduct).toBe(null);
        });
    })

});
