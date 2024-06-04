/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/constants.js */ \"./src/js/constants.js\");\n/* harmony import */ var _src_js_fetchData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/fetchData.js */ \"./src/js/fetchData.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_js_fetchData_js__WEBPACK_IMPORTED_MODULE_2__]);\n_src_js_fetchData_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"API URL:\", _src_js_fetchData_js__WEBPACK_IMPORTED_MODULE_2__.urlApi);\r\nlet activeSlide = 0;\r\n\r\nfunction automaticSlider() {\r\n  _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.arrows.forEach((arrow, index) => {\r\n    arrow.addEventListener(\"click\", () => {\r\n      _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.slides[activeSlide].classList.remove(\"active\");\r\n      _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.arrows[activeSlide].classList.remove(\"active\");\r\n\r\n      activeSlide = index;\r\n\r\n      _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.arrows[activeSlide].classList.add(\"active\");\r\n      _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.slides[activeSlide].classList.add(\"active\");\r\n    });\r\n  });\r\n\r\n  setInterval(() => {\r\n    _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.slides[activeSlide].classList.remove(\"active\");\r\n    _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.arrows[activeSlide].classList.remove(\"active\");\r\n    activeSlide++;\r\n    if (activeSlide === _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.allSlides) {\r\n      activeSlide = 0;\r\n    }\r\n\r\n    _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.slides[activeSlide].classList.add(\"active\");\r\n    _src_js_constants_js__WEBPACK_IMPORTED_MODULE_1__.arrows[activeSlide].classList.add(\"active\");\r\n  }, 5000);\r\n}\r\n\r\nautomaticSlider();\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://src/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.png */ \"./src/assets/bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg2.png */ \"./src/assets/bg2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg3.png */ \"./src/assets/bg3.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --light-black: #1c2a39;\r\n  --dark-grey: #5c6a79;\r\n  --purple-color: #534fd2;\r\n  --white-color: #ffffff;\r\n  --lavender-color: #9e98dc;\r\n  --pink-color: #ff8fe6;\r\n  --scarlett-color: #7b1010;\r\n  --light-pink: #efeef6;\r\n  --purple-dark: #4c3db2;\r\n  --light-grey: #eeedf5;\r\n  --orange-color: #ff353a;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  text-decoration: none;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.wrapper {\r\n  width: 1440px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container {\r\n  width: 1120px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* header */\r\n.header {\r\n  background-color: var(--white-color);\r\n  top: 0;\r\n  position: sticky;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  height: 116px;\r\n  /* width: 100%; */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  z-index: 100;\r\n}\r\n\r\n.header__logo h1 {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  text-transform: capitalize;\r\n  color: var(--light-black);\r\n}\r\n\r\n.header__nav-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 25px;\r\n}\r\n\r\n.header__nav-link {\r\n  font-size: 15px;\r\n  color: var(--dark-grey);\r\n  font-weight: bold;\r\n  transition: color 0.3s ease-in-out;\r\n}\r\n\r\n.header__nav-link:hover {\r\n  color: var(--light-black);\r\n}\r\n\r\n.header__nav-link.active {\r\n  color: var(--light-black);\r\n}\r\n\r\n.header__menu {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 35px;\r\n}\r\n\r\n.header__menu button {\r\n  cursor: pointer;\r\n}\r\n\r\n.header__menu-cart {\r\n  position: relative;\r\n}\r\n\r\n.header__count {\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 10px;\r\n  color: var(--white-color);\r\n  font-weight: 500;\r\n  height: 13px;\r\n  width: 13px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 5px;\r\n  background-color: var(--orange-color);\r\n  text-align: center;\r\n  /* padding: 3px; */\r\n  border-radius: 50%;\r\n}\r\n\r\n/* main */\r\n/* section news */\r\n\r\n.main {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n.main__news-info {\r\n  display: none;\r\n  width: 1120px;\r\n  height: 702px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 150%;\r\n  position: relative;\r\n}\r\n\r\n.main__news-info2 {\r\n  display: none;\r\n  width: 1120px;\r\n  height: 702px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.main__news-info3 {\r\n  display: none;\r\n  width: 1120px;\r\n  height: 702px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.slides.active {\r\n  display: flex;\r\n}\r\n\r\n.main__news-heading3 {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.main__news-heading3 h1 {\r\n  font-size: 45px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n\r\n.main__news-heading3 h2 {\r\n  text-align: center;\r\n  color: var(--white-color);\r\n  font-size: 90px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  text-shadow: 7px 6px var(--scarlett-color);\r\n}\r\n\r\n.main__news-heading {\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.main__news-heading2 {\r\n  position: absolute;\r\n  top: 35%;\r\n  left: 80%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.main__news-heading2 h1 {\r\n  font-size: 18px;\r\n  color: var(--light-black);\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.main__news-heading h2 {\r\n  font-size: 25px;\r\n  color: var(--light-black);\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.main__news-sale {\r\n  display: flex;\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.main__news-top {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 26%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.main__news-top h2 {\r\n  color: var(--white-color);\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n  text-shadow: 7px 6px var(--purple-color);\r\n}\r\n\r\n.main__news-top__text {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.main__news-top__text p {\r\n  font-size: 160px;\r\n  color: var(--white-color);\r\n\r\n  font-weight: bold;\r\n  text-shadow: 10px 6px var(--purple-color);\r\n}\r\n\r\n.main__news-sale h3 {\r\n  font-size: 60px;\r\n  color: var(--purple-color);\r\n  font-weight: bold;\r\n}\r\n\r\n.main__news-sale p {\r\n  font-size: 160px;\r\n  font-weight: bold;\r\n  color: var(--white-color);\r\n  text-shadow: 10px 9px var(--purple-color);\r\n}\r\n\r\n.main__news-image {\r\n  position: absolute;\r\n  left: 5%;\r\n  top: 35%;\r\n}\r\n\r\n.main__news-nav1 {\r\n  position: absolute;\r\n  left: 93%;\r\n  top: 10%;\r\n  background-color: var(--lavender-color);\r\n  padding: 15px 20px;\r\n  width: 149px;\r\n  height: 204px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.main__news-nav2 {\r\n  position: absolute;\r\n  left: 105%;\r\n  top: 60%;\r\n  background-color: var(--pink-color);\r\n  padding: 15px 20px;\r\n  width: 149px;\r\n  height: 204px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.main__news-nav1 h1 {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  color: var(--light-black);\r\n}\r\n\r\n.main__news-nav2 h1 {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  color: var(--light-black);\r\n}\r\n\r\n/* main arrow  */\r\n.main__news-arrows {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  gap: 10px;\r\n}\r\n\r\n.main__news-arrow {\r\n  cursor: pointer;\r\n}\r\n\r\n.main__news-arrow.active circle {\r\n  fill: var(--lavender-color);\r\n}\r\n\r\n/* main books */\r\n\r\n.main__books {\r\n  margin-top: 150px;\r\n  display: flex;\r\n}\r\n\r\n.main__books-sorting {\r\n  height: 710px;\r\n  width: 416px;\r\n  background-color: var(--light-pink);\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: -12%;\r\n  justify-content: center;\r\n}\r\n\r\n.main__books-sorting ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 25px;\r\n}\r\n\r\n.main__books-genre.active {\r\n  list-style: circle;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: var(--light-black);\r\n}\r\n\r\n.main__books-genre {\r\n  color: var(--dark-grey);\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 1s;\r\n}\r\n\r\n.main__books-genre:hover {\r\n  list-style: circle;\r\n\r\n  font-weight: bold;\r\n  color: var(--light-black);\r\n}\r\n\r\n.main__books-options {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 45px;\r\n}\r\n\r\n.main__books-option {\r\n  width: 424px;\r\n  height: 300px;\r\n  display: flex;\r\n  margin-left: -15%;\r\n  gap: 25px;\r\n}\r\n\r\n.main__books-cover {\r\n  width: 212px;\r\n  height: 300px;\r\n}\r\n\r\n.main__books-book {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.main__books-book p {\r\n  font-size: 10px;\r\n  color: var(--dark-grey);\r\n}\r\n\r\n.main__books-book h1 {\r\n  font-size: 16px;\r\n  color: var(--light-black);\r\n  font-weight: bold;\r\n}\r\n\r\n.main__books-review {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.main__books-review p {\r\n  font-size: 10px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.main__books-annotation {\r\n  height: 38px;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n  text-overflow: ellipsis;\r\n  font-size: 10px;\r\n  line-height: 13px;\r\n}\r\n\r\n.main__books-price {\r\n  font-size: 13px !important;\r\n  color: var(--light-black) !important;\r\n  font-weight: bold;\r\n}\r\n\r\n.main__books-btn {\r\n  color: var(--purple-dark);\r\n  width: 100%;\r\n  padding: 18px 0 18px 0;\r\n  font-size: 8px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  border: 1px solid var(--purple-dark);\r\n  cursor: pointer;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n.main__books-btn:hover,\r\n.main__books-btn.clicked {\r\n  color: var(--dark-grey);\r\n  border: 1px solid var(--light-grey);\r\n}\r\n\r\n.main__books-load {\r\n  margin-top: 6%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.main__books-load-btn {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  text-transform: uppercase;\r\n  color: var(--purple-color);\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  border: 2px solid var(--purple-color);\r\n  padding: 15px 40px;\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://src/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://src/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://src/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://src/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://src/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://src/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allSlides: () => (/* binding */ allSlides),\n/* harmony export */   arrows: () => (/* binding */ arrows),\n/* harmony export */   sliderSection: () => (/* binding */ sliderSection),\n/* harmony export */   slides: () => (/* binding */ slides)\n/* harmony export */ });\n// section 1\r\nconst sliderSection = document.querySelector(\".main__slider\");\r\nconst slides = document.querySelectorAll(\".slides\");\r\nconst arrows = document.querySelectorAll(\".main__news-arrow\");\r\nconst allSlides = slides.length;\r\n\n\n//# sourceURL=webpack://src/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/fetchData.js":
/*!*****************************!*\
  !*** ./src/js/fetchData.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookCard: () => (/* binding */ BookCard),\n/* harmony export */   addToCart: () => (/* binding */ addToCart),\n/* harmony export */   books: () => (/* binding */ books),\n/* harmony export */   booksContainer: () => (/* binding */ booksContainer),\n/* harmony export */   fetchData: () => (/* binding */ fetchData),\n/* harmony export */   increaseCount: () => (/* binding */ increaseCount),\n/* harmony export */   renderCards: () => (/* binding */ renderCards),\n/* harmony export */   urlApi: () => (/* binding */ urlApi)\n/* harmony export */ });\n/* harmony import */ var _saving_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saving.js */ \"./src/js/saving.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ \"./src/js/filter.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_saving_js__WEBPACK_IMPORTED_MODULE_0__]);\n_saving_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\nconst apiKey = \"AIzaSyBr9B3Uw7C3Fi4NVVrg2ypGn2YRo7JewKU\";\r\nconst urlApi = `https://www.googleapis.com/books/v1/volumes?q='subject:Business'&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;\r\n\r\nclass BookCard {\r\n  constructor(\r\n    id,\r\n    title,\r\n    authors,\r\n    description,\r\n    image,\r\n    price,\r\n    currency,\r\n    categories,\r\n    rating\r\n  ) {\r\n    this.id = id;\r\n    this.title = title;\r\n    this.authors = authors;\r\n    this.description = description;\r\n    this.image = image;\r\n    this.price = price;\r\n    this.currency = currency;\r\n    this.categories = categories;\r\n\r\n    this.isAdded = false;\r\n    this.rating = rating;\r\n  }\r\n\r\n  render() {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"main__books-option\");\r\n    card.setAttribute(\"data-category\", this.categories);\r\n    card.setAttribute(\"data-id\", this.id);\r\n\r\n    const getCart = localStorage.getItem(\"shoppingCart\");\r\n    const cart = JSON.parse(getCart) || [];\r\n    const checkedCart = cart.includes(this.id);\r\n\r\n    card.innerHTML = `\r\n      <img class=\"main__books-cover\" src=\"${this.image}\" alt=\"book\"/>\r\n        <div class=\"main__books-book\">\r\n          <p>${this.authors}</p>\r\n          <h1>${this.title}</h1>\r\n          <div class=\"main__books-review\" style=\"${\r\n            !this.rating ? \"display: none\" : \"display: flex\"\r\n          }\">\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <p>252 review</p>\r\n          </div>\r\n              <h2 class=\"main__books-annotation\">\r\n                  ${this.description}\r\n               </h2>\r\n                <p class=\"main__books-price\"><span>${this.currency} </span>${\r\n      this.price\r\n    }</p>\r\n                 <button class=\"main__books-btn ${\r\n                   checkedCart ? \"clicked\" : \" \"\r\n                 }\">${checkedCart ? \"in the cart\" : \"buy now\"}</button>\r\n        </div>\r\n      `;\r\n\r\n    return card;\r\n  }\r\n\r\n  isAddedToCart() {\r\n    if (!this.isAdded) {\r\n      this.isAdded = true;\r\n      console.log(this.isAdded);\r\n    }\r\n  }\r\n}\r\n\r\nconst booksContainer = document.querySelector(\".main__books-options\");\r\nconst getCart = localStorage.getItem(\"shoppingCart\");\r\nconst cart = JSON.parse(getCart) || [];\r\nconst books = [];\r\n\r\nfunction increaseCount() {\r\n  const countSpan = document.querySelector(\".header__count\");\r\n  let countSaved = parseInt(localStorage.getItem(\"count\")) || 0;\r\n  countSaved++;\r\n  countSpan.style.display = \"flex\";\r\n  countSpan.textContent = countSaved;\r\n  (0,_saving_js__WEBPACK_IMPORTED_MODULE_0__.saveCount)(countSaved);\r\n  console.log(countSaved);\r\n}\r\n\r\nfunction addToCart() {\r\n  const toCartBtn = document.querySelectorAll(\".main__books-btn\");\r\n  toCartBtn.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      const card = btn.closest(\".main__books-option\");\r\n      console.log(card);\r\n      increaseCount();\r\n      console.log(\"clicked\");\r\n      btn.classList.add(\"clicked\");\r\n      btn.textContent = \"in the cart\";\r\n\r\n      const id = card.dataset.id;\r\n      cart.push(id);\r\n      (0,_saving_js__WEBPACK_IMPORTED_MODULE_0__.saveCart)(cart);\r\n    });\r\n  });\r\n}\r\n\r\nasync function fetchData(url) {\r\n  try {\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    throw new Error(error);\r\n  }\r\n}\r\n\r\nasync function renderCards() {\r\n  const data = await fetchData(urlApi);\r\n\r\n  if (!data) {\r\n    return;\r\n  }\r\n\r\n  data.items.forEach((item) => {\r\n    const infoArray = item.volumeInfo;\r\n    const id = item.id;\r\n    const authors = infoArray.authors ? infoArray.authors.join(\", \") : \" \";\r\n    const image = infoArray.imageLinks\r\n      ? infoArray.imageLinks.thumbnail\r\n      : \"https://placehold.co/212x300\";\r\n\r\n    const title = infoArray.title;\r\n    const text = infoArray.description ? infoArray.description : \" \";\r\n    const price = item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : \"\";\r\n    const currency = item.saleInfo.listPrice\r\n      ? item.saleInfo.listPrice.currencyCode\r\n      : \"\";\r\n\r\n    const category = infoArray.categories ? infoArray.categories : \"\";\r\n    const rating = infoArray.ratingsCount ? infoArray.ratingsCount : \"\";\r\n\r\n    const bookCard = new BookCard(\r\n      id,\r\n      title,\r\n      authors,\r\n      text,\r\n      image,\r\n      price,\r\n      currency,\r\n      category,\r\n      rating\r\n    );\r\n\r\n    books.push(bookCard);\r\n    (0,_saving_js__WEBPACK_IMPORTED_MODULE_0__.saveBooks)(books);\r\n\r\n    console.log(books);\r\n    booksContainer.append(bookCard.render());\r\n  });\r\n\r\n  addToCart();\r\n}\r\n\r\nfunction loadMore() {\r\n  const btns = document.querySelector(\".main__books-load-btn\");\r\n\r\n  btns.addEventListener(\"click\", () => {\r\n    renderCards();\r\n  });\r\n}\r\n\r\nconst checkBooksString = localStorage.getItem(\"books\");\r\nconst checkBooks = checkBooksString ? JSON.parse(checkBooksString) : [];\r\n\r\nif (checkBooks.length === 0) {\r\n  await renderCards();\r\n  loadMore();\r\n  (0,_filter_js__WEBPACK_IMPORTED_MODULE_1__.filter)();\r\n  console.log(\"NOT from local storage rendered\");\r\n} else {\r\n  (0,_saving_js__WEBPACK_IMPORTED_MODULE_0__.getBooks)();\r\n  (0,_filter_js__WEBPACK_IMPORTED_MODULE_1__.filter)();\r\n  loadMore();\r\n}\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://src/./src/js/fetchData.js?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filter: () => (/* binding */ filter)\n/* harmony export */ });\nfunction filter() {\r\n  const listCategories = document.querySelectorAll(\".main__books-genre\");\r\n  const books = document.querySelectorAll(\".main__books-option\");\r\n\r\n  listCategories.forEach((category) => {\r\n    category.addEventListener(\"click\", () => {\r\n      listCategories.forEach((noactive) => {\r\n        noactive.classList.remove(\"active\");\r\n      });\r\n      category.classList.add(\"active\");\r\n      const element = category.textContent;\r\n      books.forEach((book) => {\r\n        const categoryCard = book.dataset.category;\r\n        if (categoryCard.includes(element)) {\r\n          book.style.display = \"flex\";\r\n        } else {\r\n          book.style.display = \"none\";\r\n        }\r\n      });\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://src/./src/js/filter.js?");

