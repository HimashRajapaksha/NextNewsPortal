"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/create-news/page",{

/***/ "(app-pages-browser)/./src/app/admin/create-news/page.tsx":
/*!********************************************!*\
  !*** ./src/app/admin/create-news/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateNews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CreateNews() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleCreateNews = async (e)=>{\n        e.preventDefault();\n        setError(\"\");\n        setSuccess(\"\");\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8070/news/add\", {\n                title,\n                content\n            });\n            setSuccess(\"News created successfully!\");\n            setTitle(\"\");\n            setContent(\"\");\n            setTimeout(()=>{\n                router.push(\"/admin/dashboard\");\n            }, 2000); // Redirect to dashboard after 2 seconds\n        } catch (error) {\n            setError(\"Error creating news. Please try again.\");\n            console.error(\"Error creating news:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Create News\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleCreateNews,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"title\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"title\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                className: \"mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Content\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                value: content,\n                                onChange: (e)=>setContent(e.target.value),\n                                className: \"mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-red-500 text-sm\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 19\n                    }, this),\n                    success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-green-500 text-sm\",\n                        children: success\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Derana Macro Labs\\\\frontend\\\\src\\\\app\\\\admin\\\\create-news\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateNews, \"GwIZLXmQPO9D2QD1KaCNz6OqUlA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateNews;\nvar _c;\n$RefreshReg$(_c, \"CreateNews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vY3JlYXRlLW5ld3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFd0M7QUFDZDtBQUNrQjtBQUU3QixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1ZLFNBQVNWLDBEQUFTQTtJQUV4QixNQUFNVyxtQkFBbUIsT0FBT0M7UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEJOLFNBQVM7UUFDVEUsV0FBVztRQUNYLElBQUk7WUFDRixNQUFNViw2Q0FBS0EsQ0FBQ2UsSUFBSSxDQUFDLGtDQUFrQztnQkFBRVo7Z0JBQU9FO1lBQVE7WUFDcEVLLFdBQVc7WUFDWE4sU0FBUztZQUNURSxXQUFXO1lBQ1hVLFdBQVc7Z0JBQ1RMLE9BQU9NLElBQUksQ0FBQztZQUNkLEdBQUcsT0FBTyx3Q0FBd0M7UUFDcEQsRUFBRSxPQUFPVixPQUFPO1lBQ2RDLFNBQVM7WUFDVFUsUUFBUVgsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRTtnQkFBS0MsVUFBVVg7Z0JBQWtCUSxXQUFVOztrQ0FDMUMsOERBQUNEOzswQ0FDQyw4REFBQ0s7Z0NBQU1DLFNBQVE7Z0NBQVFMLFdBQVU7MENBQTBDOzs7Ozs7MENBRzNFLDhEQUFDTTtnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsT0FBTzFCO2dDQUNQMkIsVUFBVWpCLENBQUFBLElBQUtULFNBQVNTLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7Z0NBQ3RDVCxXQUFVO2dDQUNWWSxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNiOzswQ0FDQyw4REFBQ0s7Z0NBQU1DLFNBQVE7Z0NBQVVMLFdBQVU7MENBQTBDOzs7Ozs7MENBRzdFLDhEQUFDYTtnQ0FDQ0wsSUFBRztnQ0FDSEMsT0FBT3hCO2dDQUNQeUIsVUFBVWpCLENBQUFBLElBQUtQLFdBQVdPLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7Z0NBQ3hDVCxXQUFVO2dDQUNWWSxRQUFROzs7Ozs7Ozs7Ozs7b0JBR1h6Qix1QkFBUyw4REFBQ1k7d0JBQUlDLFdBQVU7a0NBQXdCYjs7Ozs7O29CQUNoREUseUJBQVcsOERBQUNVO3dCQUFJQyxXQUFVO2tDQUEwQlg7Ozs7OztrQ0FDckQsOERBQUN5Qjt3QkFDQ1AsTUFBSzt3QkFDTFAsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FqRXdCbEI7O1FBS1BELHNEQUFTQTs7O0tBTEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vY3JlYXRlLW5ld3MvcGFnZS50c3g/NmU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZU5ld3MoKSB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTmV3cyA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEVycm9yKCcnKTtcclxuICAgIHNldFN1Y2Nlc3MoJycpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDcwL25ld3MvYWRkJywgeyB0aXRsZSwgY29udGVudCB9KTtcclxuICAgICAgc2V0U3VjY2VzcygnTmV3cyBjcmVhdGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgc2V0VGl0bGUoJycpO1xyXG4gICAgICBzZXRDb250ZW50KCcnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9hcmQnKTtcclxuICAgICAgfSwgMjAwMCk7IC8vIFJlZGlyZWN0IHRvIGRhc2hib2FyZCBhZnRlciAyIHNlY29uZHNcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKCdFcnJvciBjcmVhdGluZyBuZXdzLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBuZXdzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+Q3JlYXRlIE5ld3M8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ3JlYXRlTmV3c30gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgVGl0bGVcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgQ29udGVudFxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbVwiPntlcnJvcn08L2Rpdj59XHJcbiAgICAgICAge3N1Y2Nlc3MgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCB0ZXh0LXNtXCI+e3N1Y2Nlc3N9PC9kaXY+fVxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkNyZWF0ZU5ld3MiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJlcnJvciIsInNldEVycm9yIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJyb3V0ZXIiLCJoYW5kbGVDcmVhdGVOZXdzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInNldFRpbWVvdXQiLCJwdXNoIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/create-news/page.tsx\n"));

/***/ })

});