/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
__webpack_require__(/*! ./helpers.js */ "./resources/js/helpers.js");
var _require = __webpack_require__(/*! ../../vendor/livewire/livewire/dist/livewire.esm */ "./vendor/livewire/livewire/dist/livewire.esm.js"),
  Livewire = _require.Livewire;
Livewire.start();

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
//     MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
//     wsHost: import.meta.env.VITE_PUSHER_HOST ?? `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });

/***/ }),

/***/ "./resources/js/helpers.js":
/*!*********************************!*\
  !*** ./resources/js/helpers.js ***!
  \*********************************/
/***/ (() => {



window.lengthCounterHandler = function lengthCounterHandler(e, targetId) {
  var maxLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var additionalText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var target = document.getElementById(targetId);
  var inputValue = e.target.value;
  if (inputValue.length > maxLength) {
    e.target.value = inputValue.slice(0, maxLength);
  }
  target.innerText = "".concat(e.target.value.length, "/").concat(maxLength, " ").concat(additionalText);
};

/***/ }),

/***/ "./vendor/livewire/livewire/dist/livewire.esm.js":
/*!*******************************************************!*\
  !*** ./vendor/livewire/livewire/dist/livewire.esm.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Livewire = exports.Alpine = void 0;
var _ref100, _document$querySelect, _document$querySelect2;
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty2(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function __commonJS(cb, mod) {
  return function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
      exports: {}
    }).exports, mod), mod.exports;
  };
};
var __copyProps = function __copyProps(to, from, except, desc) {
  if (from && _typeof(from) === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
      _step;
    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: function get() {
            return from[key];
          },
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = function __toESM(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod);
};

// ../alpine/packages/alpinejs/dist/module.cjs.js
var require_module_cjs = __commonJS({
  "../alpine/packages/alpinejs/dist/module.cjs.js": function alpinePackagesAlpinejsDistModuleCjsJs(exports, module) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __commonJS2 = function __commonJS2(cb, mod) {
      return function __require() {
        return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = {
          exports: {}
        }).exports, mod), mod.exports;
      };
    };
    var __export = function __export(target, all2) {
      for (var name in all2) __defProp2(target, name, {
        get: all2[name],
        enumerable: true
      });
    };
    var __copyProps2 = function __copyProps2(to, from, except, desc) {
      if (from && _typeof(from) === "object" || typeof from === "function") {
        var _iterator2 = _createForOfIteratorHelper(__getOwnPropNames2(from)),
          _step2;
        try {
          var _loop2 = function _loop2() {
            var key = _step2.value;
            if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
              get: function get() {
                return from[key];
              },
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
            });
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop2();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return to;
    };
    var __toESM2 = function __toESM2(mod, isNodeMode, target) {
      return target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
        value: mod,
        enumerable: true
      }) : target, mod);
    };
    var __toCommonJS = function __toCommonJS(mod) {
      return __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
    };
    var require_shared_cjs = __commonJS2({
      "node_modules/@vue/shared/dist/shared.cjs.js": function node_modulesVueSharedDistSharedCjsJs(exports2) {
        "use strict";

        var _PatchFlagNames;
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        function makeMap(str, expectsLowerCase) {
          var map = /* @__PURE__ */Object.create(null);
          var list = str.split(",");
          for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase ? function (val) {
            return !!map[val.toLowerCase()];
          } : function (val) {
            return !!map[val];
          };
        }
        var PatchFlagNames = (_PatchFlagNames = {}, _defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_PatchFlagNames, 1, "TEXT"), 2, "CLASS"), 4, "STYLE"), 8, "PROPS"), 16, "FULL_PROPS"), 32, "HYDRATE_EVENTS"), 64, "STABLE_FRAGMENT"), 128, "KEYED_FRAGMENT"), 256, "UNKEYED_FRAGMENT"), 512, "NEED_PATCH"), _defineProperty2(_defineProperty2(_defineProperty2(_defineProperty2(_PatchFlagNames, 1024, "DYNAMIC_SLOTS"), 2048, "DEV_ROOT_FRAGMENT"), -1, "HOISTED"), -2, "BAIL"));
        var slotFlagsText = _defineProperty2(_defineProperty2(_defineProperty2({}, 1, "STABLE"), 2, "DYNAMIC"), 3, "FORWARDED");
        var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
        var isGloballyWhitelisted = /* @__PURE__ */makeMap(GLOBALS_WHITE_LISTED);
        var range = 2;
        function generateCodeFrame(source) {
          var start22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
          var lines = source.split(/(\r?\n)/);
          var newlineSequences = lines.filter(function (_, idx) {
            return idx % 2 === 1;
          });
          lines = lines.filter(function (_, idx) {
            return idx % 2 === 0;
          });
          var count = 0;
          var res = [];
          for (var i = 0; i < lines.length; i++) {
            count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
            if (count >= start22) {
              for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length) continue;
                var line = j + 1;
                res.push("".concat(line).concat(" ".repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
                var lineLength = lines[j].length;
                var newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                  var pad = start22 - (count - (lineLength + newLineSeqLength));
                  var length = Math.max(1, end > count ? lineLength - pad : end - start22);
                  res.push("   |  " + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                  if (end > count) {
                    var _length = Math.max(Math.min(end - count, lineLength), 1);
                    res.push("   |  " + "^".repeat(_length));
                  }
                  count += lineLength + newLineSeqLength;
                }
              }
              break;
            }
          }
          return res.join("\n");
        }
        var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
        var isSpecialBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs);
        var isBooleanAttr2 = /* @__PURE__ */makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
        var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
        var attrValidationCache = {};
        function isSSRSafeAttrName(name) {
          if (attrValidationCache.hasOwnProperty(name)) {
            return attrValidationCache[name];
          }
          var isUnsafe = unsafeAttrCharRE.test(name);
          if (isUnsafe) {
            console.error("unsafe attribute name: ".concat(name));
          }
          return attrValidationCache[name] = !isUnsafe;
        }
        var propsToAttrMap = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv"
        };
        var isNoUnitNumericStyleProp = /* @__PURE__ */makeMap("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width");
        var isKnownAttr = /* @__PURE__ */makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
        function normalizeStyle(value) {
          if (isArray2(value)) {
            var res = {};
            for (var i = 0; i < value.length; i++) {
              var item = value[i];
              var normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
              if (normalized) {
                for (var key in normalized) {
                  res[key] = normalized[key];
                }
              }
            }
            return res;
          } else if (isObject2(value)) {
            return value;
          }
        }
        var listDelimiterRE = /;(?![^(]*\))/g;
        var propertyDelimiterRE = /:(.+)/;
        function parseStringStyle(cssText) {
          var ret = {};
          cssText.split(listDelimiterRE).forEach(function (item) {
            if (item) {
              var tmp = item.split(propertyDelimiterRE);
              tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return ret;
        }
        function stringifyStyle(styles) {
          var ret = "";
          if (!styles) {
            return ret;
          }
          for (var key in styles) {
            var value = styles[key];
            var normalizedKey = key.startsWith("--") ? key : hyphenate(key);
            if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
              ret += "".concat(normalizedKey, ":").concat(value, ";");
            }
          }
          return ret;
        }
        function normalizeClass(value) {
          var res = "";
          if (isString(value)) {
            res = value;
          } else if (isArray2(value)) {
            for (var i = 0; i < value.length; i++) {
              var normalized = normalizeClass(value[i]);
              if (normalized) {
                res += normalized + " ";
              }
            }
          } else if (isObject2(value)) {
            for (var name in value) {
              if (value[name]) {
                res += name + " ";
              }
            }
          }
          return res.trim();
        }
        var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
        var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
        var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
        var isHTMLTag = /* @__PURE__ */makeMap(HTML_TAGS);
        var isSVGTag = /* @__PURE__ */makeMap(SVG_TAGS);
        var isVoidTag = /* @__PURE__ */makeMap(VOID_TAGS);
        var escapeRE = /["'&<>]/;
        function escapeHtml(string) {
          var str = "" + string;
          var match = escapeRE.exec(str);
          if (!match) {
            return str;
          }
          var html = "";
          var escaped;
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escaped = "&quot;";
                break;
              case 38:
                escaped = "&amp;";
                break;
              case 39:
                escaped = "&#39;";
                break;
              case 60:
                escaped = "&lt;";
                break;
              case 62:
                escaped = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escaped;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
        function escapeHtmlComment(src) {
          return src.replace(commentStripRE, "");
        }
        function looseCompareArrays(a, b) {
          if (a.length !== b.length) return false;
          var equal = true;
          for (var i = 0; equal && i < a.length; i++) {
            equal = looseEqual(a[i], b[i]);
          }
          return equal;
        }
        function looseEqual(a, b) {
          if (a === b) return true;
          var aValidType = isDate(a);
          var bValidType = isDate(b);
          if (aValidType || bValidType) {
            return aValidType && bValidType ? a.getTime() === b.getTime() : false;
          }
          aValidType = isArray2(a);
          bValidType = isArray2(b);
          if (aValidType || bValidType) {
            return aValidType && bValidType ? looseCompareArrays(a, b) : false;
          }
          aValidType = isObject2(a);
          bValidType = isObject2(b);
          if (aValidType || bValidType) {
            if (!aValidType || !bValidType) {
              return false;
            }
            var aKeysCount = Object.keys(a).length;
            var bKeysCount = Object.keys(b).length;
            if (aKeysCount !== bKeysCount) {
              return false;
            }
            for (var key in a) {
              var aHasKey = a.hasOwnProperty(key);
              var bHasKey = b.hasOwnProperty(key);
              if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
                return false;
              }
            }
          }
          return String(a) === String(b);
        }
        function looseIndexOf(arr, val) {
          return arr.findIndex(function (item) {
            return looseEqual(item, val);
          });
        }
        var toDisplayString = function toDisplayString(val) {
          return val == null ? "" : isObject2(val) ? JSON.stringify(val, replacer, 2) : String(val);
        };
        var replacer = function replacer(_key, val) {
          if (isMap(val)) {
            return _defineProperty2({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                key = _ref5[0],
                val2 = _ref5[1];
              entries["".concat(key, " =>")] = val2;
              return entries;
            }, {}));
          } else if (isSet(val)) {
            return _defineProperty2({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
          } else if (isObject2(val) && !isArray2(val) && !isPlainObject(val)) {
            return String(val);
          }
          return val;
        };
        var babelParserDefaultPlugins = ["bigInt", "optionalChaining", "nullishCoalescingOperator"];
        var EMPTY_OBJ = Object.freeze({});
        var EMPTY_ARR = Object.freeze([]);
        var NOOP = function NOOP() {};
        var NO = function NO() {
          return false;
        };
        var onRE = /^on[^a-z]/;
        var isOn = function isOn(key) {
          return onRE.test(key);
        };
        var isModelListener = function isModelListener(key) {
          return key.startsWith("onUpdate:");
        };
        var extend = Object.assign;
        var remove = function remove(arr, el) {
          var i = arr.indexOf(el);
          if (i > -1) {
            arr.splice(i, 1);
          }
        };
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasOwn = function hasOwn(val, key) {
          return hasOwnProperty.call(val, key);
        };
        var isArray2 = Array.isArray;
        var isMap = function isMap(val) {
          return toTypeString(val) === "[object Map]";
        };
        var isSet = function isSet(val) {
          return toTypeString(val) === "[object Set]";
        };
        var isDate = function isDate(val) {
          return val instanceof Date;
        };
        var isFunction2 = function isFunction2(val) {
          return typeof val === "function";
        };
        var isString = function isString(val) {
          return typeof val === "string";
        };
        var isSymbol = function isSymbol(val) {
          return _typeof(val) === "symbol";
        };
        var isObject2 = function isObject2(val) {
          return val !== null && _typeof(val) === "object";
        };
        var isPromise = function isPromise(val) {
          return isObject2(val) && isFunction2(val.then) && isFunction2(val["catch"]);
        };
        var objectToString = Object.prototype.toString;
        var toTypeString = function toTypeString(value) {
          return objectToString.call(value);
        };
        var toRawType = function toRawType(value) {
          return toTypeString(value).slice(8, -1);
        };
        var isPlainObject = function isPlainObject(val) {
          return toTypeString(val) === "[object Object]";
        };
        var isIntegerKey = function isIntegerKey(key) {
          return isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
        };
        var isReservedProp = /* @__PURE__ */makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
        var cacheStringFunction = function cacheStringFunction(fn) {
          var cache = /* @__PURE__ */Object.create(null);
          return function (str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
          };
        };
        var camelizeRE = /-(\w)/g;
        var camelize = cacheStringFunction(function (str) {
          return str.replace(camelizeRE, function (_, c) {
            return c ? c.toUpperCase() : "";
          });
        });
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cacheStringFunction(function (str) {
          return str.replace(hyphenateRE, "-$1").toLowerCase();
        });
        var capitalize = cacheStringFunction(function (str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        });
        var toHandlerKey = cacheStringFunction(function (str) {
          return str ? "on".concat(capitalize(str)) : "";
        });
        var hasChanged = function hasChanged(value, oldValue) {
          return value !== oldValue && (value === value || oldValue === oldValue);
        };
        var invokeArrayFns = function invokeArrayFns(fns, arg) {
          for (var i = 0; i < fns.length; i++) {
            fns[i](arg);
          }
        };
        var def = function def(obj, key, value) {
          Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: false,
            value: value
          });
        };
        var toNumber = function toNumber(val) {
          var n = parseFloat(val);
          return isNaN(n) ? val : n;
        };
        var _globalThis;
        var getGlobalThis = function getGlobalThis() {
          return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : {});
        };
        exports2.EMPTY_ARR = EMPTY_ARR;
        exports2.EMPTY_OBJ = EMPTY_OBJ;
        exports2.NO = NO;
        exports2.NOOP = NOOP;
        exports2.PatchFlagNames = PatchFlagNames;
        exports2.babelParserDefaultPlugins = babelParserDefaultPlugins;
        exports2.camelize = camelize;
        exports2.capitalize = capitalize;
        exports2.def = def;
        exports2.escapeHtml = escapeHtml;
        exports2.escapeHtmlComment = escapeHtmlComment;
        exports2.extend = extend;
        exports2.generateCodeFrame = generateCodeFrame;
        exports2.getGlobalThis = getGlobalThis;
        exports2.hasChanged = hasChanged;
        exports2.hasOwn = hasOwn;
        exports2.hyphenate = hyphenate;
        exports2.invokeArrayFns = invokeArrayFns;
        exports2.isArray = isArray2;
        exports2.isBooleanAttr = isBooleanAttr2;
        exports2.isDate = isDate;
        exports2.isFunction = isFunction2;
        exports2.isGloballyWhitelisted = isGloballyWhitelisted;
        exports2.isHTMLTag = isHTMLTag;
        exports2.isIntegerKey = isIntegerKey;
        exports2.isKnownAttr = isKnownAttr;
        exports2.isMap = isMap;
        exports2.isModelListener = isModelListener;
        exports2.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
        exports2.isObject = isObject2;
        exports2.isOn = isOn;
        exports2.isPlainObject = isPlainObject;
        exports2.isPromise = isPromise;
        exports2.isReservedProp = isReservedProp;
        exports2.isSSRSafeAttrName = isSSRSafeAttrName;
        exports2.isSVGTag = isSVGTag;
        exports2.isSet = isSet;
        exports2.isSpecialBooleanAttr = isSpecialBooleanAttr;
        exports2.isString = isString;
        exports2.isSymbol = isSymbol;
        exports2.isVoidTag = isVoidTag;
        exports2.looseEqual = looseEqual;
        exports2.looseIndexOf = looseIndexOf;
        exports2.makeMap = makeMap;
        exports2.normalizeClass = normalizeClass;
        exports2.normalizeStyle = normalizeStyle;
        exports2.objectToString = objectToString;
        exports2.parseStringStyle = parseStringStyle;
        exports2.propsToAttrMap = propsToAttrMap;
        exports2.remove = remove;
        exports2.slotFlagsText = slotFlagsText;
        exports2.stringifyStyle = stringifyStyle;
        exports2.toDisplayString = toDisplayString;
        exports2.toHandlerKey = toHandlerKey;
        exports2.toNumber = toNumber;
        exports2.toRawType = toRawType;
        exports2.toTypeString = toTypeString;
      }
    });
    var require_shared = __commonJS2({
      "node_modules/@vue/shared/index.js": function node_modulesVueSharedIndexJs(exports2, module2) {
        "use strict";

        if (false) {} else {
          module2.exports = require_shared_cjs();
        }
      }
    });
    var require_reactivity_cjs = __commonJS2({
      "node_modules/@vue/reactivity/dist/reactivity.cjs.js": function node_modulesVueReactivityDistReactivityCjsJs(exports2) {
        "use strict";

        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var shared = require_shared();
        var targetMap = /* @__PURE__ */new WeakMap();
        var effectStack = [];
        var activeEffect;
        var ITERATE_KEY = Symbol("iterate");
        var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
        function isEffect(fn) {
          return fn && fn._isEffect === true;
        }
        function effect3(fn) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : shared.EMPTY_OBJ;
          if (isEffect(fn)) {
            fn = fn.raw;
          }
          var effect4 = createReactiveEffect(fn, options);
          if (!options.lazy) {
            effect4();
          }
          return effect4;
        }
        function stop2(effect4) {
          if (effect4.active) {
            cleanup2(effect4);
            if (effect4.options.onStop) {
              effect4.options.onStop();
            }
            effect4.active = false;
          }
        }
        var uid = 0;
        function createReactiveEffect(fn, options) {
          var effect4 = function reactiveEffect() {
            if (!effect4.active) {
              return fn();
            }
            if (!effectStack.includes(effect4)) {
              cleanup2(effect4);
              try {
                enableTracking();
                effectStack.push(effect4);
                activeEffect = effect4;
                return fn();
              } finally {
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
              }
            }
          };
          effect4.id = uid++;
          effect4.allowRecurse = !!options.allowRecurse;
          effect4._isEffect = true;
          effect4.active = true;
          effect4.raw = fn;
          effect4.deps = [];
          effect4.options = options;
          return effect4;
        }
        function cleanup2(effect4) {
          var deps = effect4.deps;
          if (deps.length) {
            for (var i = 0; i < deps.length; i++) {
              deps[i]["delete"](effect4);
            }
            deps.length = 0;
          }
        }
        var shouldTrack = true;
        var trackStack = [];
        function pauseTracking() {
          trackStack.push(shouldTrack);
          shouldTrack = false;
        }
        function enableTracking() {
          trackStack.push(shouldTrack);
          shouldTrack = true;
        }
        function resetTracking() {
          var last = trackStack.pop();
          shouldTrack = last === void 0 ? true : last;
        }
        function track2(target, type, key) {
          if (!shouldTrack || activeEffect === void 0) {
            return;
          }
          var depsMap = targetMap.get(target);
          if (!depsMap) {
            targetMap.set(target, depsMap = /* @__PURE__ */new Map());
          }
          var dep = depsMap.get(key);
          if (!dep) {
            depsMap.set(key, dep = /* @__PURE__ */new Set());
          }
          if (!dep.has(activeEffect)) {
            dep.add(activeEffect);
            activeEffect.deps.push(dep);
            if (activeEffect.options.onTrack) {
              activeEffect.options.onTrack({
                effect: activeEffect,
                target: target,
                type: type,
                key: key
              });
            }
          }
        }
        function trigger2(target, type, key, newValue, oldValue, oldTarget) {
          var depsMap = targetMap.get(target);
          if (!depsMap) {
            return;
          }
          var effects = /* @__PURE__ */new Set();
          var add2 = function add2(effectsToAdd) {
            if (effectsToAdd) {
              effectsToAdd.forEach(function (effect4) {
                if (effect4 !== activeEffect || effect4.allowRecurse) {
                  effects.add(effect4);
                }
              });
            }
          };
          if (type === "clear") {
            depsMap.forEach(add2);
          } else if (key === "length" && shared.isArray(target)) {
            depsMap.forEach(function (dep, key2) {
              if (key2 === "length" || key2 >= newValue) {
                add2(dep);
              }
            });
          } else {
            if (key !== void 0) {
              add2(depsMap.get(key));
            }
            switch (type) {
              case "add":
                if (!shared.isArray(target)) {
                  add2(depsMap.get(ITERATE_KEY));
                  if (shared.isMap(target)) {
                    add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                  }
                } else if (shared.isIntegerKey(key)) {
                  add2(depsMap.get("length"));
                }
                break;
              case "delete":
                if (!shared.isArray(target)) {
                  add2(depsMap.get(ITERATE_KEY));
                  if (shared.isMap(target)) {
                    add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                  }
                }
                break;
              case "set":
                if (shared.isMap(target)) {
                  add2(depsMap.get(ITERATE_KEY));
                }
                break;
            }
          }
          var run = function run(effect4) {
            if (effect4.options.onTrigger) {
              effect4.options.onTrigger({
                effect: effect4,
                target: target,
                key: key,
                type: type,
                newValue: newValue,
                oldValue: oldValue,
                oldTarget: oldTarget
              });
            }
            if (effect4.options.scheduler) {
              effect4.options.scheduler(effect4);
            } else {
              effect4();
            }
          };
          effects.forEach(run);
        }
        var isNonTrackableKeys = /* @__PURE__ */shared.makeMap("__proto__,__v_isRef,__isVue");
        var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
          return Symbol[key];
        }).filter(shared.isSymbol));
        var get2 = /* @__PURE__ */createGetter();
        var shallowGet = /* @__PURE__ */createGetter(false, true);
        var readonlyGet = /* @__PURE__ */createGetter(true);
        var shallowReadonlyGet = /* @__PURE__ */createGetter(true, true);
        var arrayInstrumentations = /* @__PURE__ */createArrayInstrumentations();
        function createArrayInstrumentations() {
          var instrumentations = {};
          ["includes", "indexOf", "lastIndexOf"].forEach(function (key) {
            instrumentations[key] = function () {
              var arr = toRaw2(this);
              for (var i = 0, l = this.length; i < l; i++) {
                track2(arr, "get", i + "");
              }
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              var res = arr[key].apply(arr, args);
              if (res === -1 || res === false) {
                return arr[key].apply(arr, _toConsumableArray(args.map(toRaw2)));
              } else {
                return res;
              }
            };
          });
          ["push", "pop", "shift", "unshift", "splice"].forEach(function (key) {
            instrumentations[key] = function () {
              pauseTracking();
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }
              var res = toRaw2(this)[key].apply(this, args);
              resetTracking();
              return res;
            };
          });
          return instrumentations;
        }
        function createGetter() {
          var isReadonly2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return function get3(target, key, receiver) {
            if (key === "__v_isReactive") {
              return !isReadonly2;
            } else if (key === "__v_isReadonly") {
              return isReadonly2;
            } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
              return target;
            }
            var targetIsArray = shared.isArray(target);
            if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
              return Reflect.get(arrayInstrumentations, key, receiver);
            }
            var res = Reflect.get(target, key, receiver);
            if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
              return res;
            }
            if (!isReadonly2) {
              track2(target, "get", key);
            }
            if (shallow) {
              return res;
            }
            if (isRef(res)) {
              var shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
              return shouldUnwrap ? res.value : res;
            }
            if (shared.isObject(res)) {
              return isReadonly2 ? readonly(res) : reactive3(res);
            }
            return res;
          };
        }
        var set2 = /* @__PURE__ */createSetter();
        var shallowSet = /* @__PURE__ */createSetter(true);
        function createSetter() {
          var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return function set3(target, key, value, receiver) {
            var oldValue = target[key];
            if (!shallow) {
              value = toRaw2(value);
              oldValue = toRaw2(oldValue);
              if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
              }
            }
            var hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
            var result = Reflect.set(target, key, value, receiver);
            if (target === toRaw2(receiver)) {
              if (!hadKey) {
                trigger2(target, "add", key, value);
              } else if (shared.hasChanged(value, oldValue)) {
                trigger2(target, "set", key, value, oldValue);
              }
            }
            return result;
          };
        }
        function deleteProperty(target, key) {
          var hadKey = shared.hasOwn(target, key);
          var oldValue = target[key];
          var result = Reflect.deleteProperty(target, key);
          if (result && hadKey) {
            trigger2(target, "delete", key, void 0, oldValue);
          }
          return result;
        }
        function has(target, key) {
          var result = Reflect.has(target, key);
          if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
            track2(target, "has", key);
          }
          return result;
        }
        function ownKeys(target) {
          track2(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
          return Reflect.ownKeys(target);
        }
        var mutableHandlers = {
          get: get2,
          set: set2,
          deleteProperty: deleteProperty,
          has: has,
          ownKeys: ownKeys
        };
        var readonlyHandlers = {
          get: readonlyGet,
          set: function set(target, key) {
            {
              console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
            }
            return true;
          },
          deleteProperty: function deleteProperty(target, key) {
            {
              console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
            }
            return true;
          }
        };
        var shallowReactiveHandlers = /* @__PURE__ */shared.extend({}, mutableHandlers, {
          get: shallowGet,
          set: shallowSet
        });
        var shallowReadonlyHandlers = /* @__PURE__ */shared.extend({}, readonlyHandlers, {
          get: shallowReadonlyGet
        });
        var toReactive = function toReactive(value) {
          return shared.isObject(value) ? reactive3(value) : value;
        };
        var toReadonly = function toReadonly(value) {
          return shared.isObject(value) ? readonly(value) : value;
        };
        var toShallow = function toShallow(value) {
          return value;
        };
        var getProto = function getProto(v) {
          return Reflect.getPrototypeOf(v);
        };
        function get$1(target, key) {
          var isReadonly2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          target = target["__v_raw"];
          var rawTarget = toRaw2(target);
          var rawKey = toRaw2(key);
          if (key !== rawKey) {
            !isReadonly2 && track2(rawTarget, "get", key);
          }
          !isReadonly2 && track2(rawTarget, "get", rawKey);
          var _getProto = getProto(rawTarget),
            has2 = _getProto.has;
          var wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
          if (has2.call(rawTarget, key)) {
            return wrap(target.get(key));
          } else if (has2.call(rawTarget, rawKey)) {
            return wrap(target.get(rawKey));
          } else if (target !== rawTarget) {
            target.get(key);
          }
        }
        function has$1(key) {
          var isReadonly2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var target = this["__v_raw"];
          var rawTarget = toRaw2(target);
          var rawKey = toRaw2(key);
          if (key !== rawKey) {
            !isReadonly2 && track2(rawTarget, "has", key);
          }
          !isReadonly2 && track2(rawTarget, "has", rawKey);
          return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        }
        function size(target) {
          var isReadonly2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          target = target["__v_raw"];
          !isReadonly2 && track2(toRaw2(target), "iterate", ITERATE_KEY);
          return Reflect.get(target, "size", target);
        }
        function add(value) {
          value = toRaw2(value);
          var target = toRaw2(this);
          var proto = getProto(target);
          var hadKey = proto.has.call(target, value);
          if (!hadKey) {
            target.add(value);
            trigger2(target, "add", value, value);
          }
          return this;
        }
        function set$1(key, value) {
          value = toRaw2(value);
          var target = toRaw2(this);
          var _getProto2 = getProto(target),
            has2 = _getProto2.has,
            get3 = _getProto2.get;
          var hadKey = has2.call(target, key);
          if (!hadKey) {
            key = toRaw2(key);
            hadKey = has2.call(target, key);
          } else {
            checkIdentityKeys(target, has2, key);
          }
          var oldValue = get3.call(target, key);
          target.set(key, value);
          if (!hadKey) {
            trigger2(target, "add", key, value);
          } else if (shared.hasChanged(value, oldValue)) {
            trigger2(target, "set", key, value, oldValue);
          }
          return this;
        }
        function deleteEntry(key) {
          var target = toRaw2(this);
          var _getProto3 = getProto(target),
            has2 = _getProto3.has,
            get3 = _getProto3.get;
          var hadKey = has2.call(target, key);
          if (!hadKey) {
            key = toRaw2(key);
            hadKey = has2.call(target, key);
          } else {
            checkIdentityKeys(target, has2, key);
          }
          var oldValue = get3 ? get3.call(target, key) : void 0;
          var result = target["delete"](key);
          if (hadKey) {
            trigger2(target, "delete", key, void 0, oldValue);
          }
          return result;
        }
        function clear() {
          var target = toRaw2(this);
          var hadItems = target.size !== 0;
          var oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
          var result = target.clear();
          if (hadItems) {
            trigger2(target, "clear", void 0, void 0, oldTarget);
          }
          return result;
        }
        function createForEach(isReadonly2, isShallow) {
          return function forEach(callback, thisArg) {
            var observed = this;
            var target = observed["__v_raw"];
            var rawTarget = toRaw2(target);
            var wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
            !isReadonly2 && track2(rawTarget, "iterate", ITERATE_KEY);
            return target.forEach(function (value, key) {
              return callback.call(thisArg, wrap(value), wrap(key), observed);
            });
          };
        }
        function createIterableMethod(method, isReadonly2, isShallow) {
          return function () {
            var target = this["__v_raw"];
            var rawTarget = toRaw2(target);
            var targetIsMap = shared.isMap(rawTarget);
            var isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
            var isKeyOnly = method === "keys" && targetIsMap;
            var innerIterator = target[method].apply(target, arguments);
            var wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
            !isReadonly2 && track2(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
            return _defineProperty2({
              next: function next() {
                var _innerIterator$next = innerIterator.next(),
                  value = _innerIterator$next.value,
                  done = _innerIterator$next.done;
                return done ? {
                  value: value,
                  done: done
                } : {
                  value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                  done: done
                };
              }
            }, Symbol.iterator, function () {
              return this;
            });
          };
        }
        function createReadonlyMethod(type) {
          return function () {
            {
              var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
              console.warn("".concat(shared.capitalize(type), " operation ").concat(key, "failed: target is readonly."), toRaw2(this));
            }
            return type === "delete" ? false : this;
          };
        }
        function createInstrumentations() {
          var mutableInstrumentations2 = {
            get: function get(key) {
              return get$1(this, key);
            },
            get size() {
              return size(this);
            },
            has: has$1,
            add: add,
            set: set$1,
            "delete": deleteEntry,
            clear: clear,
            forEach: createForEach(false, false)
          };
          var shallowInstrumentations2 = {
            get: function get(key) {
              return get$1(this, key, false, true);
            },
            get size() {
              return size(this);
            },
            has: has$1,
            add: add,
            set: set$1,
            "delete": deleteEntry,
            clear: clear,
            forEach: createForEach(false, true)
          };
          var readonlyInstrumentations2 = {
            get: function get(key) {
              return get$1(this, key, true);
            },
            get size() {
              return size(this, true);
            },
            has: function has(key) {
              return has$1.call(this, key, true);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            "delete": createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(true, false)
          };
          var shallowReadonlyInstrumentations2 = {
            get: function get(key) {
              return get$1(this, key, true, true);
            },
            get size() {
              return size(this, true);
            },
            has: function has(key) {
              return has$1.call(this, key, true);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            "delete": createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(true, true)
          };
          var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
          iteratorMethods.forEach(function (method) {
            mutableInstrumentations2[method] = createIterableMethod(method, false, false);
            readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
            shallowInstrumentations2[method] = createIterableMethod(method, false, true);
            shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
          });
          return [mutableInstrumentations2, readonlyInstrumentations2, shallowInstrumentations2, shallowReadonlyInstrumentations2];
        }
        var _createInstrumentatio = /* @__PURE__ */createInstrumentations(),
          _createInstrumentatio2 = _slicedToArray(_createInstrumentatio, 4),
          mutableInstrumentations = _createInstrumentatio2[0],
          readonlyInstrumentations = _createInstrumentatio2[1],
          shallowInstrumentations = _createInstrumentatio2[2],
          shallowReadonlyInstrumentations = _createInstrumentatio2[3];
        function createInstrumentationGetter(isReadonly2, shallow) {
          var instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
          return function (target, key, receiver) {
            if (key === "__v_isReactive") {
              return !isReadonly2;
            } else if (key === "__v_isReadonly") {
              return isReadonly2;
            } else if (key === "__v_raw") {
              return target;
            }
            return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
          };
        }
        var mutableCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(false, false)
        };
        var shallowCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(false, true)
        };
        var readonlyCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(true, false)
        };
        var shallowReadonlyCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(true, true)
        };
        function checkIdentityKeys(target, has2, key) {
          var rawKey = toRaw2(key);
          if (rawKey !== key && has2.call(target, rawKey)) {
            var type = shared.toRawType(target);
            console.warn("Reactive ".concat(type, " contains both the raw and reactive versions of the same object").concat(type === "Map" ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."));
          }
        }
        var reactiveMap = /* @__PURE__ */new WeakMap();
        var shallowReactiveMap = /* @__PURE__ */new WeakMap();
        var readonlyMap = /* @__PURE__ */new WeakMap();
        var shallowReadonlyMap = /* @__PURE__ */new WeakMap();
        function targetTypeMap(rawType) {
          switch (rawType) {
            case "Object":
            case "Array":
              return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
              return 2;
            default:
              return 0;
          }
        }
        function getTargetType(value) {
          return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
        }
        function reactive3(target) {
          if (target && target["__v_isReadonly"]) {
            return target;
          }
          return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
        }
        function shallowReactive(target) {
          return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
        }
        function readonly(target) {
          return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
        }
        function shallowReadonly(target) {
          return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
        }
        function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
          if (!shared.isObject(target)) {
            {
              console.warn("value cannot be made reactive: ".concat(String(target)));
            }
            return target;
          }
          if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
            return target;
          }
          var existingProxy = proxyMap.get(target);
          if (existingProxy) {
            return existingProxy;
          }
          var targetType = getTargetType(target);
          if (targetType === 0) {
            return target;
          }
          var proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
          proxyMap.set(target, proxy);
          return proxy;
        }
        function isReactive2(value) {
          if (isReadonly(value)) {
            return isReactive2(value["__v_raw"]);
          }
          return !!(value && value["__v_isReactive"]);
        }
        function isReadonly(value) {
          return !!(value && value["__v_isReadonly"]);
        }
        function isProxy(value) {
          return isReactive2(value) || isReadonly(value);
        }
        function toRaw2(observed) {
          return observed && toRaw2(observed["__v_raw"]) || observed;
        }
        function markRaw(value) {
          shared.def(value, "__v_skip", true);
          return value;
        }
        var convert = function convert(val) {
          return shared.isObject(val) ? reactive3(val) : val;
        };
        function isRef(r) {
          return Boolean(r && r.__v_isRef === true);
        }
        function ref(value) {
          return createRef(value);
        }
        function shallowRef(value) {
          return createRef(value, true);
        }
        var RefImpl = /*#__PURE__*/function () {
          function RefImpl(value) {
            var _shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            _classCallCheck(this, RefImpl);
            this._shallow = _shallow;
            this.__v_isRef = true;
            this._rawValue = _shallow ? value : toRaw2(value);
            this._value = _shallow ? value : convert(value);
          }
          _createClass(RefImpl, [{
            key: "value",
            get: function get() {
              track2(toRaw2(this), "get", "value");
              return this._value;
            },
            set: function set(newVal) {
              newVal = this._shallow ? newVal : toRaw2(newVal);
              if (shared.hasChanged(newVal, this._rawValue)) {
                this._rawValue = newVal;
                this._value = this._shallow ? newVal : convert(newVal);
                trigger2(toRaw2(this), "set", "value", newVal);
              }
            }
          }]);
          return RefImpl;
        }();
        function createRef(rawValue) {
          var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (isRef(rawValue)) {
            return rawValue;
          }
          return new RefImpl(rawValue, shallow);
        }
        function triggerRef(ref2) {
          trigger2(toRaw2(ref2), "set", "value", ref2.value);
        }
        function unref(ref2) {
          return isRef(ref2) ? ref2.value : ref2;
        }
        var shallowUnwrapHandlers = {
          get: function get(target, key, receiver) {
            return unref(Reflect.get(target, key, receiver));
          },
          set: function set(target, key, value, receiver) {
            var oldValue = target[key];
            if (isRef(oldValue) && !isRef(value)) {
              oldValue.value = value;
              return true;
            } else {
              return Reflect.set(target, key, value, receiver);
            }
          }
        };
        function proxyRefs(objectWithRefs) {
          return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
        }
        var CustomRefImpl = /*#__PURE__*/function () {
          function CustomRefImpl(factory) {
            var _this = this;
            _classCallCheck(this, CustomRefImpl);
            this.__v_isRef = true;
            var _factory = factory(function () {
                return track2(_this, "get", "value");
              }, function () {
                return trigger2(_this, "set", "value");
              }),
              get3 = _factory.get,
              set3 = _factory.set;
            this._get = get3;
            this._set = set3;
          }
          _createClass(CustomRefImpl, [{
            key: "value",
            get: function get() {
              return this._get();
            },
            set: function set(newVal) {
              this._set(newVal);
            }
          }]);
          return CustomRefImpl;
        }();
        function customRef(factory) {
          return new CustomRefImpl(factory);
        }
        function toRefs(object) {
          if (!isProxy(object)) {
            console.warn("toRefs() expects a reactive object but received a plain one.");
          }
          var ret = shared.isArray(object) ? new Array(object.length) : {};
          for (var key in object) {
            ret[key] = toRef(object, key);
          }
          return ret;
        }
        var ObjectRefImpl = /*#__PURE__*/function () {
          function ObjectRefImpl(_object, _key) {
            _classCallCheck(this, ObjectRefImpl);
            this._object = _object;
            this._key = _key;
            this.__v_isRef = true;
          }
          _createClass(ObjectRefImpl, [{
            key: "value",
            get: function get() {
              return this._object[this._key];
            },
            set: function set(newVal) {
              this._object[this._key] = newVal;
            }
          }]);
          return ObjectRefImpl;
        }();
        function toRef(object, key) {
          return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
        }
        var ComputedRefImpl = /*#__PURE__*/function () {
          function ComputedRefImpl(getter, _setter, isReadonly2) {
            var _this2 = this;
            _classCallCheck(this, ComputedRefImpl);
            this._setter = _setter;
            this._dirty = true;
            this.__v_isRef = true;
            this.effect = effect3(getter, {
              lazy: true,
              scheduler: function scheduler() {
                if (!_this2._dirty) {
                  _this2._dirty = true;
                  trigger2(toRaw2(_this2), "set", "value");
                }
              }
            });
            this["__v_isReadonly"] = isReadonly2;
          }
          _createClass(ComputedRefImpl, [{
            key: "value",
            get: function get() {
              var self2 = toRaw2(this);
              if (self2._dirty) {
                self2._value = this.effect();
                self2._dirty = false;
              }
              track2(self2, "get", "value");
              return self2._value;
            },
            set: function set(newValue) {
              this._setter(newValue);
            }
          }]);
          return ComputedRefImpl;
        }();
        function computed(getterOrOptions) {
          var getter;
          var setter;
          if (shared.isFunction(getterOrOptions)) {
            getter = getterOrOptions;
            setter = function setter() {
              console.warn("Write operation failed: computed value is readonly");
            };
          } else {
            getter = getterOrOptions.get;
            setter = getterOrOptions.set;
          }
          return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
        }
        exports2.ITERATE_KEY = ITERATE_KEY;
        exports2.computed = computed;
        exports2.customRef = customRef;
        exports2.effect = effect3;
        exports2.enableTracking = enableTracking;
        exports2.isProxy = isProxy;
        exports2.isReactive = isReactive2;
        exports2.isReadonly = isReadonly;
        exports2.isRef = isRef;
        exports2.markRaw = markRaw;
        exports2.pauseTracking = pauseTracking;
        exports2.proxyRefs = proxyRefs;
        exports2.reactive = reactive3;
        exports2.readonly = readonly;
        exports2.ref = ref;
        exports2.resetTracking = resetTracking;
        exports2.shallowReactive = shallowReactive;
        exports2.shallowReadonly = shallowReadonly;
        exports2.shallowRef = shallowRef;
        exports2.stop = stop2;
        exports2.toRaw = toRaw2;
        exports2.toRef = toRef;
        exports2.toRefs = toRefs;
        exports2.track = track2;
        exports2.trigger = trigger2;
        exports2.triggerRef = triggerRef;
        exports2.unref = unref;
      }
    });
    var require_reactivity = __commonJS2({
      "node_modules/@vue/reactivity/index.js": function node_modulesVueReactivityIndexJs(exports2, module2) {
        "use strict";

        if (false) {} else {
          module2.exports = require_reactivity_cjs();
        }
      }
    });
    var module_exports = {};
    __export(module_exports, {
      "default": function _default() {
        return module_default;
      }
    });
    module.exports = __toCommonJS(module_exports);
    var flushPending = false;
    var flushing = false;
    var queue = [];
    var lastFlushedIndex = -1;
    function _scheduler(callback) {
      queueJob(callback);
    }
    function queueJob(job) {
      if (!queue.includes(job)) queue.push(job);
      queueFlush();
    }
    function dequeueJob(job) {
      var index = queue.indexOf(job);
      if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1);
    }
    function queueFlush() {
      if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
      }
    }
    function flushJobs() {
      flushPending = false;
      flushing = true;
      for (var i = 0; i < queue.length; i++) {
        queue[i]();
        lastFlushedIndex = i;
      }
      queue.length = 0;
      lastFlushedIndex = -1;
      flushing = false;
    }
    var reactive;
    var effect;
    var release;
    var raw;
    var shouldSchedule = true;
    function disableEffectScheduling(callback) {
      shouldSchedule = false;
      callback();
      shouldSchedule = true;
    }
    function setReactivityEngine(engine) {
      reactive = engine.reactive;
      release = engine.release;
      effect = function effect(callback) {
        return engine.effect(callback, {
          scheduler: function scheduler(task) {
            if (shouldSchedule) {
              _scheduler(task);
            } else {
              task();
            }
          }
        });
      };
      raw = engine.raw;
    }
    function overrideEffect(override) {
      effect = override;
    }
    function elementBoundEffect(el) {
      var cleanup2 = function cleanup2() {};
      var wrappedEffect = function wrappedEffect(callback) {
        var effectReference = effect(callback);
        if (!el._x_effects) {
          el._x_effects = /* @__PURE__ */new Set();
          el._x_runEffects = function () {
            el._x_effects.forEach(function (i) {
              return i();
            });
          };
        }
        el._x_effects.add(effectReference);
        cleanup2 = function cleanup2() {
          if (effectReference === void 0) return;
          el._x_effects["delete"](effectReference);
          release(effectReference);
        };
        return effectReference;
      };
      return [wrappedEffect, function () {
        cleanup2();
      }];
    }
    function dispatch3(el, name) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      el.dispatchEvent(new CustomEvent(name, {
        detail: detail,
        bubbles: true,
        composed: true,
        cancelable: true
      }));
    }
    function walk(el, callback) {
      if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach(function (el2) {
          return walk(el2, callback);
        });
        return;
      }
      var skip = false;
      callback(el, function () {
        return skip = true;
      });
      if (skip) return;
      var node = el.firstElementChild;
      while (node) {
        walk(node, callback, false);
        node = node.nextElementSibling;
      }
    }
    function warn(message2) {
      var _console;
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      (_console = console).warn.apply(_console, ["Alpine Warning: ".concat(message2)].concat(args));
    }
    var started = false;
    function start2() {
      if (started) warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
      started = true;
      if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
      dispatch3(document, "alpine:init");
      dispatch3(document, "alpine:initializing");
      startObservingMutations();
      onElAdded(function (el) {
        return initTree(el, walk);
      });
      onElRemoved(function (el) {
        return destroyTree(el);
      });
      onAttributesAdded(function (el, attrs) {
        directives(el, attrs).forEach(function (handle) {
          return handle();
        });
      });
      var outNestedComponents = function outNestedComponents(el) {
        return !closestRoot(el.parentElement, true);
      };
      Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach(function (el) {
        initTree(el);
      });
      dispatch3(document, "alpine:initialized");
    }
    var rootSelectorCallbacks = [];
    var initSelectorCallbacks = [];
    function rootSelectors() {
      return rootSelectorCallbacks.map(function (fn) {
        return fn();
      });
    }
    function allSelectors() {
      return rootSelectorCallbacks.concat(initSelectorCallbacks).map(function (fn) {
        return fn();
      });
    }
    function addRootSelector(selectorCallback) {
      rootSelectorCallbacks.push(selectorCallback);
    }
    function addInitSelector(selectorCallback) {
      initSelectorCallbacks.push(selectorCallback);
    }
    function closestRoot(el) {
      var includeInitSelectors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return findClosest(el, function (element) {
        var selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some(function (selector) {
          return element.matches(selector);
        })) return true;
      });
    }
    function findClosest(el, callback) {
      if (!el) return;
      if (callback(el)) return el;
      if (el._x_teleportBack) el = el._x_teleportBack;
      if (!el.parentElement) return;
      return findClosest(el.parentElement, callback);
    }
    function isRoot(el) {
      return rootSelectors().some(function (selector) {
        return el.matches(selector);
      });
    }
    var initInterceptors = [];
    function interceptInit(callback) {
      initInterceptors.push(callback);
    }
    function initTree(el) {
      var walker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : walk;
      var intercept = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      deferHandlingDirectives(function () {
        walker(el, function (el2, skip) {
          intercept(el2, skip);
          initInterceptors.forEach(function (i) {
            return i(el2, skip);
          });
          directives(el2, el2.attributes).forEach(function (handle) {
            return handle();
          });
          el2._x_ignore && skip();
        });
      });
    }
    function destroyTree(root) {
      walk(root, function (el) {
        cleanupAttributes(el);
        cleanupElement(el);
      });
    }
    var onAttributeAddeds = [];
    var onElRemoveds = [];
    var onElAddeds = [];
    function onElAdded(callback) {
      onElAddeds.push(callback);
    }
    function onElRemoved(el, callback) {
      if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
      } else {
        callback = el;
        onElRemoveds.push(callback);
      }
    }
    function onAttributesAdded(callback) {
      onAttributeAddeds.push(callback);
    }
    function onAttributeRemoved(el, name, callback) {
      if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
      if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
      el._x_attributeCleanups[name].push(callback);
    }
    function cleanupAttributes(el, names) {
      if (!el._x_attributeCleanups) return;
      Object.entries(el._x_attributeCleanups).forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
          name = _ref10[0],
          value = _ref10[1];
        if (names === void 0 || names.includes(name)) {
          value.forEach(function (i) {
            return i();
          });
          delete el._x_attributeCleanups[name];
        }
      });
    }
    function cleanupElement(el) {
      if (el._x_cleanups) {
        while (el._x_cleanups.length) el._x_cleanups.pop()();
      }
    }
    var observer = new MutationObserver(onMutate);
    var currentlyObserving = false;
    function startObservingMutations() {
      observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
      });
      currentlyObserving = true;
    }
    function stopObservingMutations() {
      flushObserver();
      observer.disconnect();
      currentlyObserving = false;
    }
    var recordQueue = [];
    var willProcessRecordQueue = false;
    function flushObserver() {
      recordQueue = recordQueue.concat(observer.takeRecords());
      if (recordQueue.length && !willProcessRecordQueue) {
        willProcessRecordQueue = true;
        queueMicrotask(function () {
          processRecordQueue();
          willProcessRecordQueue = false;
        });
      }
    }
    function processRecordQueue() {
      onMutate(recordQueue);
      recordQueue.length = 0;
    }
    function mutateDom(callback) {
      if (!currentlyObserving) return callback();
      stopObservingMutations();
      var result = callback();
      startObservingMutations();
      return result;
    }
    var isCollecting = false;
    var deferredMutations = [];
    function deferMutations() {
      isCollecting = true;
    }
    function flushAndStopDeferringMutations() {
      isCollecting = false;
      onMutate(deferredMutations);
      deferredMutations = [];
    }
    function onMutate(mutations) {
      if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
      }
      var addedNodes = [];
      var removedNodes = [];
      var addedAttributes = /* @__PURE__ */new Map();
      var removedAttributes = /* @__PURE__ */new Map();
      var _loop3 = function _loop3() {
        if (mutations[i].target._x_ignoreMutationObserver) return 1; // continue
        if (mutations[i].type === "childList") {
          mutations[i].addedNodes.forEach(function (node) {
            return node.nodeType === 1 && addedNodes.push(node);
          });
          mutations[i].removedNodes.forEach(function (node) {
            return node.nodeType === 1 && removedNodes.push(node);
          });
        }
        if (mutations[i].type === "attributes") {
          var el = mutations[i].target;
          var name = mutations[i].attributeName;
          var oldValue = mutations[i].oldValue;
          var add = function add() {
            if (!addedAttributes.has(el)) addedAttributes.set(el, []);
            addedAttributes.get(el).push({
              name: name,
              value: el.getAttribute(name)
            });
          };
          var remove = function remove() {
            if (!removedAttributes.has(el)) removedAttributes.set(el, []);
            removedAttributes.get(el).push(name);
          };
          if (el.hasAttribute(name) && oldValue === null) {
            add();
          } else if (el.hasAttribute(name)) {
            remove();
            add();
          } else {
            remove();
          }
        }
      };
      for (var i = 0; i < mutations.length; i++) {
        if (_loop3()) continue;
      }
      removedAttributes.forEach(function (attrs, el) {
        cleanupAttributes(el, attrs);
      });
      addedAttributes.forEach(function (attrs, el) {
        onAttributeAddeds.forEach(function (i) {
          return i(el, attrs);
        });
      });
      var _loop4 = function _loop4() {
        var node = _removedNodes[_i];
        if (addedNodes.includes(node)) return 1; // continue
        onElRemoveds.forEach(function (i) {
          return i(node);
        });
        destroyTree(node);
      };
      for (var _i = 0, _removedNodes = removedNodes; _i < _removedNodes.length; _i++) {
        if (_loop4()) continue;
      }
      addedNodes.forEach(function (node) {
        node._x_ignoreSelf = true;
        node._x_ignore = true;
      });
      var _loop5 = function _loop5() {
          var node = _addedNodes[_i2];
          if (removedNodes.includes(node)) return 0; // continue
          if (!node.isConnected) return 0; // continue
          delete node._x_ignoreSelf;
          delete node._x_ignore;
          onElAddeds.forEach(function (i) {
            return i(node);
          });
          node._x_ignore = true;
          node._x_ignoreSelf = true;
        },
        _ret;
      for (var _i2 = 0, _addedNodes = addedNodes; _i2 < _addedNodes.length; _i2++) {
        _ret = _loop5();
        if (_ret === 0) continue;
      }
      addedNodes.forEach(function (node) {
        delete node._x_ignoreSelf;
        delete node._x_ignore;
      });
      addedNodes = null;
      removedNodes = null;
      addedAttributes = null;
      removedAttributes = null;
    }
    function scope(node) {
      return mergeProxies(closestDataStack(node));
    }
    function addScopeToNode(node, data2, referenceNode) {
      node._x_dataStack = [data2].concat(_toConsumableArray(closestDataStack(referenceNode || node)));
      return function () {
        node._x_dataStack = node._x_dataStack.filter(function (i) {
          return i !== data2;
        });
      };
    }
    function closestDataStack(node) {
      if (node._x_dataStack) return node._x_dataStack;
      if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
        return closestDataStack(node.host);
      }
      if (!node.parentNode) {
        return [];
      }
      return closestDataStack(node.parentNode);
    }
    function mergeProxies(objects) {
      return new Proxy({
        objects: objects
      }, mergeProxyTrap);
    }
    var mergeProxyTrap = {
      ownKeys: function ownKeys(_ref11) {
        var objects = _ref11.objects;
        return Array.from(new Set(objects.flatMap(function (i) {
          return Object.keys(i);
        })));
      },
      has: function has(_ref12, name) {
        var objects = _ref12.objects;
        if (name == Symbol.unscopables) return false;
        return objects.some(function (obj) {
          return Object.prototype.hasOwnProperty.call(obj, name);
        });
      },
      get: function get(_ref13, name, thisProxy) {
        var objects = _ref13.objects;
        if (name == "toJSON") return collapseProxies;
        return Reflect.get(objects.find(function (obj) {
          return Object.prototype.hasOwnProperty.call(obj, name);
        }) || {}, name, thisProxy);
      },
      set: function set(_ref14, name, value) {
        var objects = _ref14.objects;
        return Reflect.set(objects.find(function (obj) {
          return Object.prototype.hasOwnProperty.call(obj, name);
        }) || objects[objects.length - 1], name, value);
      }
    };
    function collapseProxies() {
      var _this3 = this;
      var keys = Reflect.ownKeys(this);
      return keys.reduce(function (acc, key) {
        acc[key] = Reflect.get(_this3, key);
        return acc;
      }, {});
    }
    function initInterceptors2(data2) {
      var isObject2 = function isObject2(val) {
        return _typeof(val) === "object" && !Array.isArray(val) && val !== null;
      };
      var recurse = function recurse(obj) {
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(function (_ref15) {
          var _ref16 = _slicedToArray(_ref15, 2),
            key = _ref16[0],
            _ref16$ = _ref16[1],
            value = _ref16$.value,
            enumerable = _ref16$.enumerable;
          if (enumerable === false || value === void 0) return;
          var path = basePath === "" ? key : "".concat(basePath, ".").concat(key);
          if (_typeof(value) === "object" && value !== null && value._x_interceptor) {
            obj[key] = value.initialize(data2, path, key);
          } else {
            if (isObject2(value) && value !== obj && !(value instanceof Element)) {
              recurse(value, path);
            }
          }
        });
      };
      return recurse(data2);
    }
    function interceptor(callback) {
      var mutateObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize: function initialize(data2, path, key) {
          return callback(this.initialValue, function () {
            return get(data2, path);
          }, function (value) {
            return set(data2, path, value);
          }, path, key);
        }
      };
      mutateObj(obj);
      return function (initialValue) {
        if (_typeof(initialValue) === "object" && initialValue !== null && initialValue._x_interceptor) {
          var initialize = obj.initialize.bind(obj);
          obj.initialize = function (data2, path, key) {
            var innerValue = initialValue.initialize(data2, path, key);
            obj.initialValue = innerValue;
            return initialize(data2, path, key);
          };
        } else {
          obj.initialValue = initialValue;
        }
        return obj;
      };
    }
    function get(obj, path) {
      return path.split(".").reduce(function (carry, segment) {
        return carry[segment];
      }, obj);
    }
    function set(obj, path, value) {
      if (typeof path === "string") path = path.split(".");
      if (path.length === 1) obj[path[0]] = value;else if (path.length === 0) throw error;else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);else {
          obj[path[0]] = {};
          return set(obj[path[0]], path.slice(1), value);
        }
      }
    }
    var magics = {};
    function magic(name, callback) {
      magics[name] = callback;
    }
    function injectMagics(obj, el) {
      Object.entries(magics).forEach(function (_ref17) {
        var _ref18 = _slicedToArray(_ref17, 2),
          name = _ref18[0],
          callback = _ref18[1];
        var memoizedUtilities = null;
        function getUtilities() {
          if (memoizedUtilities) {
            return memoizedUtilities;
          } else {
            var _getElementBoundUtili = getElementBoundUtilities(el),
              _getElementBoundUtili2 = _slicedToArray(_getElementBoundUtili, 2),
              utilities = _getElementBoundUtili2[0],
              cleanup2 = _getElementBoundUtili2[1];
            memoizedUtilities = _objectSpread({
              interceptor: interceptor
            }, utilities);
            onElRemoved(el, cleanup2);
            return memoizedUtilities;
          }
        }
        Object.defineProperty(obj, "$".concat(name), {
          get: function get() {
            return callback(el, getUtilities());
          },
          enumerable: false
        });
      });
      return obj;
    }
    function tryCatch(el, expression, callback) {
      try {
        for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
          args[_key5 - 3] = arguments[_key5];
        }
        return callback.apply(void 0, args);
      } catch (e) {
        handleError(e, el, expression);
      }
    }
    function handleError(error2, el) {
      var expression = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
      Object.assign(error2, {
        el: el,
        expression: expression
      });
      console.warn("Alpine Expression Error: ".concat(error2.message, "\n\n").concat(expression ? 'Expression: "' + expression + '"\n\n' : ""), el);
      setTimeout(function () {
        throw error2;
      }, 0);
    }
    var shouldAutoEvaluateFunctions = true;
    function dontAutoEvaluateFunctions(callback) {
      var cache = shouldAutoEvaluateFunctions;
      shouldAutoEvaluateFunctions = false;
      var result = callback();
      shouldAutoEvaluateFunctions = cache;
      return result;
    }
    function evaluate(el, expression) {
      var extras = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var result;
      evaluateLater(el, expression)(function (value) {
        return result = value;
      }, extras);
      return result;
    }
    function evaluateLater() {
      return theEvaluatorFunction.apply(void 0, arguments);
    }
    var theEvaluatorFunction = normalEvaluator;
    function setEvaluator(newEvaluator) {
      theEvaluatorFunction = newEvaluator;
    }
    function normalEvaluator(el, expression) {
      var overriddenMagics = {};
      injectMagics(overriddenMagics, el);
      var dataStack = [overriddenMagics].concat(_toConsumableArray(closestDataStack(el)));
      var evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
      return tryCatch.bind(null, el, expression, evaluator);
    }
    function generateEvaluatorFromFunction(dataStack, func) {
      return function () {
        var receiver = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
        var _ref19 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref19$scope = _ref19.scope,
          scope2 = _ref19$scope === void 0 ? {} : _ref19$scope,
          _ref19$params = _ref19.params,
          params = _ref19$params === void 0 ? [] : _ref19$params;
        var result = func.apply(mergeProxies([scope2].concat(_toConsumableArray(dataStack))), params);
        runIfTypeOfFunction(receiver, result);
      };
    }
    var evaluatorMemo = {};
    function generateFunctionFromString(expression, el) {
      if (evaluatorMemo[expression]) {
        return evaluatorMemo[expression];
      }
      var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))).constructor;
      var rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? "(async()=>{ ".concat(expression, " })()") : expression;
      var safeAsyncFunction = function safeAsyncFunction() {
        try {
          var func2 = new AsyncFunction(["__self", "scope"], "with (scope) { __self.result = ".concat(rightSideSafeExpression, " }; __self.finished = true; return __self.result;"));
          Object.defineProperty(func2, "name", {
            value: "[Alpine] ".concat(expression)
          });
          return func2;
        } catch (error2) {
          handleError(error2, el, expression);
          return Promise.resolve();
        }
      };
      var func = safeAsyncFunction();
      evaluatorMemo[expression] = func;
      return func;
    }
    function generateEvaluatorFromString(dataStack, expression, el) {
      var func = generateFunctionFromString(expression, el);
      return function () {
        var receiver = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
        var _ref21 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref21$scope = _ref21.scope,
          scope2 = _ref21$scope === void 0 ? {} : _ref21$scope,
          _ref21$params = _ref21.params,
          params = _ref21$params === void 0 ? [] : _ref21$params;
        func.result = void 0;
        func.finished = false;
        var completeScope = mergeProxies([scope2].concat(_toConsumableArray(dataStack)));
        if (typeof func === "function") {
          var promise = func(func, completeScope)["catch"](function (error2) {
            return handleError(error2, el, expression);
          });
          if (func.finished) {
            runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
            func.result = void 0;
          } else {
            promise.then(function (result) {
              runIfTypeOfFunction(receiver, result, completeScope, params, el);
            })["catch"](function (error2) {
              return handleError(error2, el, expression);
            })["finally"](function () {
              return func.result = void 0;
            });
          }
        }
      };
    }
    function runIfTypeOfFunction(receiver, value, scope2, params, el) {
      if (shouldAutoEvaluateFunctions && typeof value === "function") {
        var result = value.apply(scope2, params);
        if (result instanceof Promise) {
          result.then(function (i) {
            return runIfTypeOfFunction(receiver, i, scope2, params);
          })["catch"](function (error2) {
            return handleError(error2, el, value);
          });
        } else {
          receiver(result);
        }
      } else if (_typeof(value) === "object" && value instanceof Promise) {
        value.then(function (i) {
          return receiver(i);
        });
      } else {
        receiver(value);
      }
    }
    var prefixAsString = "x-";
    function prefix() {
      var subject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return prefixAsString + subject;
    }
    function setPrefix(newPrefix) {
      prefixAsString = newPrefix;
    }
    var directiveHandlers = {};
    function directive2(name, callback) {
      directiveHandlers[name] = callback;
      return {
        before: function before(directive22) {
          if (!directiveHandlers[directive22]) {
            console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
            return;
          }
          var pos = directiveOrder.indexOf(directive22);
          directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
        }
      };
    }
    function directives(el, attributes, originalAttributeOverride) {
      attributes = Array.from(attributes);
      if (el._x_virtualDirectives) {
        var vAttributes = Object.entries(el._x_virtualDirectives).map(function (_ref22) {
          var _ref23 = _slicedToArray(_ref22, 2),
            name = _ref23[0],
            value = _ref23[1];
          return {
            name: name,
            value: value
          };
        });
        var staticAttributes = attributesOnly(vAttributes);
        vAttributes = vAttributes.map(function (attribute) {
          if (staticAttributes.find(function (attr) {
            return attr.name === attribute.name;
          })) {
            return {
              name: "x-bind:".concat(attribute.name),
              value: "\"".concat(attribute.value, "\"")
            };
          }
          return attribute;
        });
        attributes = attributes.concat(vAttributes);
      }
      var transformedAttributeMap = {};
      var directives2 = attributes.map(toTransformedAttributes(function (newName, oldName) {
        return transformedAttributeMap[newName] = oldName;
      })).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
      return directives2.map(function (directive22) {
        return getDirectiveHandler(el, directive22);
      });
    }
    function attributesOnly(attributes) {
      return Array.from(attributes).map(toTransformedAttributes()).filter(function (attr) {
        return !outNonAlpineAttributes(attr);
      });
    }
    var isDeferringHandlers = false;
    var directiveHandlerStacks = /* @__PURE__ */new Map();
    var currentHandlerStackKey = Symbol();
    function deferHandlingDirectives(callback) {
      isDeferringHandlers = true;
      var key = Symbol();
      currentHandlerStackKey = key;
      directiveHandlerStacks.set(key, []);
      var flushHandlers = function flushHandlers() {
        while (directiveHandlerStacks.get(key).length) directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks["delete"](key);
      };
      var stopDeferring = function stopDeferring() {
        isDeferringHandlers = false;
        flushHandlers();
      };
      callback(flushHandlers);
      stopDeferring();
    }
    function getElementBoundUtilities(el) {
      var cleanups = [];
      var cleanup2 = function cleanup2(callback) {
        return cleanups.push(callback);
      };
      var _elementBoundEffect = elementBoundEffect(el),
        _elementBoundEffect2 = _slicedToArray(_elementBoundEffect, 2),
        effect3 = _elementBoundEffect2[0],
        cleanupEffect = _elementBoundEffect2[1];
      cleanups.push(cleanupEffect);
      var utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup: cleanup2,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
      };
      var doCleanup = function doCleanup() {
        return cleanups.forEach(function (i) {
          return i();
        });
      };
      return [utilities, doCleanup];
    }
    function getDirectiveHandler(el, directive22) {
      var noop = function noop() {};
      var handler4 = directiveHandlers[directive22.type] || noop;
      var _getElementBoundUtili3 = getElementBoundUtilities(el),
        _getElementBoundUtili4 = _slicedToArray(_getElementBoundUtili3, 2),
        utilities = _getElementBoundUtili4[0],
        cleanup2 = _getElementBoundUtili4[1];
      onAttributeRemoved(el, directive22.original, cleanup2);
      var fullHandler = function fullHandler() {
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler4.inline && handler4.inline(el, directive22, utilities);
        handler4 = handler4.bind(handler4, el, directive22, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
      };
      fullHandler.runCleanups = cleanup2;
      return fullHandler;
    }
    var startingWith = function startingWith(subject, replacement) {
      return function (_ref24) {
        var name = _ref24.name,
          value = _ref24.value;
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
          name: name,
          value: value
        };
      };
    };
    var into = function into(i) {
      return i;
    };
    function toTransformedAttributes() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      return function (_ref25) {
        var name = _ref25.name,
          value = _ref25.value;
        var _attributeTransformer = attributeTransformers.reduce(function (carry, transform) {
            return transform(carry);
          }, {
            name: name,
            value: value
          }),
          newName = _attributeTransformer.name,
          newValue = _attributeTransformer.value;
        if (newName !== name) callback(newName, name);
        return {
          name: newName,
          value: newValue
        };
      };
    }
    var attributeTransformers = [];
    function mapAttributes(callback) {
      attributeTransformers.push(callback);
    }
    function outNonAlpineAttributes(_ref26) {
      var name = _ref26.name;
      return alpineAttributeRegex().test(name);
    }
    var alpineAttributeRegex = function alpineAttributeRegex() {
      return new RegExp("^".concat(prefixAsString, "([^:^.]+)\\b"));
    };
    function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
      return function (_ref27) {
        var name = _ref27.name,
          value = _ref27.value;
        var typeMatch = name.match(alpineAttributeRegex());
        var valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
        var modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        var original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
          type: typeMatch ? typeMatch[1] : null,
          value: valueMatch ? valueMatch[1] : null,
          modifiers: modifiers.map(function (i) {
            return i.replace(".", "");
          }),
          expression: value,
          original: original
        };
      };
    }
    var DEFAULT = "DEFAULT";
    var directiveOrder = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "modelable", "transition", "show", "if", DEFAULT, "teleport"];
    function byPriority(a, b) {
      var typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
      var typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    }
    var tickStack = [];
    var isHolding = false;
    function nextTick() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      queueMicrotask(function () {
        isHolding || setTimeout(function () {
          releaseNextTicks();
        });
      });
      return new Promise(function (res) {
        tickStack.push(function () {
          callback();
          res();
        });
      });
    }
    function releaseNextTicks() {
      isHolding = false;
      while (tickStack.length) tickStack.shift()();
    }
    function holdNextTicks() {
      isHolding = true;
    }
    function setClasses(el, value) {
      if (Array.isArray(value)) {
        return setClassesFromString(el, value.join(" "));
      } else if (_typeof(value) === "object" && value !== null) {
        return setClassesFromObject(el, value);
      } else if (typeof value === "function") {
        return setClasses(el, value());
      }
      return setClassesFromString(el, value);
    }
    function setClassesFromString(el, classString) {
      var split = function split(classString2) {
        return classString2.split(" ").filter(Boolean);
      };
      var missingClasses = function missingClasses(classString2) {
        return classString2.split(" ").filter(function (i) {
          return !el.classList.contains(i);
        }).filter(Boolean);
      };
      var addClassesAndReturnUndo = function addClassesAndReturnUndo(classes) {
        var _el$classList;
        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
        return function () {
          var _el$classList2;
          (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classes));
        };
      };
      classString = classString === true ? classString = "" : classString || "";
      return addClassesAndReturnUndo(missingClasses(classString));
    }
    function setClassesFromObject(el, classObject) {
      var split = function split(classString) {
        return classString.split(" ").filter(Boolean);
      };
      var forAdd = Object.entries(classObject).flatMap(function (_ref28) {
        var _ref29 = _slicedToArray(_ref28, 2),
          classString = _ref29[0],
          bool = _ref29[1];
        return bool ? split(classString) : false;
      }).filter(Boolean);
      var forRemove = Object.entries(classObject).flatMap(function (_ref30) {
        var _ref31 = _slicedToArray(_ref30, 2),
          classString = _ref31[0],
          bool = _ref31[1];
        return !bool ? split(classString) : false;
      }).filter(Boolean);
      var added = [];
      var removed = [];
      forRemove.forEach(function (i) {
        if (el.classList.contains(i)) {
          el.classList.remove(i);
          removed.push(i);
        }
      });
      forAdd.forEach(function (i) {
        if (!el.classList.contains(i)) {
          el.classList.add(i);
          added.push(i);
        }
      });
      return function () {
        removed.forEach(function (i) {
          return el.classList.add(i);
        });
        added.forEach(function (i) {
          return el.classList.remove(i);
        });
      };
    }
    function setStyles(el, value) {
      if (_typeof(value) === "object" && value !== null) {
        return setStylesFromObject(el, value);
      }
      return setStylesFromString(el, value);
    }
    function setStylesFromObject(el, value) {
      var previousStyles = {};
      Object.entries(value).forEach(function (_ref32) {
        var _ref33 = _slicedToArray(_ref32, 2),
          key = _ref33[0],
          value2 = _ref33[1];
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) {
          key = kebabCase(key);
        }
        el.style.setProperty(key, value2);
      });
      setTimeout(function () {
        if (el.style.length === 0) {
          el.removeAttribute("style");
        }
      });
      return function () {
        setStyles(el, previousStyles);
      };
    }
    function setStylesFromString(el, value) {
      var cache = el.getAttribute("style", value);
      el.setAttribute("style", value);
      return function () {
        el.setAttribute("style", cache || "");
      };
    }
    function kebabCase(subject) {
      return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function once(callback) {
      var fallback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var called = false;
      return function () {
        if (!called) {
          called = true;
          callback.apply(this, arguments);
        } else {
          fallback2.apply(this, arguments);
        }
      };
    }
    directive2("transition", function (el, _ref34, _ref35) {
      var value = _ref34.value,
        modifiers = _ref34.modifiers,
        expression = _ref34.expression;
      var evaluate2 = _ref35.evaluate;
      if (typeof expression === "function") expression = evaluate2(expression);
      if (expression === false) return;
      if (!expression || typeof expression === "boolean") {
        registerTransitionsFromHelper(el, modifiers, value);
      } else {
        registerTransitionsFromClassString(el, expression, value);
      }
    });
    function registerTransitionsFromClassString(el, classString, stage) {
      registerTransitionObject(el, setClasses, "");
      var directiveStorageMap = {
        "enter": function enter(classes) {
          el._x_transition.enter.during = classes;
        },
        "enter-start": function enterStart(classes) {
          el._x_transition.enter.start = classes;
        },
        "enter-end": function enterEnd(classes) {
          el._x_transition.enter.end = classes;
        },
        "leave": function leave(classes) {
          el._x_transition.leave.during = classes;
        },
        "leave-start": function leaveStart(classes) {
          el._x_transition.leave.start = classes;
        },
        "leave-end": function leaveEnd(classes) {
          el._x_transition.leave.end = classes;
        }
      };
      directiveStorageMap[stage](classString);
    }
    function registerTransitionsFromHelper(el, modifiers, stage) {
      registerTransitionObject(el, setStyles);
      var doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
      var transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
      var transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
      if (modifiers.includes("in") && !doesntSpecify) {
        modifiers = modifiers.filter(function (i, index) {
          return index < modifiers.indexOf("out");
        });
      }
      if (modifiers.includes("out") && !doesntSpecify) {
        modifiers = modifiers.filter(function (i, index) {
          return index > modifiers.indexOf("out");
        });
      }
      var wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
      var wantsOpacity = wantsAll || modifiers.includes("opacity");
      var wantsScale = wantsAll || modifiers.includes("scale");
      var opacityValue = wantsOpacity ? 0 : 1;
      var scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
      var delay = modifierValue(modifiers, "delay", 0) / 1e3;
      var origin = modifierValue(modifiers, "origin", "center");
      var property = "opacity, transform";
      var durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
      var durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
      var easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";
      if (transitioningIn) {
        el._x_transition.enter.during = {
          transformOrigin: origin,
          transitionDelay: "".concat(delay, "s"),
          transitionProperty: property,
          transitionDuration: "".concat(durationIn, "s"),
          transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
          opacity: opacityValue,
          transform: "scale(".concat(scaleValue, ")")
        };
        el._x_transition.enter.end = {
          opacity: 1,
          transform: "scale(1)"
        };
      }
      if (transitioningOut) {
        el._x_transition.leave.during = {
          transformOrigin: origin,
          transitionDelay: "".concat(delay, "s"),
          transitionProperty: property,
          transitionDuration: "".concat(durationOut, "s"),
          transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
          opacity: 1,
          transform: "scale(1)"
        };
        el._x_transition.leave.end = {
          opacity: opacityValue,
          transform: "scale(".concat(scaleValue, ")")
        };
      }
    }
    function registerTransitionObject(el, setFunction) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!el._x_transition) el._x_transition = {
        enter: {
          during: defaultValue,
          start: defaultValue,
          end: defaultValue
        },
        leave: {
          during: defaultValue,
          start: defaultValue,
          end: defaultValue
        },
        "in": function _in() {
          var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
          var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out: function out() {
          var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
          var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
    }
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function (el, value, show, hide) {
      var nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
      var clickAwayCompatibleShow = function clickAwayCompatibleShow() {
        return nextTick2(show);
      };
      if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
          el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition["in"](show) : clickAwayCompatibleShow();
        } else {
          el._x_transition ? el._x_transition["in"](show) : clickAwayCompatibleShow();
        }
        return;
      }
      el._x_hidePromise = el._x_transition ? new Promise(function (resolve, reject) {
        el._x_transition.out(function () {}, function () {
          return resolve(hide);
        });
        el._x_transitioning.beforeCancel(function () {
          return reject({
            isFromCancelledTransition: true
          });
        });
      }) : Promise.resolve(hide);
      queueMicrotask(function () {
        var closest = closestHide(el);
        if (closest) {
          if (!closest._x_hideChildren) closest._x_hideChildren = [];
          closest._x_hideChildren.push(el);
        } else {
          nextTick2(function () {
            var hideAfterChildren = function hideAfterChildren(el2) {
              var carry = Promise.all([el2._x_hidePromise].concat(_toConsumableArray((el2._x_hideChildren || []).map(hideAfterChildren)))).then(function (_ref36) {
                var _ref37 = _slicedToArray(_ref36, 1),
                  i = _ref37[0];
                return i();
              });
              delete el2._x_hidePromise;
              delete el2._x_hideChildren;
              return carry;
            };
            hideAfterChildren(el)["catch"](function (e) {
              if (!e.isFromCancelledTransition) throw e;
            });
          });
        }
      });
    };
    function closestHide(el) {
      var parent = el.parentNode;
      if (!parent) return;
      return parent._x_hidePromise ? parent : closestHide(parent);
    }
    function transition(el, setFunction) {
      var _ref38 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _during = _ref38.during,
        start22 = _ref38.start,
        _end = _ref38.end;
      var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
      var after = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
      if (el._x_transitioning) el._x_transitioning.cancel();
      if (Object.keys(_during).length === 0 && Object.keys(start22).length === 0 && Object.keys(_end).length === 0) {
        before();
        after();
        return;
      }
      var undoStart, undoDuring, undoEnd;
      performTransition(el, {
        start: function start() {
          undoStart = setFunction(el, start22);
        },
        during: function during() {
          undoDuring = setFunction(el, _during);
        },
        before: before,
        end: function end() {
          undoStart();
          undoEnd = setFunction(el, _end);
        },
        after: after,
        cleanup: function cleanup() {
          undoDuring();
          undoEnd();
        }
      });
    }
    function performTransition(el, stages) {
      var interrupted, reachedBefore, reachedEnd;
      var finish = once(function () {
        mutateDom(function () {
          interrupted = true;
          if (!reachedBefore) stages.before();
          if (!reachedEnd) {
            stages.end();
            releaseNextTicks();
          }
          stages.after();
          if (el.isConnected) stages.cleanup();
          delete el._x_transitioning;
        });
      });
      el._x_transitioning = {
        beforeCancels: [],
        beforeCancel: function beforeCancel(callback) {
          this.beforeCancels.push(callback);
        },
        cancel: once(function () {
          while (this.beforeCancels.length) {
            this.beforeCancels.shift()();
          }
          ;
          finish();
        }),
        finish: finish
      };
      mutateDom(function () {
        stages.start();
        stages.during();
      });
      holdNextTicks();
      requestAnimationFrame(function () {
        if (interrupted) return;
        var duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        var delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(function () {
          stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(function () {
          if (interrupted) return;
          mutateDom(function () {
            stages.end();
          });
          releaseNextTicks();
          setTimeout(el._x_transitioning.finish, duration + delay);
          reachedEnd = true;
        });
      });
    }
    function modifierValue(modifiers, key, fallback2) {
      if (modifiers.indexOf(key) === -1) return fallback2;
      var rawValue = modifiers[modifiers.indexOf(key) + 1];
      if (!rawValue) return fallback2;
      if (key === "scale") {
        if (isNaN(rawValue)) return fallback2;
      }
      if (key === "duration" || key === "delay") {
        var match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
      }
      if (key === "origin") {
        if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
          return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
        }
      }
      return rawValue;
    }
    var isCloning = false;
    function skipDuringClone(callback) {
      var fallback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      return function () {
        return isCloning ? fallback2.apply(void 0, arguments) : callback.apply(void 0, arguments);
      };
    }
    function onlyDuringClone(callback) {
      return function () {
        return isCloning && callback.apply(void 0, arguments);
      };
    }
    function cloneNode(from, to) {
      if (from._x_dataStack) {
        to._x_dataStack = from._x_dataStack;
        to.setAttribute("data-has-alpine-state", true);
      }
      isCloning = true;
      dontRegisterReactiveSideEffects(function () {
        initTree(to, function (el, callback) {
          callback(el, function () {});
        });
      });
      isCloning = false;
    }
    var isCloningLegacy = false;
    function clone(oldEl, newEl) {
      if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
      isCloning = true;
      isCloningLegacy = true;
      dontRegisterReactiveSideEffects(function () {
        cloneTree(newEl);
      });
      isCloning = false;
      isCloningLegacy = false;
    }
    function cloneTree(el) {
      var hasRunThroughFirstEl = false;
      var shallowWalker = function shallowWalker(el2, callback) {
        walk(el2, function (el3, skip) {
          if (hasRunThroughFirstEl && isRoot(el3)) return skip();
          hasRunThroughFirstEl = true;
          callback(el3, skip);
        });
      };
      initTree(el, shallowWalker);
    }
    function dontRegisterReactiveSideEffects(callback) {
      var cache = effect;
      overrideEffect(function (callback2, el) {
        var storedEffect = cache(callback2);
        release(storedEffect);
        return function () {};
      });
      callback();
      overrideEffect(cache);
    }
    function shouldSkipRegisteringDataDuringClone(el) {
      if (!isCloning) return false;
      if (isCloningLegacy) return true;
      return el.hasAttribute("data-has-alpine-state");
    }
    function bind(el, name, value) {
      var modifiers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      if (!el._x_bindings) el._x_bindings = reactive({});
      el._x_bindings[name] = value;
      name = modifiers.includes("camel") ? camelCase(name) : name;
      switch (name) {
        case "value":
          bindInputValue(el, value);
          break;
        case "style":
          bindStyles(el, value);
          break;
        case "class":
          bindClasses(el, value);
          break;
        case "selected":
        case "checked":
          bindAttributeAndProperty(el, name, value);
          break;
        default:
          bindAttribute(el, name, value);
          break;
      }
    }
    function bindInputValue(el, value) {
      if (el.type === "radio") {
        if (el.attributes.value === void 0) {
          el.value = value;
        }
        if (window.fromModel) {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === "checkbox") {
        if (Number.isInteger(value)) {
          el.value = value;
        } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
          el.value = String(value);
        } else {
          if (Array.isArray(value)) {
            el.checked = value.some(function (val) {
              return checkedAttrLooseCompare(val, el.value);
            });
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === "SELECT") {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value === void 0 ? "" : value;
      }
    }
    function bindClasses(el, value) {
      if (el._x_undoAddedClasses) el._x_undoAddedClasses();
      el._x_undoAddedClasses = setClasses(el, value);
    }
    function bindStyles(el, value) {
      if (el._x_undoAddedStyles) el._x_undoAddedStyles();
      el._x_undoAddedStyles = setStyles(el, value);
    }
    function bindAttributeAndProperty(el, name, value) {
      bindAttribute(el, name, value);
      setPropertyIfChanged(el, name, value);
    }
    function bindAttribute(el, name, value) {
      if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
        el.removeAttribute(name);
      } else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
      }
    }
    function setIfChanged(el, attrName, value) {
      if (el.getAttribute(attrName) != value) {
        el.setAttribute(attrName, value);
      }
    }
    function setPropertyIfChanged(el, propName, value) {
      if (el[propName] !== value) {
        el[propName] = value;
      }
    }
    function updateSelect(el, value) {
      var arrayWrappedValue = [].concat(value).map(function (value2) {
        return value2 + "";
      });
      Array.from(el.options).forEach(function (option) {
        option.selected = arrayWrappedValue.includes(option.value);
      });
    }
    function camelCase(subject) {
      return subject.toLowerCase().replace(/-(\w)/g, function (match, _char) {
        return _char.toUpperCase();
      });
    }
    function checkedAttrLooseCompare(valueA, valueB) {
      return valueA == valueB;
    }
    function isBooleanAttr(attrName) {
      var booleanAttributes = ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"];
      return booleanAttributes.includes(attrName);
    }
    function attributeShouldntBePreservedIfFalsy(name) {
      return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
    }
    function getBinding(el, name, fallback2) {
      if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
      return getAttributeBinding(el, name, fallback2);
    }
    function extractProp(el, name, fallback2) {
      var extract = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
      if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
        var binding = el._x_inlineBindings[name];
        binding.extract = extract;
        return dontAutoEvaluateFunctions(function () {
          return evaluate(el, binding.expression);
        });
      }
      return getAttributeBinding(el, name, fallback2);
    }
    function getAttributeBinding(el, name, fallback2) {
      var attr = el.getAttribute(name);
      if (attr === null) return typeof fallback2 === "function" ? fallback2() : fallback2;
      if (attr === "") return true;
      if (isBooleanAttr(name)) {
        return !![name, "true"].includes(attr);
      }
      return attr;
    }
    function debounce2(func, wait) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function later() {
          timeout = null;
          func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
    function throttle(func, limit) {
      var inThrottle;
      return function () {
        var context = this,
          args = arguments;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(function () {
            return inThrottle = false;
          }, limit);
        }
      };
    }
    function entangle(_ref39, _ref40) {
      var outerGet = _ref39.get,
        outerSet = _ref39.set;
      var innerGet = _ref40.get,
        innerSet = _ref40.set;
      var firstRun = true;
      var outerHash, innerHash, outerHashLatest, innerHashLatest;
      var reference = effect(function () {
        var outer, inner;
        if (firstRun) {
          outer = outerGet();
          innerSet(JSON.parse(JSON.stringify(outer)));
          inner = innerGet();
          firstRun = false;
        } else {
          outer = outerGet();
          inner = innerGet();
          outerHashLatest = JSON.stringify(outer);
          innerHashLatest = JSON.stringify(inner);
          if (outerHashLatest !== outerHash) {
            inner = innerGet();
            innerSet(outer);
            inner = outer;
          } else {
            outerSet(JSON.parse(innerHashLatest != null ? innerHashLatest : null));
            outer = inner;
          }
        }
        outerHash = JSON.stringify(outer);
        innerHash = JSON.stringify(inner);
      });
      return function () {
        release(reference);
      };
    }
    function plugin(callback) {
      var callbacks = Array.isArray(callback) ? callback : [callback];
      callbacks.forEach(function (i) {
        return i(alpine_default);
      });
    }
    var stores = {};
    var isReactive = false;
    function store(name, value) {
      if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
      }
      if (value === void 0) {
        return stores[name];
      }
      stores[name] = value;
      if (_typeof(value) === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
        stores[name].init();
      }
      initInterceptors2(stores[name]);
    }
    function getStores() {
      return stores;
    }
    var binds = {};
    function bind2(name, bindings) {
      var getBindings = typeof bindings !== "function" ? function () {
        return bindings;
      } : bindings;
      if (name instanceof Element) {
        return applyBindingsObject(name, getBindings());
      } else {
        binds[name] = getBindings;
      }
      return function () {};
    }
    function injectBindingProviders(obj) {
      Object.entries(binds).forEach(function (_ref41) {
        var _ref42 = _slicedToArray(_ref41, 2),
          name = _ref42[0],
          callback = _ref42[1];
        Object.defineProperty(obj, name, {
          get: function get() {
            return function () {
              return callback.apply(void 0, arguments);
            };
          }
        });
      });
      return obj;
    }
    function applyBindingsObject(el, obj, original) {
      var cleanupRunners = [];
      while (cleanupRunners.length) cleanupRunners.pop()();
      var attributes = Object.entries(obj).map(function (_ref43) {
        var _ref44 = _slicedToArray(_ref43, 2),
          name = _ref44[0],
          value = _ref44[1];
        return {
          name: name,
          value: value
        };
      });
      var staticAttributes = attributesOnly(attributes);
      attributes = attributes.map(function (attribute) {
        if (staticAttributes.find(function (attr) {
          return attr.name === attribute.name;
        })) {
          return {
            name: "x-bind:".concat(attribute.name),
            value: "\"".concat(attribute.value, "\"")
          };
        }
        return attribute;
      });
      directives(el, attributes, original).map(function (handle) {
        cleanupRunners.push(handle.runCleanups);
        handle();
      });
      return function () {
        while (cleanupRunners.length) cleanupRunners.pop()();
      };
    }
    var datas = {};
    function data(name, callback) {
      datas[name] = callback;
    }
    function injectDataProviders(obj, context) {
      Object.entries(datas).forEach(function (_ref45) {
        var _ref46 = _slicedToArray(_ref45, 2),
          name = _ref46[0],
          callback = _ref46[1];
        Object.defineProperty(obj, name, {
          get: function get() {
            return function () {
              return callback.bind(context).apply(void 0, arguments);
            };
          },
          enumerable: false
        });
      });
      return obj;
    }
    var Alpine21 = {
      get reactive() {
        return reactive;
      },
      get release() {
        return release;
      },
      get effect() {
        return effect;
      },
      get raw() {
        return raw;
      },
      version: "3.13.1",
      flushAndStopDeferringMutations: flushAndStopDeferringMutations,
      dontAutoEvaluateFunctions: dontAutoEvaluateFunctions,
      disableEffectScheduling: disableEffectScheduling,
      startObservingMutations: startObservingMutations,
      stopObservingMutations: stopObservingMutations,
      setReactivityEngine: setReactivityEngine,
      onAttributeRemoved: onAttributeRemoved,
      onAttributesAdded: onAttributesAdded,
      closestDataStack: closestDataStack,
      skipDuringClone: skipDuringClone,
      onlyDuringClone: onlyDuringClone,
      addRootSelector: addRootSelector,
      addInitSelector: addInitSelector,
      addScopeToNode: addScopeToNode,
      deferMutations: deferMutations,
      mapAttributes: mapAttributes,
      evaluateLater: evaluateLater,
      interceptInit: interceptInit,
      setEvaluator: setEvaluator,
      mergeProxies: mergeProxies,
      extractProp: extractProp,
      findClosest: findClosest,
      onElRemoved: onElRemoved,
      closestRoot: closestRoot,
      destroyTree: destroyTree,
      interceptor: interceptor,
      transition: transition,
      setStyles: setStyles,
      mutateDom: mutateDom,
      directive: directive2,
      entangle: entangle,
      throttle: throttle,
      debounce: debounce2,
      evaluate: evaluate,
      initTree: initTree,
      nextTick: nextTick,
      prefixed: prefix,
      prefix: setPrefix,
      plugin: plugin,
      magic: magic,
      store: store,
      start: start2,
      clone: clone,
      cloneNode: cloneNode,
      bound: getBinding,
      $data: scope,
      walk: walk,
      data: data,
      bind: bind2
    };
    var alpine_default = Alpine21;
    var import_reactivity9 = __toESM2(require_reactivity());
    magic("nextTick", function () {
      return nextTick;
    });
    magic("dispatch", function (el) {
      return dispatch3.bind(dispatch3, el);
    });
    magic("watch", function (el, _ref47) {
      var evaluateLater2 = _ref47.evaluateLater,
        effect3 = _ref47.effect;
      return function (key, callback) {
        var evaluate2 = evaluateLater2(key);
        var firstTime = true;
        var oldValue;
        var effectReference = effect3(function () {
          return evaluate2(function (value) {
            JSON.stringify(value);
            if (!firstTime) {
              queueMicrotask(function () {
                callback(value, oldValue);
                oldValue = value;
              });
            } else {
              oldValue = value;
            }
            firstTime = false;
          });
        });
        el._x_effects["delete"](effectReference);
      };
    });
    magic("store", getStores);
    magic("data", function (el) {
      return scope(el);
    });
    magic("root", function (el) {
      return closestRoot(el);
    });
    magic("refs", function (el) {
      if (el._x_refs_proxy) return el._x_refs_proxy;
      el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
      return el._x_refs_proxy;
    });
    function getArrayOfRefObject(el) {
      var refObjects = [];
      var currentEl = el;
      while (currentEl) {
        if (currentEl._x_refs) refObjects.push(currentEl._x_refs);
        currentEl = currentEl.parentNode;
      }
      return refObjects;
    }
    var globalIdMemo = {};
    function findAndIncrementId(name) {
      if (!globalIdMemo[name]) globalIdMemo[name] = 0;
      return ++globalIdMemo[name];
    }
    function closestIdRoot(el, name) {
      return findClosest(el, function (element) {
        if (element._x_ids && element._x_ids[name]) return true;
      });
    }
    function setIdRoot(el, name) {
      if (!el._x_ids) el._x_ids = {};
      if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
    }
    magic("id", function (el) {
      return function (name) {
        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var root = closestIdRoot(el, name);
        var id = root ? root._x_ids[name] : findAndIncrementId(name);
        return key ? "".concat(name, "-").concat(id, "-").concat(key) : "".concat(name, "-").concat(id);
      };
    });
    magic("el", function (el) {
      return el;
    });
    warnMissingPluginMagic("Focus", "focus", "focus");
    warnMissingPluginMagic("Persist", "persist", "persist");
    function warnMissingPluginMagic(name, magicName, slug) {
      magic(magicName, function (el) {
        return warn("You can't use [$".concat(magicName, "] without first installing the \"").concat(name, "\" plugin here: https://alpinejs.dev/plugins/").concat(slug), el);
      });
    }
    directive2("modelable", function (el, _ref48, _ref49) {
      var expression = _ref48.expression;
      var effect3 = _ref49.effect,
        evaluateLater2 = _ref49.evaluateLater,
        cleanup2 = _ref49.cleanup;
      var func = evaluateLater2(expression);
      var innerGet = function innerGet() {
        var result;
        func(function (i) {
          return result = i;
        });
        return result;
      };
      var evaluateInnerSet = evaluateLater2("".concat(expression, " = __placeholder"));
      var innerSet = function innerSet(val) {
        return evaluateInnerSet(function () {}, {
          scope: {
            "__placeholder": val
          }
        });
      };
      var initialValue = innerGet();
      innerSet(initialValue);
      queueMicrotask(function () {
        if (!el._x_model) return;
        el._x_removeModelListeners["default"]();
        var outerGet = el._x_model.get;
        var outerSet = el._x_model.set;
        var releaseEntanglement = entangle({
          get: function get() {
            return outerGet();
          },
          set: function set(value) {
            outerSet(value);
          }
        }, {
          get: function get() {
            return innerGet();
          },
          set: function set(value) {
            innerSet(value);
          }
        });
        cleanup2(releaseEntanglement);
      });
    });
    directive2("teleport", function (el, _ref50, _ref51) {
      var modifiers = _ref50.modifiers,
        expression = _ref50.expression;
      var cleanup2 = _ref51.cleanup;
      if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
      var target = getTarget(expression);
      var clone2 = el.content.cloneNode(true).firstElementChild;
      el._x_teleport = clone2;
      clone2._x_teleportBack = el;
      el.setAttribute("data-teleport-template", true);
      clone2.setAttribute("data-teleport-target", true);
      if (el._x_forwardEvents) {
        el._x_forwardEvents.forEach(function (eventName) {
          clone2.addEventListener(eventName, function (e) {
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
          });
        });
      }
      addScopeToNode(clone2, {}, el);
      var placeInDom = function placeInDom(clone3, target2, modifiers2) {
        if (modifiers2.includes("prepend")) {
          target2.parentNode.insertBefore(clone3, target2);
        } else if (modifiers2.includes("append")) {
          target2.parentNode.insertBefore(clone3, target2.nextSibling);
        } else {
          target2.appendChild(clone3);
        }
      };
      mutateDom(function () {
        placeInDom(clone2, target, modifiers);
        initTree(clone2);
        clone2._x_ignore = true;
      });
      el._x_teleportPutBack = function () {
        var target2 = getTarget(expression);
        mutateDom(function () {
          placeInDom(el._x_teleport, target2, modifiers);
        });
      };
      cleanup2(function () {
        return clone2.remove();
      });
    });
    var teleportContainerDuringClone = document.createElement("div");
    function getTarget(expression) {
      var target = skipDuringClone(function () {
        return document.querySelector(expression);
      }, function () {
        return teleportContainerDuringClone;
      })();
      if (!target) warn("Cannot find x-teleport element for selector: \"".concat(expression, "\""));
      return target;
    }
    var handler = function handler() {};
    handler.inline = function (el, _ref52, _ref53) {
      var modifiers = _ref52.modifiers;
      var cleanup2 = _ref53.cleanup;
      modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
      cleanup2(function () {
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
      });
    };
    directive2("ignore", handler);
    directive2("effect", function (el, _ref54, _ref55) {
      var expression = _ref54.expression;
      var effect3 = _ref55.effect;
      return effect3(evaluateLater(el, expression));
    });
    function on3(el, event, modifiers, callback) {
      var listenerTarget = el;
      var handler4 = function handler4(e) {
        return callback(e);
      };
      var options = {};
      var wrapHandler = function wrapHandler(callback2, wrapper) {
        return function (e) {
          return wrapper(callback2, e);
        };
      };
      if (modifiers.includes("dot")) event = dotSyntax(event);
      if (modifiers.includes("camel")) event = camelCase2(event);
      if (modifiers.includes("passive")) options.passive = true;
      if (modifiers.includes("capture")) options.capture = true;
      if (modifiers.includes("window")) listenerTarget = window;
      if (modifiers.includes("document")) listenerTarget = document;
      if (modifiers.includes("debounce")) {
        var nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        var wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = debounce2(handler4, wait);
      }
      if (modifiers.includes("throttle")) {
        var _nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        var _wait = isNumeric(_nextModifier.split("ms")[0]) ? Number(_nextModifier.split("ms")[0]) : 250;
        handler4 = throttle(handler4, _wait);
      }
      if (modifiers.includes("prevent")) handler4 = wrapHandler(handler4, function (next, e) {
        e.preventDefault();
        next(e);
      });
      if (modifiers.includes("stop")) handler4 = wrapHandler(handler4, function (next, e) {
        e.stopPropagation();
        next(e);
      });
      if (modifiers.includes("self")) handler4 = wrapHandler(handler4, function (next, e) {
        e.target === el && next(e);
      });
      if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler4 = wrapHandler(handler4, function (next, e) {
          if (el.contains(e.target)) return;
          if (e.target.isConnected === false) return;
          if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
          if (el._x_isShown === false) return;
          next(e);
        });
      }
      if (modifiers.includes("once")) {
        handler4 = wrapHandler(handler4, function (next, e) {
          next(e);
          listenerTarget.removeEventListener(event, handler4, options);
        });
      }
      handler4 = wrapHandler(handler4, function (next, e) {
        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }
        next(e);
      });
      listenerTarget.addEventListener(event, handler4, options);
      return function () {
        listenerTarget.removeEventListener(event, handler4, options);
      };
    }
    function dotSyntax(subject) {
      return subject.replace(/-/g, ".");
    }
    function camelCase2(subject) {
      return subject.toLowerCase().replace(/-(\w)/g, function (match, _char2) {
        return _char2.toUpperCase();
      });
    }
    function isNumeric(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    function kebabCase2(subject) {
      if ([" ", "_"].includes(subject)) return subject;
      return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
    }
    function isKeyEvent(event) {
      return ["keydown", "keyup"].includes(event);
    }
    function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
      var keyModifiers = modifiers.filter(function (i) {
        return !["window", "document", "prevent", "stop", "once", "capture"].includes(i);
      });
      if (keyModifiers.includes("debounce")) {
        var debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
      }
      if (keyModifiers.includes("throttle")) {
        var _debounceIndex = keyModifiers.indexOf("throttle");
        keyModifiers.splice(_debounceIndex, isNumeric((keyModifiers[_debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
      }
      if (keyModifiers.length === 0) return false;
      if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
      var systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
      var selectedSystemKeyModifiers = systemKeyModifiers.filter(function (modifier) {
        return keyModifiers.includes(modifier);
      });
      keyModifiers = keyModifiers.filter(function (i) {
        return !selectedSystemKeyModifiers.includes(i);
      });
      if (selectedSystemKeyModifiers.length > 0) {
        var activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(function (modifier) {
          if (modifier === "cmd" || modifier === "super") modifier = "meta";
          return e["".concat(modifier, "Key")];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
          if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
      }
      return true;
    }
    function keyToModifiers(key) {
      if (!key) return [];
      key = kebabCase2(key);
      var modifierToKeyMap = {
        "ctrl": "control",
        "slash": "/",
        "space": " ",
        "spacebar": " ",
        "cmd": "meta",
        "esc": "escape",
        "up": "arrow-up",
        "down": "arrow-down",
        "left": "arrow-left",
        "right": "arrow-right",
        "period": ".",
        "equal": "=",
        "minus": "-",
        "underscore": "_"
      };
      modifierToKeyMap[key] = key;
      return Object.keys(modifierToKeyMap).map(function (modifier) {
        if (modifierToKeyMap[modifier] === key) return modifier;
      }).filter(function (modifier) {
        return modifier;
      });
    }
    directive2("model", function (el, _ref56, _ref57) {
      var modifiers = _ref56.modifiers,
        expression = _ref56.expression;
      var effect3 = _ref57.effect,
        cleanup2 = _ref57.cleanup;
      var scopeTarget = el;
      if (modifiers.includes("parent")) {
        scopeTarget = el.parentNode;
      }
      var evaluateGet = evaluateLater(scopeTarget, expression);
      var evaluateSet;
      if (typeof expression === "string") {
        evaluateSet = evaluateLater(scopeTarget, "".concat(expression, " = __placeholder"));
      } else if (typeof expression === "function" && typeof expression() === "string") {
        evaluateSet = evaluateLater(scopeTarget, "".concat(expression(), " = __placeholder"));
      } else {
        evaluateSet = function evaluateSet() {};
      }
      var getValue = function getValue() {
        var result;
        evaluateGet(function (value) {
          return result = value;
        });
        return isGetterSetter(result) ? result.get() : result;
      };
      var setValue = function setValue(value) {
        var result;
        evaluateGet(function (value2) {
          return result = value2;
        });
        if (isGetterSetter(result)) {
          result.set(value);
        } else {
          evaluateSet(function () {}, {
            scope: {
              "__placeholder": value
            }
          });
        }
      };
      if (typeof expression === "string" && el.type === "radio") {
        mutateDom(function () {
          if (!el.hasAttribute("name")) el.setAttribute("name", expression);
        });
      }
      var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
      var removeListener = isCloning ? function () {} : on3(el, event, modifiers, function (e) {
        setValue(getInputValue(el, modifiers, e, getValue()));
      });
      if (modifiers.includes("fill")) {
        if ([null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue())) {
          el.dispatchEvent(new Event(event, {}));
        }
      }
      if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
      el._x_removeModelListeners["default"] = removeListener;
      cleanup2(function () {
        return el._x_removeModelListeners["default"]();
      });
      if (el.form) {
        var removeResetListener = on3(el.form, "reset", [], function (e) {
          nextTick(function () {
            return el._x_model && el._x_model.set(el.value);
          });
        });
        cleanup2(function () {
          return removeResetListener();
        });
      }
      el._x_model = {
        get: function get() {
          return getValue();
        },
        set: function set(value) {
          setValue(value);
        }
      };
      el._x_forceModelUpdate = function (value) {
        if (value === void 0 && typeof expression === "string" && expression.match(/\./)) value = "";
        window.fromModel = true;
        mutateDom(function () {
          return bind(el, "value", value);
        });
        delete window.fromModel;
      };
      effect3(function () {
        var value = getValue();
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate(value);
      });
    });
    function getInputValue(el, modifiers, event, currentValue) {
      return mutateDom(function () {
        if (event instanceof CustomEvent && event.detail !== void 0) return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            var newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
            return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(function (el2) {
              return !checkedAttrLooseCompare2(el2, newValue);
            });
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map(function (option) {
            var rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event.target.selectedOptions).map(function (option) {
            return option.value || option.text;
          });
        } else {
          var rawValue = event.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    }
    function safeParseNumber(rawValue) {
      var number = rawValue ? parseFloat(rawValue) : null;
      return isNumeric2(number) ? number : rawValue;
    }
    function checkedAttrLooseCompare2(valueA, valueB) {
      return valueA == valueB;
    }
    function isNumeric2(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    function isGetterSetter(value) {
      return value !== null && _typeof(value) === "object" && typeof value.get === "function" && typeof value.set === "function";
    }
    directive2("cloak", function (el) {
      return queueMicrotask(function () {
        return mutateDom(function () {
          return el.removeAttribute(prefix("cloak"));
        });
      });
    });
    addInitSelector(function () {
      return "[".concat(prefix("init"), "]");
    });
    directive2("init", skipDuringClone(function (el, _ref58, _ref59) {
      var expression = _ref58.expression;
      var evaluate2 = _ref59.evaluate;
      if (typeof expression === "string") {
        return !!expression.trim() && evaluate2(expression, {}, false);
      }
      return evaluate2(expression, {}, false);
    }));
    directive2("text", function (el, _ref60, _ref61) {
      var expression = _ref60.expression;
      var effect3 = _ref61.effect,
        evaluateLater2 = _ref61.evaluateLater;
      var evaluate2 = evaluateLater2(expression);
      effect3(function () {
        evaluate2(function (value) {
          mutateDom(function () {
            el.textContent = value;
          });
        });
      });
    });
    directive2("html", function (el, _ref62, _ref63) {
      var expression = _ref62.expression;
      var effect3 = _ref63.effect,
        evaluateLater2 = _ref63.evaluateLater;
      var evaluate2 = evaluateLater2(expression);
      effect3(function () {
        evaluate2(function (value) {
          mutateDom(function () {
            el.innerHTML = value;
            el._x_ignoreSelf = true;
            initTree(el);
            delete el._x_ignoreSelf;
          });
        });
      });
    });
    mapAttributes(startingWith(":", into(prefix("bind:"))));
    var handler2 = function handler2(el, _ref64, _ref65) {
      var value = _ref64.value,
        modifiers = _ref64.modifiers,
        expression = _ref64.expression,
        original = _ref64.original;
      var effect3 = _ref65.effect;
      if (!value) {
        var bindingProviders = {};
        injectBindingProviders(bindingProviders);
        var getBindings = evaluateLater(el, expression);
        getBindings(function (bindings) {
          applyBindingsObject(el, bindings, original);
        }, {
          scope: bindingProviders
        });
        return;
      }
      if (value === "key") return storeKeyForXFor(el, expression);
      if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
        return;
      }
      var evaluate2 = evaluateLater(el, expression);
      effect3(function () {
        return evaluate2(function (result) {
          if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
            result = "";
          }
          mutateDom(function () {
            return bind(el, value, result, modifiers);
          });
        });
      });
    };
    handler2.inline = function (el, _ref66) {
      var value = _ref66.value,
        modifiers = _ref66.modifiers,
        expression = _ref66.expression;
      if (!value) return;
      if (!el._x_inlineBindings) el._x_inlineBindings = {};
      el._x_inlineBindings[value] = {
        expression: expression,
        extract: false
      };
    };
    directive2("bind", handler2);
    function storeKeyForXFor(el, expression) {
      el._x_keyExpression = expression;
    }
    addRootSelector(function () {
      return "[".concat(prefix("data"), "]");
    });
    directive2("data", function (el, _ref67, _ref68) {
      var expression = _ref67.expression;
      var cleanup2 = _ref68.cleanup;
      if (shouldSkipRegisteringDataDuringClone(el)) return;
      expression = expression === "" ? "{}" : expression;
      var magicContext = {};
      injectMagics(magicContext, el);
      var dataProviderContext = {};
      injectDataProviders(dataProviderContext, magicContext);
      var data2 = evaluate(el, expression, {
        scope: dataProviderContext
      });
      if (data2 === void 0 || data2 === true) data2 = {};
      injectMagics(data2, el);
      var reactiveData = reactive(data2);
      initInterceptors2(reactiveData);
      var undo = addScopeToNode(el, reactiveData);
      reactiveData["init"] && evaluate(el, reactiveData["init"]);
      cleanup2(function () {
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
      });
    });
    directive2("show", function (el, _ref69, _ref70) {
      var modifiers = _ref69.modifiers,
        expression = _ref69.expression;
      var effect3 = _ref70.effect;
      var evaluate2 = evaluateLater(el, expression);
      if (!el._x_doHide) el._x_doHide = function () {
        mutateDom(function () {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
      if (!el._x_doShow) el._x_doShow = function () {
        mutateDom(function () {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
      var hide = function hide() {
        el._x_doHide();
        el._x_isShown = false;
      };
      var show = function show() {
        el._x_doShow();
        el._x_isShown = true;
      };
      var clickAwayCompatibleShow = function clickAwayCompatibleShow() {
        return setTimeout(show);
      };
      var toggle = once(function (value) {
        return value ? show() : hide();
      }, function (value) {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        } else {
          value ? clickAwayCompatibleShow() : hide();
        }
      });
      var oldValue;
      var firstTime = true;
      effect3(function () {
        return evaluate2(function (value) {
          if (!firstTime && value === oldValue) return;
          if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
          toggle(value);
          oldValue = value;
          firstTime = false;
        });
      });
    });
    directive2("for", function (el, _ref71, _ref72) {
      var expression = _ref71.expression;
      var effect3 = _ref72.effect,
        cleanup2 = _ref72.cleanup;
      var iteratorNames = parseForExpression(expression);
      var evaluateItems = evaluateLater(el, iteratorNames.items);
      var evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
      el._x_prevKeys = [];
      el._x_lookup = {};
      effect3(function () {
        return loop(el, iteratorNames, evaluateItems, evaluateKey);
      });
      cleanup2(function () {
        Object.values(el._x_lookup).forEach(function (el2) {
          return el2.remove();
        });
        delete el._x_prevKeys;
        delete el._x_lookup;
      });
    });
    function loop(el, iteratorNames, evaluateItems, evaluateKey) {
      var isObject2 = function isObject2(i) {
        return _typeof(i) === "object" && !Array.isArray(i);
      };
      var templateEl = el;
      evaluateItems(function (items) {
        if (isNumeric3(items) && items >= 0) {
          items = Array.from(Array(items).keys(), function (i) {
            return i + 1;
          });
        }
        if (items === void 0) items = [];
        var lookup = el._x_lookup;
        var prevKeys = el._x_prevKeys;
        var scopes = [];
        var keys = [];
        if (isObject2(items)) {
          items = Object.entries(items).map(function (_ref73) {
            var _ref74 = _slicedToArray(_ref73, 2),
              key = _ref74[0],
              value = _ref74[1];
            var scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey(function (value2) {
              return keys.push(value2);
            }, {
              scope: _objectSpread({
                index: key
              }, scope2)
            });
            scopes.push(scope2);
          });
        } else {
          for (var i = 0; i < items.length; i++) {
            var scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey(function (value) {
              return keys.push(value);
            }, {
              scope: _objectSpread({
                index: i
              }, scope2)
            });
            scopes.push(scope2);
          }
        }
        var adds = [];
        var moves = [];
        var removes = [];
        var sames = [];
        for (var _i3 = 0; _i3 < prevKeys.length; _i3++) {
          var key = prevKeys[_i3];
          if (keys.indexOf(key) === -1) removes.push(key);
        }
        prevKeys = prevKeys.filter(function (key) {
          return !removes.includes(key);
        });
        var lastKey = "template";
        for (var _i4 = 0; _i4 < keys.length; _i4++) {
          var _key6 = keys[_i4];
          var prevIndex = prevKeys.indexOf(_key6);
          if (prevIndex === -1) {
            prevKeys.splice(_i4, 0, _key6);
            adds.push([lastKey, _i4]);
          } else if (prevIndex !== _i4) {
            var keyInSpot = prevKeys.splice(_i4, 1)[0];
            var keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
            prevKeys.splice(_i4, 0, keyForSpot);
            prevKeys.splice(prevIndex, 0, keyInSpot);
            moves.push([keyInSpot, keyForSpot]);
          } else {
            sames.push(_key6);
          }
          lastKey = _key6;
        }
        for (var _i5 = 0; _i5 < removes.length; _i5++) {
          var _key7 = removes[_i5];
          if (!!lookup[_key7]._x_effects) {
            lookup[_key7]._x_effects.forEach(dequeueJob);
          }
          lookup[_key7].remove();
          lookup[_key7] = null;
          delete lookup[_key7];
        }
        var _loop6 = function _loop6() {
          var _moves$_i = _slicedToArray(moves[_i6], 2),
            keyInSpot = _moves$_i[0],
            keyForSpot = _moves$_i[1];
          var elInSpot = lookup[keyInSpot];
          var elForSpot = lookup[keyForSpot];
          var marker = document.createElement("div");
          mutateDom(function () {
            if (!elForSpot) warn("x-for \":key\" is undefined or invalid", templateEl);
            elForSpot.after(marker);
            elInSpot.after(elForSpot);
            elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
            marker.before(elInSpot);
            elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
            marker.remove();
          });
          elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
        };
        for (var _i6 = 0; _i6 < moves.length; _i6++) {
          _loop6();
        }
        var _loop7 = function _loop7() {
          var _adds$_i = _slicedToArray(adds[_i7], 2),
            lastKey2 = _adds$_i[0],
            index = _adds$_i[1];
          var lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
          if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
          var scope2 = scopes[index];
          var key = keys[index];
          var clone2 = document.importNode(templateEl.content, true).firstElementChild;
          var reactiveScope = reactive(scope2);
          addScopeToNode(clone2, reactiveScope, templateEl);
          clone2._x_refreshXForScope = function (newScope) {
            Object.entries(newScope).forEach(function (_ref75) {
              var _ref76 = _slicedToArray(_ref75, 2),
                key2 = _ref76[0],
                value = _ref76[1];
              reactiveScope[key2] = value;
            });
          };
          mutateDom(function () {
            lastEl.after(clone2);
            initTree(clone2);
          });
          if (_typeof(key) === "object") {
            warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
          }
          lookup[key] = clone2;
        };
        for (var _i7 = 0; _i7 < adds.length; _i7++) {
          _loop7();
        }
        for (var _i8 = 0; _i8 < sames.length; _i8++) {
          lookup[sames[_i8]]._x_refreshXForScope(scopes[keys.indexOf(sames[_i8])]);
        }
        templateEl._x_prevKeys = keys;
      });
    }
    function parseForExpression(expression) {
      var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      var stripParensRE = /^\s*\(|\)\s*$/g;
      var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      var inMatch = expression.match(forAliasRE);
      if (!inMatch) return;
      var res = {};
      res.items = inMatch[2].trim();
      var item = inMatch[1].replace(stripParensRE, "").trim();
      var iteratorMatch = item.match(forIteratorRE);
      if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) {
          res.collection = iteratorMatch[2].trim();
        }
      } else {
        res.item = item;
      }
      return res;
    }
    function getIterationScopeVariables(iteratorNames, item, index, items) {
      var scopeVariables = {};
      if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        var names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map(function (i) {
          return i.trim();
        });
        names.forEach(function (name, i) {
          scopeVariables[name] = item[i];
        });
      } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && _typeof(item) === "object") {
        var _names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map(function (i) {
          return i.trim();
        });
        _names.forEach(function (name) {
          scopeVariables[name] = item[name];
        });
      } else {
        scopeVariables[iteratorNames.item] = item;
      }
      if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
      if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
      return scopeVariables;
    }
    function isNumeric3(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    function handler3() {}
    handler3.inline = function (el, _ref77, _ref78) {
      var expression = _ref77.expression;
      var cleanup2 = _ref78.cleanup;
      var root = closestRoot(el);
      if (!root._x_refs) root._x_refs = {};
      root._x_refs[expression] = el;
      cleanup2(function () {
        return delete root._x_refs[expression];
      });
    };
    directive2("ref", handler3);
    directive2("if", function (el, _ref79, _ref80) {
      var expression = _ref79.expression;
      var effect3 = _ref80.effect,
        cleanup2 = _ref80.cleanup;
      if (el.tagName.toLowerCase() !== "template") warn("x-if can only be used on a <template> tag", el);
      var evaluate2 = evaluateLater(el, expression);
      var show = function show() {
        if (el._x_currentIfEl) return el._x_currentIfEl;
        var clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(function () {
          el.after(clone2);
          initTree(clone2);
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = function () {
          walk(clone2, function (node) {
            if (!!node._x_effects) {
              node._x_effects.forEach(dequeueJob);
            }
          });
          clone2.remove();
          delete el._x_currentIfEl;
        };
        return clone2;
      };
      var hide = function hide() {
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
      };
      effect3(function () {
        return evaluate2(function (value) {
          value ? show() : hide();
        });
      });
      cleanup2(function () {
        return el._x_undoIf && el._x_undoIf();
      });
    });
    directive2("id", function (el, _ref81, _ref82) {
      var expression = _ref81.expression;
      var evaluate2 = _ref82.evaluate;
      var names = evaluate2(expression);
      names.forEach(function (name) {
        return setIdRoot(el, name);
      });
    });
    mapAttributes(startingWith("@", into(prefix("on:"))));
    directive2("on", skipDuringClone(function (el, _ref83, _ref84) {
      var value = _ref83.value,
        modifiers = _ref83.modifiers,
        expression = _ref83.expression;
      var cleanup2 = _ref84.cleanup;
      var evaluate2 = expression ? evaluateLater(el, expression) : function () {};
      if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
      }
      var removeListener = on3(el, value, modifiers, function (e) {
        evaluate2(function () {}, {
          scope: {
            "$event": e
          },
          params: [e]
        });
      });
      cleanup2(function () {
        return removeListener();
      });
    }));
    warnMissingPluginDirective("Collapse", "collapse", "collapse");
    warnMissingPluginDirective("Intersect", "intersect", "intersect");
    warnMissingPluginDirective("Focus", "trap", "focus");
    warnMissingPluginDirective("Mask", "mask", "mask");
    function warnMissingPluginDirective(name, directiveName, slug) {
      directive2(directiveName, function (el) {
        return warn("You can't use [x-".concat(directiveName, "] without first installing the \"").concat(name, "\" plugin here: https://alpinejs.dev/plugins/").concat(slug), el);
      });
    }
    alpine_default.setEvaluator(normalEvaluator);
    alpine_default.setReactivityEngine({
      reactive: import_reactivity9.reactive,
      effect: import_reactivity9.effect,
      release: import_reactivity9.stop,
      raw: import_reactivity9.toRaw
    });
    var src_default = alpine_default;
    var module_default = src_default;
  }
});

// ../alpine/packages/collapse/dist/module.cjs.js
var require_module_cjs2 = __commonJS({
  "../alpine/packages/collapse/dist/module.cjs.js": function alpinePackagesCollapseDistModuleCjsJs(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = function __export(target, all2) {
      for (var name in all2) __defProp2(target, name, {
        get: all2[name],
        enumerable: true
      });
    };
    var __copyProps2 = function __copyProps2(to, from, except, desc) {
      if (from && _typeof(from) === "object" || typeof from === "function") {
        var _iterator3 = _createForOfIteratorHelper(__getOwnPropNames2(from)),
          _step3;
        try {
          var _loop8 = function _loop8() {
            var key = _step3.value;
            if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
              get: function get() {
                return from[key];
              },
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
            });
          };
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop8();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return to;
    };
    var __toCommonJS = function __toCommonJS(mod) {
      return __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
    };
    var module_exports = {};
    __export(module_exports, {
      "default": function _default() {
        return module_default;
      }
    });
    module.exports = __toCommonJS(module_exports);
    function src_default(Alpine21) {
      Alpine21.directive("collapse", collapse2);
      collapse2.inline = function (el, _ref85) {
        var modifiers = _ref85.modifiers;
        if (!modifiers.includes("min")) return;
        el._x_doShow = function () {};
        el._x_doHide = function () {};
      };
      function collapse2(el, _ref86) {
        var modifiers = _ref86.modifiers;
        var duration = modifierValue(modifiers, "duration", 250) / 1e3;
        var floor = modifierValue(modifiers, "min", 0);
        var fullyHide = !modifiers.includes("min");
        if (!el._x_isShown) el.style.height = "".concat(floor, "px");
        if (!el._x_isShown && fullyHide) el.hidden = true;
        if (!el._x_isShown) el.style.overflow = "hidden";
        var setFunction = function setFunction(el2, styles) {
          var revertFunction = Alpine21.setStyles(el2, styles);
          return styles.height ? function () {} : revertFunction;
        };
        var transitionStyles = {
          transitionProperty: "height",
          transitionDuration: "".concat(duration, "s"),
          transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
        };
        el._x_transition = {
          "in": function _in() {
            var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
            var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            if (fullyHide) el.hidden = false;
            if (fullyHide) el.style.display = null;
            var current = el.getBoundingClientRect().height;
            el.style.height = "auto";
            var full = el.getBoundingClientRect().height;
            if (current === full) {
              current = floor;
            }
            Alpine21.transition(el, Alpine21.setStyles, {
              during: transitionStyles,
              start: {
                height: current + "px"
              },
              end: {
                height: full + "px"
              }
            }, function () {
              return el._x_isShown = true;
            }, function () {
              if (el.getBoundingClientRect().height == full) {
                el.style.overflow = null;
              }
            });
          },
          out: function out() {
            var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
            var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            var full = el.getBoundingClientRect().height;
            Alpine21.transition(el, setFunction, {
              during: transitionStyles,
              start: {
                height: full + "px"
              },
              end: {
                height: floor + "px"
              }
            }, function () {
              return el.style.overflow = "hidden";
            }, function () {
              el._x_isShown = false;
              if (el.style.height == "".concat(floor, "px") && fullyHide) {
                el.style.display = "none";
                el.hidden = true;
              }
            });
          }
        };
      }
    }
    function modifierValue(modifiers, key, fallback2) {
      if (modifiers.indexOf(key) === -1) return fallback2;
      var rawValue = modifiers[modifiers.indexOf(key) + 1];
      if (!rawValue) return fallback2;
      if (key === "duration") {
        var match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
      }
      if (key === "min") {
        var _match = rawValue.match(/([0-9]+)px/);
        if (_match) return _match[1];
      }
      return rawValue;
    }
    var module_default = src_default;
  }
});

// ../../../../usr/local/lib/node_modules/@alpinejs/focus/dist/module.cjs.js
var require_module_cjs3 = __commonJS({
  "../../../../usr/local/lib/node_modules/@alpinejs/focus/dist/module.cjs.js": function usrLocalLibNode_modulesAlpinejsFocusDistModuleCjsJs(exports) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __markAsModule = function __markAsModule(target) {
      return __defProp2(target, "__esModule", {
        value: true
      });
    };
    var __commonJS2 = function __commonJS2(callback, module2) {
      return function () {
        if (!module2) {
          module2 = {
            exports: {}
          };
          callback(module2.exports, module2);
        }
        return module2.exports;
      };
    };
    var __export = function __export(target, all2) {
      for (var name in all2) __defProp2(target, name, {
        get: all2[name],
        enumerable: true
      });
    };
    var __exportStar = function __exportStar(target, module2, desc) {
      if (module2 && _typeof(module2) === "object" || typeof module2 === "function") {
        var _iterator4 = _createForOfIteratorHelper(__getOwnPropNames2(module2)),
          _step4;
        try {
          var _loop9 = function _loop9() {
            var key = _step4.value;
            if (!__hasOwnProp2.call(target, key) && key !== "default") __defProp2(target, key, {
              get: function get() {
                return module2[key];
              },
              enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable
            });
          };
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            _loop9();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      return target;
    };
    var __toModule = function __toModule(module2) {
      return __exportStar(__markAsModule(__defProp2(module2 != null ? __create2(__getProtoOf2(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {
        get: function get() {
          return module2["default"];
        },
        enumerable: true
      } : {
        value: module2,
        enumerable: true
      })), module2);
    };
    var require_dist = __commonJS2(function (exports2) {
      "use strict";

      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
      var candidateSelector = /* @__PURE__ */candidateSelectors.join(",");
      var matches = typeof Element === "undefined" ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      var getCandidates = function getCandidates2(el, includeContainer, filter) {
        var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
        if (includeContainer && matches.call(el, candidateSelector)) {
          candidates.unshift(el);
        }
        candidates = candidates.filter(filter);
        return candidates;
      };
      var isContentEditable = function isContentEditable2(node) {
        return node.contentEditable === "true";
      };
      var getTabindex = function getTabindex2(node) {
        var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
        if (!isNaN(tabindexAttr)) {
          return tabindexAttr;
        }
        if (isContentEditable(node)) {
          return 0;
        }
        if ((node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
          return 0;
        }
        return node.tabIndex;
      };
      var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
        return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
      };
      var isInput = function isInput2(node) {
        return node.tagName === "INPUT";
      };
      var isHiddenInput = function isHiddenInput2(node) {
        return isInput(node) && node.type === "hidden";
      };
      var isDetailsWithSummary = function isDetailsWithSummary2(node) {
        var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function (child) {
          return child.tagName === "SUMMARY";
        });
        return r;
      };
      var getCheckedRadio = function getCheckedRadio2(nodes, form) {
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].checked && nodes[i].form === form) {
            return nodes[i];
          }
        }
      };
      var isTabbableRadio = function isTabbableRadio2(node) {
        if (!node.name) {
          return true;
        }
        var radioScope = node.form || node.ownerDocument;
        var queryRadios = function queryRadios2(name) {
          return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
        };
        var radioSet;
        if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
          radioSet = queryRadios(window.CSS.escape(node.name));
        } else {
          try {
            radioSet = queryRadios(node.name);
          } catch (err) {
            console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
            return false;
          }
        }
        var checked = getCheckedRadio(radioSet, node.form);
        return !checked || checked === node;
      };
      var isRadio = function isRadio2(node) {
        return isInput(node) && node.type === "radio";
      };
      var isNonTabbableRadio = function isNonTabbableRadio2(node) {
        return isRadio(node) && !isTabbableRadio(node);
      };
      var isHidden = function isHidden2(node, displayCheck) {
        if (getComputedStyle(node).visibility === "hidden") {
          return true;
        }
        var isDirectSummary = matches.call(node, "details>summary:first-of-type");
        var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
        if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
          return true;
        }
        if (!displayCheck || displayCheck === "full") {
          while (node) {
            if (getComputedStyle(node).display === "none") {
              return true;
            }
            node = node.parentElement;
          }
        } else if (displayCheck === "non-zero-area") {
          var _node$getBoundingClie = node.getBoundingClientRect(),
            width = _node$getBoundingClie.width,
            height = _node$getBoundingClie.height;
          return width === 0 && height === 0;
        }
        return false;
      };
      var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
        if (isInput(node) || node.tagName === "SELECT" || node.tagName === "TEXTAREA" || node.tagName === "BUTTON") {
          var parentNode = node.parentElement;
          while (parentNode) {
            if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
              for (var i = 0; i < parentNode.children.length; i++) {
                var child = parentNode.children.item(i);
                if (child.tagName === "LEGEND") {
                  if (child.contains(node)) {
                    return false;
                  }
                  return true;
                }
              }
              return true;
            }
            parentNode = parentNode.parentElement;
          }
        }
        return false;
      };
      var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
        if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
          return false;
        }
        return true;
      };
      var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
        if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
          return false;
        }
        return true;
      };
      var tabbable = function tabbable2(el, options) {
        options = options || {};
        var regularTabbables = [];
        var orderedTabbables = [];
        var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
        candidates.forEach(function (candidate, i) {
          var candidateTabindex = getTabindex(candidate);
          if (candidateTabindex === 0) {
            regularTabbables.push(candidate);
          } else {
            orderedTabbables.push({
              documentOrder: i,
              tabIndex: candidateTabindex,
              node: candidate
            });
          }
        });
        var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
          return a.node;
        }).concat(regularTabbables);
        return tabbableNodes;
      };
      var focusable2 = function focusable3(el, options) {
        options = options || {};
        var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
        return candidates;
      };
      var isTabbable = function isTabbable2(node, options) {
        options = options || {};
        if (!node) {
          throw new Error("No node provided");
        }
        if (matches.call(node, candidateSelector) === false) {
          return false;
        }
        return isNodeMatchingSelectorTabbable(options, node);
      };
      var focusableCandidateSelector = /* @__PURE__ */candidateSelectors.concat("iframe").join(",");
      var isFocusable2 = function isFocusable3(node, options) {
        options = options || {};
        if (!node) {
          throw new Error("No node provided");
        }
        if (matches.call(node, focusableCandidateSelector) === false) {
          return false;
        }
        return isNodeMatchingSelectorFocusable(options, node);
      };
      exports2.focusable = focusable2;
      exports2.isFocusable = isFocusable2;
      exports2.isTabbable = isTabbable;
      exports2.tabbable = tabbable;
    });
    var require_focus_trap = __commonJS2(function (exports2) {
      "use strict";

      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      var tabbable = require_dist();
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var activeFocusTraps = function () {
        var trapQueue = [];
        return {
          activateTrap: function activateTrap(trap) {
            if (trapQueue.length > 0) {
              var activeTrap = trapQueue[trapQueue.length - 1];
              if (activeTrap !== trap) {
                activeTrap.pause();
              }
            }
            var trapIndex = trapQueue.indexOf(trap);
            if (trapIndex === -1) {
              trapQueue.push(trap);
            } else {
              trapQueue.splice(trapIndex, 1);
              trapQueue.push(trap);
            }
          },
          deactivateTrap: function deactivateTrap(trap) {
            var trapIndex = trapQueue.indexOf(trap);
            if (trapIndex !== -1) {
              trapQueue.splice(trapIndex, 1);
            }
            if (trapQueue.length > 0) {
              trapQueue[trapQueue.length - 1].unpause();
            }
          }
        };
      }();
      var isSelectableInput = function isSelectableInput2(node) {
        return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
      };
      var isEscapeEvent = function isEscapeEvent2(e) {
        return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
      };
      var isTabEvent = function isTabEvent2(e) {
        return e.key === "Tab" || e.keyCode === 9;
      };
      var delay = function delay2(fn) {
        return setTimeout(fn, 0);
      };
      var findIndex = function findIndex2(arr, fn) {
        var idx = -1;
        arr.every(function (value, i) {
          if (fn(value)) {
            idx = i;
            return false;
          }
          return true;
        });
        return idx;
      };
      var valueOrHandler = function valueOrHandler2(value) {
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }
        return typeof value === "function" ? value.apply(void 0, params) : value;
      };
      var createFocusTrap2 = function createFocusTrap3(elements, userOptions) {
        var doc = document;
        var config = _objectSpread2({
          returnFocusOnDeactivate: true,
          escapeDeactivates: true,
          delayInitialFocus: true
        }, userOptions);
        var state = {
          containers: [],
          tabbableGroups: [],
          nodeFocusedBeforeActivation: null,
          mostRecentlyFocusedNode: null,
          active: false,
          paused: false,
          delayInitialFocusTimer: void 0
        };
        var trap;
        var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
          return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
        };
        var containersContain = function containersContain2(element) {
          return state.containers.some(function (container) {
            return container.contains(element);
          });
        };
        var getNodeForOption = function getNodeForOption2(optionName) {
          var optionValue = config[optionName];
          if (!optionValue) {
            return null;
          }
          var node = optionValue;
          if (typeof optionValue === "string") {
            node = doc.querySelector(optionValue);
            if (!node) {
              throw new Error("`".concat(optionName, "` refers to no known node"));
            }
          }
          if (typeof optionValue === "function") {
            node = optionValue();
            if (!node) {
              throw new Error("`".concat(optionName, "` did not return a node"));
            }
          }
          return node;
        };
        var getInitialFocusNode = function getInitialFocusNode2() {
          var node;
          if (getOption({}, "initialFocus") === false) {
            return false;
          }
          if (getNodeForOption("initialFocus") !== null) {
            node = getNodeForOption("initialFocus");
          } else if (containersContain(doc.activeElement)) {
            node = doc.activeElement;
          } else {
            var firstTabbableGroup = state.tabbableGroups[0];
            var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
            node = firstTabbableNode || getNodeForOption("fallbackFocus");
          }
          if (!node) {
            throw new Error("Your focus-trap needs to have at least one focusable element");
          }
          return node;
        };
        var updateTabbableNodes = function updateTabbableNodes2() {
          state.tabbableGroups = state.containers.map(function (container) {
            var tabbableNodes = tabbable.tabbable(container);
            if (tabbableNodes.length > 0) {
              return {
                container: container,
                firstTabbableNode: tabbableNodes[0],
                lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
              };
            }
            return void 0;
          }).filter(function (group) {
            return !!group;
          });
          if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
            throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
          }
        };
        var tryFocus = function tryFocus2(node) {
          if (node === false) {
            return;
          }
          if (node === doc.activeElement) {
            return;
          }
          if (!node || !node.focus) {
            tryFocus2(getInitialFocusNode());
            return;
          }
          node.focus({
            preventScroll: !!config.preventScroll
          });
          state.mostRecentlyFocusedNode = node;
          if (isSelectableInput(node)) {
            node.select();
          }
        };
        var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
          var node = getNodeForOption("setReturnFocus");
          return node ? node : previousActiveElement;
        };
        var checkPointerDown = function checkPointerDown2(e) {
          if (containersContain(e.target)) {
            return;
          }
          if (valueOrHandler(config.clickOutsideDeactivates, e)) {
            trap.deactivate({
              returnFocus: config.returnFocusOnDeactivate && !tabbable.isFocusable(e.target)
            });
            return;
          }
          if (valueOrHandler(config.allowOutsideClick, e)) {
            return;
          }
          e.preventDefault();
        };
        var checkFocusIn = function checkFocusIn2(e) {
          var targetContained = containersContain(e.target);
          if (targetContained || e.target instanceof Document) {
            if (targetContained) {
              state.mostRecentlyFocusedNode = e.target;
            }
          } else {
            e.stopImmediatePropagation();
            tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
          }
        };
        var checkTab = function checkTab2(e) {
          updateTabbableNodes();
          var destinationNode = null;
          if (state.tabbableGroups.length > 0) {
            var containerIndex = findIndex(state.tabbableGroups, function (_ref) {
              var container = _ref.container;
              return container.contains(e.target);
            });
            if (containerIndex < 0) {
              if (e.shiftKey) {
                destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
              } else {
                destinationNode = state.tabbableGroups[0].firstTabbableNode;
              }
            } else if (e.shiftKey) {
              var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
                var firstTabbableNode = _ref2.firstTabbableNode;
                return e.target === firstTabbableNode;
              });
              if (startOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
                startOfGroupIndex = containerIndex;
              }
              if (startOfGroupIndex >= 0) {
                var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
                var destinationGroup = state.tabbableGroups[destinationGroupIndex];
                destinationNode = destinationGroup.lastTabbableNode;
              }
            } else {
              var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
                var lastTabbableNode = _ref3.lastTabbableNode;
                return e.target === lastTabbableNode;
              });
              if (lastOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
                lastOfGroupIndex = containerIndex;
              }
              if (lastOfGroupIndex >= 0) {
                var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
                var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
                destinationNode = _destinationGroup.firstTabbableNode;
              }
            }
          } else {
            destinationNode = getNodeForOption("fallbackFocus");
          }
          if (destinationNode) {
            e.preventDefault();
            tryFocus(destinationNode);
          }
        };
        var checkKey = function checkKey2(e) {
          if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates) !== false) {
            e.preventDefault();
            trap.deactivate();
            return;
          }
          if (isTabEvent(e)) {
            checkTab(e);
            return;
          }
        };
        var checkClick = function checkClick2(e) {
          if (valueOrHandler(config.clickOutsideDeactivates, e)) {
            return;
          }
          if (containersContain(e.target)) {
            return;
          }
          if (valueOrHandler(config.allowOutsideClick, e)) {
            return;
          }
          e.preventDefault();
          e.stopImmediatePropagation();
        };
        var addListeners = function addListeners2() {
          if (!state.active) {
            return;
          }
          activeFocusTraps.activateTrap(trap);
          state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
            tryFocus(getInitialFocusNode());
          }) : tryFocus(getInitialFocusNode());
          doc.addEventListener("focusin", checkFocusIn, true);
          doc.addEventListener("mousedown", checkPointerDown, {
            capture: true,
            passive: false
          });
          doc.addEventListener("touchstart", checkPointerDown, {
            capture: true,
            passive: false
          });
          doc.addEventListener("click", checkClick, {
            capture: true,
            passive: false
          });
          doc.addEventListener("keydown", checkKey, {
            capture: true,
            passive: false
          });
          return trap;
        };
        var removeListeners = function removeListeners2() {
          if (!state.active) {
            return;
          }
          doc.removeEventListener("focusin", checkFocusIn, true);
          doc.removeEventListener("mousedown", checkPointerDown, true);
          doc.removeEventListener("touchstart", checkPointerDown, true);
          doc.removeEventListener("click", checkClick, true);
          doc.removeEventListener("keydown", checkKey, true);
          return trap;
        };
        trap = {
          activate: function activate(activateOptions) {
            if (state.active) {
              return this;
            }
            var onActivate = getOption(activateOptions, "onActivate");
            var onPostActivate = getOption(activateOptions, "onPostActivate");
            var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
            if (!checkCanFocusTrap) {
              updateTabbableNodes();
            }
            state.active = true;
            state.paused = false;
            state.nodeFocusedBeforeActivation = doc.activeElement;
            if (onActivate) {
              onActivate();
            }
            var finishActivation = function finishActivation2() {
              if (checkCanFocusTrap) {
                updateTabbableNodes();
              }
              addListeners();
              if (onPostActivate) {
                onPostActivate();
              }
            };
            if (checkCanFocusTrap) {
              checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
              return this;
            }
            finishActivation();
            return this;
          },
          deactivate: function deactivate(deactivateOptions) {
            if (!state.active) {
              return this;
            }
            clearTimeout(state.delayInitialFocusTimer);
            state.delayInitialFocusTimer = void 0;
            removeListeners();
            state.active = false;
            state.paused = false;
            activeFocusTraps.deactivateTrap(trap);
            var onDeactivate = getOption(deactivateOptions, "onDeactivate");
            var onPostDeactivate = getOption(deactivateOptions, "onPostDeactivate");
            var checkCanReturnFocus = getOption(deactivateOptions, "checkCanReturnFocus");
            if (onDeactivate) {
              onDeactivate();
            }
            var returnFocus = getOption(deactivateOptions, "returnFocus", "returnFocusOnDeactivate");
            var finishDeactivation = function finishDeactivation2() {
              delay(function () {
                if (returnFocus) {
                  tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
                }
                if (onPostDeactivate) {
                  onPostDeactivate();
                }
              });
            };
            if (returnFocus && checkCanReturnFocus) {
              checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
              return this;
            }
            finishDeactivation();
            return this;
          },
          pause: function pause() {
            if (state.paused || !state.active) {
              return this;
            }
            state.paused = true;
            removeListeners();
            return this;
          },
          unpause: function unpause() {
            if (!state.paused || !state.active) {
              return this;
            }
            state.paused = false;
            updateTabbableNodes();
            addListeners();
            return this;
          },
          updateContainerElements: function updateContainerElements(containerElements) {
            var elementsAsArray = [].concat(containerElements).filter(Boolean);
            state.containers = elementsAsArray.map(function (element) {
              return typeof element === "string" ? doc.querySelector(element) : element;
            });
            if (state.active) {
              updateTabbableNodes();
            }
            return this;
          }
        };
        trap.updateContainerElements(elements);
        return trap;
      };
      exports2.createFocusTrap = createFocusTrap2;
    });
    __markAsModule(exports);
    __export(exports, {
      "default": function _default() {
        return module_default;
      }
    });
    var import_focus_trap = __toModule(require_focus_trap());
    var import_tabbable = __toModule(require_dist());
    function src_default(Alpine21) {
      var _lastFocused;
      var currentFocused;
      window.addEventListener("focusin", function () {
        _lastFocused = currentFocused;
        currentFocused = document.activeElement;
      });
      Alpine21.magic("focus", function (el) {
        var _within = el;
        return {
          __noscroll: false,
          __wrapAround: false,
          within: function within(el2) {
            _within = el2;
            return this;
          },
          withoutScrolling: function withoutScrolling() {
            this.__noscroll = true;
            return this;
          },
          noscroll: function noscroll() {
            this.__noscroll = true;
            return this;
          },
          withWrapAround: function withWrapAround() {
            this.__wrapAround = true;
            return this;
          },
          wrap: function wrap() {
            return this.withWrapAround();
          },
          focusable: function focusable(el2) {
            return (0, import_tabbable.isFocusable)(el2);
          },
          previouslyFocused: function previouslyFocused() {
            return _lastFocused;
          },
          lastFocused: function lastFocused() {
            return _lastFocused;
          },
          focused: function focused() {
            return currentFocused;
          },
          focusables: function focusables() {
            if (Array.isArray(_within)) return _within;
            return (0, import_tabbable.focusable)(_within, {
              displayCheck: "none"
            });
          },
          all: function all() {
            return this.focusables();
          },
          isFirst: function isFirst(el2) {
            var els2 = this.all();
            return els2[0] && els2[0].isSameNode(el2);
          },
          isLast: function isLast(el2) {
            var els2 = this.all();
            return els2.length && els2.slice(-1)[0].isSameNode(el2);
          },
          getFirst: function getFirst() {
            return this.all()[0];
          },
          getLast: function getLast() {
            return this.all().slice(-1)[0];
          },
          getNext: function getNext() {
            var list = this.all();
            var current = document.activeElement;
            if (list.indexOf(current) === -1) return;
            if (this.__wrapAround && list.indexOf(current) === list.length - 1) {
              return list[0];
            }
            return list[list.indexOf(current) + 1];
          },
          getPrevious: function getPrevious() {
            var list = this.all();
            var current = document.activeElement;
            if (list.indexOf(current) === -1) return;
            if (this.__wrapAround && list.indexOf(current) === 0) {
              return list.slice(-1)[0];
            }
            return list[list.indexOf(current) - 1];
          },
          first: function first() {
            this.focus(this.getFirst());
          },
          last: function last() {
            this.focus(this.getLast());
          },
          next: function next() {
            this.focus(this.getNext());
          },
          previous: function previous() {
            this.focus(this.getPrevious());
          },
          prev: function prev() {
            return this.previous();
          },
          focus: function focus(el2) {
            var _this4 = this;
            if (!el2) return;
            setTimeout(function () {
              if (!el2.hasAttribute("tabindex")) el2.setAttribute("tabindex", "0");
              el2.focus({
                preventScroll: _this4._noscroll
              });
            });
          }
        };
      });
      Alpine21.directive("trap", Alpine21.skipDuringClone(function (el, _ref87, _ref88) {
        var expression = _ref87.expression,
          modifiers = _ref87.modifiers;
        var effect = _ref88.effect,
          evaluateLater = _ref88.evaluateLater,
          cleanup2 = _ref88.cleanup;
        var evaluator = evaluateLater(expression);
        var oldValue = false;
        var options = {
          escapeDeactivates: false,
          allowOutsideClick: true,
          fallbackFocus: function fallbackFocus() {
            return el;
          }
        };
        var autofocusEl = el.querySelector("[autofocus]");
        if (autofocusEl) options.initialFocus = autofocusEl;
        var trap = (0, import_focus_trap.createFocusTrap)(el, options);
        var undoInert = function undoInert() {};
        var undoDisableScrolling = function undoDisableScrolling() {};
        var releaseFocus = function releaseFocus() {
          undoInert();
          undoInert = function undoInert() {};
          undoDisableScrolling();
          undoDisableScrolling = function undoDisableScrolling() {};
          trap.deactivate({
            returnFocus: !modifiers.includes("noreturn")
          });
        };
        effect(function () {
          return evaluator(function (value) {
            if (oldValue === value) return;
            if (value && !oldValue) {
              setTimeout(function () {
                if (modifiers.includes("inert")) undoInert = setInert(el);
                if (modifiers.includes("noscroll")) undoDisableScrolling = disableScrolling();
                trap.activate();
              });
            }
            if (!value && oldValue) {
              releaseFocus();
            }
            oldValue = !!value;
          });
        });
        cleanup2(releaseFocus);
      }, function (el, _ref89, _ref90) {
        var expression = _ref89.expression,
          modifiers = _ref89.modifiers;
        var evaluate = _ref90.evaluate;
        if (modifiers.includes("inert") && evaluate(expression)) setInert(el);
      }));
    }
    function setInert(el) {
      var undos = [];
      crawlSiblingsUp(el, function (sibling) {
        var cache = sibling.hasAttribute("aria-hidden");
        sibling.setAttribute("aria-hidden", "true");
        undos.push(function () {
          return cache || sibling.removeAttribute("aria-hidden");
        });
      });
      return function () {
        while (undos.length) undos.pop()();
      };
    }
    function crawlSiblingsUp(el, callback) {
      if (el.isSameNode(document.body) || !el.parentNode) return;
      Array.from(el.parentNode.children).forEach(function (sibling) {
        if (sibling.isSameNode(el)) {
          crawlSiblingsUp(el.parentNode, callback);
        } else {
          callback(sibling);
        }
      });
    }
    function disableScrolling() {
      var overflow = document.documentElement.style.overflow;
      var paddingRight = document.documentElement.style.paddingRight;
      var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = "".concat(scrollbarWidth, "px");
      return function () {
        document.documentElement.style.overflow = overflow;
        document.documentElement.style.paddingRight = paddingRight;
      };
    }
    var module_default = src_default;
  }
});

