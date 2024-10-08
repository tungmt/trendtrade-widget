"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDateTime = convertDateTime;
exports.convertDateTimeFromNow = convertDateTimeFromNow;
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function convertDateTime(timestamp) {
  var seconds = timestamp._seconds;
  var date = new Date(seconds * 1000);
  return (0, _dayjs["default"])(date).format('YYYY-MM-DD HH:mm:ss');
}
function convertDateTimeFromNow(timestamp) {
  var seconds = timestamp._seconds;
  var date = new Date(seconds * 1000);
  return (0, _dayjs["default"])(date).fromNow();
}