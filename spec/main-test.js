'use strict';
let main = require('../main');

describe('lcd-digits-main', () => {

  it('should show lcd-number', () => {
    spyOn(console, 'log');

    let number = 124;

    main.main(number);

    let expectNumber = '... ._. ...\n..| ._| |_|\n..| |_. ..|\n';

    expect(console.log).toHaveBeenCalledWith(expectNumber);
  });
});
