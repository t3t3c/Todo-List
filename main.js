/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* fonts */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* I had a problem with events targeting the children of elements */\r\n/* solution from */\r\n/* https://css-tricks.com/slightly-careful-sub-elements-clickable-things/ */\r\n/* I don't like the idea of solving it outside of JS */\r\n/* but I would have to refactor a lot of code */\r\n\r\nbutton > *,\r\np {\r\n  pointer-events: none;\r\n}\r\n\r\n:root {\r\n  /* custom properties */\r\n  /* Made based on atom one dark theme */\r\n  /* --buttons-color: #596d48; */\r\n  /* --shadow-specs: 5px 5px 5px var(--shadow-color); */\r\n  --background-color: #282c34;\r\n  --highlight-color: #e5c07b;\r\n  --negative-color: #e06c75;\r\n  --positive-color: #98c379;\r\n  --white-color: #f3f4f6;\r\n  --light-color: #dcdfe4;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-rows: 80px 1fr 60px;\r\n}\r\n\r\n#content {\r\n  margin: 10px 50px;\r\n}\r\nheader {\r\n  background-color: var(--background-color);\r\n  color: var(--white-color);\r\n  padding: 10px 20px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  grid-column: 1 / -1;\r\n}\r\n\r\nbutton {\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  outline: 1px solid var(--background-color);\r\n}\r\nbutton:active {\r\n  outline: 2px solid var(--background-color);\r\n}\r\n\r\ninput {\r\n  border: 1px solid var(--highlight-color);\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ninput:focus {\r\n  outline: 1px solid var(--highlight-color);\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo h1 {\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 900;\r\n  padding-left: 20px;\r\n  font-size: 35px;\r\n}\r\n\r\n.logo span {\r\n  font-size: 35px;\r\n}\r\n\r\n/* project-tiles: */\r\n\r\n/* nav {\r\n  display: flex;\r\n  flex: 0;\r\n  flex-direction: column;\r\n} */\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  color: #282c34;\r\n  font-size: 1.3rem;\r\n  font-weight: 900;\r\n  background-color: var(--light-color);\r\n  padding: 20px;\r\n}\r\n\r\nnav h2 {\r\n  text-align: center;\r\n  width: 100%;\r\n  background-color: var(--white-color);\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\nnav div#projects-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\nnav div.project-tile {\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nnav div.project-tile.active {\r\n  background-color: var(--white-color);\r\n}\r\n\r\nnav div.project-tile.active p {\r\n  font-weight: 900;\r\n}\r\n\r\nnav div.project-tile p {\r\n  padding: 10px;\r\n  font-weight: 400;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nnav div.project-tile:hover {\r\n  outline: 1px solid var(--background-color);\r\n}\r\n\r\nbutton#add-project {\r\n  background-color: var(--highlight-color);\r\n  width: 50%;\r\n}\r\n\r\n/* forms */\r\n\r\nform#project-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nform#input-form {\r\n  flex-direction: row-reverse;\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\nform#input-form input {\r\n  flex-grow: 1;\r\n}\r\n\r\nfooter {\r\n  font-size: 0.9rem;\r\n  color: var(--white-color);\r\n  background-color: var(--background-color);\r\n\r\n  grid-column: 1 / -1;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.task-tile {\r\n  border-radius: 10px;\r\n  padding: 10px 20px;\r\n  margin: 10px 10px;\r\n  background-color: var(--light-color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nbutton.task-delete-button:active {\r\n  background-color: var(--positive-color);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;;AAIV;EACE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,mEAAmE;AACnE,kBAAkB;AAClB,2EAA2E;AAC3E,sDAAsD;AACtD,+CAA+C;;AAE/C;;EAEE,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,sCAAsC;EACtC,8BAA8B;EAC9B,qDAAqD;EACrD,2BAA2B;EAC3B,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;;EAE/B,aAAa;EACb,aAAa;EACb,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,yCAAyC;EACzC,yBAAyB;EACzB,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;;EAEnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA,mBAAmB;;AAEnB;;;;GAIG;;AAEH;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,oCAAoC;EACpC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,UAAU;AACZ;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,yCAAyC;;EAEzC,mBAAmB;;EAEnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,oCAAoC;EACpC,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,uCAAuC;AACzC","sourcesContent":["/* fonts */\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* I had a problem with events targeting the children of elements */\r\n/* solution from */\r\n/* https://css-tricks.com/slightly-careful-sub-elements-clickable-things/ */\r\n/* I don't like the idea of solving it outside of JS */\r\n/* but I would have to refactor a lot of code */\r\n\r\nbutton > *,\r\np {\r\n  pointer-events: none;\r\n}\r\n\r\n:root {\r\n  /* custom properties */\r\n  /* Made based on atom one dark theme */\r\n  /* --buttons-color: #596d48; */\r\n  /* --shadow-specs: 5px 5px 5px var(--shadow-color); */\r\n  --background-color: #282c34;\r\n  --highlight-color: #e5c07b;\r\n  --negative-color: #e06c75;\r\n  --positive-color: #98c379;\r\n  --white-color: #f3f4f6;\r\n  --light-color: #dcdfe4;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-rows: 80px 1fr 60px;\r\n}\r\n\r\n#content {\r\n  margin: 10px 50px;\r\n}\r\nheader {\r\n  background-color: var(--background-color);\r\n  color: var(--white-color);\r\n  padding: 10px 20px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  grid-column: 1 / -1;\r\n}\r\n\r\nbutton {\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  outline: 1px solid var(--background-color);\r\n}\r\nbutton:active {\r\n  outline: 2px solid var(--background-color);\r\n}\r\n\r\ninput {\r\n  border: 1px solid var(--highlight-color);\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ninput:focus {\r\n  outline: 1px solid var(--highlight-color);\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo h1 {\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 900;\r\n  padding-left: 20px;\r\n  font-size: 35px;\r\n}\r\n\r\n.logo span {\r\n  font-size: 35px;\r\n}\r\n\r\n/* project-tiles: */\r\n\r\n/* nav {\r\n  display: flex;\r\n  flex: 0;\r\n  flex-direction: column;\r\n} */\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  color: #282c34;\r\n  font-size: 1.3rem;\r\n  font-weight: 900;\r\n  background-color: var(--light-color);\r\n  padding: 20px;\r\n}\r\n\r\nnav h2 {\r\n  text-align: center;\r\n  width: 100%;\r\n  background-color: var(--white-color);\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\nnav div#projects-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\nnav div.project-tile {\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nnav div.project-tile.active {\r\n  background-color: var(--white-color);\r\n}\r\n\r\nnav div.project-tile.active p {\r\n  font-weight: 900;\r\n}\r\n\r\nnav div.project-tile p {\r\n  padding: 10px;\r\n  font-weight: 400;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nnav div.project-tile:hover {\r\n  outline: 1px solid var(--background-color);\r\n}\r\n\r\nbutton#add-project {\r\n  background-color: var(--highlight-color);\r\n  width: 50%;\r\n}\r\n\r\n/* forms */\r\n\r\nform#project-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nform#input-form {\r\n  flex-direction: row-reverse;\r\n  margin: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\nform#input-form input {\r\n  flex-grow: 1;\r\n}\r\n\r\nfooter {\r\n  font-size: 0.9rem;\r\n  color: var(--white-color);\r\n  background-color: var(--background-color);\r\n\r\n  grid-column: 1 / -1;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.task-tile {\r\n  border-radius: 10px;\r\n  padding: 10px 20px;\r\n  margin: 10px 10px;\r\n  background-color: var(--light-color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nbutton.task-delete-button:active {\r\n  background-color: var(--positive-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/myDOM.js":
/*!**********************!*\
  !*** ./src/myDOM.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myDOM": () => (/* binding */ myDOM)
