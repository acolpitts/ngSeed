'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('E2E: ngSeedApp', function() {

    var ptor;

    beforeEach(function() {
        browser.get('http://127.0.0.1:8000/app');
        ptor = protractor.getInstance();
    });

    it('should load the home page', function() {
        var ele = by.id('app-container');
        expect(ptor.isElementPresent(ele)).toBe(true);
    });

    it('should have the right title', function() {
        expect(browser.getTitle()).toMatch("ngSeedApp | AngularJS + Node.js");
    });

});
