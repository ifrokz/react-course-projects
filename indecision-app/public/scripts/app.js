'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = _react2.default.createElement(
  'p',
  null,
  'xD'
); // Install -> import -> use

_reactDom2.default.render(template, document.getElementById('app'));

console.log(_validator2.default.isEmail('x@x.com'));