/* harmony export */ });
const myDOM = (() => {
  const content = document.querySelector('#content');
  const addNewTaskButton = () => {
    const newTaskButton = document.createElement('button');
    newTaskButton.id = 'new-task';
    newTaskButton.innerText = 'Add new task';
    content.appendChild(newTaskButton);
  };
  return { addNewTaskButton };
})();




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
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _myDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myDOM.js */ "./src/myDOM.js");



class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(taskName) {
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.title === taskName) {
        this.tasks.splice(i, 1);
        // we don't want to delete more than one:
        break;
      }
    }
  }
}

class Storage {
  static projects = [];
  static currentProject = null;
  static addProject(newProject) {
    Storage.projects.push(newProject);
  }
  static removeProject(projectName) {
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];
      if (project.name === projectName) {
        this.projects.splice(i, 1);
        // we don't want to delete more than one:
        break;
      }
    }
  }

  static returnProject(projectName) {
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];
      if (project.name === projectName) {
        return project;
      }
    }
    return null;
  }
  static changeActiveProject(projectName) {
    Storage.currentProject = Storage.returnProject(projectName);
  }
}
class UI {
  static clearContent() {
    const inputForm = document.querySelector('#input-form');
    if (inputForm !== null) {
      inputForm.remove();
    }
  }
  static addInput() {
    // add Container for the input
    const content = document.querySelector('#content');
    const inputForm = document.createElement('form');
    inputForm.id = 'input-form';
    content.appendChild(inputForm);

    // add button to send  the form
    const button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Add task';
    inputForm.appendChild(button);

    // add input field
    const input = document.createElement('input');
    input.id = 'task-title';
    inputForm.appendChild(input);

    // add container for Task's tiles:
    const tilesContainer = document.createElement('div');
    tilesContainer.id = 'tiles-container';
    content.appendChild(tilesContainer);
  }
  static createTaskTile(task) {
    // tile
    const taskTile = document.createElement('div');
    taskTile.className = 'task-tile';
    // text
    const text = document.createElement('p');
    text.innerText = task.title;
    taskTile.appendChild(text);
    // delete button:
    const deleteButton = document.createElement('button');
    const doneTick = document.createElement('span');
    doneTick.className = 'material-icons';
    doneTick.innerText = 'done';
    deleteButton.appendChild(doneTick);
    deleteButton.className = 'task-delete-button';
    // add delete function to the button:
    taskTile.appendChild(deleteButton);
    return taskTile;
  }

