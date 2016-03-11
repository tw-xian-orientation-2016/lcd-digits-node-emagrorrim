'use strict';
function splitNumber(number) {
  number = '' + number;
  return number.split('');
}

function convertToLCD(digits, lcdNumbers) {
  let lcdShownNumbers = [];
  digits.forEach(function(digit) {
    let lcdNumber = lcdNumbers[parseInt(digit)];
    lcdShownNumbers.push(lcdNumber);
  });
  return lcdShownNumbers;
}

function splitInLine(lcdShownNumbers) {
  let firstLineStrings = [];
  let secondLineStrings = [];
  let thirdLineStrings = [];
  lcdShownNumbers.forEach(function(lcdShownNumber) {
     firstLineStrings.push(lcdShownNumber.substr(0, 3));
     secondLineStrings.push(lcdShownNumber.substr(3, 3));
     thirdLineStrings.push(lcdShownNumber.substr(6, 3));
  });
  return [firstLineStrings, secondLineStrings, thirdLineStrings];
}

function join(lineStrings) {
  let stringLines = [];
  lineStrings.forEach(function(lineStringArr) {
    let stringLine = '';
    for (let i = 0; i < lineStringArr.length; i++) {
      let tailStr =  (i === lineStringArr.length - 1) ? '\n': ' ';
      stringLine += (lineStringArr[i] + tailStr);
    }
    stringLines.push(stringLine);
  });
  return stringLines;
}

function show(stringLines) {
  let lcdNumberStr = '';
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
