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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Markets; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_BlockList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/BlockList */ \"./components/UI/BlockList/index.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./components/Markets/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _UI_BlockList_Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/BlockList/Items */ \"./components/UI/BlockList/Items.jsx\");\n/* harmony import */ var _UI_BlockList_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/BlockList/UI */ \"./components/UI/BlockList/UI/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Markets(param) {\n    var list = param.list, currency = param.currency;\n    var _this = this;\n    var user = {\n        currency: {\n            id: \"usd\",\n            symbol: \"USD\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BlockList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            label: \"Markets\",\n            link: \"#\",\n            children: list.map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BlockList_Items__WEBPACK_IMPORTED_MODULE_2__.ItemMarkets, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Upper),\n                            children: [\n                                item.coin.symbol,\n                                currency\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 22\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().coin),\n                            children: item.coin.label\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 22\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().price),\n                            children: [\n                                item.price.amount,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: item.price.currency\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 22\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BlockList_UI__WEBPACK_IMPORTED_MODULE_3__.Percent, {\n                            children: item.percent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 22\n                        }, _this)\n                    ]\n                }, item.id, true, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 19\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n            lineNumber: 17,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\Markets\\\\index.jsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, this);\n};\n_c = Markets;\nvar _c;\n$RefreshReg$(_c, \"Markets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcmtldHMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNDO0FBQ21CO0FBQ2Y7QUFDVjtBQUNuQixTQUFTTSxPQUFPLENBQUMsS0FBa0IsRUFBRTtRQUFsQkMsSUFBSSxHQUFOLEtBQWtCLENBQWhCQSxJQUFJLEVBQUVDLFFBQVEsR0FBaEIsS0FBa0IsQ0FBVkEsUUFBUTs7SUFFN0MsSUFBTUMsSUFBSSxHQUFHO1FBQ1ZELFFBQVEsRUFBRTtZQUNQRSxFQUFFLEVBQUUsS0FBSztZQUNUQyxNQUFNLEVBQUUsS0FBSztTQUNmO0tBQ0g7SUFFRCxxQkFDRyw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVaLHFFQUFnQjtrQkFDN0IsNEVBQUNELHFEQUFTO1lBQUNlLEtBQUssRUFBRSxTQUFTO1lBQUVDLElBQUksRUFBRSxHQUFHO3NCQUNsQ1QsSUFBSSxDQUFDVSxHQUFHLENBQUNDLFNBQUFBLElBQUksRUFBSTtnQkFDZixxQkFDRyw4REFBQ2YsNERBQUk7O3NDQUNGLDhEQUFDZ0IsR0FBQzs0QkFBQ04sU0FBUyxFQUFFWixpRUFBWTs7Z0NBQUdpQixJQUFJLENBQUNHLElBQUksQ0FBQ1YsTUFBTTtnQ0FBRUgsUUFBUTs7Ozs7O2lDQUFLO3NDQUM1RCw4REFBQ1csR0FBQzs0QkFBQ04sU0FBUyxFQUFFWixnRUFBVztzQ0FBR2lCLElBQUksQ0FBQ0csSUFBSSxDQUFDTixLQUFLOzs7OztpQ0FBSztzQ0FDaEQsOERBQUNJLEdBQUM7NEJBQUNOLFNBQVMsRUFBRVosaUVBQVk7O2dDQUN0QmlCLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxNQUFNOzhDQUNsQiw4REFBQ0MsTUFBSTs4Q0FBRU4sSUFBSSxDQUFDSSxLQUFLLENBQUNkLFFBQVE7Ozs7O3lDQUFROzs7Ozs7aUNBQ2pDO3NDQUNKLDhEQUFDSixxREFBTztzQ0FDSmMsSUFBSSxDQUFDTyxPQUFPOzs7OztpQ0FDTjs7bUJBVEZQLElBQUksQ0FBQ1IsRUFBRTs7Ozt5QkFVWCxDQUNUO2FBQ0gsQ0FBQzs7Ozs7Z0JBQ087Ozs7O1lBQ1QsQ0FDUjtDQUNIO0FBOUJ1QkosS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcmtldHMvaW5kZXguanN4P2M3MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrTGlzdCBmcm9tICcuLi9VSS9CbG9ja0xpc3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgSXRlbU1hcmtldHMgYXMgSXRlbSB9IGZyb20gJy4uL1VJL0Jsb2NrTGlzdC9JdGVtcydcclxuaW1wb3J0IHsgUGVyY2VudCB9IGZyb20gJy4uL1VJL0Jsb2NrTGlzdC9VSSdcclxuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZXRzKHsgbGlzdCwgY3VycmVuY3kgfSkge1xyXG5cclxuICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgY3VycmVuY3k6IHtcclxuICAgICAgICAgaWQ6ICd1c2QnLFxyXG4gICAgICAgICBzeW1ib2w6ICdVU0QnXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICA8QmxvY2tMaXN0IGxhYmVsPXsnTWFya2V0cyd9IGxpbms9eycjJ30+XHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuVXBwZXJ9PntpdGVtLmNvaW4uc3ltYm9sfXtjdXJyZW5jeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvaW59PntpdGVtLmNvaW4ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ucHJpY2UuY3VycmVuY3l9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICA8L1BlcmNlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgPC9CbG9ja0xpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn0iXSwibmFtZXMiOlsiQmxvY2tMaXN0Iiwic3R5bGVzIiwiSXRlbU1hcmtldHMiLCJJdGVtIiwiUGVyY2VudCIsInVzZVJlZHVjZXIiLCJNYXJrZXRzIiwibGlzdCIsImN1cnJlbmN5IiwidXNlciIsImlkIiwic3ltYm9sIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibGFiZWwiLCJsaW5rIiwibWFwIiwiaXRlbSIsInAiLCJVcHBlciIsImNvaW4iLCJwcmljZSIsImFtb3VudCIsInNwYW4iLCJwZXJjZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Markets/index.jsx\n"));