// ../../../../usr/local/lib/node_modules/@alpinejs/persist/dist/module.cjs.js
var require_module_cjs4 = __commonJS({
  "../../../../usr/local/lib/node_modules/@alpinejs/persist/dist/module.cjs.js": function usrLocalLibNode_modulesAlpinejsPersistDistModuleCjsJs(exports) {
    var __defProp2 = Object.defineProperty;
    var __markAsModule = function __markAsModule(target) {
      return __defProp2(target, "__esModule", {
        value: true
      });
    };
    var __export = function __export(target, all2) {
      for (var name in all2) __defProp2(target, name, {
        get: all2[name],
        enumerable: true
      });
    };
    __markAsModule(exports);
    __export(exports, {
      "default": function _default() {
        return module_default;
      }
    });
    function src_default(Alpine21) {
      var persist2 = function persist2() {
        var alias;
        var storage = localStorage;
        return Alpine21.interceptor(function (initialValue, getter, setter, path, key) {
          var lookup = alias || "_x_".concat(path);
          var initial = storageHas(lookup, storage) ? storageGet(lookup, storage) : initialValue;
          setter(initial);
          Alpine21.effect(function () {
            var value = getter();
            storageSet(lookup, value, storage);
            setter(value);
          });
          return initial;
        }, function (func) {
          func.as = function (key) {
            alias = key;
            return func;
          }, func.using = function (target) {
            storage = target;
            return func;
          };
        });
      };
      Object.defineProperty(Alpine21, "$persist", {
        get: function get() {
          return persist2();
        }
      });
      Alpine21.magic("persist", persist2);
      Alpine21.persist = function (key, _ref91) {
        var get = _ref91.get,
          set = _ref91.set;
        var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
        var initial = storageHas(key, storage) ? storageGet(key, storage) : get();
        set(initial);
        Alpine21.effect(function () {
          var value = get();
          storageSet(key, value, storage);
          set(value);
        });
      };
    }
    function storageHas(key, storage) {
      return storage.getItem(key) !== null;
    }
    function storageGet(key, storage) {
      return JSON.parse(storage.getItem(key, storage));
    }
    function storageSet(key, value, storage) {
      storage.setItem(key, JSON.stringify(value));
    }
    var module_default = src_default;
  }
});

