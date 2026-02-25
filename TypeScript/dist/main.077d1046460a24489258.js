/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/oop.ts"
/*!***********************!*\
  !*** ./src/js/oop.ts ***!
  \***********************/
() {

eval("{var User = /** @class */function () {\n  function User(name, age, gender) {\n    this.name = name;\n    this.age = age;\n    this.gender = gender;\n  }\n  User.prototype.showInfo = function () {\n    console.log(\"My name is \".concat(this.name, \". I'm \").concat(this.age, \" years old.\"));\n  };\n  User.prototype.toSting = function () {\n    return \"\".concat(this.name, \": \").concat(this.age);\n  };\n  return User;\n}();\nvar user = new User(\"Ivan Ivanov\", 19, \"male\");\nuser.showInfo();\nconsole.log(user.toSting());\n\n//# sourceURL=webpack://typescript/./src/js/oop.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/oop.ts"]();
/******/ 	
/******/ })()
;