  static removeTile(taskTile) {
    taskTile.remove();
  }

  static displayTasks(project) {
    const tilesContainer = document.querySelector('#tiles-container');
    // Clear tiles Container
    tilesContainer.innerHTML = '';
    // Show all project's tasks:
    for (const task of project.tasks) {
      const taskTile = UI.createTaskTile(task);
      tilesContainer.appendChild(taskTile);
    }
  }
  static clearTaskInput() {
    document.querySelector('#task-title').value = '';
  }
  static addProjectInput() {
    const existingForm = document.querySelector('#project-form');
    if (existingForm !== null) {
      existingForm.remove();
    }
    const container = document.querySelector('#projects-container');
    const form = document.createElement('form');
    form.id = 'project-form';
    const button = document.createElement('button');
    button.className = 'project-button';
    button.innerText = 'Add';
    const input = document.createElement('input');
    input.className = 'project-input';

    form.appendChild(input);
    form.appendChild(button);
    container.appendChild(form);
    input.focus();
  }
  static hideProjectInput() {
    document.querySelector('#project-form').remove();
  }
  static createProjectTile(project) {
    const newProjectTile = document.createElement('div');
    newProjectTile.className = 'project-tile';
    // add text:
    const text = document.createElement('p');
    text.innerText = project.name;
    newProjectTile.appendChild(text);
    // create delete button:
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.classList = 'project-delete-button';
    newProjectTile.appendChild(deleteButton);
    return newProjectTile;
  }
  static displayProjects() {
    const projectsContainer = document.querySelector('#projects-container');
    projectsContainer.innerHTML = '';
    for (const project of Storage.projects) {
      // create new tile:
      const newProjectTile = UI.createProjectTile(project);
      projectsContainer.appendChild(newProjectTile);
    }
  }
  static addProject(project) {
    const projectsContainer = document.querySelector('#projects-container');
    const newProjectTile = UI.createProjectTile(project);
    projectsContainer.appendChild(newProjectTile);
  }
  static changeActiveProject(target) {
    const currentActive = document.querySelector('.active');
    if (currentActive !== null) {
      currentActive.classList.remove('active');
    }
    target.classList.add('active');
  }
  static displayActiveProject(projectName) {
    const display = document.querySelector('#active-project-display');
    display.innerText = projectName;
  }
}

// code that needs to work now for testing:
UI.displayActiveProject('Add new project and select it to start!');

