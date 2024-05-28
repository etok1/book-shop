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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/constants.js */ \"./src/js/constants.js\");\n/* harmony import */ var _src_js_fetchData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/fetchData.js */ \"./src/js/fetchData.js\");\n\r\n\r\n// import styles from \"./src/css/styles.css\";\r\n\r\nconsole.log(\"API URL:\", _src_js_fetchData_js__WEBPACK_IMPORTED_MODULE_1__.urlApi);\r\n\r\nfunction automaticSlider() {\r\n  let activeSlide = 0;\r\n  setInterval(() => {\r\n    _src_js_constants_js__WEBPACK_IMPORTED_MODULE_0__.slides[activeSlide].classList.remove(\"active\");\r\n    _src_js_constants_js__WEBPACK_IMPORTED_MODULE_0__.arrows[activeSlide].classList.remove(\"active\");\r\n    activeSlide++;\r\n    if (activeSlide === _src_js_constants_js__WEBPACK_IMPORTED_MODULE_0__.allSlides) {\r\n      activeSlide = 0;\r\n    }\r\n    _src_js_constants_js__WEBPACK_IMPORTED_MODULE_0__.slides[activeSlide].classList.add(\"active\");\r\n    _src_js_constants_js__WEBPACK_IMPORTED_MODULE_0__.arrows[activeSlide].classList.add(\"active\");\r\n  }, 3000);\r\n}\r\n\r\nautomaticSlider();\r\n(0,_src_js_fetchData_js__WEBPACK_IMPORTED_MODULE_1__.renderCards)();\r\n\n\n//# sourceURL=webpack://src/./index.js?");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData),\n/* harmony export */   renderCards: () => (/* binding */ renderCards),\n/* harmony export */   urlApi: () => (/* binding */ urlApi)\n/* harmony export */ });\nconst apiKey = \"AIzaSyBr9B3Uw7C3Fi4NVVrg2ypGn2YRo7JewKU\";\r\nconst urlApi = `https://www.googleapis.com/books/v1/volumes?q='subject:Business'&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;\r\n\r\nclass Cart {\r\n  constructor() {\r\n    this.items = JSON.parse(localStorage.getItem(\"books\") || []);\r\n  }\r\n\r\n  toCart(item) {\r\n    this.items.push(item);\r\n    console.log(item);\r\n  }\r\n}\r\n\r\nclass bookCard {\r\n  constructor() {}\r\n}\r\n\r\nconst cart = new Cart();\r\n\r\nfunction addToCart() {\r\n  let count = 0;\r\n  const countSpan = document.querySelector(\".header__count\");\r\n  const toCartBtn = document.querySelectorAll(\".main__books-btn\");\r\n  toCartBtn.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      count++;\r\n      console.log(count);\r\n      console.log(\"clicked\");\r\n      btn.classList.add(\"clicked\");\r\n      btn.textContent = \"in the cart\";\r\n      countSpan.style.display = \"flex\";\r\n      countSpan.textContent = count;\r\n    });\r\n  });\r\n}\r\n\r\nasync function fetchData(url) {\r\n  try {\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    throw new Error(error);\r\n  }\r\n}\r\n\r\nasync function renderCards() {\r\n  const booksContainer = document.querySelector(\".main__books-options\");\r\n  const data = await fetchData(urlApi);\r\n\r\n  if (!data) {\r\n    return;\r\n  }\r\n\r\n  data.items.forEach((item) => {\r\n    const infoArray = item.volumeInfo;\r\n    const authors = infoArray.authors ? infoArray.authors.join(\", \") : \" \";\r\n    const image = infoArray.imageLinks\r\n      ? infoArray.imageLinks.thumbnail\r\n      : \"https://placehold.co/212x300\";\r\n\r\n    const title = infoArray.title;\r\n    const text = infoArray.description ? infoArray.description : \" \";\r\n    const price = item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : \"\";\r\n    const currency = item.saleInfo.listPrice\r\n      ? item.saleInfo.listPrice.currencyCode\r\n      : \"\";\r\n\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"main__books-option\");\r\n    card.innerHTML = `\r\n      <img class=\"main__books-cover\" src=\"${image}\" alt=\"book\"/>\r\n        <div class=\"main__books-book\">\r\n          <p>${authors}</p>\r\n          <h1>${title}</h1>\r\n          <div class=\"main__books-review\">\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <img src=\"./src/assets/star.svg\" alt=\"star\" />\r\n              <p>252 review</p>\r\n          </div>\r\n              <h2 class=\"main__books-annotation\">\r\n                  ${text}\r\n               </h2>\r\n                <p class=\"main__books-price\">${price} ${currency}</p>\r\n                 <button class=\"main__books-btn\">buy now</button>\r\n        </div>\r\n      `;\r\n\r\n    booksContainer.append(card);\r\n  });\r\n\r\n  addToCart();\r\n}\r\n\n\n//# sourceURL=webpack://src/./src/js/fetchData.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;