// ../alpine/packages/intersect/dist/module.cjs.js
var require_module_cjs5 = __commonJS({
  "../alpine/packages/intersect/dist/module.cjs.js": function alpinePackagesIntersectDistModuleCjsJs(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = function __export(target, all2) {
      for (var name in all2) __defProp2(target, name, {
        get: all2[name],
        enumerable: true
      });
    };
    var __copyProps2 = function __copyProps2(to, from, except, desc) {
      if (from && _typeof(from) === "object" || typeof from === "function") {
        var _iterator5 = _createForOfIteratorHelper(__getOwnPropNames2(from)),
          _step5;
        try {
          var _loop10 = function _loop10() {
            var key = _step5.value;
            if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
              get: function get() {
                return from[key];
              },
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
            });
          };
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            _loop10();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      return to;
    };
    var __toCommonJS = function __toCommonJS(mod) {
      return __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
    };
    var module_exports = {};
    __export(module_exports, {
      "default": function _default() {
        return module_default;
      }
    });
    module.exports = __toCommonJS(module_exports);
    function src_default(Alpine21) {
      Alpine21.directive("intersect", function (el, _ref92, _ref93) {
        var value = _ref92.value,
          expression = _ref92.expression,
          modifiers = _ref92.modifiers;
        var evaluateLater = _ref93.evaluateLater,
          cleanup2 = _ref93.cleanup;
        var evaluate = evaluateLater(expression);
        var options = {
          rootMargin: getRootMargin(modifiers),
          threshold: getThreshold(modifiers)
        };
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting === (value === "leave")) return;
            evaluate();
            modifiers.includes("once") && observer.disconnect();
          });
        }, options);
        observer.observe(el);
        cleanup2(function () {
          observer.disconnect();
        });
      });
    }
    function getThreshold(modifiers) {
      if (modifiers.includes("full")) return 0.99;
      if (modifiers.includes("half")) return 0.5;
      if (!modifiers.includes("threshold")) return 0;
      var threshold = modifiers[modifiers.indexOf("threshold") + 1];
      if (threshold === "100") return 1;
      if (threshold === "0") return 0;
      return Number(".".concat(threshold));
    }
    function getLengthValue(rawValue) {
      var match = rawValue.match(/^(-?[0-9]+)(px|%)?$/);
      return match ? match[1] + (match[2] || "px") : void 0;
    }
    function getRootMargin(modifiers) {
      var key = "margin";
      var fallback2 = "0px 0px 0px 0px";
      var index = modifiers.indexOf(key);
      if (index === -1) return fallback2;
      var values = [];
      for (var i = 1; i < 5; i++) {
        values.push(getLengthValue(modifiers[index + i] || ""));
      }
      values = values.filter(function (v) {
        return v !== void 0;
      });
      return values.length ? values.join(" ").trim() : fallback2;
    }
    var module_default = src_default;
  }
});

