(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mobx"), require("mobx-react"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["mobx", "mobx-react", "react"], factory);
	else if(typeof exports === 'object')
		exports["mylib"] = factory(require("mobx"), require("mobx-react"), require("react"));
	else
		root["mylib"] = factory(root["mobx"], root["mobx-react"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_mobx__, __WEBPACK_EXTERNAL_MODULE_mobx_react__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/MyItem.js":
/*!**********************************!*\
  !*** ./src/components/MyItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _dec, _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar MyItem = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"inject\"])('myItemStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"observer\"])(_class =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MyItem, _Component);\n\n  function MyItem() {\n    _classCallCheck(this, MyItem);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(MyItem).apply(this, arguments));\n  }\n\n  _createClass(MyItem, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          item = _this$props.item,\n          myItemStore = _this$props.myItemStore;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          display: 'flex',\n          flexDirection: 'row'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          marginRight: '10px'\n        }\n      }, \"Count: \", item.valueCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          marginRight: '10px'\n        }\n      }, \"Percentage: \", Math.floor(item.valueCount / myItemStore.totalValueCount * 100)), item.values.map(function (value, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: index,\n          style: {\n            margin: \"0 3px\"\n          }\n        }, value);\n      }));\n    }\n  }]);\n\n  return MyItem;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])) || _class) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyItem);\n\n//# sourceURL=webpack://mylib/./src/components/MyItem.js?");

/***/ }),

/***/ "./src/components/MyItemList.js":
/*!**************************************!*\
  !*** ./src/components/MyItemList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyItem */ \"./src/components/MyItem.js\");\n/* harmony import */ var _stores_myItemStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/myItemStore */ \"./src/stores/myItemStore.js\");\nvar _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar MyItemList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"observer\"])(_class =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MyItemList, _Component);\n\n  function MyItemList() {\n    _classCallCheck(this, MyItemList);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(MyItemList).apply(this, arguments));\n  }\n\n  _createClass(MyItemList, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      _stores_myItemStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addItem();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n        myItemStore: _stores_myItemStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this.handleClick();\n        }\n      }, \"Add Item\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Item Count: \", _stores_myItemStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"].items.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, _stores_myItemStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"].items.map(function (item, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: index\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          item: item\n        }));\n      })));\n    }\n  }]);\n\n  return MyItemList;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])) || _class;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyItemList);\n\n//# sourceURL=webpack://mylib/./src/components/MyItemList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MyItemList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MyItemList */ \"./src/components/MyItemList.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  MyItemList: _components_MyItemList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack://mylib/./src/index.js?");

/***/ }),

/***/ "./src/models/MyItemModel.js":
/*!***********************************!*\
  !*** ./src/models/MyItemModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\nvar _class, _descriptor, _temp;\n\nfunction _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nfunction _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }\n\n\nvar MyItemModel = (_class = (_temp =\n/*#__PURE__*/\nfunction () {\n  function MyItemModel(numValues) {\n    _classCallCheck(this, MyItemModel);\n\n    _initializerDefineProperty(this, \"values\", _descriptor, this);\n\n    for (var i = 0; i < numValues; i++) {\n      this.values.push(i);\n    }\n  }\n\n  _createClass(MyItemModel, [{\n    key: \"valueCount\",\n    get: function get() {\n      return this.values.length;\n    }\n  }]);\n\n  return MyItemModel;\n}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, \"values\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return [];\n  }\n}), _applyDecoratedDescriptor(_class.prototype, \"valueCount\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"valueCount\"), _class.prototype)), _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyItemModel);\n\n//# sourceURL=webpack://mylib/./src/models/MyItemModel.js?");

/***/ }),

/***/ "./src/stores/myItemStore.js":
/*!***********************************!*\
  !*** ./src/stores/myItemStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_MyItemModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/MyItemModel */ \"./src/models/MyItemModel.js\");\nvar _class, _descriptor, _temp;\n\nfunction _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nfunction _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }\n\n\n\nvar MyItemStore = (_class = (_temp =\n/*#__PURE__*/\nfunction () {\n  function MyItemStore() {\n    _classCallCheck(this, MyItemStore);\n\n    _initializerDefineProperty(this, \"items\", _descriptor, this);\n  }\n\n  _createClass(MyItemStore, [{\n    key: \"addItem\",\n    value: function addItem() {\n      this.items.push(new _models_MyItemModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](Math.floor(Math.random() * 10)));\n    }\n  }, {\n    key: \"totalValueCount\",\n    get: function get() {\n      return this.items.map(function (item) {\n        return item.valueCount;\n      }).reduce(function (sum, x) {\n        return sum + x;\n      });\n    }\n  }]);\n\n  return MyItemStore;\n}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, \"items\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function initializer() {\n    return [];\n  }\n}), _applyDecoratedDescriptor(_class.prototype, \"totalValueCount\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"totalValueCount\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"addItem\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"addItem\"), _class.prototype)), _class);\nvar myItemStore = new MyItemStore();\n/* harmony default export */ __webpack_exports__[\"default\"] = (myItemStore);\n\n//# sourceURL=webpack://mylib/./src/stores/myItemStore.js?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_mobx__;\n\n//# sourceURL=webpack://mylib/external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_mobx_react__;\n\n//# sourceURL=webpack://mylib/external_%22mobx-react%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://mylib/external_%22react%22?");

/***/ })

/******/ });
});