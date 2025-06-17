/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/EnhancedHero.tsx":
/*!*************************************!*\
  !*** ./components/EnhancedHero.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EnhancedHero; },\n/* harmony export */   usePuckControl: function() { return /* binding */ usePuckControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InteractiveHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InteractiveHero */ \"./components/InteractiveHero.tsx\");\n/* harmony import */ var _InteractiveHero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_InteractiveHero__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _IceRinkFeatureSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IceRinkFeatureSection */ \"./components/IceRinkFeatureSection.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst PuckControlContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst usePuckControl = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PuckControlContext);\n    if (!context) {\n        throw new Error(\"usePuckControl must be used within a PuckControlProvider\");\n    }\n    return context;\n};\n_s(usePuckControl, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nfunction EnhancedHero() {\n    _s1();\n    const [puckTargetData, setPuckTargetData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const shootPuckToTarget = (targetX, targetY, panelName)=>{\n        setPuckTargetData({\n            x: targetX,\n            y: targetY,\n            panelName\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuckControlContext.Provider, {\n        value: {\n            shootPuckToTarget\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_InteractiveHero__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    puckTargetData: puckTargetData,\n                    onPuckTargetComplete: ()=>setPuckTargetData(null)\n                }, void 0, false, {\n                    fileName: \"/Users/sammorrow/Documents/Local Web Builds/GC/components/EnhancedHero.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl z-10 pointer-events-none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IceRinkFeatureSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/sammorrow/Documents/Local Web Builds/GC/components/EnhancedHero.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sammorrow/Documents/Local Web Builds/GC/components/EnhancedHero.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sammorrow/Documents/Local Web Builds/GC/components/EnhancedHero.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sammorrow/Documents/Local Web Builds/GC/components/EnhancedHero.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s1(EnhancedHero, \"xkp7kZmgc3iuc/PTETcrFGpOXV0=\");\n_c = EnhancedHero;\nvar _c;\n$RefreshReg$(_c, \"EnhancedHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VuaGFuY2VkSGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkU7QUFDM0I7QUFDWTtBQU01RCxNQUFNTSxtQ0FBcUJMLG9EQUFhQSxDQUFnQztBQUVqRSxNQUFNTSxpQkFBaUI7O0lBQzVCLE1BQU1DLFVBQVVOLGlEQUFVQSxDQUFDSTtJQUMzQixJQUFJLENBQUNFLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUU7R0FOV0Q7QUFRRSxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBbUQ7SUFFdkcsTUFBTVUsb0JBQW9CLENBQUNDLFNBQWlCQyxTQUFpQkM7UUFDM0RKLGtCQUFrQjtZQUFFSyxHQUFHSDtZQUFTSSxHQUFHSDtZQUFTQztRQUFVO0lBQ3hEO0lBRUEscUJBQ0UsOERBQUNWLG1CQUFtQmEsUUFBUTtRQUFDQyxPQUFPO1lBQUVQO1FBQWtCO2tCQUN0RCw0RUFBQ1E7WUFBSUMsV0FBVTs7OEJBRWIsOERBQUNsQix5REFBZUE7b0JBQUNPLGdCQUFnQkE7b0JBQWdCWSxzQkFBc0IsSUFBTVgsa0JBQWtCOzs7Ozs7OEJBRy9GLDhEQUFDUztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ2pCLDhEQUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztJQXBCd0JLO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRW5oYW5jZWRIZXJvLnRzeD82OWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEludGVyYWN0aXZlSGVybyBmcm9tICcuL0ludGVyYWN0aXZlSGVybyc7XG5pbXBvcnQgSWNlUmlua0ZlYXR1cmVTZWN0aW9uIGZyb20gJy4vSWNlUmlua0ZlYXR1cmVTZWN0aW9uJztcblxuaW50ZXJmYWNlIFB1Y2tDb250cm9sQ29udGV4dFR5cGUge1xuICBzaG9vdFB1Y2tUb1RhcmdldDogKHRhcmdldFg6IG51bWJlciwgdGFyZ2V0WTogbnVtYmVyLCBwYW5lbE5hbWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgUHVja0NvbnRyb2xDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxQdWNrQ29udHJvbENvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBjb25zdCB1c2VQdWNrQ29udHJvbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoUHVja0NvbnRyb2xDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VQdWNrQ29udHJvbCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgUHVja0NvbnRyb2xQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW5oYW5jZWRIZXJvKCkge1xuICBjb25zdCBbcHVja1RhcmdldERhdGEsIHNldFB1Y2tUYXJnZXREYXRhXSA9IHVzZVN0YXRlPHt4OiBudW1iZXIsIHk6IG51bWJlciwgcGFuZWxOYW1lOiBzdHJpbmd9IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3Qgc2hvb3RQdWNrVG9UYXJnZXQgPSAodGFyZ2V0WDogbnVtYmVyLCB0YXJnZXRZOiBudW1iZXIsIHBhbmVsTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0UHVja1RhcmdldERhdGEoeyB4OiB0YXJnZXRYLCB5OiB0YXJnZXRZLCBwYW5lbE5hbWUgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UHVja0NvbnRyb2xDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNob290UHVja1RvVGFyZ2V0IH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgey8qIEludGVyYWN0aXZlIEhlcm8gQmFja2dyb3VuZCAqL31cbiAgICAgICAgPEludGVyYWN0aXZlSGVybyBwdWNrVGFyZ2V0RGF0YT17cHVja1RhcmdldERhdGF9IG9uUHVja1RhcmdldENvbXBsZXRlPXsoKSA9PiBzZXRQdWNrVGFyZ2V0RGF0YShudWxsKX0gLz5cbiAgICAgICAgXG4gICAgICAgIHsvKiBGZWF0dXJlIFNlY3Rpb24gT3ZlcmxheSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdy1mdWxsIG1heC13LTZ4bCB6LTEwIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICA8SWNlUmlua0ZlYXR1cmVTZWN0aW9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9QdWNrQ29udHJvbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59ICJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJJbnRlcmFjdGl2ZUhlcm8iLCJJY2VSaW5rRmVhdHVyZVNlY3Rpb24iLCJQdWNrQ29udHJvbENvbnRleHQiLCJ1c2VQdWNrQ29udHJvbCIsImNvbnRleHQiLCJFcnJvciIsIkVuaGFuY2VkSGVybyIsInB1Y2tUYXJnZXREYXRhIiwic2V0UHVja1RhcmdldERhdGEiLCJzaG9vdFB1Y2tUb1RhcmdldCIsInRhcmdldFgiLCJ0YXJnZXRZIiwicGFuZWxOYW1lIiwieCIsInkiLCJQcm92aWRlciIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25QdWNrVGFyZ2V0Q29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/EnhancedHero.tsx\n"));

/***/ }),

/***/ "./components/InteractiveHero.tsx":
/*!****************************************!*\
  !*** ./components/InteractiveHero.tsx ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});