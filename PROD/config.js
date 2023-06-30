"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
console.log(process.env.PORT);

//Se nao houver uma porta definida por padrao será a 3000
var _default = {
  port: process.env.PORT || 3000
};
exports["default"] = _default;