// node_modules/nprogress/nprogress.js
var require_nprogress = __commonJS({
  "node_modules/nprogress/nprogress.js": function node_modulesNprogressNprogressJs(exports, module) {
    (function (root, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(exports, function () {
      var NProgress2 = {};
      NProgress2.version = "0.2.0";
      var Settings = NProgress2.settings = {
        minimum: 0.08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      };
      NProgress2.configure = function (options) {
        var key, value;
        for (key in options) {
          value = options[key];
          if (value !== void 0 && options.hasOwnProperty(key)) Settings[key] = value;
        }
        return this;
      };
      NProgress2.status = null;
      NProgress2.set = function (n) {
        var started = NProgress2.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress2.status = n === 1 ? null : n;
        var progress = NProgress2.render(!started),
          bar = progress.querySelector(Settings.barSelector),
          speed = Settings.speed,
          ease = Settings.easing;
        progress.offsetWidth;
        queue(function (next) {
          if (Settings.positionUsing === "") Settings.positionUsing = NProgress2.getPositioningCSS();
          css(bar, barPositionCSS(n, speed, ease));
          if (n === 1) {
            css(progress, {
              transition: "none",
              opacity: 1
            });
            progress.offsetWidth;
            setTimeout(function () {
              css(progress, {
                transition: "all " + speed + "ms linear",
                opacity: 0
              });
              setTimeout(function () {
                NProgress2.remove();
                next();
              }, speed);
            }, speed);
          } else {
            setTimeout(next, speed);
          }
        });
        return this;
      };
      NProgress2.isStarted = function () {
        return typeof NProgress2.status === "number";
      };
      NProgress2.start = function () {
        if (!NProgress2.status) NProgress2.set(0);
        var work = function work() {
          setTimeout(function () {
            if (!NProgress2.status) return;
            NProgress2.trickle();
            work();
          }, Settings.trickleSpeed);
        };
        if (Settings.trickle) work();
        return this;
      };
      NProgress2.done = function (force) {
        if (!force && !NProgress2.status) return this;
        return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
      };
      NProgress2.inc = function (amount) {
        var n = NProgress2.status;
        if (!n) {
          return NProgress2.start();
        } else {
          if (typeof amount !== "number") {
            amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
          }
          n = clamp(n + amount, 0, 0.994);
          return NProgress2.set(n);
        }
      };
      NProgress2.trickle = function () {
        return NProgress2.inc(Math.random() * Settings.trickleRate);
      };
      (function () {
        var initial = 0,
          current = 0;
        NProgress2.promise = function ($promise) {
          if (!$promise || $promise.state() === "resolved") {
            return this;
          }
          if (current === 0) {
            NProgress2.start();
          }
          initial++;
          current++;
          $promise.always(function () {
            current--;
            if (current === 0) {
              initial = 0;
              NProgress2.done();
            } else {
              NProgress2.set((initial - current) / initial);
            }
          });
          return this;
        };
      })();
      NProgress2.render = function (fromStart) {
        if (NProgress2.isRendered()) return document.getElementById("nprogress");
        addClass(document.documentElement, "nprogress-busy");
        var progress = document.createElement("div");
        progress.id = "nprogress";
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector),
          perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0),
          parent = document.querySelector(Settings.parent),
          spinner;
        css(bar, {
          transition: "all 0 linear",
          transform: "translate3d(" + perc + "%,0,0)"
        });
        if (!Settings.showSpinner) {
          spinner = progress.querySelector(Settings.spinnerSelector);
          spinner && removeElement(spinner);
        }
        if (parent != document.body) {
          addClass(parent, "nprogress-custom-parent");
        }
        parent.appendChild(progress);
        return progress;
      };
      NProgress2.remove = function () {
        removeClass(document.documentElement, "nprogress-busy");
        removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
        var progress = document.getElementById("nprogress");
        progress && removeElement(progress);
      };
      NProgress2.isRendered = function () {
        return !!document.getElementById("nprogress");
      };
      NProgress2.getPositioningCSS = function () {
        var bodyStyle = document.body.style;
        var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
        if (vendorPrefix + "Perspective" in bodyStyle) {
          return "translate3d";
        } else if (vendorPrefix + "Transform" in bodyStyle) {
          return "translate";
        } else {
          return "margin";
        }
      };
      function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n;
      }
      function toBarPerc(n) {
        return (-1 + n) * 100;
      }
      function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === "translate3d") {
          barCSS = {
            transform: "translate3d(" + toBarPerc(n) + "%,0,0)"
          };
        } else if (Settings.positionUsing === "translate") {
          barCSS = {
            transform: "translate(" + toBarPerc(n) + "%,0)"
          };
        } else {
          barCSS = {
            "margin-left": toBarPerc(n) + "%"
          };
        }
        barCSS.transition = "all " + speed + "ms " + ease;
        return barCSS;
      }
      var queue = function () {
        var pending = [];
        function next() {
          var fn = pending.shift();
          if (fn) {
            fn(next);
          }
        }
        return function (fn) {
          pending.push(fn);
          if (pending.length == 1) next();
        };
      }();
      var css = function () {
        var cssPrefixes = ["Webkit", "O", "Moz", "ms"],
          cssProps = {};
        function camelCase(string) {
          return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (match, letter) {
            return letter.toUpperCase();
          });
        }
        function getVendorProp(name) {
          var style = document.body.style;
          if (name in style) return name;
          var i = cssPrefixes.length,
            capName = name.charAt(0).toUpperCase() + name.slice(1),
            vendorName;
          while (i--) {
            vendorName = cssPrefixes[i] + capName;
            if (vendorName in style) return vendorName;
          }
          return name;
        }
        function getStyleProp(name) {
          name = camelCase(name);
          return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }
        function applyCss(element, prop, value) {
          prop = getStyleProp(prop);
          element.style[prop] = value;
        }
        return function (element, properties2) {
          var args = arguments,
            prop,
            value;
          if (args.length == 2) {
            for (prop in properties2) {
              value = properties2[prop];
              if (value !== void 0 && properties2.hasOwnProperty(prop)) applyCss(element, prop, value);
            }
          } else {
            applyCss(element, args[1], args[2]);
          }
        };
      }();
      function hasClass(element, name) {
        var list = typeof element == "string" ? element : classList(element);
        return list.indexOf(" " + name + " ") >= 0;
      }
      function addClass(element, name) {
        var oldList = classList(element),
          newList = oldList + name;
        if (hasClass(oldList, name)) return;
        element.className = newList.substring(1);
      }
      function removeClass(element, name) {
        var oldList = classList(element),
          newList;
        if (!hasClass(element, name)) return;
        newList = oldList.replace(" " + name + " ", " ");
        element.className = newList.substring(1, newList.length - 1);
      }
      function classList(element) {
        return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
      }
      function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
      }
      return NProgress2;
    });
  }
});

