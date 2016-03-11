var main = require('../main');

describe('lcd-digits-main', function() {

  it('should show lcd-number', function() {

    spyOn(console, 'log');

    var number = 124;

    main.main(number);

    var expectNumber = '... ._. ...\n..| ._| |_|\n..| |_. ..|\n';

    expect(console.log).toHaveBeenCalledWith(expectNumber);
  });
});