//Main body:
function addButtonForTasks(event) {
  // Prevent actual submit
  event.preventDefault();

  // get form value:
  let taskTitle = document.querySelector('#task-title').value;
  if (taskTitle === '') {
    taskTitle = 'Do nothing...';
  }
  // add task:
  const newTask = new Task(taskTitle);
  Storage.currentProject.addTask(newTask);
  UI.displayTasks(Storage.currentProject);
  UI.clearTaskInput();
}
addGlobalEventListener('submit', '#input-form', addButtonForTasks);

function deleteButtonForTasks(event) {
  UI.removeTile(event.target.parentElement);
  const taskName = event.target.parentElement.firstChild.innerText;
  Storage.currentProject.removeTask(taskName);
}
addGlobalEventListener('click', '.task-delete-button', deleteButtonForTasks);

function deleteButtonForProjects(event) {
  UI.removeTile(event.target.parentElement);
  const projectName = event.target.parentElement.firstChild.innerText;
  Storage.removeProject(projectName);
  // if we delete a current project
  if (Storage.currentProject.name === projectName) {
    UI.clearContent();
    UI.displayActiveProject('Choose a project');
  }
}
addGlobalEventListener(
  'click',
  '.project-delete-button',
  deleteButtonForProjects
);

addGlobalEventListener('click', '#add-project', UI.addProjectInput);

function addButtonForProjects(event) {
  event.preventDefault();

  let inputText = document.querySelector('.project-input').value;
  if (inputText === '') {
    inputText = 'Unnamed';
  }
  // cannot have two projects with the same name
  if (Storage.returnProject(inputText) === null) {
    const newProject = new Project(inputText);
    Storage.addProject(newProject);
    UI.hideProjectInput();
    UI.addProject(newProject);
  } else {
    alert("Projects' names must be unique");
  }
}
addGlobalEventListener('submit', '#project-form', addButtonForProjects);