// ../alpine/packages/morph/dist/module.cjs.js
var require_module_cjs6 = __commonJS({
  "../alpine/packages/morph/dist/module.cjs.js": function alpinePackagesMorphDistModuleCjsJs(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = function __export(target, all2) {
      for (var name in all2) __defProp2(target, name, {
        get: all2[name],
        enumerable: true
      });
    };
    var __copyProps2 = function __copyProps2(to, from, except, desc) {
      if (from && _typeof(from) === "object" || typeof from === "function") {
        var _iterator6 = _createForOfIteratorHelper(__getOwnPropNames2(from)),
          _step6;
        try {
          var _loop11 = function _loop11() {
            var key = _step6.value;
            if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
              get: function get() {
                return from[key];
              },
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
            });
          };
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            _loop11();
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      return to;
    };
    var __toCommonJS = function __toCommonJS(mod) {
      return __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
    };
    var module_exports = {};
    __export(module_exports, {
      "default": function _default() {
        return module_default;
      },
      morph: function morph() {
        return morph3;
      }
    });
    module.exports = __toCommonJS(module_exports);
    function morph3(from, toHtml, options) {
      monkeyPatchDomSetAttributeToAllowAtSymbols();
      var fromEl;
      var toEl;
      var key, lookahead, updating, updated, removing, removed, adding, added;
      function assignOptions() {
        var options2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var defaultGetKey = function defaultGetKey(el) {
          return el.getAttribute("key");
        };
        var noop = function noop() {};
        updating = options2.updating || noop;
        updated = options2.updated || noop;
        removing = options2.removing || noop;
        removed = options2.removed || noop;
        adding = options2.adding || noop;
        added = options2.added || noop;
        key = options2.key || defaultGetKey;
        lookahead = options2.lookahead || false;
      }
      function patch(from2, to) {
        if (differentElementNamesTypesOrKeys(from2, to)) {
          return swapElements(from2, to);
        }
        var updateChildrenOnly = false;
        if (shouldSkip(updating, from2, to, function () {
          return updateChildrenOnly = true;
        })) return;
        if (from2.nodeType === 1 && window.Alpine) {
          window.Alpine.cloneNode(from2, to);
        }
        if (textOrComment(to)) {
          patchNodeValue(from2, to);
          updated(from2, to);
          return;
        }
        if (!updateChildrenOnly) {
          patchAttributes(from2, to);
        }
        updated(from2, to);
        patchChildren(from2, to);
      }
      function differentElementNamesTypesOrKeys(from2, to) {
        return from2.nodeType != to.nodeType || from2.nodeName != to.nodeName || getKey(from2) != getKey(to);
      }
      function swapElements(from2, to) {
        if (shouldSkip(removing, from2)) return;
        var toCloned = to.cloneNode(true);
        if (shouldSkip(adding, toCloned)) return;
        from2.replaceWith(toCloned);
        removed(from2);
        added(toCloned);
      }
      function patchNodeValue(from2, to) {
        var value = to.nodeValue;
        if (from2.nodeValue !== value) {
          from2.nodeValue = value;
        }
      }
      function patchAttributes(from2, to) {
        if (from2._x_transitioning) return;
        if (from2._x_isShown && !to._x_isShown) {
          return;
        }
        if (!from2._x_isShown && to._x_isShown) {
          return;
        }
        var domAttributes = Array.from(from2.attributes);
        var toAttributes = Array.from(to.attributes);
        for (var i = domAttributes.length - 1; i >= 0; i--) {
          var name = domAttributes[i].name;
          if (!to.hasAttribute(name)) {
            from2.removeAttribute(name);
          }
        }
        for (var _i9 = toAttributes.length - 1; _i9 >= 0; _i9--) {
          var _name = toAttributes[_i9].name;
          var value = toAttributes[_i9].value;
          if (from2.getAttribute(_name) !== value) {
            from2.setAttribute(_name, value);
          }
        }
      }
      function patchChildren(from2, to) {
        var fromKeys = keyToMap(from2.children);
        var fromKeyHoldovers = {};
        var currentTo = getFirstNode(to);
        var currentFrom = getFirstNode(from2);
        while (currentTo) {
          var toKey = getKey(currentTo);
          var fromKey = getKey(currentFrom);
          if (!currentFrom) {
            if (toKey && fromKeyHoldovers[toKey]) {
              var holdover = fromKeyHoldovers[toKey];
              from2.appendChild(holdover);
              currentFrom = holdover;
            } else {
              if (!shouldSkip(adding, currentTo)) {
                var clone = currentTo.cloneNode(true);
                from2.appendChild(clone);
                added(clone);
              }
              currentTo = getNextSibling(to, currentTo);
              continue;
            }
          }
          var isIf = function isIf(node) {
            return node && node.nodeType === 8 && node.textContent === "[if BLOCK]><![endif]";
          };
          var isEnd = function isEnd(node) {
            return node && node.nodeType === 8 && node.textContent === "[if ENDBLOCK]><![endif]";
          };
          if (isIf(currentTo) && isIf(currentFrom)) {
            var nestedIfCount = 0;
            var fromBlockStart = currentFrom;
            while (currentFrom) {
              var next = getNextSibling(from2, currentFrom);
              if (isIf(next)) {
                nestedIfCount++;
              } else if (isEnd(next) && nestedIfCount > 0) {
                nestedIfCount--;
              } else if (isEnd(next) && nestedIfCount === 0) {
                currentFrom = next;
                break;
              }
              currentFrom = next;
            }
            var fromBlockEnd = currentFrom;
            nestedIfCount = 0;
            var toBlockStart = currentTo;
            while (currentTo) {
              var _next2 = getNextSibling(to, currentTo);
              if (isIf(_next2)) {
                nestedIfCount++;
              } else if (isEnd(_next2) && nestedIfCount > 0) {
                nestedIfCount--;
              } else if (isEnd(_next2) && nestedIfCount === 0) {
                currentTo = _next2;
                break;
              }
              currentTo = _next2;
            }
            var toBlockEnd = currentTo;
            var fromBlock = new Block(fromBlockStart, fromBlockEnd);
            var toBlock = new Block(toBlockStart, toBlockEnd);
            patchChildren(fromBlock, toBlock);
            continue;
          }
          if (currentFrom.nodeType === 1 && lookahead && !currentFrom.isEqualNode(currentTo)) {
            var nextToElementSibling = getNextSibling(to, currentTo);
            var found = false;
            while (!found && nextToElementSibling) {
              if (nextToElementSibling.nodeType === 1 && currentFrom.isEqualNode(nextToElementSibling)) {
                found = true;
                currentFrom = addNodeBefore(from2, currentTo, currentFrom);
                fromKey = getKey(currentFrom);
              }
              nextToElementSibling = getNextSibling(to, nextToElementSibling);
            }
          }
          if (toKey !== fromKey) {
            if (!toKey && fromKey) {
              fromKeyHoldovers[fromKey] = currentFrom;
              currentFrom = addNodeBefore(from2, currentTo, currentFrom);
              fromKeyHoldovers[fromKey].remove();
              currentFrom = getNextSibling(from2, currentFrom);
              currentTo = getNextSibling(to, currentTo);
              continue;
            }
            if (toKey && !fromKey) {
              if (fromKeys[toKey]) {
                currentFrom.replaceWith(fromKeys[toKey]);
                currentFrom = fromKeys[toKey];
              }
            }
            if (toKey && fromKey) {
              var fromKeyNode = fromKeys[toKey];
              if (fromKeyNode) {
                fromKeyHoldovers[fromKey] = currentFrom;
                currentFrom.replaceWith(fromKeyNode);
                currentFrom = fromKeyNode;
              } else {
                fromKeyHoldovers[fromKey] = currentFrom;
                currentFrom = addNodeBefore(from2, currentTo, currentFrom);
                fromKeyHoldovers[fromKey].remove();
                currentFrom = getNextSibling(from2, currentFrom);
                currentTo = getNextSibling(to, currentTo);
                continue;
              }
            }
          }
          var currentFromNext = currentFrom && getNextSibling(from2, currentFrom);
          patch(currentFrom, currentTo);
          currentTo = currentTo && getNextSibling(to, currentTo);
          currentFrom = currentFromNext;
        }
        var removals = [];
        while (currentFrom) {
          if (!shouldSkip(removing, currentFrom)) removals.push(currentFrom);
          currentFrom = getNextSibling(from2, currentFrom);
        }
        while (removals.length) {
          var domForRemoval = removals.shift();
          domForRemoval.remove();
          removed(domForRemoval);
        }
      }
      function getKey(el) {
        return el && el.nodeType === 1 && key(el);
      }
      function keyToMap(els2) {
        var map = {};
        var _iterator7 = _createForOfIteratorHelper(els2),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var el = _step7.value;
            var theKey = getKey(el);
            if (theKey) {
              map[theKey] = el;
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        return map;
      }
      function addNodeBefore(parent, node, beforeMe) {
        if (!shouldSkip(adding, node)) {
          var clone = node.cloneNode(true);
          parent.insertBefore(clone, beforeMe);
          added(clone);
          return clone;
        }
        return node;
      }
      assignOptions(options);
      fromEl = from;
      toEl = typeof toHtml === "string" ? createElement(toHtml) : toHtml;
      if (window.Alpine && window.Alpine.closestDataStack && !from._x_dataStack) {
        toEl._x_dataStack = window.Alpine.closestDataStack(from);
        toEl._x_dataStack && window.Alpine.cloneNode(from, toEl);
      }
      patch(from, toEl);
      fromEl = void 0;
      toEl = void 0;
      return from;
    }
    morph3.step = function () {};
    morph3.log = function () {};
    function shouldSkip(hook) {
      var skip = false;
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key8 = 1; _key8 < _len6; _key8++) {
        args[_key8 - 1] = arguments[_key8];
      }
      hook.apply(void 0, args.concat([function () {
        return skip = true;
      }]));
      return skip;
    }
    var patched = false;
    function createElement(html) {
      var template = document.createElement("template");
      template.innerHTML = html;
      return template.content.firstElementChild;
    }
    function textOrComment(el) {
      return el.nodeType === 3 || el.nodeType === 8;
    }
    var Block = /*#__PURE__*/function () {
      function Block(start2, end) {
        _classCallCheck(this, Block);
        this.startComment = start2;
        this.endComment = end;
      }
      _createClass(Block, [{
        key: "children",
        get: function get() {
          var children = [];
          var currentNode = this.startComment.nextSibling;
          while (currentNode && currentNode !== this.endComment) {
            children.push(currentNode);
            currentNode = currentNode.nextSibling;
          }
          return children;
        }
      }, {
        key: "appendChild",
        value: function appendChild(child) {
          this.endComment.before(child);
        }
      }, {
        key: "firstChild",
        get: function get() {
          var first2 = this.startComment.nextSibling;
          if (first2 === this.endComment) return;
          return first2;
        }
      }, {
        key: "nextNode",
        value: function nextNode(reference) {
          var next = reference.nextSibling;
          if (next === this.endComment) return;
          return next;
        }
      }, {
        key: "insertBefore",
        value: function insertBefore(newNode, reference) {
          reference.before(newNode);
          return newNode;
        }
      }]);
      return Block;
    }();
    function getFirstNode(parent) {
      return parent.firstChild;
    }
    function getNextSibling(parent, reference) {
      if (reference._x_teleport) {
        return reference._x_teleport;
      } else if (reference.teleportBack) {
        return reference.teleportBack;
      }
      var next;
      if (parent instanceof Block) {
        next = parent.nextNode(reference);
      } else {
        next = reference.nextSibling;
      }
      return next;
    }
    function monkeyPatchDomSetAttributeToAllowAtSymbols() {
      if (patched) return;
      patched = true;
      var original = Element.prototype.setAttribute;
      var hostDiv = document.createElement("div");
      Element.prototype.setAttribute = function newSetAttribute(name, value) {
        if (!name.includes("@")) {
          return original.call(this, name, value);
        }
        hostDiv.innerHTML = "<span ".concat(name, "=\"").concat(value, "\"></span>");
        var attr = hostDiv.firstElementChild.getAttributeNode(name);
        hostDiv.firstElementChild.removeAttributeNode(attr);
        this.setAttributeNode(attr);
      };
    }
    function src_default(Alpine21) {
      Alpine21.morph = morph3;
    }
    var module_default = src_default;
  }
});

// ../alpine/packages/mask/dist/module.cjs.js
var require_module_cjs7 = __commonJS({
  "../alpine/packages/mask/dist/module.cjs.js": function alpinePackagesMaskDistModuleCjsJs(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = function __export(target, all2) {
      for (var name in all2) __defProp2(target, name, {
        get: all2[name],
        enumerable: true
      });
    };
    var __copyProps2 = function __copyProps2(to, from, except, desc) {
      if (from && _typeof(from) === "object" || typeof from === "function") {
        var _iterator8 = _createForOfIteratorHelper(__getOwnPropNames2(from)),
          _step8;
        try {
          var _loop12 = function _loop12() {
            var key = _step8.value;
            if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
              get: function get() {
                return from[key];
              },
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
            });
          };
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            _loop12();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      return to;
    };
    var __toCommonJS = function __toCommonJS(mod) {
      return __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
    };
    var module_exports = {};
    __export(module_exports, {
      "default": function _default() {
        return module_default;
      },
      stripDown: function stripDown() {
        return _stripDown;
      }
    });
    module.exports = __toCommonJS(module_exports);
    function src_default(Alpine21) {
      Alpine21.directive("mask", function (el, _ref94, _ref95) {
        var value = _ref94.value,
          expression = _ref94.expression;
        var effect = _ref95.effect,
          evaluateLater = _ref95.evaluateLater;
        var templateFn = function templateFn() {
          return expression;
        };
        var lastInputValue = "";
        queueMicrotask(function () {
          if (["function", "dynamic"].includes(value)) {
            var evaluator = evaluateLater(expression);
            effect(function () {
              templateFn = function templateFn(input) {
                var result;
                Alpine21.dontAutoEvaluateFunctions(function () {
                  evaluator(function (value2) {
                    result = typeof value2 === "function" ? value2(input) : value2;
                  }, {
                    scope: {
                      "$input": input,
                      "$money": formatMoney.bind({
                        el: el
                      })
                    }
                  });
                });
                return result;
              };
              processInputValue(el, false);
            });
          } else {
            processInputValue(el, false);
          }
          if (el._x_model) el._x_model.set(el.value);
        });
        el.addEventListener("input", function () {
          return processInputValue(el);
        });
        el.addEventListener("blur", function () {
          return processInputValue(el, false);
        });
        function processInputValue(el2) {
          var shouldRestoreCursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var input = el2.value;
          var template = templateFn(input);
          if (!template || template === "false") return false;
          if (lastInputValue.length - el2.value.length === 1) {
            return lastInputValue = el2.value;
          }
          var setInput = function setInput() {
            lastInputValue = el2.value = formatInput(input, template);
          };
          if (shouldRestoreCursor) {
            restoreCursorPosition(el2, template, function () {
              setInput();
            });
          } else {
            setInput();
          }
        }
        function formatInput(input, template) {
          if (input === "") return "";
          var strippedDownInput = _stripDown(template, input);
          var rebuiltInput = buildUp(template, strippedDownInput);
          return rebuiltInput;
        }
      }).before("model");
    }
    function restoreCursorPosition(el, template, callback) {
      var cursorPosition = el.selectionStart;
      var unformattedValue = el.value;
      callback();
      var beforeLeftOfCursorBeforeFormatting = unformattedValue.slice(0, cursorPosition);
      var newPosition = buildUp(template, _stripDown(template, beforeLeftOfCursorBeforeFormatting)).length;
      el.setSelectionRange(newPosition, newPosition);
    }
    function _stripDown(template, input) {
      var inputToBeStripped = input;
      var output = "";
      var regexes = {
        "9": /[0-9]/,
        "a": /[a-zA-Z]/,
        "*": /[a-zA-Z0-9]/
      };
      var wildcardTemplate = "";
      for (var i = 0; i < template.length; i++) {
        if (["9", "a", "*"].includes(template[i])) {
          wildcardTemplate += template[i];
          continue;
        }
        for (var j = 0; j < inputToBeStripped.length; j++) {
          if (inputToBeStripped[j] === template[i]) {
            inputToBeStripped = inputToBeStripped.slice(0, j) + inputToBeStripped.slice(j + 1);
            break;
          }
        }
      }
      for (var _i10 = 0; _i10 < wildcardTemplate.length; _i10++) {
        var found = false;
        for (var _j = 0; _j < inputToBeStripped.length; _j++) {
          if (regexes[wildcardTemplate[_i10]].test(inputToBeStripped[_j])) {
            output += inputToBeStripped[_j];
            inputToBeStripped = inputToBeStripped.slice(0, _j) + inputToBeStripped.slice(_j + 1);
            found = true;
            break;
          }
        }
        if (!found) break;
      }
      return output;
    }
    function buildUp(template, input) {
      var clean = Array.from(input);
      var output = "";
      for (var i = 0; i < template.length; i++) {
        if (!["9", "a", "*"].includes(template[i])) {
          output += template[i];
          continue;
        }
        if (clean.length === 0) break;
        output += clean.shift();
      }
      return output;
    }
    function formatMoney(input) {
      var _this5 = this;
      var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".";
      var thousands = arguments.length > 2 ? arguments[2] : undefined;
      var precision = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
      if (input === "-") return "-";
      if (/^\D+$/.test(input)) return "9";
      if (thousands === null || thousands === void 0) {
        thousands = delimiter === "," ? "." : ",";
      }
      var addThousands = function addThousands(input2, thousands2) {
        var output = "";
        var counter = 0;
        for (var i = input2.length - 1; i >= 0; i--) {
          if (input2[i] === thousands2) continue;
          if (counter === 3) {
            output = input2[i] + thousands2 + output;
            counter = 0;
          } else {
            output = input2[i] + output;
          }
          counter++;
        }
        return output;
      };
      var minus = input.startsWith("-") ? "-" : "";
      var strippedInput = input.replaceAll(new RegExp("[^0-9\\".concat(delimiter, "]"), "g"), "");
      var template = Array.from({
        length: strippedInput.split(delimiter)[0].length
      }).fill("9").join("");
      template = "".concat(minus).concat(addThousands(template, thousands));
      if (precision > 0 && input.includes(delimiter)) template += "".concat(delimiter) + "9".repeat(precision);
      queueMicrotask(function () {
        if (_this5.el.value.endsWith(delimiter)) return;
        if (_this5.el.value[_this5.el.selectionStart - 1] === delimiter) {
          _this5.el.setSelectionRange(_this5.el.selectionStart - 1, _this5.el.selectionStart - 1);
        }
      });
      return template;
    }
    var module_default = src_default;
  }
});

// js/utils.js
var WeakBag = /*#__PURE__*/function () {
  function WeakBag() {
    _classCallCheck(this, WeakBag);
    this.arrays = /* @__PURE__ */new WeakMap();
  }
  _createClass(WeakBag, [{
    key: "add",
    value: function add(key, value) {
      if (!this.arrays.has(key)) this.arrays.set(key, []);
      this.arrays.get(key).push(value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.arrays.has(key) ? this.arrays.get(key) : [];
    }
  }, {
    key: "each",
    value: function each(key, callback) {
      return this.get(key).forEach(callback);
    }
  }]);
  return WeakBag;
}();
function dispatch(el, name) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var bubbles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  el.dispatchEvent(new CustomEvent(name, {
    detail: detail,
    bubbles: bubbles,
    composed: true,
    cancelable: true
  }));
}
function isObjecty(subject) {
  return _typeof(subject) === "object" && subject !== null;
}
function isObject(subject) {
  return isObjecty(subject) && !isArray(subject);
}
function isArray(subject) {
  return Array.isArray(subject);
}
function isFunction(subject) {
  return typeof subject === "function";
}
function isPrimitive(subject) {
  return _typeof(subject) !== "object" || subject === null;
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function dataGet(object, key) {
  if (key === "") return object;
  return key.split(".").reduce(function (carry, i) {
    if (carry === void 0) return void 0;
    return carry[i];
  }, object);
}
function dataSet(object, key, value) {
  var segments = key.split(".");
  if (segments.length === 1) {
    return object[key] = value;
  }
  var firstSegment = segments.shift();
  var restOfSegments = segments.join(".");
  if (object[firstSegment] === void 0) {
    object[firstSegment] = {};
  }
  dataSet(object[firstSegment], restOfSegments, value);
}
function diff(left, right) {
  var diffs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  if (left === right) return diffs;
  if (_typeof(left) !== _typeof(right) || isObject(left) && isArray(right) || isArray(left) && isObject(right)) {
    diffs[path] = right;
    return diffs;
  }
  if (isPrimitive(left) || isPrimitive(right)) {
    diffs[path] = right;
    return diffs;
  }
  var leftKeys = Object.keys(left);
  Object.entries(right).forEach(function (_ref96) {
    var _ref97 = _slicedToArray(_ref96, 2),
      key = _ref97[0],
      value = _ref97[1];
    diffs = _objectSpread(_objectSpread({}, diffs), diff(left[key], right[key], diffs, path === "" ? key : "".concat(path, ".").concat(key)));
    leftKeys = leftKeys.filter(function (i) {
      return i !== key;
    });
  });
  leftKeys.forEach(function (key) {
    diffs["".concat(path, ".").concat(key)] = "__rm__";
  });
  return diffs;
}
function extractData(payload) {
  var value = isSynthetic(payload) ? payload[0] : payload;
  var meta = isSynthetic(payload) ? payload[1] : void 0;
  if (isObjecty(value)) {
    Object.entries(value).forEach(function (_ref98) {
      var _ref99 = _slicedToArray(_ref98, 2),
        key = _ref99[0],
        iValue = _ref99[1];
      value[key] = extractData(iValue);
    });
  }
  return value;
}
function isSynthetic(subject) {
  return Array.isArray(subject) && subject.length === 2 && _typeof(subject[1]) === "object" && Object.keys(subject[1]).includes("s");
}
function getCsrfToken() {
  var _window$livewireScrip;
  if (document.querySelector('meta[name="csrf-token"]')) {
    return document.querySelector('meta[name="csrf-token"]').getAttribute("content");
  }
  if (document.querySelector("[data-csrf]")) {
    return document.querySelector("[data-csrf]").getAttribute("data-csrf");
  }
  if ((_window$livewireScrip = window.livewireScriptConfig["csrf"]) !== null && _window$livewireScrip !== void 0 ? _window$livewireScrip : false) {
    return window.livewireScriptConfig["csrf"];
  }
  throw "Livewire: No CSRF token detected";
}
function contentIsFromDump(content) {
  return !!content.match(/<script>Sfdump\(".+"\)<\/script>/);
}
function splitDumpFromContent(content) {
  var dump2 = content.match(/[\s\S]*<script>Sfdump\("[\s\S]+"\)<\/script>/);
  return [dump2, content.replace(dump2, "")];
}

// js/modal.js
function showHtmlModal(html) {
  var page = document.createElement("html");
  page.innerHTML = html;
  page.querySelectorAll("a").forEach(function (a) {
    return a.setAttribute("target", "_top");
  });
  var modal = document.getElementById("livewire-error");
  if (typeof modal != "undefined" && modal != null) {
    modal.innerHTML = "";
  } else {
    modal = document.createElement("div");
    modal.id = "livewire-error";
    modal.style.position = "fixed";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.padding = "50px";
    modal.style.backgroundColor = "rgba(0, 0, 0, .6)";
    modal.style.zIndex = 2e5;
  }
  var iframe = document.createElement("iframe");
  iframe.style.backgroundColor = "#17161A";
  iframe.style.borderRadius = "5px";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  modal.appendChild(iframe);
  document.body.prepend(modal);
  document.body.style.overflow = "hidden";
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(page.outerHTML);
  iframe.contentWindow.document.close();
  modal.addEventListener("click", function () {
    return hideHtmlModal(modal);
  });
  modal.setAttribute("tabindex", 0);
  modal.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hideHtmlModal(modal);
  });
  modal.focus();
}
function hideHtmlModal(modal) {
  modal.outerHTML = "";
  document.body.style.overflow = "visible";
}

