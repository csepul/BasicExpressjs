'use strict';

function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  var d = 0;
  if (b === 0) {
    return new Error("Can't divide by zero");
  } else {
    return a / b;
  }
}

module.exports = {
  add,
  minus,
  multiply,
  divide
}