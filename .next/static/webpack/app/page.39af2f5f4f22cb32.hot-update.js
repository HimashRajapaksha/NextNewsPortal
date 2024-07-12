"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedNews, setSelectedNews] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchNews = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8070/news\");\n                setNews(response.data);\n            } catch (error) {\n                console.error(\"Error fetching news:\", error);\n            }\n        };\n        fetchNews();\n    }, []);\n    const handleAdminLogin = ()=>{\n        router.push(\"/admin/login\");\n    };\n    const handleNewsClick = (newsItem)=>{\n        setSelectedNews(newsItem);\n    };\n    const closeNews = ()=>{\n        setSelectedNews(null);\n    };\n    const filteredNews = news.filter((item)=>item.title.toLowerCase().includes(searchTerm.toLowerCase()));\n    const handleSearchChange = (e)=>{\n        setSearchTerm(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-white p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-4 right-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleAdminLogin,\n                    className: \"bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition\",\n                    children: \"Admin Login\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-0 flex flex-col items-center mb-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"/images/logo.png\",\n                        alt: \"Logo\",\n                        width: 150,\n                        height: 150\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mt-4\",\n                        children: \"Welcome to Macro News Portal\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full justify-center mb-8 lg:mb-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search news...\",\n                        value: searchTerm,\n                        onChange: handleSearchChange,\n                        className: \"w-full max-w-lg p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-8 text-center lg:grid-cols-3 lg:text-left\",\n                children: filteredNews.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"group rounded-lg border border-transparent bg-white px-6 py-8 transition-all card-hover shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                onClick: ()=>handleNewsClick(item),\n                                className: \"cursor-pointer text-2xl font-semibold mb-4\",\n                                children: [\n                                    item.title,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-block transition-transform group-hover:translate-x-1 ml-2\",\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600 text-balance text-sm\",\n                                children: item.content\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, item._id, true, {\n                        fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            selectedNews && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-8 rounded-lg max-w-3xl overflow-y-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4\",\n                            children: selectedNews.title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: selectedNews.content\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closeNews,\n                            className: \"mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NextNewsPortal\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"9yiVyyRKzEglugVZrl+RVWgN+Pg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ2E7QUFDbEI7QUFDa0I7QUFRN0IsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBYSxFQUFFO0lBQy9DLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFrQjtJQUNsRSxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQVM7SUFDckQsTUFBTVcsU0FBU1IsMERBQVNBO0lBRXhCRixnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1YLDZDQUFLQSxDQUFDWSxHQUFHLENBQUM7Z0JBQ2pDUixRQUFRTyxTQUFTRSxJQUFJO1lBQ3ZCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEM7UUFDRjtRQUVBSjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1NLG1CQUFtQjtRQUN2QlAsT0FBT1EsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJiLGdCQUFnQmE7SUFDbEI7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCZCxnQkFBZ0I7SUFDbEI7SUFFQSxNQUFNZSxlQUFlbEIsS0FBS21CLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FDL0JBLEtBQUtDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNuQixXQUFXa0IsV0FBVztJQUcxRCxNQUFNRSxxQkFBcUIsQ0FBQ0M7UUFDMUJwQixjQUFjb0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQ0NDLFNBQVNuQjtvQkFDVGdCLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNuQyxrREFBS0E7d0JBQUN1QyxLQUFJO3dCQUFtQkMsS0FBSTt3QkFBT0MsT0FBTzt3QkFBS0MsUUFBUTs7Ozs7O2tDQUM3RCw4REFBQ0M7d0JBQUdSLFdBQVU7a0NBQTBCOzs7Ozs7Ozs7Ozs7MEJBRTFDLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNTO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaYixPQUFPdkI7d0JBQ1BxQyxVQUFVakI7d0JBQ1ZLLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2hCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlgsYUFBYXdCLEdBQUcsQ0FBQyxDQUFDdEIscUJBQ2pCLDhEQUFDVTt3QkFBbUJELFdBQVU7OzBDQUM1Qiw4REFBQ2M7Z0NBQ0NYLFNBQVMsSUFBTWpCLGdCQUFnQks7Z0NBQy9CUyxXQUFVOztvQ0FFVFQsS0FBS0MsS0FBSztrREFDWCw4REFBQ3VCO3dDQUFLZixXQUFVO2tEQUFtRTs7Ozs7Ozs7Ozs7OzBDQUVyRiw4REFBQ2dCO2dDQUFFaEIsV0FBVTswQ0FDVlQsS0FBSzBCLE9BQU87Ozs7Ozs7dUJBVFAxQixLQUFLMkIsR0FBRzs7Ozs7Ozs7OztZQWdCckI3Qyw4QkFDQyw4REFBQzRCO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNjOzRCQUFHZCxXQUFVO3NDQUErQjNCLGFBQWFtQixLQUFLOzs7Ozs7c0NBQy9ELDhEQUFDd0I7NEJBQUVoQixXQUFVO3NDQUFpQjNCLGFBQWE0QyxPQUFPOzs7Ozs7c0NBQ2xELDhEQUFDZjs0QkFDQ0MsU0FBU2Y7NEJBQ1RZLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FuR3dCOUI7O1FBSVBELHNEQUFTQTs7O0tBSkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuaW50ZXJmYWNlIE5ld3NJdGVtIHtcbiAgX2lkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGU8TmV3c0l0ZW1bXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWROZXdzLCBzZXRTZWxlY3RlZE5ld3NdID0gdXNlU3RhdGU8TmV3c0l0ZW0gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hOZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA3MC9uZXdzJyk7XG4gICAgICAgIHNldE5ld3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBuZXdzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hOZXdzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVBZG1pbkxvZ2luID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vbG9naW4nKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXdzQ2xpY2sgPSAobmV3c0l0ZW06IE5ld3NJdGVtKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWROZXdzKG5ld3NJdGVtKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZU5ld3MgPSAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWROZXdzKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkTmV3cyA9IG5ld3MuZmlsdGVyKGl0ZW0gPT5cbiAgICBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTEwMCB0by13aGl0ZSBwLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWRtaW5Mb2dpbn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTYgcHktMyByb3VuZGVkLWxnIHNoYWRvdy1sZyBob3ZlcjpiZy1ibHVlLTYwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFkbWluIExvZ2luXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYi0xNlwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MTUwfSBoZWlnaHQ9ezE1MH0gLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtdC00XCI+V2VsY29tZSB0byBNYWNybyBOZXdzIFBvcnRhbDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbWF4LXctNXhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6ZmxleCBtYi04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgbWItOCBsZzptYi0wXCI+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG5ld3MuLi5cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWxnIHAtNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtOCB0ZXh0LWNlbnRlciBsZzpncmlkLWNvbHMtMyBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAge2ZpbHRlcmVkTmV3cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5faWR9IGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy13aGl0ZSBweC02IHB5LTggdHJhbnNpdGlvbi1hbGwgY2FyZC1ob3ZlciBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOZXdzQ2xpY2soaXRlbSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSBtbC0yXCI+LSZndDs8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LWJhbGFuY2UgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmVuZGVyIEZ1bGwgTmV3cyBBcnRpY2xlICovfVxuICAgICAge3NlbGVjdGVkTmV3cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctZ3JheS04MDAgYmctb3BhY2l0eS01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgbWF4LXctM3hsIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPntzZWxlY3RlZE5ld3MudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57c2VsZWN0ZWROZXdzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU5ld3N9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6YmctYmx1ZS02MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJIb21lIiwibmV3cyIsInNldE5ld3MiLCJzZWxlY3RlZE5ld3MiLCJzZXRTZWxlY3RlZE5ld3MiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInJvdXRlciIsImZldGNoTmV3cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUFkbWluTG9naW4iLCJwdXNoIiwiaGFuZGxlTmV3c0NsaWNrIiwibmV3c0l0ZW0iLCJjbG9zZU5ld3MiLCJmaWx0ZXJlZE5ld3MiLCJmaWx0ZXIiLCJpdGVtIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm1hcCIsImgyIiwic3BhbiIsInAiLCJjb250ZW50IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});