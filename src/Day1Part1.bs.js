// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Day1Utils$AdventOfCode2018Reasonml = require("./Day1Utils.bs.js");

var frequencyChanges = Day1Utils$AdventOfCode2018Reasonml.parseInputFile("inputs/Day1Part2.txt");

var resultingFrequency = frequencyChanges.reduce((function (a, b) {
        return a + b | 0;
      }), 0);

console.log(resultingFrequency);

exports.frequencyChanges = frequencyChanges;
exports.resultingFrequency = resultingFrequency;
/* frequencyChanges Not a pure module */
