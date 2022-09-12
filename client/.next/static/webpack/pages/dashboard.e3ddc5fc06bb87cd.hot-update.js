"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/Markets/index.jsx":
/*!**************************************!*\
  !*** ./components/Markets/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Markets; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_BlockList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/BlockList */ \"./components/UI/BlockList/index.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ \"./components/Markets/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _UI_BlockList_Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/BlockList/Items */ \"./components/UI/BlockList/Items.jsx\");\n/* harmony import */ var _UI_BlockList_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/BlockList/UI */ \"./components/UI/BlockList/UI/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_js_num__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils.js/num */ \"./utils.js/num.js\");\n\n\n\n\n\n\n\nfunction Markets(param) {\n    var list = param.list, currency = param.currency;\n    var _this = this;\n    var user = {\n        currency: {\n            id: \"usd\",\n            symbol: \"USD\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BlockList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            label: \"Markets\",\n            link: \"#\",\n            children: list.map(function(item) {\n                console.log(item);\n                var perc24h = (0,_utils_js_num__WEBPACK_IMPORTED_MODULE_5__.fixedNum)(item.price_change_percentage_24h_in_currency);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BlockList_Items__WEBPACK_IMPORTED_MODULE_2__.ItemMarkets, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().Upper),\n                            children: [\n                                item.symbol,\n                                currency\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 22\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().coin),\n                            children: item.label\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 22\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().price),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BlockList_UI__WEBPACK_IMPORTED_MODULE_3__.Total, {\n                                amount: item.current_price,\n                                currancy: currency\n                            }, void 0, false, {\n                                fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 22\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BlockList_UI__WEBPACK_IMPORTED_MODULE_3__.Percent, {\n                            children: perc24h\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, item.id, true, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 19\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n            lineNumber: 18,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, this);\n};\n_c = Markets;\nvar _c;\n$RefreshReg$(_c, \"Markets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcmtldHMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDQztBQUNtQjtBQUNSO0FBQ2pCO0FBQ1c7QUFDOUIsU0FBU1EsT0FBTyxDQUFDLEtBQWtCLEVBQUU7UUFBbEJDLElBQUksR0FBTixLQUFrQixDQUFoQkEsSUFBSSxFQUFFQyxRQUFRLEdBQWhCLEtBQWtCLENBQVZBLFFBQVE7O0lBRTdDLElBQU1DLElBQUksR0FBRztRQUNWRCxRQUFRLEVBQUU7WUFDUEUsRUFBRSxFQUFFLEtBQUs7WUFDVEMsTUFBTSxFQUFFLEtBQUs7U0FDZjtLQUNIO0lBRUQscUJBQ0csOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFZCxxRUFBZ0I7a0JBQzdCLDRFQUFDRCxxREFBUztZQUFDaUIsS0FBSyxFQUFFLFNBQVM7WUFBRUMsSUFBSSxFQUFFLEdBQUc7c0JBQ2xDVCxJQUFJLENBQUNVLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSSxFQUFJO2dCQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLElBQUlHLE9BQU8sR0FBR2hCLHVEQUFRLENBQUNhLElBQUksQ0FBQ0ksdUNBQXVDLENBQUM7Z0JBQ3BFLHFCQUNHLDhEQUFDckIsNERBQUk7O3NDQUNGLDhEQUFDc0IsR0FBQzs0QkFBQ1YsU0FBUyxFQUFFZCxpRUFBWTs7Z0NBQUdtQixJQUFJLENBQUNQLE1BQU07Z0NBQUVILFFBQVE7Ozs7OztpQ0FBSztzQ0FDdkQsOERBQUNlLEdBQUM7NEJBQUNWLFNBQVMsRUFBRWQsZ0VBQVc7c0NBQUdtQixJQUFJLENBQUNILEtBQUs7Ozs7O2lDQUFLO3NDQUMzQyw4REFBQ0gsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFZCxpRUFBWTtzQ0FDekIsNEVBQUNJLG1EQUFLO2dDQUFDd0IsTUFBTSxFQUFFVCxJQUFJLENBQUNVLGFBQWE7Z0NBQUVDLFFBQVEsRUFBRXJCLFFBQVE7Ozs7O3FDQUFJOzs7OztpQ0FDdEQ7c0NBQ04sOERBQUNOLHFEQUFPO3NDQUNKbUIsT0FBTzs7Ozs7aUNBQ0Q7O21CQVJGSCxJQUFJLENBQUNSLEVBQUU7Ozs7eUJBU1gsQ0FDVDthQUNILENBQUM7Ozs7O2dCQUNPOzs7OztZQUNULENBQ1I7Q0FDSDtBQS9CdUJKLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXJrZXRzL2luZGV4LmpzeD9jNzE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9ja0xpc3QgZnJvbSAnLi4vVUkvQmxvY2tMaXN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEl0ZW1NYXJrZXRzIGFzIEl0ZW0gfSBmcm9tICcuLi9VSS9CbG9ja0xpc3QvSXRlbXMnXHJcbmltcG9ydCB7IFBlcmNlbnQsIFRvdGFsIH0gZnJvbSAnLi4vVUkvQmxvY2tMaXN0L1VJJ1xyXG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGZpeGVkTnVtIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMvbnVtJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZXRzKHsgbGlzdCwgY3VycmVuY3kgfSkge1xyXG5cclxuICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgY3VycmVuY3k6IHtcclxuICAgICAgICAgaWQ6ICd1c2QnLFxyXG4gICAgICAgICBzeW1ib2w6ICdVU0QnXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICA8QmxvY2tMaXN0IGxhYmVsPXsnTWFya2V0cyd9IGxpbms9eycjJ30+XHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgICAgIGxldCBwZXJjMjRoID0gZml4ZWROdW0oaXRlbS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kpXHJcbiAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxJdGVtIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLlVwcGVyfT57aXRlbS5zeW1ib2x9e2N1cnJlbmN5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29pbn0+e2l0ZW0ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvdGFsIGFtb3VudD17aXRlbS5jdXJyZW50X3ByaWNlfSBjdXJyYW5jeT17Y3VycmVuY3l9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8UGVyY2VudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BlcmMyNGh9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvUGVyY2VudD5cclxuICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICA8L0Jsb2NrTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufSJdLCJuYW1lcyI6WyJCbG9ja0xpc3QiLCJzdHlsZXMiLCJJdGVtTWFya2V0cyIsIkl0ZW0iLCJQZXJjZW50IiwiVG90YWwiLCJ1c2VSZWR1Y2VyIiwiZml4ZWROdW0iLCJNYXJrZXRzIiwibGlzdCIsImN1cnJlbmN5IiwidXNlciIsImlkIiwic3ltYm9sIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibGFiZWwiLCJsaW5rIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwZXJjMjRoIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5IiwicCIsIlVwcGVyIiwiY29pbiIsInByaWNlIiwiYW1vdW50IiwiY3VycmVudF9wcmljZSIsImN1cnJhbmN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Markets/index.jsx\n"));

/***/ })

});