/***/ }),

/***/ "./src/js/saving.js":
/*!**************************!*\
  !*** ./src/js/saving.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBooks: () => (/* binding */ getBooks),\n/* harmony export */   saveBooks: () => (/* binding */ saveBooks),\n/* harmony export */   saveCart: () => (/* binding */ saveCart),\n/* harmony export */   saveCount: () => (/* binding */ saveCount)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/js/fetchData.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fetchData_js__WEBPACK_IMPORTED_MODULE_0__]);\n_fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\nfunction saveCart(cart) {\r\n  localStorage.setItem(\"shoppingCart\", JSON.stringify(cart));\r\n}\r\n\r\nfunction saveBooks(books) {\r\n  localStorage.setItem(\"books\", JSON.stringify(books));\r\n}\r\n\r\nfunction saveCount(count) {\r\n  localStorage.setItem(\"count\", JSON.stringify(count));\r\n}\r\n\r\nfunction getBooks() {\r\n  const books = JSON.parse(localStorage.getItem(\"books\"));\r\n  const count = parseInt(localStorage.getItem(\"count\"));\r\n  const countSpan = document.querySelector(\".header__count\");\r\n\r\n  if (count > 0) {\r\n    countSpan.style.display = \"flex\";\r\n    countSpan.textContent = count;\r\n  }\r\n\r\n  console.log(books);\r\n\r\n  books.forEach((book) => {\r\n    const bookCard = new _fetchData_js__WEBPACK_IMPORTED_MODULE_0__.BookCard(\r\n      book.id,\r\n      book.title,\r\n      book.authors,\r\n      book.description,\r\n      book.image,\r\n      book.price,\r\n      book.currency,\r\n      book.categories\r\n    );\r\n    _fetchData_js__WEBPACK_IMPORTED_MODULE_0__.booksContainer.append(bookCard.render());\r\n  });\r\n\r\n  (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__.addToCart)();\r\n\r\n  console.log(\"from local storage rendered\");\r\n}\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://src/./src/js/saving.js?");

/***/ }),

/***/ "./src/assets/bg.png":
/*!***************************!*\
  !*** ./src/assets/bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5dc4454af9d62bc2895.png\";\n\n//# sourceURL=webpack://src/./src/assets/bg.png?");

/***/ }),

/***/ "./src/assets/bg2.png":
/*!****************************!*\
  !*** ./src/assets/bg2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8afcd3048e7021e9efd2.png\";\n\n//# sourceURL=webpack://src/./src/assets/bg2.png?");

/***/ }),

/***/ "./src/assets/bg3.png":
/*!****************************!*\
  !*** ./src/assets/bg3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57a71a7520d94902ed3b.png\";\n\n//# sourceURL=webpack://src/./src/assets/bg3.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;