/***/ }),

/***/ "./pages/dashboard/index.jsx":
/*!***********************************!*\
  !*** ./pages/dashboard/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ChartBig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ChartBig */ \"./components/ChartBig/index.jsx\");\n/* harmony import */ var _components_MainLayuot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainLayuot */ \"./components/MainLayuot.jsx\");\n/* harmony import */ var _components_wallet_Wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wallet/Wallet */ \"./components/wallet/Wallet/index.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/dashboard/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_Markets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Markets */ \"./components/Markets/index.jsx\");\n/* harmony import */ var _components_Convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Convert */ \"./components/Convert/index.jsx\");\n/* harmony import */ var _components_History__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/History */ \"./components/History/index.jsx\");\n/* harmony import */ var _components_Assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Assets */ \"./components/Assets/index.jsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_app */ \"./pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_app__WEBPACK_IMPORTED_MODULE_10__.StoreContext), history = ref.history, user = ref.user, _$dashboard = ref.dashboard;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_app__WEBPACK_IMPORTED_MODULE_10__.SocketContext), socket = ref1.socket, socketConnected = ref1.socketConnected;\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function() {\n        if (history.list.length) return;\n        history.fetch();\n    }, [\n        history.list\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function() {\n        if (!socket || !socketConnected) return;\n        socket.emit(\"market\", {\n            page: _$dashboard.market._page,\n            limit: _$dashboard.market._limit,\n            currency: user.currency.value\n        });\n    }, [\n        socketConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainLayuot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\".concat((_index_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main), \" main\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_12___default().wallet),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wallet_Wallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_12___default().chart),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChartBig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_12___default().markets),\n                    children: _$dashboard.market.list ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Markets__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        list: _$dashboard.market.list,\n                        currency: user.currency.label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 19\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: \"LOADING...\"\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_12___default().chart_cyrcle),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Assets__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_12___default().convert),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Convert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_12___default().history),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_History__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        history: history.list\n                    }, void 0, false, {\n                        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n            lineNumber: 33,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\pages\\\\dashboard\\\\index.jsx\",\n        lineNumber: 32,\n        columnNumber: 7\n    }, this);\n}\n_s(dashboard, \"wK28uwq219lFAy3ObD2SfFgMR3w=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__.observer)(dashboard));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b2FyZC9pbmRleC5qc3g/ZTE0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRCaWcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DaGFydEJpZyc7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbkxheXVvdCc7XHJcbmltcG9ydCBXYWxsZXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93YWxsZXQvV2FsbGV0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IE1hcmtldHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYXJrZXRzJ1xyXG5pbXBvcnQgQ29udmVydCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnZlcnQnXHJcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGlzdG9yeSdcclxuaW1wb3J0IEFzc2V0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Fzc2V0cydcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU29ja2V0Q29udGV4dCwgU3RvcmVDb250ZXh0IH0gZnJvbSAnLi4vX2FwcCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5mdW5jdGlvbiBkYXNoYm9hcmQoKSB7XHJcbiAgIGNvbnN0IHsgaGlzdG9yeSwgdXNlciwgZGFzaGJvYXJkIH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dClcclxuICAgY29uc3QgeyBzb2NrZXQsIHNvY2tldENvbm5lY3RlZCB9ID0gdXNlQ29udGV4dChTb2NrZXRDb250ZXh0KVxyXG5cclxuICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGhpc3RvcnkubGlzdC5sZW5ndGgpIHJldHVyblxyXG4gICAgICBoaXN0b3J5LmZldGNoKClcclxuICAgfSwgW2hpc3RvcnkubGlzdF0pO1xyXG5cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFzb2NrZXQgfHwgIXNvY2tldENvbm5lY3RlZCkgcmV0dXJuO1xyXG4gICAgICBzb2NrZXQuZW1pdCgnbWFya2V0Jywge1xyXG4gICAgICAgICBwYWdlOiBkYXNoYm9hcmQubWFya2V0Ll9wYWdlLFxyXG4gICAgICAgICBsaW1pdDogZGFzaGJvYXJkLm1hcmtldC5fbGltaXQsXHJcbiAgICAgICAgIGN1cnJlbmN5OiB1c2VyLmN1cnJlbmN5LnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgIH0sIFtzb2NrZXRDb25uZWN0ZWRdKTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSBtYWluYH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FsbGV0fT5cclxuICAgICAgICAgICAgICAgPFdhbGxldCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydH0+XHJcbiAgICAgICAgICAgICAgIDxDaGFydEJpZyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZXRzfT5cclxuICAgICAgICAgICAgICAge2Rhc2hib2FyZC5tYXJrZXQubGlzdCA/XHJcbiAgICAgICAgICAgICAgICAgIDxNYXJrZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e2Rhc2hib2FyZC5tYXJrZXQubGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k9e3VzZXIuY3VycmVuY3kubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIC8+IDpcclxuICAgICAgICAgICAgICAgICAgPD5MT0FESU5HLi4uPC8+XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnRfY3lyY2xlfT5cclxuICAgICAgICAgICAgICAgPEFzc2V0cyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb252ZXJ0fT5cclxuICAgICAgICAgICAgICAgPENvbnZlcnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGlzdG9yeX0+XHJcbiAgICAgICAgICAgICAgIDxIaXN0b3J5IGhpc3Rvcnk9e2hpc3RvcnkubGlzdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9NYWluTGF5b3V0PlxyXG5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihkYXNoYm9hcmQpIl0sIm5hbWVzIjpbIkNoYXJ0QmlnIiwiTWFpbkxheW91dCIsIldhbGxldCIsInN0eWxlcyIsIk1hcmtldHMiLCJDb252ZXJ0IiwiSGlzdG9yeSIsIkFzc2V0cyIsIm9ic2VydmVyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlNvY2tldENvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJjb29raWUiLCJkYXNoYm9hcmQiLCJoaXN0b3J5IiwidXNlciIsInNvY2tldCIsInNvY2tldENvbm5lY3RlZCIsImxpc3QiLCJsZW5ndGgiLCJmZXRjaCIsImVtaXQiLCJwYWdlIiwibWFya2V0IiwiX3BhZ2UiLCJsaW1pdCIsIl9saW1pdCIsImN1cnJlbmN5IiwidmFsdWUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwid2FsbGV0IiwiY2hhcnQiLCJtYXJrZXRzIiwibGFiZWwiLCJjaGFydF9jeXJjbGUiLCJjb252ZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/index.jsx\n"));

/***/ })

});