// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");

function readRows(fileName) {
  return Fs.readFileSync(fileName, "utf8").split("\n").filter((function (line) {
                return line !== "";
              }));
}

exports.readRows = readRows;
/* fs Not a pure module */
