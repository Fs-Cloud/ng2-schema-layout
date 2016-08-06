describe('Schema Layout', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should have <sb-dynamic-grid>', function () {
    var directive = element(by.css('sb-dynamic-grid'));
    expect(directive.isPresent()).toEqual(true);
  });
});