// js/events.js
var listeners = [];
function on(name, callback) {
  if (!listeners[name]) listeners[name] = [];
  listeners[name].push(callback);
  return function () {
    listeners[name] = listeners[name].filter(function (i) {
      return i !== callback;
    });
  };
}
function trigger(name) {
  var callbacks = listeners[name] || [];
  var finishers = [];
  for (var _len7 = arguments.length, params = new Array(_len7 > 1 ? _len7 - 1 : 0), _key9 = 1; _key9 < _len7; _key9++) {
    params[_key9 - 1] = arguments[_key9];
  }
  for (var i = 0; i < callbacks.length; i++) {
    var finisher = callbacks[i].apply(callbacks, params);
    if (isFunction(finisher)) finishers.push(finisher);
  }
  return function (result) {
    var latest = result;
    for (var _i11 = 0; _i11 < finishers.length; _i11++) {
      var iResult = finishers[_i11](latest);
      if (iResult !== void 0) {
        latest = iResult;
      }
    }
    return latest;
  };
}

// js/request.js
var updateUri = (_ref100 = (_document$querySelect = (_document$querySelect2 = document.querySelector("[data-uri]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.getAttribute("data-uri")) !== null && _document$querySelect !== void 0 ? _document$querySelect : window.livewireScriptConfig["uri"]) !== null && _ref100 !== void 0 ? _ref100 : null;
function triggerSend() {
  bundleMultipleRequestsTogetherIfTheyHappenWithinFiveMsOfEachOther(function () {
    sendRequestToServer();
  });
}
var requestBufferTimeout;
function bundleMultipleRequestsTogetherIfTheyHappenWithinFiveMsOfEachOther(callback) {
  if (requestBufferTimeout) return;
  requestBufferTimeout = setTimeout(function () {
    callback();
    requestBufferTimeout = void 0;
  }, 5);
}
function sendRequestToServer() {
  return _sendRequestToServer.apply(this, arguments);
}
function _sendRequestToServer() {
  _sendRequestToServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          prepareCommitPayloads();
          _context10.next = 3;
          return queueNewRequestAttemptsWhile( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var _compileCommitPayload, _compileCommitPayload2, payload, handleSuccess, handleFailure, options, succeedCallbacks, failCallbacks, respondCallbacks, succeed, fail, respond, finishProfile, response, mutableObject, content, _preventDefault, _splitDumpFromContent, _splitDumpFromContent2, _JSON$parse, components2;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _compileCommitPayload = compileCommitPayloads(), _compileCommitPayload2 = _slicedToArray(_compileCommitPayload, 3), payload = _compileCommitPayload2[0], handleSuccess = _compileCommitPayload2[1], handleFailure = _compileCommitPayload2[2];
                  options = {
                    method: "POST",
                    body: JSON.stringify({
                      _token: getCsrfToken(),
                      components: payload
                    }),
                    headers: {
                      "Content-type": "application/json",
                      "X-Livewire": ""
                    }
                  };
                  succeedCallbacks = [];
                  failCallbacks = [];
                  respondCallbacks = [];
                  succeed = function succeed(fwd) {
                    return succeedCallbacks.forEach(function (i) {
                      return i(fwd);
                    });
                  };
                  fail = function fail(fwd) {
                    return failCallbacks.forEach(function (i) {
                      return i(fwd);
                    });
                  };
                  respond = function respond(fwd) {
                    return respondCallbacks.forEach(function (i) {
                      return i(fwd);
                    });
                  };
                  finishProfile = trigger("request.profile", options);
                  trigger("request", {
                    url: updateUri,
                    options: options,
                    payload: options.body,
                    respond: function respond(i) {
                      return respondCallbacks.push(i);
                    },
                    succeed: function succeed(i) {
                      return succeedCallbacks.push(i);
                    },
                    fail: function fail(i) {
                      return failCallbacks.push(i);
                    }
                  });
                  _context9.next = 12;
                  return fetch(updateUri, options);
                case 12:
                  response = _context9.sent;
                  mutableObject = {
                    status: response.status,
                    response: response
                  };
                  respond(mutableObject);
                  response = mutableObject.response;
                  _context9.next = 18;
                  return response.text();
                case 18:
                  content = _context9.sent;
                  if (response.ok) {
                    _context9.next = 28;
                    break;
                  }
                  finishProfile({
                    content: "{}",
                    failed: true
                  });
                  _preventDefault = false;
                  handleFailure();
                  fail({
                    status: response.status,
                    content: content,
                    preventDefault: function preventDefault() {
                      return _preventDefault = true;
                    }
                  });
                  if (!_preventDefault) {
                    _context9.next = 26;
                    break;
                  }
                  return _context9.abrupt("return");
                case 26:
                  if (response.status === 419) {
                    handlePageExpiry();
                  }
                  return _context9.abrupt("return", showFailureModal(content));
                case 28:
                  if (response.redirected) {
                    window.location.href = response.url;
                  }
                  if (contentIsFromDump(content)) {
                    _splitDumpFromContent = splitDumpFromContent(content);
                    _splitDumpFromContent2 = _slicedToArray(_splitDumpFromContent, 2);
                    dump = _splitDumpFromContent2[0];
                    content = _splitDumpFromContent2[1];
                    showHtmlModal(dump);
                    finishProfile({
                      content: "{}",
                      failed: true
                    });
                  } else {
                    finishProfile({
                      content: content,
                      failed: false
                    });
                  }
                  _JSON$parse = JSON.parse(content), components2 = _JSON$parse.components;
                  handleSuccess(components2);
                  succeed({
                    status: response.status,
                    json: JSON.parse(content)
                  });
                case 33:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          })));
        case 3:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _sendRequestToServer.apply(this, arguments);
}
function prepareCommitPayloads() {
  var commits = getCommits();
  commits.forEach(function (i) {
    return i.prepare();
  });
}
function compileCommitPayloads() {
  var commits = getCommits();
  var commitPayloads = [];
  var successReceivers = [];
  var failureReceivers = [];
  flushCommits(function (commit) {
    var _commit$toRequestPayl = commit.toRequestPayload(),
      _commit$toRequestPayl2 = _slicedToArray(_commit$toRequestPayl, 3),
      payload = _commit$toRequestPayl2[0],
      succeed2 = _commit$toRequestPayl2[1],
      fail2 = _commit$toRequestPayl2[2];
    commitPayloads.push(payload);
    successReceivers.push(succeed2);
    failureReceivers.push(fail2);
  });
  var succeed = function succeed(components2) {
    return successReceivers.forEach(function (receiver) {
      return receiver(components2.shift());
    });
  };
  var fail = function fail() {
    return failureReceivers.forEach(function (receiver) {
      return receiver();
    });
  };
  return [commitPayloads, succeed, fail];
}
function handlePageExpiry() {
  confirm("This page has expired.\nWould you like to refresh the page?") && window.location.reload();
}
function showFailureModal(content) {
  var html = content;
  showHtmlModal(html);
}
var sendingRequest = false;
var afterSendStack = [];
function waitUntilTheCurrentRequestIsFinished(_x) {
  return _waitUntilTheCurrentRequestIsFinished.apply(this, arguments);
}
function _waitUntilTheCurrentRequestIsFinished() {
  _waitUntilTheCurrentRequestIsFinished = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(callback) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          return _context11.abrupt("return", new Promise(function (resolve) {
            if (sendingRequest) {
              afterSendStack.push(function () {
                return resolve(callback());
              });
            } else {
              resolve(callback());
            }
          }));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _waitUntilTheCurrentRequestIsFinished.apply(this, arguments);
}
function queueNewRequestAttemptsWhile(_x2) {
  return _queueNewRequestAttemptsWhile.apply(this, arguments);
} // js/commit.js
function _queueNewRequestAttemptsWhile() {
  _queueNewRequestAttemptsWhile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(callback) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          sendingRequest = true;
          _context12.next = 3;
          return callback();
        case 3:
          sendingRequest = false;
          while (afterSendStack.length > 0) afterSendStack.shift()();
        case 5:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _queueNewRequestAttemptsWhile.apply(this, arguments);
}
var commitQueue = [];
function getCommits() {
  return commitQueue;
}
function flushCommits(callback) {
  while (commitQueue.length > 0) {
    callback(commitQueue.shift());
  }
}
function findOrCreateCommit(component) {
  var commit = commitQueue.find(function (i) {
    return i.component.id === component.id;
  });
  if (!commit) {
    commitQueue.push(commit = new Commit(component));
  }
  return commit;
}
function requestCommit(_x3) {
  return _requestCommit.apply(this, arguments);
}
function _requestCommit() {
  _requestCommit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(component) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return waitUntilTheCurrentRequestIsFinished(function () {
            var commit = findOrCreateCommit(component);
            triggerSend();
            return new Promise(function (resolve, reject) {
              commit.addResolver(resolve);
            });
          });
        case 2:
          return _context13.abrupt("return", _context13.sent);
        case 3:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _requestCommit.apply(this, arguments);
}
function requestCall(_x4, _x5, _x6) {
  return _requestCall.apply(this, arguments);
}
function _requestCall() {
  _requestCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(component, method, params) {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return waitUntilTheCurrentRequestIsFinished(function () {
            var commit = findOrCreateCommit(component);
            triggerSend();
            return new Promise(function (resolve, reject) {
              commit.addCall(method, params, function (value) {
                return resolve(value);
              });
            });
          });
        case 2:
          return _context14.abrupt("return", _context14.sent);
        case 3:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _requestCall.apply(this, arguments);
}
var Commit = /*#__PURE__*/function () {
  function Commit(component) {
    _classCallCheck(this, Commit);
    this.component = component;
    this.calls = [];
    this.receivers = [];
    this.resolvers = [];
  }
  _createClass(Commit, [{
    key: "addResolver",
    value: function addResolver(resolver) {
      this.resolvers.push(resolver);
    }
  }, {
    key: "addCall",
    value: function addCall(method, params, receiver) {
      this.calls.push({
        path: "",
        method: method,
        params: params,
        handleReturn: function handleReturn(value) {
          receiver(value);
        }
      });
    }
  }, {
    key: "prepare",
    value: function prepare() {
      trigger("commit.prepare", {
        component: this.component
      });
    }
  }, {
    key: "toRequestPayload",
    value: function toRequestPayload() {
      var _this6 = this;
      var propertiesDiff = diff(this.component.canonical, this.component.ephemeral);
      var payload = {
        snapshot: this.component.snapshotEncoded,
        updates: propertiesDiff,
        calls: this.calls.map(function (i) {
          return {
            path: i.path,
            method: i.method,
            params: i.params
          };
        })
      };
      var succeedCallbacks = [];
      var failCallbacks = [];
      var respondCallbacks = [];
      var succeed = function succeed(fwd) {
        return succeedCallbacks.forEach(function (i) {
          return i(fwd);
        });
      };
      var fail = function fail() {
        return failCallbacks.forEach(function (i) {
          return i();
        });
      };
      var respond = function respond() {
        return respondCallbacks.forEach(function (i) {
          return i();
        });
      };
      var finishTarget = trigger("commit", {
        component: this.component,
        commit: payload,
        succeed: function succeed(callback) {
          succeedCallbacks.push(callback);
        },
        fail: function fail(callback) {
          failCallbacks.push(callback);
        },
        respond: function respond(callback) {
          respondCallbacks.push(callback);
        }
      });
      var handleResponse = function handleResponse(response) {
        var snapshot = response.snapshot,
          effects = response.effects;
        respond();
        _this6.component.mergeNewSnapshot(snapshot, effects, propertiesDiff);
        processEffects(_this6.component, _this6.component.effects);
        if (effects["returns"]) {
          var returns = effects["returns"];
          var returnHandlerStack = _this6.calls.map(function (_ref101) {
            var handleReturn = _ref101.handleReturn;
            return handleReturn;
          });
          returnHandlerStack.forEach(function (handleReturn, index) {
            handleReturn(returns[index]);
          });
        }
        var parsedSnapshot = JSON.parse(snapshot);
        finishTarget({
          snapshot: parsedSnapshot,
          effects: effects
        });
        _this6.resolvers.forEach(function (i) {
          return i();
        });
        succeed(response);
      };
      var handleFailure = function handleFailure() {
        respond();
        fail();
      };
      return [payload, handleResponse, handleFailure];
    }
  }]);
  return Commit;
}();
function processEffects(target, effects) {
  trigger("effects", target, effects);
}

// js/features/supportEntangle.js
var import_alpinejs = __toESM(require_module_cjs());
function generateEntangleFunction(component, cleanup2) {
  if (!cleanup2) cleanup2 = function cleanup2() {};
  return function (name) {
    var live = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isLive = live;
    var livewireProperty = name;
    var livewireComponent = component.$wire;
    var livewirePropertyValue = livewireComponent.get(livewireProperty);
    var interceptor = import_alpinejs["default"].interceptor(function (initialValue, getter, setter, path, key) {
      if (typeof livewirePropertyValue === "undefined") {
        console.error("Livewire Entangle Error: Livewire property ['".concat(livewireProperty, "'] cannot be found on component: ['").concat(component.name, "']"));
        return;
      }
      var release = import_alpinejs["default"].entangle({
        get: function get() {
          return livewireComponent.get(name);
        },
        set: function set(value) {
          livewireComponent.set(name, value, isLive);
        }
      }, {
        get: function get() {
          return getter();
        },
        set: function set(value) {
          setter(value);
        }
      });
      cleanup2(function () {
        return release();
      });
      return livewireComponent.get(name);
    }, function (obj) {
      Object.defineProperty(obj, "live", {
        get: function get() {
          isLive = true;
          return obj;
        }
      });
    });
    return interceptor(livewirePropertyValue);
  };
}

// js/$wire.js
var import_alpinejs2 = __toESM(require_module_cjs());

// js/features/supportFileUploads.js
var uploadManagers = /* @__PURE__ */new WeakMap();
function getUploadManager(component) {
  if (!uploadManagers.has(component)) {
    var manager = new UploadManager(component);
    uploadManagers.set(component, manager);
    manager.registerListeners();
  }
  return uploadManagers.get(component);
}
function handleFileUpload(el, property, component, cleanup2) {
  var manager = getUploadManager(component);
  var start2 = function start2() {
    return el.dispatchEvent(new CustomEvent("livewire-upload-start", {
      bubbles: true,
      detail: {
        id: component.id,
        property: property
      }
    }));
  };
  var finish = function finish() {
    return el.dispatchEvent(new CustomEvent("livewire-upload-finish", {
      bubbles: true,
      detail: {
        id: component.id,
        property: property
      }
    }));
  };
  var error2 = function error2() {
    return el.dispatchEvent(new CustomEvent("livewire-upload-error", {
      bubbles: true,
      detail: {
        id: component.id,
        property: property
      }
    }));
  };
  var progress = function progress(progressEvent) {
    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
    el.dispatchEvent(new CustomEvent("livewire-upload-progress", {
      bubbles: true,
      detail: {
        progress: percentCompleted
      }
    }));
  };
  var eventHandler = function eventHandler(e) {
    if (e.target.files.length === 0) return;
    start2();
    if (e.target.multiple) {
      manager.uploadMultiple(property, e.target.files, finish, error2, progress);
    } else {
      manager.upload(property, e.target.files[0], finish, error2, progress);
    }
  };
  el.addEventListener("change", eventHandler);
  var clearFileInputValue = function clearFileInputValue() {
    el.value = null;
  };
  el.addEventListener("click", clearFileInputValue);
  cleanup2(function () {
    el.removeEventListener("change", eventHandler);
    el.removeEventListener("click", clearFileInputValue);
  });
}
var UploadManager = /*#__PURE__*/function () {
  function UploadManager(component) {
    _classCallCheck(this, UploadManager);
    this.component = component;
    this.uploadBag = new MessageBag();
    this.removeBag = new MessageBag();
  }
  _createClass(UploadManager, [{
    key: "registerListeners",
    value: function registerListeners() {
      var _this7 = this;
      this.component.$wire.$on("upload:generatedSignedUrl", function (_ref102) {
        var name = _ref102.name,
          url = _ref102.url;
        setUploadLoading(_this7.component, name);
        _this7.handleSignedUrl(name, url);
      });
      this.component.$wire.$on("upload:generatedSignedUrlForS3", function (_ref103) {
        var name = _ref103.name,
          payload = _ref103.payload;
        setUploadLoading(_this7.component, name);
        _this7.handleS3PreSignedUrl(name, payload);
      });
      this.component.$wire.$on("upload:finished", function (_ref104) {
        var name = _ref104.name,
          tmpFilenames = _ref104.tmpFilenames;
        return _this7.markUploadFinished(name, tmpFilenames);
      });
      this.component.$wire.$on("upload:errored", function (_ref105) {
        var name = _ref105.name;
        return _this7.markUploadErrored(name);
      });
      this.component.$wire.$on("upload:removed", function (_ref106) {
        var name = _ref106.name,
          tmpFilename = _ref106.tmpFilename;
        return _this7.removeBag.shift(name).finishCallback(tmpFilename);
      });
    }
  }, {
    key: "upload",
    value: function upload(name, file, finishCallback, errorCallback, progressCallback) {
      this.setUpload(name, {
        files: [file],
        multiple: false,
        finishCallback: finishCallback,
        errorCallback: errorCallback,
        progressCallback: progressCallback
      });
    }
  }, {
    key: "uploadMultiple",
    value: function uploadMultiple(name, files, finishCallback, errorCallback, progressCallback) {
      this.setUpload(name, {
        files: Array.from(files),
        multiple: true,
        finishCallback: finishCallback,
        errorCallback: errorCallback,
        progressCallback: progressCallback
      });
    }
  }, {
    key: "removeUpload",
    value: function removeUpload(name, tmpFilename, finishCallback) {
      this.removeBag.push(name, {
        tmpFilename: tmpFilename,
        finishCallback: finishCallback
      });
      this.component.$wire.call("_removeUpload", name, tmpFilename);
    }
  }, {
    key: "setUpload",
    value: function setUpload(name, uploadObject) {
      this.uploadBag.add(name, uploadObject);
      if (this.uploadBag.get(name).length === 1) {
        this.startUpload(name, uploadObject);
      }
    }
  }, {
    key: "handleSignedUrl",
    value: function handleSignedUrl(name, url) {
      var formData = new FormData();
      Array.from(this.uploadBag.first(name).files).forEach(function (file) {
        return formData.append("files[]", file, file.name);
      });
      var headers = {
        "Accept": "application/json"
      };
      var csrfToken = getCsrfToken();
      if (csrfToken) headers["X-CSRF-TOKEN"] = csrfToken;
      this.makeRequest(name, formData, "post", url, headers, function (response) {
        return response.paths;
      });
    }
  }, {
    key: "handleS3PreSignedUrl",
    value: function handleS3PreSignedUrl(name, payload) {
      var formData = this.uploadBag.first(name).files[0];
      var headers = payload.headers;
      if ("Host" in headers) delete headers.Host;
      var url = payload.url;
      this.makeRequest(name, formData, "put", url, headers, function (response) {
        return [payload.path];
      });
    }
  }, {
    key: "makeRequest",
    value: function makeRequest(name, formData, method, url, headers, retrievePaths) {
      var _this8 = this;
      var request = new XMLHttpRequest();
      request.open(method, url);
      Object.entries(headers).forEach(function (_ref107) {
        var _ref108 = _slicedToArray(_ref107, 2),
          key = _ref108[0],
          value = _ref108[1];
        request.setRequestHeader(key, value);
      });
      request.upload.addEventListener("progress", function (e) {
        e.detail = {};
        e.detail.progress = Math.round(e.loaded * 100 / e.total);
        _this8.uploadBag.first(name).progressCallback(e);
      });
      request.addEventListener("load", function () {
        if ((request.status + "")[0] === "2") {
          var paths = retrievePaths(request.response && JSON.parse(request.response));
          _this8.component.$wire.call("_finishUpload", name, paths, _this8.uploadBag.first(name).multiple);
          return;
        }
        var errors = null;
        if (request.status === 422) {
          errors = request.response;
        }
        _this8.component.$wire.call("_uploadErrored", name, errors, _this8.uploadBag.first(name).multiple);
      });
      request.send(formData);
    }
  }, {
    key: "startUpload",
    value: function startUpload(name, uploadObject) {
      var fileInfos = uploadObject.files.map(function (file) {
        return {
          name: file.name,
          size: file.size,
          type: file.type
        };
      });
      this.component.$wire.call("_startUpload", name, fileInfos, uploadObject.multiple);
      setUploadLoading(this.component, name);
    }
  }, {
    key: "markUploadFinished",
    value: function markUploadFinished(name, tmpFilenames) {
      unsetUploadLoading(this.component);
      var uploadObject = this.uploadBag.shift(name);
      uploadObject.finishCallback(uploadObject.multiple ? tmpFilenames : tmpFilenames[0]);
      if (this.uploadBag.get(name).length > 0) this.startUpload(name, this.uploadBag.last(name));
    }
  }, {
    key: "markUploadErrored",
    value: function markUploadErrored(name) {
      unsetUploadLoading(this.component);
      this.uploadBag.shift(name).errorCallback();
      if (this.uploadBag.get(name).length > 0) this.startUpload(name, this.uploadBag.last(name));
    }
  }]);
  return UploadManager;
}();
var MessageBag = /*#__PURE__*/function () {
  function MessageBag() {
    _classCallCheck(this, MessageBag);
    this.bag = {};
  }
  _createClass(MessageBag, [{
    key: "add",
    value: function add(name, thing) {
      if (!this.bag[name]) {
        this.bag[name] = [];
      }
      this.bag[name].push(thing);
    }
  }, {
    key: "push",
    value: function push(name, thing) {
      this.add(name, thing);
    }
  }, {
    key: "first",
    value: function first(name) {
      if (!this.bag[name]) return null;
      return this.bag[name][0];
    }
  }, {
    key: "last",
    value: function last(name) {
      return this.bag[name].slice(-1)[0];
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.bag[name];
    }
  }, {
    key: "shift",
    value: function shift(name) {
      return this.bag[name].shift();
    }
  }, {
    key: "call",
    value: function call(name) {
      for (var _len8 = arguments.length, params = new Array(_len8 > 1 ? _len8 - 1 : 0), _key10 = 1; _key10 < _len8; _key10++) {
        params[_key10 - 1] = arguments[_key10];
      }
      (this.listeners[name] || []).forEach(function (callback) {
        callback.apply(void 0, params);
      });
    }
  }, {
    key: "has",
    value: function has(name) {
      return Object.keys(this.listeners).includes(name);
    }
  }]);
  return MessageBag;
}();
function setUploadLoading() {}
function unsetUploadLoading() {}
function upload(component, name, file) {
  var finishCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var errorCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var progressCallback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};
  var uploadManager = getUploadManager(component);
  uploadManager.upload(name, file, finishCallback, errorCallback, progressCallback);
}
function uploadMultiple(component, name, files) {
  var finishCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var errorCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var progressCallback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};
  var uploadManager = getUploadManager(component);
  uploadManager.uploadMultiple(name, files, finishCallback, errorCallback, progressCallback);
}
function removeUpload(component, name, tmpFilename) {
  var finishCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var errorCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var uploadManager = getUploadManager(component);
  uploadManager.removeUpload(name, tmpFilename, finishCallback, errorCallback);
}

// js/$wire.js
var properties = {};
var fallback;
function wireProperty(name, callback) {
  var component = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  properties[name] = callback;
}
function wireFallback(callback) {
  fallback = callback;
}
var aliases = {
  "on": "$on",
  "get": "$get",
  "set": "$set",
  "call": "$call",
  "commit": "$commit",
  "watch": "$watch",
  "entangle": "$entangle",
  "dispatch": "$dispatch",
  "dispatchTo": "$dispatchTo",
  "dispatchSelf": "$dispatchSelf",
  "upload": "$upload",
  "uploadMultiple": "$uploadMultiple",
  "removeUpload": "$removeUpload"
};
function generateWireObject(component, state) {
  return new Proxy({}, {
    get: function get(target, property) {
      if (property === "__instance") return component;
      if (property in aliases) {
        return getProperty(component, aliases[property]);
      } else if (property in properties) {
        return getProperty(component, property);
      } else if (property in state) {
        return state[property];
      } else if (!["then"].includes(property)) {
        return getFallback(component)(property);
      }
    },
    set: function set(target, property, value) {
      if (property in state) {
        state[property] = value;
      }
      return true;
    }
  });
}
function getProperty(component, name) {
  return properties[name](component);
}
function getFallback(component) {
  return fallback(component);
}
import_alpinejs2["default"].magic("wire", function (el, _ref109) {
  var cleanup2 = _ref109.cleanup;
  var component;
  return new Proxy({}, {
    get: function get(target, property) {
      if (!component) component = closestComponent(el);
      if (["$entangle", "entangle"].includes(property)) {
        return generateEntangleFunction(component, cleanup2);
      }
      return component.$wire[property];
    },
    set: function set(target, property, value) {
      if (!component) component = closestComponent(el);
      component.$wire[property] = value;
      return true;
    }
  });
});
wireProperty("__instance", function (component) {
  return component;
});
wireProperty("$get", function (component) {
  return function (property) {
    var reactive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return dataGet(reactive ? component.reactive : component.ephemeral, property);
  };
});
wireProperty("$set", function (component) {
  return /*#__PURE__*/function () {
    var _ref110 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(property, value) {
      var live,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            live = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;
            dataSet(component.reactive, property, value);
            if (!live) {
              _context2.next = 8;
              break;
            }
            _context2.next = 5;
            return requestCommit(component);
          case 5:
            _context2.t0 = _context2.sent;
            _context2.next = 9;
            break;
          case 8:
            _context2.t0 = Promise.resolve();
          case 9:
            return _context2.abrupt("return", _context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x7, _x8) {
      return _ref110.apply(this, arguments);
    };
  }();
});
wireProperty("$call", function (component) {
  return /*#__PURE__*/function () {
    var _ref111 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(method) {
      var _component$$wire;
      var _len9,
        params,
        _key11,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            for (_len9 = _args3.length, params = new Array(_len9 > 1 ? _len9 - 1 : 0), _key11 = 1; _key11 < _len9; _key11++) {
              params[_key11 - 1] = _args3[_key11];
            }
            _context3.next = 3;
            return (_component$$wire = component.$wire)[method].apply(_component$$wire, params);
          case 3:
            return _context3.abrupt("return", _context3.sent);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x9) {
      return _ref111.apply(this, arguments);
    };
  }();
});
wireProperty("$entangle", function (component) {
  return function (name) {
    var live = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return generateEntangleFunction(component)(name, live);
  };
});
wireProperty("$toggle", function (component) {
  return function (name) {
    var live = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return component.$wire.set(name, !component.$wire.get(name), live);
  };
});
wireProperty("$watch", function (component) {
  return function (path, callback) {
    var firstTime = true;
    var oldValue = void 0;
    import_alpinejs2["default"].effect(function () {
      var value = dataGet(component.reactive, path);
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(function () {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    });
  };
});
wireProperty("$refresh", function (component) {
  return component.$wire.$commit;
});
wireProperty("$commit", function (component) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return requestCommit(component);
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
});
wireProperty("$on", function (component) {
  return function () {
    for (var _len10 = arguments.length, params = new Array(_len10), _key12 = 0; _key12 < _len10; _key12++) {
      params[_key12] = arguments[_key12];
    }
    return listen.apply(void 0, [component].concat(params));
  };
});
wireProperty("$dispatch", function (component) {
  return function () {
    for (var _len11 = arguments.length, params = new Array(_len11), _key13 = 0; _key13 < _len11; _key13++) {
      params[_key13] = arguments[_key13];
    }
    return dispatch2.apply(void 0, [component].concat(params));
  };
});
wireProperty("$dispatchSelf", function (component) {
  return function () {
    for (var _len12 = arguments.length, params = new Array(_len12), _key14 = 0; _key14 < _len12; _key14++) {
      params[_key14] = arguments[_key14];
    }
    return dispatchSelf.apply(void 0, [component].concat(params));
  };
});
wireProperty("$dispatchTo", function (component) {
  return function () {
    for (var _len13 = arguments.length, params = new Array(_len13), _key15 = 0; _key15 < _len13; _key15++) {
      params[_key15] = arguments[_key15];
    }
    return dispatchTo.apply(void 0, [component].concat(params));
  };
});
wireProperty("$upload", function (component) {
  return function () {
    for (var _len14 = arguments.length, params = new Array(_len14), _key16 = 0; _key16 < _len14; _key16++) {
      params[_key16] = arguments[_key16];
    }
    return upload.apply(void 0, [component].concat(params));
  };
});
wireProperty("$uploadMultiple", function (component) {
  return function () {
    for (var _len15 = arguments.length, params = new Array(_len15), _key17 = 0; _key17 < _len15; _key17++) {
      params[_key17] = arguments[_key17];
    }
    return uploadMultiple.apply(void 0, [component].concat(params));
  };
});
wireProperty("$removeUpload", function (component) {
  return function () {
    for (var _len16 = arguments.length, params = new Array(_len16), _key18 = 0; _key18 < _len16; _key18++) {
      params[_key18] = arguments[_key18];
    }
    return removeUpload.apply(void 0, [component].concat(params));
  };
});
var parentMemo = /* @__PURE__ */new WeakMap();
wireProperty("$parent", function (component) {
  if (parentMemo.has(component)) return parentMemo.get(component).$wire;
  var parent = closestComponent(component.el.parentElement);
  parentMemo.set(component, parent);
  return parent.$wire;
});
var overriddenMethods = /* @__PURE__ */new WeakMap();
function overrideMethod(component, method, callback) {
  if (!overriddenMethods.has(component)) {
    overriddenMethods.set(component, {});
  }
  var obj = overriddenMethods.get(component);
  obj[method] = callback;
  overriddenMethods.set(component, obj);
}
wireFallback(function (component) {
  return function (property) {
    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _len17,
        params,
        _key19,
        overrides,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            for (_len17 = _args5.length, params = new Array(_len17), _key19 = 0; _key19 < _len17; _key19++) {
              params[_key19] = _args5[_key19];
            }
            if (params.length === 1 && params[0] instanceof Event) {
              params = [];
            }
            if (!overriddenMethods.has(component)) {
              _context5.next = 6;
              break;
            }
            overrides = overriddenMethods.get(component);
            if (!(typeof overrides[property] === "function")) {
              _context5.next = 6;
              break;
            }
            return _context5.abrupt("return", overrides[property](params));
          case 6:
            _context5.next = 8;
            return requestCall(component, property, params);
          case 8:
            return _context5.abrupt("return", _context5.sent);
          case 9:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
  };
});

// js/component.js
var Component = /*#__PURE__*/function () {
  function Component(el) {
    _classCallCheck(this, Component);
    if (el.__livewire) throw "Component already initialized";
    el.__livewire = this;
    this.el = el;
    this.id = el.getAttribute("wire:id");
    this.__livewireId = this.id;
    this.snapshotEncoded = el.getAttribute("wire:snapshot");
    this.snapshot = JSON.parse(this.snapshotEncoded);
    if (!this.snapshot) {
      throw "Snapshot missing on Livewire component with id: " + this.id;
    }
    this.name = this.snapshot.memo.name;
    this.effects = JSON.parse(el.getAttribute("wire:effects"));
    this.originalEffects = deepClone(this.effects);
    this.canonical = extractData(deepClone(this.snapshot.data));
    this.ephemeral = extractData(deepClone(this.snapshot.data));
    this.reactive = Alpine.reactive(this.ephemeral);
    this.$wire = generateWireObject(this, this.reactive);
    this.cleanups = [];
    processEffects(this, this.effects);
  }
  _createClass(Component, [{
    key: "mergeNewSnapshot",
    value: function mergeNewSnapshot(snapshotEncoded, effects) {
      var _this9 = this;
      var updates = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var snapshot = JSON.parse(snapshotEncoded);
      var oldCanonical = deepClone(this.canonical);
      var updatedOldCanonical = this.applyUpdates(oldCanonical, updates);
      var newCanonical = extractData(deepClone(snapshot.data));
      var dirty = diff(updatedOldCanonical, newCanonical);
      this.snapshotEncoded = snapshotEncoded;
      this.snapshot = snapshot;
      this.effects = effects;
      this.canonical = extractData(deepClone(snapshot.data));
      var newData = extractData(deepClone(snapshot.data));
      Object.entries(dirty).forEach(function (_ref114) {
        var _ref115 = _slicedToArray(_ref114, 2),
          key = _ref115[0],
          value = _ref115[1];
        var rootKey = key.split(".")[0];
        _this9.reactive[rootKey] = newData[rootKey];
      });
      return dirty;
    }
  }, {
    key: "applyUpdates",
    value: function applyUpdates(object, updates) {
      for (var key in updates) {
        dataSet(object, key, updates[key]);
      }
      return object;
    }
  }, {
    key: "replayUpdate",
    value: function replayUpdate(snapshot, html) {
      var effects = _objectSpread(_objectSpread({}, this.effects), {}, {
        html: html
      });
      this.mergeNewSnapshot(JSON.stringify(snapshot), effects);
      processEffects(this, {
        html: html
      });
    }
  }, {
    key: "children",
    get: function get() {
      var meta = this.snapshot.memo;
      var childIds = Object.values(meta.children).map(function (i) {
        return i[1];
      });
      return childIds.map(function (id) {
        return findComponent(id);
      });
    }
  }, {
    key: "inscribeSnapshotAndEffectsOnElement",
    value: function inscribeSnapshotAndEffectsOnElement() {
      var el = this.el;
      el.setAttribute("wire:snapshot", this.snapshotEncoded);
      var effects = this.originalEffects.listeners ? {
        listeners: this.originalEffects.listeners
      } : {};
      if (this.originalEffects.url) {
        effects.url = this.originalEffects.url;
      }
      el.setAttribute("wire:effects", JSON.stringify(effects));
    }
  }, {
    key: "addCleanup",
    value: function addCleanup(cleanup2) {
      this.cleanups.push(cleanup2);
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      while (this.cleanups.length > 0) {
        this.cleanups.pop()();
      }
    }
  }]);
  return Component;
}();

// js/store.js
var components = {};
function initComponent(el) {
  var component = new Component(el);
  if (components[component.id]) throw "Component already registered";
  var cleanup2 = function cleanup2(i) {
    return component.addCleanup(i);
  };
  trigger("component.init", {
    component: component,
    cleanup: cleanup2
  });
  components[component.id] = component;
  return component;
}
function destroyComponent(id) {
  var component = components[id];
  if (!component) return;
  component.cleanup();
  delete components[id];
}
function findComponent(id) {
  var component = components[id];
  if (!component) throw "Component not found: " + id;
  return component;
}
function closestComponent(el) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var closestRoot = Alpine.findClosest(el, function (i) {
    return i.__livewire;
  });
  if (!closestRoot) {
    if (strict) throw "Could not find Livewire component in DOM tree";
    return;
  }
  return closestRoot.__livewire;
}
function componentsByName(name) {
  return Object.values(components).filter(function (component) {
    return name == component.name;
  });
}
function getByName(name) {
  return componentsByName(name).map(function (i) {
    return i.$wire;
  });
}
function find(id) {
  var component = components[id];
  return component && component.$wire;
}
function first() {
  return Object.values(components)[0].$wire;
}
function all() {
  return Object.values(components);
}

// js/features/supportEvents.js
var import_alpinejs3 = __toESM(require_module_cjs());
on("effects", function (component, effects) {
  registerListeners(component, effects.listeners || []);
  dispatchEvents(component, effects.dispatches || []);
});
function registerListeners(component, listeners2) {
  listeners2.forEach(function (name) {
    var handler = function handler(e) {
      if (e.__livewire) e.__livewire.receivedBy.push(component);
      component.$wire.call("__dispatch", name, e.detail || {});
    };
    window.addEventListener(name, handler);
    component.addCleanup(function () {
      return window.removeEventListener(name, handler);
    });
    component.el.addEventListener(name, function (e) {
      if (!e.__livewire) return;
      if (e.bubbles) return;
      if (e.__livewire) e.__livewire.receivedBy.push(component.id);
      component.$wire.call("__dispatch", name, e.detail || {});
    });
  });
}
function dispatchEvents(component, dispatches) {
  dispatches.forEach(function (_ref116) {
    var name = _ref116.name,
      _ref116$params = _ref116.params,
      params = _ref116$params === void 0 ? {} : _ref116$params,
      _ref116$self = _ref116.self,
      self2 = _ref116$self === void 0 ? false : _ref116$self,
      to = _ref116.to;
    if (self2) dispatchSelf(component, name, params);else if (to) dispatchTo(component, to, name, params);else dispatch2(component, name, params);
  });
}
function dispatchEvent(target, name, params) {
  var bubbles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var e = new CustomEvent(name, {
    bubbles: bubbles,
    detail: params
  });
  e.__livewire = {
    name: name,
    params: params,
    receivedBy: []
  };
  target.dispatchEvent(e);
}
function dispatch2(component, name, params) {
  dispatchEvent(component.el, name, params);
}
function dispatchGlobal(name, params) {
  dispatchEvent(window, name, params);
}
function dispatchSelf(component, name, params) {
  dispatchEvent(component.el, name, params, false);
}
function dispatchTo(component, componentName, name, params) {
  var targets = componentsByName(componentName);
  targets.forEach(function (target) {
    dispatchEvent(target.el, name, params, false);
  });
}
function listen(component, name, callback) {
  component.el.addEventListener(name, function (e) {
    callback(e.detail);
  });
}
function on2(eventName, callback) {
  window.addEventListener(eventName, function (e) {
    if (!e.__livewire) return;
    callback(e.detail);
  });
}

// js/directives.js
var import_alpinejs4 = __toESM(require_module_cjs());
function matchesForLivewireDirective(attributeName) {
  return attributeName.match(new RegExp("wire:"));
}
function extractDirective(el, name) {
  var _name$replace$split = name.replace(new RegExp("wire:"), "").split("."),
    _name$replace$split2 = _toArray(_name$replace$split),
    value = _name$replace$split2[0],
    modifiers = _name$replace$split2.slice(1);
  return new Directive(value, modifiers, name, el);
}
function directive(name, callback) {
  on("directive.init", function (_ref117) {
    var el = _ref117.el,
      component = _ref117.component,
      directive2 = _ref117.directive,
      cleanup2 = _ref117.cleanup;
    if (directive2.value === name) {
      callback({
        el: el,
        directive: directive2,
        component: component,
        cleanup: cleanup2
      });
    }
  });
}
function getDirectives(el) {
  return new DirectiveManager(el);
}
var DirectiveManager = /*#__PURE__*/function () {
  function DirectiveManager(el) {
    _classCallCheck(this, DirectiveManager);
    this.el = el;
    this.directives = this.extractTypeModifiersAndValue();
  }
  _createClass(DirectiveManager, [{
    key: "all",
    value: function all() {
      return this.directives;
    }
  }, {
    key: "has",
    value: function has(value) {
      return this.directives.map(function (directive2) {
        return directive2.value;
      }).includes(value);
    }
  }, {
    key: "missing",
    value: function missing(value) {
      return !this.has(value);
    }
  }, {
    key: "get",
    value: function get(value) {
      return this.directives.find(function (directive2) {
        return directive2.value === value;
      });
    }
  }, {
    key: "extractTypeModifiersAndValue",
    value: function extractTypeModifiersAndValue() {
      var _this10 = this;
      return Array.from(this.el.getAttributeNames().filter(function (name) {
        return matchesForLivewireDirective(name);
      }).map(function (name) {
        return extractDirective(_this10.el, name);
      }));
    }
  }]);
  return DirectiveManager;
}();
var Directive = /*#__PURE__*/function () {
  function Directive(value, modifiers, rawName, el) {
    _classCallCheck(this, Directive);
    this.rawName = this.raw = rawName;
    this.el = el;
    this.eventContext;
    this.value = value;
    this.modifiers = modifiers;
    this.expression = this.el.getAttribute(this.rawName);
  }
  _createClass(Directive, [{
    key: "method",
    get: function get() {
      var _this$parseOutMethodA = this.parseOutMethodAndParams(this.expression),
        method = _this$parseOutMethodA.method;
      return method;
    }
  }, {
    key: "params",
    get: function get() {
      var _this$parseOutMethodA2 = this.parseOutMethodAndParams(this.expression),
        params = _this$parseOutMethodA2.params;
      return params;
    }
  }, {
    key: "parseOutMethodAndParams",
    value: function parseOutMethodAndParams(rawMethod) {
      var method = rawMethod;
      var params = [];
      var methodAndParamString = method.match(/([\s\S]*?)\(([\s\S]*)\)/);
      if (methodAndParamString) {
        method = methodAndParamString[1];
        var func = new Function("$event", "return (function () {\n                for (var l=arguments.length, p=new Array(l), k=0; k<l; k++) {\n                    p[k] = arguments[k];\n                }\n                return [].concat(p);\n            })(".concat(methodAndParamString[2], ")"));
        params = func(this.eventContext);
      }
      return {
        method: method,
        params: params
      };
    }
  }]);
  return Directive;
}();

// js/lifecycle.js
var import_collapse = __toESM(require_module_cjs2());
var import_focus = __toESM(require_module_cjs3());
var import_persist2 = __toESM(require_module_cjs4());
var import_intersect = __toESM(require_module_cjs5());

// js/plugins/navigate/history.js
function updateCurrentPageHtmlInHistoryStateForLaterBackButtonClicks() {
  var url = new URL(window.location.href, document.baseURI);
  replaceUrl(url, document.documentElement.outerHTML);
}
function whenTheBackOrForwardButtonIsClicked(callback) {
  window.addEventListener("popstate", function (e) {
    var state = e.state || {};
    var alpine = state.alpine || {};
    if (!alpine._html) return;
    var html = fromSessionStorage(alpine._html);
    callback(html);
  });
}
function updateUrlAndStoreLatestHtmlForFutureBackButtons(html, destination) {
  pushUrl(destination, html);
}
function pushUrl(url, html) {
  updateUrl("pushState", url, html);
}
function replaceUrl(url, html) {
  updateUrl("replaceState", url, html);
}
function updateUrl(method, url, html) {
  var key = new Date().getTime();
  tryToStoreInSession(key, html);
  var state = history.state || {};
  if (!state.alpine) state.alpine = {};
  state.alpine._html = key;
  try {
    history[method](state, document.title, url);
  } catch (error2) {
    if (error2 instanceof DOMException && error2.name === "SecurityError") {
      console.error("Livewire: You can't use wire:navigate with a link to a different root domain: " + url);
    }
    console.error(error2);
  }
}
function fromSessionStorage(timestamp) {
  var state = JSON.parse(sessionStorage.getItem("alpine:" + timestamp));
  return state;
}
function tryToStoreInSession(timestamp, value) {
  try {
    sessionStorage.setItem("alpine:" + timestamp, JSON.stringify(value));
  } catch (error2) {
    if (![22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(error2.code)) return;
    var oldestTimestamp = Object.keys(sessionStorage).map(function (key) {
      return Number(key.replace("alpine:", ""));
    }).sort().shift();
    if (!oldestTimestamp) return;
    sessionStorage.removeItem("alpine:" + oldestTimestamp);
    tryToStoreInSession(timestamp, value);
  }
}

// js/plugins/navigate/prefetch.js
var prefetches = {};
function prefetchHtml(destination, callback) {
  var path = destination.pathname;
  if (prefetches[path]) return;
  prefetches[path] = {
    finished: false,
    html: null,
    whenFinished: function whenFinished() {}
  };
  fetch(path).then(function (i) {
    return i.text();
  }).then(function (html) {
    callback(html);
  });
}
function storeThePrefetchedHtmlForWhenALinkIsClicked(html, destination) {
  var state = prefetches[destination.pathname];
  state.html = html;
  state.finished = true;
  state.whenFinished();
}
function getPretchedHtmlOr(destination, receive, ifNoPrefetchExists) {
  var uri = destination.pathname + destination.search;
  if (!prefetches[uri]) return ifNoPrefetchExists();
  if (prefetches[uri].finished) {
    var html = prefetches[uri].html;
    delete prefetches[uri];
    return receive(html);
  } else {
    prefetches[uri].whenFinished = function () {
      var html = prefetches[uri].html;
      delete prefetches[uri];
      receive(html);
    };
  }
}

// js/plugins/navigate/links.js
function whenThisLinkIsPressed(el, callback) {
  var isNotPlainLeftClick = function isNotPlainLeftClick(e) {
    return e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
  };
  var isNotPlainEnterKey = function isNotPlainEnterKey(e) {
    return e.which !== 13 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
  };
  el.addEventListener("click", function (e) {
    if (isNotPlainLeftClick(e)) return;
    e.preventDefault();
  });
  el.addEventListener("mousedown", function (e) {
    if (isNotPlainLeftClick(e)) return;
    e.preventDefault();
    callback(function (whenReleased) {
      var handler = function handler(e2) {
        e2.preventDefault();
        whenReleased();
        el.removeEventListener("mouseup", handler);
      };
      el.addEventListener("mouseup", handler);
    });
  });
  el.addEventListener("keydown", function (e) {
    if (isNotPlainEnterKey(e)) return;
    e.preventDefault();
    callback(function (whenReleased) {
      whenReleased();
    });
  });
}
function whenThisLinkIsHoveredFor(el) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  el.addEventListener("mouseenter", function (e) {
    var timeout = setTimeout(function () {
      callback(e);
    }, ms);
    var handler = function handler() {
      clearTimeout(timeout);
      el.removeEventListener("mouseleave", handler);
    };
    el.addEventListener("mouseleave", handler);
  });
}
function extractDestinationFromLink(linkEl) {
  return createUrlObjectFromString(linkEl.getAttribute("href"));
}
function createUrlObjectFromString(urlString) {
  return new URL(urlString, document.baseURI);
}

// js/plugins/navigate/teleport.js
var import_alpinejs5 = __toESM(require_module_cjs());
function packUpPersistedTeleports(persistedEl) {
  import_alpinejs5["default"].mutateDom(function () {
    persistedEl.querySelectorAll("[data-teleport-template]").forEach(function (i) {
      return i._x_teleport.remove();
    });
  });
}
function removeAnyLeftOverStaleTeleportTargets(body) {
  import_alpinejs5["default"].mutateDom(function () {
    body.querySelectorAll("[data-teleport-target]").forEach(function (i) {
      return i.remove();
    });
  });
}
function unPackPersistedTeleports(persistedEl) {
  import_alpinejs5["default"].walk(persistedEl, function (el, skip) {
    if (!el._x_teleport) return;
    el._x_teleportPutBack();
    skip();
  });
}

// js/plugins/navigate/scroll.js
function storeScrollInformationInHtmlBeforeNavigatingAway() {
  document.body.setAttribute("data-scroll-x", document.body.scrollLeft);
  document.body.setAttribute("data-scroll-y", document.body.scrollTop);
  document.querySelectorAll(["[x-navigate\\:scroll]", "[wire\\:scroll]"]).forEach(function (el) {
    el.setAttribute("data-scroll-x", el.scrollLeft);
    el.setAttribute("data-scroll-y", el.scrollTop);
  });
}
function restoreScrollPositionOrScrollToTop() {
  var scroll = function scroll(el) {
    if (!el.hasAttribute("data-scroll-x")) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    } else {
      el.scrollTo({
        top: Number(el.getAttribute("data-scroll-x")),
        left: Number(el.getAttribute("data-scroll-y")),
        behavior: "instant"
      });
      el.removeAttribute("data-scroll-x");
      el.removeAttribute("data-scroll-y");
    }
  };
  queueMicrotask(function () {
    scroll(document.body);
    document.querySelectorAll(["[x-navigate\\:scroll]", "[wire\\:scroll]"]).forEach(scroll);
  });
}

