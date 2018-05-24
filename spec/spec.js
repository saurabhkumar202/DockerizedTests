// spec.js
describe('Protractor Demo App', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://hello:8000');
        browser.manage().window().maximize();
    });
    it('should have a title', function () {
        expect(browser.element(by.css('a > span')).getText()).toBe('APP');
        expect(browser.getTitle()).toEqual('App Starter HTML CSS Website Template');
    });
    it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });
    it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });
    it('Verify app screenshots',function(){
        element(by.css('#screenshot-carousel')).getLocation().then(function(location){
            var y=location.y;
            browser.executeScript('window.scrollTo(0,arguments[0]);',y).then(function(){
                //browser.sleep(10000);
        });
            element.all(by.css('#screenshot-carousel > div.owl-wrapper-outer > div  > div')).count().then(function(count){
                //console.log('Count is'+count);
                expect(count).toBe(8);
            });

              /*  element.all(by.css('#screenshot-carousel > div.owl-wrapper-outer > div  > div')).each(function(elem){
                   elem.click();
                });*/
            });

    });
    it('Verify count of pricing plans',function(){
        element(by.css('.pricing-plan')).getLocation().then(function(location){
            var y=location.y;

            browser.executeScript('window.scrollTo(0,arguments[0]);',y).then(function(){
                expect(element.all(by.css('.pricing-plan')).count()).toBe(3);
            });
        });
    });

    it('should have a title', function () {
        expect(browser.element(by.css('a > span')).getText()).toBe('APP');
        expect(browser.getTitle()).toEqual('App Starter HTML CSS Website Template');
    });
    it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });
    it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });it('There should be 2 team members images', function () {
        expect(browser.element.all(by.css('#about > div > div > div img')).count()).toBe(2);
    });
    it('Verify app screenshots',function(){
        element(by.css('#screenshot-carousel')).getLocation().then(function(location){
            var y=location.y;
            browser.executeScript('window.scrollTo(0,arguments[0]);',y).then(function(){
                //browser.sleep(10000);
            });
            element.all(by.css('#screenshot-carousel > div.owl-wrapper-outer > div  > div')).count().then(function(count){
                //console.log('Count is'+count);
                expect(count).toBe(8);
            });

            /*  element.all(by.css('#screenshot-carousel > div.owl-wrapper-outer > div  > div')).each(function(elem){
                 elem.click();
              });*/
        });

    });
    it('Verify count of pricing plans',function(){
        element(by.css('.pricing-plan')).getLocation().then(function(location){
            var y=location.y;
            browser.executeScript('window.scrollTo(0,arguments[0]);',y).then(function(){
                expect(element.all(by.css('.pricing-plan')).count()).toBe(3);
            });
        });


    });

});