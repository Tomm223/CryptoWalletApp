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

/***/ "./components/wallet/Wallet/index.jsx":
/*!********************************************!*\
  !*** ./components/wallet/Wallet/index.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Balance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Balance */ \"./components/wallet/Balance/index.jsx\");\n/* harmony import */ var _CointWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CointWallet */ \"./components/wallet/CointWallet/index.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ \"./components/wallet/Wallet/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Wallet() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.StoreContext), wallet = ref.wallet, user = ref.user;\n    // обработка особенности mode dev dable start\n    var num = 0;\n    var fetchingWallet = function() {\n        num++;\n        if (num > 1) return;\n        console.log(\"thpp work\");\n        wallet.fetchWallets();\n    };\n    //seting wallet store\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        // check data in cookie\n        var wallet_store = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"wallet_store\");\n        if (wallet_store) {\n            wallet.setWallet(JSON.parse(wallet_store));\n        } else if (!wallet_store) {\n            fetchingWallet() // эта функция для избежания второго вызова при mode dev\n            ;\n        //wallet.fetchWallets()\n        }\n    }, []);\n    //save wallet to cookie\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!wallet.isloading && wallet.totalWallet.total > 0) {\n            var set = lodash__WEBPACK_IMPORTED_MODULE_7___default().debounce(function() {\n                console.log(\"debounce\", wallet.totalWallet.total);\n            //wallet.fetchWallets()\n            }, 500);\n            set();\n        }\n    }, [\n        wallet.totalWallet\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().item),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Balance__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    walletTotal: wallet.totalWallet,\n                    isloading: wallet.isloading,\n                    currancy: user.currency.label\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                lineNumber: 49,\n                columnNumber: 10\n            }, this),\n            wallet.list.length ? wallet.list.map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().item),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CointWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isloading: wallet.isloading,\n                        analytics: item.analytics,\n                        amount: item.amount,\n                        coin: item.coin,\n                        currancy: user.currency.label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 22\n                    }, _this)\n                }, item.id, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 26\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                lineNumber: 69,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n        lineNumber: 48,\n        columnNumber: 7\n    }, this);\n}\n_s(Wallet, \"DyIlO+k3q+9txk3lVs/MKEXDBEU=\");\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(Wallet));\nvar _c, _c1;\n$RefreshReg$(_c, \"Wallet\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ1A7Q0FDSDtHQWhFUWpDLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQWtFZiwrREFBZVIsTUFBQUEseURBQVEsQ0FBQ1EsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2FsbGV0L1dhbGxldC9pbmRleC5qc3g/NGEzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsYW5jZSBmcm9tICcuLi9CYWxhbmNlJ1xyXG5pbXBvcnQgQ29pbldhbGxldCBmcm9tICcuLi9Db2ludFdhbGxldCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU29ja2V0Q29udGV4dCwgU3RvcmVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcGFnZXMvX2FwcCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5mdW5jdGlvbiBXYWxsZXQoKSB7XHJcblxyXG4gICBjb25zdCB7IHdhbGxldCwgdXNlciB9ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpXHJcblxyXG4gICAvLyDQvtCx0YDQsNCx0L7RgtC60LAg0L7RgdC+0LHQtdC90L3QvtGB0YLQuCBtb2RlIGRldiBkYWJsZSBzdGFydFxyXG4gICBsZXQgbnVtID0gMFxyXG4gICBjb25zdCBmZXRjaGluZ1dhbGxldCA9ICgpID0+IHtcclxuICAgICAgbnVtKytcclxuICAgICAgaWYgKG51bSA+IDEpIHJldHVyblxyXG4gICAgICBjb25zb2xlLmxvZygndGhwcCB3b3JrJyk7IHdhbGxldC5mZXRjaFdhbGxldHMoKVxyXG4gICB9XHJcblxyXG4gICAvL3NldGluZyB3YWxsZXQgc3RvcmVcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgLy8gY2hlY2sgZGF0YSBpbiBjb29raWVcclxuICAgICAgY29uc3Qgd2FsbGV0X3N0b3JlID0gY29va2llLmdldCgnd2FsbGV0X3N0b3JlJylcclxuICAgICAgaWYgKHdhbGxldF9zdG9yZSkge1xyXG4gICAgICAgICB3YWxsZXQuc2V0V2FsbGV0KEpTT04ucGFyc2Uod2FsbGV0X3N0b3JlKSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghd2FsbGV0X3N0b3JlKSB7XHJcbiAgICAgICAgIGZldGNoaW5nV2FsbGV0KCkgLy8g0Y3RgtCwINGE0YPQvdC60YbQuNGPINC00LvRjyDQuNC30LHQtdC20LDQvdC40Y8g0LLRgtC+0YDQvtCz0L4g0LLRi9C30L7QstCwINC/0YDQuCBtb2RlIGRldlxyXG4gICAgICAgICAvL3dhbGxldC5mZXRjaFdhbGxldHMoKVxyXG4gICAgICB9XHJcbiAgIH0sIFtdKTtcclxuXHJcbiAgIC8vc2F2ZSB3YWxsZXQgdG8gY29va2llXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghd2FsbGV0LmlzbG9hZGluZyAmJiB3YWxsZXQudG90YWxXYWxsZXQudG90YWwgPiAwKSB7XHJcbiAgICAgICAgIGNvbnN0IHNldCA9IF8uZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVib3VuY2UnLCB3YWxsZXQudG90YWxXYWxsZXQudG90YWwpO1xyXG4gICAgICAgICAgICAvL3dhbGxldC5mZXRjaFdhbGxldHMoKVxyXG4gICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgIHNldCgpXHJcbiAgICAgIH1cclxuICAgfSwgW3dhbGxldC50b3RhbFdhbGxldF0pXHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgPEJhbGFuY2VcclxuICAgICAgICAgICAgICAgd2FsbGV0VG90YWw9e3dhbGxldC50b3RhbFdhbGxldH1cclxuICAgICAgICAgICAgICAgaXNsb2FkaW5nPXt3YWxsZXQuaXNsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICBjdXJyYW5jeT17dXNlci5jdXJyZW5jeS5sYWJlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9saT5cclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB3YWxsZXQubGlzdC5sZW5ndGggP1xyXG4gICAgICAgICAgICAgICB3YWxsZXQubGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgPENvaW5XYWxsZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNsb2FkaW5nPXt3YWxsZXQuaXNsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXRpY3M9e2l0ZW0uYW5hbHl0aWNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2luPXtpdGVtLmNvaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJhbmN5PXt1c2VyLmN1cnJlbmN5LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICA6IDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgPC91bD5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihXYWxsZXQpIl0sIm5hbWVzIjpbIkJhbGFuY2UiLCJDb2luV2FsbGV0Iiwic3R5bGVzIiwib2JzZXJ2ZXIiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJTb2NrZXRDb250ZXh0IiwiU3RvcmVDb250ZXh0IiwidXNlRWZmZWN0IiwiY29va2llIiwiXyIsIldhbGxldCIsIndhbGxldCIsInVzZXIiLCJudW0iLCJmZXRjaGluZ1dhbGxldCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFdhbGxldHMiLCJ3YWxsZXRfc3RvcmUiLCJnZXQiLCJzZXRXYWxsZXQiLCJKU09OIiwicGFyc2UiLCJpc2xvYWRpbmciLCJ0b3RhbFdhbGxldCIsInRvdGFsIiwic2V0IiwiZGVib3VuY2UiLCJ1bCIsImNsYXNzTmFtZSIsImxpc3QiLCJsaSIsIml0ZW0iLCJ3YWxsZXRUb3RhbCIsImN1cnJhbmN5IiwiY3VycmVuY3kiLCJsYWJlbCIsImxlbmd0aCIsIm1hcCIsImFuYWx5dGljcyIsImFtb3VudCIsImNvaW4iLCJpZCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/wallet/Wallet/index.jsx\n"));

/***/ })

});