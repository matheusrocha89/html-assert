var present= function(selector) {
  assert.lengthOf(document.querySelector(selector), 1, selector + ' was not found on page');
};

var notPresent = function(selector) {
  assert.lengthOf(document.querySelector(selector), 0, selector + ' was found on page');
};

var lengthEqual = function(selector, length) {
  var elementsLength = document.querySelectorAll(selector).length;
  assert.lengthOf(elementsLength, length, selector + ' legnth is ' + elementsLength + ' and not ' + length);
};
