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

/***/ "./components/Settings.js":
/*!********************************!*\
  !*** ./components/Settings.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _lib_useDarkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useDarkMode */ \"./lib/useDarkMode.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar theme_options = [\n    {\n        label: \"System\",\n        value: \"system\"\n    },\n    {\n        label: \"Dark\",\n        value: \"dark\"\n    },\n    {\n        label: \"Light\",\n        value: \"light\"\n    }, \n];\nfunction ThemeSelector() {\n    var _this = this;\n    _s();\n    var ref = (0,_lib_useDarkMode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), theme = ref.theme, setTheme = ref.setTheme;\n    var handleChange = function(e) {\n        setTheme(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"select-theme\",\n                children: theme === \"system\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineDesktopComputer, {\n                    className: \"absolute text-lg bottom-3 left-4 pointer-events-none\"\n                }, void 0, false, {\n                    fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                    lineNumber: 33,\n                    columnNumber: 6\n                }, this) : theme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsMoon, {\n                    className: \"absolute text-lg bottom-3 left-4 pointer-events-none\"\n                }, void 0, false, {\n                    fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                    lineNumber: 35,\n                    columnNumber: 6\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsSun, {\n                    className: \"absolute text-lg bottom-3 left-4 pointer-events-none\"\n                }, void 0, false, {\n                    fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                    lineNumber: 37,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"appearance-none bg-transparent relative w-32 pl-9 py-1.5 border border-gray-600 dark:border-custom-light-gray rounded outline-none\",\n                id: \"select-theme\",\n                value: theme,\n                onChange: handleChange,\n                children: theme_options.map(function(option) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: option.value,\n                        children: option.label\n                    }, option.value, false, {\n                        fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                        lineNumber: 47,\n                        columnNumber: 6\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ThemeSelector, \"hywtMU2nakQyJkFl6ueC0eJyhXU=\", false, function() {\n    return [\n        _lib_useDarkMode__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ThemeSelector;\nfunction Settings() {\n    _s1();\n    var dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isActive = ref[0], setIsActive = ref[1];\n    var onClick = function() {\n        return setIsActive(!isActive);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.addEventListener(\"mousedown\", function(e) {\n            console.log(dropdownRef.current.contains(e.target), isActive);\n            setIsActive(true);\n            if (!dropdownRef.current.contains(e.target) && isActive) {\n                console.log(\"hej\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiSettings, {\n                className: \"text-lg cursor-pointer text-black dark:text-white transform transition-all hover:rotate-45\",\n                onClick: onClick\n            }, void 0, false, {\n                fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: dropdownRef,\n                className: isActive ? \"grid absolute right-0 top-8 md:top-14 bg-white rounded-md shadow-xl z-20 divide-y divide-gray-600 dark:divide-custom-light-gray border border-transparent dark:border-custom-light-gray dark:bg-custom-dark-blue\" : \"hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4 items-center text-center py-3 px-4 text-black dark:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Theme\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                                lineNumber: 87,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                            lineNumber: 86,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"select-wrap flex items-center py-1 px-1 relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeSelector, {}, void 0, false, {\n                                        fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"select-theme\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiSelector, {\n                                            className: \"absolute text-lg bottom-3 right-4 pointer-events-none\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 9\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                                lineNumber: 90,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                            lineNumber: 89,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                    lineNumber: 85,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/seb/Developer/personal-website/components/Settings.js\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s1(Settings, \"eaZOZO8SCsHRBgb00+5FlXzXRiw=\");\n_c1 = Settings;\nvar _c, _c1;\n$RefreshReg$(_c, \"ThemeSelector\");\n$RefreshReg$(_c1, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRUEsT0FBTzs7Ozs7b0JBQ2Y7MEJBQ0YsOERBQUNPLEtBQUc7Z0JBQ0hDLEdBQUcsRUFBRVgsV0FBVztnQkFDaEJQLFNBQVMsRUFDUlEsUUFBUSxHQUNMLGtOQUFrTixHQUNsTixRQUFROzBCQUdaLDRFQUFDUyxLQUFHO29CQUFDakIsU0FBUyxFQUFDLDhFQUE4RTs7c0NBQzVGLDhEQUFDaUIsS0FBRzs0QkFBQ2pCLFNBQVMsRUFBQyxRQUFRO3NDQUN0Qiw0RUFBQ1QsT0FBSzswQ0FBQyxPQUFLOzs7OztvQ0FBUTs7Ozs7Z0NBQ2Y7c0NBQ04sOERBQUMwQixLQUFHOzRCQUFDakIsU0FBUyxFQUFDLFFBQVE7c0NBQ3RCLDRFQUFDaUIsS0FBRztnQ0FBQ2pCLFNBQVMsRUFBQyxrREFBa0Q7O2tEQUloRSw4REFBQ1AsYUFBYTs7Ozs0Q0FBRztrREFDakIsOERBQUNGLE9BQUs7d0NBQUNRLE9BQU8sRUFBQyxjQUFjO2tEQUM1Qiw0RUFBQ1gsc0RBQVU7NENBQUNZLFNBQVMsRUFBQyx1REFBdUQ7Ozs7O2dEQUFHOzs7Ozs0Q0FDekU7Ozs7OztvQ0FDSDs7Ozs7Z0NBQ0Q7Ozs7Ozt3QkFDRDs7Ozs7b0JBQ0Q7O29CQUNKLENBQ0g7Q0FDRDtJQWhEdUJNLFFBQVE7QUFBUkEsTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NldHRpbmdzLmpzPzdjODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEZpU2V0dGluZ3MgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxuaW1wb3J0IHsgQnNTdW4sIEJzTW9vbiB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBIaU91dGxpbmVEZXNrdG9wQ29tcHV0ZXIsIEhpU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIlxuaW1wb3J0IHVzZURhcmtNb2RlIGZyb20gXCIuLi9saWIvdXNlRGFya01vZGVcIlxuXG5jb25zdCB0aGVtZV9vcHRpb25zID0gW1xuXHR7XG5cdFx0bGFiZWw6IFwiU3lzdGVtXCIsXG5cdFx0dmFsdWU6IFwic3lzdGVtXCIsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogXCJEYXJrXCIsXG5cdFx0dmFsdWU6IFwiZGFya1wiLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6IFwiTGlnaHRcIixcblx0XHR2YWx1ZTogXCJsaWdodFwiLFxuXHR9LFxuXVxuXG5mdW5jdGlvbiBUaGVtZVNlbGVjdG9yKCkge1xuXHRjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlRGFya01vZGUoKVxuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0c2V0VGhlbWUoZS50YXJnZXQudmFsdWUpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC10aGVtZVwiPlxuXHRcdFx0XHR7dGhlbWUgPT09IFwic3lzdGVtXCIgPyAoXG5cdFx0XHRcdFx0PEhpT3V0bGluZURlc2t0b3BDb21wdXRlciBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LWxnIGJvdHRvbS0zIGxlZnQtNCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cblx0XHRcdFx0KSA6IHRoZW1lID09PSBcImRhcmtcIiA/IChcblx0XHRcdFx0XHQ8QnNNb29uIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtbGcgYm90dG9tLTMgbGVmdC00IHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxCc1N1biBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LWxnIGJvdHRvbS0zIGxlZnQtNCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cblx0XHRcdFx0KX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBiZy10cmFuc3BhcmVudCByZWxhdGl2ZSB3LTMyIHBsLTkgcHktMS41IGJvcmRlciBib3JkZXItZ3JheS02MDAgZGFyazpib3JkZXItY3VzdG9tLWxpZ2h0LWdyYXkgcm91bmRlZCBvdXRsaW5lLW5vbmVcIlxuXHRcdFx0XHRpZD1cInNlbGVjdC10aGVtZVwiXG5cdFx0XHRcdHZhbHVlPXt0aGVtZX1cblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdD5cblx0XHRcdFx0e3RoZW1lX29wdGlvbnMubWFwKChvcHRpb24pID0+IChcblx0XHRcdFx0XHQ8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cblx0XHRcdFx0XHRcdHtvcHRpb24ubGFiZWx9XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG5cdGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpXG5cdGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhkcm9wZG93blJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSwgaXNBY3RpdmUpXG5cdFx0XHRzZXRJc0FjdGl2ZSh0cnVlKVxuXHRcdFx0aWYgKCFkcm9wZG93blJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBpc0FjdGl2ZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImhlalwiKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxGaVNldHRpbmdzXG5cdFx0XHRcdGNsYXNzTmFtZT1cInRleHQtbGcgY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGhvdmVyOnJvdGF0ZS00NVwiXG5cdFx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0XHQvPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRyZWY9e2Ryb3Bkb3duUmVmfVxuXHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdGlzQWN0aXZlXG5cdFx0XHRcdFx0XHQ/IFwiZ3JpZCBhYnNvbHV0ZSByaWdodC0wIHRvcC04IG1kOnRvcC0xNCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy14bCB6LTIwIGRpdmlkZS15IGRpdmlkZS1ncmF5LTYwMCBkYXJrOmRpdmlkZS1jdXN0b20tbGlnaHQtZ3JheSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGRhcms6Ym9yZGVyLWN1c3RvbS1saWdodC1ncmF5IGRhcms6YmctY3VzdG9tLWRhcmstYmx1ZVwiXG5cdFx0XHRcdFx0XHQ6IFwiaGlkZGVuXCJcblx0XHRcdFx0fVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBweS0zIHB4LTQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPlRoZW1lPC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3Qtd3JhcCBmbGV4IGl0ZW1zLWNlbnRlciBweS0xIHB4LTEgcmVsYXRpdmVcIj5cblx0XHRcdFx0XHRcdFx0ey8qPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtdGhlbWVcIj5cbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lRGVza3RvcENvbXB1dGVyIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtbGcgYm90dG9tLTMgbGVmdC00IHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPiovfVxuXHRcdFx0XHRcdFx0XHQ8VGhlbWVTZWxlY3RvciAvPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInNlbGVjdC10aGVtZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxIaVNlbGVjdG9yIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtbGcgYm90dG9tLTMgcmlnaHQtNCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGaVNldHRpbmdzIiwiQnNTdW4iLCJCc01vb24iLCJIaU91dGxpbmVEZXNrdG9wQ29tcHV0ZXIiLCJIaVNlbGVjdG9yIiwidXNlRGFya01vZGUiLCJ0aGVtZV9vcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsIlRoZW1lU2VsZWN0b3IiLCJ0aGVtZSIsInNldFRoZW1lIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImh0bWxGb3IiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJpZCIsIm9uQ2hhbmdlIiwibWFwIiwib3B0aW9uIiwiU2V0dGluZ3MiLCJkcm9wZG93blJlZiIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjb250YWlucyIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Settings.js\n"));

/***/ })

});