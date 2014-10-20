'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('E2E: BestBuy MVC Sample App', function() {

    var ptor;

    beforeEach(function() {
        browser.get('http://127.0.0.1:8000/app');
        ptor = protractor.getInstance();
    });

    it('should load the home page', function() {
        var ele = by.id('home');
        expect(ptor.isElementPresent(ele)).toBe(true);
    });

    it('should have the right title', function() {
        expect(browser.getTitle()).toMatch("BestBuy.ca | Sample MVC");
    });

    describe('category list nav', function() {
        var link;

        beforeEach(function() {
            link = element(by.css('.nav a:nth-child(2)'));
        });

        it('should list all product categories', function() {
            var elems = element.all(by.repeater('category in departments'));
            expect(elems.count()).toBe(18);
        });

        it('should add the active class to current category when clicking', function() {
            link.click();
            expect(link.getAttribute('class')).toMatch(/active/);
        })

    })

    describe('product listing', function() {


        it('should display first page of products', function() {
            var elems = element.all(by.repeater('product in products'));
            expect(elems.count()).toBe(32);
        });

        describe('product info', function() {

            var product;

            beforeEach(function() {
                product = element.all(by.css('.productbox')).get(0);
                product.click();
            });

            it('should show modal window when a product is clicked', function() {
                expect(ptor.isElementPresent(by.css('.modal-header'))).toBe(true);
            })

            it('should display product name', function() {
                expect(ptor.isElementPresent(by.css('.modal-title'))).toBe(true);
            })

            it('should display product image', function() {
                expect(ptor.isElementPresent(by.css('.product-image'))).toBe(true);
            })

            it('should display short description', function() {
                expect(ptor.isElementPresent(by.css('.product-short-description'))).toBe(true);
            })


        })
    })
});