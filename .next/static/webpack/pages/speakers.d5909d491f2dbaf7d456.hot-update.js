webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/contexts/DataContext.js":
/*!*************************************!*\
  !*** ./src/contexts/DataContext.js ***!
  \*************************************/
/*! exports provided: DataContext, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataContext\", function() { return DataContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataProvider\", function() { return DataProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/media/swungleek/7a739554-06f9-4564-a099-49f4b83047ae/CDD/React/ps-drc/src/contexts/DataContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\n\nvar DataProvider = function DataProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var speakers = [{\n    id: 1530,\n    firstName: \"Tamara\",\n    lastName: \"Baker\",\n    sat: false,\n    sun: true,\n    isFavorite: false,\n    bio: \"Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc.\"\n  }, {\n    id: 10803,\n    firstName: \"Eugene\",\n    lastName: \"Chuvyrov\",\n    sat: true,\n    sun: false,\n    isFavorite: true,\n    bio: \"Eugene Chuvyrov is a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.\"\n  }, {\n    id: 1124,\n    firstName: \"Douglas\",\n    lastName: \"Crockford\",\n    sat: true,\n    sun: false,\n    isFavorite: false,\n    bio: \"Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.\"\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    speakers: speakers,\n    status: 'loading'\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var timer = setTimeout(function () {\n      setState({\n        speakers: speakers,\n        status: 'success',\n        error: undefined\n      });\n    }, 1000);\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DataContext.Provider, {\n    value: state,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DataProvider, \"x3bcUamhHrIqcf9+lIWjkCku3rw=\");\n\n_c = DataProvider;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0RhdGFDb250ZXh0LmpzPzU2YmQiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzcGVha2VycyIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzYXQiLCJzdW4iLCJpc0Zhdm9yaXRlIiwiYmlvIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3JDLE1BQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0FDLE1BQUUsRUFBRSxJQURKO0FBRUFDLGFBQVMsRUFBRSxRQUZYO0FBR0FDLFlBQVEsRUFBRSxPQUhWO0FBSUFDLE9BQUcsRUFBRSxLQUpMO0FBS0FDLE9BQUcsRUFBRSxJQUxMO0FBTUFDLGNBQVUsRUFBRSxLQU5aO0FBT0FDLE9BQUcsRUFBRTtBQVBMLEdBRGUsRUFVZjtBQUNBTixNQUFFLEVBQUUsS0FESjtBQUVBQyxhQUFTLEVBQUUsUUFGWDtBQUdBQyxZQUFRLEVBQUUsVUFIVjtBQUlBQyxPQUFHLEVBQUUsSUFKTDtBQUtBQyxPQUFHLEVBQUUsS0FMTDtBQU1BQyxjQUFVLEVBQUUsSUFOWjtBQU9BQyxPQUFHLEVBQUU7QUFQTCxHQVZlLEVBbUJmO0FBQ0FOLE1BQUUsRUFBRSxJQURKO0FBRUFDLGFBQVMsRUFBRSxTQUZYO0FBR0FDLFlBQVEsRUFBRSxXQUhWO0FBSUFDLE9BQUcsRUFBRSxJQUpMO0FBS0FDLE9BQUcsRUFBRSxLQUxMO0FBTUFDLGNBQVUsRUFBRSxLQU5aO0FBT0FDLE9BQUcsRUFBRTtBQVBMLEdBbkJlLENBQWpCOztBQURxQyxrQkErQlRDLHNEQUFRLENBQUU7QUFDbENSLFlBQVEsRUFBQ0EsUUFEeUI7QUFFbENTLFVBQU0sRUFBQztBQUYyQixHQUFGLENBL0JDO0FBQUEsTUErQjVCQyxLQS9CNEI7QUFBQSxNQStCckJDLFFBL0JxQjs7QUFvQ25DQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQzdCSCxjQUFRLENBQUM7QUFDUFgsZ0JBQVEsRUFBQ0EsUUFERjtBQUVQUyxjQUFNLEVBQUMsU0FGQTtBQUdQTSxhQUFLLEVBQUVDO0FBSEEsT0FBRCxDQUFSO0FBS0QsS0FOdUIsRUFNckIsSUFOcUIsQ0FBeEI7QUFPQSxXQUFPO0FBQUEsYUFBTUMsWUFBWSxDQUFDSixLQUFELENBQWxCO0FBQUEsS0FBUDtBQUNELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXRixzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVILEtBQTdCO0FBQUEsY0FDR1g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXBERDs7R0FBTUQsWTs7S0FBQUEsWTtBQXNETiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9EYXRhQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3BlYWtlcnMgPSBbXG4gICAge1xuICAgIGlkOiAxNTMwLFxuICAgIGZpcnN0TmFtZTogXCJUYW1hcmFcIixcbiAgICBsYXN0TmFtZTogXCJCYWtlclwiLFxuICAgIHNhdDogZmFsc2UsXG4gICAgc3VuOiB0cnVlLFxuICAgIGlzRmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzogXCJUYW1teSBoYXMgaGVsZCBhIG51bWJlciBvZiBleGVjdXRpdmUgYW5kIG1hbmFnZW1lbnQgcm9sZXMgb3ZlciB0aGUgcGFzdCAxNSB5ZWFycywgaW5jbHVkaW5nIFZQIGVuZ2luZWVyaW5nIFJvbGVzIGF0IE1vbGVrdWxlIEluYy4sIENhbnRhbG91cGUgU3lzdGVtcywgRS1Db2xvciwgYW5kIFVudGFuZ2xlIEluYy5cIlxuICAgIH0sXG4gICAge1xuICAgIGlkOiAxMDgwMyxcbiAgICBmaXJzdE5hbWU6IFwiRXVnZW5lXCIsXG4gICAgbGFzdE5hbWU6IFwiQ2h1dnlyb3ZcIixcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBpc0Zhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzogXCJFdWdlbmUgQ2h1dnlyb3YgaXMgYSBTZW5pb3IgQ2xvdWQgQXJjaGl0ZWN0IGF0IE1pY3Jvc29mdC4gSGUgd29ya3MgZGlyZWN0bHkgd2l0aCBib3RoIHN0YXJ0dXBzIGFuZCBlbnRlcnByaXNlcyB0byBlbmFibGUgdGhlaXIgc29sdXRpb25zIGluIE1pY3Jvc29mdCBjbG91ZCwgYW5kIHRvIG1ha2UgQXp1cmUgYmV0dGVyIGFzIGEgcmVzdWx0IG9mIHRoaXMgd29yayB3aXRoIHBhcnRuZXJzLlwiXG4gICAgfSxcbiAgICB7XG4gICAgaWQ6IDExMjQsXG4gICAgZmlyc3ROYW1lOiBcIkRvdWdsYXNcIixcbiAgICBsYXN0TmFtZTogXCJDcm9ja2ZvcmRcIixcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86IFwiRG91Z2xhcyBDcm9ja2ZvcmQgZGlzY292ZXJlZCB0aGUgSlNPTiBEYXRhIEludGVyY2hhbmdlIEZvcm1hdC4gSGUgaXMgYWxzbyB0aGUgYXV0aG9yIG9mIF9KYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0c18uIEhlIGhhcyBiZWVuIGNhbGxlZCBhIGd1cnUsIGJ1dCBoZSBpcyBhY3R1YWxseSBtb3JlIG9mIGEgbWFoYXRtYS5cIlxuICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSAoe1xuICAgICAgc3BlYWtlcnM6c3BlYWtlcnMsXG4gICAgICBzdGF0dXM6J2xvYWRpbmcnXG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIHNwZWFrZXJzOnNwZWFrZXJzLFxuICAgICAgICAgIHN0YXR1czonc3VjY2VzcycsXG4gICAgICAgICAgZXJyb3I6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IERhdGFDb250ZXh0LCBEYXRhUHJvdmlkZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/DataContext.js\n");

/***/ })

})