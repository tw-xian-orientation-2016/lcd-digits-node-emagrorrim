'use strict';
let lcd = require('../lcd-digits');
let fixtures = require('./fixtures');

describe('splitNumber()', () => {
  let input;

  beforeEach(() => {
    input = '910';
  });

  it('should split number into digits', () => {

    let output = lcd.splitNumber(input);

    let expectResult = ['9', '1', '0'];

    expect(output).toEqual(expectResult);
  });
});

describe('convertToLCD()', () => {
  let input;
  let lcdNumbers;

  beforeEach(() => {
    input = ['9', '1', '0'];
    lcdNumbers = fixtures.loadLCDNumbers();
  });

  it('should convert str number to lcd number', () => {

    let output = lcd.convertToLCD(input, lcdNumbers);

    let expectResult = ['._.|_|..|', '.....|..|', '._.|.||_|'];

    expect(output).toEqual(expectResult);
  });
});

describe('splitInLine()', () => {
  let input;

  beforeEach(() => {
    input = ['._.|_|..|', '.....|..|', '._.|.||_|'];
  });

  it('should split lcd number in line', () => {

    let output = lcd.splitInLine(input);

    let expectResult = [
      ['._.', '...', '._.'],
      ['|_|', '..|', '|.|'],
      ['..|', '..|', '|_|']
    ];

    expect(output).toEqual(expectResult);
  });
});

describe('join()', () => {
  let input;

  beforeEach(() => {
    input = [
      ['._.', '...', '._.'],
      ['|_|', '..|', '|.|'],
      ['..|', '..|', '|_|']
    ];
  });

  it('should join lcd number in line', () => {

    let output = lcd.join(input);

    let expectResult = [
      '._. ... ._.\n',
      '|_| ..| |.|\n',
      '..| ..| |_|\n'
    ];

    expect(output).toEqual(expectResult);
  });
});

describe('show()', () => {
  let input;

  beforeEach(() => {
    input = [
      '._. ... ._.\n',
      '|_| ..| |.|\n',
      '..| ..| |_|\n'
    ];
  });

  it('should split lcd number in line', () => {

    spyOn(console, 'log');

    let output = lcd.show(input);

    let expectResult = '._. ... ._.\n'
                      +'|_| ..| |.|\n'
                      +'..| ..| |_|\n';

    expect(console.log).toHaveBeenCalledWith(expectResult);
  });
});