// function to wrap event listeners
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}
function changeCurrentProject(event) {
  UI.clearContent();
  UI.addInput();
  const projectName = event.target.firstChild.innerText;
  Storage.changeActiveProject(projectName);
  UI.changeActiveProject(event.target);
  UI.displayActiveProject(projectName);
  UI.displayTasks(Storage.currentProject);
}
addGlobalEventListener('click', '.project-tile', changeCurrentProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbXlET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogZm9udHMgKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIEkgaGFkIGEgcHJvYmxlbSB3aXRoIGV2ZW50cyB0YXJnZXRpbmcgdGhlIGNoaWxkcmVuIG9mIGVsZW1lbnRzICovXFxyXFxuLyogc29sdXRpb24gZnJvbSAqL1xcclxcbi8qIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc2xpZ2h0bHktY2FyZWZ1bC1zdWItZWxlbWVudHMtY2xpY2thYmxlLXRoaW5ncy8gKi9cXHJcXG4vKiBJIGRvbid0IGxpa2UgdGhlIGlkZWEgb2Ygc29sdmluZyBpdCBvdXRzaWRlIG9mIEpTICovXFxyXFxuLyogYnV0IEkgd291bGQgaGF2ZSB0byByZWZhY3RvciBhIGxvdCBvZiBjb2RlICovXFxyXFxuXFxyXFxuYnV0dG9uID4gKixcXHJcXG5wIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAvKiBjdXN0b20gcHJvcGVydGllcyAqL1xcclxcbiAgLyogTWFkZSBiYXNlZCBvbiBhdG9tIG9uZSBkYXJrIHRoZW1lICovXFxyXFxuICAvKiAtLWJ1dHRvbnMtY29sb3I6ICM1OTZkNDg7ICovXFxyXFxuICAvKiAtLXNoYWRvdy1zcGVjczogNXB4IDVweCA1cHggdmFyKC0tc2hhZG93LWNvbG9yKTsgKi9cXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcXHJcXG4gIC0taGlnaGxpZ2h0LWNvbG9yOiAjZTVjMDdiO1xcclxcbiAgLS1uZWdhdGl2ZS1jb2xvcjogI2UwNmM3NTtcXHJcXG4gIC0tcG9zaXRpdmUtY29sb3I6ICM5OGMzNzk7XFxyXFxuICAtLXdoaXRlLWNvbG9yOiAjZjNmNGY2O1xcclxcbiAgLS1saWdodC1jb2xvcjogI2RjZGZlNDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDRmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgbWFyZ2luOiAxMHB4IDUwcHg7XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodC1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaDEge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9qZWN0LXRpbGVzOiAqL1xcclxcblxcclxcbi8qIG5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufSAqL1xcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICBjb2xvcjogIzI4MmMzNDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiBoMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgZGl2I3Byb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgZGl2LnByb2plY3QtdGlsZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgZGl2LnByb2plY3QtdGlsZS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgZGl2LnByb2plY3QtdGlsZS5hY3RpdmUgcCB7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgZGl2LnByb2plY3QtdGlsZSBwIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiBkaXYucHJvamVjdC10aWxlOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uI2FkZC1wcm9qZWN0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodC1jb2xvcik7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3JtcyAqL1xcclxcblxcclxcbmZvcm0jcHJvamVjdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmZvcm0jaW5wdXQtZm9ybSB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtI2lucHV0LWZvcm0gaW5wdXQge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuXFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGlsZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24udGFzay1kZWxldGUtYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3NpdGl2ZS1jb2xvcik7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFJVjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLG1FQUFtRTtBQUNuRSxrQkFBa0I7QUFDbEIsMkVBQTJFO0FBQzNFLHNEQUFzRDtBQUN0RCwrQ0FBK0M7O0FBRS9DOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLHFEQUFxRDtFQUNyRCwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjs7RUFFL0IsYUFBYTtFQUNiLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1COztBQUVuQjs7OztHQUlHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUzs7RUFFVCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLFVBQVU7QUFDWjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIseUNBQXlDOztFQUV6QyxtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGZvbnRzICovXFxyXFxuXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJIGhhZCBhIHByb2JsZW0gd2l0aCBldmVudHMgdGFyZ2V0aW5nIHRoZSBjaGlsZHJlbiBvZiBlbGVtZW50cyAqL1xcclxcbi8qIHNvbHV0aW9uIGZyb20gKi9cXHJcXG4vKiBodHRwczovL2Nzcy10cmlja3MuY29tL3NsaWdodGx5LWNhcmVmdWwtc3ViLWVsZW1lbnRzLWNsaWNrYWJsZS10aGluZ3MvICovXFxyXFxuLyogSSBkb24ndCBsaWtlIHRoZSBpZGVhIG9mIHNvbHZpbmcgaXQgb3V0c2lkZSBvZiBKUyAqL1xcclxcbi8qIGJ1dCBJIHdvdWxkIGhhdmUgdG8gcmVmYWN0b3IgYSBsb3Qgb2YgY29kZSAqL1xcclxcblxcclxcbmJ1dHRvbiA+ICosXFxyXFxucCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLyogY3VzdG9tIHByb3BlcnRpZXMgKi9cXHJcXG4gIC8qIE1hZGUgYmFzZWQgb24gYXRvbSBvbmUgZGFyayB0aGVtZSAqL1xcclxcbiAgLyogLS1idXR0b25zLWNvbG9yOiAjNTk2ZDQ4OyAqL1xcclxcbiAgLyogLS1zaGFkb3ctc3BlY3M6IDVweCA1cHggNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7ICovXFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XFxyXFxuICAtLWhpZ2hsaWdodC1jb2xvcjogI2U1YzA3YjtcXHJcXG4gIC0tbmVnYXRpdmUtY29sb3I6ICNlMDZjNzU7XFxyXFxuICAtLXBvc2l0aXZlLWNvbG9yOiAjOThjMzc5O1xcclxcbiAgLS13aGl0ZS1jb2xvcjogI2YzZjRmNjtcXHJcXG4gIC0tbGlnaHQtY29sb3I6ICNkY2RmZTQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCA0ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDYwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIG1hcmdpbjogMTBweCA1MHB4O1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHJvamVjdC10aWxlczogKi9cXHJcXG5cXHJcXG4vKiBuYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDA7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgY29sb3I6ICMyODJjMzQ7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGRpdiNwcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGRpdi5wcm9qZWN0LXRpbGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGRpdi5wcm9qZWN0LXRpbGUuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGRpdi5wcm9qZWN0LXRpbGUuYWN0aXZlIHAge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGRpdi5wcm9qZWN0LXRpbGUgcCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgZGl2LnByb2plY3QtdGlsZTpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiNhZGQtcHJvamVjdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9ybXMgKi9cXHJcXG5cXHJcXG5mb3JtI3Byb2plY3QtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtI2lucHV0LWZvcm0ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSNpbnB1dC1mb3JtIGlucHV0IHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcblxcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpbGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnRhc2stZGVsZXRlLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9zaXRpdmUtY29sb3IpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IG15RE9NID0gKCgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmV3VGFza0J1dHRvbi5pZCA9ICduZXctdGFzayc7XHJcbiAgICBuZXdUYXNrQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgbmV3IHRhc2snO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZE5ld1Rhc2tCdXR0b24gfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IG15RE9NIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBteURPTSB9IGZyb20gJy4vbXlET00uanMnO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gIH1cclxuICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFzayA9IHRoaXMudGFza3NbaV07XHJcbiAgICAgIGlmICh0YXNrLnRpdGxlID09PSB0YXNrTmFtZSkge1xyXG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gZGVsZXRlIG1vcmUgdGhhbiBvbmU6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFN0b3JhZ2Uge1xyXG4gIHN0YXRpYyBwcm9qZWN0cyA9IFtdO1xyXG4gIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcbiAgc3RhdGljIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgU3RvcmFnZS5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzW2ldO1xyXG4gICAgICBpZiAocHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gZGVsZXRlIG1vcmUgdGhhbiBvbmU6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXR1cm5Qcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHNbaV07XHJcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBzdGF0aWMgY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgU3RvcmFnZS5jdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UucmV0dXJuUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgfVxyXG59XHJcbmNsYXNzIFVJIHtcclxuICBzdGF0aWMgY2xlYXJDb250ZW50KCkge1xyXG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWZvcm0nKTtcclxuICAgIGlmIChpbnB1dEZvcm0gIT09IG51bGwpIHtcclxuICAgICAgaW5wdXRGb3JtLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgYWRkSW5wdXQoKSB7XHJcbiAgICAvLyBhZGQgQ29udGFpbmVyIGZvciB0aGUgaW5wdXRcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgaW5wdXRGb3JtLmlkID0gJ2lucHV0LWZvcm0nO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dEZvcm0pO1xyXG5cclxuICAgIC8vIGFkZCBidXR0b24gdG8gc2VuZCAgdGhlIGZvcm1cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIHRhc2snO1xyXG4gICAgaW5wdXRGb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgLy8gYWRkIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5pZCA9ICd0YXNrLXRpdGxlJztcclxuICAgIGlucHV0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gICAgLy8gYWRkIGNvbnRhaW5lciBmb3IgVGFzaydzIHRpbGVzOlxyXG4gICAgY29uc3QgdGlsZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpbGVzQ29udGFpbmVyLmlkID0gJ3RpbGVzLWNvbnRhaW5lcic7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpbGVzQ29udGFpbmVyKTtcclxuICB9XHJcbiAgc3RhdGljIGNyZWF0ZVRhc2tUaWxlKHRhc2spIHtcclxuICAgIC8vIHRpbGVcclxuICAgIGNvbnN0IHRhc2tUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVGlsZS5jbGFzc05hbWUgPSAndGFzay10aWxlJztcclxuICAgIC8vIHRleHRcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0LmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XHJcbiAgICB0YXNrVGlsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIC8vIGRlbGV0ZSBidXR0b246XHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRvbmVUaWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZG9uZVRpY2suY2xhc3NOYW1lID0gJ21hdGVyaWFsLWljb25zJztcclxuICAgIGRvbmVUaWNrLmlubmVyVGV4dCA9ICdkb25lJztcclxuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkb25lVGljayk7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2stZGVsZXRlLWJ1dHRvbic7XHJcbiAgICAvLyBhZGQgZGVsZXRlIGZ1bmN0aW9uIHRvIHRoZSBidXR0b246XHJcbiAgICB0YXNrVGlsZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gICAgcmV0dXJuIHRhc2tUaWxlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVRpbGUodGFza1RpbGUpIHtcclxuICAgIHRhc2tUaWxlLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc3BsYXlUYXNrcyhwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0aWxlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aWxlcy1jb250YWluZXInKTtcclxuICAgIC8vIENsZWFyIHRpbGVzIENvbnRhaW5lclxyXG4gICAgdGlsZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyBTaG93IGFsbCBwcm9qZWN0J3MgdGFza3M6XHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xyXG4gICAgICBjb25zdCB0YXNrVGlsZSA9IFVJLmNyZWF0ZVRhc2tUaWxlKHRhc2spO1xyXG4gICAgICB0aWxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBjbGVhclRhc2tJbnB1dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWUgPSAnJztcclxuICB9XHJcbiAgc3RhdGljIGFkZFByb2plY3RJbnB1dCgpIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKTtcclxuICAgIGlmIChleGlzdGluZ0Zvcm0gIT09IG51bGwpIHtcclxuICAgICAgZXhpc3RpbmdGb3JtLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uaWQgPSAncHJvamVjdC1mb3JtJztcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWJ1dHRvbic7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0FkZCc7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdC1pbnB1dCc7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG4gIH1cclxuICBzdGF0aWMgaGlkZVByb2plY3RJbnB1dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKS5yZW1vdmUoKTtcclxuICB9XHJcbiAgc3RhdGljIGNyZWF0ZVByb2plY3RUaWxlKHByb2plY3QpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0VGlsZS5jbGFzc05hbWUgPSAncHJvamVjdC10aWxlJztcclxuICAgIC8vIGFkZCB0ZXh0OlxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgbmV3UHJvamVjdFRpbGUuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAvLyBjcmVhdGUgZGVsZXRlIGJ1dHRvbjpcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdYJztcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QgPSAncHJvamVjdC1kZWxldGUtYnV0dG9uJztcclxuICAgIG5ld1Byb2plY3RUaWxlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICByZXR1cm4gbmV3UHJvamVjdFRpbGU7XHJcbiAgfVxyXG4gIHN0YXRpYyBkaXNwbGF5UHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1jb250YWluZXInKTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIFN0b3JhZ2UucHJvamVjdHMpIHtcclxuICAgICAgLy8gY3JlYXRlIG5ldyB0aWxlOlxyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0VGlsZSA9IFVJLmNyZWF0ZVByb2plY3RUaWxlKHByb2plY3QpO1xyXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdFRpbGUgPSBVSS5jcmVhdGVQcm9qZWN0VGlsZShwcm9qZWN0KTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaWxlKTtcclxuICB9XHJcbiAgc3RhdGljIGNoYW5nZUFjdGl2ZVByb2plY3QodGFyZ2V0KSB7XHJcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgaWYgKGN1cnJlbnRBY3RpdmUgIT09IG51bGwpIHtcclxuICAgICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9XHJcbiAgc3RhdGljIGRpc3BsYXlBY3RpdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2ZS1wcm9qZWN0LWRpc3BsYXknKTtcclxuICAgIGRpc3BsYXkuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb2RlIHRoYXQgbmVlZHMgdG8gd29yayBub3cgZm9yIHRlc3Rpbmc6XHJcblVJLmRpc3BsYXlBY3RpdmVQcm9qZWN0KCdBZGQgbmV3IHByb2plY3QgYW5kIHNlbGVjdCBpdCB0byBzdGFydCEnKTtcclxuXHJcbi8vTWFpbiBib2R5OlxyXG5mdW5jdGlvbiBhZGRCdXR0b25Gb3JUYXNrcyhldmVudCkge1xyXG4gIC8vIFByZXZlbnQgYWN0dWFsIHN1Ym1pdFxyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vIGdldCBmb3JtIHZhbHVlOlxyXG4gIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlO1xyXG4gIGlmICh0YXNrVGl0bGUgPT09ICcnKSB7XHJcbiAgICB0YXNrVGl0bGUgPSAnRG8gbm90aGluZy4uLic7XHJcbiAgfVxyXG4gIC8vIGFkZCB0YXNrOlxyXG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUpO1xyXG4gIFN0b3JhZ2UuY3VycmVudFByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcclxuICBVSS5kaXNwbGF5VGFza3MoU3RvcmFnZS5jdXJyZW50UHJvamVjdCk7XHJcbiAgVUkuY2xlYXJUYXNrSW5wdXQoKTtcclxufVxyXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAnI2lucHV0LWZvcm0nLCBhZGRCdXR0b25Gb3JUYXNrcyk7XHJcblxyXG5mdW5jdGlvbiBkZWxldGVCdXR0b25Gb3JUYXNrcyhldmVudCkge1xyXG4gIFVJLnJlbW92ZVRpbGUoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG4gIGNvbnN0IHRhc2tOYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lclRleHQ7XHJcbiAgU3RvcmFnZS5jdXJyZW50UHJvamVjdC5yZW1vdmVUYXNrKHRhc2tOYW1lKTtcclxufVxyXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdjbGljaycsICcudGFzay1kZWxldGUtYnV0dG9uJywgZGVsZXRlQnV0dG9uRm9yVGFza3MpO1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uRm9yUHJvamVjdHMoZXZlbnQpIHtcclxuICBVSS5yZW1vdmVUaWxlKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xyXG4gIFN0b3JhZ2UucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgLy8gaWYgd2UgZGVsZXRlIGEgY3VycmVudCBwcm9qZWN0XHJcbiAgaWYgKFN0b3JhZ2UuY3VycmVudFByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpIHtcclxuICAgIFVJLmNsZWFyQ29udGVudCgpO1xyXG4gICAgVUkuZGlzcGxheUFjdGl2ZVByb2plY3QoJ0Nob29zZSBhIHByb2plY3QnKTtcclxuICB9XHJcbn1cclxuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcclxuICAnY2xpY2snLFxyXG4gICcucHJvamVjdC1kZWxldGUtYnV0dG9uJyxcclxuICBkZWxldGVCdXR0b25Gb3JQcm9qZWN0c1xyXG4pO1xyXG5cclxuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnI2FkZC1wcm9qZWN0JywgVUkuYWRkUHJvamVjdElucHV0KTtcclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkZvclByb2plY3RzKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgbGV0IGlucHV0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWlucHV0JykudmFsdWU7XHJcbiAgaWYgKGlucHV0VGV4dCA9PT0gJycpIHtcclxuICAgIGlucHV0VGV4dCA9ICdVbm5hbWVkJztcclxuICB9XHJcbiAgLy8gY2Fubm90IGhhdmUgdHdvIHByb2plY3RzIHdpdGggdGhlIHNhbWUgbmFtZVxyXG4gIGlmIChTdG9yYWdlLnJldHVyblByb2plY3QoaW5wdXRUZXh0KSA9PT0gbnVsbCkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlucHV0VGV4dCk7XHJcbiAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBVSS5oaWRlUHJvamVjdElucHV0KCk7XHJcbiAgICBVSS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhbGVydChcIlByb2plY3RzJyBuYW1lcyBtdXN0IGJlIHVuaXF1ZVwiKTtcclxuICB9XHJcbn1cclxuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignc3VibWl0JywgJyNwcm9qZWN0LWZvcm0nLCBhZGRCdXR0b25Gb3JQcm9qZWN0cyk7XHJcblxyXG4vLyBmdW5jdGlvbiB0byB3cmFwIGV2ZW50IGxpc3RlbmVyc1xyXG5mdW5jdGlvbiBhZGRHbG9iYWxFdmVudExpc3RlbmVyKHR5cGUsIHNlbGVjdG9yLCBjYWxsYmFjaykge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICBjYWxsYmFjayhlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50UHJvamVjdChldmVudCkge1xyXG4gIFVJLmNsZWFyQ29udGVudCgpO1xyXG4gIFVJLmFkZElucHV0KCk7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQuZmlyc3RDaGlsZC5pbm5lclRleHQ7XHJcbiAgU3RvcmFnZS5jaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBVSS5jaGFuZ2VBY3RpdmVQcm9qZWN0KGV2ZW50LnRhcmdldCk7XHJcbiAgVUkuZGlzcGxheUFjdGl2ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIFVJLmRpc3BsYXlUYXNrcyhTdG9yYWdlLmN1cnJlbnRQcm9qZWN0KTtcclxufVxyXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdjbGljaycsICcucHJvamVjdC10aWxlJywgY2hhbmdlQ3VycmVudFByb2plY3QpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=