// js/plugins/navigate/persist.js
var import_alpinejs6 = __toESM(require_module_cjs());
var els = {};
function storePersistantElementsForLater(callback) {
  els = {};
  document.querySelectorAll("[x-persist]").forEach(function (i) {
    els[i.getAttribute("x-persist")] = i;
    callback(i);
    import_alpinejs6["default"].mutateDom(function () {
      i.remove();
    });
  });
}
function putPersistantElementsBack(callback) {
  var usedPersists = [];
  document.querySelectorAll("[x-persist]").forEach(function (i) {
    var old = els[i.getAttribute("x-persist")];
    if (!old) return;
    usedPersists.push(i.getAttribute("x-persist"));
    old._x_wasPersisted = true;
    callback(old, i);
    import_alpinejs6["default"].mutateDom(function () {
      i.replaceWith(old);
    });
  });
  Object.entries(els).forEach(function (_ref118) {
    var _ref119 = _slicedToArray(_ref118, 2),
      key = _ref119[0],
      el = _ref119[1];
    if (usedPersists.includes(key)) return;
    import_alpinejs6["default"].destroyTree(el);
  });
  els = {};
}

// js/plugins/navigate/bar.js
var import_nprogress = __toESM(require_nprogress());
import_nprogress["default"].configure({
  minimum: 0.1
});
import_nprogress["default"].configure({
  trickleSpeed: 200
});
injectStyles();
var inProgress = false;
function showAndStartProgressBar() {
  inProgress = true;
  setTimeout(function () {
    if (!inProgress) return;
    import_nprogress["default"].start();
  }, 150);
}
function finishAndHideProgressBar() {
  inProgress = false;
  import_nprogress["default"].done();
  import_nprogress["default"].remove();
}
function injectStyles() {
  var style = document.createElement("style");
  style.innerHTML = "/* Make clicks pass-through */\n\n    #nprogress {\n      pointer-events: none;\n    }\n\n    #nprogress .bar {\n      background: var(--livewire-progress-bar-color, #29d);\n\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n\n      width: 100%;\n      height: 2px;\n    }\n\n    /* Fancy blur effect */\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n      opacity: 1.0;\n\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n          -ms-transform: rotate(3deg) translate(0px, -4px);\n              transform: rotate(3deg) translate(0px, -4px);\n    }\n\n    /* Remove these to get rid of the spinner */\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n\n      border: solid 2px transparent;\n      border-top-color: var(--livewire-progress-bar-color, #29d);\n      border-left-color: var(--livewire-progress-bar-color, #29d);\n      border-radius: 50%;\n\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n              animation: nprogress-spinner 400ms linear infinite;\n    }\n\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n\n    @-webkit-keyframes nprogress-spinner {\n      0%   { -webkit-transform: rotate(0deg); }\n      100% { -webkit-transform: rotate(360deg); }\n    }\n    @keyframes nprogress-spinner {\n      0%   { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n    ";
  document.head.appendChild(style);
}

// js/plugins/navigate/page.js
var oldBodyScriptTagHashes = [];
var attributesExemptFromScriptTagHashing = ["data-csrf"];
function swapCurrentPageWithNewHtml(html, andThen) {
  var newDocument = new DOMParser().parseFromString(html, "text/html");
  var newBody = document.adoptNode(newDocument.body);
  var newHead = document.adoptNode(newDocument.head);
  oldBodyScriptTagHashes = oldBodyScriptTagHashes.concat(Array.from(document.body.querySelectorAll("script")).map(function (i) {
    return simpleHash(ignoreAttributes(i.outerHTML, attributesExemptFromScriptTagHashing));
  }));
  mergeNewHead(newHead);
  prepNewBodyScriptTagsToRun(newBody, oldBodyScriptTagHashes);
  transitionOut(document.body);
  var oldBody = document.body;
  document.body.replaceWith(newBody);
  Alpine.destroyTree(oldBody);
  transitionIn(newBody);
  andThen();
}
function transitionOut(body) {
  return;
  body.style.transition = "all .5s ease";
  body.style.opacity = "0";
}
function transitionIn(body) {
  return;
  body.style.opacity = "0";
  body.style.transition = "all .5s ease";
  requestAnimationFrame(function () {
    body.style.opacity = "1";
  });
}
function prepNewBodyScriptTagsToRun(newBody, oldBodyScriptTagHashes2) {
  newBody.querySelectorAll("script").forEach(function (i) {
    if (i.hasAttribute("data-navigate-once")) {
      var hash = simpleHash(ignoreAttributes(i.outerHTML, attributesExemptFromScriptTagHashing));
      if (oldBodyScriptTagHashes2.includes(hash)) return;
    }
    i.replaceWith(cloneScriptTag(i));
  });
}
function mergeNewHead(newHead) {
  var children = Array.from(document.head.children);
  var headChildrenHtmlLookup = children.map(function (i) {
    return i.outerHTML;
  });
  var garbageCollector = document.createDocumentFragment();
  var touchedHeadElements = [];
  for (var _i12 = 0, _Array$from = Array.from(newHead.children); _i12 < _Array$from.length; _i12++) {
    var child = _Array$from[_i12];
    if (isAsset(child)) {
      if (!headChildrenHtmlLookup.includes(child.outerHTML)) {
        if (isTracked(child)) {
          if (ifTheQueryStringChangedSinceLastRequest(child, children)) {
            setTimeout(function () {
              return window.location.reload();
            });
          }
        }
        if (isScript(child)) {
          document.head.appendChild(cloneScriptTag(child));
        } else {
          document.head.appendChild(child);
        }
      } else {
        garbageCollector.appendChild(child);
      }
      touchedHeadElements.push(child);
    }
  }
  for (var _i13 = 0, _Array$from2 = Array.from(document.head.children); _i13 < _Array$from2.length; _i13++) {
    var _child = _Array$from2[_i13];
    if (!isAsset(_child)) _child.remove();
  }
  for (var _i14 = 0, _Array$from3 = Array.from(newHead.children); _i14 < _Array$from3.length; _i14++) {
    var _child2 = _Array$from3[_i14];
    document.head.appendChild(_child2);
  }
}
function cloneScriptTag(el) {
  var script = document.createElement("script");
  script.textContent = el.textContent;
  script.async = el.async;
  var _iterator9 = _createForOfIteratorHelper(el.attributes),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var attr = _step9.value;
      script.setAttribute(attr.name, attr.value);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  return script;
}
function isTracked(el) {
  return el.hasAttribute("data-navigate-track");
}
function ifTheQueryStringChangedSinceLastRequest(el, currentHeadChildren) {
  var _extractUriAndQuerySt = extractUriAndQueryString(el),
    _extractUriAndQuerySt2 = _slicedToArray(_extractUriAndQuerySt, 2),
    uri = _extractUriAndQuerySt2[0],
    queryString = _extractUriAndQuerySt2[1];
  return currentHeadChildren.some(function (child) {
    if (!isTracked(child)) return false;
    var _extractUriAndQuerySt3 = extractUriAndQueryString(child),
      _extractUriAndQuerySt4 = _slicedToArray(_extractUriAndQuerySt3, 2),
      currentUri = _extractUriAndQuerySt4[0],
      currentQueryString = _extractUriAndQuerySt4[1];
    if (currentUri === uri && queryString !== currentQueryString) return true;
  });
}
function extractUriAndQueryString(el) {
  var url = isScript(el) ? el.src : el.href;
  return url.split("?");
}
function isAsset(el) {
  return el.tagName.toLowerCase() === "link" && el.getAttribute("rel").toLowerCase() === "stylesheet" || el.tagName.toLowerCase() === "style" || el.tagName.toLowerCase() === "script";
}
function isScript(el) {
  return el.tagName.toLowerCase() === "script";
}
function simpleHash(str) {
  return str.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}
function ignoreAttributes(subject, attributesToRemove) {
  var result = subject;
  attributesToRemove.forEach(function (attr) {
    var regex = new RegExp("".concat(attr, "=\"[^\"]*\"|").concat(attr, "='[^']*'"), "g");
    result = result.replace(regex, "");
  });
  return result.trim();
}

// js/plugins/navigate/fetch.js
function fetchHtml(destination, callback) {
  var uri = destination.pathname + destination.search;
  fetch(uri).then(function (i) {
    return i.text();
  }).then(function (html) {
    callback(html);
  });
}

// js/plugins/navigate/index.js
var import_alpinejs7 = __toESM(require_module_cjs());
var enablePersist = true;
var showProgressBar = true;
var restoreScroll = true;
var autofocus = false;
function navigate_default(Alpine21) {
  Alpine21.navigate = function (url) {
    navigateTo(createUrlObjectFromString(url));
  };
  Alpine21.navigate.disableProgressBar = function () {
    showProgressBar = false;
  };
  Alpine21.addInitSelector(function () {
    return "[".concat(Alpine21.prefixed("navigate"), "]");
  });
  Alpine21.directive("navigate", function (el, _ref120, _ref121) {
    var value = _ref120.value,
      expression = _ref120.expression,
      modifiers = _ref120.modifiers;
    var evaluateLater = _ref121.evaluateLater,
      cleanup2 = _ref121.cleanup;
    var shouldPrefetchOnHover = modifiers.includes("hover");
    shouldPrefetchOnHover && whenThisLinkIsHoveredFor(el, 60, function () {
      var destination = extractDestinationFromLink(el);
      prefetchHtml(destination, function (html) {
        storeThePrefetchedHtmlForWhenALinkIsClicked(html, destination);
      });
    });
    whenThisLinkIsPressed(el, function (whenItIsReleased) {
      var destination = extractDestinationFromLink(el);
      prefetchHtml(destination, function (html) {
        storeThePrefetchedHtmlForWhenALinkIsClicked(html, destination);
      });
      whenItIsReleased(function () {
        navigateTo(destination);
      });
    });
  });
  function navigateTo(destination) {
    showProgressBar && showAndStartProgressBar();
    fetchHtmlOrUsePrefetchedHtml(destination, function (html) {
      fireEventForOtherLibariesToHookInto("alpine:navigating");
      restoreScroll && storeScrollInformationInHtmlBeforeNavigatingAway();
      showProgressBar && finishAndHideProgressBar();
      updateCurrentPageHtmlInHistoryStateForLaterBackButtonClicks();
      preventAlpineFromPickingUpDomChanges(Alpine21, function (andAfterAllThis) {
        enablePersist && storePersistantElementsForLater(function (persistedEl) {
          packUpPersistedTeleports(persistedEl);
        });
        swapCurrentPageWithNewHtml(html, function () {
          removeAnyLeftOverStaleTeleportTargets(document.body);
          enablePersist && putPersistantElementsBack(function (persistedEl, newStub) {
            unPackPersistedTeleports(persistedEl);
          });
          restoreScrollPositionOrScrollToTop();
          fireEventForOtherLibariesToHookInto("alpine:navigated");
          updateUrlAndStoreLatestHtmlForFutureBackButtons(html, destination);
          andAfterAllThis(function () {
            autofocus && autofocusElementsWithTheAutofocusAttribute();
            nowInitializeAlpineOnTheNewPage(Alpine21);
          });
        });
      });
    });
  }
  whenTheBackOrForwardButtonIsClicked(function (html) {
    storeScrollInformationInHtmlBeforeNavigatingAway();
    preventAlpineFromPickingUpDomChanges(Alpine21, function (andAfterAllThis) {
      enablePersist && storePersistantElementsForLater(function (persistedEl) {
        packUpPersistedTeleports(persistedEl);
      });
      swapCurrentPageWithNewHtml(html, function () {
        removeAnyLeftOverStaleTeleportTargets(document.body);
        enablePersist && putPersistantElementsBack(function (persistedEl, newStub) {
          unPackPersistedTeleports(persistedEl);
        });
        restoreScrollPositionOrScrollToTop();
        fireEventForOtherLibariesToHookInto("alpine:navigated");
        andAfterAllThis(function () {
          autofocus && autofocusElementsWithTheAutofocusAttribute();
          nowInitializeAlpineOnTheNewPage(Alpine21);
        });
      });
    });
  });
  setTimeout(function () {
    fireEventForOtherLibariesToHookInto("alpine:navigated");
  });
}
function fetchHtmlOrUsePrefetchedHtml(fromDestination, callback) {
  getPretchedHtmlOr(fromDestination, callback, function () {
    fetchHtml(fromDestination, callback);
  });
}
function preventAlpineFromPickingUpDomChanges(Alpine21, callback) {
  Alpine21.stopObservingMutations();
  callback(function (afterAllThis) {
    Alpine21.startObservingMutations();
    setTimeout(function () {
      afterAllThis();
    });
  });
}
function fireEventForOtherLibariesToHookInto(eventName) {
  document.dispatchEvent(new CustomEvent(eventName, {
    bubbles: true
  }));
}
function nowInitializeAlpineOnTheNewPage(Alpine21) {
  Alpine21.initTree(document.body, void 0, function (el, skip) {
    if (el._x_wasPersisted) skip();
  });
}
function autofocusElementsWithTheAutofocusAttribute() {
  document.querySelector("[autofocus]") && document.querySelector("[autofocus]").focus();
}

// js/plugins/history/index.js
function history2(Alpine21) {
  Alpine21.magic("queryString", function (el, _ref122) {
    var interceptor = _ref122.interceptor;
    var alias;
    var alwaysShow = false;
    var usePush = false;
    return interceptor(function (initialSeedValue, getter, setter, path, key) {
      var queryKey = alias || path;
      var _track = track(queryKey, initialSeedValue, alwaysShow),
        initial = _track.initial,
        replace2 = _track.replace,
        push2 = _track.push,
        pop = _track.pop;
      setter(initial);
      if (!usePush) {
        Alpine21.effect(function () {
          return replace2(getter());
        });
      } else {
        Alpine21.effect(function () {
          return push2(getter());
        });
        pop( /*#__PURE__*/function () {
          var _ref123 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(newValue) {
            var tillTheEndOfTheMicrotaskQueue;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  setter(newValue);
                  tillTheEndOfTheMicrotaskQueue = function tillTheEndOfTheMicrotaskQueue() {
                    return Promise.resolve();
                  };
                  _context6.next = 4;
                  return tillTheEndOfTheMicrotaskQueue();
                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          return function (_x10) {
            return _ref123.apply(this, arguments);
          };
        }());
      }
      return initial;
    }, function (func) {
      func.alwaysShow = function () {
        alwaysShow = true;
        return func;
      };
      func.usePush = function () {
        usePush = true;
        return func;
      };
      func.as = function (key) {
        alias = key;
        return func;
      };
    });
  });
  Alpine21.history = {
    track: track
  };
}
function track(name, initialSeedValue) {
  var alwaysShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var _queryStringUtils = queryStringUtils(),
    has = _queryStringUtils.has,
    get = _queryStringUtils.get,
    set = _queryStringUtils.set,
    remove = _queryStringUtils.remove;
  var url = new URL(window.location.href);
  var isInitiallyPresentInUrl = has(url, name);
  var initialValue = isInitiallyPresentInUrl ? get(url, name) : initialSeedValue;
  var initialValueMemo = JSON.stringify(initialValue);
  var hasReturnedToInitialValue = function hasReturnedToInitialValue(newValue) {
    return JSON.stringify(newValue) === initialValueMemo;
  };
  if (alwaysShow) url = set(url, name, initialValue);
  _replace(url, name, {
    value: initialValue
  });
  var lock = false;
  var update = function update(strategy, newValue) {
    if (lock) return;
    var url2 = new URL(window.location.href);
    if (!alwaysShow && !isInitiallyPresentInUrl && hasReturnedToInitialValue(newValue)) {
      url2 = remove(url2, name);
    } else {
      url2 = set(url2, name, newValue);
    }
    strategy(url2, name, {
      value: newValue
    });
  };
  return {
    initial: initialValue,
    replace: function replace(newValue) {
      update(_replace, newValue);
    },
    push: function push(newValue) {
      update(_push, newValue);
    },
    pop: function pop(receiver) {
      var handler = function handler(e) {
        if (!e.state || !e.state.alpine) return;
        Object.entries(e.state.alpine).forEach(function (_ref124) {
          var _ref125 = _slicedToArray(_ref124, 2),
            iName = _ref125[0],
            newValue = _ref125[1].value;
          if (iName !== name) return;
          lock = true;
          var result = receiver(newValue);
          if (result instanceof Promise) {
            result["finally"](function () {
              return lock = false;
            });
          } else {
            lock = false;
          }
        });
      };
      window.addEventListener("popstate", handler);
      return function () {
        return window.removeEventListener("popstate", handler);
      };
    }
  };
}
function _replace(url, key, object) {
  var state = window.history.state || {};
  if (!state.alpine) state.alpine = {};
  state.alpine[key] = unwrap(object);
  window.history.replaceState(state, "", url.toString());
}
function _push(url, key, object) {
  var state = window.history.state || {};
  if (!state.alpine) state.alpine = {};
  state = {
    alpine: _objectSpread(_objectSpread({}, state.alpine), _defineProperty2({}, key, unwrap(object)))
  };
  window.history.pushState(state, "", url.toString());
}
function unwrap(object) {
  return JSON.parse(JSON.stringify(object));
}
function queryStringUtils() {
  return {
    has: function has(url, key) {
      var search = url.search;
      if (!search) return false;
      var data = fromQueryString(search);
      return Object.keys(data).includes(key);
    },
    get: function get(url, key) {
      var search = url.search;
      if (!search) return false;
      var data = fromQueryString(search);
      return data[key];
    },
    set: function set(url, key, value) {
      var data = fromQueryString(url.search);
      data[key] = value;
      url.search = toQueryString(data);
      return url;
    },
    remove: function remove(url, key) {
      var data = fromQueryString(url.search);
      delete data[key];
      url.search = toQueryString(data);
      return url;
    }
  };
}
function toQueryString(data) {
  var isObjecty2 = function isObjecty2(subject) {
    return _typeof(subject) === "object" && subject !== null;
  };
  var buildQueryStringEntries = function buildQueryStringEntries(data2) {
    var entries2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var baseKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    Object.entries(data2).forEach(function (_ref126) {
      var _ref127 = _slicedToArray(_ref126, 2),
        iKey = _ref127[0],
        iValue = _ref127[1];
      var key = baseKey === "" ? iKey : "".concat(baseKey, "[").concat(iKey, "]");
      if (!isObjecty2(iValue)) {
        entries2[key] = encodeURIComponent(iValue).replaceAll("%20", "+").replaceAll("%2C", ",");
      } else {
        entries2 = _objectSpread(_objectSpread({}, entries2), buildQueryStringEntries(iValue, entries2, key));
      }
    });
    return entries2;
  };
  var entries = buildQueryStringEntries(data);
  return Object.entries(entries).map(function (_ref128) {
    var _ref129 = _slicedToArray(_ref128, 2),
      key = _ref129[0],
      value = _ref129[1];
    return "".concat(key, "=").concat(value);
  }).join("&");
}
function fromQueryString(search) {
  search = search.replace("?", "");
  if (search === "") return {};
  var insertDotNotatedValueIntoData = function insertDotNotatedValueIntoData(key, value, data2) {
    var _key$split = key.split("."),
      _key$split2 = _toArray(_key$split),
      first2 = _key$split2[0],
      second = _key$split2[1],
      rest = _key$split2.slice(2);
    if (!second) return data2[key] = value;
    if (data2[first2] === void 0) {
      data2[first2] = isNaN(second) ? {} : [];
    }
    insertDotNotatedValueIntoData([second].concat(_toConsumableArray(rest)).join("."), value, data2[first2]);
  };
  var entries = search.split("&").map(function (i) {
    return i.split("=");
  });
  var data = {};
  entries.forEach(function (_ref130) {
    var _ref131 = _slicedToArray(_ref130, 2),
      key = _ref131[0],
      value = _ref131[1];
    if (!value) return;
    value = decodeURIComponent(value.replaceAll("+", "%20"));
    if (!key.includes("[")) {
      data[key] = value;
    } else {
      var dotNotatedKey = key.replaceAll("[", ".").replaceAll("]", "");
      insertDotNotatedValueIntoData(dotNotatedKey, value, data);
    }
  });
  return data;
}

// js/lifecycle.js
var import_morph = __toESM(require_module_cjs6());
var import_mask = __toESM(require_module_cjs7());
var import_alpinejs8 = __toESM(require_module_cjs());
function start() {
  dispatch(document, "livewire:init");
  dispatch(document, "livewire:initializing");
  import_alpinejs8["default"].plugin(import_morph["default"]);
  import_alpinejs8["default"].plugin(history2);
  import_alpinejs8["default"].plugin(import_intersect["default"]);
  import_alpinejs8["default"].plugin(import_collapse["default"]);
  import_alpinejs8["default"].plugin(import_focus["default"]);
  import_alpinejs8["default"].plugin(import_persist2["default"]);
  import_alpinejs8["default"].plugin(navigate_default);
  import_alpinejs8["default"].plugin(import_mask["default"]);
  import_alpinejs8["default"].addRootSelector(function () {
    return "[wire\\:id]";
  });
  import_alpinejs8["default"].onAttributesAdded(function (el, attributes) {
    var component = closestComponent(el, false);
    if (!component) return;
    attributes.forEach(function (attribute) {
      if (!matchesForLivewireDirective(attribute.name)) return;
      var directive2 = extractDirective(el, attribute.name);
      trigger("directive.init", {
        el: el,
        component: component,
        directive: directive2,
        cleanup: function cleanup(callback) {
          import_alpinejs8["default"].onAttributeRemoved(el, directive2.raw, callback);
        }
      });
    });
  });
  import_alpinejs8["default"].interceptInit(import_alpinejs8["default"].skipDuringClone(function (el) {
    if (el.hasAttribute("wire:id")) {
      var component2 = initComponent(el);
      import_alpinejs8["default"].onAttributeRemoved(el, "wire:id", function () {
        destroyComponent(component2.id);
      });
    }
    var component = closestComponent(el, false);
    if (component) {
      trigger("element.init", {
        el: el,
        component: component
      });
      var directives = Array.from(el.getAttributeNames()).filter(function (name) {
        return matchesForLivewireDirective(name);
      }).map(function (name) {
        return extractDirective(el, name);
      });
      directives.forEach(function (directive2) {
        trigger("directive.init", {
          el: el,
          component: component,
          directive: directive2,
          cleanup: function cleanup(callback) {
            import_alpinejs8["default"].onAttributeRemoved(el, directive2.raw, callback);
          }
        });
      });
    }
  }));
  import_alpinejs8["default"].start();
  setTimeout(function () {
    return window.Livewire.initialRenderIsFinished = true;
  });
  dispatch(document, "livewire:initialized");
}
function stop() {}
function rescan() {}

// js/index.js
var import_alpinejs19 = __toESM(require_module_cjs());

// js/features/supportWireModelingNestedComponents.js
on("commit.prepare", function (_ref132) {
  var component = _ref132.component;
  component.children.forEach(function (child) {
    var childMeta = child.snapshot.memo;
    var bindings = childMeta.bindings;
    if (bindings) child.$wire.$commit();
  });
});

// js/features/supportDisablingFormsDuringRequest.js
var import_alpinejs9 = __toESM(require_module_cjs());
var cleanupStackByComponentId = {};
on("element.init", function (_ref133) {
  var el = _ref133.el,
    component = _ref133.component;
  var directives = getDirectives(el);
  if (directives.missing("submit")) return;
  el.addEventListener("submit", function () {
    cleanupStackByComponentId[component.id] = [];
    import_alpinejs9["default"].walk(component.el, function (node, skip) {
      if (!el.contains(node)) return;
      if (node.hasAttribute("wire:ignore")) return skip();
      if (node.tagName.toLowerCase() === "button" && node.type === "submit" || node.tagName.toLowerCase() === "select" || node.tagName.toLowerCase() === "input" && (node.type === "checkbox" || node.type === "radio")) {
        if (!node.disabled) cleanupStackByComponentId[component.id].push(function () {
          return node.disabled = false;
        });
        node.disabled = true;
      } else if (node.tagName.toLowerCase() === "input" || node.tagName.toLowerCase() === "textarea") {
        if (!node.readOnly) cleanupStackByComponentId[component.id].push(function () {
          return node.readOnly = false;
        });
        node.readOnly = true;
      }
    });
  });
});
on("commit", function (_ref134) {
  var component = _ref134.component,
    respond = _ref134.respond;
  respond(function () {
    cleanup(component);
  });
});
function cleanup(component) {
  if (!cleanupStackByComponentId[component.id]) return;
  while (cleanupStackByComponentId[component.id].length > 0) {
    cleanupStackByComponentId[component.id].shift()();
  }
}

// js/features/supportFileDownloads.js
on("commit", function (_ref135) {
  var component = _ref135.component,
    succeed = _ref135.succeed;
  succeed(function (_ref136) {
    var effects = _ref136.effects;
    var download = effects.download;
    if (!download) return;
    var urlObject = window.webkitURL || window.URL;
    var url = urlObject.createObjectURL(base64toBlob(download.content, download.contentType));
    var invisibleLink = document.createElement("a");
    invisibleLink.style.display = "none";
    invisibleLink.href = url;
    invisibleLink.download = download.name;
    document.body.appendChild(invisibleLink);
    invisibleLink.click();
    setTimeout(function () {
      urlObject.revokeObjectURL(url);
    }, 0);
  });
});
function base64toBlob(b64Data) {
  var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
  var byteCharacters = atob(b64Data);
  var byteArrays = [];
  if (contentType === null) contentType = "";
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, {
    type: contentType
  });
}

