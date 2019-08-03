"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _es = require("./dist/es5");

Object.keys(_es).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _es[key];
    }
  });
});