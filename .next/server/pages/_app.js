/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/analytics.ts":
/*!**************************!*\
  !*** ./lib/analytics.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAnalytics\": () => (/* binding */ useAnalytics)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fathom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fathom-client */ \"fathom-client\");\n/* harmony import */ var fathom_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fathom_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst useAnalytics = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n        function onRouteChangeComplete() {\n            fathom_client__WEBPACK_IMPORTED_MODULE_2__.trackPageview();\n        }\n        router.events.on('routeChangeComplete', onRouteChangeComplete);\n        return ()=>{\n            router.events.off('routeChangeComplete', onRouteChangeComplete);\n        };\n    }, [\n        router.events\n    ]);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYW5hbHl0aWNzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDTjtBQUNNO0FBRWhDLEtBQUssQ0FBQ0csWUFBWSxPQUFTLENBQUM7SUFDakMsS0FBSyxDQUFDQyxNQUFNLEdBQUdKLHNEQUFTO0lBRXhCQyxnREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEVBUk4sS0FRNkMsRUFBRSxFQUkxQztpQkFFUVMscUJBQXFCLEdBQUcsQ0FBQztZQUNoQ1Isd0RBQW9CO1FBQ3RCLENBQUM7UUFFREUsTUFBTSxDQUFDUSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRUgscUJBQXFCO1FBRTdELE1BQU0sS0FBTyxDQUFDO1lBQ1pOLE1BQU0sQ0FBQ1EsTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBcUIsc0JBQUVKLHFCQUFxQjtRQUNoRSxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNOO1FBQUFBLE1BQU0sQ0FBQ1EsTUFBTTtJQUFBLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9hbmFseXRpY3MudHM/YjM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBGYXRob20gZnJvbSAnZmF0aG9tLWNsaWVudCc7XG5cbmV4cG9ydCBjb25zdCB1c2VBbmFseXRpY3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIEZhdGhvbS5sb2FkKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZBVEhPTV9TSVRFX0lELCB7XG4gICAgICAgIGluY2x1ZGVkRG9tYWluczogWydrYW52YWx5LnZlcmNlbC5hcHAnXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Sb3V0ZUNoYW5nZUNvbXBsZXRlKCkge1xuICAgICAgRmF0aG9tLnRyYWNrUGFnZXZpZXcoKTtcbiAgICB9XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgb25Sb3V0ZUNoYW5nZUNvbXBsZXRlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIG9uUm91dGVDaGFuZ2VDb21wbGV0ZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcbn07XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiRmF0aG9tIiwidXNlQW5hbHl0aWNzIiwicm91dGVyIiwibG9hZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GQVRIT01fU0lURV9JRCIsImluY2x1ZGVkRG9tYWlucyIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsInRyYWNrUGFnZXZpZXciLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/analytics.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lib_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/analytics */ \"./lib/analytics.ts\");\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    (0,lib_analytics__WEBPACK_IMPORTED_MODULE_4__.useAnalytics)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: pageProps.session,\n        __source: {\n            fileName: \"/Users/me_teor21/Workspace/portfolio/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n            attribute: \"class\",\n            __source: {\n                fileName: \"/Users/me_teor21/Workspace/portfolio/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/me_teor21/Workspace/portfolio/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUdpQjtBQUNNO0FBQ0w7QUFFN0IsUUFBUSxDQUFDRyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUMvREgsMkRBQVk7SUFFWixNQUFNLHNFQUNIRCw0REFBZTtRQUFDSyxPQUFPLEVBQUVELFNBQVMsQ0FBQ0MsT0FBTzs7Ozs7Ozt1RkFDeENOLHNEQUFhO1lBQUNPLFNBQVMsRUFBQyxDQUFPOzs7Ozs7OzJGQUM3QkgsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7OztBQUloQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3N0eWxlcy9nbG9iYWwuY3NzJztcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgdXNlQW5hbHl0aWNzIH0gZnJvbSAnbGliL2FuYWx5dGljcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHVzZUFuYWx5dGljcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XG4gICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIlNlc3Npb25Qcm92aWRlciIsInVzZUFuYWx5dGljcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJhdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "fathom-client":
/*!********************************!*\
  !*** external "fathom-client" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("fathom-client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();