"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/wallet.js":
/*!*************************!*\
  !*** ./store/wallet.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var C_PROJECT_crypto_wallet_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_PROJECT_crypto_wallet_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_PROJECT_crypto_wallet_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n/* harmony import */ var _http_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/fetch */ \"./http/fetch.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n\n\n\n\n\n\nvar WalletStore = /*#__PURE__*/ function() {\n    \"use strict\";\n    function WalletStore() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, WalletStore);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, \"list\", []);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, \"userId\", null);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, \"_id\", null);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, \"totalWallet\", {\n            total: 0,\n            percentage: 0,\n            profit: 0\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, \"isloading\", false);\n        (0,mobx__WEBPACK_IMPORTED_MODULE_5__.makeAutoObservable)(this);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(WalletStore, [\n        {\n            key: \"setWallet\",\n            value: function setWallet(param) {\n                var list = param.list, userId = param.userId, _id = param._id, totalWallet = param.totalWallet;\n                this.list = list;\n                this.totalWallet = totalWallet;\n                if (userId) this.userId = userId;\n                if (_id) this._id = _id;\n                this.setTimeoutFetch();\n                console.log(\"cooie\");\n            }\n        },\n        {\n            key: \"fetchWallets\",\n            value: function fetchWallets() {\n                var _this = this;\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_PROJECT_crypto_wallet_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var resp;\n                    return C_PROJECT_crypto_wallet_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _this.isloading = true;\n                                _ctx.next = 4;\n                                return _http_fetch__WEBPACK_IMPORTED_MODULE_1__.FetchWallet.getWallet();\n                            case 4:\n                                resp = _ctx.sent;\n                                _this.list = resp.list.map(function(wallet) {\n                                    wallet.analytics = {\n                                        profit: null,\n                                        percentage: null\n                                    };\n                                    return wallet;\n                                });\n                                _this.userId = resp.userId;\n                                _this._id = resp._id;\n                                // подсчёт\n                                if (_this.list.length) {\n                                    _this.getWalletAnalytics();\n                                }\n                                _ctx.next = 14;\n                                break;\n                            case 11:\n                                _ctx.prev = 11;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                                console.log(\"ERRORS\", _ctx.t0);\n                            case 14:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            11\n                        ]\n                    ]);\n                }))();\n            }\n        },\n        {\n            key: \"getWalletAnalytics\",\n            value: function getWalletAnalytics() {\n                var _this = this;\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_PROJECT_crypto_wallet_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var ref, list, totalWallet;\n                    return C_PROJECT_crypto_wallet_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _ctx.next = 3;\n                                return _http_fetch__WEBPACK_IMPORTED_MODULE_1__.FetchWallet.getWalletAnalytics(_this.list);\n                            case 3:\n                                ref = _ctx.sent;\n                                list = ref.list;\n                                totalWallet = ref.totalWallet;\n                                console.log(\"пришло\");\n                                _this.list = list;\n                                _this.totalWallet = totalWallet;\n                                _this.isloading = false;\n                                //save\n                                _this.saveWalletCookie();\n                                // refetch\n                                _this.setTimeoutFetch();\n                                _ctx.next = 16;\n                                break;\n                            case 14:\n                                _ctx.prev = 14;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                            case 16:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            14\n                        ]\n                    ]);\n                }))();\n            }\n        },\n        {\n            key: \"saveWalletCookie\",\n            value: function saveWalletCookie() {\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"wallet_store\", JSON.stringify({\n                    list: this.list,\n                    userId: this.userId,\n                    _id: this._id,\n                    totalWallet: this.totalWallet\n                }), {\n                    expires: 1 / 24 / 6\n                });\n            }\n        },\n        {\n            key: \"setTimeoutFetch\",\n            value: function setTimeoutFetch() {\n                console.log(\"timeout\");\n            }\n        }\n    ]);\n    return WalletStore;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (new WalletStore());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLWCxlQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBSzNCO2FBQUE7OztZQUNEVyxHQUFnQixFQUFoQkEsa0JBQWdCO21CQUFoQkEsU0FBQUEsZ0JBQWdCLEdBQUc7Z0JBQ2hCdEIscURBQVUsQ0FBQyxjQUFjLEVBQUV3QixJQUFJLENBQUNDLFNBQVMsQ0FBQztvQkFDdkN2QixJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJO29CQUNmQyxNQUFNLEVBQUUsSUFBSSxDQUFDQSxNQUFNO29CQUNuQkMsR0FBRyxFQUFFLElBQUksQ0FBQ0EsR0FBRztvQkFDYkMsV0FBVyxFQUFFLElBQUksQ0FBQ0EsV0FBVztpQkFDL0IsQ0FBQyxFQUFFO29CQUFFcUIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFBRSxDQUFDO2FBQzlCOzs7WUFDRGYsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHO2dCQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN6Qjs7OztDQUNIO0FBRUQsK0RBQWUsSUFBSVosV0FBVyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3dhbGxldC5qcz8xODE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnXHJcbmltcG9ydCB7IEZldGNoV2FsbGV0IH0gZnJvbSAnLi4vaHR0cC9mZXRjaCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5jbGFzcyBXYWxsZXRTdG9yZSB7XHJcbiAgIGxpc3QgPSBbXVxyXG4gICB1c2VySWQgPSBudWxsXHJcbiAgIF9pZCA9IG51bGxcclxuICAgdG90YWxXYWxsZXQgPSB7XHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBwcm9maXQ6IDBcclxuICAgfVxyXG4gICBpc2xvYWRpbmcgPSBmYWxzZVxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMpO1xyXG4gICB9XHJcbiAgIHNldFdhbGxldCh7IGxpc3QsIHVzZXJJZCwgX2lkLCB0b3RhbFdhbGxldCB9KSB7XHJcbiAgICAgIHRoaXMubGlzdCA9IGxpc3RcclxuICAgICAgdGhpcy50b3RhbFdhbGxldCA9IHRvdGFsV2FsbGV0XHJcbiAgICAgIGlmICh1c2VySWQpIHRoaXMudXNlcklkID0gdXNlcklkXHJcbiAgICAgIGlmIChfaWQpIHRoaXMuX2lkID0gX2lkXHJcbiAgICAgIHRoaXMuc2V0VGltZW91dEZldGNoKClcclxuICAgICAgY29uc29sZS5sb2coJ2Nvb2llJyk7XHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIGZldGNoV2FsbGV0cygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgdGhpcy5pc2xvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBGZXRjaFdhbGxldC5nZXRXYWxsZXQoKVxyXG4gICAgICAgICB0aGlzLmxpc3QgPSByZXNwLmxpc3QubWFwKHdhbGxldCA9PiB7XHJcbiAgICAgICAgICAgIHdhbGxldC5hbmFseXRpY3MgPSB7XHJcbiAgICAgICAgICAgICAgIHByb2ZpdDogbnVsbCxcclxuICAgICAgICAgICAgICAgcGVyY2VudGFnZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB3YWxsZXRcclxuICAgICAgICAgfSlcclxuICAgICAgICAgdGhpcy51c2VySWQgPSByZXNwLnVzZXJJZFxyXG4gICAgICAgICB0aGlzLl9pZCA9IHJlc3AuX2lkXHJcbiAgICAgICAgIC8vINC/0L7QtNGB0YfRkdGCXHJcbiAgICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2FsbGV0QW5hbHl0aWNzKClcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUlMnLCBlKTtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGFzeW5jIGdldFdhbGxldEFuYWx5dGljcygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgY29uc3QgeyBsaXN0LCB0b3RhbFdhbGxldCB9ID0gYXdhaXQgRmV0Y2hXYWxsZXQuZ2V0V2FsbGV0QW5hbHl0aWNzKHRoaXMubGlzdClcclxuICAgICAgICAgY29uc29sZS5sb2coJ9C/0YDQuNGI0LvQvicpO1xyXG4gICAgICAgICB0aGlzLmxpc3QgPSBsaXN0XHJcbiAgICAgICAgIHRoaXMudG90YWxXYWxsZXQgPSB0b3RhbFdhbGxldFxyXG4gICAgICAgICB0aGlzLmlzbG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgIC8vc2F2ZVxyXG4gICAgICAgICB0aGlzLnNhdmVXYWxsZXRDb29raWUoKVxyXG4gICAgICAgICAvLyByZWZldGNoXHJcbiAgICAgICAgIHRoaXMuc2V0VGltZW91dEZldGNoKClcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZSkge1xyXG5cclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHNhdmVXYWxsZXRDb29raWUoKSB7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3dhbGxldF9zdG9yZScsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgbGlzdDogdGhpcy5saXN0LFxyXG4gICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICBfaWQ6IHRoaXMuX2lkLFxyXG4gICAgICAgICB0b3RhbFdhbGxldDogdGhpcy50b3RhbFdhbGxldFxyXG4gICAgICB9KSwgeyBleHBpcmVzOiAxIC8gMjQgLyA2IH0pXHJcbiAgIH1cclxuICAgc2V0VGltZW91dEZldGNoKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygndGltZW91dCcpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXYWxsZXRTdG9yZSgpXHJcbiJdLCJuYW1lcyI6WyJtYWtlQXV0b09ic2VydmFibGUiLCJGZXRjaFdhbGxldCIsImNvb2tpZSIsIldhbGxldFN0b3JlIiwibGlzdCIsInVzZXJJZCIsIl9pZCIsInRvdGFsV2FsbGV0IiwidG90YWwiLCJwZXJjZW50YWdlIiwicHJvZml0IiwiaXNsb2FkaW5nIiwic2V0V2FsbGV0Iiwic2V0VGltZW91dEZldGNoIiwiY29uc29sZSIsImxvZyIsImZldGNoV2FsbGV0cyIsInJlc3AiLCJnZXRXYWxsZXQiLCJtYXAiLCJ3YWxsZXQiLCJhbmFseXRpY3MiLCJsZW5ndGgiLCJnZXRXYWxsZXRBbmFseXRpY3MiLCJzYXZlV2FsbGV0Q29va2llIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/wallet.js\n"));

/***/ })

});