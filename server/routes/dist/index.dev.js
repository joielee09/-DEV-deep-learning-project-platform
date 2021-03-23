"use strict";

var _express = _interopRequireDefault(require("express"));

var _ssr = _interopRequireDefault(require("./ssr"));

var _utils = require("../../utils");

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("@babel/polyfill");

var app = (0, _express["default"])();
console.log("app rendered");
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(_express["default"]["static"]('public')); // app.use(express.static('bin', { etag: false }));

app.set('view engine', 'ejs');
app.use((0, _cors["default"])());
console.log('app.js render');
app.use('/*', _ssr["default"]); // serverside rendering
// app.use('/*', ssr);

app.listen(_utils.PORT, function () {
  console.log("Hello World listening on port ".concat(_utils.PORT, "!"));
});