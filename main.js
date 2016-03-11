'use strict';
let lcd = require('./lcd-digits');
let fixtures = require('./spec/fixtures');

function main(number) {
  let digits = lcd.splitNumber(number);
  let lcdNumbers = fixtures.loadLCDNumbers();
  let lcdShownNumbers = lcd.convertToLCD(digits, lcdNumbers);
  let lineStrings = lcd.splitInLine(lcdShownNumbers);
  let stringLines = lcd.join(lineStrings);
  lcd.show(stringLines);
}

//main(910);

exports.main = main;
