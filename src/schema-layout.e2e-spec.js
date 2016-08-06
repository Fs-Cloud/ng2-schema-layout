describe('Schema Layout', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should have <sb-schema-layout>', function () {
    var home = element(by.css('sb-schema-layout'));
    expect(home.isPresent()).toEqual(true);
  });
});
