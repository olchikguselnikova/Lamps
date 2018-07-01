/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 343);
/******/ })
/************************************************************************/
/******/ ({

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(345);

var _lamp = __webpack_require__(90);

var _toggleBtn = __webpack_require__(347);

var _addBtn = __webpack_require__(349);

var lamp = new _lamp.Lamp(document.querySelector('.place-for-lamps'));
var lamp2 = new _lamp.Lamp(document.querySelector('.place-for-lamps'));
var lamp3 = new _lamp.Lamp(document.querySelector('.place-for-lamps'));
var lamp4 = new _lamp.Lamp(document.querySelector('.place-for-lamps'));
var lamp5 = new _lamp.Lamp(document.querySelector('.place-for-lamps'));

var tglBtn = new _toggleBtn.ToggleBtn(document.querySelector('.place-for-toggleBtn'));

var addBtn = new _addBtn.AddBtn(document.querySelector('.place-for-addBtn'));

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleBtn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(348);

var _lamp = __webpack_require__(90);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToggleBtn = exports.ToggleBtn = function () {
  function ToggleBtn(targetEl) {
    _classCallCheck(this, ToggleBtn);

    this.targetEl = targetEl;
    this.lamps = [];
    this.btns = [];
    this.render();
  }

  _createClass(ToggleBtn, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.toggleBtn = document.createElement('button');

      this.toggleBtn.textContent = 'toggle All';

      this.toggleBtn.addEventListener('click', function () {
        return _this.toggleAll();
      });

      this.targetEl.appendChild(this.toggleBtn);
    }
  }, {
    key: 'toggleAll',
    value: function toggleAll() {
      this.lamps = document.querySelectorAll('.lamp__circle');
      this.lamps.forEach(function (lamp) {
        return lamp.classList.add('lamp__circle_toggled');
      });

      this.btns = document.querySelectorAll('.lamp__button');
      this.btns.forEach(function (btn) {
        return btn.classList.add('lamp__button_toggled');
      });
    }
  }]);

  return ToggleBtn;
}();

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddBtn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(350);

var _lamp = __webpack_require__(90);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBtn = exports.AddBtn = function () {
  function AddBtn(targetEl) {
    _classCallCheck(this, AddBtn);

    this.targetEl = targetEl;
    this.render();
  }

  _createClass(AddBtn, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.addBtn = document.createElement('button');

      this.addBtn.textContent = 'add Lamp';

      this.addBtn.addEventListener('click', function () {
        return _this.addLamp();
      });

      this.targetEl.appendChild(this.addBtn);
    }
  }, {
    key: 'addLamp',
    value: function addLamp() {
      var lamp = new _lamp.Lamp(document.querySelector('.place-for-lamps'));
    }
  }]);

  return AddBtn;
}();

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lamp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(346);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TARGET_CLASS_NAME = 'lamp';
var CIRCLE_CLASS_NAME = TARGET_CLASS_NAME + '__circle';
var CIRCLE_TOGGLED_CLASS_NAME = TARGET_CLASS_NAME + '__circle_toggled';
var BUTTON_CLASS_NAME = TARGET_CLASS_NAME + '__button';
var BUTTON_TOGGLED_CLASS_NAME = TARGET_CLASS_NAME + '__button_toggled';

var Lamp = exports.Lamp = function () {
    function Lamp(targetEl) {
        _classCallCheck(this, Lamp);

        this.targetEl = targetEl;
        this.isToggled = false;

        this.groupEl = null;
        this.circleEl = null;
        this.btnEl = null;
        this.render();
    }

    _createClass(Lamp, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this.groupEl = document.createElement('div');
            this.groupEl.classList.add(TARGET_CLASS_NAME);

            this.targetEl.appendChild(this.groupEl);

            this.circleEl = document.createElement('div');
            this.circleEl.classList.add(CIRCLE_CLASS_NAME);

            this.groupEl.appendChild(this.circleEl);

            this.btnEl = document.createElement('button');
            this.btnEl.classList.add(BUTTON_CLASS_NAME);
            this.btnEl.textContent = "on/off";

            this.groupEl.appendChild(this.btnEl);

            this.btnEl.addEventListener('click', function () {
                if (_this.isToggled) {
                    _this.turnOff();
                } else {
                    _this.turnOn();
                }
            });
        }
    }, {
        key: 'turnOn',
        value: function turnOn() {
            this.circleEl.classList.add(CIRCLE_TOGGLED_CLASS_NAME);
            this.btnEl.classList.add(BUTTON_TOGGLED_CLASS_NAME);
            this.isToggled = true;
        }
    }, {
        key: 'turnOff',
        value: function turnOff() {
            this.circleEl.classList.remove(CIRCLE_TOGGLED_CLASS_NAME);
            this.btnEl.classList.remove(BUTTON_TOGGLED_CLASS_NAME);
            this.isToggled = false;
        }
    }]);

    return Lamp;
}();

/***/ })

/******/ });