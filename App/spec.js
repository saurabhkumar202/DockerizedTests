// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(20000);
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});