// js/features/supportJsEvaluation.js
var import_alpinejs10 = __toESM(require_module_cjs());
on("effects", function (component, effects) {
  var js = effects.js;
  var xjs = effects.xjs;
  if (js) {
    Object.entries(js).forEach(function (_ref137) {
      var _ref138 = _slicedToArray(_ref137, 2),
        method = _ref138[0],
        body = _ref138[1];
      overrideMethod(component, method, function () {
        import_alpinejs10["default"].evaluate(component.el, body);
      });
    });
  }
  if (xjs) {
    xjs.forEach(function (expression) {
      import_alpinejs10["default"].evaluate(component.el, expression);
    });
  }
});

// js/features/supportQueryString.js
var import_alpinejs11 = __toESM(require_module_cjs());
on("component.init", function (_ref139) {
  var component = _ref139.component,
    cleanup2 = _ref139.cleanup;
  var effects = component.effects;
  var queryString = effects["url"];
  if (!queryString) return;
  Object.entries(queryString).forEach(function (_ref140) {
    var _ref141 = _slicedToArray(_ref140, 2),
      key = _ref141[0],
      value = _ref141[1];
    var _normalizeQueryString = normalizeQueryStringEntry(key, value),
      name = _normalizeQueryString.name,
      as = _normalizeQueryString.as,
      use = _normalizeQueryString.use,
      alwaysShow = _normalizeQueryString.alwaysShow;
    if (!as) as = name;
    var initialValue = dataGet(component.ephemeral, name);
    var _track2 = track(as, initialValue, alwaysShow),
      initial = _track2.initial,
      replace2 = _track2.replace,
      push2 = _track2.push,
      pop = _track2.pop;
    if (use === "replace") {
      var effectReference = import_alpinejs11["default"].effect(function () {
        replace2(dataGet(component.reactive, name));
      });
      cleanup2(function () {
        return import_alpinejs11["default"].release(effectReference);
      });
    } else if (use === "push") {
      var forgetCommitHandler = on("commit", function (_ref142) {
        var component2 = _ref142.component,
          succeed = _ref142.succeed;
        var beforeValue = dataGet(component2.canonical, name);
        succeed(function () {
          var afterValue = dataGet(component2.canonical, name);
          if (JSON.stringify(beforeValue) === JSON.stringify(afterValue)) return;
          push2(afterValue);
        });
      });
      var forgetPopHandler = pop( /*#__PURE__*/function () {
        var _ref143 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(newValue) {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return component.$wire.set(name, newValue);
              case 2:
                document.querySelectorAll("input").forEach(function (el) {
                  el._x_forceModelUpdate && el._x_forceModelUpdate(el._x_model.get());
                });
              case 3:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function (_x11) {
          return _ref143.apply(this, arguments);
        };
      }());
      cleanup2(function () {
        forgetCommitHandler();
        forgetPopHandler();
      });
    }
  });
});
function normalizeQueryStringEntry(key, value) {
  var defaults = {
    use: "replace",
    alwaysShow: false
  };
  if (typeof value === "string") {
    return _objectSpread(_objectSpread({}, defaults), {}, {
      name: value,
      as: value
    });
  } else {
    var fullerDefaults = _objectSpread(_objectSpread({}, defaults), {}, {
      name: key,
      as: key
    });
    return _objectSpread(_objectSpread({}, fullerDefaults), value);
  }
}

// js/features/supportLaravelEcho.js
on("request", function (_ref144) {
  var options = _ref144.options;
  if (window.Echo) {
    options.headers["X-Socket-ID"] = window.Echo.socketId();
  }
});
on("effects", function (component, effects) {
  var listeners2 = effects.listeners || [];
  listeners2.forEach(function (event) {
    if (event.startsWith("echo")) {
      if (typeof window.Echo === "undefined") {
        console.warn("Laravel Echo cannot be found");
        return;
      }
      var event_parts = event.split(/(echo:|echo-)|:|,/);
      if (event_parts[1] == "echo:") {
        event_parts.splice(2, 0, "channel", void 0);
      }
      if (event_parts[2] == "notification") {
        event_parts.push(void 0, void 0);
      }
      var _event_parts = _slicedToArray(event_parts, 7),
        s1 = _event_parts[0],
        signature = _event_parts[1],
        channel_type = _event_parts[2],
        s2 = _event_parts[3],
        channel = _event_parts[4],
        s3 = _event_parts[5],
        event_name = _event_parts[6];
      if (["channel", "private", "encryptedPrivate"].includes(channel_type)) {
        window.Echo[channel_type](channel).listen(event_name, function (e) {
          dispatchSelf(component, event, [e]);
        });
      } else if (channel_type == "presence") {
        if (["here", "joining", "leaving"].includes(event_name)) {
          window.Echo.join(channel)[event_name](function (e) {
            dispatchSelf(component, event, [e]);
          });
        } else {
          window.Echo.join(channel).listen(event_name, function (e) {
            dispatchSelf(component, event, [e]);
          });
        }
      } else if (channel_type == "notification") {
        window.Echo["private"](channel).notification(function (notification) {
          dispatchSelf(component, event, [notification]);
        });
      } else {
        console.warn("Echo channel type not yet supported");
      }
    }
  });
});

// js/features/supportNavigate.js
shouldHideProgressBar() && Alpine.navigate.disableProgressBar();
document.addEventListener("alpine:navigated", function (e) {
  document.dispatchEvent(new CustomEvent("livewire:navigated", {
    bubbles: true
  }));
});
document.addEventListener("alpine:navigating", function (e) {
  document.dispatchEvent(new CustomEvent("livewire:navigating", {
    bubbles: true
  }));
});
function shouldRedirectUsingNavigateOr(effects, url, or) {
  var forceNavigate = effects.redirectUsingNavigate;
  if (forceNavigate) {
    Alpine.navigate(url);
  } else {
    or();
  }
}
function shouldHideProgressBar() {
  if (!!document.querySelector("[data-no-progress-bar]")) return true;
  if (window.livewireScriptConfig && window.livewireScriptConfig.progressBar === false) return true;
  return false;
}

// js/features/supportRedirects.js
on("effects", function (component, effects) {
  if (!effects["redirect"]) return;
  var url = effects["redirect"];
  shouldRedirectUsingNavigateOr(effects, url, function () {
    window.location.href = url;
  });
});

// js/morph.js
var import_alpinejs12 = __toESM(require_module_cjs());
function morph2(component, el, html) {
  var wrapperTag = el.parentElement ? el.parentElement.tagName.toLowerCase() : "div";
  var wrapper = document.createElement(wrapperTag);
  wrapper.innerHTML = html;
  var parentComponent;
  try {
    parentComponent = closestComponent(el.parentElement);
  } catch (e) {}
  parentComponent && (wrapper.__livewire = parentComponent);
  var to = wrapper.firstElementChild;
  to.__livewire = component;
  trigger("morph", {
    el: el,
    toEl: to,
    component: component
  });
  import_alpinejs12["default"].morph(el, to, {
    updating: function updating(el2, toEl, childrenOnly, skip) {
      if (isntElement(el2)) return;
      trigger("morph.updating", {
        el: el2,
        toEl: toEl,
        component: component,
        skip: skip,
        childrenOnly: childrenOnly
      });
      if (el2.__livewire_ignore === true) return skip();
      if (el2.__livewire_ignore_self === true) childrenOnly();
      if (isComponentRootEl(el2) && el2.getAttribute("wire:id") !== component.id) return skip();
      if (isComponentRootEl(el2)) toEl.__livewire = component;
    },
    updated: function updated(el2, toEl) {
      if (isntElement(el2)) return;
      trigger("morph.updated", {
        el: el2,
        component: component
      });
    },
    removing: function removing(el2, skip) {
      if (isntElement(el2)) return;
      trigger("morph.removing", {
        el: el2,
        component: component,
        skip: skip
      });
    },
    removed: function removed(el2) {
      if (isntElement(el2)) return;
      trigger("morph.removed", {
        el: el2,
        component: component
      });
    },
    adding: function adding(el2) {
      trigger("morph.adding", {
        el: el2,
        component: component
      });
    },
    added: function added(el2) {
      if (isntElement(el2)) return;
      var closestComponentId = closestComponent(el2).id;
      trigger("morph.added", {
        el: el2
      });
      if (closestComponentId === component.id) {} else if (isComponentRootEl(el2)) {
        var data;
        if (message.fingerprint && closestComponentId == message.fingerprint.id) {
          data = {
            fingerprint: message.fingerprint,
            serverMemo: message.response.serverMemo,
            effects: message.response.effects
          };
        }
        el2.skipAddingChildren = true;
      }
    },
    key: function key(el2) {
      if (isntElement(el2)) return;
      return el2.hasAttribute("wire:key") ? el2.getAttribute("wire:key") : el2.hasAttribute("wire:id") ? el2.getAttribute("wire:id") : el2.id;
    },
    lookahead: false
  });
}
function isntElement(el) {
  return typeof el.hasAttribute !== "function";
}
function isComponentRootEl(el) {
  return el.hasAttribute("wire:id");
}

// js/features/supportMorphDom.js
on("effects", function (component, effects) {
  var html = effects.html;
  if (!html) return;
  queueMicrotask(function () {
    morph2(component, component.el, html);
  });
});

// js/features/supportProps.js
on("commit.prepare", function (_ref145) {
  var component = _ref145.component;
  getChildrenRecursively(component, function (child) {
    var childMeta = child.snapshot.memo;
    var props = childMeta.props;
    if (props) child.$wire.$commit();
  });
});
function getChildrenRecursively(component, callback) {
  component.children.forEach(function (child) {
    callback(child);
    getChildrenRecursively(child, callback);
  });
}

// js/directives/wire-transition.js
var import_alpinejs13 = __toESM(require_module_cjs());
on("morph.added", function (_ref146) {
  var el = _ref146.el;
  el.__addedByMorph = true;
});
directive("transition", function (_ref147) {
  var el = _ref147.el,
    directive2 = _ref147.directive,
    component = _ref147.component,
    cleanup2 = _ref147.cleanup;
  var visibility = import_alpinejs13["default"].reactive({
    state: el.__addedByMorph ? false : true
  });
  import_alpinejs13["default"].bind(el, _defineProperty2(_defineProperty2({}, directive2.rawName.replace("wire:", "x-"), ""), "x-show", function xShow() {
    return visibility.state;
  }));
  el.__addedByMorph && setTimeout(function () {
    return visibility.state = true;
  });
  var cleanups = [];
  cleanups.push(on("morph.removing", function (_ref148) {
    var el2 = _ref148.el,
      skip = _ref148.skip;
    skip();
    el2.addEventListener("transitionend", function () {
      el2.remove();
    });
    visibility.state = false;
    cleanups.push(on("morph", function (_ref149) {
      var morphComponent = _ref149.component;
      if (morphComponent !== component) return;
      el2.remove();
      cleanups.forEach(function (i) {
        return i();
      });
    }));
  }));
  cleanup2(function () {
    return cleanups.forEach(function (i) {
      return i();
    });
  });
});

// js/debounce.js
var callbacksByComponent = new WeakBag();
function callAndClearComponentDebounces(component, callback) {
  callbacksByComponent.each(component, function (callbackRegister) {
    callbackRegister.callback();
    callbackRegister.callback = function () {};
  });
  callback();
}

// js/directives/wire-wildcard.js
var import_alpinejs14 = __toESM(require_module_cjs());
on("directive.init", function (_ref150) {
  var el = _ref150.el,
    directive2 = _ref150.directive,
    cleanup2 = _ref150.cleanup,
    component = _ref150.component;
  if (["snapshot", "effects", "model", "init", "loading", "poll", "ignore", "id", "data", "key", "target", "dirty"].includes(directive2.value)) return;
  var attribute = directive2.rawName.replace("wire:", "x-on:");
  if (directive2.value === "submit" && !directive2.modifiers.includes("prevent")) {
    attribute = attribute + ".prevent";
  }
  var cleanupBinding = import_alpinejs14["default"].bind(el, _defineProperty2({}, attribute, function (e) {
    var execute = function execute() {
      callAndClearComponentDebounces(component, function () {
        import_alpinejs14["default"].evaluate(el, "$wire." + directive2.expression, {
          scope: {
            $event: e
          }
        });
      });
    };
    if (el.__livewire_confirm) {
      el.__livewire_confirm(function () {
        execute();
      });
    } else {
      execute();
    }
  }));
  cleanup2(cleanupBinding);
});

// js/directives/wire-navigate.js
var import_alpinejs15 = __toESM(require_module_cjs());
import_alpinejs15["default"].addInitSelector(function () {
  return "[wire\\:navigate]";
});
import_alpinejs15["default"].addInitSelector(function () {
  return "[wire\\:navigate\\.hover]";
});
import_alpinejs15["default"].interceptInit(import_alpinejs15["default"].skipDuringClone(function (el) {
  if (el.hasAttribute("wire:navigate")) {
    import_alpinejs15["default"].bind(el, _defineProperty2({}, "x-navigate", true));
  } else if (el.hasAttribute("wire:navigate.hover")) {
    import_alpinejs15["default"].bind(el, _defineProperty2({}, "x-navigate.hover", true));
  }
}));
document.addEventListener("alpine:navigating", function () {
  Livewire.all().forEach(function (component) {
    component.inscribeSnapshotAndEffectsOnElement();
  });
});

// js/directives/wire-confirm.js
directive("confirm", function (_ref151) {
  var el = _ref151.el,
    directive2 = _ref151.directive;
  var message2 = directive2.expression;
  var shouldPrompt = directive2.modifiers.includes("prompt");
  message2 = message2.replaceAll("\\n", "\n");
  if (message2 === "") message2 = "Are you sure?";
  el.__livewire_confirm = function (action) {
    if (shouldPrompt) {
      var _message2$split = message2.split("|"),
        _message2$split2 = _slicedToArray(_message2$split, 2),
        question = _message2$split2[0],
        expected = _message2$split2[1];
      if (!expected) {
        console.warn("Livewire: Must provide expectation with wire:confirm.prompt");
      } else {
        var input = prompt(question);
        if (input === expected) {
          action();
        }
      }
    } else {
      if (confirm(message2)) action();
    }
  };
});

// js/directives/shared.js
function toggleBooleanStateDirective(el, directive2, isTruthy) {
  var cachedDisplay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  isTruthy = directive2.modifiers.includes("remove") ? !isTruthy : isTruthy;
  if (directive2.modifiers.includes("class")) {
    var classes = directive2.expression.split(" ");
    if (isTruthy) {
      var _el$classList3;
      (_el$classList3 = el.classList).add.apply(_el$classList3, _toConsumableArray(classes));
    } else {
      var _el$classList4;
      (_el$classList4 = el.classList).remove.apply(_el$classList4, _toConsumableArray(classes));
    }
  } else if (directive2.modifiers.includes("attr")) {
    if (isTruthy) {
      el.setAttribute(directive2.expression, true);
    } else {
      el.removeAttribute(directive2.expression);
    }
  } else {
    var cache = cachedDisplay !== null && cachedDisplay !== void 0 ? cachedDisplay : window.getComputedStyle(el, null).getPropertyValue("display");
    var display = ["inline", "block", "table", "flex", "grid", "inline-flex"].filter(function (i) {
      return directive2.modifiers.includes(i);
    })[0] || "inline-block";
    display = directive2.modifiers.includes("remove") ? cache : display;
    el.style.display = isTruthy ? display : "none";
  }
}

// js/directives/wire-offline.js
var offlineHandlers = /* @__PURE__ */new Set();
var onlineHandlers = /* @__PURE__ */new Set();
window.addEventListener("offline", function () {
  return offlineHandlers.forEach(function (i) {
    return i();
  });
});
window.addEventListener("online", function () {
  return onlineHandlers.forEach(function (i) {
    return i();
  });
});
directive("offline", function (_ref152) {
  var el = _ref152.el,
    directive2 = _ref152.directive,
    cleanup2 = _ref152.cleanup;
  var setOffline = function setOffline() {
    return toggleBooleanStateDirective(el, directive2, true);
  };
  var setOnline = function setOnline() {
    return toggleBooleanStateDirective(el, directive2, false);
  };
  offlineHandlers.add(setOffline);
  onlineHandlers.add(setOnline);
  cleanup2(function () {
    offlineHandlers["delete"](setOffline);
    onlineHandlers["delete"](setOnline);
  });
});

// js/directives/wire-loading.js
directive("loading", function (_ref153) {
  var el = _ref153.el,
    directive2 = _ref153.directive,
    component = _ref153.component;
  var targets = getTargets(el);
  var _applyDelay = applyDelay(directive2),
    _applyDelay2 = _slicedToArray(_applyDelay, 2),
    delay = _applyDelay2[0],
    abortDelay = _applyDelay2[1];
  whenTargetsArePartOfRequest(component, targets, [function () {
    return delay(function () {
      return toggleBooleanStateDirective(el, directive2, true);
    });
  }, function () {
    return abortDelay(function () {
      return toggleBooleanStateDirective(el, directive2, false);
    });
  }]);
  whenTargetsArePartOfFileUpload(component, targets, [function () {
    return delay(function () {
      return toggleBooleanStateDirective(el, directive2, true);
    });
  }, function () {
    return abortDelay(function () {
      return toggleBooleanStateDirective(el, directive2, false);
    });
  }]);
});
function applyDelay(directive2) {
  if (!directive2.modifiers.includes("delay") || directive2.modifiers.includes("none")) return [function (i) {
    return i();
  }, function (i) {
    return i();
  }];
  var duration = 200;
  var delayModifiers = {
    "shortest": 50,
    "shorter": 100,
    "short": 150,
    "default": 200,
    "long": 300,
    "longer": 500,
    "longest": 1e3
  };
  Object.keys(delayModifiers).some(function (key) {
    if (directive2.modifiers.includes(key)) {
      duration = delayModifiers[key];
      return true;
    }
  });
  var timeout;
  var started = false;
  return [function (callback) {
    timeout = setTimeout(function () {
      callback();
      started = true;
    }, duration);
  }, function (callback) {
    if (started) {
      callback();
    } else {
      clearTimeout(timeout);
    }
  }];
}
function whenTargetsArePartOfRequest(component, targets, _ref154) {
  var _ref155 = _slicedToArray(_ref154, 2),
    startLoading = _ref155[0],
    endLoading = _ref155[1];
  on("commit", function (_ref156) {
    var iComponent = _ref156.component,
      payload = _ref156.commit,
      respond = _ref156.respond;
    if (iComponent !== component) return;
    if (targets.length > 0 && !containsTargets(payload, targets)) return;
    startLoading();
    respond(function () {
      endLoading();
    });
  });
}
function whenTargetsArePartOfFileUpload(component, targets, _ref157) {
  var _ref158 = _slicedToArray(_ref157, 2),
    startLoading = _ref158[0],
    endLoading = _ref158[1];
  var eventMismatch = function eventMismatch(e) {
    var _e$detail = e.detail,
      id = _e$detail.id,
      property = _e$detail.property;
    if (id !== component.id) return true;
    if (targets.length > 0 && !targets.map(function (i) {
      return i.target;
    }).includes(property)) return true;
    return false;
  };
  window.addEventListener("livewire-upload-start", function (e) {
    if (eventMismatch(e)) return;
    startLoading();
  });
  window.addEventListener("livewire-upload-finish", function (e) {
    if (eventMismatch(e)) return;
    endLoading();
  });
  window.addEventListener("livewire-upload-error", function (e) {
    if (eventMismatch(e)) return;
    endLoading();
  });
}
function containsTargets(payload, targets) {
  var updates = payload.updates,
    calls = payload.calls;
  return targets.some(function (_ref159) {
    var target = _ref159.target,
      params = _ref159.params;
    if (params) {
      return calls.some(function (_ref160) {
        var method = _ref160.method,
          methodParams = _ref160.params;
        return target === method && params === quickHash(JSON.stringify(methodParams));
      });
    }
    var hasMatchingUpdate = Object.keys(updates).some(function (property) {
      return property.startsWith(target);
    });
    if (hasMatchingUpdate) return true;
    if (calls.map(function (i) {
      return i.method;
    }).includes(target)) return true;
  });
}
function getTargets(el) {
  var directives = getDirectives(el);
  var targets = [];
  if (directives.has("target")) {
    var directive2 = directives.get("target");
    var raw = directive2.expression;
    if (raw.includes("(") && raw.includes(")")) {
      targets.push({
        target: directive2.method,
        params: quickHash(JSON.stringify(directive2.params))
      });
    } else if (raw.includes(",")) {
      raw.split(",").map(function (i) {
        return i.trim();
      }).forEach(function (target) {
        targets.push({
          target: target
        });
      });
    } else {
      targets.push({
        target: raw
      });
    }
  } else {
    var nonActionOrModelLivewireDirectives = ["init", "dirty", "offline", "target", "loading", "poll", "ignore", "key", "id"];
    directives.all().filter(function (i) {
      return !nonActionOrModelLivewireDirectives.includes(i.value);
    }).map(function (i) {
      return i.expression.split("(")[0];
    }).forEach(function (target) {
      return targets.push({
        target: target
      });
    });
  }
  return targets;
}
function quickHash(subject) {
  return btoa(encodeURIComponent(subject));
}

// js/directives/wire-stream.js
directive("stream", function (_ref161) {
  var el = _ref161.el,
    directive2 = _ref161.directive,
    component = _ref161.component,
    cleanup2 = _ref161.cleanup;
  var expression = directive2.expression,
    modifiers = directive2.modifiers;
  var off = on("stream", function (_ref162) {
    var name = _ref162.name,
      content = _ref162.content,
      replace2 = _ref162.replace;
    if (name !== expression) return;
    if (modifiers.includes("replace") || replace2) {
      el.innerHTML = content;
    } else {
      el.innerHTML = el.innerHTML + content;
    }
  });
  cleanup2(off);
});
on("request", function (_ref163) {
  var respond = _ref163.respond;
  respond(function (mutableObject) {
    var response = mutableObject.response;
    if (!response.headers.has("X-Livewire-Stream")) return;
    mutableObject.response = {
      ok: true,
      redirected: false,
      status: 200,
      text: function text() {
        var _this11 = this;
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
          var finalResponse;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return interceptStreamAndReturnFinalResponse(response, function (streamed) {
                  trigger("stream", streamed);
                });
              case 2:
                finalResponse = _context8.sent;
                if (contentIsFromDump(finalResponse)) {
                  _this11.ok = false;
                }
                return _context8.abrupt("return", finalResponse);
              case 5:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }))();
      }
    };
  });
});
function interceptStreamAndReturnFinalResponse(_x12, _x13) {
  return _interceptStreamAndReturnFinalResponse.apply(this, arguments);
}
function _interceptStreamAndReturnFinalResponse() {
  _interceptStreamAndReturnFinalResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(response, callback) {
    var reader, remainingResponse, _yield$reader$read, done, chunk, decoder, output, _extractStreamObjects, _extractStreamObjects2, streams, remaining;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          reader = response.body.getReader();
          remainingResponse = "";
        case 2:
          if (false) {}
          _context15.next = 5;
          return reader.read();
        case 5:
          _yield$reader$read = _context15.sent;
          done = _yield$reader$read.done;
          chunk = _yield$reader$read.value;
          decoder = new TextDecoder();
          output = decoder.decode(chunk);
          _extractStreamObjects = extractStreamObjects(remainingResponse + output), _extractStreamObjects2 = _slicedToArray(_extractStreamObjects, 2), streams = _extractStreamObjects2[0], remaining = _extractStreamObjects2[1];
          streams.forEach(function (stream) {
            callback(stream);
          });
          remainingResponse = remaining;
          if (!done) {
            _context15.next = 15;
            break;
          }
          return _context15.abrupt("return", remainingResponse);
        case 15:
          _context15.next = 2;
          break;
        case 17:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _interceptStreamAndReturnFinalResponse.apply(this, arguments);
}
function extractStreamObjects(raw) {
  var regex = /({"stream":true.*?"endStream":true})/g;
  var matches = raw.match(regex);
  var parsed = [];
  if (matches) {
    for (var i = 0; i < matches.length; i++) {
      parsed.push(JSON.parse(matches[i]).body);
    }
  }
  var remaining = raw.replace(regex, "");
  return [parsed, remaining];
}

// js/directives/wire-ignore.js
directive("ignore", function (_ref164) {
  var el = _ref164.el,
    directive2 = _ref164.directive;
  if (directive2.modifiers.includes("self")) {
    el.__livewire_ignore_self = true;
  } else {
    el.__livewire_ignore = true;
  }
});

// js/directives/wire-dirty.js
var refreshDirtyStatesByComponent = new WeakBag();
on("commit", function (_ref165) {
  var component = _ref165.component,
    respond = _ref165.respond;
  respond(function () {
    setTimeout(function () {
      refreshDirtyStatesByComponent.each(component, function (i) {
        return i(false);
      });
    });
  });
});
directive("dirty", function (_ref166) {
  var el = _ref166.el,
    directive2 = _ref166.directive,
    component = _ref166.component;
  var targets = dirtyTargets(el);
  var dirty = Alpine.reactive({
    state: false
  });
  var oldIsDirty = false;
  var initialDisplay = el.style.display;
  var refreshDirtyState = function refreshDirtyState(isDirty) {
    toggleBooleanStateDirective(el, directive2, isDirty, initialDisplay);
    oldIsDirty = isDirty;
  };
  refreshDirtyStatesByComponent.add(component, refreshDirtyState);
  Alpine.effect(function () {
    var isDirty = false;
    if (targets.length === 0) {
      isDirty = JSON.stringify(component.canonical) !== JSON.stringify(component.reactive);
    } else {
      for (var i = 0; i < targets.length; i++) {
        if (isDirty) break;
        var target = targets[i];
        isDirty = JSON.stringify(dataGet(component.canonical, target)) !== JSON.stringify(dataGet(component.reactive, target));
      }
    }
    if (oldIsDirty !== isDirty) {
      refreshDirtyState(isDirty);
    }
    oldIsDirty = isDirty;
  });
});
function dirtyTargets(el) {
  var directives = getDirectives(el);
  var targets = [];
  if (directives.has("model")) {
    targets.push(directives.get("model").expression);
  }
  if (directives.has("target")) {
    targets = targets.concat(directives.get("target").expression.split(",").map(function (s) {
      return s.trim();
    }));
  }
  return targets;
}

// js/directives/wire-model.js
var import_alpinejs16 = __toESM(require_module_cjs());
function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function later() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
directive("model", function (_ref167) {
  var el = _ref167.el,
    directive2 = _ref167.directive,
    component = _ref167.component,
    cleanup2 = _ref167.cleanup;
  var expression = directive2.expression,
    modifiers = directive2.modifiers;
  if (!expression) {
    return console.warn("Livewire: [wire:model] is missing a value.", el);
  }
  if (componentIsMissingProperty(component, expression)) {
    return console.warn('Livewire: [wire:model="' + expression + '"] property does not exist on component: [' + component.name + "]", el);
  }
  if (el.type && el.type.toLowerCase() === "file") {
    return handleFileUpload(el, expression, component, cleanup2);
  }
  var isLive = modifiers.includes("live");
  var isLazy = modifiers.includes("lazy") || modifiers.includes("change");
  var onBlur = modifiers.includes("blur");
  var isDebounced = modifiers.includes("debounce");
  var update = function update() {
    return component.$wire.$commit();
  };
  var debouncedUpdate = isTextInput(el) && !isDebounced && isLive ? debounce(update, 150) : update;
  import_alpinejs16["default"].bind(el, _defineProperty2(_defineProperty2(_defineProperty2({}, "@change", function change() {
    isLazy && update();
  }), "@blur", function blur() {
    onBlur && update();
  }), "x-model" + getModifierTail(modifiers), function () {
    return {
      get: function get() {
        return dataGet(component.$wire, expression);
      },
      set: function set(value) {
        dataSet(component.$wire, expression, value);
        isLive && !isLazy && !onBlur && debouncedUpdate();
      }
    };
  }));
});
function getModifierTail(modifiers) {
  modifiers = modifiers.filter(function (i) {
    return !["lazy", "defer"].includes(i);
  });
  if (modifiers.length === 0) return "";
  return "." + modifiers.join(".");
}
function isTextInput(el) {
  return ["INPUT", "TEXTAREA"].includes(el.tagName.toUpperCase()) && !["checkbox", "radio"].includes(el.type);
}
function componentIsMissingProperty(component, property) {
  if (property.startsWith("$parent")) {
    var parent = closestComponent(component.el.parentElement, false);
    if (!parent) return true;
    return componentIsMissingProperty(parent, property.split("$parent.")[1]);
  }
  var baseProperty = property.split(".")[0];
  return !Object.keys(component.canonical).includes(baseProperty);
}

// js/directives/wire-init.js
var import_alpinejs17 = __toESM(require_module_cjs());
directive("init", function (_ref168) {
  var _directive2$expressio;
  var el = _ref168.el,
    directive2 = _ref168.directive;
  var fullMethod = (_directive2$expressio = directive2.expression) !== null && _directive2$expressio !== void 0 ? _directive2$expressio : "$refresh";
  import_alpinejs17["default"].evaluate(el, "$wire.".concat(fullMethod));
});

// js/directives/wire-poll.js
var import_alpinejs18 = __toESM(require_module_cjs());
directive("poll", function (_ref169) {
  var el = _ref169.el,
    directive2 = _ref169.directive,
    component = _ref169.component;
  var interval = extractDurationFrom(directive2.modifiers, 2e3);
  var _poll = poll(function () {
      triggerComponentRequest(el, directive2);
    }, interval),
    start2 = _poll.start,
    pauseWhile = _poll.pauseWhile,
    throttleWhile = _poll.throttleWhile,
    stopWhen = _poll.stopWhen;
  start2();
  throttleWhile(function () {
    return theTabIsInTheBackground() && theDirectiveIsMissingKeepAlive(directive2);
  });
  pauseWhile(function () {
    return theDirectiveHasVisible(directive2) && theElementIsNotInTheViewport(el);
  });
  pauseWhile(function () {
    return theDirectiveIsOffTheElement(el);
  });
  pauseWhile(function () {
    return livewireIsOffline();
  });
  stopWhen(function () {
    return theElementIsDisconnected(el);
  });
});
function triggerComponentRequest(el, directive2) {
  import_alpinejs18["default"].evaluate(el, directive2.expression ? "$wire." + directive2.expression : "$wire.$commit()");
}
function poll(callback) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2e3;
  var pauseConditions = [];
  var throttleConditions = [];
  var stopConditions = [];
  return {
    start: function start() {
      var clear = syncronizedInterval(interval, function () {
        if (stopConditions.some(function (i) {
          return i();
        })) return clear();
        if (pauseConditions.some(function (i) {
          return i();
        })) return;
        if (throttleConditions.some(function (i) {
          return i();
        }) && Math.random() < 0.95) return;
        callback();
      });
    },
    pauseWhile: function pauseWhile(condition) {
      pauseConditions.push(condition);
    },
    throttleWhile: function throttleWhile(condition) {
      throttleConditions.push(condition);
    },
    stopWhen: function stopWhen(condition) {
      stopConditions.push(condition);
    }
  };
}
var clocks = [];
function syncronizedInterval(ms, callback) {
  if (!clocks[ms]) {
    var clock = {
      timer: setInterval(function () {
        return clock.callbacks.forEach(function (i) {
          return i();
        });
      }, ms),
      callbacks: /* @__PURE__ */new Set()
    };
    clocks[ms] = clock;
  }
  clocks[ms].callbacks.add(callback);
  return function () {
    clocks[ms].callbacks["delete"](callback);
    if (clocks[ms].callbacks.size === 0) {
      clearInterval(clocks[ms].timer);
      delete clocks[ms];
    }
  };
}
var isOffline = false;
window.addEventListener("offline", function () {
  return isOffline = true;
});
window.addEventListener("online", function () {
  return isOffline = false;
});
function livewireIsOffline() {
  return isOffline;
}
var inBackground = false;
document.addEventListener("visibilitychange", function () {
  inBackground = document.hidden;
}, false);
function theTabIsInTheBackground() {
  return inBackground;
}
function theDirectiveIsOffTheElement(el) {
  return !getDirectives(el).has("poll");
}
function theDirectiveIsMissingKeepAlive(directive2) {
  return !directive2.modifiers.includes("keep-alive");
}
function theDirectiveHasVisible(directive2) {
  return directive2.modifiers.includes("visible");
}
function theElementIsNotInTheViewport(el) {
  var bounding = el.getBoundingClientRect();
  return !(bounding.top < (window.innerHeight || document.documentElement.clientHeight) && bounding.left < (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom > 0 && bounding.right > 0);
}
function theElementIsDisconnected(el) {
  return el.isConnected === false;
}
function extractDurationFrom(modifiers, defaultDuration) {
  var durationInMilliSeconds;
  var durationInMilliSecondsString = modifiers.find(function (mod) {
    return mod.match(/([0-9]+)ms/);
  });
  var durationInSecondsString = modifiers.find(function (mod) {
    return mod.match(/([0-9]+)s/);
  });
  if (durationInMilliSecondsString) {
    durationInMilliSeconds = Number(durationInMilliSecondsString.replace("ms", ""));
  } else if (durationInSecondsString) {
    durationInMilliSeconds = Number(durationInSecondsString.replace("s", "")) * 1e3;
  }
  return durationInMilliSeconds || defaultDuration;
}

// js/index.js
var Livewire2 = exports.Livewire = {
  directive: directive,
  dispatchTo: dispatchTo,
  start: start,
  stop: stop,
  rescan: rescan,
  first: first,
  find: find,
  getByName: getByName,
  all: all,
  hook: on,
  trigger: trigger,
  dispatch: dispatchGlobal,
  on: on2
};
if (window.Livewire) console.warn("Detected multiple instances of Livewire running");
if (window.Alpine) console.warn("Detected multiple instances of Alpine running");
window.Livewire = Livewire2;
window.Alpine = import_alpinejs19["default"];
if (window.livewireScriptConfig === void 0) {
  document.addEventListener("DOMContentLoaded", function () {
    Livewire2.start();
  });
}
var export_Alpine = exports.Alpine = import_alpinejs19["default"];

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
/*!
* focus-trap 6.6.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;