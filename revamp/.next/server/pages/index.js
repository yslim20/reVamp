module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/BottomNav/index.js":
/*!**********************************!*\
  !*** ./comps/BottomNav/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\monta\\Documents\\BCITFILES\\MDIA2109\\revampcomps\\revamp\\revamp\\comps\\BottomNav\\index.js";


const BottomCont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "BottomNav__BottomCont",
  componentId: "sc-49u4i5-0"
})(["display:flex;justify-content:space-between;color:#14455A;font-family:'Lexend Giga',sans-serif;width:375px;height:75px;box-shadow:0px -2px 4px rgba(0,0,0,.25);margin:0 auto;margin-top:200px;&>*{color:#50514F;}"]);
const BackCont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "BottomNav__BackCont",
  componentId: "sc-49u4i5-1"
})(["text-align:center;margin-left:27px;"]);
const BackImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "BottomNav__BackImg",
  componentId: "sc-49u4i5-2"
})(["width:37px;height:37px;margin-top:10px;display:block;"]);
const BackText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "BottomNav__BackText",
  componentId: "sc-49u4i5-3"
})(["font-family:'Montserrat',sans-serif;font-size:12px;color:#50514F;margin-bottom:10px;line-height:5px;"]);
const HomeCont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "BottomNav__HomeCont",
  componentId: "sc-49u4i5-4"
})(["text-align:center;"]);
const HomeImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "BottomNav__HomeImg",
  componentId: "sc-49u4i5-5"
})(["width:37px;height:37px;margin-top:9px;display:block;"]);
const HomeText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "BottomNav__HomeText",
  componentId: "sc-49u4i5-6"
})(["font-family:'Montserrat',sans-serif;font-size:12px;color:#50514F;margin-bottom:10px;line-height:5px;"]);
const UpCont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "BottomNav__UpCont",
  componentId: "sc-49u4i5-7"
})(["text-align:center;margin-right:27px;"]);
const UpImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "BottomNav__UpImg",
  componentId: "sc-49u4i5-8"
})(["width:37px;height:37px;margin-top:10px;display:block;"]);
const UpText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "BottomNav__UpText",
  componentId: "sc-49u4i5-9"
})(["font-family:'Montserrat',sans-serif;font-size:12px;color:#50514F;margin-bottom:10px;line-height:5px;"]);

const BottomNav = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomCont, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackCont, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackImg, {
        src: "/back.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackText, {
        children: "back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HomeCont, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HomeImg, {
        src: "/home.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HomeText, {
        children: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpCont, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpImg, {
        src: "/uparrow.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UpText, {
        children: "top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BottomNav);

/***/ }),

/***/ "./comps/Header/index.js":
/*!*******************************!*\
  !*** ./comps/Header/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\monta\\Documents\\BCITFILES\\MDIA2109\\revampcomps\\revamp\\revamp\\comps\\Header\\index.js";


const HeaderCont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__HeaderCont",
  componentId: "sc-7hkq8q-0"
})(["justify-content:center;text-align:center;color:#14455A;font-family:'Lexend Giga',sans-serif;padding:30px;max-width:250px;margin:0 auto;"]);
const HeaderInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "Header__HeaderInput",
  componentId: "sc-7hkq8q-1"
})(["font-family:'Lexend Giga',sans-serif;color:#14455A;text-align:center;margin:0 auto;"]);

const Header = ({
  text = "hello world"
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderCont, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderInput, {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./comps/TopNav/index.js":
/*!*******************************!*\
  !*** ./comps/TopNav/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\monta\\Documents\\BCITFILES\\MDIA2109\\revampcomps\\revamp\\revamp\\comps\\TopNav\\index.js";


const TopCont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TopNav__TopCont",
  componentId: "aoti1y-0"
})(["display:flex;background-color:#CCE6F4;font-family:'Lexend Giga',sans-serif;width:375px;height:81px;margin:0 auto;&>*{color:#50514F;}"]);
const HamMenu = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "TopNav__HamMenu",
  componentId: "aoti1y-1"
})(["width:38px;height:32px;margin-left:20px;margin:25px;"]);
const LogoCont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TopNav__LogoCont",
  componentId: "aoti1y-2"
})(["margin-top:21px;margin-left:35px;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "TopNav__Logo",
  componentId: "aoti1y-3"
})(["width:44px;height:35px;"]);
const Revamp = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "TopNav__Revamp",
  componentId: "aoti1y-4"
})(["font-family:'Lexend Giga',sans-serif;font-size:24px;color:#247BA0;text-align:center;margin-left:10px;"]);

const TopNav = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopCont, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HamMenu, {
      src: "/hammenu.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LogoCont, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Logo, {
        src: "/fashionrecycle.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Revamp, {
      children: "reVamp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TopNav);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_Header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Header/index */ "./comps/Header/index.js");
