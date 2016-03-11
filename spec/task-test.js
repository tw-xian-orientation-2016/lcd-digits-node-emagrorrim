var lcd = require('../lcd-digits');
var fixtures = require('./fixtures');

describe('splitNumber()', function() {
  var input;

  beforeEach(function() {
    input = '910';
  });

  it('should split number into digits', function() {

    var output = lcd.splitNumber(input);

    var expectResult = ['9', '1', '0'];

    expect(output).toEqual(expectResult);
  });
});

describe('convertToLCD()', function() {
  var input;
  var lcdNumbers;

  beforeEach(function() {
    input = ['9', '1', '0'];
    lcdNumbers = fixtures.loadLCDNumbers();
  });

  it('should convert str number to lcd number', function() {

    var output = lcd.convertToLCD(input, lcdNumbers);

    var expectResult = ['._.|_|..|', '.....|..|', '._.|.||_|'];

    expect(output).toEqual(expectResult);
  });
});

describe('splitInLine()', function() {
  var input;

  beforeEach(function() {
    input = ['._.|_|..|', '.....|..|', '._.|.||_|'];
  });

  it('should split lcd number in line', function() {

    var output = lcd.splitInLine(input);

    var expectResult = [
      ['._.', '...', '._.'],
      ['|_|', '..|', '|.|'],
      ['..|', '..|', '|_|']
    ];

    expect(output).toEqual(expectResult);
  });
});

describe('join()', function() {
  var input;

  beforeEach(function() {
    input = [
      ['._.', '...', '._.'],
      ['|_|', '..|', '|.|'],
      ['..|', '..|', '|_|']
    ];
  });

  it('should join lcd number in line', function() {

    var output = lcd.join(input);

    var expectResult = [
      '._. ... ._.\n',
      '|_| ..| |.|\n',
      '..| ..| |_|\n'
    ];

    expect(output).toEqual(expectResult);
  });
});

describe('show()', function() {
  var input;

  beforeEach(function() {
    input = [
      '._. ... ._.\n',
      '|_| ..| |.|\n',
      '..| ..| |_|\n'
    ];
  });

  it('should split lcd number in line', function() {

    spyOn(console, 'log');

    var output = lcd.show(input);

    var expectResult = '._. ... ._.\n'
                      +'|_| ..| |.|\n'
                      +'..| ..| |_|\n';

    expect(console.log).toHaveBeenCalledWith(expectResult);
  });
});
