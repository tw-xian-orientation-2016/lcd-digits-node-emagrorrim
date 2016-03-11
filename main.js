var lcd = require('./lcd-digits');
var fixtures = require('./spec/fixtures');

function main(number) {
  var digits = lcd.splitNumber(number);
  var lcdNumbers = fixtures.loadLCDNumbers();
  var lcdShownNumbers = lcd.convertToLCD(digits, lcdNumbers);
  var lineStrings = lcd.splitInLine(lcdShownNumbers);
  var stringLines = lcd.join(lineStrings);
  lcd.show(stringLines);
}

//main(910);

exports.main = main;