/* harmony import */ var _comps_BottomNav_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/BottomNav/index */ "./comps/BottomNav/index.js");
/* harmony import */ var _comps_TopNav_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/TopNav/index */ "./comps/TopNav/index.js");

var _jsxFileName = "C:\\Users\\monta\\Documents\\BCITFILES\\MDIA2109\\revampcomps\\revamp\\revamp\\pages\\index.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_comps_TopNav_index__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_comps_Header_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "what would you like to repurpose?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_comps_BottomNav_index__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcHMvQm90dG9tTmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wcy9Ub3BOYXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkJvdHRvbUNvbnQiLCJzdHlsZWQiLCJkaXYiLCJCYWNrQ29udCIsIkJhY2tJbWciLCJpbWciLCJCYWNrVGV4dCIsInAiLCJIb21lQ29udCIsIkhvbWVJbWciLCJIb21lVGV4dCIsIlVwQ29udCIsIlVwSW1nIiwiVXBUZXh0IiwiQm90dG9tTmF2IiwiSGVhZGVyQ29udCIsIkhlYWRlcklucHV0IiwiaDIiLCJIZWFkZXIiLCJ0ZXh0IiwiVG9wQ29udCIsIkhhbU1lbnUiLCJMb2dvQ29udCIsIkxvZ28iLCJSZXZhbXAiLCJUb3BOYXYiLCJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFp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WUFGSyxlQUdMLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUtELEM7Ozs7Ozs7Ozs7O0FDWEQsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBCb3R0b21Db250ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5jb2xvcjojMTQ0NTVBO1xyXG5mb250LWZhbWlseTogJ0xleGVuZCBHaWdhJywgc2Fucy1zZXJpZjtcclxud2lkdGg6IDM3NXB4O1xyXG5oZWlnaHQ6IDc1cHg7XHJcbmJveC1zaGFkb3c6IDBweCAtMnB4IDRweCByZ2JhKDAsMCwwLC4yNSk7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG5tYXJnaW4tdG9wOiAyMDBweDtcclxuJj4qIHtcclxuICAgIGNvbG9yOiAjNTA1MTRGO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBCYWNrQ29udCA9IHN0eWxlZC5kaXZgXHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luLWxlZnQ6IDI3cHg7XHJcbmBcclxuXHJcbmNvbnN0IEJhY2tJbWcgPSBzdHlsZWQuaW1nYFxyXG53aWR0aDogMzdweDtcclxuaGVpZ2h0OiAzN3B4O1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5kaXNwbGF5OiBibG9jaztcclxuYFxyXG5cclxuY29uc3QgQmFja1RleHQgPSBzdHlsZWQucGBcclxuZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5jb2xvcjogIzUwNTE0RjtcclxubWFyZ2luLWJvdHRvbTogMTBweDtcclxubGluZS1oZWlnaHQ6IDVweDtcclxuYFxyXG5cclxuY29uc3QgSG9tZUNvbnQgPSBzdHlsZWQuZGl2YFxyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEhvbWVJbWcgPSBzdHlsZWQuaW1nYFxyXG53aWR0aDogMzdweDtcclxuaGVpZ2h0OiAzN3B4O1xyXG5tYXJnaW4tdG9wOiA5cHg7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5gXHJcbmNvbnN0IEhvbWVUZXh0ID0gc3R5bGVkLnBgXHJcbmZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuY29sb3I6ICM1MDUxNEY7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmxpbmUtaGVpZ2h0OiA1cHg7XHJcbmBcclxuY29uc3QgVXBDb250ID0gc3R5bGVkLmRpdmBcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5tYXJnaW4tcmlnaHQ6IDI3cHg7XHJcbmBcclxuY29uc3QgVXBJbWcgPSBzdHlsZWQuaW1nYFxyXG53aWR0aDogMzdweDtcclxuaGVpZ2h0OiAzN3B4O1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5kaXNwbGF5OiBibG9jaztcclxuYFxyXG5jb25zdCBVcFRleHQgPSBzdHlsZWQucGBcclxuZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5jb2xvcjogIzUwNTE0RjtcclxubWFyZ2luLWJvdHRvbTogMTBweDtcclxubGluZS1oZWlnaHQ6IDVweDtcclxuYFxyXG5cclxuY29uc3QgQm90dG9tTmF2ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxCb3R0b21Db250PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCYWNrQ29udD5cclxuICAgICAgICA8QmFja0ltZyBzcmM9XCIvYmFjay5zdmdcIiAvPlxyXG4gICAgICAgIDxCYWNrVGV4dD5iYWNrPC9CYWNrVGV4dD5cclxuICAgICAgICA8L0JhY2tDb250PlxyXG4gICAgICAgIDxIb21lQ29udD5cclxuICAgICAgICA8SG9tZUltZyBzcmM9XCIvaG9tZS5zdmdcIiAvPlxyXG4gICAgICAgIDxIb21lVGV4dD5ob21lPC9Ib21lVGV4dD5cclxuICAgICAgICA8L0hvbWVDb250PlxyXG4gICAgICAgIDxVcENvbnQ+XHJcbiAgICAgICAgPFVwSW1nIHNyYz1cIi91cGFycm93LnN2Z1wiIC8+XHJcbiAgICAgICAgPFVwVGV4dD50b3A8L1VwVGV4dD5cclxuICAgICAgICA8L1VwQ29udD5cclxuICAgICAgICA8L0JvdHRvbUNvbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdHRvbU5hdjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEhlYWRlckNvbnQgPSBzdHlsZWQuZGl2YFxyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjojMTQ0NTVBO1xyXG5mb250LWZhbWlseTogJ0xleGVuZCBHaWdhJywgc2Fucy1zZXJpZjtcclxucGFkZGluZzogMzBweDtcclxubWF4LXdpZHRoOiAyNTBweDtcclxubWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJJbnB1dCA9IHN0eWxlZC5oMmBcclxuZm9udC1mYW1pbHk6ICdMZXhlbmQgR2lnYScsIHNhbnMtc2VyaWY7XHJcbmNvbG9yOiMxNDQ1NUE7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoe1xyXG50ZXh0PVwiaGVsbG8gd29ybGRcIlxyXG5cclxufSkgPT57XHJcbiAgICByZXR1cm4gPEhlYWRlckNvbnQ+XHJcbiAgICAgICAgPEhlYWRlcklucHV0PlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvSGVhZGVySW5wdXQ+XHJcbiAgICAgICAgPC9IZWFkZXJDb250PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBUb3BDb250ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuYmFja2dyb3VuZC1jb2xvcjogI0NDRTZGNDtcclxuZm9udC1mYW1pbHk6ICdMZXhlbmQgR2lnYScsIHNhbnMtc2VyaWY7XHJcbndpZHRoOiAzNzVweDtcclxuaGVpZ2h0OiA4MXB4O1xyXG5tYXJnaW46IDAgYXV0bztcclxuJj4qIHtcclxuICAgIGNvbG9yOiAjNTA1MTRGO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBIYW1NZW51ID0gc3R5bGVkLmltZ2Bcclxud2lkdGg6IDM4cHg7XHJcbmhlaWdodDogMzJweDtcclxubWFyZ2luLWxlZnQ6IDIwcHg7XHJcbm1hcmdpbjogMjVweDtcclxuYFxyXG5cclxuY29uc3QgTG9nb0NvbnQgPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjIxcHg7XHJcbm1hcmdpbi1sZWZ0OiAzNXB4O1xyXG5gXHJcblxyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbndpZHRoOiA0NHB4O1xyXG5oZWlnaHQ6IDM1cHg7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgUmV2YW1wID0gc3R5bGVkLnBgXHJcbmZvbnQtZmFtaWx5OiAnTGV4ZW5kIEdpZ2EnLCBzYW5zLXNlcmlmO1xyXG5mb250LXNpemU6IDI0cHg7XHJcbmNvbG9yOiAjMjQ3QkEwO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuYFxyXG5cclxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiA8VG9wQ29udD5cclxuICAgICAgICA8SGFtTWVudSBzcmM9XCIvaGFtbWVudS5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8TG9nb0NvbnQ+XHJcbiAgICAgICAgICAgIDxMb2dvIHNyYz1cIi9mYXNoaW9ucmVjeWNsZS5zdmdcIj48L0xvZ28+XHJcbiAgICAgICAgICAgIDwvTG9nb0NvbnQ+XHJcbiAgICAgICAgICAgIDxSZXZhbXA+cmVWYW1wPC9SZXZhbXA+XHJcbiAgICA8L1RvcENvbnQ+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2OyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXIvaW5kZXgnO1xyXG5pbXBvcnQgQm90dG9tTmF2IGZyb20gJy4uL2NvbXBzL0JvdHRvbU5hdi9pbmRleCc7XHJcbmltcG9ydCBUb3BOYXYgZnJvbSAnLi4vY29tcHMvVG9wTmF2L2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8VG9wTmF2IC8+XHJcbiAgICA8SGVhZGVyIHRleHQ9XCJ3aGF0IHdvdWxkIHlvdSBsaWtlIHRvIHJlcHVycG9zZT9cIi8+XHJcbiAgICA8Qm90dG9tTmF2IC8+XHJcbiAgPC9kaXY+XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9