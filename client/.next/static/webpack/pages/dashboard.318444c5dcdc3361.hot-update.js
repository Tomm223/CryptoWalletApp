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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Balance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Balance */ \"./components/wallet/Balance/index.jsx\");\n/* harmony import */ var _CointWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CointWallet */ \"./components/wallet/CointWallet/index.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ \"./components/wallet/Wallet/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Wallet() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.StoreContext), wallet = ref.wallet, user = ref.user;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.SocketContext), socket = ref1.socket, socketConnected = ref1.socketConnected;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}), totalWallet = ref2[0], setTotalWallet = ref2[1];\n    var num = 0;\n    var fetchingWallet = function() {\n        num++;\n        if (num > 1) return;\n        console.log(\"thpp work\");\n        wallet.fetchWallets();\n    } //.debounce(() => wallet.fetchWallets(), 50000)\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setTotalWallet(wallet.totalWallet);\n        //\n        var wallet_store = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"wallet_store\");\n        if (wallet_store) {\n            wallet.setWallet(wallet_store);\n        } else if (!wallet_store) {\n            fetchingWallet() // эта функция для избежания второго вызова при mode dev\n            ;\n            //wallet.fetchWallets()\n            console.log(\"wrok\");\n        }\n    }, []);\n    console.log(wallet);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setTotalWallet(wallet.totalWallet);\n        if (!wallet.isloading && wallet.totalWallet.total > 0) {\n            js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].set(\"wallet_store\", JSON.stringify({\n                list: wallet.list,\n                totalWalet: wallet.totalWallet,\n                _id: wallet._id,\n                userId: wallet.userId\n            }), {\n                expires: 1 / 24 / 4\n            });\n        }\n    }, [\n        wallet.totalWallet\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        console.log(\"totalWallet\", wallet);\n    }, [\n        wallet.totalWallet\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().item),\n                children: totalWallet.total === 0 || !user.userAnonim ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"LOADIng\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 16\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Balance__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    walletTotal: totalWallet\n                }, void 0, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 37\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                lineNumber: 54,\n                columnNumber: 10\n            }, this),\n            wallet.list.length ? wallet.list.map(function(wallet) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().item),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CointWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        analytics: wallet.analytics,\n                        amount: wallet.amount,\n                        coin: wallet.coin,\n                        currancy: \"USER.CURR\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 22\n                    }, _this)\n                }, wallet.id, false, {\n                    fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 26\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n                lineNumber: 71,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\PROJECT\\\\crypto_wallet_app\\\\client\\\\components\\\\wallet\\\\Wallet\\\\index.jsx\",\n        lineNumber: 53,\n        columnNumber: 7\n    }, this);\n}\n_s(Wallet, \"V1XBB2uLh7+d6iNgVtw27pOHs2k=\");\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(Wallet));\nvar _c, _c1;\n$RefreshReg$(_c, \"Wallet\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLGlCQUN6Qyw4REFBQ0MsS0FBRzs4QkFBQyxTQUFPOzs7Ozt3QkFBTSxpQkFBRyw4REFBQ3pDLGdEQUFPO29CQUFDMEMsV0FBVyxFQUFFMUIsV0FBVzs7Ozs7d0JBQUk7Ozs7O29CQUUzRDtZQUVGSixNQUFNLENBQUNtQixJQUFJLENBQUNZLE1BQU0sR0FDZi9CLE1BQU0sQ0FBQ21CLElBQUksQ0FBQ2EsR0FBRyxDQUFDaEMsU0FBQUEsTUFBTSxFQUFJO2dCQUN2QixxQkFBTyw4REFBQzBCLElBQUU7b0JBQWlCRCxTQUFTLEVBQUVuQyxnRUFBVzs4QkFDOUMsNEVBQUNELG9EQUFVO3dCQUNSNEMsU0FBUyxFQUFFakMsTUFBTSxDQUFDaUMsU0FBUzt3QkFDM0JDLE1BQU0sRUFBRWxDLE1BQU0sQ0FBQ2tDLE1BQU07d0JBQ3JCQyxJQUFJLEVBQUVuQyxNQUFNLENBQUNtQyxJQUFJO3dCQUNqQkMsUUFBUSxFQUFFLFdBQVc7Ozs7OzZCQUN0QjttQkFOV3BDLE1BQU0sQ0FBQ3FDLEVBQUU7Ozs7eUJBT3BCO2FBQ1AsQ0FBQyxpQkFDQSw4REFBQ1IsS0FBRzswQkFBQyxZQUFVOzs7OztvQkFBTTs7Ozs7O1lBSTNCLENBQ1A7Q0FDSDtHQWxFUTlCLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQW9FZiwrREFBZVIsTUFBQUEseURBQVEsQ0FBQ1EsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2FsbGV0L1dhbGxldC9pbmRleC5qc3g/NGEzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsYW5jZSBmcm9tICcuLi9CYWxhbmNlJ1xyXG5pbXBvcnQgQ29pbldhbGxldCBmcm9tICcuLi9Db2ludFdhbGxldCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU29ja2V0Q29udGV4dCwgU3RvcmVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcGFnZXMvX2FwcCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5mdW5jdGlvbiBXYWxsZXQoKSB7XHJcblxyXG4gICBjb25zdCB7IHdhbGxldCwgdXNlciB9ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpXHJcbiAgIGNvbnN0IHsgc29ja2V0LCBzb2NrZXRDb25uZWN0ZWQgfSA9IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dClcclxuICAgY29uc3QgW3RvdGFsV2FsbGV0LCBzZXRUb3RhbFdhbGxldF0gPSB1c2VTdGF0ZSh7fSlcclxuICAgbGV0IG51bSA9IDBcclxuICAgY29uc3QgZmV0Y2hpbmdXYWxsZXQgPSAoKSA9PiB7XHJcbiAgICAgIG51bSsrXHJcbiAgICAgIGlmIChudW0gPiAxKSByZXR1cm5cclxuICAgICAgY29uc29sZS5sb2coJ3RocHAgd29yaycpOyB3YWxsZXQuZmV0Y2hXYWxsZXRzKClcclxuICAgfS8vLmRlYm91bmNlKCgpID0+IHdhbGxldC5mZXRjaFdhbGxldHMoKSwgNTAwMDApXHJcblxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRUb3RhbFdhbGxldCh3YWxsZXQudG90YWxXYWxsZXQpXHJcbiAgICAgIC8vXHJcbiAgICAgIGNvbnN0IHdhbGxldF9zdG9yZSA9IGNvb2tpZS5nZXQoJ3dhbGxldF9zdG9yZScpXHJcbiAgICAgIGlmICh3YWxsZXRfc3RvcmUpIHtcclxuICAgICAgICAgd2FsbGV0LnNldFdhbGxldCh3YWxsZXRfc3RvcmUpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXdhbGxldF9zdG9yZSkge1xyXG4gICAgICAgICBmZXRjaGluZ1dhbGxldCgpIC8vINGN0YLQsCDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LjQt9Cx0LXQttCw0L3QuNGPINCy0YLQvtGA0L7Qs9C+INCy0YvQt9C+0LLQsCDQv9GA0LggbW9kZSBkZXZcclxuICAgICAgICAgLy93YWxsZXQuZmV0Y2hXYWxsZXRzKClcclxuICAgICAgICAgY29uc29sZS5sb2coJ3dyb2snKTtcclxuICAgICAgfVxyXG4gICB9LCBbXSk7XHJcbiAgIGNvbnNvbGUubG9nKHdhbGxldCk7XHJcblxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRUb3RhbFdhbGxldCh3YWxsZXQudG90YWxXYWxsZXQpXHJcbiAgICAgIGlmICghd2FsbGV0LmlzbG9hZGluZyAmJiB3YWxsZXQudG90YWxXYWxsZXQudG90YWwgPiAwKSB7XHJcbiAgICAgICAgIGNvb2tpZS5zZXQoJ3dhbGxldF9zdG9yZScsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbGlzdDogd2FsbGV0Lmxpc3QsXHJcbiAgICAgICAgICAgIHRvdGFsV2FsZXQ6IHdhbGxldC50b3RhbFdhbGxldCxcclxuICAgICAgICAgICAgX2lkOiB3YWxsZXQuX2lkLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHdhbGxldC51c2VySWRcclxuICAgICAgICAgfSksIHsgZXhwaXJlczogMSAvIDI0IC8gNCB9KVxyXG4gICAgICB9XHJcbiAgIH0sIFt3YWxsZXQudG90YWxXYWxsZXRdKVxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygndG90YWxXYWxsZXQnLCB3YWxsZXQpO1xyXG4gICB9LCBbd2FsbGV0LnRvdGFsV2FsbGV0XSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgIHt0b3RhbFdhbGxldC50b3RhbCA9PT0gMCB8fCAhdXNlci51c2VyQW5vbmltID9cclxuICAgICAgICAgICAgICAgPGRpdj5MT0FESW5nPC9kaXY+IDogPEJhbGFuY2Ugd2FsbGV0VG90YWw9e3RvdGFsV2FsbGV0fSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgd2FsbGV0Lmxpc3QubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgd2FsbGV0Lmxpc3QubWFwKHdhbGxldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt3YWxsZXQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29pbldhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXRpY3M9e3dhbGxldC5hbmFseXRpY3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17d2FsbGV0LmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29pbj17d2FsbGV0LmNvaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJhbmN5PXsnVVNFUi5DVVJSJ31cclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgOiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIDwvdWw+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoV2FsbGV0KSJdLCJuYW1lcyI6WyJCYWxhbmNlIiwiQ29pbldhbGxldCIsInN0eWxlcyIsIm9ic2VydmVyIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiU29ja2V0Q29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZUVmZmVjdCIsImNvb2tpZSIsIl8iLCJXYWxsZXQiLCJ3YWxsZXQiLCJ1c2VyIiwic29ja2V0Iiwic29ja2V0Q29ubmVjdGVkIiwidG90YWxXYWxsZXQiLCJzZXRUb3RhbFdhbGxldCIsIm51bSIsImZldGNoaW5nV2FsbGV0IiwiY29uc29sZSIsImxvZyIsImZldGNoV2FsbGV0cyIsIndhbGxldF9zdG9yZSIsImdldCIsInNldFdhbGxldCIsImlzbG9hZGluZyIsInRvdGFsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImxpc3QiLCJ0b3RhbFdhbGV0IiwiX2lkIiwidXNlcklkIiwiZXhwaXJlcyIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJpdGVtIiwidXNlckFub25pbSIsImRpdiIsIndhbGxldFRvdGFsIiwibGVuZ3RoIiwibWFwIiwiYW5hbHl0aWNzIiwiYW1vdW50IiwiY29pbiIsImN1cnJhbmN5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/wallet/Wallet/index.jsx\n"));

/***/ })

});