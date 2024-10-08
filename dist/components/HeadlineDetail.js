"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../styles/HeadlineDetail.css");
var _convertTime = require("../utils/convertTime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import { fetchTrendDetail } from '../services/api';
var HeadlineDetail = function HeadlineDetail(_ref) {
  var trend = _ref.trend,
    goBack = _ref.goBack,
    apiUrl = _ref.apiUrl,
    apiKey = _ref.apiKey;
  var _useState = (0, _react.useState)(trend),
    _useState2 = _slicedToArray(_useState, 2),
    trendDetail = _useState2[0],
    setTrendDetail = _useState2[1];
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchTrendDetail(apiUrl, apiKey, trend.id);
  //     console.log({result})
  //     if(result && result.symbol) {
  //       setTrendDetail(result);
  //     }

  //     setLoading(false);
  //   };

  //   fetchData();
  // }, [apiUrl, apiKey, trend]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "headline-detail"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "back-button",
    onClick: goBack
  }, "\u2190 Back"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "headline-summary"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, trendDetail.title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "headline-meta"
  }, /*#__PURE__*/_react["default"].createElement("span", null, trendDetail.symbol), /*#__PURE__*/_react["default"].createElement("span", null, (0, _convertTime.convertDateTimeFromNow)(trendDetail.createdAt)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "company-details"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "company-info"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, trendDetail.company), /*#__PURE__*/_react["default"].createElement("span", {
    className: "trend-badge ".concat(trendDetail.impact ? trendDetail.impact.toLowerCase() : 'positive', "-bg")
  }, trendDetail.impact)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "company-price"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Current price: ", /*#__PURE__*/_react["default"].createElement("strong", null, "$", trendDetail.currentPrice)), /*#__PURE__*/_react["default"].createElement("p", null, "Current trend: ", /*#__PURE__*/_react["default"].createElement("strong", {
    className: trendDetail.impact && parseFloat(trendDetail.currentTrend) > 0 ? 'positive-text' : 'negative-text'
  }, "".concat(trendDetail.currentTrend, "%"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ai-prediction"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "\u2B50 AI Prediction"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, trendDetail.company, " $", trendDetail.symbol)), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Impact: "), trendDetail.impact), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Why: "), trendDetail.why)));
};
var _default = exports["default"] = HeadlineDetail;