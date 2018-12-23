// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Utils$AdventOfCode2018Reasonml = require("./Utils.bs.js");

var ids = Utils$AdventOfCode2018Reasonml.readRows("inputs/Day2Part1.txt");

function countLetters(id) {
  var counts = { };
  id.split("").forEach((function ($$char) {
          var match = Js_dict.get(counts, $$char);
          var currentCount = match !== undefined ? match : 0;
          counts[$$char] = currentCount + 1 | 0;
          return /* () */0;
        }));
  return counts;
}

function hasExactNumberOfAnyLetter(number, counts) {
  return Js_dict.values(counts).some((function (count) {
                return Caml_obj.caml_equal(count, number);
              }));
}

function hasExactlyTwoOfAnyLetter(param) {
  return hasExactNumberOfAnyLetter(2, param);
}

function hasExactlyThreeOfAnyLetter(param) {
  return hasExactNumberOfAnyLetter(3, param);
}

var idsWithCountedLetters = ids.map(countLetters);

function filterAndCound(fn, arr) {
  return arr.filter(Curry.__1(fn)).length;
}

var numberOfIdsWithExactlyTwoOfAnyLetter = filterAndCound(hasExactlyTwoOfAnyLetter, idsWithCountedLetters);

var numberOfIdsWithExactlyThreeOfAnyLetter = filterAndCound(hasExactlyThreeOfAnyLetter, idsWithCountedLetters);

var checksum = Caml_int32.imul(numberOfIdsWithExactlyTwoOfAnyLetter, numberOfIdsWithExactlyThreeOfAnyLetter);

console.log(checksum);

exports.ids = ids;
exports.countLetters = countLetters;
exports.hasExactNumberOfAnyLetter = hasExactNumberOfAnyLetter;
exports.hasExactlyTwoOfAnyLetter = hasExactlyTwoOfAnyLetter;
exports.hasExactlyThreeOfAnyLetter = hasExactlyThreeOfAnyLetter;
exports.idsWithCountedLetters = idsWithCountedLetters;
exports.filterAndCound = filterAndCound;
exports.numberOfIdsWithExactlyTwoOfAnyLetter = numberOfIdsWithExactlyTwoOfAnyLetter;
exports.numberOfIdsWithExactlyThreeOfAnyLetter = numberOfIdsWithExactlyThreeOfAnyLetter;
exports.checksum = checksum;
/* ids Not a pure module */
