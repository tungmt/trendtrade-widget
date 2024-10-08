"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _HeadlineList = _interopRequireDefault(require("./components/HeadlineList"));
var _HeadlineDetail = _interopRequireDefault(require("./components/HeadlineDetail"));
var _TrendsList = _interopRequireDefault(require("./components/TrendsList"));
var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_dayjs["default"].extend(_relativeTime["default"]);
var TrendTrade = function TrendTrade(_ref) {
  var apiUrl = _ref.apiUrl,
    apiKey = _ref.apiKey;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPopupOpen = _useState2[0],
    setIsPopupOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedHeadline = _useState4[0],
    setSelectedHeadline = _useState4[1];
  var openPopup = function openPopup() {
    setIsPopupOpen(true);
  };
  var closePopup = function closePopup() {
    setIsPopupOpen(false);
    setSelectedHeadline(null);
  };
  var selectHeadline = function selectHeadline(headline) {
    setSelectedHeadline(headline);
  };
  var goBack = function goBack() {
    setSelectedHeadline(null);
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TrendsList["default"], {
    openPopup: openPopup,
    apiUrl: apiUrl,
    apiKey: apiKey
  }), isPopupOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "popup-overlay"
  }, !selectedHeadline ? /*#__PURE__*/_react["default"].createElement(_HeadlineList["default"], {
    selectHeadline: selectHeadline,
    closePopup: closePopup,
    apiUrl: apiUrl,
    apiKey: apiKey
  }) : /*#__PURE__*/_react["default"].createElement(_HeadlineDetail["default"], {
    trend: selectedHeadline,
    goBack: goBack,
    apiUrl: apiUrl,
    apiKey: apiKey
  })));
};
var _default = exports["default"] = TrendTrade;