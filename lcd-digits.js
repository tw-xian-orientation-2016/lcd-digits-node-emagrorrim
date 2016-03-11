function splitNumber(number) {
  return number.split('');
}

function convertToLCD(digits, lcdNumbers) {
  var lcdShownNumbers = [];
  digits.forEach(function(digit) {
    var lcdNumber = lcdNumbers[parseInt(digit)];
    lcdShownNumbers.push(lcdNumber);
  });
  return lcdShownNumbers;
}

function splitInLine(lcdShownNumbers) {
  var firstLineStrings = [];
  var secondLineStrings = [];
  var thirdLineStrings = [];
  lcdShownNumbers.forEach(function(lcdShownNumber) {
     firstLineStrings.push(lcdShownNumber.substr(0, 3));
     secondLineStrings.push(lcdShownNumber.substr(3, 3));
     thirdLineStrings.push(lcdShownNumber.substr(6, 3));
  });
  return [firstLineStrings, secondLineStrings, thirdLineStrings];
}

function join(lineStrings) {
  var stringLines = [];
  lineStrings.forEach(function(lineStringArr) {
    var stringLine = '';
    for (var i = 0; i < lineStringArr.length; i++) {
      var tailStr =  (i === lineStringArr.length - 1) ? '\n': ' ';
      stringLine += (lineStringArr[i] + tailStr);
    }
    stringLines.push(stringLine);
  });
  return stringLines;
}

function show(stringLines) {
  var lcdNumberStr = '';
  stringLines.forEach(function(stringLine) {
    lcdNumberStr += stringLine;
  });
  console.log(lcdNumberStr);
}

exports.splitNumber = splitNumber;
exports.convertToLCD = convertToLCD;
exports.splitInLine = splitInLine;
exports.join = join;
exports.show = show;
