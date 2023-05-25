(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.temporal = {}));
})(this, (function (exports) { 'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
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
  function _defineProperty(obj, key, value) {
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
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
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
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function a () {
  			if (this instanceof a) {
  				var args = [null];
  				args.push.apply(args, arguments);
  				var Ctor = Function.bind.apply(f, args);
  				return new Ctor();
  			}
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var BigInteger = {exports: {}};

  (function (module) {
  	var bigInt = (function (undefined$1) {

  	    var BASE = 1e7,
  	        LOG_BASE = 7,
  	        MAX_INT = 9007199254740992,
  	        MAX_INT_ARR = smallToArray(MAX_INT),
  	        DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";

  	    var supportsNativeBigInt = typeof BigInt === "function";

  	    function Integer(v, radix, alphabet, caseSensitive) {
  	        if (typeof v === "undefined") return Integer[0];
  	        if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
  	        return parseValue(v);
  	    }

  	    function BigInteger(value, sign) {
  	        this.value = value;
  	        this.sign = sign;
  	        this.isSmall = false;
  	    }
  	    BigInteger.prototype = Object.create(Integer.prototype);

  	    function SmallInteger(value) {
  	        this.value = value;
  	        this.sign = value < 0;
  	        this.isSmall = true;
  	    }
  	    SmallInteger.prototype = Object.create(Integer.prototype);

  	    function NativeBigInt(value) {
  	        this.value = value;
  	    }
  	    NativeBigInt.prototype = Object.create(Integer.prototype);

  	    function isPrecise(n) {
  	        return -MAX_INT < n && n < MAX_INT;
  	    }

  	    function smallToArray(n) { // For performance reasons doesn't reference BASE, need to change this function if BASE changes
  	        if (n < 1e7)
  	            return [n];
  	        if (n < 1e14)
  	            return [n % 1e7, Math.floor(n / 1e7)];
  	        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
  	    }

  	    function arrayToSmall(arr) { // If BASE changes this function may need to change
  	        trim(arr);
  	        var length = arr.length;
  	        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
  	            switch (length) {
  	                case 0: return 0;
  	                case 1: return arr[0];
  	                case 2: return arr[0] + arr[1] * BASE;
  	                default: return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
  	            }
  	        }
  	        return arr;
  	    }

  	    function trim(v) {
  	        var i = v.length;
  	        while (v[--i] === 0);
  	        v.length = i + 1;
  	    }

  	    function createArray(length) { // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
  	        var x = new Array(length);
  	        var i = -1;
  	        while (++i < length) {
  	            x[i] = 0;
  	        }
  	        return x;
  	    }

  	    function truncate(n) {
  	        if (n > 0) return Math.floor(n);
  	        return Math.ceil(n);
  	    }

  	    function add(a, b) { // assumes a and b are arrays with a.length >= b.length
  	        var l_a = a.length,
  	            l_b = b.length,
  	            r = new Array(l_a),
  	            carry = 0,
  	            base = BASE,
  	            sum, i;
  	        for (i = 0; i < l_b; i++) {
  	            sum = a[i] + b[i] + carry;
  	            carry = sum >= base ? 1 : 0;
  	            r[i] = sum - carry * base;
  	        }
  	        while (i < l_a) {
  	            sum = a[i] + carry;
  	            carry = sum === base ? 1 : 0;
  	            r[i++] = sum - carry * base;
  	        }
  	        if (carry > 0) r.push(carry);
  	        return r;
  	    }

  	    function addAny(a, b) {
  	        if (a.length >= b.length) return add(a, b);
  	        return add(b, a);
  	    }

  	    function addSmall(a, carry) { // assumes a is array, carry is number with 0 <= carry < MAX_INT
  	        var l = a.length,
  	            r = new Array(l),
  	            base = BASE,
  	            sum, i;
  	        for (i = 0; i < l; i++) {
  	            sum = a[i] - base + carry;
  	            carry = Math.floor(sum / base);
  	            r[i] = sum - carry * base;
  	            carry += 1;
  	        }
  	        while (carry > 0) {
  	            r[i++] = carry % base;
  	            carry = Math.floor(carry / base);
  	        }
  	        return r;
  	    }

  	    BigInteger.prototype.add = function (v) {
  	        var n = parseValue(v);
  	        if (this.sign !== n.sign) {
  	            return this.subtract(n.negate());
  	        }
  	        var a = this.value, b = n.value;
  	        if (n.isSmall) {
  	            return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
  	        }
  	        return new BigInteger(addAny(a, b), this.sign);
  	    };
  	    BigInteger.prototype.plus = BigInteger.prototype.add;

  	    SmallInteger.prototype.add = function (v) {
  	        var n = parseValue(v);
  	        var a = this.value;
  	        if (a < 0 !== n.sign) {
  	            return this.subtract(n.negate());
  	        }
  	        var b = n.value;
  	        if (n.isSmall) {
  	            if (isPrecise(a + b)) return new SmallInteger(a + b);
  	            b = smallToArray(Math.abs(b));
  	        }
  	        return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
  	    };
  	    SmallInteger.prototype.plus = SmallInteger.prototype.add;

  	    NativeBigInt.prototype.add = function (v) {
  	        return new NativeBigInt(this.value + parseValue(v).value);
  	    };
  	    NativeBigInt.prototype.plus = NativeBigInt.prototype.add;

  	    function subtract(a, b) { // assumes a and b are arrays with a >= b
  	        var a_l = a.length,
  	            b_l = b.length,
  	            r = new Array(a_l),
  	            borrow = 0,
  	            base = BASE,
  	            i, difference;
  	        for (i = 0; i < b_l; i++) {
  	            difference = a[i] - borrow - b[i];
  	            if (difference < 0) {
  	                difference += base;
  	                borrow = 1;
  	            } else borrow = 0;
  	            r[i] = difference;
  	        }
  	        for (i = b_l; i < a_l; i++) {
  	            difference = a[i] - borrow;
  	            if (difference < 0) difference += base;
  	            else {
  	                r[i++] = difference;
  	                break;
  	            }
  	            r[i] = difference;
  	        }
  	        for (; i < a_l; i++) {
  	            r[i] = a[i];
  	        }
  	        trim(r);
  	        return r;
  	    }

  	    function subtractAny(a, b, sign) {
  	        var value;
  	        if (compareAbs(a, b) >= 0) {
  	            value = subtract(a, b);
  	        } else {
  	            value = subtract(b, a);
  	            sign = !sign;
  	        }
  	        value = arrayToSmall(value);
  	        if (typeof value === "number") {
  	            if (sign) value = -value;
  	            return new SmallInteger(value);
  	        }
  	        return new BigInteger(value, sign);
  	    }

  	    function subtractSmall(a, b, sign) { // assumes a is array, b is number with 0 <= b < MAX_INT
  	        var l = a.length,
  	            r = new Array(l),
  	            carry = -b,
  	            base = BASE,
  	            i, difference;
  	        for (i = 0; i < l; i++) {
  	            difference = a[i] + carry;
  	            carry = Math.floor(difference / base);
  	            difference %= base;
  	            r[i] = difference < 0 ? difference + base : difference;
  	        }
  	        r = arrayToSmall(r);
  	        if (typeof r === "number") {
  	            if (sign) r = -r;
  	            return new SmallInteger(r);
  	        } return new BigInteger(r, sign);
  	    }

  	    BigInteger.prototype.subtract = function (v) {
  	        var n = parseValue(v);
  	        if (this.sign !== n.sign) {
  	            return this.add(n.negate());
  	        }
  	        var a = this.value, b = n.value;
  	        if (n.isSmall)
  	            return subtractSmall(a, Math.abs(b), this.sign);
  	        return subtractAny(a, b, this.sign);
  	    };
  	    BigInteger.prototype.minus = BigInteger.prototype.subtract;

  	    SmallInteger.prototype.subtract = function (v) {
  	        var n = parseValue(v);
  	        var a = this.value;
  	        if (a < 0 !== n.sign) {
  	            return this.add(n.negate());
  	        }
  	        var b = n.value;
  	        if (n.isSmall) {
  	            return new SmallInteger(a - b);
  	        }
  	        return subtractSmall(b, Math.abs(a), a >= 0);
  	    };
  	    SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

  	    NativeBigInt.prototype.subtract = function (v) {
  	        return new NativeBigInt(this.value - parseValue(v).value);
  	    };
  	    NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;

  	    BigInteger.prototype.negate = function () {
  	        return new BigInteger(this.value, !this.sign);
  	    };
  	    SmallInteger.prototype.negate = function () {
  	        var sign = this.sign;
  	        var small = new SmallInteger(-this.value);
  	        small.sign = !sign;
  	        return small;
  	    };
  	    NativeBigInt.prototype.negate = function () {
  	        return new NativeBigInt(-this.value);
  	    };

  	    BigInteger.prototype.abs = function () {
  	        return new BigInteger(this.value, false);
  	    };
  	    SmallInteger.prototype.abs = function () {
  	        return new SmallInteger(Math.abs(this.value));
  	    };
  	    NativeBigInt.prototype.abs = function () {
  	        return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
  	    };


  	    function multiplyLong(a, b) {
  	        var a_l = a.length,
  	            b_l = b.length,
  	            l = a_l + b_l,
  	            r = createArray(l),
  	            base = BASE,
  	            product, carry, i, a_i, b_j;
  	        for (i = 0; i < a_l; ++i) {
  	            a_i = a[i];
  	            for (var j = 0; j < b_l; ++j) {
  	                b_j = b[j];
  	                product = a_i * b_j + r[i + j];
  	                carry = Math.floor(product / base);
  	                r[i + j] = product - carry * base;
  	                r[i + j + 1] += carry;
  	            }
  	        }
  	        trim(r);
  	        return r;
  	    }

  	    function multiplySmall(a, b) { // assumes a is array, b is number with |b| < BASE
  	        var l = a.length,
  	            r = new Array(l),
  	            base = BASE,
  	            carry = 0,
  	            product, i;
  	        for (i = 0; i < l; i++) {
  	            product = a[i] * b + carry;
  	            carry = Math.floor(product / base);
  	            r[i] = product - carry * base;
  	        }
  	        while (carry > 0) {
  	            r[i++] = carry % base;
  	            carry = Math.floor(carry / base);
  	        }
  	        return r;
  	    }

  	    function shiftLeft(x, n) {
  	        var r = [];
  	        while (n-- > 0) r.push(0);
  	        return r.concat(x);
  	    }

  	    function multiplyKaratsuba(x, y) {
  	        var n = Math.max(x.length, y.length);

  	        if (n <= 30) return multiplyLong(x, y);
  	        n = Math.ceil(n / 2);

  	        var b = x.slice(n),
  	            a = x.slice(0, n),
  	            d = y.slice(n),
  	            c = y.slice(0, n);

  	        var ac = multiplyKaratsuba(a, c),
  	            bd = multiplyKaratsuba(b, d),
  	            abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));

  	        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
  	        trim(product);
  	        return product;
  	    }

  	    // The following function is derived from a surface fit of a graph plotting the performance difference
  	    // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.
  	    function useKaratsuba(l1, l2) {
  	        return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
  	    }

  	    BigInteger.prototype.multiply = function (v) {
  	        var n = parseValue(v),
  	            a = this.value, b = n.value,
  	            sign = this.sign !== n.sign,
  	            abs;
  	        if (n.isSmall) {
  	            if (b === 0) return Integer[0];
  	            if (b === 1) return this;
  	            if (b === -1) return this.negate();
  	            abs = Math.abs(b);
  	            if (abs < BASE) {
  	                return new BigInteger(multiplySmall(a, abs), sign);
  	            }
  	            b = smallToArray(abs);
  	        }
  	        if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
  	            return new BigInteger(multiplyKaratsuba(a, b), sign);
  	        return new BigInteger(multiplyLong(a, b), sign);
  	    };

  	    BigInteger.prototype.times = BigInteger.prototype.multiply;

  	    function multiplySmallAndArray(a, b, sign) { // a >= 0
  	        if (a < BASE) {
  	            return new BigInteger(multiplySmall(b, a), sign);
  	        }
  	        return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
  	    }
  	    SmallInteger.prototype._multiplyBySmall = function (a) {
  	        if (isPrecise(a.value * this.value)) {
  	            return new SmallInteger(a.value * this.value);
  	        }
  	        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
  	    };
  	    BigInteger.prototype._multiplyBySmall = function (a) {
  	        if (a.value === 0) return Integer[0];
  	        if (a.value === 1) return this;
  	        if (a.value === -1) return this.negate();
  	        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
  	    };
  	    SmallInteger.prototype.multiply = function (v) {
  	        return parseValue(v)._multiplyBySmall(this);
  	    };
  	    SmallInteger.prototype.times = SmallInteger.prototype.multiply;

  	    NativeBigInt.prototype.multiply = function (v) {
  	        return new NativeBigInt(this.value * parseValue(v).value);
  	    };
  	    NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;

  	    function square(a) {
  	        //console.assert(2 * BASE * BASE < MAX_INT);
  	        var l = a.length,
  	            r = createArray(l + l),
  	            base = BASE,
  	            product, carry, i, a_i, a_j;
  	        for (i = 0; i < l; i++) {
  	            a_i = a[i];
  	            carry = 0 - a_i * a_i;
  	            for (var j = i; j < l; j++) {
  	                a_j = a[j];
  	                product = 2 * (a_i * a_j) + r[i + j] + carry;
  	                carry = Math.floor(product / base);
  	                r[i + j] = product - carry * base;
  	            }
  	            r[i + l] = carry;
  	        }
  	        trim(r);
  	        return r;
  	    }

  	    BigInteger.prototype.square = function () {
  	        return new BigInteger(square(this.value), false);
  	    };

  	    SmallInteger.prototype.square = function () {
  	        var value = this.value * this.value;
  	        if (isPrecise(value)) return new SmallInteger(value);
  	        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
  	    };

  	    NativeBigInt.prototype.square = function (v) {
  	        return new NativeBigInt(this.value * this.value);
  	    };

  	    function divMod1(a, b) { // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
  	        var a_l = a.length,
  	            b_l = b.length,
  	            base = BASE,
  	            result = createArray(b.length),
  	            divisorMostSignificantDigit = b[b_l - 1],
  	            // normalization
  	            lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
  	            remainder = multiplySmall(a, lambda),
  	            divisor = multiplySmall(b, lambda),
  	            quotientDigit, shift, carry, borrow, i, l, q;
  	        if (remainder.length <= a_l) remainder.push(0);
  	        divisor.push(0);
  	        divisorMostSignificantDigit = divisor[b_l - 1];
  	        for (shift = a_l - b_l; shift >= 0; shift--) {
  	            quotientDigit = base - 1;
  	            if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
  	                quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
  	            }
  	            // quotientDigit <= base - 1
  	            carry = 0;
  	            borrow = 0;
  	            l = divisor.length;
  	            for (i = 0; i < l; i++) {
  	                carry += quotientDigit * divisor[i];
  	                q = Math.floor(carry / base);
  	                borrow += remainder[shift + i] - (carry - q * base);
  	                carry = q;
  	                if (borrow < 0) {
  	                    remainder[shift + i] = borrow + base;
  	                    borrow = -1;
  	                } else {
  	                    remainder[shift + i] = borrow;
  	                    borrow = 0;
  	                }
  	            }
  	            while (borrow !== 0) {
  	                quotientDigit -= 1;
  	                carry = 0;
  	                for (i = 0; i < l; i++) {
  	                    carry += remainder[shift + i] - base + divisor[i];
  	                    if (carry < 0) {
  	                        remainder[shift + i] = carry + base;
  	                        carry = 0;
  	                    } else {
  	                        remainder[shift + i] = carry;
  	                        carry = 1;
  	                    }
  	                }
  	                borrow += carry;
  	            }
  	            result[shift] = quotientDigit;
  	        }
  	        // denormalization
  	        remainder = divModSmall(remainder, lambda)[0];
  	        return [arrayToSmall(result), arrayToSmall(remainder)];
  	    }

  	    function divMod2(a, b) { // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
  	        // Performs faster than divMod1 on larger input sizes.
  	        var a_l = a.length,
  	            b_l = b.length,
  	            result = [],
  	            part = [],
  	            base = BASE,
  	            guess, xlen, highx, highy, check;
  	        while (a_l) {
  	            part.unshift(a[--a_l]);
  	            trim(part);
  	            if (compareAbs(part, b) < 0) {
  	                result.push(0);
  	                continue;
  	            }
  	            xlen = part.length;
  	            highx = part[xlen - 1] * base + part[xlen - 2];
  	            highy = b[b_l - 1] * base + b[b_l - 2];
  	            if (xlen > b_l) {
  	                highx = (highx + 1) * base;
  	            }
  	            guess = Math.ceil(highx / highy);
  	            do {
  	                check = multiplySmall(b, guess);
  	                if (compareAbs(check, part) <= 0) break;
  	                guess--;
  	            } while (guess);
  	            result.push(guess);
  	            part = subtract(part, check);
  	        }
  	        result.reverse();
  	        return [arrayToSmall(result), arrayToSmall(part)];
  	    }

  	    function divModSmall(value, lambda) {
  	        var length = value.length,
  	            quotient = createArray(length),
  	            base = BASE,
  	            i, q, remainder, divisor;
  	        remainder = 0;
  	        for (i = length - 1; i >= 0; --i) {
  	            divisor = remainder * base + value[i];
  	            q = truncate(divisor / lambda);
  	            remainder = divisor - q * lambda;
  	            quotient[i] = q | 0;
  	        }
  	        return [quotient, remainder | 0];
  	    }

  	    function divModAny(self, v) {
  	        var value, n = parseValue(v);
  	        if (supportsNativeBigInt) {
  	            return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
  	        }
  	        var a = self.value, b = n.value;
  	        var quotient;
  	        if (b === 0) throw new Error("Cannot divide by zero");
  	        if (self.isSmall) {
  	            if (n.isSmall) {
  	                return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
  	            }
  	            return [Integer[0], self];
  	        }
  	        if (n.isSmall) {
  	            if (b === 1) return [self, Integer[0]];
  	            if (b == -1) return [self.negate(), Integer[0]];
  	            var abs = Math.abs(b);
  	            if (abs < BASE) {
  	                value = divModSmall(a, abs);
  	                quotient = arrayToSmall(value[0]);
  	                var remainder = value[1];
  	                if (self.sign) remainder = -remainder;
  	                if (typeof quotient === "number") {
  	                    if (self.sign !== n.sign) quotient = -quotient;
  	                    return [new SmallInteger(quotient), new SmallInteger(remainder)];
  	                }
  	                return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
  	            }
  	            b = smallToArray(abs);
  	        }
  	        var comparison = compareAbs(a, b);
  	        if (comparison === -1) return [Integer[0], self];
  	        if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];

  	        // divMod1 is faster on smaller input sizes
  	        if (a.length + b.length <= 200)
  	            value = divMod1(a, b);
  	        else value = divMod2(a, b);

  	        quotient = value[0];
  	        var qSign = self.sign !== n.sign,
  	            mod = value[1],
  	            mSign = self.sign;
  	        if (typeof quotient === "number") {
  	            if (qSign) quotient = -quotient;
  	            quotient = new SmallInteger(quotient);
  	        } else quotient = new BigInteger(quotient, qSign);
  	        if (typeof mod === "number") {
  	            if (mSign) mod = -mod;
  	            mod = new SmallInteger(mod);
  	        } else mod = new BigInteger(mod, mSign);
  	        return [quotient, mod];
  	    }

  	    BigInteger.prototype.divmod = function (v) {
  	        var result = divModAny(this, v);
  	        return {
  	            quotient: result[0],
  	            remainder: result[1]
  	        };
  	    };
  	    NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;


  	    BigInteger.prototype.divide = function (v) {
  	        return divModAny(this, v)[0];
  	    };
  	    NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function (v) {
  	        return new NativeBigInt(this.value / parseValue(v).value);
  	    };
  	    SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

  	    BigInteger.prototype.mod = function (v) {
  	        return divModAny(this, v)[1];
  	    };
  	    NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function (v) {
  	        return new NativeBigInt(this.value % parseValue(v).value);
  	    };
  	    SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

  	    BigInteger.prototype.pow = function (v) {
  	        var n = parseValue(v),
  	            a = this.value,
  	            b = n.value,
  	            value, x, y;
  	        if (b === 0) return Integer[1];
  	        if (a === 0) return Integer[0];
  	        if (a === 1) return Integer[1];
  	        if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
  	        if (n.sign) {
  	            return Integer[0];
  	        }
  	        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
  	        if (this.isSmall) {
  	            if (isPrecise(value = Math.pow(a, b)))
  	                return new SmallInteger(truncate(value));
  	        }
  	        x = this;
  	        y = Integer[1];
  	        while (true) {
  	            if (b & 1 === 1) {
  	                y = y.times(x);
  	                --b;
  	            }
  	            if (b === 0) break;
  	            b /= 2;
  	            x = x.square();
  	        }
  	        return y;
  	    };
  	    SmallInteger.prototype.pow = BigInteger.prototype.pow;

  	    NativeBigInt.prototype.pow = function (v) {
  	        var n = parseValue(v);
  	        var a = this.value, b = n.value;
  	        var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
  	        if (b === _0) return Integer[1];
  	        if (a === _0) return Integer[0];
  	        if (a === _1) return Integer[1];
  	        if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
  	        if (n.isNegative()) return new NativeBigInt(_0);
  	        var x = this;
  	        var y = Integer[1];
  	        while (true) {
  	            if ((b & _1) === _1) {
  	                y = y.times(x);
  	                --b;
  	            }
  	            if (b === _0) break;
  	            b /= _2;
  	            x = x.square();
  	        }
  	        return y;
  	    };

  	    BigInteger.prototype.modPow = function (exp, mod) {
  	        exp = parseValue(exp);
  	        mod = parseValue(mod);
  	        if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
  	        var r = Integer[1],
  	            base = this.mod(mod);
  	        if (exp.isNegative()) {
  	            exp = exp.multiply(Integer[-1]);
  	            base = base.modInv(mod);
  	        }
  	        while (exp.isPositive()) {
  	            if (base.isZero()) return Integer[0];
  	            if (exp.isOdd()) r = r.multiply(base).mod(mod);
  	            exp = exp.divide(2);
  	            base = base.square().mod(mod);
  	        }
  	        return r;
  	    };
  	    NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

  	    function compareAbs(a, b) {
  	        if (a.length !== b.length) {
  	            return a.length > b.length ? 1 : -1;
  	        }
  	        for (var i = a.length - 1; i >= 0; i--) {
  	            if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
  	        }
  	        return 0;
  	    }

  	    BigInteger.prototype.compareAbs = function (v) {
  	        var n = parseValue(v),
  	            a = this.value,
  	            b = n.value;
  	        if (n.isSmall) return 1;
  	        return compareAbs(a, b);
  	    };
  	    SmallInteger.prototype.compareAbs = function (v) {
  	        var n = parseValue(v),
  	            a = Math.abs(this.value),
  	            b = n.value;
  	        if (n.isSmall) {
  	            b = Math.abs(b);
  	            return a === b ? 0 : a > b ? 1 : -1;
  	        }
  	        return -1;
  	    };
  	    NativeBigInt.prototype.compareAbs = function (v) {
  	        var a = this.value;
  	        var b = parseValue(v).value;
  	        a = a >= 0 ? a : -a;
  	        b = b >= 0 ? b : -b;
  	        return a === b ? 0 : a > b ? 1 : -1;
  	    };

  	    BigInteger.prototype.compare = function (v) {
  	        // See discussion about comparison with Infinity:
  	        // https://github.com/peterolson/BigInteger.js/issues/61
  	        if (v === Infinity) {
  	            return -1;
  	        }
  	        if (v === -Infinity) {
  	            return 1;
  	        }

  	        var n = parseValue(v),
  	            a = this.value,
  	            b = n.value;
  	        if (this.sign !== n.sign) {
  	            return n.sign ? 1 : -1;
  	        }
  	        if (n.isSmall) {
  	            return this.sign ? -1 : 1;
  	        }
  	        return compareAbs(a, b) * (this.sign ? -1 : 1);
  	    };
  	    BigInteger.prototype.compareTo = BigInteger.prototype.compare;

  	    SmallInteger.prototype.compare = function (v) {
  	        if (v === Infinity) {
  	            return -1;
  	        }
  	        if (v === -Infinity) {
  	            return 1;
  	        }

  	        var n = parseValue(v),
  	            a = this.value,
  	            b = n.value;
  	        if (n.isSmall) {
  	            return a == b ? 0 : a > b ? 1 : -1;
  	        }
  	        if (a < 0 !== n.sign) {
  	            return a < 0 ? -1 : 1;
  	        }
  	        return a < 0 ? 1 : -1;
  	    };
  	    SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

  	    NativeBigInt.prototype.compare = function (v) {
  	        if (v === Infinity) {
  	            return -1;
  	        }
  	        if (v === -Infinity) {
  	            return 1;
  	        }
  	        var a = this.value;
  	        var b = parseValue(v).value;
  	        return a === b ? 0 : a > b ? 1 : -1;
  	    };
  	    NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;

  	    BigInteger.prototype.equals = function (v) {
  	        return this.compare(v) === 0;
  	    };
  	    NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

  	    BigInteger.prototype.notEquals = function (v) {
  	        return this.compare(v) !== 0;
  	    };
  	    NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

  	    BigInteger.prototype.greater = function (v) {
  	        return this.compare(v) > 0;
  	    };
  	    NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

  	    BigInteger.prototype.lesser = function (v) {
  	        return this.compare(v) < 0;
  	    };
  	    NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

  	    BigInteger.prototype.greaterOrEquals = function (v) {
  	        return this.compare(v) >= 0;
  	    };
  	    NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

  	    BigInteger.prototype.lesserOrEquals = function (v) {
  	        return this.compare(v) <= 0;
  	    };
  	    NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

  	    BigInteger.prototype.isEven = function () {
  	        return (this.value[0] & 1) === 0;
  	    };
  	    SmallInteger.prototype.isEven = function () {
  	        return (this.value & 1) === 0;
  	    };
  	    NativeBigInt.prototype.isEven = function () {
  	        return (this.value & BigInt(1)) === BigInt(0);
  	    };

  	    BigInteger.prototype.isOdd = function () {
  	        return (this.value[0] & 1) === 1;
  	    };
  	    SmallInteger.prototype.isOdd = function () {
  	        return (this.value & 1) === 1;
  	    };
  	    NativeBigInt.prototype.isOdd = function () {
  	        return (this.value & BigInt(1)) === BigInt(1);
  	    };

  	    BigInteger.prototype.isPositive = function () {
  	        return !this.sign;
  	    };
  	    SmallInteger.prototype.isPositive = function () {
  	        return this.value > 0;
  	    };
  	    NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;

  	    BigInteger.prototype.isNegative = function () {
  	        return this.sign;
  	    };
  	    SmallInteger.prototype.isNegative = function () {
  	        return this.value < 0;
  	    };
  	    NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;

  	    BigInteger.prototype.isUnit = function () {
  	        return false;
  	    };
  	    SmallInteger.prototype.isUnit = function () {
  	        return Math.abs(this.value) === 1;
  	    };
  	    NativeBigInt.prototype.isUnit = function () {
  	        return this.abs().value === BigInt(1);
  	    };

  	    BigInteger.prototype.isZero = function () {
  	        return false;
  	    };
  	    SmallInteger.prototype.isZero = function () {
  	        return this.value === 0;
  	    };
  	    NativeBigInt.prototype.isZero = function () {
  	        return this.value === BigInt(0);
  	    };

  	    BigInteger.prototype.isDivisibleBy = function (v) {
  	        var n = parseValue(v);
  	        if (n.isZero()) return false;
  	        if (n.isUnit()) return true;
  	        if (n.compareAbs(2) === 0) return this.isEven();
  	        return this.mod(n).isZero();
  	    };
  	    NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

  	    function isBasicPrime(v) {
  	        var n = v.abs();
  	        if (n.isUnit()) return false;
  	        if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
  	        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
  	        if (n.lesser(49)) return true;
  	        // we don't know if it's prime: let the other functions figure it out
  	    }

  	    function millerRabinTest(n, a) {
  	        var nPrev = n.prev(),
  	            b = nPrev,
  	            r = 0,
  	            d, i, x;
  	        while (b.isEven()) b = b.divide(2), r++;
  	        next: for (i = 0; i < a.length; i++) {
  	            if (n.lesser(a[i])) continue;
  	            x = bigInt(a[i]).modPow(b, n);
  	            if (x.isUnit() || x.equals(nPrev)) continue;
  	            for (d = r - 1; d != 0; d--) {
  	                x = x.square().mod(n);
  	                if (x.isUnit()) return false;
  	                if (x.equals(nPrev)) continue next;
  	            }
  	            return false;
  	        }
  	        return true;
  	    }

  	    // Set "strict" to true to force GRH-supported lower bound of 2*log(N)^2
  	    BigInteger.prototype.isPrime = function (strict) {
  	        var isPrime = isBasicPrime(this);
  	        if (isPrime !== undefined$1) return isPrime;
  	        var n = this.abs();
  	        var bits = n.bitLength();
  	        if (bits <= 64)
  	            return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
  	        var logN = Math.log(2) * bits.toJSNumber();
  	        var t = Math.ceil((strict === true) ? (2 * Math.pow(logN, 2)) : logN);
  	        for (var a = [], i = 0; i < t; i++) {
  	            a.push(bigInt(i + 2));
  	        }
  	        return millerRabinTest(n, a);
  	    };
  	    NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

  	    BigInteger.prototype.isProbablePrime = function (iterations, rng) {
  	        var isPrime = isBasicPrime(this);
  	        if (isPrime !== undefined$1) return isPrime;
  	        var n = this.abs();
  	        var t = iterations === undefined$1 ? 5 : iterations;
  	        for (var a = [], i = 0; i < t; i++) {
  	            a.push(bigInt.randBetween(2, n.minus(2), rng));
  	        }
  	        return millerRabinTest(n, a);
  	    };
  	    NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

  	    BigInteger.prototype.modInv = function (n) {
  	        var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
  	        while (!newR.isZero()) {
  	            q = r.divide(newR);
  	            lastT = t;
  	            lastR = r;
  	            t = newT;
  	            r = newR;
  	            newT = lastT.subtract(q.multiply(newT));
  	            newR = lastR.subtract(q.multiply(newR));
  	        }
  	        if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
  	        if (t.compare(0) === -1) {
  	            t = t.add(n);
  	        }
  	        if (this.isNegative()) {
  	            return t.negate();
  	        }
  	        return t;
  	    };

  	    NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

  	    BigInteger.prototype.next = function () {
  	        var value = this.value;
  	        if (this.sign) {
  	            return subtractSmall(value, 1, this.sign);
  	        }
  	        return new BigInteger(addSmall(value, 1), this.sign);
  	    };
  	    SmallInteger.prototype.next = function () {
  	        var value = this.value;
  	        if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
  	        return new BigInteger(MAX_INT_ARR, false);
  	    };
  	    NativeBigInt.prototype.next = function () {
  	        return new NativeBigInt(this.value + BigInt(1));
  	    };

  	    BigInteger.prototype.prev = function () {
  	        var value = this.value;
  	        if (this.sign) {
  	            return new BigInteger(addSmall(value, 1), true);
  	        }
  	        return subtractSmall(value, 1, this.sign);
  	    };
  	    SmallInteger.prototype.prev = function () {
  	        var value = this.value;
  	        if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
  	        return new BigInteger(MAX_INT_ARR, true);
  	    };
  	    NativeBigInt.prototype.prev = function () {
  	        return new NativeBigInt(this.value - BigInt(1));
  	    };

  	    var powersOfTwo = [1];
  	    while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
  	    var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];

  	    function shift_isSmall(n) {
  	        return Math.abs(n) <= BASE;
  	    }

  	    BigInteger.prototype.shiftLeft = function (v) {
  	        var n = parseValue(v).toJSNumber();
  	        if (!shift_isSmall(n)) {
  	            throw new Error(String(n) + " is too large for shifting.");
  	        }
  	        if (n < 0) return this.shiftRight(-n);
  	        var result = this;
  	        if (result.isZero()) return result;
  	        while (n >= powers2Length) {
  	            result = result.multiply(highestPower2);
  	            n -= powers2Length - 1;
  	        }
  	        return result.multiply(powersOfTwo[n]);
  	    };
  	    NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

  	    BigInteger.prototype.shiftRight = function (v) {
  	        var remQuo;
  	        var n = parseValue(v).toJSNumber();
  	        if (!shift_isSmall(n)) {
  	            throw new Error(String(n) + " is too large for shifting.");
  	        }
  	        if (n < 0) return this.shiftLeft(-n);
  	        var result = this;
  	        while (n >= powers2Length) {
  	            if (result.isZero() || (result.isNegative() && result.isUnit())) return result;
  	            remQuo = divModAny(result, highestPower2);
  	            result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
  	            n -= powers2Length - 1;
  	        }
  	        remQuo = divModAny(result, powersOfTwo[n]);
  	        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
  	    };
  	    NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

  	    function bitwise(x, y, fn) {
  	        y = parseValue(y);
  	        var xSign = x.isNegative(), ySign = y.isNegative();
  	        var xRem = xSign ? x.not() : x,
  	            yRem = ySign ? y.not() : y;
  	        var xDigit = 0, yDigit = 0;
  	        var xDivMod = null, yDivMod = null;
  	        var result = [];
  	        while (!xRem.isZero() || !yRem.isZero()) {
  	            xDivMod = divModAny(xRem, highestPower2);
  	            xDigit = xDivMod[1].toJSNumber();
  	            if (xSign) {
  	                xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
  	            }

  	            yDivMod = divModAny(yRem, highestPower2);
  	            yDigit = yDivMod[1].toJSNumber();
  	            if (ySign) {
  	                yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
  	            }

  	            xRem = xDivMod[0];
  	            yRem = yDivMod[0];
  	            result.push(fn(xDigit, yDigit));
  	        }
  	        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
  	        for (var i = result.length - 1; i >= 0; i -= 1) {
  	            sum = sum.multiply(highestPower2).add(bigInt(result[i]));
  	        }
  	        return sum;
  	    }

  	    BigInteger.prototype.not = function () {
  	        return this.negate().prev();
  	    };
  	    NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;

  	    BigInteger.prototype.and = function (n) {
  	        return bitwise(this, n, function (a, b) { return a & b; });
  	    };
  	    NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;

  	    BigInteger.prototype.or = function (n) {
  	        return bitwise(this, n, function (a, b) { return a | b; });
  	    };
  	    NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;

  	    BigInteger.prototype.xor = function (n) {
  	        return bitwise(this, n, function (a, b) { return a ^ b; });
  	    };
  	    NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;

  	    var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
  	    function roughLOB(n) { // get lowestOneBit (rough)
  	        // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
  	        // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
  	        var v = n.value,
  	            x = typeof v === "number" ? v | LOBMASK_I :
  	                typeof v === "bigint" ? v | BigInt(LOBMASK_I) :
  	                    v[0] + v[1] * BASE | LOBMASK_BI;
  	        return x & -x;
  	    }

  	    function integerLogarithm(value, base) {
  	        if (base.compareTo(value) <= 0) {
  	            var tmp = integerLogarithm(value, base.square(base));
  	            var p = tmp.p;
  	            var e = tmp.e;
  	            var t = p.multiply(base);
  	            return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p: p, e: e * 2 };
  	        }
  	        return { p: bigInt(1), e: 0 };
  	    }

  	    BigInteger.prototype.bitLength = function () {
  	        var n = this;
  	        if (n.compareTo(bigInt(0)) < 0) {
  	            n = n.negate().subtract(bigInt(1));
  	        }
  	        if (n.compareTo(bigInt(0)) === 0) {
  	            return bigInt(0);
  	        }
  	        return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
  	    };
  	    NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;

  	    function max(a, b) {
  	        a = parseValue(a);
  	        b = parseValue(b);
  	        return a.greater(b) ? a : b;
  	    }
  	    function min(a, b) {
  	        a = parseValue(a);
  	        b = parseValue(b);
  	        return a.lesser(b) ? a : b;
  	    }
  	    function gcd(a, b) {
  	        a = parseValue(a).abs();
  	        b = parseValue(b).abs();
  	        if (a.equals(b)) return a;
  	        if (a.isZero()) return b;
  	        if (b.isZero()) return a;
  	        var c = Integer[1], d, t;
  	        while (a.isEven() && b.isEven()) {
  	            d = min(roughLOB(a), roughLOB(b));
  	            a = a.divide(d);
  	            b = b.divide(d);
  	            c = c.multiply(d);
  	        }
  	        while (a.isEven()) {
  	            a = a.divide(roughLOB(a));
  	        }
  	        do {
  	            while (b.isEven()) {
  	                b = b.divide(roughLOB(b));
  	            }
  	            if (a.greater(b)) {
  	                t = b; b = a; a = t;
  	            }
  	            b = b.subtract(a);
  	        } while (!b.isZero());
  	        return c.isUnit() ? a : a.multiply(c);
  	    }
  	    function lcm(a, b) {
  	        a = parseValue(a).abs();
  	        b = parseValue(b).abs();
  	        return a.divide(gcd(a, b)).multiply(b);
  	    }
  	    function randBetween(a, b, rng) {
  	        a = parseValue(a);
  	        b = parseValue(b);
  	        var usedRNG = rng || Math.random;
  	        var low = min(a, b), high = max(a, b);
  	        var range = high.subtract(low).add(1);
  	        if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
  	        var digits = toBase(range, BASE).value;
  	        var result = [], restricted = true;
  	        for (var i = 0; i < digits.length; i++) {
  	            var top = restricted ? digits[i] + (i + 1 < digits.length ? digits[i + 1] / BASE : 0) : BASE;
  	            var digit = truncate(usedRNG() * top);
  	            result.push(digit);
  	            if (digit < digits[i]) restricted = false;
  	        }
  	        return low.add(Integer.fromArray(result, BASE, false));
  	    }

  	    var parseBase = function (text, base, alphabet, caseSensitive) {
  	        alphabet = alphabet || DEFAULT_ALPHABET;
  	        text = String(text);
  	        if (!caseSensitive) {
  	            text = text.toLowerCase();
  	            alphabet = alphabet.toLowerCase();
  	        }
  	        var length = text.length;
  	        var i;
  	        var absBase = Math.abs(base);
  	        var alphabetValues = {};
  	        for (i = 0; i < alphabet.length; i++) {
  	            alphabetValues[alphabet[i]] = i;
  	        }
  	        for (i = 0; i < length; i++) {
  	            var c = text[i];
  	            if (c === "-") continue;
  	            if (c in alphabetValues) {
  	                if (alphabetValues[c] >= absBase) {
  	                    if (c === "1" && absBase === 1) continue;
  	                    throw new Error(c + " is not a valid digit in base " + base + ".");
  	                }
  	            }
  	        }
  	        base = parseValue(base);
  	        var digits = [];
  	        var isNegative = text[0] === "-";
  	        for (i = isNegative ? 1 : 0; i < text.length; i++) {
  	            var c = text[i];
  	            if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));
  	            else if (c === "<") {
  	                var start = i;
  	                do { i++; } while (text[i] !== ">" && i < text.length);
  	                digits.push(parseValue(text.slice(start + 1, i)));
  	            }
  	            else throw new Error(c + " is not a valid character");
  	        }
  	        return parseBaseFromArray(digits, base, isNegative);
  	    };

  	    function parseBaseFromArray(digits, base, isNegative) {
  	        var val = Integer[0], pow = Integer[1], i;
  	        for (i = digits.length - 1; i >= 0; i--) {
  	            val = val.add(digits[i].times(pow));
  	            pow = pow.times(base);
  	        }
  	        return isNegative ? val.negate() : val;
  	    }

  	    function stringify(digit, alphabet) {
  	        alphabet = alphabet || DEFAULT_ALPHABET;
  	        if (digit < alphabet.length) {
  	            return alphabet[digit];
  	        }
  	        return "<" + digit + ">";
  	    }

  	    function toBase(n, base) {
  	        base = bigInt(base);
  	        if (base.isZero()) {
  	            if (n.isZero()) return { value: [0], isNegative: false };
  	            throw new Error("Cannot convert nonzero numbers to base 0.");
  	        }
  	        if (base.equals(-1)) {
  	            if (n.isZero()) return { value: [0], isNegative: false };
  	            if (n.isNegative())
  	                return {
  	                    value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber()))
  	                        .map(Array.prototype.valueOf, [1, 0])
  	                    ),
  	                    isNegative: false
  	                };

  	            var arr = Array.apply(null, Array(n.toJSNumber() - 1))
  	                .map(Array.prototype.valueOf, [0, 1]);
  	            arr.unshift([1]);
  	            return {
  	                value: [].concat.apply([], arr),
  	                isNegative: false
  	            };
  	        }

  	        var neg = false;
  	        if (n.isNegative() && base.isPositive()) {
  	            neg = true;
  	            n = n.abs();
  	        }
  	        if (base.isUnit()) {
  	            if (n.isZero()) return { value: [0], isNegative: false };

  	            return {
  	                value: Array.apply(null, Array(n.toJSNumber()))
  	                    .map(Number.prototype.valueOf, 1),
  	                isNegative: neg
  	            };
  	        }
  	        var out = [];
  	        var left = n, divmod;
  	        while (left.isNegative() || left.compareAbs(base) >= 0) {
  	            divmod = left.divmod(base);
  	            left = divmod.quotient;
  	            var digit = divmod.remainder;
  	            if (digit.isNegative()) {
  	                digit = base.minus(digit).abs();
  	                left = left.next();
  	            }
  	            out.push(digit.toJSNumber());
  	        }
  	        out.push(left.toJSNumber());
  	        return { value: out.reverse(), isNegative: neg };
  	    }

  	    function toBaseString(n, base, alphabet) {
  	        var arr = toBase(n, base);
  	        return (arr.isNegative ? "-" : "") + arr.value.map(function (x) {
  	            return stringify(x, alphabet);
  	        }).join('');
  	    }

  	    BigInteger.prototype.toArray = function (radix) {
  	        return toBase(this, radix);
  	    };

  	    SmallInteger.prototype.toArray = function (radix) {
  	        return toBase(this, radix);
  	    };

  	    NativeBigInt.prototype.toArray = function (radix) {
  	        return toBase(this, radix);
  	    };

  	    BigInteger.prototype.toString = function (radix, alphabet) {
  	        if (radix === undefined$1) radix = 10;
  	        if (radix !== 10) return toBaseString(this, radix, alphabet);
  	        var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
  	        while (--l >= 0) {
  	            digit = String(v[l]);
  	            str += zeros.slice(digit.length) + digit;
  	        }
  	        var sign = this.sign ? "-" : "";
  	        return sign + str;
  	    };

  	    SmallInteger.prototype.toString = function (radix, alphabet) {
  	        if (radix === undefined$1) radix = 10;
  	        if (radix != 10) return toBaseString(this, radix, alphabet);
  	        return String(this.value);
  	    };

  	    NativeBigInt.prototype.toString = SmallInteger.prototype.toString;

  	    NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () { return this.toString(); };

  	    BigInteger.prototype.valueOf = function () {
  	        return parseInt(this.toString(), 10);
  	    };
  	    BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

  	    SmallInteger.prototype.valueOf = function () {
  	        return this.value;
  	    };
  	    SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
  	    NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function () {
  	        return parseInt(this.toString(), 10);
  	    };

  	    function parseStringValue(v) {
  	        if (isPrecise(+v)) {
  	            var x = +v;
  	            if (x === truncate(x))
  	                return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
  	            throw new Error("Invalid integer: " + v);
  	        }
  	        var sign = v[0] === "-";
  	        if (sign) v = v.slice(1);
  	        var split = v.split(/e/i);
  	        if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
  	        if (split.length === 2) {
  	            var exp = split[1];
  	            if (exp[0] === "+") exp = exp.slice(1);
  	            exp = +exp;
  	            if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
  	            var text = split[0];
  	            var decimalPlace = text.indexOf(".");
  	            if (decimalPlace >= 0) {
  	                exp -= text.length - decimalPlace - 1;
  	                text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
  	            }
  	            if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
  	            text += (new Array(exp + 1)).join("0");
  	            v = text;
  	        }
  	        var isValid = /^([0-9][0-9]*)$/.test(v);
  	        if (!isValid) throw new Error("Invalid integer: " + v);
  	        if (supportsNativeBigInt) {
  	            return new NativeBigInt(BigInt(sign ? "-" + v : v));
  	        }
  	        var r = [], max = v.length, l = LOG_BASE, min = max - l;
  	        while (max > 0) {
  	            r.push(+v.slice(min, max));
  	            min -= l;
  	            if (min < 0) min = 0;
  	            max -= l;
  	        }
  	        trim(r);
  	        return new BigInteger(r, sign);
  	    }

  	    function parseNumberValue(v) {
  	        if (supportsNativeBigInt) {
  	            return new NativeBigInt(BigInt(v));
  	        }
  	        if (isPrecise(v)) {
  	            if (v !== truncate(v)) throw new Error(v + " is not an integer.");
  	            return new SmallInteger(v);
  	        }
  	        return parseStringValue(v.toString());
  	    }

  	    function parseValue(v) {
  	        if (typeof v === "number") {
  	            return parseNumberValue(v);
  	        }
  	        if (typeof v === "string") {
  	            return parseStringValue(v);
  	        }
  	        if (typeof v === "bigint") {
  	            return new NativeBigInt(v);
  	        }
  	        return v;
  	    }
  	    // Pre-define numbers in range [-999,999]
  	    for (var i = 0; i < 1000; i++) {
  	        Integer[i] = parseValue(i);
  	        if (i > 0) Integer[-i] = parseValue(-i);
  	    }
  	    // Backwards compatibility
  	    Integer.one = Integer[1];
  	    Integer.zero = Integer[0];
  	    Integer.minusOne = Integer[-1];
  	    Integer.max = max;
  	    Integer.min = min;
  	    Integer.gcd = gcd;
  	    Integer.lcm = lcm;
  	    Integer.isInstance = function (x) { return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt; };
  	    Integer.randBetween = randBetween;

  	    Integer.fromArray = function (digits, base, isNegative) {
  	        return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
  	    };

  	    return Integer;
  	})();

  	// Node.js check
  	if (module.hasOwnProperty("exports")) {
  	    module.exports = bigInt;
  	}
  } (BigInteger));

  var BigIntegerExports = BigInteger.exports;
  var bigInt = /*@__PURE__*/getDefaultExportFromCjs(BigIntegerExports);

  /* eslint complexity: [2, 18], max-statements: [2, 33] */
  var shams$1 = function hasSymbols() {
  	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
  	if (typeof Symbol.iterator === 'symbol') { return true; }

  	var obj = {};
  	var sym = Symbol('test');
  	var symObj = Object(sym);
  	if (typeof sym === 'string') { return false; }

  	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
  	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

  	// temp disabled per https://github.com/ljharb/object.assign/issues/17
  	// if (sym instanceof Symbol) { return false; }
  	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  	// if (!(symObj instanceof Symbol)) { return false; }

  	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
  	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  	var symVal = 42;
  	obj[sym] = symVal;
  	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
  	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

  	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

  	var syms = Object.getOwnPropertySymbols(obj);
  	if (syms.length !== 1 || syms[0] !== sym) { return false; }

  	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

  	if (typeof Object.getOwnPropertyDescriptor === 'function') {
  		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
  		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
  	}

  	return true;
  };

  var origSymbol = typeof Symbol !== 'undefined' && Symbol;
  var hasSymbolSham = shams$1;

  var hasSymbols$4 = function hasNativeSymbols() {
  	if (typeof origSymbol !== 'function') { return false; }
  	if (typeof Symbol !== 'function') { return false; }
  	if (typeof origSymbol('foo') !== 'symbol') { return false; }
  	if (typeof Symbol('bar') !== 'symbol') { return false; }

  	return hasSymbolSham();
  };

  var test = {
  	foo: {}
  };

  var $Object$1 = Object;

  var hasProto$1 = function hasProto() {
  	return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object$1);
  };

  /* eslint no-invalid-this: 1 */

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var slice = Array.prototype.slice;
  var toStr$4 = Object.prototype.toString;
  var funcType = '[object Function]';

  var implementation$3 = function bind(that) {
      var target = this;
      if (typeof target !== 'function' || toStr$4.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);

      var bound;
      var binder = function () {
          if (this instanceof bound) {
              var result = target.apply(
                  this,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return this;
          } else {
              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );
          }
      };

      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
      }

      bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }

      return bound;
  };

  var implementation$2 = implementation$3;

  var functionBind = Function.prototype.bind || implementation$2;

  var src;
  var hasRequiredSrc;

  function requireSrc () {
  	if (hasRequiredSrc) return src;
  	hasRequiredSrc = 1;

  	var bind = functionBind;

  	src = bind.call(Function.call, Object.prototype.hasOwnProperty);
  	return src;
  }

  var undefined$1;

  var $SyntaxError = SyntaxError;
  var $Function = Function;
  var $TypeError$8 = TypeError;

  // eslint-disable-next-line consistent-return
  var getEvalledConstructor = function (expressionSyntax) {
  	try {
  		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
  	} catch (e) {}
  };

  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
  	try {
  		$gOPD({}, '');
  	} catch (e) {
  		$gOPD = null; // this is IE 8, which has a broken gOPD
  	}
  }

  var throwTypeError = function () {
  	throw new $TypeError$8();
  };
  var ThrowTypeError = $gOPD
  	? (function () {
  		try {
  			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
  			arguments.callee; // IE 8 does not throw here
  			return throwTypeError;
  		} catch (calleeThrows) {
  			try {
  				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
  				return $gOPD(arguments, 'callee').get;
  			} catch (gOPDthrows) {
  				return throwTypeError;
  			}
  		}
  	}())
  	: throwTypeError;

  var hasSymbols$3 = hasSymbols$4();
  var hasProto = hasProto$1();

  var getProto = Object.getPrototypeOf || (
  	hasProto
  		? function (x) { return x.__proto__; } // eslint-disable-line no-proto
  		: null
  );

  var needsEval = {};

  var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);

  var INTRINSICS$1 = {
  	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
  	'%Array%': Array,
  	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
  	'%ArrayIteratorPrototype%': hasSymbols$3 && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
  	'%AsyncFromSyncIteratorPrototype%': undefined$1,
  	'%AsyncFunction%': needsEval,
  	'%AsyncGenerator%': needsEval,
  	'%AsyncGeneratorFunction%': needsEval,
  	'%AsyncIteratorPrototype%': needsEval,
  	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
  	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
  	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
  	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
  	'%Boolean%': Boolean,
  	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
  	'%Date%': Date,
  	'%decodeURI%': decodeURI,
  	'%decodeURIComponent%': decodeURIComponent,
  	'%encodeURI%': encodeURI,
  	'%encodeURIComponent%': encodeURIComponent,
  	'%Error%': Error,
  	'%eval%': eval, // eslint-disable-line no-eval
  	'%EvalError%': EvalError,
  	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
  	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
  	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
  	'%Function%': $Function,
  	'%GeneratorFunction%': needsEval,
  	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
  	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
  	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
  	'%isFinite%': isFinite,
  	'%isNaN%': isNaN,
  	'%IteratorPrototype%': hasSymbols$3 && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
  	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
  	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$3 || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
  	'%Math%': Math,
  	'%Number%': Number,
  	'%Object%': Object,
  	'%parseFloat%': parseFloat,
  	'%parseInt%': parseInt,
  	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
  	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
  	'%RangeError%': RangeError,
  	'%ReferenceError%': ReferenceError,
  	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
  	'%RegExp%': RegExp,
  	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
  	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$3 || !getProto ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
  	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
  	'%String%': String,
  	'%StringIteratorPrototype%': hasSymbols$3 && getProto ? getProto(''[Symbol.iterator]()) : undefined$1,
  	'%Symbol%': hasSymbols$3 ? Symbol : undefined$1,
  	'%SyntaxError%': $SyntaxError,
  	'%ThrowTypeError%': ThrowTypeError,
  	'%TypedArray%': TypedArray,
  	'%TypeError%': $TypeError$8,
  	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
  	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
  	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
  	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
  	'%URIError%': URIError,
  	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
  	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
  	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
  };

  if (getProto) {
  	try {
  		null.error; // eslint-disable-line no-unused-expressions
  	} catch (e) {
  		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
  		var errorProto = getProto(getProto(e));
  		INTRINSICS$1['%Error.prototype%'] = errorProto;
  	}
  }

  var doEval = function doEval(name) {
  	var value;
  	if (name === '%AsyncFunction%') {
  		value = getEvalledConstructor('async function () {}');
  	} else if (name === '%GeneratorFunction%') {
  		value = getEvalledConstructor('function* () {}');
  	} else if (name === '%AsyncGeneratorFunction%') {
  		value = getEvalledConstructor('async function* () {}');
  	} else if (name === '%AsyncGenerator%') {
  		var fn = doEval('%AsyncGeneratorFunction%');
  		if (fn) {
  			value = fn.prototype;
  		}
  	} else if (name === '%AsyncIteratorPrototype%') {
  		var gen = doEval('%AsyncGenerator%');
  		if (gen && getProto) {
  			value = getProto(gen.prototype);
  		}
  	}

  	INTRINSICS$1[name] = value;

  	return value;
  };

  var LEGACY_ALIASES = {
  	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
  	'%ArrayPrototype%': ['Array', 'prototype'],
  	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
  	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
  	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
  	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
  	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
  	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
  	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
  	'%BooleanPrototype%': ['Boolean', 'prototype'],
  	'%DataViewPrototype%': ['DataView', 'prototype'],
  	'%DatePrototype%': ['Date', 'prototype'],
  	'%ErrorPrototype%': ['Error', 'prototype'],
  	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
  	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
  	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
  	'%FunctionPrototype%': ['Function', 'prototype'],
  	'%Generator%': ['GeneratorFunction', 'prototype'],
  	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
  	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
  	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
  	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
  	'%JSONParse%': ['JSON', 'parse'],
  	'%JSONStringify%': ['JSON', 'stringify'],
  	'%MapPrototype%': ['Map', 'prototype'],
  	'%NumberPrototype%': ['Number', 'prototype'],
  	'%ObjectPrototype%': ['Object', 'prototype'],
  	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
  	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
  	'%PromisePrototype%': ['Promise', 'prototype'],
  	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
  	'%Promise_all%': ['Promise', 'all'],
  	'%Promise_reject%': ['Promise', 'reject'],
  	'%Promise_resolve%': ['Promise', 'resolve'],
  	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
  	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
  	'%RegExpPrototype%': ['RegExp', 'prototype'],
  	'%SetPrototype%': ['Set', 'prototype'],
  	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
  	'%StringPrototype%': ['String', 'prototype'],
  	'%SymbolPrototype%': ['Symbol', 'prototype'],
  	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
  	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
  	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
  	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
  	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
  	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
  	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
  	'%URIErrorPrototype%': ['URIError', 'prototype'],
  	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
  	'%WeakSetPrototype%': ['WeakSet', 'prototype']
  };

  var bind = functionBind;
  var hasOwn = requireSrc();
  var $concat = bind.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
  var $replace = bind.call(Function.call, String.prototype.replace);
  var $strSlice = bind.call(Function.call, String.prototype.slice);
  var $exec = bind.call(Function.call, RegExp.prototype.exec);

  /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
  var stringToPath = function stringToPath(string) {
  	var first = $strSlice(string, 0, 1);
  	var last = $strSlice(string, -1);
  	if (first === '%' && last !== '%') {
  		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
  	} else if (last === '%' && first !== '%') {
  		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
  	}
  	var result = [];
  	$replace(string, rePropName, function (match, number, quote, subString) {
  		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
  	});
  	return result;
  };
  /* end adaptation */

  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  	var intrinsicName = name;
  	var alias;
  	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
  		alias = LEGACY_ALIASES[intrinsicName];
  		intrinsicName = '%' + alias[0] + '%';
  	}

  	if (hasOwn(INTRINSICS$1, intrinsicName)) {
  		var value = INTRINSICS$1[intrinsicName];
  		if (value === needsEval) {
  			value = doEval(intrinsicName);
  		}
  		if (typeof value === 'undefined' && !allowMissing) {
  			throw new $TypeError$8('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
  		}

  		return {
  			alias: alias,
  			name: intrinsicName,
  			value: value
  		};
  	}

  	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
  };

  var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  	if (typeof name !== 'string' || name.length === 0) {
  		throw new $TypeError$8('intrinsic name must be a non-empty string');
  	}
  	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
  		throw new $TypeError$8('"allowMissing" argument must be a boolean');
  	}

  	if ($exec(/^%?[^%]*%?$/, name) === null) {
  		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
  	}
  	var parts = stringToPath(name);
  	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

  	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
  	var intrinsicRealName = intrinsic.name;
  	var value = intrinsic.value;
  	var skipFurtherCaching = false;

  	var alias = intrinsic.alias;
  	if (alias) {
  		intrinsicBaseName = alias[0];
  		$spliceApply(parts, $concat([0, 1], alias));
  	}

  	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
  		var part = parts[i];
  		var first = $strSlice(part, 0, 1);
  		var last = $strSlice(part, -1);
  		if (
  			(
  				(first === '"' || first === "'" || first === '`')
  				|| (last === '"' || last === "'" || last === '`')
  			)
  			&& first !== last
  		) {
  			throw new $SyntaxError('property names with quotes must have matching quotes');
  		}
  		if (part === 'constructor' || !isOwn) {
  			skipFurtherCaching = true;
  		}

  		intrinsicBaseName += '.' + part;
  		intrinsicRealName = '%' + intrinsicBaseName + '%';

  		if (hasOwn(INTRINSICS$1, intrinsicRealName)) {
  			value = INTRINSICS$1[intrinsicRealName];
  		} else if (value != null) {
  			if (!(part in value)) {
  				if (!allowMissing) {
  					throw new $TypeError$8('base intrinsic for ' + name + ' exists, but the property is not available.');
  				}
  				return void undefined$1;
  			}
  			if ($gOPD && (i + 1) >= parts.length) {
  				var desc = $gOPD(value, part);
  				isOwn = !!desc;

  				// By convention, when a data property is converted to an accessor
  				// property to emulate a data property that does not suffer from
  				// the override mistake, that accessor's getter is marked with
  				// an `originalValue` property. Here, when we detect this, we
  				// uphold the illusion by pretending to see that original data
  				// property, i.e., returning the value rather than the getter
  				// itself.
  				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
  					value = desc.get;
  				} else {
  					value = value[part];
  				}
  			} else {
  				isOwn = hasOwn(value, part);
  				value = value[part];
  			}

  			if (isOwn && !skipFurtherCaching) {
  				INTRINSICS$1[intrinsicRealName] = value;
  			}
  		}
  	}
  	return value;
  };

  var callBind$2 = {exports: {}};

  (function (module) {

  	var bind = functionBind;
  	var GetIntrinsic = getIntrinsic;

  	var $apply = GetIntrinsic('%Function.prototype.apply%');
  	var $call = GetIntrinsic('%Function.prototype.call%');
  	var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

  	var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
  	var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
  	var $max = GetIntrinsic('%Math.max%');

  	if ($defineProperty) {
  		try {
  			$defineProperty({}, 'a', { value: 1 });
  		} catch (e) {
  			// IE 8 has a broken defineProperty
  			$defineProperty = null;
  		}
  	}

  	module.exports = function callBind(originalFunction) {
  		var func = $reflectApply(bind, $call, arguments);
  		if ($gOPD && $defineProperty) {
  			var desc = $gOPD(func, 'length');
  			if (desc.configurable) {
  				// original length, plus the receiver, minus any additional arguments (after the receiver)
  				$defineProperty(
  					func,
  					'length',
  					{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
  				);
  			}
  		}
  		return func;
  	};

  	var applyBind = function applyBind() {
  		return $reflectApply(bind, $apply, arguments);
  	};

  	if ($defineProperty) {
  		$defineProperty(module.exports, 'apply', { value: applyBind });
  	} else {
  		module.exports.apply = applyBind;
  	} 
  } (callBind$2));

  var callBindExports = callBind$2.exports;

  var GetIntrinsic$e = getIntrinsic;

  var callBind$1 = callBindExports;

  var $indexOf = callBind$1(GetIntrinsic$e('String.prototype.indexOf'));

  var callBound$2 = function callBoundIntrinsic(name, allowMissing) {
  	var intrinsic = GetIntrinsic$e(name, !!allowMissing);
  	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
  		return callBind$1(intrinsic);
  	}
  	return intrinsic;
  };

  var callBound$3 = /*@__PURE__*/getDefaultExportFromCjs(callBound$2);

  var GetIntrinsic$d = getIntrinsic;

  var $Array = GetIntrinsic$d('%Array%');

  // eslint-disable-next-line global-require
  var toStr$3 = !$Array.isArray && callBound$2('Object.prototype.toString');

  var IsArray$3 = $Array.isArray || function IsArray(argument) {
  	return toStr$3(argument) === '[object Array]';
  };

  // https://262.ecma-international.org/6.0/#sec-isarray
  var IsArray$1 = IsArray$3;

  var IsArray$2 = /*@__PURE__*/getDefaultExportFromCjs(IsArray$1);

  var GetIntrinsic$c = getIntrinsic;
  var callBound$1 = callBound$2;

  var $TypeError$7 = GetIntrinsic$c('%TypeError%');

  var IsArray = IsArray$1;

  var $apply = GetIntrinsic$c('%Reflect.apply%', true) || callBound$1('Function.prototype.apply');

  // https://262.ecma-international.org/6.0/#sec-call

  var Call = function Call(F, V) {
  	var argumentsList = arguments.length > 2 ? arguments[2] : [];
  	if (!IsArray(argumentsList)) {
  		throw new $TypeError$7('Assertion failed: optional `argumentsList`, if provided, must be a List');
  	}
  	return $apply(F, V, argumentsList);
  };

  var Call$1 = /*@__PURE__*/getDefaultExportFromCjs(Call);

  // https://262.ecma-international.org/6.0/#sec-ispropertykey

  var IsPropertyKey$4 = function IsPropertyKey(argument) {
  	return typeof argument === 'string' || typeof argument === 'symbol';
  };

  var IsPropertyKey$5 = /*@__PURE__*/getDefaultExportFromCjs(IsPropertyKey$4);

  var gopd;
  var hasRequiredGopd;

  function requireGopd () {
  	if (hasRequiredGopd) return gopd;
  	hasRequiredGopd = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

  	if ($gOPD) {
  		try {
  			$gOPD([], 'length');
  		} catch (e) {
  			// IE 8 has a broken gOPD
  			$gOPD = null;
  		}
  	}

  	gopd = $gOPD;
  	return gopd;
  }

  var isPropertyDescriptor;
  var hasRequiredIsPropertyDescriptor;

  function requireIsPropertyDescriptor () {
  	if (hasRequiredIsPropertyDescriptor) return isPropertyDescriptor;
  	hasRequiredIsPropertyDescriptor = 1;

  	var GetIntrinsic = getIntrinsic;

  	var has = requireSrc();
  	var $TypeError = GetIntrinsic('%TypeError%');

  	isPropertyDescriptor = function IsPropertyDescriptor(ES, Desc) {
  		if (ES.Type(Desc) !== 'Object') {
  			return false;
  		}
  		var allowed = {
  			'[[Configurable]]': true,
  			'[[Enumerable]]': true,
  			'[[Get]]': true,
  			'[[Set]]': true,
  			'[[Value]]': true,
  			'[[Writable]]': true
  		};

  		for (var key in Desc) { // eslint-disable-line no-restricted-syntax
  			if (has(Desc, key) && !allowed[key]) {
  				return false;
  			}
  		}

  		if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
  			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
  		}
  		return true;
  	};
  	return isPropertyDescriptor;
  }

  // https://262.ecma-international.org/5.1/#sec-8

  var Type$7 = function Type(x) {
  	if (x === null) {
  		return 'Null';
  	}
  	if (typeof x === 'undefined') {
  		return 'Undefined';
  	}
  	if (typeof x === 'function' || typeof x === 'object') {
  		return 'Object';
  	}
  	if (typeof x === 'number') {
  		return 'Number';
  	}
  	if (typeof x === 'boolean') {
  		return 'Boolean';
  	}
  	if (typeof x === 'string') {
  		return 'String';
  	}
  };

  var ES5Type = Type$7;

  // https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values

  var Type$5 = function Type(x) {
  	if (typeof x === 'symbol') {
  		return 'Symbol';
  	}
  	if (typeof x === 'bigint') {
  		return 'BigInt';
  	}
  	return ES5Type(x);
  };

  var Type$6 = /*@__PURE__*/getDefaultExportFromCjs(Type$5);

  var isMatchRecord;
  var hasRequiredIsMatchRecord;

  function requireIsMatchRecord () {
  	if (hasRequiredIsMatchRecord) return isMatchRecord;
  	hasRequiredIsMatchRecord = 1;

  	var has = requireSrc();

  	// https://262.ecma-international.org/13.0/#sec-match-records

  	isMatchRecord = function isMatchRecord(record) {
  		return (
  			has(record, '[[StartIndex]]')
  	        && has(record, '[[EndIndex]]')
  	        && record['[[StartIndex]]'] >= 0
  	        && record['[[EndIndex]]'] >= record['[[StartIndex]]']
  	        && String(parseInt(record['[[StartIndex]]'], 10)) === String(record['[[StartIndex]]'])
  	        && String(parseInt(record['[[EndIndex]]'], 10)) === String(record['[[EndIndex]]'])
  		);
  	};
  	return isMatchRecord;
  }

  var assertRecord;
  var hasRequiredAssertRecord;

  function requireAssertRecord () {
  	if (hasRequiredAssertRecord) return assertRecord;
  	hasRequiredAssertRecord = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $TypeError = GetIntrinsic('%TypeError%');
  	var $SyntaxError = GetIntrinsic('%SyntaxError%');

  	var has = requireSrc();

  	var isMatchRecord = requireIsMatchRecord();

  	var predicates = {
  		// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
  		'Property Descriptor': function isPropertyDescriptor(Desc) {
  			var allowed = {
  				'[[Configurable]]': true,
  				'[[Enumerable]]': true,
  				'[[Get]]': true,
  				'[[Set]]': true,
  				'[[Value]]': true,
  				'[[Writable]]': true
  			};

  			if (!Desc) {
  				return false;
  			}
  			for (var key in Desc) { // eslint-disable-line
  				if (has(Desc, key) && !allowed[key]) {
  					return false;
  				}
  			}

  			var isData = has(Desc, '[[Value]]');
  			var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
  			if (isData && IsAccessor) {
  				throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
  			}
  			return true;
  		},
  		// https://262.ecma-international.org/13.0/#sec-match-records
  		'Match Record': isMatchRecord,
  		'Iterator Record': function isIteratorRecord(value) {
  			return has(value, '[[Iterator]]') && has(value, '[[NextMethod]]') && has(value, '[[Done]]');
  		},
  		'PromiseCapability Record': function isPromiseCapabilityRecord(value) {
  			return !!value
  				&& has(value, '[[Resolve]]')
  				&& typeof value['[[Resolve]]'] === 'function'
  				&& has(value, '[[Reject]]')
  				&& typeof value['[[Reject]]'] === 'function'
  				&& has(value, '[[Promise]]')
  				&& value['[[Promise]]']
  				&& typeof value['[[Promise]]'].then === 'function';
  		},
  		'AsyncGeneratorRequest Record': function isAsyncGeneratorRequestRecord(value) {
  			return !!value
  				&& has(value, '[[Completion]]') // TODO: confirm is a completion record
  				&& has(value, '[[Capability]]')
  				&& predicates['PromiseCapability Record'](value['[[Capability]]']);
  		}
  	};

  	assertRecord = function assertRecord(Type, recordType, argumentName, value) {
  		var predicate = predicates[recordType];
  		if (typeof predicate !== 'function') {
  			throw new $SyntaxError('unknown record type: ' + recordType);
  		}
  		if (Type(value) !== 'Object' || !predicate(value)) {
  			throw new $TypeError(argumentName + ' must be a ' + recordType);
  		}
  	};
  	return assertRecord;
  }

  var IsAccessorDescriptor;
  var hasRequiredIsAccessorDescriptor;

  function requireIsAccessorDescriptor () {
  	if (hasRequiredIsAccessorDescriptor) return IsAccessorDescriptor;
  	hasRequiredIsAccessorDescriptor = 1;

  	var has = requireSrc();

  	var Type = Type$5;

  	var assertRecord = requireAssertRecord();

  	// https://262.ecma-international.org/5.1/#sec-8.10.1

  	IsAccessorDescriptor = function IsAccessorDescriptor(Desc) {
  		if (typeof Desc === 'undefined') {
  			return false;
  		}

  		assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

  		if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
  			return false;
  		}

  		return true;
  	};
  	return IsAccessorDescriptor;
  }

  var IsDataDescriptor;
  var hasRequiredIsDataDescriptor;

  function requireIsDataDescriptor () {
  	if (hasRequiredIsDataDescriptor) return IsDataDescriptor;
  	hasRequiredIsDataDescriptor = 1;

  	var has = requireSrc();

  	var Type = Type$5;

  	var assertRecord = requireAssertRecord();

  	// https://262.ecma-international.org/5.1/#sec-8.10.2

  	IsDataDescriptor = function IsDataDescriptor(Desc) {
  		if (typeof Desc === 'undefined') {
  			return false;
  		}

  		assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

  		if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
  			return false;
  		}

  		return true;
  	};
  	return IsDataDescriptor;
  }

  var isPrimitive$4;
  var hasRequiredIsPrimitive;

  function requireIsPrimitive () {
  	if (hasRequiredIsPrimitive) return isPrimitive$4;
  	hasRequiredIsPrimitive = 1;

  	isPrimitive$4 = function isPrimitive(value) {
  		return value === null || (typeof value !== 'function' && typeof value !== 'object');
  	};
  	return isPrimitive$4;
  }

  var IsExtensible;
  var hasRequiredIsExtensible;

  function requireIsExtensible () {
  	if (hasRequiredIsExtensible) return IsExtensible;
  	hasRequiredIsExtensible = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $preventExtensions = GetIntrinsic('%Object.preventExtensions%', true);
  	var $isExtensible = GetIntrinsic('%Object.isExtensible%', true);

  	var isPrimitive = requireIsPrimitive();

  	// https://262.ecma-international.org/6.0/#sec-isextensible-o

  	IsExtensible = $preventExtensions
  		? function IsExtensible(obj) {
  			return !isPrimitive(obj) && $isExtensible(obj);
  		}
  		: function IsExtensible(obj) {
  			return !isPrimitive(obj);
  		};
  	return IsExtensible;
  }

  var ToBoolean;
  var hasRequiredToBoolean;

  function requireToBoolean () {
  	if (hasRequiredToBoolean) return ToBoolean;
  	hasRequiredToBoolean = 1;

  	// http://262.ecma-international.org/5.1/#sec-9.2

  	ToBoolean = function ToBoolean(value) { return !!value; };
  	return ToBoolean;
  }

  var fnToStr = Function.prototype.toString;
  var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
  var badArrayLike;
  var isCallableMarker;
  if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
  	try {
  		badArrayLike = Object.defineProperty({}, 'length', {
  			get: function () {
  				throw isCallableMarker;
  			}
  		});
  		isCallableMarker = {};
  		// eslint-disable-next-line no-throw-literal
  		reflectApply(function () { throw 42; }, null, badArrayLike);
  	} catch (_) {
  		if (_ !== isCallableMarker) {
  			reflectApply = null;
  		}
  	}
  } else {
  	reflectApply = null;
  }

  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
  	try {
  		var fnStr = fnToStr.call(value);
  		return constructorRegex.test(fnStr);
  	} catch (e) {
  		return false; // not a function
  	}
  };

  var tryFunctionObject = function tryFunctionToStr(value) {
  	try {
  		if (isES6ClassFn(value)) { return false; }
  		fnToStr.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr$2 = Object.prototype.toString;
  var objectClass = '[object Object]';
  var fnClass = '[object Function]';
  var genClass = '[object GeneratorFunction]';
  var ddaClass = '[object HTMLAllCollection]'; // IE 11
  var ddaClass2 = '[object HTML document.all class]';
  var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
  var hasToStringTag$1 = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

  var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

  var isDDA = function isDocumentDotAll() { return false; };
  if (typeof document === 'object') {
  	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
  	var all = document.all;
  	if (toStr$2.call(all) === toStr$2.call(document.all)) {
  		isDDA = function isDocumentDotAll(value) {
  			/* globals document: false */
  			// in IE 6-8, typeof document.all is "object" and it's truthy
  			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
  				try {
  					var str = toStr$2.call(value);
  					return (
  						str === ddaClass
  						|| str === ddaClass2
  						|| str === ddaClass3 // opera 12.16
  						|| str === objectClass // IE 6-8
  					) && value('') == null; // eslint-disable-line eqeqeq
  				} catch (e) { /**/ }
  			}
  			return false;
  		};
  	}
  }

  var isCallable$1 = reflectApply
  	? function isCallable(value) {
  		if (isDDA(value)) { return true; }
  		if (!value) { return false; }
  		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  		try {
  			reflectApply(value, null, badArrayLike);
  		} catch (e) {
  			if (e !== isCallableMarker) { return false; }
  		}
  		return !isES6ClassFn(value) && tryFunctionObject(value);
  	}
  	: function isCallable(value) {
  		if (isDDA(value)) { return true; }
  		if (!value) { return false; }
  		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  		if (hasToStringTag$1) { return tryFunctionObject(value); }
  		if (isES6ClassFn(value)) { return false; }
  		var strClass = toStr$2.call(value);
  		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
  		return tryFunctionObject(value);
  	};

  var IsCallable$1;
  var hasRequiredIsCallable;

  function requireIsCallable () {
  	if (hasRequiredIsCallable) return IsCallable$1;
  	hasRequiredIsCallable = 1;

  	// http://262.ecma-international.org/5.1/#sec-9.11

  	IsCallable$1 = isCallable$1;
  	return IsCallable$1;
  }

  var ToPropertyDescriptor;
  var hasRequiredToPropertyDescriptor;

  function requireToPropertyDescriptor () {
  	if (hasRequiredToPropertyDescriptor) return ToPropertyDescriptor;
  	hasRequiredToPropertyDescriptor = 1;

  	var has = requireSrc();

  	var GetIntrinsic = getIntrinsic;

  	var $TypeError = GetIntrinsic('%TypeError%');

  	var Type = Type$5;
  	var ToBoolean = requireToBoolean();
  	var IsCallable = requireIsCallable();

  	// https://262.ecma-international.org/5.1/#sec-8.10.5

  	ToPropertyDescriptor = function ToPropertyDescriptor(Obj) {
  		if (Type(Obj) !== 'Object') {
  			throw new $TypeError('ToPropertyDescriptor requires an object');
  		}

  		var desc = {};
  		if (has(Obj, 'enumerable')) {
  			desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
  		}
  		if (has(Obj, 'configurable')) {
  			desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
  		}
  		if (has(Obj, 'value')) {
  			desc['[[Value]]'] = Obj.value;
  		}
  		if (has(Obj, 'writable')) {
  			desc['[[Writable]]'] = ToBoolean(Obj.writable);
  		}
  		if (has(Obj, 'get')) {
  			var getter = Obj.get;
  			if (typeof getter !== 'undefined' && !IsCallable(getter)) {
  				throw new $TypeError('getter must be a function');
  			}
  			desc['[[Get]]'] = getter;
  		}
  		if (has(Obj, 'set')) {
  			var setter = Obj.set;
  			if (typeof setter !== 'undefined' && !IsCallable(setter)) {
  				throw new $TypeError('setter must be a function');
  			}
  			desc['[[Set]]'] = setter;
  		}

  		if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
  			throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  		}
  		return desc;
  	};
  	return ToPropertyDescriptor;
  }

  var _isNaN = Number.isNaN || function isNaN(a) {
  	return a !== a;
  };

  var $isNaN$3 = _isNaN;

  // http://262.ecma-international.org/5.1/#sec-9.12

  var SameValue = function SameValue(x, y) {
  	if (x === y) { // 0 === -0, but they are not identical.
  		if (x === 0) { return 1 / x === 1 / y; }
  		return true;
  	}
  	return $isNaN$3(x) && $isNaN$3(y);
  };

  var SameValue$1 = /*@__PURE__*/getDefaultExportFromCjs(SameValue);

  var hasPropertyDescriptors_1;
  var hasRequiredHasPropertyDescriptors;

  function requireHasPropertyDescriptors () {
  	if (hasRequiredHasPropertyDescriptors) return hasPropertyDescriptors_1;
  	hasRequiredHasPropertyDescriptors = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

  	var hasPropertyDescriptors = function hasPropertyDescriptors() {
  		if ($defineProperty) {
  			try {
  				$defineProperty({}, 'a', { value: 1 });
  				return true;
  			} catch (e) {
  				// IE 8 has a broken defineProperty
  				return false;
  			}
  		}
  		return false;
  	};

  	hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  		// node v0.6 has a bug where array lengths can be Set but not Defined
  		if (!hasPropertyDescriptors()) {
  			return null;
  		}
  		try {
  			return $defineProperty([], 'length', { value: 1 }).length !== 1;
  		} catch (e) {
  			// In Firefox 4-22, defining length on an array throws an exception.
  			return true;
  		}
  	};

  	hasPropertyDescriptors_1 = hasPropertyDescriptors;
  	return hasPropertyDescriptors_1;
  }

  var DefineOwnProperty;
  var hasRequiredDefineOwnProperty;

  function requireDefineOwnProperty () {
  	if (hasRequiredDefineOwnProperty) return DefineOwnProperty;
  	hasRequiredDefineOwnProperty = 1;

  	var hasPropertyDescriptors = requireHasPropertyDescriptors();

  	var GetIntrinsic = getIntrinsic;

  	var $defineProperty = hasPropertyDescriptors() && GetIntrinsic('%Object.defineProperty%', true);

  	var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();

  	// eslint-disable-next-line global-require
  	var isArray = hasArrayLengthDefineBug && IsArray$3;

  	var callBound = callBound$2;

  	var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

  	// eslint-disable-next-line max-params
  	DefineOwnProperty = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
  		if (!$defineProperty) {
  			if (!IsDataDescriptor(desc)) {
  				// ES3 does not support getters/setters
  				return false;
  			}
  			if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
  				return false;
  			}

  			// fallback for ES3
  			if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
  				// a non-enumerable existing property
  				return false;
  			}

  			// property does not exist at all, or exists but is enumerable
  			var V = desc['[[Value]]'];
  			// eslint-disable-next-line no-param-reassign
  			O[P] = V; // will use [[Define]]
  			return SameValue(O[P], V);
  		}
  		if (
  			hasArrayLengthDefineBug
  			&& P === 'length'
  			&& '[[Value]]' in desc
  			&& isArray(O)
  			&& O.length !== desc['[[Value]]']
  		) {
  			// eslint-disable-next-line no-param-reassign
  			O.length = desc['[[Value]]'];
  			return O.length === desc['[[Value]]'];
  		}

  		$defineProperty(O, P, FromPropertyDescriptor(desc));
  		return true;
  	};
  	return DefineOwnProperty;
  }

  var isFullyPopulatedPropertyDescriptor;
  var hasRequiredIsFullyPopulatedPropertyDescriptor;

  function requireIsFullyPopulatedPropertyDescriptor () {
  	if (hasRequiredIsFullyPopulatedPropertyDescriptor) return isFullyPopulatedPropertyDescriptor;
  	hasRequiredIsFullyPopulatedPropertyDescriptor = 1;

  	isFullyPopulatedPropertyDescriptor = function isFullyPopulatedPropertyDescriptor(ES, Desc) {
  		return !!Desc
  			&& typeof Desc === 'object'
  			&& '[[Enumerable]]' in Desc
  			&& '[[Configurable]]' in Desc
  			&& (ES.IsAccessorDescriptor(Desc) || ES.IsDataDescriptor(Desc));
  	};
  	return isFullyPopulatedPropertyDescriptor;
  }

  var fromPropertyDescriptor;
  var hasRequiredFromPropertyDescriptor$1;

  function requireFromPropertyDescriptor$1 () {
  	if (hasRequiredFromPropertyDescriptor$1) return fromPropertyDescriptor;
  	hasRequiredFromPropertyDescriptor$1 = 1;

  	fromPropertyDescriptor = function fromPropertyDescriptor(Desc) {
  		if (typeof Desc === 'undefined') {
  			return Desc;
  		}
  		var obj = {};
  		if ('[[Value]]' in Desc) {
  			obj.value = Desc['[[Value]]'];
  		}
  		if ('[[Writable]]' in Desc) {
  			obj.writable = !!Desc['[[Writable]]'];
  		}
  		if ('[[Get]]' in Desc) {
  			obj.get = Desc['[[Get]]'];
  		}
  		if ('[[Set]]' in Desc) {
  			obj.set = Desc['[[Set]]'];
  		}
  		if ('[[Enumerable]]' in Desc) {
  			obj.enumerable = !!Desc['[[Enumerable]]'];
  		}
  		if ('[[Configurable]]' in Desc) {
  			obj.configurable = !!Desc['[[Configurable]]'];
  		}
  		return obj;
  	};
  	return fromPropertyDescriptor;
  }

  var FromPropertyDescriptor;
  var hasRequiredFromPropertyDescriptor;

  function requireFromPropertyDescriptor () {
  	if (hasRequiredFromPropertyDescriptor) return FromPropertyDescriptor;
  	hasRequiredFromPropertyDescriptor = 1;

  	var assertRecord = requireAssertRecord();
  	var fromPropertyDescriptor = requireFromPropertyDescriptor$1();

  	var Type = Type$5;

  	// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor

  	FromPropertyDescriptor = function FromPropertyDescriptor(Desc) {
  		if (typeof Desc !== 'undefined') {
  			assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
  		}

  		return fromPropertyDescriptor(Desc);
  	};
  	return FromPropertyDescriptor;
  }

  var IsGenericDescriptor;
  var hasRequiredIsGenericDescriptor;

  function requireIsGenericDescriptor () {
  	if (hasRequiredIsGenericDescriptor) return IsGenericDescriptor;
  	hasRequiredIsGenericDescriptor = 1;

  	var assertRecord = requireAssertRecord();

  	var IsAccessorDescriptor = requireIsAccessorDescriptor();
  	var IsDataDescriptor = requireIsDataDescriptor();
  	var Type = Type$5;

  	// https://262.ecma-international.org/6.0/#sec-isgenericdescriptor

  	IsGenericDescriptor = function IsGenericDescriptor(Desc) {
  		if (typeof Desc === 'undefined') {
  			return false;
  		}

  		assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

  		if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
  			return true;
  		}

  		return false;
  	};
  	return IsGenericDescriptor;
  }

  var ValidateAndApplyPropertyDescriptor;
  var hasRequiredValidateAndApplyPropertyDescriptor;

  function requireValidateAndApplyPropertyDescriptor () {
  	if (hasRequiredValidateAndApplyPropertyDescriptor) return ValidateAndApplyPropertyDescriptor;
  	hasRequiredValidateAndApplyPropertyDescriptor = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $TypeError = GetIntrinsic('%TypeError%');

  	var DefineOwnProperty = requireDefineOwnProperty();
  	var isFullyPopulatedPropertyDescriptor = requireIsFullyPopulatedPropertyDescriptor();
  	var isPropertyDescriptor = requireIsPropertyDescriptor();

  	var FromPropertyDescriptor = requireFromPropertyDescriptor();
  	var IsAccessorDescriptor = requireIsAccessorDescriptor();
  	var IsDataDescriptor = requireIsDataDescriptor();
  	var IsGenericDescriptor = requireIsGenericDescriptor();
  	var IsPropertyKey = IsPropertyKey$4;
  	var SameValue$1 = SameValue;
  	var Type = Type$5;

  	// https://262.ecma-international.org/13.0/#sec-validateandapplypropertydescriptor

  	// see https://github.com/tc39/ecma262/pull/2468 for ES2022 changes

  	// eslint-disable-next-line max-lines-per-function, max-statements, max-params
  	ValidateAndApplyPropertyDescriptor = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
  		var oType = Type(O);
  		if (oType !== 'Undefined' && oType !== 'Object') {
  			throw new $TypeError('Assertion failed: O must be undefined or an Object');
  		}
  		if (!IsPropertyKey(P)) {
  			throw new $TypeError('Assertion failed: P must be a Property Key');
  		}
  		if (Type(extensible) !== 'Boolean') {
  			throw new $TypeError('Assertion failed: extensible must be a Boolean');
  		}
  		if (!isPropertyDescriptor({
  			Type: Type,
  			IsDataDescriptor: IsDataDescriptor,
  			IsAccessorDescriptor: IsAccessorDescriptor
  		}, Desc)) {
  			throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
  		}
  		if (Type(current) !== 'Undefined' && !isPropertyDescriptor({
  			Type: Type,
  			IsDataDescriptor: IsDataDescriptor,
  			IsAccessorDescriptor: IsAccessorDescriptor
  		}, current)) {
  			throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
  		}

  		if (Type(current) === 'Undefined') { // step 2
  			if (!extensible) {
  				return false; // step 2.a
  			}
  			if (oType === 'Undefined') {
  				return true; // step 2.b
  			}
  			if (IsAccessorDescriptor(Desc)) { // step 2.c
  				return DefineOwnProperty(
  					IsDataDescriptor,
  					SameValue$1,
  					FromPropertyDescriptor,
  					O,
  					P,
  					Desc
  				);
  			}
  			// step 2.d
  			return DefineOwnProperty(
  				IsDataDescriptor,
  				SameValue$1,
  				FromPropertyDescriptor,
  				O,
  				P,
  				{
  					'[[Configurable]]': !!Desc['[[Configurable]]'],
  					'[[Enumerable]]': !!Desc['[[Enumerable]]'],
  					'[[Value]]': Desc['[[Value]]'],
  					'[[Writable]]': !!Desc['[[Writable]]']
  				}
  			);
  		}

  		// 3. Assert: current is a fully populated Property Descriptor.
  		if (!isFullyPopulatedPropertyDescriptor({
  			IsAccessorDescriptor: IsAccessorDescriptor,
  			IsDataDescriptor: IsDataDescriptor
  		}, current)) {
  			throw new $TypeError('`current`, when present, must be a fully populated and valid Property Descriptor');
  		}

  		// 4. If every field in Desc is absent, return true.
  		// this can't really match the assertion that it's a Property Descriptor in our JS implementation

  		// 5. If current.[[Configurable]] is false, then
  		if (!current['[[Configurable]]']) {
  			if ('[[Configurable]]' in Desc && Desc['[[Configurable]]']) {
  				// step 5.a
  				return false;
  			}
  			if ('[[Enumerable]]' in Desc && !SameValue$1(Desc['[[Enumerable]]'], current['[[Enumerable]]'])) {
  				// step 5.b
  				return false;
  			}
  			if (!IsGenericDescriptor(Desc) && !SameValue$1(IsAccessorDescriptor(Desc), IsAccessorDescriptor(current))) {
  				// step 5.c
  				return false;
  			}
  			if (IsAccessorDescriptor(current)) { // step 5.d
  				if ('[[Get]]' in Desc && !SameValue$1(Desc['[[Get]]'], current['[[Get]]'])) {
  					return false;
  				}
  				if ('[[Set]]' in Desc && !SameValue$1(Desc['[[Set]]'], current['[[Set]]'])) {
  					return false;
  				}
  			} else if (!current['[[Writable]]']) { // step 5.e
  				if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
  					return false;
  				}
  				if ('[[Value]]' in Desc && !SameValue$1(Desc['[[Value]]'], current['[[Value]]'])) {
  					return false;
  				}
  			}
  		}

  		// 6. If O is not undefined, then
  		if (oType !== 'Undefined') {
  			var configurable;
  			var enumerable;
  			if (IsDataDescriptor(current) && IsAccessorDescriptor(Desc)) { // step 6.a
  				configurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];
  				enumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];
  				// Replace the property named P of object O with an accessor property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.
  				return DefineOwnProperty(
  					IsDataDescriptor,
  					SameValue$1,
  					FromPropertyDescriptor,
  					O,
  					P,
  					{
  						'[[Configurable]]': !!configurable,
  						'[[Enumerable]]': !!enumerable,
  						'[[Get]]': ('[[Get]]' in Desc ? Desc : current)['[[Get]]'],
  						'[[Set]]': ('[[Set]]' in Desc ? Desc : current)['[[Set]]']
  					}
  				);
  			} else if (IsAccessorDescriptor(current) && IsDataDescriptor(Desc)) {
  				configurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];
  				enumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];
  				// i. Replace the property named P of object O with a data property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.
  				return DefineOwnProperty(
  					IsDataDescriptor,
  					SameValue$1,
  					FromPropertyDescriptor,
  					O,
  					P,
  					{
  						'[[Configurable]]': !!configurable,
  						'[[Enumerable]]': !!enumerable,
  						'[[Value]]': ('[[Value]]' in Desc ? Desc : current)['[[Value]]'],
  						'[[Writable]]': !!('[[Writable]]' in Desc ? Desc : current)['[[Writable]]']
  					}
  				);
  			}

  			// For each field of Desc that is present, set the corresponding attribute of the property named P of object O to the value of the field.
  			return DefineOwnProperty(
  				IsDataDescriptor,
  				SameValue$1,
  				FromPropertyDescriptor,
  				O,
  				P,
  				Desc
  			);
  		}

  		return true; // step 7
  	};
  	return ValidateAndApplyPropertyDescriptor;
  }

  var OrdinaryDefineOwnProperty;
  var hasRequiredOrdinaryDefineOwnProperty;

  function requireOrdinaryDefineOwnProperty () {
  	if (hasRequiredOrdinaryDefineOwnProperty) return OrdinaryDefineOwnProperty;
  	hasRequiredOrdinaryDefineOwnProperty = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $gOPD = requireGopd();
  	var $SyntaxError = GetIntrinsic('%SyntaxError%');
  	var $TypeError = GetIntrinsic('%TypeError%');

  	var isPropertyDescriptor = requireIsPropertyDescriptor();

  	var IsAccessorDescriptor = requireIsAccessorDescriptor();
  	var IsDataDescriptor = requireIsDataDescriptor();
  	var IsExtensible = requireIsExtensible();
  	var IsPropertyKey = IsPropertyKey$4;
  	var ToPropertyDescriptor = requireToPropertyDescriptor();
  	var SameValue$1 = SameValue;
  	var Type = Type$5;
  	var ValidateAndApplyPropertyDescriptor = requireValidateAndApplyPropertyDescriptor();

  	// https://262.ecma-international.org/6.0/#sec-ordinarydefineownproperty

  	OrdinaryDefineOwnProperty = function OrdinaryDefineOwnProperty(O, P, Desc) {
  		if (Type(O) !== 'Object') {
  			throw new $TypeError('Assertion failed: O must be an Object');
  		}
  		if (!IsPropertyKey(P)) {
  			throw new $TypeError('Assertion failed: P must be a Property Key');
  		}
  		if (!isPropertyDescriptor({
  			Type: Type,
  			IsDataDescriptor: IsDataDescriptor,
  			IsAccessorDescriptor: IsAccessorDescriptor
  		}, Desc)) {
  			throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
  		}
  		if (!$gOPD) {
  			// ES3/IE 8 fallback
  			if (IsAccessorDescriptor(Desc)) {
  				throw new $SyntaxError('This environment does not support accessor property descriptors.');
  			}
  			var creatingNormalDataProperty = !(P in O)
  				&& Desc['[[Writable]]']
  				&& Desc['[[Enumerable]]']
  				&& Desc['[[Configurable]]']
  				&& '[[Value]]' in Desc;
  			var settingExistingDataProperty = (P in O)
  				&& (!('[[Configurable]]' in Desc) || Desc['[[Configurable]]'])
  				&& (!('[[Enumerable]]' in Desc) || Desc['[[Enumerable]]'])
  				&& (!('[[Writable]]' in Desc) || Desc['[[Writable]]'])
  				&& '[[Value]]' in Desc;
  			if (creatingNormalDataProperty || settingExistingDataProperty) {
  				O[P] = Desc['[[Value]]']; // eslint-disable-line no-param-reassign
  				return SameValue$1(O[P], Desc['[[Value]]']);
  			}
  			throw new $SyntaxError('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');
  		}
  		var desc = $gOPD(O, P);
  		var current = desc && ToPropertyDescriptor(desc);
  		var extensible = IsExtensible(O);
  		return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
  	};
  	return OrdinaryDefineOwnProperty;
  }

  var CreateDataProperty$1;
  var hasRequiredCreateDataProperty;

  function requireCreateDataProperty () {
  	if (hasRequiredCreateDataProperty) return CreateDataProperty$1;
  	hasRequiredCreateDataProperty = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $TypeError = GetIntrinsic('%TypeError%');

  	var IsPropertyKey = IsPropertyKey$4;
  	var OrdinaryDefineOwnProperty = requireOrdinaryDefineOwnProperty();
  	var Type = Type$5;

  	// https://262.ecma-international.org/6.0/#sec-createdataproperty

  	CreateDataProperty$1 = function CreateDataProperty(O, P, V) {
  		if (Type(O) !== 'Object') {
  			throw new $TypeError('Assertion failed: Type(O) is not Object');
  		}
  		if (!IsPropertyKey(P)) {
  			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
  		}
  		var newDesc = {
  			'[[Configurable]]': true,
  			'[[Enumerable]]': true,
  			'[[Value]]': V,
  			'[[Writable]]': true
  		};
  		return OrdinaryDefineOwnProperty(O, P, newDesc);
  	};
  	return CreateDataProperty$1;
  }

  var GetIntrinsic$b = getIntrinsic;

  var $TypeError$6 = GetIntrinsic$b('%TypeError%');

  var CreateDataProperty = requireCreateDataProperty();
  var IsPropertyKey$3 = IsPropertyKey$4;
  var Type$4 = Type$5;

  // // https://262.ecma-international.org/6.0/#sec-createdatapropertyorthrow

  var CreateDataPropertyOrThrow = function CreateDataPropertyOrThrow(O, P, V) {
  	if (Type$4(O) !== 'Object') {
  		throw new $TypeError$6('Assertion failed: Type(O) is not Object');
  	}
  	if (!IsPropertyKey$3(P)) {
  		throw new $TypeError$6('Assertion failed: IsPropertyKey(P) is not true');
  	}
  	var success = CreateDataProperty(O, P, V);
  	if (!success) {
  		throw new $TypeError$6('unable to create data property');
  	}
  	return success;
  };

  var CreateDataPropertyOrThrow$1 = /*@__PURE__*/getDefaultExportFromCjs(CreateDataPropertyOrThrow);

  var global$1 = (typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window : {});

  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var inited = false;
  function init () {
    inited = true;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
  }

  function toByteArray (b64) {
    if (!inited) {
      init();
    }
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;

    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

    // base64 is 4/3 + up to two characters of the original data
    arr = new Arr(len * 3 / 4 - placeHolders);

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? len - 4 : len;

    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = (tmp >> 16) & 0xFF;
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr
  }

  function tripletToBase64 (num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
  }

  function encodeChunk (uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
      output.push(tripletToBase64(tmp));
    }
    return output.join('')
  }

  function fromByteArray (uint8) {
    if (!inited) {
      init();
    }
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[(tmp << 4) & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
      output += lookup[tmp >> 10];
      output += lookup[(tmp >> 4) & 0x3F];
      output += lookup[(tmp << 2) & 0x3F];
      output += '=';
    }

    parts.push(output);

    return parts.join('')
  }

  function read (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity)
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
  }

  function write (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  }

  var toString = {}.toString;

  var isArray$1 = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */

  var INSPECT_MAX_BYTES = 50;

  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.

   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */
  Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
    ? global$1.TYPED_ARRAY_SUPPORT
    : true;

  /*
   * Export kMaxLength after typed array support is determined.
   */
  kMaxLength();

  function kMaxLength () {
    return Buffer.TYPED_ARRAY_SUPPORT
      ? 0x7fffffff
      : 0x3fffffff
  }

  function createBuffer (that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length')
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = new Uint8Array(length);
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      if (that === null) {
        that = new Buffer(length);
      }
      that.length = length;
    }

    return that
  }

  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */

  function Buffer (arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
      return new Buffer(arg, encodingOrOffset, length)
    }

    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error(
          'If encoding is specified then the first argument must be a string'
        )
      }
      return allocUnsafe(this, arg)
    }
    return from(this, arg, encodingOrOffset, length)
  }

  Buffer.poolSize = 8192; // not used by this implementation

  // TODO: Legacy, not needed anymore. Remove in next major version.
  Buffer._augment = function (arr) {
    arr.__proto__ = Buffer.prototype;
    return arr
  };

  function from (that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number')
    }

    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length)
    }

    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset)
    }

    return fromObject(that, value)
  }

  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length)
  };

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  }

  function assertSize (size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number')
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative')
    }
  }

  function alloc (that, size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(that, size)
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string'
        ? createBuffer(that, size).fill(fill, encoding)
        : createBuffer(that, size).fill(fill)
    }
    return createBuffer(that, size)
  }

  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding)
  };

  function allocUnsafe (that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }
    return that
  }

  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(null, size)
  };
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size)
  };

  function fromString (that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }

    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding')
    }

    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);

    var actual = that.write(string, encoding);

    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      that = that.slice(0, actual);
    }

    return that
  }

  function fromArrayLike (that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that
  }

  function fromArrayBuffer (that, array, byteOffset, length) {
    array.byteLength; // this throws if `array` is not a valid ArrayBuffer

    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds')
    }

    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds')
    }

    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array);
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = array;
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromArrayLike(that, array);
    }
    return that
  }

  function fromObject (that, obj) {
    if (internalIsBuffer(obj)) {
      var len = checked(obj.length) | 0;
      that = createBuffer(that, len);

      if (that.length === 0) {
        return that
      }

      obj.copy(that, 0, 0, len);
      return that
    }

    if (obj) {
      if ((typeof ArrayBuffer !== 'undefined' &&
          obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0)
        }
        return fromArrayLike(that, obj)
      }

      if (obj.type === 'Buffer' && isArray$1(obj.data)) {
        return fromArrayLike(that, obj.data)
      }
    }

    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
  }

  function checked (length) {
    // Note: cannot use `length < kMaxLength()` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                           'size: 0x' + kMaxLength().toString(16) + ' bytes')
    }
    return length | 0
  }
  Buffer.isBuffer = isBuffer$1;
  function internalIsBuffer (b) {
    return !!(b != null && b._isBuffer)
  }

  Buffer.compare = function compare (a, b) {
    if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
      throw new TypeError('Arguments must be Buffers')
    }

    if (a === b) return 0

    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break
      }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
  };

  Buffer.isEncoding = function isEncoding (encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true
      default:
        return false
    }
  };

  Buffer.concat = function concat (list, length) {
    if (!isArray$1(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }

    if (list.length === 0) {
      return Buffer.alloc(0)
    }

    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if (!internalIsBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer
  };

  function byteLength (string, encoding) {
    if (internalIsBuffer(string)) {
      return string.length
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength
    }
    if (typeof string !== 'string') {
      string = '' + string;
    }

    var len = string.length;
    if (len === 0) return 0

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2
        case 'hex':
          return len >>> 1
        case 'base64':
          return base64ToBytes(string).length
        default:
          if (loweredCase) return utf8ToBytes(string).length // assume utf8
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;

  function slowToString (encoding, start, end) {
    var loweredCase = false;

    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.

    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return ''
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return ''
    }

    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
      return ''
    }

    if (!encoding) encoding = 'utf8';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end)

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end)

        case 'ascii':
          return asciiSlice(this, start, end)

        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end)

        case 'base64':
          return base64Slice(this, start, end)

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end)

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
  // Buffer instances.
  Buffer.prototype._isBuffer = true;

  function swap (b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }

  Buffer.prototype.swap16 = function swap16 () {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this
  };

  Buffer.prototype.swap32 = function swap32 () {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this
  };

  Buffer.prototype.swap64 = function swap64 () {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this
  };

  Buffer.prototype.toString = function toString () {
    var length = this.length | 0;
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice(this, 0, length)
    return slowToString.apply(this, arguments)
  };

  Buffer.prototype.equals = function equals (b) {
    if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer.compare(this, b) === 0
  };

  Buffer.prototype.inspect = function inspect () {
    var str = '';
    var max = INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>'
  };

  Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
    if (!internalIsBuffer(target)) {
      throw new TypeError('Argument must be a Buffer')
    }

    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index')
    }

    if (thisStart >= thisEnd && start >= end) {
      return 0
    }
    if (thisStart >= thisEnd) {
      return -1
    }
    if (start >= end) {
      return 1
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;

    if (this === target) return 0

    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);

    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break
      }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
  };

  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1

    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;  // Coerce to Number.
    if (isNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : (buffer.length - 1);
    }

    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir) return -1
      else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;
      else return -1
    }

    // Normalize val
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding);
    }

    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (internalIsBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
      val = val & 0xFF; // Search for a byte value [0-255]
      if (Buffer.TYPED_ARRAY_SUPPORT &&
          typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
        }
      }
      return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
    }

    throw new TypeError('val must be string, number or Buffer')
  }

  function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }

    function read (buf, i) {
      if (indexSize === 1) {
        return buf[i]
      } else {
        return buf.readUInt16BE(i * indexSize)
      }
    }

    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break
          }
        }
        if (found) return i
      }
    }

    return -1
  }

  Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
  };

  Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
  };

  Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
  };

  function hexWrite (buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) return i
      buf[offset + i] = parsed;
    }
    return i
  }

  function utf8Write (buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
  }

  function asciiWrite (buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length)
  }

  function latin1Write (buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length)
  }

  function base64Write (buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length)
  }

  function ucs2Write (buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
  }

  Buffer.prototype.write = function write (string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds')
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length)

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length)

        case 'ascii':
          return asciiWrite(this, string, offset, length)

        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length)

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length)

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length)

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer.prototype.toJSON = function toJSON () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  };

  function base64Slice (buf, start, end) {
    if (start === 0 && end === buf.length) {
      return fromByteArray(buf)
    } else {
      return fromByteArray(buf.slice(start, end))
    }
  }

  function utf8Slice (buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4
        : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
        : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res)
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray (codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      );
    }
    return res
  }

  function asciiSlice (buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret
  }

  function latin1Slice (buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret
  }

  function hexSlice (buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i]);
    }
    return out
  }

  function utf16leSlice (buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res
  }

  Buffer.prototype.slice = function slice (start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;

    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }

    return newBuf
  };

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset (offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  }

  Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val
  };

  Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val
  };

  Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset]
  };

  Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8)
  };

  Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1]
  };

  Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
  };

  Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
  };

  Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val
  };

  Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val
  };

  Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
  };

  Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  };

  Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  };

  Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
  };

  Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
  };

  Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, true, 23, 4)
  };

  Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, false, 23, 4)
  };

  Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, true, 52, 8)
  };

  Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, false, 52, 8)
  };

  function checkInt (buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
  }

  Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1
  };

  function objectWriteUInt16 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
        (littleEndian ? i : 1 - i) * 8;
    }
  }

  Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2
  };

  Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2
  };

  function objectWriteUInt32 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }

  Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4
  };

  Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4
  };

  Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1
  };

  Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2
  };

  Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2
  };

  Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4
  };

  Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4
  };

  function checkIEEE754 (buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
  }

  function writeFloat (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4
  }

  Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert)
  };

  Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert)
  };

  function writeDouble (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8
  }

  Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert)
  };

  Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert)
  };

  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy (target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, start + len),
        targetStart
      );
    }

    return len
  };

  // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])
  Buffer.prototype.fill = function fill (val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (code < 256) {
          val = code;
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string')
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index')
    }

    if (end <= start) {
      return this
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;

    if (!val) val = 0;

    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = internalIsBuffer(val)
        ? val
        : utf8ToBytes(new Buffer(val, encoding).toString());
      var len = bytes.length;
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this
  };

  // HELPER FUNCTIONS
  // ================

  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

  function base64clean (str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return ''
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str
  }

  function stringtrim (str) {
    if (str.trim) return str.trim()
    return str.replace(/^\s+|\s+$/g, '')
  }

  function toHex (n) {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
  }

  function utf8ToBytes (string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue
          }

          // valid lead
          leadSurrogate = codePoint;

          continue
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        );
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        );
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        );
      } else {
        throw new Error('Invalid code point')
      }
    }

    return bytes
  }

  function asciiToBytes (str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray
  }

  function utf16leToBytes (str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break

      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray
  }


  function base64ToBytes (str) {
    return toByteArray(base64clean(str))
  }

  function blitBuffer (src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length)) break
      dst[i + offset] = src[i];
    }
    return i
  }

  function isnan (val) {
    return val !== val // eslint-disable-line no-self-compare
  }


  // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  function isBuffer$1(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
  }

  function isFastBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
  }

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  function nextTick(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  }
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues
  var versions = {};
  var release = {};
  var config = {};

  function noop() {}

  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;

  function binding(name) {
      throw new Error('process.binding is not supported');
  }

  function cwd () { return '/' }
  function chdir (dir) {
      throw new Error('process.chdir is not supported');
  }function umask() { return 0; }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  var performanceNow =
    performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime(previousTimestamp){
    var clocktime = performanceNow.call(performance)*1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime%1)*1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds<0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds,nanoseconds]
  }

  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }

  var browser$1 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  var process = browser$1;

  var inherits;
  if (typeof Object.create === 'function'){
    inherits = function inherits(ctor, superCtor) {
      // implementation from standard node.js 'util' module
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  var inherits$1 = inherits;

  var formatRegExp = /%[sdj%]/g;
  function format$1(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect$2(arguments[i]));
      }
      return objects.join(' ');
    }

    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === '%%') return '%';
      if (i >= len) return x;
      switch (x) {
        case '%s': return String(args[i++]);
        case '%d': return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect$2(x);
      }
    }
    return str;
  }

  // Mark that a method should not be used.
  // Returns a modified function which warns once by default.
  // If --no-deprecation is set, then it is a no-op.
  function deprecate(fn, msg) {
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global$1.process)) {
      return function() {
        return deprecate(fn, msg).apply(this, arguments);
      };
    }

    if (process.noDeprecation === true) {
      return fn;
    }

    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }

    return deprecated;
  }

  var debugs = {};
  var debugEnviron;
  function debuglog(set) {
    if (isUndefined(debugEnviron))
      debugEnviron = process.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = 0;
        debugs[set] = function() {
          var msg = format$1.apply(null, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function() {};
      }
    }
    return debugs[set];
  }

  /**
   * Echos the value of a value. Trys to print the value out
   * in the best way possible given the different types.
   *
   * @param {Object} obj The object to print out.
   * @param {Object} opts Optional options object that alters the output.
   */
  /* legacy: obj, showHidden, depth, colors*/
  function inspect$2(obj, opts) {
    // default options
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      // legacy...
      ctx.showHidden = opts;
    } else if (opts) {
      // got an "options" object
      _extend(ctx, opts);
    }
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }

  // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
  inspect$2.colors = {
    'bold' : [1, 22],
    'italic' : [3, 23],
    'underline' : [4, 24],
    'inverse' : [7, 27],
    'white' : [37, 39],
    'grey' : [90, 39],
    'black' : [30, 39],
    'blue' : [34, 39],
    'cyan' : [36, 39],
    'green' : [32, 39],
    'magenta' : [35, 39],
    'red' : [31, 39],
    'yellow' : [33, 39]
  };

  // Don't use 'blue' not visible on cmd.exe
  inspect$2.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
  };


  function stylizeWithColor(str, styleType) {
    var style = inspect$2.styles[styleType];

    if (style) {
      return '\u001b[' + inspect$2.colors[style][0] + 'm' + str +
             '\u001b[' + inspect$2.colors[style][1] + 'm';
    } else {
      return str;
    }
  }


  function stylizeNoColor(str, styleType) {
    return str;
  }


  function arrayToHash(array) {
    var hash = {};

    array.forEach(function(val, idx) {
      hash[val] = true;
    });

    return hash;
  }


  function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect &&
        value &&
        isFunction(value.inspect) &&
        // Filter out the util module, it's inspect function is special
        value.inspect !== inspect$2 &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }

    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }

    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);

    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }

    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value)
        && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    }

    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate$1(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError(value)) {
        return formatError(value);
      }
    }

    var base = '', array = false, braces = ['{', '}'];

    // Make Array say that they are Array
    if (isArray(value)) {
      array = true;
      braces = ['[', ']'];
    }

    // Make functions say that they are functions
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }

    // Make RegExps say that they are RegExps
    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }

    // Make dates with properties first say the date
    if (isDate$1(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }

    // Make error with message first say the error
    if (isError(value)) {
      base = ' ' + formatError(value);
    }

    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }

    ctx.seen.push(value);

    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }

    ctx.seen.pop();

    return reduceToSingleString(output, base, braces);
  }


  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber(value))
      return ctx.stylize('' + value, 'number');
    if (isBoolean(value))
      return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value))
      return ctx.stylize('null', 'null');
  }


  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }


  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            key, true));
      }
    });
    return output;
  }


  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function(line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function(line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'")
                   .replace(/\\"/g, '"')
                   .replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }

    return name + ': ' + str;
  }


  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);

    if (length > 60) {
      return braces[0] +
             (base === '' ? '' : base + '\n ') +
             ' ' +
             output.join(',\n  ') +
             ' ' +
             braces[1];
    }

    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }


  // NOTE: These type checking functions intentionally don't use `instanceof`
  // because it is fragile and can be easily faked with `Object.create()`.
  function isArray(ar) {
    return Array.isArray(ar);
  }

  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }

  function isNull(arg) {
    return arg === null;
  }

  function isNullOrUndefined(arg) {
    return arg == null;
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isString(arg) {
    return typeof arg === 'string';
  }

  function isSymbol$2(arg) {
    return typeof arg === 'symbol';
  }

  function isUndefined(arg) {
    return arg === void 0;
  }

  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isDate$1(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }

  function isError(e) {
    return isObject(e) &&
        (objectToString(e) === '[object Error]' || e instanceof Error);
  }

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isPrimitive$3(arg) {
    return arg === null ||
           typeof arg === 'boolean' ||
           typeof arg === 'number' ||
           typeof arg === 'string' ||
           typeof arg === 'symbol' ||  // ES6 symbol
           typeof arg === 'undefined';
  }

  function isBuffer(maybeBuf) {
    return Buffer.isBuffer(maybeBuf);
  }

  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }


  function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }


  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'];

  // 26 Feb 16:19:34
  function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()),
                pad(d.getMinutes()),
                pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
  }


  // log is just a thin wrapper to console.log that prepends a timestamp
  function log() {
    console.log('%s - %s', timestamp(), format$1.apply(null, arguments));
  }

  function _extend(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;

    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var util = {
    inherits: inherits$1,
    _extend: _extend,
    log: log,
    isBuffer: isBuffer,
    isPrimitive: isPrimitive$3,
    isFunction: isFunction,
    isError: isError,
    isDate: isDate$1,
    isObject: isObject,
    isRegExp: isRegExp,
    isUndefined: isUndefined,
    isSymbol: isSymbol$2,
    isString: isString,
    isNumber: isNumber,
    isNullOrUndefined: isNullOrUndefined,
    isNull: isNull,
    isBoolean: isBoolean,
    isArray: isArray,
    inspect: inspect$2,
    deprecate: deprecate,
    format: format$1,
    debuglog: debuglog
  };

  var util$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _extend: _extend,
    debuglog: debuglog,
    default: util,
    deprecate: deprecate,
    format: format$1,
    inherits: inherits$1,
    inspect: inspect$2,
    isArray: isArray,
    isBoolean: isBoolean,
    isBuffer: isBuffer,
    isDate: isDate$1,
    isError: isError,
    isFunction: isFunction,
    isNull: isNull,
    isNullOrUndefined: isNullOrUndefined,
    isNumber: isNumber,
    isObject: isObject,
    isPrimitive: isPrimitive$3,
    isRegExp: isRegExp,
    isString: isString,
    isSymbol: isSymbol$2,
    isUndefined: isUndefined,
    log: log
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(util$1);

  var util_inspect;
  var hasRequiredUtil_inspect;

  function requireUtil_inspect () {
  	if (hasRequiredUtil_inspect) return util_inspect;
  	hasRequiredUtil_inspect = 1;
  	util_inspect = require$$0.inspect;
  	return util_inspect;
  }

  var objectInspect;
  var hasRequiredObjectInspect;

  function requireObjectInspect () {
  	if (hasRequiredObjectInspect) return objectInspect;
  	hasRequiredObjectInspect = 1;
  	var hasMap = typeof Map === 'function' && Map.prototype;
  	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
  	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
  	var mapForEach = hasMap && Map.prototype.forEach;
  	var hasSet = typeof Set === 'function' && Set.prototype;
  	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
  	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
  	var setForEach = hasSet && Set.prototype.forEach;
  	var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
  	var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  	var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
  	var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  	var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
  	var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  	var booleanValueOf = Boolean.prototype.valueOf;
  	var objectToString = Object.prototype.toString;
  	var functionToString = Function.prototype.toString;
  	var $match = String.prototype.match;
  	var $slice = String.prototype.slice;
  	var $replace = String.prototype.replace;
  	var $toUpperCase = String.prototype.toUpperCase;
  	var $toLowerCase = String.prototype.toLowerCase;
  	var $test = RegExp.prototype.test;
  	var $concat = Array.prototype.concat;
  	var $join = Array.prototype.join;
  	var $arrSlice = Array.prototype.slice;
  	var $floor = Math.floor;
  	var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
  	var gOPS = Object.getOwnPropertySymbols;
  	var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
  	var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
  	// ie, `has-tostringtag/shams
  	var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
  	    ? Symbol.toStringTag
  	    : null;
  	var isEnumerable = Object.prototype.propertyIsEnumerable;

  	var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
  	    [].__proto__ === Array.prototype // eslint-disable-line no-proto
  	        ? function (O) {
  	            return O.__proto__; // eslint-disable-line no-proto
  	        }
  	        : null
  	);

  	function addNumericSeparator(num, str) {
  	    if (
  	        num === Infinity
  	        || num === -Infinity
  	        || num !== num
  	        || (num && num > -1000 && num < 1000)
  	        || $test.call(/e/, str)
  	    ) {
  	        return str;
  	    }
  	    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  	    if (typeof num === 'number') {
  	        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
  	        if (int !== num) {
  	            var intStr = String(int);
  	            var dec = $slice.call(str, intStr.length + 1);
  	            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
  	        }
  	    }
  	    return $replace.call(str, sepRegex, '$&_');
  	}

  	var utilInspect = requireUtil_inspect();
  	var inspectCustom = utilInspect.custom;
  	var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

  	objectInspect = function inspect_(obj, options, depth, seen) {
  	    var opts = options || {};

  	    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
  	        throw new TypeError('option "quoteStyle" must be "single" or "double"');
  	    }
  	    if (
  	        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
  	            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
  	            : opts.maxStringLength !== null
  	        )
  	    ) {
  	        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  	    }
  	    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
  	    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
  	        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
  	    }

  	    if (
  	        has(opts, 'indent')
  	        && opts.indent !== null
  	        && opts.indent !== '\t'
  	        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
  	    ) {
  	        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  	    }
  	    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
  	        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  	    }
  	    var numericSeparator = opts.numericSeparator;

  	    if (typeof obj === 'undefined') {
  	        return 'undefined';
  	    }
  	    if (obj === null) {
  	        return 'null';
  	    }
  	    if (typeof obj === 'boolean') {
  	        return obj ? 'true' : 'false';
  	    }

  	    if (typeof obj === 'string') {
  	        return inspectString(obj, opts);
  	    }
  	    if (typeof obj === 'number') {
  	        if (obj === 0) {
  	            return Infinity / obj > 0 ? '0' : '-0';
  	        }
  	        var str = String(obj);
  	        return numericSeparator ? addNumericSeparator(obj, str) : str;
  	    }
  	    if (typeof obj === 'bigint') {
  	        var bigIntStr = String(obj) + 'n';
  	        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  	    }

  	    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
  	    if (typeof depth === 'undefined') { depth = 0; }
  	    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
  	        return isArray(obj) ? '[Array]' : '[Object]';
  	    }

  	    var indent = getIndent(opts, depth);

  	    if (typeof seen === 'undefined') {
  	        seen = [];
  	    } else if (indexOf(seen, obj) >= 0) {
  	        return '[Circular]';
  	    }

  	    function inspect(value, from, noIndent) {
  	        if (from) {
  	            seen = $arrSlice.call(seen);
  	            seen.push(from);
  	        }
  	        if (noIndent) {
  	            var newOpts = {
  	                depth: opts.depth
  	            };
  	            if (has(opts, 'quoteStyle')) {
  	                newOpts.quoteStyle = opts.quoteStyle;
  	            }
  	            return inspect_(value, newOpts, depth + 1, seen);
  	        }
  	        return inspect_(value, opts, depth + 1, seen);
  	    }

  	    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
  	        var name = nameOf(obj);
  	        var keys = arrObjKeys(obj, inspect);
  	        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
  	    }
  	    if (isSymbol(obj)) {
  	        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
  	        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
  	    }
  	    if (isElement(obj)) {
  	        var s = '<' + $toLowerCase.call(String(obj.nodeName));
  	        var attrs = obj.attributes || [];
  	        for (var i = 0; i < attrs.length; i++) {
  	            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
  	        }
  	        s += '>';
  	        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
  	        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
  	        return s;
  	    }
  	    if (isArray(obj)) {
  	        if (obj.length === 0) { return '[]'; }
  	        var xs = arrObjKeys(obj, inspect);
  	        if (indent && !singleLineValues(xs)) {
  	            return '[' + indentedJoin(xs, indent) + ']';
  	        }
  	        return '[ ' + $join.call(xs, ', ') + ' ]';
  	    }
  	    if (isError(obj)) {
  	        var parts = arrObjKeys(obj, inspect);
  	        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
  	            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
  	        }
  	        if (parts.length === 0) { return '[' + String(obj) + ']'; }
  	        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
  	    }
  	    if (typeof obj === 'object' && customInspect) {
  	        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
  	            return utilInspect(obj, { depth: maxDepth - depth });
  	        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
  	            return obj.inspect();
  	        }
  	    }
  	    if (isMap(obj)) {
  	        var mapParts = [];
  	        if (mapForEach) {
  	            mapForEach.call(obj, function (value, key) {
  	                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
  	            });
  	        }
  	        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
  	    }
  	    if (isSet(obj)) {
  	        var setParts = [];
  	        if (setForEach) {
  	            setForEach.call(obj, function (value) {
  	                setParts.push(inspect(value, obj));
  	            });
  	        }
  	        return collectionOf('Set', setSize.call(obj), setParts, indent);
  	    }
  	    if (isWeakMap(obj)) {
  	        return weakCollectionOf('WeakMap');
  	    }
  	    if (isWeakSet(obj)) {
  	        return weakCollectionOf('WeakSet');
  	    }
  	    if (isWeakRef(obj)) {
  	        return weakCollectionOf('WeakRef');
  	    }
  	    if (isNumber(obj)) {
  	        return markBoxed(inspect(Number(obj)));
  	    }
  	    if (isBigInt(obj)) {
  	        return markBoxed(inspect(bigIntValueOf.call(obj)));
  	    }
  	    if (isBoolean(obj)) {
  	        return markBoxed(booleanValueOf.call(obj));
  	    }
  	    if (isString(obj)) {
  	        return markBoxed(inspect(String(obj)));
  	    }
  	    if (!isDate(obj) && !isRegExp(obj)) {
  	        var ys = arrObjKeys(obj, inspect);
  	        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
  	        var protoTag = obj instanceof Object ? '' : 'null prototype';
  	        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
  	        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
  	        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
  	        if (ys.length === 0) { return tag + '{}'; }
  	        if (indent) {
  	            return tag + '{' + indentedJoin(ys, indent) + '}';
  	        }
  	        return tag + '{ ' + $join.call(ys, ', ') + ' }';
  	    }
  	    return String(obj);
  	};

  	function wrapQuotes(s, defaultStyle, opts) {
  	    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
  	    return quoteChar + s + quoteChar;
  	}

  	function quote(s) {
  	    return $replace.call(String(s), /"/g, '&quot;');
  	}

  	function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  	function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  	function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  	function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  	function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  	function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
  	function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

  	// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
  	function isSymbol(obj) {
  	    if (hasShammedSymbols) {
  	        return obj && typeof obj === 'object' && obj instanceof Symbol;
  	    }
  	    if (typeof obj === 'symbol') {
  	        return true;
  	    }
  	    if (!obj || typeof obj !== 'object' || !symToString) {
  	        return false;
  	    }
  	    try {
  	        symToString.call(obj);
  	        return true;
  	    } catch (e) {}
  	    return false;
  	}

  	function isBigInt(obj) {
  	    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
  	        return false;
  	    }
  	    try {
  	        bigIntValueOf.call(obj);
  	        return true;
  	    } catch (e) {}
  	    return false;
  	}

  	var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
  	function has(obj, key) {
  	    return hasOwn.call(obj, key);
  	}

  	function toStr(obj) {
  	    return objectToString.call(obj);
  	}

  	function nameOf(f) {
  	    if (f.name) { return f.name; }
  	    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
  	    if (m) { return m[1]; }
  	    return null;
  	}

  	function indexOf(xs, x) {
  	    if (xs.indexOf) { return xs.indexOf(x); }
  	    for (var i = 0, l = xs.length; i < l; i++) {
  	        if (xs[i] === x) { return i; }
  	    }
  	    return -1;
  	}

  	function isMap(x) {
  	    if (!mapSize || !x || typeof x !== 'object') {
  	        return false;
  	    }
  	    try {
  	        mapSize.call(x);
  	        try {
  	            setSize.call(x);
  	        } catch (s) {
  	            return true;
  	        }
  	        return x instanceof Map; // core-js workaround, pre-v2.5.0
  	    } catch (e) {}
  	    return false;
  	}

  	function isWeakMap(x) {
  	    if (!weakMapHas || !x || typeof x !== 'object') {
  	        return false;
  	    }
  	    try {
  	        weakMapHas.call(x, weakMapHas);
  	        try {
  	            weakSetHas.call(x, weakSetHas);
  	        } catch (s) {
  	            return true;
  	        }
  	        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
  	    } catch (e) {}
  	    return false;
  	}

  	function isWeakRef(x) {
  	    if (!weakRefDeref || !x || typeof x !== 'object') {
  	        return false;
  	    }
  	    try {
  	        weakRefDeref.call(x);
  	        return true;
  	    } catch (e) {}
  	    return false;
  	}

  	function isSet(x) {
  	    if (!setSize || !x || typeof x !== 'object') {
  	        return false;
  	    }
  	    try {
  	        setSize.call(x);
  	        try {
  	            mapSize.call(x);
  	        } catch (m) {
  	            return true;
  	        }
  	        return x instanceof Set; // core-js workaround, pre-v2.5.0
  	    } catch (e) {}
  	    return false;
  	}

  	function isWeakSet(x) {
  	    if (!weakSetHas || !x || typeof x !== 'object') {
  	        return false;
  	    }
  	    try {
  	        weakSetHas.call(x, weakSetHas);
  	        try {
  	            weakMapHas.call(x, weakMapHas);
  	        } catch (s) {
  	            return true;
  	        }
  	        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
  	    } catch (e) {}
  	    return false;
  	}

  	function isElement(x) {
  	    if (!x || typeof x !== 'object') { return false; }
  	    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
  	        return true;
  	    }
  	    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
  	}

  	function inspectString(str, opts) {
  	    if (str.length > opts.maxStringLength) {
  	        var remaining = str.length - opts.maxStringLength;
  	        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
  	        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
  	    }
  	    // eslint-disable-next-line no-control-regex
  	    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
  	    return wrapQuotes(s, 'single', opts);
  	}

  	function lowbyte(c) {
  	    var n = c.charCodeAt(0);
  	    var x = {
  	        8: 'b',
  	        9: 't',
  	        10: 'n',
  	        12: 'f',
  	        13: 'r'
  	    }[n];
  	    if (x) { return '\\' + x; }
  	    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
  	}

  	function markBoxed(str) {
  	    return 'Object(' + str + ')';
  	}

  	function weakCollectionOf(type) {
  	    return type + ' { ? }';
  	}

  	function collectionOf(type, size, entries, indent) {
  	    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
  	    return type + ' (' + size + ') {' + joinedEntries + '}';
  	}

  	function singleLineValues(xs) {
  	    for (var i = 0; i < xs.length; i++) {
  	        if (indexOf(xs[i], '\n') >= 0) {
  	            return false;
  	        }
  	    }
  	    return true;
  	}

  	function getIndent(opts, depth) {
  	    var baseIndent;
  	    if (opts.indent === '\t') {
  	        baseIndent = '\t';
  	    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
  	        baseIndent = $join.call(Array(opts.indent + 1), ' ');
  	    } else {
  	        return null;
  	    }
  	    return {
  	        base: baseIndent,
  	        prev: $join.call(Array(depth + 1), baseIndent)
  	    };
  	}

  	function indentedJoin(xs, indent) {
  	    if (xs.length === 0) { return ''; }
  	    var lineJoiner = '\n' + indent.prev + indent.base;
  	    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
  	}

  	function arrObjKeys(obj, inspect) {
  	    var isArr = isArray(obj);
  	    var xs = [];
  	    if (isArr) {
  	        xs.length = obj.length;
  	        for (var i = 0; i < obj.length; i++) {
  	            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
  	        }
  	    }
  	    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
  	    var symMap;
  	    if (hasShammedSymbols) {
  	        symMap = {};
  	        for (var k = 0; k < syms.length; k++) {
  	            symMap['$' + syms[k]] = syms[k];
  	        }
  	    }

  	    for (var key in obj) { // eslint-disable-line no-restricted-syntax
  	        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
  	        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
  	        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
  	            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
  	            continue; // eslint-disable-line no-restricted-syntax, no-continue
  	        } else if ($test.call(/[^\w$]/, key)) {
  	            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
  	        } else {
  	            xs.push(key + ': ' + inspect(obj[key], obj));
  	        }
  	    }
  	    if (typeof gOPS === 'function') {
  	        for (var j = 0; j < syms.length; j++) {
  	            if (isEnumerable.call(obj, syms[j])) {
  	                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
  	            }
  	        }
  	    }
  	    return xs;
  	}
  	return objectInspect;
  }

  var GetIntrinsic$a = getIntrinsic;

  var $TypeError$5 = GetIntrinsic$a('%TypeError%');

  var inspect$1 = requireObjectInspect();

  var IsPropertyKey$2 = IsPropertyKey$4;
  var Type$3 = Type$5;

  // https://262.ecma-international.org/6.0/#sec-get-o-p

  var Get = function Get(O, P) {
  	// 7.3.1.1
  	if (Type$3(O) !== 'Object') {
  		throw new $TypeError$5('Assertion failed: Type(O) is not Object');
  	}
  	// 7.3.1.2
  	if (!IsPropertyKey$2(P)) {
  		throw new $TypeError$5('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect$1(P));
  	}
  	// 7.3.1.3
  	return O[P];
  };

  var Get$1 = /*@__PURE__*/getDefaultExportFromCjs(Get);

  var CheckObjectCoercible;
  var hasRequiredCheckObjectCoercible;

  function requireCheckObjectCoercible () {
  	if (hasRequiredCheckObjectCoercible) return CheckObjectCoercible;
  	hasRequiredCheckObjectCoercible = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $TypeError = GetIntrinsic('%TypeError%');

  	// http://262.ecma-international.org/5.1/#sec-9.10

  	CheckObjectCoercible = function CheckObjectCoercible(value, optMessage) {
  		if (value == null) {
  			throw new $TypeError(optMessage || ('Cannot call method on ' + value));
  		}
  		return value;
  	};
  	return CheckObjectCoercible;
  }

  var RequireObjectCoercible$1;
  var hasRequiredRequireObjectCoercible;

  function requireRequireObjectCoercible () {
  	if (hasRequiredRequireObjectCoercible) return RequireObjectCoercible$1;
  	hasRequiredRequireObjectCoercible = 1;

  	RequireObjectCoercible$1 = requireCheckObjectCoercible();
  	return RequireObjectCoercible$1;
  }

  var GetIntrinsic$9 = getIntrinsic;

  var $Object = GetIntrinsic$9('%Object%');

  var RequireObjectCoercible = requireRequireObjectCoercible();

  // https://262.ecma-international.org/6.0/#sec-toobject

  var ToObject = function ToObject(value) {
  	RequireObjectCoercible(value);
  	return $Object(value);
  };

  var ToObject$1 = /*@__PURE__*/getDefaultExportFromCjs(ToObject);

  var GetV$1;
  var hasRequiredGetV;

  function requireGetV () {
  	if (hasRequiredGetV) return GetV$1;
  	hasRequiredGetV = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $TypeError = GetIntrinsic('%TypeError%');

  	var IsPropertyKey = IsPropertyKey$4;
  	var ToObject$1 = ToObject;

  	// https://262.ecma-international.org/6.0/#sec-getv

  	GetV$1 = function GetV(V, P) {
  		// 7.3.2.1
  		if (!IsPropertyKey(P)) {
  			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
  		}

  		// 7.3.2.2-3
  		var O = ToObject$1(V);

  		// 7.3.2.4
  		return O[P];
  	};
  	return GetV$1;
  }

  var GetIntrinsic$8 = getIntrinsic;

  var $TypeError$4 = GetIntrinsic$8('%TypeError%');

  var GetV = requireGetV();
  var IsCallable = requireIsCallable();
  var IsPropertyKey$1 = IsPropertyKey$4;

  var inspect = requireObjectInspect();

  // https://262.ecma-international.org/6.0/#sec-getmethod

  var GetMethod$1 = function GetMethod(O, P) {
  	// 7.3.9.1
  	if (!IsPropertyKey$1(P)) {
  		throw new $TypeError$4('Assertion failed: IsPropertyKey(P) is not true');
  	}

  	// 7.3.9.2
  	var func = GetV(O, P);

  	// 7.3.9.4
  	if (func == null) {
  		return void 0;
  	}

  	// 7.3.9.5
  	if (!IsCallable(func)) {
  		throw new $TypeError$4(inspect(P) + ' is not a function: ' + inspect(func));
  	}

  	// 7.3.9.6
  	return func;
  };

  var GetMethod$2 = /*@__PURE__*/getDefaultExportFromCjs(GetMethod$1);

  var GetIntrinsic$7 = getIntrinsic;

  var $TypeError$3 = GetIntrinsic$7('%TypeError%');

  var has = requireSrc();

  var IsPropertyKey = IsPropertyKey$4;
  var Type$2 = Type$5;

  // https://262.ecma-international.org/6.0/#sec-hasownproperty

  var HasOwnProperty = function HasOwnProperty(O, P) {
  	if (Type$2(O) !== 'Object') {
  		throw new $TypeError$3('Assertion failed: `O` must be an Object');
  	}
  	if (!IsPropertyKey(P)) {
  		throw new $TypeError$3('Assertion failed: `P` must be a Property Key');
  	}
  	return has(O, P);
  };

  var HasOwnProperty$1 = /*@__PURE__*/getDefaultExportFromCjs(HasOwnProperty);

  var GetIntrinsic$6 = getIntrinsic;

  var $abs = GetIntrinsic$6('%Math.abs%');

  // http://262.ecma-international.org/5.1/#sec-5.2

  var abs$2 = function abs(x) {
  	return $abs(x);
  };

  var Type$1 = Type$5;

  // var modulo = require('./modulo');
  var $floor = Math.floor;

  // http://262.ecma-international.org/11.0/#eqn-floor

  var floor$2 = function floor(x) {
  	// return x - modulo(x, 1);
  	if (Type$1(x) === 'BigInt') {
  		return x;
  	}
  	return $floor(x);
  };

  var $isNaN$2 = _isNaN;

  var _isFinite = function (x) { return (typeof x === 'number' || typeof x === 'bigint') && !$isNaN$2(x) && x !== Infinity && x !== -Infinity; };

  var abs$1 = abs$2;
  var floor$1 = floor$2;
  var Type = Type$5;

  var $isNaN$1 = _isNaN;
  var $isFinite$1 = _isFinite;

  // https://tc39.es/ecma262/#sec-isintegralnumber

  var IsIntegralNumber$1 = function IsIntegralNumber(argument) {
  	if (Type(argument) !== 'Number' || $isNaN$1(argument) || !$isFinite$1(argument)) {
  		return false;
  	}
  	var absValue = abs$1(argument);
  	return floor$1(absValue) === absValue;
  };

  var IsIntegralNumber$2 = /*@__PURE__*/getDefaultExportFromCjs(IsIntegralNumber$1);

  var isPrimitive$2 = function isPrimitive(value) {
  	return value === null || (typeof value !== 'function' && typeof value !== 'object');
  };

  var hasSymbols$2 = shams$1;

  var shams = function hasToStringTagShams() {
  	return hasSymbols$2() && !!Symbol.toStringTag;
  };

  var getDay = Date.prototype.getDay;
  var tryDateObject = function tryDateGetDayCall(value) {
  	try {
  		getDay.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };

  var toStr$1 = Object.prototype.toString;
  var dateClass = '[object Date]';
  var hasToStringTag = shams();

  var isDateObject = function isDateObject(value) {
  	if (typeof value !== 'object' || value === null) {
  		return false;
  	}
  	return hasToStringTag ? tryDateObject(value) : toStr$1.call(value) === dateClass;
  };

  var isSymbol$1 = {exports: {}};

  var toStr = Object.prototype.toString;
  var hasSymbols$1 = hasSymbols$4();

  if (hasSymbols$1) {
  	var symToStr = Symbol.prototype.toString;
  	var symStringRegex = /^Symbol\(.*\)$/;
  	var isSymbolObject = function isRealSymbolObject(value) {
  		if (typeof value.valueOf() !== 'symbol') {
  			return false;
  		}
  		return symStringRegex.test(symToStr.call(value));
  	};

  	isSymbol$1.exports = function isSymbol(value) {
  		if (typeof value === 'symbol') {
  			return true;
  		}
  		if (toStr.call(value) !== '[object Symbol]') {
  			return false;
  		}
  		try {
  			return isSymbolObject(value);
  		} catch (e) {
  			return false;
  		}
  	};
  } else {

  	isSymbol$1.exports = function isSymbol(value) {
  		// this environment does not support Symbols.
  		return false ;
  	};
  }

  var isSymbolExports = isSymbol$1.exports;

  var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

  var isPrimitive$1 = isPrimitive$2;
  var isCallable = isCallable$1;
  var isDate = isDateObject;
  var isSymbol = isSymbolExports;

  var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
  	if (typeof O === 'undefined' || O === null) {
  		throw new TypeError('Cannot call method on ' + O);
  	}
  	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
  		throw new TypeError('hint must be "string" or "number"');
  	}
  	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
  	var method, result, i;
  	for (i = 0; i < methodNames.length; ++i) {
  		method = O[methodNames[i]];
  		if (isCallable(method)) {
  			result = method.call(O);
  			if (isPrimitive$1(result)) {
  				return result;
  			}
  		}
  	}
  	throw new TypeError('No default value');
  };

  var GetMethod = function GetMethod(O, P) {
  	var func = O[P];
  	if (func !== null && typeof func !== 'undefined') {
  		if (!isCallable(func)) {
  			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
  		}
  		return func;
  	}
  	return void 0;
  };

  // http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
  var es2015 = function ToPrimitive(input) {
  	if (isPrimitive$1(input)) {
  		return input;
  	}
  	var hint = 'default';
  	if (arguments.length > 1) {
  		if (arguments[1] === String) {
  			hint = 'string';
  		} else if (arguments[1] === Number) {
  			hint = 'number';
  		}
  	}

  	var exoticToPrim;
  	if (hasSymbols) {
  		if (Symbol.toPrimitive) {
  			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
  		} else if (isSymbol(input)) {
  			exoticToPrim = Symbol.prototype.valueOf;
  		}
  	}
  	if (typeof exoticToPrim !== 'undefined') {
  		var result = exoticToPrim.call(input, hint);
  		if (isPrimitive$1(result)) {
  			return result;
  		}
  		throw new TypeError('unable to convert exotic object to primitive');
  	}
  	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
  		hint = 'string';
  	}
  	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
  };

  var toPrimitive = es2015;

  // https://262.ecma-international.org/6.0/#sec-toprimitive

  var ToPrimitive$1 = function ToPrimitive(input) {
  	if (arguments.length > 1) {
  		return toPrimitive(input, arguments[1]);
  	}
  	return toPrimitive(input);
  };

  var ToPrimitive$2 = /*@__PURE__*/getDefaultExportFromCjs(ToPrimitive$1);

  var isRegex;
  var hasRequiredIsRegex;

  function requireIsRegex () {
  	if (hasRequiredIsRegex) return isRegex;
  	hasRequiredIsRegex = 1;

  	var callBound = callBound$2;
  	var hasToStringTag = shams();
  	var has;
  	var $exec;
  	var isRegexMarker;
  	var badStringifier;

  	if (hasToStringTag) {
  		has = callBound('Object.prototype.hasOwnProperty');
  		$exec = callBound('RegExp.prototype.exec');
  		isRegexMarker = {};

  		var throwRegexMarker = function () {
  			throw isRegexMarker;
  		};
  		badStringifier = {
  			toString: throwRegexMarker,
  			valueOf: throwRegexMarker
  		};

  		if (typeof Symbol.toPrimitive === 'symbol') {
  			badStringifier[Symbol.toPrimitive] = throwRegexMarker;
  		}
  	}

  	var $toString = callBound('Object.prototype.toString');
  	var gOPD = Object.getOwnPropertyDescriptor;
  	var regexClass = '[object RegExp]';

  	isRegex = hasToStringTag
  		// eslint-disable-next-line consistent-return
  		? function isRegex(value) {
  			if (!value || typeof value !== 'object') {
  				return false;
  			}

  			var descriptor = gOPD(value, 'lastIndex');
  			var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
  			if (!hasLastIndexDataProperty) {
  				return false;
  			}

  			try {
  				$exec(value, badStringifier);
  			} catch (e) {
  				return e === isRegexMarker;
  			}
  		}
  		: function isRegex(value) {
  			// In older browsers, typeof regex incorrectly returns 'function'
  			if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
  				return false;
  			}

  			return $toString(value) === regexClass;
  		};
  	return isRegex;
  }

  var safeRegexTest;
  var hasRequiredSafeRegexTest;

  function requireSafeRegexTest () {
  	if (hasRequiredSafeRegexTest) return safeRegexTest;
  	hasRequiredSafeRegexTest = 1;

  	var callBound = callBound$2;
  	var GetIntrinsic = getIntrinsic;
  	var isRegex = requireIsRegex();

  	var $exec = callBound('RegExp.prototype.exec');
  	var $TypeError = GetIntrinsic('%TypeError%');

  	safeRegexTest = function regexTester(regex) {
  		if (!isRegex(regex)) {
  			throw new $TypeError('`regex` must be a RegExp');
  		}
  		return function test(s) {
  			return $exec(regex, s) !== null;
  		};
  	};
  	return safeRegexTest;
  }

  var isArguments;
  var hasRequiredIsArguments;

  function requireIsArguments () {
  	if (hasRequiredIsArguments) return isArguments;
  	hasRequiredIsArguments = 1;

  	var toStr = Object.prototype.toString;

  	isArguments = function isArguments(value) {
  		var str = toStr.call(value);
  		var isArgs = str === '[object Arguments]';
  		if (!isArgs) {
  			isArgs = str !== '[object Array]' &&
  				value !== null &&
  				typeof value === 'object' &&
  				typeof value.length === 'number' &&
  				value.length >= 0 &&
  				toStr.call(value.callee) === '[object Function]';
  		}
  		return isArgs;
  	};
  	return isArguments;
  }

  var implementation$1;
  var hasRequiredImplementation$1;

  function requireImplementation$1 () {
  	if (hasRequiredImplementation$1) return implementation$1;
  	hasRequiredImplementation$1 = 1;

  	var keysShim;
  	if (!Object.keys) {
  		// modified from https://github.com/es-shims/es5-shim
  		var has = Object.prototype.hasOwnProperty;
  		var toStr = Object.prototype.toString;
  		var isArgs = requireIsArguments(); // eslint-disable-line global-require
  		var isEnumerable = Object.prototype.propertyIsEnumerable;
  		var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
  		var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  		var dontEnums = [
  			'toString',
  			'toLocaleString',
  			'valueOf',
  			'hasOwnProperty',
  			'isPrototypeOf',
  			'propertyIsEnumerable',
  			'constructor'
  		];
  		var equalsConstructorPrototype = function (o) {
  			var ctor = o.constructor;
  			return ctor && ctor.prototype === o;
  		};
  		var excludedKeys = {
  			$applicationCache: true,
  			$console: true,
  			$external: true,
  			$frame: true,
  			$frameElement: true,
  			$frames: true,
  			$innerHeight: true,
  			$innerWidth: true,
  			$onmozfullscreenchange: true,
  			$onmozfullscreenerror: true,
  			$outerHeight: true,
  			$outerWidth: true,
  			$pageXOffset: true,
  			$pageYOffset: true,
  			$parent: true,
  			$scrollLeft: true,
  			$scrollTop: true,
  			$scrollX: true,
  			$scrollY: true,
  			$self: true,
  			$webkitIndexedDB: true,
  			$webkitStorageInfo: true,
  			$window: true
  		};
  		var hasAutomationEqualityBug = (function () {
  			/* global window */
  			if (typeof window === 'undefined') { return false; }
  			for (var k in window) {
  				try {
  					if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
  						try {
  							equalsConstructorPrototype(window[k]);
  						} catch (e) {
  							return true;
  						}
  					}
  				} catch (e) {
  					return true;
  				}
  			}
  			return false;
  		}());
  		var equalsConstructorPrototypeIfNotBuggy = function (o) {
  			/* global window */
  			if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
  				return equalsConstructorPrototype(o);
  			}
  			try {
  				return equalsConstructorPrototype(o);
  			} catch (e) {
  				return false;
  			}
  		};

  		keysShim = function keys(object) {
  			var isObject = object !== null && typeof object === 'object';
  			var isFunction = toStr.call(object) === '[object Function]';
  			var isArguments = isArgs(object);
  			var isString = isObject && toStr.call(object) === '[object String]';
  			var theKeys = [];

  			if (!isObject && !isFunction && !isArguments) {
  				throw new TypeError('Object.keys called on a non-object');
  			}

  			var skipProto = hasProtoEnumBug && isFunction;
  			if (isString && object.length > 0 && !has.call(object, 0)) {
  				for (var i = 0; i < object.length; ++i) {
  					theKeys.push(String(i));
  				}
  			}

  			if (isArguments && object.length > 0) {
  				for (var j = 0; j < object.length; ++j) {
  					theKeys.push(String(j));
  				}
  			} else {
  				for (var name in object) {
  					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
  						theKeys.push(String(name));
  					}
  				}
  			}

  			if (hasDontEnumBug) {
  				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

  				for (var k = 0; k < dontEnums.length; ++k) {
  					if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
  						theKeys.push(dontEnums[k]);
  					}
  				}
  			}
  			return theKeys;
  		};
  	}
  	implementation$1 = keysShim;
  	return implementation$1;
  }

  var objectKeys;
  var hasRequiredObjectKeys;

  function requireObjectKeys () {
  	if (hasRequiredObjectKeys) return objectKeys;
  	hasRequiredObjectKeys = 1;

  	var slice = Array.prototype.slice;
  	var isArgs = requireIsArguments();

  	var origKeys = Object.keys;
  	var keysShim = origKeys ? function keys(o) { return origKeys(o); } : requireImplementation$1();

  	var originalKeys = Object.keys;

  	keysShim.shim = function shimObjectKeys() {
  		if (Object.keys) {
  			var keysWorksWithArguments = (function () {
  				// Safari 5.0 bug
  				var args = Object.keys(arguments);
  				return args && args.length === arguments.length;
  			}(1, 2));
  			if (!keysWorksWithArguments) {
  				Object.keys = function keys(object) { // eslint-disable-line func-name-matching
  					if (isArgs(object)) {
  						return originalKeys(slice.call(object));
  					}
  					return originalKeys(object);
  				};
  			}
  		} else {
  			Object.keys = keysShim;
  		}
  		return Object.keys || keysShim;
  	};

  	objectKeys = keysShim;
  	return objectKeys;
  }

  var defineProperties_1;
  var hasRequiredDefineProperties;

  function requireDefineProperties () {
  	if (hasRequiredDefineProperties) return defineProperties_1;
  	hasRequiredDefineProperties = 1;

  	var keys = requireObjectKeys();
  	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

  	var toStr = Object.prototype.toString;
  	var concat = Array.prototype.concat;
  	var origDefineProperty = Object.defineProperty;

  	var isFunction = function (fn) {
  		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
  	};

  	var hasPropertyDescriptors = requireHasPropertyDescriptors()();

  	var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;

  	var defineProperty = function (object, name, value, predicate) {
  		if (name in object) {
  			if (predicate === true) {
  				if (object[name] === value) {
  					return;
  				}
  			} else if (!isFunction(predicate) || !predicate()) {
  				return;
  			}
  		}
  		if (supportsDescriptors) {
  			origDefineProperty(object, name, {
  				configurable: true,
  				enumerable: false,
  				value: value,
  				writable: true
  			});
  		} else {
  			object[name] = value; // eslint-disable-line no-param-reassign
  		}
  	};

  	var defineProperties = function (object, map) {
  		var predicates = arguments.length > 2 ? arguments[2] : {};
  		var props = keys(map);
  		if (hasSymbols) {
  			props = concat.call(props, Object.getOwnPropertySymbols(map));
  		}
  		for (var i = 0; i < props.length; i += 1) {
  			defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  		}
  	};

  	defineProperties.supportsDescriptors = !!supportsDescriptors;

  	defineProperties_1 = defineProperties;
  	return defineProperties_1;
  }

  var GetIntrinsic$5 = getIntrinsic;

  var $String$1 = GetIntrinsic$5('%String%');
  var $TypeError$2 = GetIntrinsic$5('%TypeError%');

  // https://262.ecma-international.org/6.0/#sec-tostring

  var ToString = function ToString(argument) {
  	if (typeof argument === 'symbol') {
  		throw new $TypeError$2('Cannot convert a Symbol value to a string');
  	}
  	return $String$1(argument);
  };

  var ToString$1 = /*@__PURE__*/getDefaultExportFromCjs(ToString);

  var implementation;
  var hasRequiredImplementation;

  function requireImplementation () {
  	if (hasRequiredImplementation) return implementation;
  	hasRequiredImplementation = 1;

  	var RequireObjectCoercible = requireRequireObjectCoercible();
  	var ToString$1 = ToString;
  	var callBound = callBound$2;
  	var $replace = callBound('String.prototype.replace');

  	var mvsIsWS = (/^\s$/).test('\u180E');
  	/* eslint-disable no-control-regex */
  	var leftWhitespace = mvsIsWS
  		? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
  		: /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
  	var rightWhitespace = mvsIsWS
  		? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
  		: /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
  	/* eslint-enable no-control-regex */

  	implementation = function trim() {
  		var S = ToString$1(RequireObjectCoercible(this));
  		return $replace($replace(S, leftWhitespace, ''), rightWhitespace, '');
  	};
  	return implementation;
  }

  var polyfill;
  var hasRequiredPolyfill;

  function requirePolyfill () {
  	if (hasRequiredPolyfill) return polyfill;
  	hasRequiredPolyfill = 1;

  	var implementation = requireImplementation();

  	var zeroWidthSpace = '\u200b';
  	var mongolianVowelSeparator = '\u180E';

  	polyfill = function getPolyfill() {
  		if (
  			String.prototype.trim
  			&& zeroWidthSpace.trim() === zeroWidthSpace
  			&& mongolianVowelSeparator.trim() === mongolianVowelSeparator
  			&& ('_' + mongolianVowelSeparator).trim() === ('_' + mongolianVowelSeparator)
  			&& (mongolianVowelSeparator + '_').trim() === (mongolianVowelSeparator + '_')
  		) {
  			return String.prototype.trim;
  		}
  		return implementation;
  	};
  	return polyfill;
  }

  var shim;
  var hasRequiredShim;

  function requireShim () {
  	if (hasRequiredShim) return shim;
  	hasRequiredShim = 1;

  	var define = requireDefineProperties();
  	var getPolyfill = requirePolyfill();

  	shim = function shimStringTrim() {
  		var polyfill = getPolyfill();
  		define(String.prototype, { trim: polyfill }, {
  			trim: function testTrim() {
  				return String.prototype.trim !== polyfill;
  			}
  		});
  		return polyfill;
  	};
  	return shim;
  }

  var string_prototype_trim;
  var hasRequiredString_prototype_trim;

  function requireString_prototype_trim () {
  	if (hasRequiredString_prototype_trim) return string_prototype_trim;
  	hasRequiredString_prototype_trim = 1;

  	var callBind = callBindExports;
  	var define = requireDefineProperties();
  	var RequireObjectCoercible = requireRequireObjectCoercible();

  	var implementation = requireImplementation();
  	var getPolyfill = requirePolyfill();
  	var shim = requireShim();

  	var bound = callBind(getPolyfill());
  	var boundMethod = function trim(receiver) {
  		RequireObjectCoercible(receiver);
  		return bound(receiver);
  	};

  	define(boundMethod, {
  		getPolyfill: getPolyfill,
  		implementation: implementation,
  		shim: shim
  	});

  	string_prototype_trim = boundMethod;
  	return string_prototype_trim;
  }

  var StringToNumber$1;
  var hasRequiredStringToNumber;

  function requireStringToNumber () {
  	if (hasRequiredStringToNumber) return StringToNumber$1;
  	hasRequiredStringToNumber = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $Number = GetIntrinsic('%Number%');
  	var $RegExp = GetIntrinsic('%RegExp%');
  	var $TypeError = GetIntrinsic('%TypeError%');
  	var $parseInteger = GetIntrinsic('%parseInt%');

  	var callBound = callBound$2;
  	var regexTester = requireSafeRegexTest();

  	var $strSlice = callBound('String.prototype.slice');
  	var isBinary = regexTester(/^0b[01]+$/i);
  	var isOctal = regexTester(/^0o[0-7]+$/i);
  	var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
  	var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
  	var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
  	var hasNonWS = regexTester(nonWSregex);

  	var $trim = requireString_prototype_trim();

  	var Type = Type$5;

  	// https://262.ecma-international.org/13.0/#sec-stringtonumber

  	StringToNumber$1 = function StringToNumber(argument) {
  		if (Type(argument) !== 'String') {
  			throw new $TypeError('Assertion failed: `argument` is not a String');
  		}
  		if (isBinary(argument)) {
  			return $Number($parseInteger($strSlice(argument, 2), 2));
  		}
  		if (isOctal(argument)) {
  			return $Number($parseInteger($strSlice(argument, 2), 8));
  		}
  		if (hasNonWS(argument) || isInvalidHexLiteral(argument)) {
  			return NaN;
  		}
  		var trimmed = $trim(argument);
  		if (trimmed !== argument) {
  			return StringToNumber(trimmed);
  		}
  		return $Number(argument);
  	};
  	return StringToNumber$1;
  }

  var GetIntrinsic$4 = getIntrinsic;

  var $TypeError$1 = GetIntrinsic$4('%TypeError%');
  var $Number = GetIntrinsic$4('%Number%');
  var isPrimitive = requireIsPrimitive();

  var ToPrimitive = ToPrimitive$1;
  var StringToNumber = requireStringToNumber();

  // https://262.ecma-international.org/13.0/#sec-tonumber

  var ToNumber$1 = function ToNumber(argument) {
  	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
  	if (typeof value === 'symbol') {
  		throw new $TypeError$1('Cannot convert a Symbol value to a number');
  	}
  	if (typeof value === 'bigint') {
  		throw new $TypeError$1('Conversion from \'BigInt\' to \'number\' is not allowed.');
  	}
  	if (typeof value === 'string') {
  		return StringToNumber(value);
  	}
  	return $Number(value);
  };

  var ToNumber$2 = /*@__PURE__*/getDefaultExportFromCjs(ToNumber$1);

  var sign = function sign(number) {
  	return number >= 0 ? 1 : -1;
  };

  var abs = abs$2;
  var floor = floor$2;
  var ToNumber = ToNumber$1;

  var $isNaN = _isNaN;
  var $isFinite = _isFinite;
  var $sign = sign;

  // https://262.ecma-international.org/12.0/#sec-tointegerorinfinity

  var ToIntegerOrInfinity = function ToIntegerOrInfinity(value) {
  	var number = ToNumber(value);
  	if ($isNaN(number) || number === 0) { return 0; }
  	if (!$isFinite(number)) { return number; }
  	var integer = floor(abs(number));
  	if (integer === 0) { return 0; }
  	return $sign(number) * integer;
  };

  var ToIntegerOrInfinity$1 = /*@__PURE__*/getDefaultExportFromCjs(ToIntegerOrInfinity);

  var maxSafeInteger;
  var hasRequiredMaxSafeInteger;

  function requireMaxSafeInteger () {
  	if (hasRequiredMaxSafeInteger) return maxSafeInteger;
  	hasRequiredMaxSafeInteger = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $Math = GetIntrinsic('%Math%');
  	var $Number = GetIntrinsic('%Number%');

  	maxSafeInteger = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;
  	return maxSafeInteger;
  }

  var ToLength;
  var hasRequiredToLength;

  function requireToLength () {
  	if (hasRequiredToLength) return ToLength;
  	hasRequiredToLength = 1;

  	var MAX_SAFE_INTEGER = requireMaxSafeInteger();

  	var ToIntegerOrInfinity$1 = ToIntegerOrInfinity;

  	ToLength = function ToLength(argument) {
  		var len = ToIntegerOrInfinity$1(argument);
  		if (len <= 0) { return 0; } // includes converting -0 to +0
  		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
  		return len;
  	};
  	return ToLength;
  }

  var StringPad$1;
  var hasRequiredStringPad;

  function requireStringPad () {
  	if (hasRequiredStringPad) return StringPad$1;
  	hasRequiredStringPad = 1;

  	var GetIntrinsic = getIntrinsic;

  	var $TypeError = GetIntrinsic('%TypeError%');

  	var callBound = callBound$2;

  	var ToLength = requireToLength();
  	var ToString$1 = ToString;

  	var $strSlice = callBound('String.prototype.slice');

  	// https://262.ecma-international.org/11.0/#sec-stringpad

  	StringPad$1 = function StringPad(O, maxLength, fillString, placement) {
  		if (placement !== 'start' && placement !== 'end') {
  			throw new $TypeError('Assertion failed: `placement` must be "start" or "end"');
  		}
  		var S = ToString$1(O);
  		var intMaxLength = ToLength(maxLength);
  		var stringLength = S.length;
  		if (intMaxLength <= stringLength) {
  			return S;
  		}
  		var filler = typeof fillString === 'undefined' ? ' ' : ToString$1(fillString);
  		if (filler === '') {
  			return S;
  		}
  		var fillLen = intMaxLength - stringLength;

  		// the String value consisting of repeated concatenations of filler truncated to length fillLen.
  		var truncatedStringFiller = '';
  		while (truncatedStringFiller.length < fillLen) {
  			truncatedStringFiller += filler;
  		}
  		truncatedStringFiller = $strSlice(truncatedStringFiller, 0, fillLen);

  		if (placement === 'start') {
  			return truncatedStringFiller + S;
  		}
  		return S + truncatedStringFiller;
  	};
  	return StringPad$1;
  }

  var GetIntrinsic$3 = getIntrinsic;

  var $String = GetIntrinsic$3('%String%');
  var $RangeError = GetIntrinsic$3('%RangeError%');

  var IsIntegralNumber = IsIntegralNumber$1;
  var StringPad = requireStringPad();

  // https://262.ecma-international.org/13.0/#sec-tozeropaddeddecimalstring

  var ToZeroPaddedDecimalString = function ToZeroPaddedDecimalString(n, minLength) {
  	if (!IsIntegralNumber(n) || n < 0) {
  		throw new $RangeError('Assertion failed: `q` must be a non-negative integer');
  	}
  	var S = $String(n);
  	return StringPad(S, minLength, '0', 'start');
  };

  var ToZeroPaddedDecimalString$1 = /*@__PURE__*/getDefaultExportFromCjs(ToZeroPaddedDecimalString);

  var every = function every(array, predicate) {
  	for (var i = 0; i < array.length; i += 1) {
  		if (!predicate(array[i], i, array)) {
  			return false;
  		}
  	}
  	return true;
  };

  var every$1 = /*@__PURE__*/getDefaultExportFromCjs(every);

  var forEach = function forEach(array, callback) {
  	for (var i = 0; i < array.length; i += 1) {
  		callback(array[i], i, array); // eslint-disable-line callback-return
  	}
  };

  var forEach$1 = /*@__PURE__*/getDefaultExportFromCjs(forEach);

  var GetIntrinsic$2 = getIntrinsic;

  var callBind = callBindExports;
  var callBound = callBound$2;

  var $ownKeys = GetIntrinsic$2('%Reflect.ownKeys%', true);
  var $pushApply = callBind.apply(GetIntrinsic$2('%Array.prototype.push%'));
  var $SymbolValueOf = callBound('Symbol.prototype.valueOf', true);
  var $gOPN = GetIntrinsic$2('%Object.getOwnPropertyNames%', true);
  var $gOPS = $SymbolValueOf ? GetIntrinsic$2('%Object.getOwnPropertySymbols%') : null;

  var keys = requireObjectKeys();

  var OwnPropertyKeys = $ownKeys || function OwnPropertyKeys(source) {
  	var ownKeys = ($gOPN || keys)(source);
  	if ($gOPS) {
  		$pushApply(ownKeys, $gOPS(source));
  	}
  	return ownKeys;
  };

  var OwnPropertyKeys$1 = /*@__PURE__*/getDefaultExportFromCjs(OwnPropertyKeys);

  var some = function some(array, predicate) {
  	for (var i = 0; i < array.length; i += 1) {
  		if (predicate(array[i], i, array)) {
  			return true;
  		}
  	}
  	return false;
  };

  var some$1 = /*@__PURE__*/getDefaultExportFromCjs(some);

  // TODO: remove, semver-major

  var GetIntrinsic$1 = getIntrinsic;

  var ESGetIntrinsic = /*@__PURE__*/getDefaultExportFromCjs(GetIntrinsic$1);

  var INTRINSICS = {};
  var customUtilInspectFormatters = _defineProperty({}, 'Temporal.Duration', function TemporalDuration(depth, options) {
    var descr = options.stylize("".concat(this[Symbol.toStringTag], " <").concat(this, ">"), 'special');
    if (depth < 1) return descr;
    var entries = [];
    for (var _i = 0, _arr = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds']; _i < _arr.length; _i++) {
      var prop = _arr[_i];
      if (this[prop] !== 0) entries.push("  ".concat(prop, ": ").concat(options.stylize(this[prop], 'number')));
    }
    return descr + ' {\n' + entries.join(',\n') + '\n}';
  });
  function defaultUtilInspectFormatter(depth, options) {
    return options.stylize("".concat(this[Symbol.toStringTag], " <").concat(this, ">"), 'special');
  }
  function MakeIntrinsicClass(Class, name) {
    Object.defineProperty(Class.prototype, Symbol.toStringTag, {
      value: name,
      writable: false,
      enumerable: false,
      configurable: true
    });
    {
      Object.defineProperty(Class.prototype, Symbol.for('nodejs.util.inspect.custom'), {
        value: customUtilInspectFormatters[name] || defaultUtilInspectFormatter,
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
    var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(Class)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        var desc = Object.getOwnPropertyDescriptor(Class, prop);
        if (!desc.configurable || !desc.enumerable) continue;
        desc.enumerable = false;
        Object.defineProperty(Class, prop, desc);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Class.prototype)),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _prop = _step2.value;
        var _desc = Object.getOwnPropertyDescriptor(Class.prototype, _prop);
        if (!_desc.configurable || !_desc.enumerable) continue;
        _desc.enumerable = false;
        Object.defineProperty(Class.prototype, _prop, _desc);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    DefineIntrinsic(name, Class);
    DefineIntrinsic("".concat(name, ".prototype"), Class.prototype);
  }
  function DefineIntrinsic(name, value) {
    var key = "%".concat(name, "%");
    if (INTRINSICS[key] !== undefined) throw new Error("intrinsic ".concat(name, " already exists"));
    INTRINSICS[key] = value;
  }
  function GetIntrinsic(intrinsic) {
    return intrinsic in INTRINSICS ? INTRINSICS[intrinsic] : ESGetIntrinsic(intrinsic);
  }

  // Instant
  var EPOCHNANOSECONDS = 'slot-epochNanoSeconds';

  // TimeZone
  var TIMEZONE_ID = 'slot-timezone-identifier';

  // DateTime, Date, Time, YearMonth, MonthDay
  var ISO_YEAR = 'slot-year';
  var ISO_MONTH = 'slot-month';
  var ISO_DAY = 'slot-day';
  var ISO_HOUR = 'slot-hour';
  var ISO_MINUTE = 'slot-minute';
  var ISO_SECOND = 'slot-second';
  var ISO_MILLISECOND = 'slot-millisecond';
  var ISO_MICROSECOND = 'slot-microsecond';
  var ISO_NANOSECOND = 'slot-nanosecond';
  var CALENDAR = 'slot-calendar';
  // Date, YearMonth, and MonthDay all have the same slots, disambiguation needed:
  var DATE_BRAND = 'slot-date-brand';
  var YEAR_MONTH_BRAND = 'slot-year-month-brand';
  var MONTH_DAY_BRAND = 'slot-month-day-brand';

  // ZonedDateTime
  var INSTANT = 'slot-cached-instant';
  var TIME_ZONE = 'slot-time-zone';

  // Duration
  var YEARS = 'slot-years';
  var MONTHS = 'slot-months';
  var WEEKS = 'slot-weeks';
  var DAYS = 'slot-days';
  var HOURS = 'slot-hours';
  var MINUTES = 'slot-minutes';
  var SECONDS = 'slot-seconds';
  var MILLISECONDS = 'slot-milliseconds';
  var MICROSECONDS = 'slot-microseconds';
  var NANOSECONDS = 'slot-nanoseconds';

  // Calendar
  var CALENDAR_ID = 'slot-calendar-identifier';
  var slots = new WeakMap();
  function CreateSlots(container) {
    slots.set(container, Object.create(null));
  }
  function GetSlots(container) {
    return slots.get(container);
  }
  function HasSlot(container) {
    if (!container || 'object' !== _typeof(container)) return false;
    var myslots = GetSlots(container);
    for (var _len = arguments.length, ids = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      ids[_key - 1] = arguments[_key];
    }
    return !!myslots && ids.reduce(function (all, id) {
      return all && id in myslots;
    }, true);
  }
  function GetSlot(container, id) {
    return GetSlots(container)[id];
  }
  function SetSlot(container, id, value) {
    GetSlots(container)[id] = value;
  }

  var tzComponent = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
  var offsetNoCapture = /(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/;
  var timeZoneID = new RegExp('(?:' + ["(?:".concat(tzComponent.source, ")(?:\\/(?:").concat(tzComponent.source, "))*"), 'Etc/GMT(?:0|[-+]\\d{1,2})', 'GMT[-+]?0', 'EST5EDT', 'CST6CDT', 'MST7MDT', 'PST8PDT', offsetNoCapture.source].join('|') + ')');
  var yearpart = /(?:[+\u2212-]\d{6}|\d{4})/;
  var monthpart = /(?:0[1-9]|1[0-2])/;
  var daypart = /(?:0[1-9]|[12]\d|3[01])/;
  var datesplit = new RegExp("(".concat(yearpart.source, ")(?:-(").concat(monthpart.source, ")-(").concat(daypart.source, ")|(").concat(monthpart.source, ")(").concat(daypart.source, "))"));
  var timesplit = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
  var offset = /([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
  var offsetpart = new RegExp("([zZ])|".concat(offset.source, "?"));
  var annotation = /\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g;
  var zoneddatetime = new RegExp(["^".concat(datesplit.source), "(?:(?:T|\\s+)".concat(timesplit.source, "(?:").concat(offsetpart.source, ")?)?"), "(?:\\[!?(".concat(timeZoneID.source, ")\\])?"), "((?:".concat(annotation.source, ")*)$")].join(''), 'i');
  var time = new RegExp(["^T?".concat(timesplit.source), "(?:".concat(offsetpart.source, ")?"), "(?:\\[!?".concat(timeZoneID.source, "\\])?"), "((?:".concat(annotation.source, ")*)$")].join(''), 'i');

  // The short forms of YearMonth and MonthDay are only for the ISO calendar, but
  // annotations are still allowed, and will throw if the calendar annotation is
  // not ISO.
  // Non-ISO calendar YearMonth and MonthDay have to parse as a Temporal.PlainDate,
  // with the reference fields.
  // YYYYMM forbidden by ISO 8601 because ambiguous with YYMMDD, but allowed by
  // RFC 3339 and we don't allow 2-digit years, so we allow it.
  // Not ambiguous with HHMMSS because that requires a 'T' prefix
  // UTC offsets are not allowed, because they are not allowed with any date-only
  // format; also, YYYY-MM-UU is ambiguous with YYYY-MM-DD
  var yearmonth = new RegExp("^(".concat(yearpart.source, ")-?(").concat(monthpart.source, ")(?:\\[!?").concat(timeZoneID.source, "\\])?((?:").concat(annotation.source, ")*)$"));
  var monthday = new RegExp("^(?:--)?(".concat(monthpart.source, ")-?(").concat(daypart.source, ")(?:\\[!?").concat(timeZoneID.source, "\\])?((?:").concat(annotation.source, ")*)$"));
  var fraction = /(\d+)(?:[.,](\d{1,9}))?/;
  var durationDate = /(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/;
  var durationTime = new RegExp("(?:".concat(fraction.source, "H)?(?:").concat(fraction.source, "M)?(?:").concat(fraction.source, "S)?"));
  var duration = new RegExp("^([+\u2212-])?P".concat(durationDate.source, "(?:T(?!$)").concat(durationTime.source, ")?$"), 'i');

  /* global true */

  var ArrayIncludes$1 = Array.prototype.includes;
  var ArrayPrototypePush$4 = Array.prototype.push;
  var ArrayPrototypeSort = Array.prototype.sort;
  var IntlDateTimeFormat$2 = globalThis.Intl.DateTimeFormat;
  var MathAbs$1 = Math.abs;
  var MathFloor$1 = Math.floor;
  var MathMax = Math.max;
  var MathMin = Math.min;
  var MathSign = Math.sign;
  var MathTrunc = Math.trunc;
  var NumberIsFinite = Number.isFinite;
  var NumberIsNaN = Number.isNaN;
  var NumberMaxSafeInteger = Number.MAX_SAFE_INTEGER;
  var ObjectCreate$8 = Object.create;
  var ObjectDefineProperty = Object.defineProperty;
  var ObjectEntries$1 = Object.entries;
  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var StringFromCharCode = String.fromCharCode;
  var StringPrototypeCharCodeAt = String.prototype.charCodeAt;
  var StringPrototypeMatchAll = String.prototype.matchAll;
  var StringPrototypeReplace = String.prototype.replace;
  var $TypeError = GetIntrinsic('%TypeError%');
  var $isEnumerable = callBound$3('Object.prototype.propertyIsEnumerable');
  var DAY_SECONDS = 86400;
  var DAY_NANOS = bigInt(DAY_SECONDS).multiply(1e9);
  var NS_MIN = bigInt(-DAY_SECONDS).multiply(1e17);
  var NS_MAX = bigInt(DAY_SECONDS).multiply(1e17);
  var YEAR_MIN = -271821;
  var YEAR_MAX = 275760;
  var BEFORE_FIRST_DST = bigInt(-388152).multiply(1e13); // 1847-01-01T00:00:00Z

  var BUILTIN_CALENDAR_IDS = ['iso8601', 'hebrew', 'islamic', 'islamic-umalqura', 'islamic-tbla', 'islamic-civil', 'islamic-rgsa', 'islamicc', 'persian', 'ethiopic', 'ethioaa', 'coptic', 'chinese', 'dangi', 'roc', 'indian', 'buddhist', 'japanese', 'gregory'];
  function ToIntegerWithTruncation(value) {
    var number = ToNumber$2(value);
    if (number === 0) return 0;
    if (NumberIsNaN(number) || !NumberIsFinite(number)) {
      throw new RangeError('invalid number value');
    }
    var integer = MathTrunc(number);
    if (integer === 0) return 0; // ℝ(value) in spec text; converts -0 to 0
    return integer;
  }
  function ToPositiveIntegerWithTruncation(value, property) {
    var integer = ToIntegerWithTruncation(value);
    if (integer <= 0) {
      if (property !== undefined) {
        throw new RangeError("property '".concat(property, "' cannot be a a number less than one"));
      }
      throw new RangeError('Cannot convert a number less than one to a positive integer');
    }
    return integer;
  }
  function ToIntegerIfIntegral(value) {
    var number = ToNumber$2(value);
    if (!NumberIsFinite(number)) throw new RangeError('infinity is out of range');
    if (!IsIntegralNumber$2(number)) throw new RangeError("unsupported fractional value ".concat(value));
    if (number === 0) return 0; // ℝ(value) in spec text; converts -0 to 0
    return number;
  }
  var BUILTIN_CASTS = new Map([['year', ToIntegerWithTruncation], ['month', ToPositiveIntegerWithTruncation], ['monthCode', ToString$1], ['day', ToPositiveIntegerWithTruncation], ['hour', ToIntegerWithTruncation], ['minute', ToIntegerWithTruncation], ['second', ToIntegerWithTruncation], ['millisecond', ToIntegerWithTruncation], ['microsecond', ToIntegerWithTruncation], ['nanosecond', ToIntegerWithTruncation], ['years', ToIntegerIfIntegral], ['months', ToIntegerIfIntegral], ['weeks', ToIntegerIfIntegral], ['days', ToIntegerIfIntegral], ['hours', ToIntegerIfIntegral], ['minutes', ToIntegerIfIntegral], ['seconds', ToIntegerIfIntegral], ['milliseconds', ToIntegerIfIntegral], ['microseconds', ToIntegerIfIntegral], ['nanoseconds', ToIntegerIfIntegral], ['era', ToString$1], ['eraYear', ToIntegerOrInfinity$1], ['offset', ToString$1]]);
  var BUILTIN_DEFAULTS = new Map([['hour', 0], ['minute', 0], ['second', 0], ['millisecond', 0], ['microsecond', 0], ['nanosecond', 0]]);

  // each item is [plural, singular, category]
  var SINGULAR_PLURAL_UNITS = [['years', 'year', 'date'], ['months', 'month', 'date'], ['weeks', 'week', 'date'], ['days', 'day', 'date'], ['hours', 'hour', 'time'], ['minutes', 'minute', 'time'], ['seconds', 'second', 'time'], ['milliseconds', 'millisecond', 'time'], ['microseconds', 'microsecond', 'time'], ['nanoseconds', 'nanosecond', 'time']];
  var SINGULAR_FOR = new Map(SINGULAR_PLURAL_UNITS);
  var PLURAL_FOR = new Map(SINGULAR_PLURAL_UNITS.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      p = _ref2[0],
      s = _ref2[1];
    return [s, p];
  }));
  var UNITS_DESCENDING = SINGULAR_PLURAL_UNITS.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      s = _ref4[1];
    return s;
  });
  var DURATION_FIELDS = ['days', 'hours', 'microseconds', 'milliseconds', 'minutes', 'months', 'nanoseconds', 'seconds', 'weeks', 'years'];
  var IntlDateTimeFormatEnUsCache = new Map();
  function getIntlDateTimeFormatEnUsForTimeZone(timeZoneIdentifier) {
    var instance = IntlDateTimeFormatEnUsCache.get(timeZoneIdentifier);
    if (instance === undefined) {
      instance = new IntlDateTimeFormat$2('en-us', {
        timeZone: String(timeZoneIdentifier),
        hour12: false,
        era: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
      IntlDateTimeFormatEnUsCache.set(timeZoneIdentifier, instance);
    }
    return instance;
  }

  // copied from es-abstract/2022/CopyDataProperties.js
  // with modifications per Temporal spec/mainadditions.html

  function CopyDataProperties(target, source, excludedKeys, excludedValues) {
    if (Type$6(target) !== 'Object') {
      throw new $TypeError('Assertion failed: "target" must be an Object');
    }
    if (!IsArray$2(excludedKeys) || !every$1(excludedKeys, IsPropertyKey$5)) {
      throw new $TypeError('Assertion failed: "excludedKeys" must be a List of Property Keys');
    }
    if (typeof source === 'undefined' || source === null) {
      return;
    }
    var from = ToObject$1(source);
    var keys = OwnPropertyKeys$1(from);
    forEach$1(keys, function (nextKey) {
      var excluded = some$1(excludedKeys, function (e) {
        return SameValue$1(e, nextKey) === true;
      });
      if (excluded) return;
      var enumerable = $isEnumerable(from, nextKey) ||
      // this is to handle string keys being non-enumerable in older engines
      typeof source === 'string' && nextKey >= 0 && IsIntegralNumber$2(ToNumber$2(nextKey));
      if (enumerable) {
        var propValue = Get$1(from, nextKey);
        if (excludedValues !== undefined) {
          forEach$1(excludedValues, function (e) {
            if (SameValue$1(e, propValue) === true) {
              excluded = true;
            }
          });
        }
        if (excluded === false) CreateDataPropertyOrThrow$1(target, nextKey, propValue);
      }
    });
  }
  function IsTemporalInstant(item) {
    return HasSlot(item, EPOCHNANOSECONDS) && !HasSlot(item, TIME_ZONE, CALENDAR);
  }
  function IsTemporalTimeZone(item) {
    return HasSlot(item, TIMEZONE_ID);
  }
  function IsTemporalCalendar(item) {
    return HasSlot(item, CALENDAR_ID);
  }
  function IsTemporalDuration(item) {
    return HasSlot(item, YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS, MILLISECONDS, MICROSECONDS, NANOSECONDS);
  }
  function IsTemporalDate(item) {
    return HasSlot(item, DATE_BRAND);
  }
  function IsTemporalTime(item) {
    return HasSlot(item, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND) && !HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY);
  }
  function IsTemporalDateTime(item) {
    return HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND);
  }
  function IsTemporalYearMonth(item) {
    return HasSlot(item, YEAR_MONTH_BRAND);
  }
  function IsTemporalMonthDay(item) {
    return HasSlot(item, MONTH_DAY_BRAND);
  }
  function IsTemporalZonedDateTime(item) {
    return HasSlot(item, EPOCHNANOSECONDS, TIME_ZONE, CALENDAR);
  }
  function RejectTemporalLikeObject(item) {
    if (HasSlot(item, CALENDAR) || HasSlot(item, TIME_ZONE)) {
      throw new TypeError('with() does not support a calendar or timeZone property');
    }
    if (IsTemporalTime(item)) {
      throw new TypeError('with() does not accept Temporal.PlainTime, use withPlainTime() instead');
    }
    if (item.calendar !== undefined) {
      throw new TypeError('with() does not support a calendar property');
    }
    if (item.timeZone !== undefined) {
      throw new TypeError('with() does not support a timeZone property');
    }
  }
  function ParseTemporalTimeZone(stringIdent) {
    var _ParseTemporalTimeZon = ParseTemporalTimeZoneString(stringIdent),
      ianaName = _ParseTemporalTimeZon.ianaName,
      offset = _ParseTemporalTimeZon.offset,
      z = _ParseTemporalTimeZon.z;
    if (ianaName) return GetCanonicalTimeZoneIdentifier(ianaName);
    if (z) return 'UTC';
    // if !ianaName && !z then offset must be present
    var offsetNs = ParseTimeZoneOffsetString(offset);
    return FormatTimeZoneOffsetString(offsetNs);
  }
  function MaybeFormatCalendarAnnotation(calendar, showCalendar) {
    if (showCalendar === 'never') return '';
    return FormatCalendarAnnotation(ToTemporalCalendarIdentifier(calendar), showCalendar);
  }
  function FormatCalendarAnnotation(id, showCalendar) {
    if (showCalendar === 'never') return '';
    if (showCalendar === 'auto' && id === 'iso8601') return '';
    var flag = showCalendar === 'critical' ? '!' : '';
    return "[".concat(flag, "u-ca=").concat(id, "]");
  }

  // Not a separate abstract operation in the spec, because it only occurs in one
  // place: ParseISODateTime. In the code it's more convenient to split up
  // ParseISODateTime for the YYYY-MM, MM-DD, and THH:MM:SS parse goals, so it's
  // repeated four times.
  function processAnnotations(annotations) {
    var calendar;
    var calendarWasCritical = false;
    var _iterator = _createForOfIteratorHelper(Call$1(StringPrototypeMatchAll, annotations, [annotation])),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 4),
          critical = _step$value[1],
          key = _step$value[2],
          value = _step$value[3];
        if (key === 'u-ca') {
          if (calendar === undefined) {
            calendar = value;
            calendarWasCritical = critical === '!';
          } else if (critical === '!' || calendarWasCritical) {
            throw new RangeError("Invalid annotations in ".concat(annotations, ": more than one u-ca present with critical flag"));
          }
        } else if (critical === '!') {
          throw new RangeError("Unrecognized annotation: !".concat(key, "=").concat(value));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return calendar;
  }
  function ParseISODateTime(isoString) {
    // ZDT is the superset of fields for every other Temporal type
    var match = zoneddatetime.exec(isoString);
    if (!match) throw new RangeError("invalid ISO 8601 string: ".concat(isoString));
    var yearString = match[1];
    if (yearString[0] === "\u2212") yearString = "-".concat(yearString.slice(1));
    if (yearString === '-000000') throw new RangeError("invalid ISO 8601 string: ".concat(isoString));
    var year = ToIntegerOrInfinity$1(yearString);
    var month = ToIntegerOrInfinity$1(match[2] || match[4]);
    var day = ToIntegerOrInfinity$1(match[3] || match[5]);
    var hasTime = match[6] !== undefined;
    var hour = ToIntegerOrInfinity$1(match[6]);
    var minute = ToIntegerOrInfinity$1(match[7] || match[10]);
    var second = ToIntegerOrInfinity$1(match[8] || match[11]);
    if (second === 60) second = 59;
    var fraction = (match[9] || match[12]) + '000000000';
    var millisecond = ToIntegerOrInfinity$1(fraction.slice(0, 3));
    var microsecond = ToIntegerOrInfinity$1(fraction.slice(3, 6));
    var nanosecond = ToIntegerOrInfinity$1(fraction.slice(6, 9));
    var offset;
    var z = false;
    if (match[13]) {
      offset = undefined;
      z = true;
    } else if (match[14] && match[15]) {
      var offsetSign = match[14] === '-' || match[14] === "\u2212" ? '-' : '+';
      var offsetHours = match[15] || '00';
      var offsetMinutes = match[16] || '00';
      var offsetSeconds = match[17] || '00';
      var offsetFraction = match[18] || '0';
      offset = "".concat(offsetSign).concat(offsetHours, ":").concat(offsetMinutes);
      if (+offsetFraction) {
        while (offsetFraction.endsWith('0')) offsetFraction = offsetFraction.slice(0, -1);
        offset += ":".concat(offsetSeconds, ".").concat(offsetFraction);
      } else if (+offsetSeconds) {
        offset += ":".concat(offsetSeconds);
      }
      if (offset === '-00:00') offset = '+00:00';
    }
    var ianaName = match[19];
    var calendar = processAnnotations(match[20]);
    RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    return {
      year: year,
      month: month,
      day: day,
      hasTime: hasTime,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond,
      ianaName: ianaName,
      offset: offset,
      z: z,
      calendar: calendar
    };
  }
  function ParseTemporalInstantString(isoString) {
    var result = ParseISODateTime(isoString);
    if (!result.z && !result.offset) throw new RangeError('Temporal.Instant requires a time zone offset');
    return result;
  }
  function ParseTemporalZonedDateTimeString(isoString) {
    var result = ParseISODateTime(isoString);
    if (!result.ianaName) throw new RangeError('Temporal.ZonedDateTime requires a time zone ID in brackets');
    return result;
  }
  function ParseTemporalDateTimeString(isoString) {
    return ParseISODateTime(isoString);
  }
  function ParseTemporalDateString(isoString) {
    return ParseISODateTime(isoString);
  }
  function ParseTemporalTimeString(isoString) {
    var match = time.exec(isoString);
    var hour, minute, second, millisecond, microsecond, nanosecond;
    if (match) {
      hour = ToIntegerOrInfinity$1(match[1]);
      minute = ToIntegerOrInfinity$1(match[2] || match[5]);
      second = ToIntegerOrInfinity$1(match[3] || match[6]);
      if (second === 60) second = 59;
      var fraction = (match[4] || match[7]) + '000000000';
      millisecond = ToIntegerOrInfinity$1(fraction.slice(0, 3));
      microsecond = ToIntegerOrInfinity$1(fraction.slice(3, 6));
      nanosecond = ToIntegerOrInfinity$1(fraction.slice(6, 9));
      processAnnotations(match[14]); // ignore found calendar
      if (match[8]) throw new RangeError('Z designator not supported for PlainTime');
    } else {
      var z, hasTime;
      var _ParseISODateTime = ParseISODateTime(isoString);
      hasTime = _ParseISODateTime.hasTime;
      hour = _ParseISODateTime.hour;
      minute = _ParseISODateTime.minute;
      second = _ParseISODateTime.second;
      millisecond = _ParseISODateTime.millisecond;
      microsecond = _ParseISODateTime.microsecond;
      nanosecond = _ParseISODateTime.nanosecond;
      z = _ParseISODateTime.z;
      if (!hasTime) throw new RangeError("time is missing in string: ".concat(isoString));
      if (z) throw new RangeError('Z designator not supported for PlainTime');
    }
    // if it's a date-time string, OK
    if (/[tT ][0-9][0-9]/.test(isoString)) {
      return {
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    }
    // Reject strings that are ambiguous with PlainMonthDay or PlainYearMonth.
    try {
      var _ParseTemporalMonthDa = ParseTemporalMonthDayString(isoString),
        month = _ParseTemporalMonthDa.month,
        day = _ParseTemporalMonthDa.day;
      RejectISODate(1972, month, day);
    } catch (_unused) {
      try {
        var _ParseTemporalYearMon = ParseTemporalYearMonthString(isoString),
          year = _ParseTemporalYearMon.year,
          _month = _ParseTemporalYearMon.month;
        RejectISODate(year, _month, 1);
      } catch (_unused2) {
        return {
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond,
          microsecond: microsecond,
          nanosecond: nanosecond
        };
      }
    }
    throw new RangeError("invalid ISO 8601 time-only string ".concat(isoString, "; may need a T prefix"));
  }
  function ParseTemporalYearMonthString(isoString) {
    var match = yearmonth.exec(isoString);
    var year, month, calendar, referenceISODay;
    if (match) {
      var yearString = match[1];
      if (yearString[0] === "\u2212") yearString = "-".concat(yearString.slice(1));
      if (yearString === '-000000') throw new RangeError("invalid ISO 8601 string: ".concat(isoString));
      year = ToIntegerOrInfinity$1(yearString);
      month = ToIntegerOrInfinity$1(match[2]);
      calendar = processAnnotations(match[3]);
      if (calendar !== undefined && calendar !== 'iso8601') {
        throw new RangeError('YYYY-MM format is only valid with iso8601 calendar');
      }
    } else {
      var z;
      var _ParseISODateTime2 = ParseISODateTime(isoString);
      year = _ParseISODateTime2.year;
      month = _ParseISODateTime2.month;
      calendar = _ParseISODateTime2.calendar;
      referenceISODay = _ParseISODateTime2.day;
      z = _ParseISODateTime2.z;
      if (z) throw new RangeError('Z designator not supported for PlainYearMonth');
    }
    return {
      year: year,
      month: month,
      calendar: calendar,
      referenceISODay: referenceISODay
    };
  }
  function ParseTemporalMonthDayString(isoString) {
    var match = monthday.exec(isoString);
    var month, day, calendar, referenceISOYear;
    if (match) {
      month = ToIntegerOrInfinity$1(match[1]);
      day = ToIntegerOrInfinity$1(match[2]);
      calendar = processAnnotations(match[3]);
      if (calendar !== undefined && calendar !== 'iso8601') {
        throw new RangeError('MM-DD format is only valid with iso8601 calendar');
      }
    } else {
      var z;
      var _ParseISODateTime3 = ParseISODateTime(isoString);
      month = _ParseISODateTime3.month;
      day = _ParseISODateTime3.day;
      calendar = _ParseISODateTime3.calendar;
      referenceISOYear = _ParseISODateTime3.year;
      z = _ParseISODateTime3.z;
      if (z) throw new RangeError('Z designator not supported for PlainMonthDay');
    }
    return {
      month: month,
      day: day,
      calendar: calendar,
      referenceISOYear: referenceISOYear
    };
  }
  function ParseTemporalTimeZoneString(stringIdent) {
    var bareID = new RegExp("^".concat(timeZoneID.source, "$"), 'i');
    if (bareID.test(stringIdent)) return {
      ianaName: stringIdent
    };
    try {
      // Try parsing ISO string instead
      var result = ParseISODateTime(stringIdent);
      if (result.z || result.offset || result.ianaName) {
        return result;
      }
    } catch (_unused3) {
      // fall through
    }
    throw new RangeError("Invalid time zone: ".concat(stringIdent));
  }
  function ParseTemporalDurationString(isoString) {
    var match = duration.exec(isoString);
    if (!match) throw new RangeError("invalid duration: ".concat(isoString));
    if (match.slice(2).every(function (element) {
      return element === undefined;
    })) {
      throw new RangeError("invalid duration: ".concat(isoString));
    }
    var sign = match[1] === '-' || match[1] === "\u2212" ? -1 : 1;
    var years = match[2] === undefined ? 0 : ToIntegerWithTruncation(match[2]) * sign;
    var months = match[3] === undefined ? 0 : ToIntegerWithTruncation(match[3]) * sign;
    var weeks = match[4] === undefined ? 0 : ToIntegerWithTruncation(match[4]) * sign;
    var days = match[5] === undefined ? 0 : ToIntegerWithTruncation(match[5]) * sign;
    var hours = match[6] === undefined ? 0 : ToIntegerWithTruncation(match[6]) * sign;
    var fHours = match[7];
    var minutesStr = match[8];
    var fMinutes = match[9];
    var secondsStr = match[10];
    var fSeconds = match[11];
    var minutes = 0;
    var seconds = 0;
    // fractional hours, minutes, or seconds, expressed in whole nanoseconds:
    var excessNanoseconds = 0;
    if (fHours !== undefined) {
      var _ref5, _ref6, _ref7;
      if ((_ref5 = (_ref6 = (_ref7 = minutesStr !== null && minutesStr !== void 0 ? minutesStr : fMinutes) !== null && _ref7 !== void 0 ? _ref7 : secondsStr) !== null && _ref6 !== void 0 ? _ref6 : fSeconds) !== null && _ref5 !== void 0 ? _ref5 : false) {
        throw new RangeError('only the smallest unit can be fractional');
      }
      excessNanoseconds = ToIntegerWithTruncation((fHours + '000000000').slice(0, 9)) * 3600 * sign;
    } else {
      minutes = minutesStr === undefined ? 0 : ToIntegerWithTruncation(minutesStr) * sign;
      if (fMinutes !== undefined) {
        var _ref8;
        if ((_ref8 = secondsStr !== null && secondsStr !== void 0 ? secondsStr : fSeconds) !== null && _ref8 !== void 0 ? _ref8 : false) {
          throw new RangeError('only the smallest unit can be fractional');
        }
        excessNanoseconds = ToIntegerWithTruncation((fMinutes + '000000000').slice(0, 9)) * 60 * sign;
      } else {
        seconds = secondsStr === undefined ? 0 : ToIntegerWithTruncation(secondsStr) * sign;
        if (fSeconds !== undefined) {
          excessNanoseconds = ToIntegerWithTruncation((fSeconds + '000000000').slice(0, 9)) * sign;
        }
      }
    }
    var nanoseconds = excessNanoseconds % 1000;
    var microseconds = MathTrunc(excessNanoseconds / 1000) % 1000;
    var milliseconds = MathTrunc(excessNanoseconds / 1e6) % 1000;
    seconds += MathTrunc(excessNanoseconds / 1e9) % 60;
    minutes += MathTrunc(excessNanoseconds / 6e10);
    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    };
  }
  function ParseTemporalInstant(isoString) {
    var _ParseTemporalInstant = ParseTemporalInstantString(isoString),
      year = _ParseTemporalInstant.year,
      month = _ParseTemporalInstant.month,
      day = _ParseTemporalInstant.day,
      hour = _ParseTemporalInstant.hour,
      minute = _ParseTemporalInstant.minute,
      second = _ParseTemporalInstant.second,
      millisecond = _ParseTemporalInstant.millisecond,
      microsecond = _ParseTemporalInstant.microsecond,
      nanosecond = _ParseTemporalInstant.nanosecond,
      offset = _ParseTemporalInstant.offset,
      z = _ParseTemporalInstant.z;
    if (!z && !offset) throw new RangeError('Temporal.Instant requires a time zone offset');
    var offsetNs = z ? 0 : ParseTimeZoneOffsetString(offset);
    var _BalanceISODateTime = BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond - offsetNs);
    year = _BalanceISODateTime.year;
    month = _BalanceISODateTime.month;
    day = _BalanceISODateTime.day;
    hour = _BalanceISODateTime.hour;
    minute = _BalanceISODateTime.minute;
    second = _BalanceISODateTime.second;
    millisecond = _BalanceISODateTime.millisecond;
    microsecond = _BalanceISODateTime.microsecond;
    nanosecond = _BalanceISODateTime.nanosecond;
    var epochNs = GetUTCEpochNanoseconds(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (epochNs === null) throw new RangeError('DateTime outside of supported range');
    return epochNs;
  }
  function RegulateISODate(year, month, day, overflow) {
    switch (overflow) {
      case 'reject':
        RejectISODate(year, month, day);
        break;
      case 'constrain':
        var _ConstrainISODate = ConstrainISODate(year, month, day);
        year = _ConstrainISODate.year;
        month = _ConstrainISODate.month;
        day = _ConstrainISODate.day;
        break;
    }
    return {
      year: year,
      month: month,
      day: day
    };
  }
  function RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow) {
    switch (overflow) {
      case 'reject':
        RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
        break;
      case 'constrain':
        var _ConstrainTime = ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond);
        hour = _ConstrainTime.hour;
        minute = _ConstrainTime.minute;
        second = _ConstrainTime.second;
        millisecond = _ConstrainTime.millisecond;
        microsecond = _ConstrainTime.microsecond;
        nanosecond = _ConstrainTime.nanosecond;
        break;
    }
    return {
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond
    };
  }
  function RegulateISOYearMonth(year, month, overflow) {
    var referenceISODay = 1;
    switch (overflow) {
      case 'reject':
        RejectISODate(year, month, referenceISODay);
        break;
      case 'constrain':
        var _ConstrainISODate2 = ConstrainISODate(year, month);
        year = _ConstrainISODate2.year;
        month = _ConstrainISODate2.month;
        break;
    }
    return {
      year: year,
      month: month
    };
  }
  function ToTemporalDurationRecord(item) {
    if (Type$6(item) !== 'Object') {
      return ParseTemporalDurationString(ToString$1(item));
    }
    if (IsTemporalDuration(item)) {
      return {
        years: GetSlot(item, YEARS),
        months: GetSlot(item, MONTHS),
        weeks: GetSlot(item, WEEKS),
        days: GetSlot(item, DAYS),
        hours: GetSlot(item, HOURS),
        minutes: GetSlot(item, MINUTES),
        seconds: GetSlot(item, SECONDS),
        milliseconds: GetSlot(item, MILLISECONDS),
        microseconds: GetSlot(item, MICROSECONDS),
        nanoseconds: GetSlot(item, NANOSECONDS)
      };
    }
    var result = {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    };
    var partial = ToTemporalPartialDurationRecord(item);
    for (var index = 0; index < DURATION_FIELDS.length; index++) {
      var property = DURATION_FIELDS[index];
      var value = partial[property];
      if (value !== undefined) {
        result[property] = value;
      }
    }
    var years = result.years,
      months = result.months,
      weeks = result.weeks,
      days = result.days,
      hours = result.hours,
      minutes = result.minutes,
      seconds = result.seconds,
      milliseconds = result.milliseconds,
      microseconds = result.microseconds,
      nanoseconds = result.nanoseconds;
    RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    return result;
  }
  function ToTemporalPartialDurationRecord(temporalDurationLike) {
    if (Type$6(temporalDurationLike) !== 'Object') {
      throw new TypeError('invalid duration-like');
    }
    var result = {
      years: undefined,
      months: undefined,
      weeks: undefined,
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      milliseconds: undefined,
      microseconds: undefined,
      nanoseconds: undefined
    };
    var any = false;
    for (var index = 0; index < DURATION_FIELDS.length; index++) {
      var property = DURATION_FIELDS[index];
      var value = temporalDurationLike[property];
      if (value !== undefined) {
        any = true;
        result[property] = ToIntegerIfIntegral(value);
      }
    }
    if (!any) {
      throw new TypeError('invalid duration-like');
    }
    return result;
  }
  function ToLimitedTemporalDuration(item, disallowedProperties) {
    var record = ToTemporalDurationRecord(item);
    var _iterator2 = _createForOfIteratorHelper(disallowedProperties),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var property = _step2.value;
        if (record[property] !== 0) {
          throw new RangeError("Duration field ".concat(property, " not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead."));
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return record;
  }
  function ToTemporalOverflow(options) {
    if (options === undefined) return 'constrain';
    return GetOption(options, 'overflow', ['constrain', 'reject'], 'constrain');
  }
  function ToTemporalDisambiguation(options) {
    if (options === undefined) return 'compatible';
    return GetOption(options, 'disambiguation', ['compatible', 'earlier', 'later', 'reject'], 'compatible');
  }
  function ToTemporalRoundingMode(options, fallback) {
    return GetOption(options, 'roundingMode', ['ceil', 'floor', 'expand', 'trunc', 'halfCeil', 'halfFloor', 'halfExpand', 'halfTrunc', 'halfEven'], fallback);
  }
  function NegateTemporalRoundingMode(roundingMode) {
    switch (roundingMode) {
      case 'ceil':
        return 'floor';
      case 'floor':
        return 'ceil';
      case 'halfCeil':
        return 'halfFloor';
      case 'halfFloor':
        return 'halfCeil';
      default:
        return roundingMode;
    }
  }
  function ToTemporalOffset(options, fallback) {
    if (options === undefined) return fallback;
    return GetOption(options, 'offset', ['prefer', 'use', 'ignore', 'reject'], fallback);
  }
  function ToCalendarNameOption(options) {
    return GetOption(options, 'calendarName', ['auto', 'always', 'never', 'critical'], 'auto');
  }
  function ToTimeZoneNameOption(options) {
    return GetOption(options, 'timeZoneName', ['auto', 'never', 'critical'], 'auto');
  }
  function ToShowOffsetOption(options) {
    return GetOption(options, 'offset', ['auto', 'never'], 'auto');
  }
  function ToTemporalRoundingIncrement(options) {
    var increment = options.roundingIncrement;
    if (increment === undefined) return 1;
    increment = ToNumber$2(increment);
    if (!NumberIsFinite(increment)) {
      throw new RangeError('roundingIncrement must be finite');
    }
    var integerIncrement = MathTrunc(increment);
    if (integerIncrement < 1 || integerIncrement > 1e9) {
      throw new RangeError("roundingIncrement must be at least 1 and at most 1e9, not ".concat(increment));
    }
    return integerIncrement;
  }
  function ValidateTemporalRoundingIncrement(increment, dividend, inclusive) {
    var maximum = inclusive ? dividend : dividend - 1;
    if (increment > maximum) {
      throw new RangeError("roundingIncrement must be at least 1 and less than ".concat(maximum, ", not ").concat(increment));
    }
    if (dividend % increment !== 0) {
      throw new RangeError("Rounding increment must divide evenly into ".concat(dividend));
    }
  }
  function ToFractionalSecondDigits(normalizedOptions) {
    var digitsValue = normalizedOptions.fractionalSecondDigits;
    if (digitsValue === undefined) return 'auto';
    if (Type$6(digitsValue) !== 'Number') {
      if (ToString$1(digitsValue) !== 'auto') {
        throw new RangeError("fractionalSecondDigits must be 'auto' or 0 through 9, not ".concat(digitsValue));
      }
      return 'auto';
    }
    var digitCount = MathFloor$1(digitsValue);
    if (!NumberIsFinite(digitCount) || digitCount < 0 || digitCount > 9) {
      throw new RangeError("fractionalSecondDigits must be 'auto' or 0 through 9, not ".concat(digitsValue));
    }
    return digitCount;
  }
  function ToSecondsStringPrecisionRecord(smallestUnit, precision) {
    switch (smallestUnit) {
      case 'minute':
        return {
          precision: 'minute',
          unit: 'minute',
          increment: 1
        };
      case 'second':
        return {
          precision: 0,
          unit: 'second',
          increment: 1
        };
      case 'millisecond':
        return {
          precision: 3,
          unit: 'millisecond',
          increment: 1
        };
      case 'microsecond':
        return {
          precision: 6,
          unit: 'microsecond',
          increment: 1
        };
      case 'nanosecond':
        return {
          precision: 9,
          unit: 'nanosecond',
          increment: 1
        };
    }

    switch (precision) {
      case 'auto':
        return {
          precision: precision,
          unit: 'nanosecond',
          increment: 1
        };
      case 0:
        return {
          precision: precision,
          unit: 'second',
          increment: 1
        };
      case 1:
      case 2:
      case 3:
        return {
          precision: precision,
          unit: 'millisecond',
          increment: Math.pow(10, 3 - precision)
        };
      case 4:
      case 5:
      case 6:
        return {
          precision: precision,
          unit: 'microsecond',
          increment: Math.pow(10, 6 - precision)
        };
      case 7:
      case 8:
      case 9:
        return {
          precision: precision,
          unit: 'nanosecond',
          increment: Math.pow(10, 9 - precision)
        };
    }
  }
  var REQUIRED = Symbol('~required~');
  function GetTemporalUnit(options, key, unitGroup, requiredOrDefault) {
    var extraValues = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var allowedSingular = [];
    for (var index = 0; index < SINGULAR_PLURAL_UNITS.length; index++) {
      var unitInfo = SINGULAR_PLURAL_UNITS[index];
      var singular = unitInfo[1];
      var category = unitInfo[2];
      if (unitGroup === 'datetime' || unitGroup === category) {
        allowedSingular.push(singular);
      }
    }
    Call$1(ArrayPrototypePush$4, allowedSingular, extraValues);
    var defaultVal = requiredOrDefault;
    if (defaultVal === REQUIRED) {
      defaultVal = undefined;
    } else if (defaultVal !== undefined) {
      allowedSingular.push(defaultVal);
    }
    var allowedValues = [];
    Call$1(ArrayPrototypePush$4, allowedValues, allowedSingular);
    for (var _index = 0; _index < allowedSingular.length; _index++) {
      var _singular = allowedSingular[_index];
      var plural = PLURAL_FOR.get(_singular);
      if (plural !== undefined) allowedValues.push(plural);
    }
    var retval = GetOption(options, key, allowedValues, defaultVal);
    if (retval === undefined && requiredOrDefault === REQUIRED) {
      throw new RangeError("".concat(key, " is required"));
    }
    if (SINGULAR_FOR.has(retval)) retval = SINGULAR_FOR.get(retval);
    return retval;
  }
  function ToRelativeTemporalObject(options) {
    var relativeTo = options.relativeTo;
    if (relativeTo === undefined) return relativeTo;
    var offsetBehaviour = 'option';
    var matchMinutes = false;
    var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, timeZone, offset;
    if (Type$6(relativeTo) === 'Object') {
      if (IsTemporalZonedDateTime(relativeTo) || IsTemporalDate(relativeTo)) return relativeTo;
      if (IsTemporalDateTime(relativeTo)) return TemporalDateTimeToDate(relativeTo);
      calendar = GetTemporalCalendarSlotValueWithISODefault(relativeTo);
      var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
      Call$1(ArrayPrototypePush$4, fieldNames, ['timeZone', 'offset']);
      var fields = PrepareTemporalFields(relativeTo, fieldNames, []);
      var dateOptions = ObjectCreate$8(null);
      dateOptions.overflow = 'constrain';
      var _InterpretTemporalDat = InterpretTemporalDateTimeFields(calendar, fields, dateOptions);
      year = _InterpretTemporalDat.year;
      month = _InterpretTemporalDat.month;
      day = _InterpretTemporalDat.day;
      hour = _InterpretTemporalDat.hour;
      minute = _InterpretTemporalDat.minute;
      second = _InterpretTemporalDat.second;
      millisecond = _InterpretTemporalDat.millisecond;
      microsecond = _InterpretTemporalDat.microsecond;
      nanosecond = _InterpretTemporalDat.nanosecond;
      offset = fields.offset;
      if (offset === undefined) offsetBehaviour = 'wall';
      timeZone = fields.timeZone;
      if (timeZone !== undefined) timeZone = ToTemporalTimeZoneSlotValue(timeZone);
    } else {
      var ianaName, z;
      var _ParseISODateTime4 = ParseISODateTime(ToString$1(relativeTo));
      year = _ParseISODateTime4.year;
      month = _ParseISODateTime4.month;
      day = _ParseISODateTime4.day;
      hour = _ParseISODateTime4.hour;
      minute = _ParseISODateTime4.minute;
      second = _ParseISODateTime4.second;
      millisecond = _ParseISODateTime4.millisecond;
      microsecond = _ParseISODateTime4.microsecond;
      nanosecond = _ParseISODateTime4.nanosecond;
      calendar = _ParseISODateTime4.calendar;
      ianaName = _ParseISODateTime4.ianaName;
      offset = _ParseISODateTime4.offset;
      z = _ParseISODateTime4.z;
      if (ianaName) {
        timeZone = ToTemporalTimeZoneSlotValue(ianaName);
        if (z) {
          offsetBehaviour = 'exact';
        } else if (!offset) {
          offsetBehaviour = 'wall';
        }
        matchMinutes = true;
      } else if (z) {
        throw new RangeError('Z designator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone');
      }
      if (!calendar) calendar = 'iso8601';
      if (!IsBuiltinCalendar(calendar)) throw new RangeError("invalid calendar identifier ".concat(calendar));
      calendar = ASCIILowercase(calendar);
    }
    if (timeZone === undefined) return CreateTemporalDate(year, month, day, calendar);
    var offsetNs = offsetBehaviour === 'option' ? ParseTimeZoneOffsetString(offset) : 0;
    var epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, 'compatible', 'reject', matchMinutes);
    return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
  }
  function DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
    var entries = ObjectEntries$1({
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    });
    for (var index = 0; index < entries.length; index++) {
      var entry = entries[index];
      var prop = entry[0];
      var v = entry[1];
      if (v !== 0) return SINGULAR_FOR.get(prop);
    }
    return 'nanosecond';
  }
  function LargerOfTwoTemporalUnits(unit1, unit2) {
    if (UNITS_DESCENDING.indexOf(unit1) > UNITS_DESCENDING.indexOf(unit2)) return unit2;
    return unit1;
  }
  function PrepareTemporalFields(bag, fields, requiredFields) {
    var _ref9 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref9$emptySourceErro = _ref9.emptySourceErrorMessage,
      emptySourceErrorMessage = _ref9$emptySourceErro === void 0 ? 'no supported properties found' : _ref9$emptySourceErro;
    var result = ObjectCreate$8(null);
    var any = false;
    Call$1(ArrayPrototypeSort, fields, []);
    for (var index = 0; index < fields.length; index++) {
      var property = fields[index];
      var value = bag[property];
      if (value !== undefined) {
        any = true;
        if (BUILTIN_CASTS.has(property)) {
          value = BUILTIN_CASTS.get(property)(value);
        }
        result[property] = value;
      } else if (requiredFields !== 'partial') {
        if (Call$1(ArrayIncludes$1, requiredFields, [property])) {
          throw new TypeError("required property '".concat(property, "' missing or undefined"));
        }
        value = BUILTIN_DEFAULTS.get(property);
        result[property] = value;
      }
    }
    if (requiredFields === 'partial' && !any) {
      throw new TypeError(emptySourceErrorMessage);
    }
    return result;
  }
  function ToTemporalTimeRecord(bag) {
    var completeness = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'complete';
    var fields = ['hour', 'microsecond', 'millisecond', 'minute', 'nanosecond', 'second'];
    var partial = PrepareTemporalFields(bag, fields, 'partial', {
      emptySourceErrorMessage: 'invalid time-like'
    });
    var result = {};
    for (var index = 0; index < fields.length; index++) {
      var field = fields[index];
      var valueDesc = ObjectGetOwnPropertyDescriptor(partial, field);
      if (valueDesc !== undefined) {
        result[field] = valueDesc.value;
      } else if (completeness === 'complete') {
        result[field] = 0;
      }
    }
    return result;
  }
  function ToTemporalDate(item, options) {
    if (Type$6(item) === 'Object') {
      if (IsTemporalDate(item)) return item;
      if (IsTemporalZonedDateTime(item)) {
        ToTemporalOverflow(options); // validate and ignore
        item = GetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
      }
      if (IsTemporalDateTime(item)) {
        ToTemporalOverflow(options); // validate and ignore
        return CreateTemporalDate(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR));
      }
      var _calendar = GetTemporalCalendarSlotValueWithISODefault(item);
      var fieldNames = CalendarFields(_calendar, ['day', 'month', 'monthCode', 'year']);
      var fields = PrepareTemporalFields(item, fieldNames, []);
      return CalendarDateFromFields(_calendar, fields, options);
    }
    ToTemporalOverflow(options); // validate and ignore
    var _ParseTemporalDateStr = ParseTemporalDateString(ToString$1(item)),
      year = _ParseTemporalDateStr.year,
      month = _ParseTemporalDateStr.month,
      day = _ParseTemporalDateStr.day,
      calendar = _ParseTemporalDateStr.calendar,
      z = _ParseTemporalDateStr.z;
    if (z) throw new RangeError('Z designator not supported for PlainDate');
    if (!calendar) calendar = 'iso8601';
    if (!IsBuiltinCalendar(calendar)) throw new RangeError("invalid calendar identifier ".concat(calendar));
    calendar = ASCIILowercase(calendar);
    return CreateTemporalDate(year, month, day, calendar);
  }
  function InterpretTemporalDateTimeFields(calendar, fields, options) {
    var _ToTemporalTimeRecord = ToTemporalTimeRecord(fields),
      hour = _ToTemporalTimeRecord.hour,
      minute = _ToTemporalTimeRecord.minute,
      second = _ToTemporalTimeRecord.second,
      millisecond = _ToTemporalTimeRecord.millisecond,
      microsecond = _ToTemporalTimeRecord.microsecond,
      nanosecond = _ToTemporalTimeRecord.nanosecond;
    var overflow = ToTemporalOverflow(options);
    var date = CalendarDateFromFields(calendar, fields, options);
    var year = GetSlot(date, ISO_YEAR);
    var month = GetSlot(date, ISO_MONTH);
    var day = GetSlot(date, ISO_DAY);
    var _RegulateTime = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);
    hour = _RegulateTime.hour;
    minute = _RegulateTime.minute;
    second = _RegulateTime.second;
    millisecond = _RegulateTime.millisecond;
    microsecond = _RegulateTime.microsecond;
    nanosecond = _RegulateTime.nanosecond;
    return {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond
    };
  }
  function ToTemporalDateTime(item, options) {
    var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar;
    if (Type$6(item) === 'Object') {
      if (IsTemporalDateTime(item)) return item;
      if (IsTemporalZonedDateTime(item)) {
        ToTemporalOverflow(options); // validate and ignore
        return GetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
      }
      if (IsTemporalDate(item)) {
        ToTemporalOverflow(options); // validate and ignore
        return CreateTemporalDateTime(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(item, CALENDAR));
      }
      calendar = GetTemporalCalendarSlotValueWithISODefault(item);
      var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
      var fields = PrepareTemporalFields(item, fieldNames, []);
      var _InterpretTemporalDat2 = InterpretTemporalDateTimeFields(calendar, fields, options);
      year = _InterpretTemporalDat2.year;
      month = _InterpretTemporalDat2.month;
      day = _InterpretTemporalDat2.day;
      hour = _InterpretTemporalDat2.hour;
      minute = _InterpretTemporalDat2.minute;
      second = _InterpretTemporalDat2.second;
      millisecond = _InterpretTemporalDat2.millisecond;
      microsecond = _InterpretTemporalDat2.microsecond;
      nanosecond = _InterpretTemporalDat2.nanosecond;
    } else {
      ToTemporalOverflow(options); // validate and ignore
      var z;
      var _ParseTemporalDateTim = ParseTemporalDateTimeString(ToString$1(item));
      year = _ParseTemporalDateTim.year;
      month = _ParseTemporalDateTim.month;
      day = _ParseTemporalDateTim.day;
      hour = _ParseTemporalDateTim.hour;
      minute = _ParseTemporalDateTim.minute;
      second = _ParseTemporalDateTim.second;
      millisecond = _ParseTemporalDateTim.millisecond;
      microsecond = _ParseTemporalDateTim.microsecond;
      nanosecond = _ParseTemporalDateTim.nanosecond;
      calendar = _ParseTemporalDateTim.calendar;
      z = _ParseTemporalDateTim.z;
      if (z) throw new RangeError('Z designator not supported for PlainDateTime');
      RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
      if (!calendar) calendar = 'iso8601';
      if (!IsBuiltinCalendar(calendar)) throw new RangeError("invalid calendar identifier ".concat(calendar));
      calendar = ASCIILowercase(calendar);
    }
    return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
  }
  function ToTemporalDuration(item) {
    if (IsTemporalDuration(item)) return item;
    var _ToTemporalDurationRe = ToTemporalDurationRecord(item),
      years = _ToTemporalDurationRe.years,
      months = _ToTemporalDurationRe.months,
      weeks = _ToTemporalDurationRe.weeks,
      days = _ToTemporalDurationRe.days,
      hours = _ToTemporalDurationRe.hours,
      minutes = _ToTemporalDurationRe.minutes,
      seconds = _ToTemporalDurationRe.seconds,
      milliseconds = _ToTemporalDurationRe.milliseconds,
      microseconds = _ToTemporalDurationRe.microseconds,
      nanoseconds = _ToTemporalDurationRe.nanoseconds;
    var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    return new TemporalDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
  }
  function ToTemporalInstant(item) {
    if (IsTemporalInstant(item)) return item;
    if (IsTemporalZonedDateTime(item)) {
      var _TemporalInstant = GetIntrinsic('%Temporal.Instant%');
      return new _TemporalInstant(GetSlot(item, EPOCHNANOSECONDS));
    }
    var ns = ParseTemporalInstant(ToString$1(item));
    var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    return new TemporalInstant(ns);
  }
  function ToTemporalMonthDay(item, options) {
    if (Type$6(item) === 'Object') {
      if (IsTemporalMonthDay(item)) return item;
      var _calendar2, calendarAbsent;
      if (HasSlot(item, CALENDAR)) {
        _calendar2 = GetSlot(item, CALENDAR);
        calendarAbsent = false;
      } else {
        _calendar2 = item.calendar;
        calendarAbsent = _calendar2 === undefined;
        if (_calendar2 === undefined) _calendar2 = 'iso8601';
        _calendar2 = ToTemporalCalendarSlotValue(_calendar2);
      }
      var fieldNames = CalendarFields(_calendar2, ['day', 'month', 'monthCode', 'year']);
      var fields = PrepareTemporalFields(item, fieldNames, []);
      // Callers who omit the calendar are not writing calendar-independent
      // code. In that case, `monthCode`/`year` can be omitted; `month` and
      // `day` are sufficient. Add a `year` to satisfy calendar validation.
      if (calendarAbsent && fields.month !== undefined && fields.monthCode === undefined && fields.year === undefined) {
        fields.year = 1972;
      }
      return CalendarMonthDayFromFields(_calendar2, fields, options);
    }
    ToTemporalOverflow(options); // validate and ignore
    var _ParseTemporalMonthDa2 = ParseTemporalMonthDayString(ToString$1(item)),
      month = _ParseTemporalMonthDa2.month,
      day = _ParseTemporalMonthDa2.day,
      referenceISOYear = _ParseTemporalMonthDa2.referenceISOYear,
      calendar = _ParseTemporalMonthDa2.calendar;
    if (calendar === undefined) calendar = 'iso8601';
    if (!IsBuiltinCalendar(calendar)) throw new RangeError("invalid calendar identifier ".concat(calendar));
    calendar = ASCIILowercase(calendar);
    if (referenceISOYear === undefined) {
      RejectISODate(1972, month, day);
      return CreateTemporalMonthDay(month, day, calendar);
    }
    var result = CreateTemporalMonthDay(month, day, calendar, referenceISOYear);
    return CalendarMonthDayFromFields(calendar, result);
  }
  function ToTemporalTime(item) {
    var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'constrain';
    var hour, minute, second, millisecond, microsecond, nanosecond;
    if (Type$6(item) === 'Object') {
      if (IsTemporalTime(item)) return item;
      if (IsTemporalZonedDateTime(item)) {
        item = GetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
      }
      if (IsTemporalDateTime(item)) {
        var _TemporalPlainTime = GetIntrinsic('%Temporal.PlainTime%');
        return new _TemporalPlainTime(GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND));
      }
      var _ToTemporalTimeRecord2 = ToTemporalTimeRecord(item);
      hour = _ToTemporalTimeRecord2.hour;
      minute = _ToTemporalTimeRecord2.minute;
      second = _ToTemporalTimeRecord2.second;
      millisecond = _ToTemporalTimeRecord2.millisecond;
      microsecond = _ToTemporalTimeRecord2.microsecond;
      nanosecond = _ToTemporalTimeRecord2.nanosecond;
      var _RegulateTime2 = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);
      hour = _RegulateTime2.hour;
      minute = _RegulateTime2.minute;
      second = _RegulateTime2.second;
      millisecond = _RegulateTime2.millisecond;
      microsecond = _RegulateTime2.microsecond;
      nanosecond = _RegulateTime2.nanosecond;
    } else {
      var _ParseTemporalTimeStr = ParseTemporalTimeString(ToString$1(item));
      hour = _ParseTemporalTimeStr.hour;
      minute = _ParseTemporalTimeStr.minute;
      second = _ParseTemporalTimeStr.second;
      millisecond = _ParseTemporalTimeStr.millisecond;
      microsecond = _ParseTemporalTimeStr.microsecond;
      nanosecond = _ParseTemporalTimeStr.nanosecond;
      RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
    var TemporalPlainTime = GetIntrinsic('%Temporal.PlainTime%');
    return new TemporalPlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
  }
  function ToTemporalYearMonth(item, options) {
    if (Type$6(item) === 'Object') {
      if (IsTemporalYearMonth(item)) return item;
      var _calendar3 = GetTemporalCalendarSlotValueWithISODefault(item);
      var fieldNames = CalendarFields(_calendar3, ['month', 'monthCode', 'year']);
      var fields = PrepareTemporalFields(item, fieldNames, []);
      return CalendarYearMonthFromFields(_calendar3, fields, options);
    }
    ToTemporalOverflow(options); // validate and ignore
    var _ParseTemporalYearMon2 = ParseTemporalYearMonthString(ToString$1(item)),
      year = _ParseTemporalYearMon2.year,
      month = _ParseTemporalYearMon2.month,
      referenceISODay = _ParseTemporalYearMon2.referenceISODay,
      calendar = _ParseTemporalYearMon2.calendar;
    if (calendar === undefined) calendar = 'iso8601';
    if (!IsBuiltinCalendar(calendar)) throw new RangeError("invalid calendar identifier ".concat(calendar));
    calendar = ASCIILowercase(calendar);
    if (referenceISODay === undefined) {
      RejectISODate(year, month, 1);
      return CreateTemporalYearMonth(year, month, calendar);
    }
    var result = CreateTemporalYearMonth(year, month, calendar, referenceISODay);
    return CalendarYearMonthFromFields(calendar, result);
  }
  function InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, disambiguation, offsetOpt, matchMinute) {
    var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
    var dt = new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (offsetBehaviour === 'wall' || offsetOpt === 'ignore') {
      // Simple case: ISO string without a TZ offset (or caller wants to ignore
      // the offset), so just convert DateTime to Instant in the given time zone
      var _instant = GetInstantFor(timeZone, dt, disambiguation);
      return GetSlot(_instant, EPOCHNANOSECONDS);
    }

    // The caller wants the offset to always win ('use') OR the caller is OK
    // with the offset winning ('prefer' or 'reject') as long as it's valid
    // for this timezone and date/time.
    if (offsetBehaviour === 'exact' || offsetOpt === 'use') {
      // Calculate the instant for the input's date/time and offset
      var epochNs = GetUTCEpochNanoseconds(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
      if (epochNs === null) throw new RangeError('ZonedDateTime outside of supported range');
      return epochNs.minus(offsetNs);
    }

    // "prefer" or "reject"
    var possibleInstants = GetPossibleInstantsFor(timeZone, dt);
    for (var index = 0; index < possibleInstants.length; index++) {
      var candidate = possibleInstants[index];
      var candidateOffset = GetOffsetNanosecondsFor(timeZone, candidate);
      var roundedCandidateOffset = RoundNumberToIncrement(bigInt(candidateOffset), 60e9, 'halfExpand').toJSNumber();
      if (candidateOffset === offsetNs || matchMinute && roundedCandidateOffset === offsetNs) {
        return GetSlot(candidate, EPOCHNANOSECONDS);
      }
    }

    // the user-provided offset doesn't match any instants for this time
    // zone and date/time.
    if (offsetOpt === 'reject') {
      var offsetStr = FormatTimeZoneOffsetString(offsetNs);
      var timeZoneString = IsTemporalTimeZone(timeZone) ? GetSlot(timeZone, TIMEZONE_ID) : 'time zone';
      throw new RangeError("Offset ".concat(offsetStr, " is invalid for ").concat(dt, " in ").concat(timeZoneString));
    }
    // fall through: offsetOpt === 'prefer', but the offset doesn't match
    // so fall back to use the time zone instead.
    var instant = DisambiguatePossibleInstants(possibleInstants, timeZone, dt, disambiguation);
    return GetSlot(instant, EPOCHNANOSECONDS);
  }
  function ToTemporalZonedDateTime(item, options) {
    var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone, offset, calendar;
    var disambiguation, offsetOpt;
    var matchMinute = false;
    var offsetBehaviour = 'option';
    if (Type$6(item) === 'Object') {
      if (IsTemporalZonedDateTime(item)) return item;
      calendar = GetTemporalCalendarSlotValueWithISODefault(item);
      var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
      Call$1(ArrayPrototypePush$4, fieldNames, ['timeZone', 'offset']);
      var fields = PrepareTemporalFields(item, fieldNames, ['timeZone']);
      timeZone = ToTemporalTimeZoneSlotValue(fields.timeZone);
      offset = fields.offset;
      if (offset === undefined) {
        offsetBehaviour = 'wall';
      }
      disambiguation = ToTemporalDisambiguation(options);
      offsetOpt = ToTemporalOffset(options, 'reject');
      var _InterpretTemporalDat3 = InterpretTemporalDateTimeFields(calendar, fields, options);
      year = _InterpretTemporalDat3.year;
      month = _InterpretTemporalDat3.month;
      day = _InterpretTemporalDat3.day;
      hour = _InterpretTemporalDat3.hour;
      minute = _InterpretTemporalDat3.minute;
      second = _InterpretTemporalDat3.second;
      millisecond = _InterpretTemporalDat3.millisecond;
      microsecond = _InterpretTemporalDat3.microsecond;
      nanosecond = _InterpretTemporalDat3.nanosecond;
    } else {
      var ianaName, z;
      var _ParseTemporalZonedDa = ParseTemporalZonedDateTimeString(ToString$1(item));
      year = _ParseTemporalZonedDa.year;
      month = _ParseTemporalZonedDa.month;
      day = _ParseTemporalZonedDa.day;
      hour = _ParseTemporalZonedDa.hour;
      minute = _ParseTemporalZonedDa.minute;
      second = _ParseTemporalZonedDa.second;
      millisecond = _ParseTemporalZonedDa.millisecond;
      microsecond = _ParseTemporalZonedDa.microsecond;
      nanosecond = _ParseTemporalZonedDa.nanosecond;
      ianaName = _ParseTemporalZonedDa.ianaName;
      offset = _ParseTemporalZonedDa.offset;
      z = _ParseTemporalZonedDa.z;
      calendar = _ParseTemporalZonedDa.calendar;
      timeZone = ToTemporalTimeZoneSlotValue(ianaName);
      if (z) {
        offsetBehaviour = 'exact';
      } else if (!offset) {
        offsetBehaviour = 'wall';
      }
      if (!calendar) calendar = 'iso8601';
      if (!IsBuiltinCalendar(calendar)) throw new RangeError("invalid calendar identifier ".concat(calendar));
      calendar = ASCIILowercase(calendar);
      matchMinute = true; // ISO strings may specify offset with less precision
      disambiguation = ToTemporalDisambiguation(options);
      offsetOpt = ToTemporalOffset(options, 'reject');
      ToTemporalOverflow(options); // validate and ignore
    }

    var offsetNs = 0;
    if (offsetBehaviour === 'option') offsetNs = ParseTimeZoneOffsetString(offset);
    var epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, disambiguation, offsetOpt, matchMinute);
    return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
  }
  function CreateTemporalDateSlots(result, isoYear, isoMonth, isoDay, calendar) {
    RejectISODate(isoYear, isoMonth, isoDay);
    RejectDateRange(isoYear, isoMonth, isoDay);
    CreateSlots(result);
    SetSlot(result, ISO_YEAR, isoYear);
    SetSlot(result, ISO_MONTH, isoMonth);
    SetSlot(result, ISO_DAY, isoDay);
    SetSlot(result, CALENDAR, calendar);
    SetSlot(result, DATE_BRAND, true);
    {
      ObjectDefineProperty(result, '_repr_', {
        value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalDateToString(result), ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }
  function CreateTemporalDate(isoYear, isoMonth, isoDay) {
    var calendar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'iso8601';
    var TemporalPlainDate = GetIntrinsic('%Temporal.PlainDate%');
    var result = ObjectCreate$8(TemporalPlainDate.prototype);
    CreateTemporalDateSlots(result, isoYear, isoMonth, isoDay, calendar);
    return result;
  }
  function CreateTemporalDateTimeSlots(result, isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns, calendar) {
    RejectDateTime(isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns);
    RejectDateTimeRange(isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns);
    CreateSlots(result);
    SetSlot(result, ISO_YEAR, isoYear);
    SetSlot(result, ISO_MONTH, isoMonth);
    SetSlot(result, ISO_DAY, isoDay);
    SetSlot(result, ISO_HOUR, h);
    SetSlot(result, ISO_MINUTE, min);
    SetSlot(result, ISO_SECOND, s);
    SetSlot(result, ISO_MILLISECOND, ms);
    SetSlot(result, ISO_MICROSECOND, µs);
    SetSlot(result, ISO_NANOSECOND, ns);
    SetSlot(result, CALENDAR, calendar);
    {
      Object.defineProperty(result, '_repr_', {
        value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalDateTimeToString(result, 'auto'), ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }
  function CreateTemporalDateTime(isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns) {
    var calendar = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 'iso8601';
    var TemporalPlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
    var result = ObjectCreate$8(TemporalPlainDateTime.prototype);
    CreateTemporalDateTimeSlots(result, isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns, calendar);
    return result;
  }
  function CreateTemporalMonthDaySlots(result, isoMonth, isoDay, calendar, referenceISOYear) {
    RejectISODate(referenceISOYear, isoMonth, isoDay);
    RejectDateRange(referenceISOYear, isoMonth, isoDay);
    CreateSlots(result);
    SetSlot(result, ISO_MONTH, isoMonth);
    SetSlot(result, ISO_DAY, isoDay);
    SetSlot(result, ISO_YEAR, referenceISOYear);
    SetSlot(result, CALENDAR, calendar);
    SetSlot(result, MONTH_DAY_BRAND, true);
    {
      Object.defineProperty(result, '_repr_', {
        value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalMonthDayToString(result), ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }
  function CreateTemporalMonthDay(isoMonth, isoDay) {
    var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iso8601';
    var referenceISOYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1972;
    var TemporalPlainMonthDay = GetIntrinsic('%Temporal.PlainMonthDay%');
    var result = ObjectCreate$8(TemporalPlainMonthDay.prototype);
    CreateTemporalMonthDaySlots(result, isoMonth, isoDay, calendar, referenceISOYear);
    return result;
  }
  function CreateTemporalYearMonthSlots(result, isoYear, isoMonth, calendar, referenceISODay) {
    RejectISODate(isoYear, isoMonth, referenceISODay);
    RejectYearMonthRange(isoYear, isoMonth);
    CreateSlots(result);
    SetSlot(result, ISO_YEAR, isoYear);
    SetSlot(result, ISO_MONTH, isoMonth);
    SetSlot(result, ISO_DAY, referenceISODay);
    SetSlot(result, CALENDAR, calendar);
    SetSlot(result, YEAR_MONTH_BRAND, true);
    {
      Object.defineProperty(result, '_repr_', {
        value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalYearMonthToString(result), ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }
  function CreateTemporalYearMonth(isoYear, isoMonth) {
    var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iso8601';
    var referenceISODay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var TemporalPlainYearMonth = GetIntrinsic('%Temporal.PlainYearMonth%');
    var result = ObjectCreate$8(TemporalPlainYearMonth.prototype);
    CreateTemporalYearMonthSlots(result, isoYear, isoMonth, calendar, referenceISODay);
    return result;
  }
  function CreateTemporalZonedDateTimeSlots(result, epochNanoseconds, timeZone, calendar) {
    ValidateEpochNanoseconds(epochNanoseconds);
    CreateSlots(result);
    SetSlot(result, EPOCHNANOSECONDS, epochNanoseconds);
    SetSlot(result, TIME_ZONE, timeZone);
    SetSlot(result, CALENDAR, calendar);
    var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    var instant = new TemporalInstant(GetSlot(result, EPOCHNANOSECONDS));
    SetSlot(result, INSTANT, instant);
    {
      Object.defineProperty(result, '_repr_', {
        value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalZonedDateTimeToString(result, 'auto'), ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }
  function CreateTemporalZonedDateTime(epochNanoseconds, timeZone) {
    var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iso8601';
    var TemporalZonedDateTime = GetIntrinsic('%Temporal.ZonedDateTime%');
    var result = ObjectCreate$8(TemporalZonedDateTime.prototype);
    CreateTemporalZonedDateTimeSlots(result, epochNanoseconds, timeZone, calendar);
    return result;
  }
  function CalendarFields(calendar, fieldNames) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.fields%'), calendar, [fieldNames]);
    }
    var fields = GetMethod$2(calendar, 'fields');
    fieldNames = Call$1(fields, calendar, [fieldNames]);
    var result = [];
    var _iterator3 = _createForOfIteratorHelper(fieldNames),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var name = _step3.value;
        if (Type$6(name) !== 'String') throw new TypeError('bad return from calendar.fields()');
        Call$1(ArrayPrototypePush$4, result, [name]);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return result;
  }
  function CalendarMergeFields(calendar, fields, additionalFields) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.mergeFields%'), calendar, [fields, additionalFields]);
    }
    var mergeFields = GetMethod$2(calendar, 'mergeFields');
    var result = Call$1(mergeFields, calendar, [fields, additionalFields]);
    if (Type$6(result) !== 'Object') throw new TypeError('bad return from calendar.mergeFields()');
    return result;
  }
  function CalendarDateAdd(calendar, date, duration, options, dateAdd) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.dateAdd%'), calendar, [date, duration, options]);
    }
    if (dateAdd === undefined) {
      dateAdd = GetMethod$2(calendar, 'dateAdd');
    }
    var result = Call$1(dateAdd, calendar, [date, duration, options]);
    if (!IsTemporalDate(result)) throw new TypeError('invalid result');
    return result;
  }
  function CalendarDateUntil(calendar, date, otherDate, options, dateUntil) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.dateUntil%'), calendar, [date, otherDate, options]);
    }
    if (dateUntil === undefined) {
      dateUntil = GetMethod$2(calendar, 'dateUntil');
    }
    var result = Call$1(dateUntil, calendar, [date, otherDate, options]);
    if (!IsTemporalDuration(result)) throw new TypeError('invalid result');
    return result;
  }
  function CalendarYear(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.year%'), calendar, [dateLike]);
    }
    var year = GetMethod$2(calendar, 'year');
    var result = Call$1(year, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar year result must be an integer');
    }
    if (!IsIntegralNumber$2(result)) {
      throw new RangeError('calendar year result must be an integer');
    }
    return result;
  }
  function CalendarMonth(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.month%'), calendar, [dateLike]);
    }
    var month = GetMethod$2(calendar, 'month');
    var result = Call$1(month, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar month result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar month result must be a positive integer');
    }
    return result;
  }
  function CalendarMonthCode(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.monthCode%'), calendar, [dateLike]);
    }
    var monthCode = GetMethod$2(calendar, 'monthCode');
    var result = Call$1(monthCode, calendar, [dateLike]);
    if (typeof result !== 'string') {
      throw new TypeError('calendar monthCode result must be a string');
    }
    return result;
  }
  function CalendarDay(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.day%'), calendar, [dateLike]);
    }
    var day = GetMethod$2(calendar, 'day');
    var result = Call$1(day, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar day result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar day result must be a positive integer');
    }
    return result;
  }
  function CalendarEra(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.era%'), calendar, [dateLike]);
    }
    var era = GetMethod$2(calendar, 'era');
    var result = Call$1(era, calendar, [dateLike]);
    if (result === undefined) {
      return result;
    }
    if (typeof result !== 'string') {
      throw new TypeError('calendar era result must be a string or undefined');
    }
    return result;
  }
  function CalendarEraYear(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.eraYear%'), calendar, [dateLike]);
    }
    var eraYear = GetMethod$2(calendar, 'eraYear');
    var result = Call$1(eraYear, calendar, [dateLike]);
    if (result === undefined) {
      return result;
    }
    if (typeof result !== 'number') {
      throw new TypeError('calendar eraYear result must be an integer or undefined');
    }
    if (!IsIntegralNumber$2(result)) {
      throw new RangeError('calendar eraYear result must be an integer or undefined');
    }
    return result;
  }
  function CalendarDayOfWeek(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.dayOfWeek%'), calendar, [dateLike]);
    }
    var dayOfWeek = GetMethod$2(calendar, 'dayOfWeek');
    var result = Call$1(dayOfWeek, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar dayOfWeek result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar dayOfWeek result must be a positive integer');
    }
    return result;
  }
  function CalendarDayOfYear(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.dayOfYear%'), calendar, [dateLike]);
    }
    var dayOfYear = GetMethod$2(calendar, 'dayOfYear');
    var result = Call$1(dayOfYear, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar dayOfYear result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar dayOfYear result must be a positive integer');
    }
    return result;
  }
  function CalendarWeekOfYear(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.weekOfYear%'), calendar, [dateLike]);
    }
    var weekOfYear = GetMethod$2(calendar, 'weekOfYear');
    var result = Call$1(weekOfYear, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar weekOfYear result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar weekOfYear result must be a positive integer');
    }
    return result;
  }
  function CalendarYearOfWeek(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.yearOfWeek%'), calendar, [dateLike]);
    }
    var yearOfWeek = GetMethod$2(calendar, 'yearOfWeek');
    var result = Call$1(yearOfWeek, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar yearOfWeek result must be an integer');
    }
    if (!IsIntegralNumber$2(result)) {
      throw new RangeError('calendar yearOfWeek result must be an integer');
    }
    return result;
  }
  function CalendarDaysInWeek(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.daysInWeek%'), calendar, [dateLike]);
    }
    var daysInWeek = GetMethod$2(calendar, 'daysInWeek');
    var result = Call$1(daysInWeek, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar daysInWeek result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar daysInWeek result must be a positive integer');
    }
    return result;
  }
  function CalendarDaysInMonth(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.daysInMonth%'), calendar, [dateLike]);
    }
    var daysInMonth = GetMethod$2(calendar, 'daysInMonth');
    var result = Call$1(daysInMonth, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar daysInMonth result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar daysInMonth result must be a positive integer');
    }
    return result;
  }
  function CalendarDaysInYear(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.daysInYear%'), calendar, [dateLike]);
    }
    var daysInYear = GetMethod$2(calendar, 'daysInYear');
    var result = Call$1(daysInYear, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar daysInYear result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar daysInYear result must be a positive integer');
    }
    return result;
  }
  function CalendarMonthsInYear(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.monthsInYear%'), calendar, [dateLike]);
    }
    var monthsInYear = GetMethod$2(calendar, 'monthsInYear');
    var result = Call$1(monthsInYear, calendar, [dateLike]);
    if (typeof result !== 'number') {
      throw new TypeError('calendar monthsInYear result must be a positive integer');
    }
    if (!IsIntegralNumber$2(result) || result < 1) {
      throw new RangeError('calendar monthsInYear result must be a positive integer');
    }
    return result;
  }
  function CalendarInLeapYear(calendar, dateLike) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.inLeapYear%'), calendar, [dateLike]);
    }
    var inLeapYear = GetMethod$2(calendar, 'inLeapYear');
    var result = Call$1(inLeapYear, calendar, [dateLike]);
    if (typeof result !== 'boolean') {
      throw new TypeError('calendar inLeapYear result must be a boolean');
    }
    return result;
  }
  function ObjectImplementsTemporalCalendarProtocol(object) {
    if (IsTemporalCalendar(object)) return true;
    return 'dateAdd' in object && 'dateFromFields' in object && 'dateUntil' in object && 'day' in object && 'dayOfWeek' in object && 'dayOfYear' in object && 'daysInMonth' in object && 'daysInWeek' in object && 'daysInYear' in object && 'fields' in object && 'id' in object && 'inLeapYear' in object && 'mergeFields' in object && 'month' in object && 'monthCode' in object && 'monthDayFromFields' in object && 'monthsInYear' in object && 'weekOfYear' in object && 'year' in object && 'yearMonthFromFields' in object && 'yearOfWeek' in object;
  }
  function ToTemporalCalendarSlotValue(calendarLike) {
    if (Type$6(calendarLike) === 'Object') {
      if (HasSlot(calendarLike, CALENDAR)) return GetSlot(calendarLike, CALENDAR);
      if (!ObjectImplementsTemporalCalendarProtocol(calendarLike)) {
        throw new TypeError('expected a Temporal.Calendar or object implementing the Temporal.Calendar protocol');
      }
      return calendarLike;
    }
    var identifier = ToString$1(calendarLike);
    if (IsBuiltinCalendar(identifier)) return ASCIILowercase(identifier);
    var calendar;
    try {
      var _ParseISODateTime5 = ParseISODateTime(identifier);
      calendar = _ParseISODateTime5.calendar;
    } catch (_unused4) {
      try {
        var _ParseTemporalYearMon3 = ParseTemporalYearMonthString(identifier);
        calendar = _ParseTemporalYearMon3.calendar;
      } catch (_unused5) {
        var _ParseTemporalMonthDa3 = ParseTemporalMonthDayString(identifier);
        calendar = _ParseTemporalMonthDa3.calendar;
      }
    }
    if (!calendar) calendar = 'iso8601';
    if (!IsBuiltinCalendar(calendar)) throw new RangeError("invalid calendar identifier ".concat(calendar));
    return ASCIILowercase(calendar);
  }
  function GetTemporalCalendarSlotValueWithISODefault(item) {
    if (HasSlot(item, CALENDAR)) return GetSlot(item, CALENDAR);
    var calendar = item.calendar;
    if (calendar === undefined) return 'iso8601';
    return ToTemporalCalendarSlotValue(calendar);
  }
  function ToTemporalCalendarIdentifier(slotValue) {
    if (typeof slotValue === 'string') return slotValue;
    var result = slotValue.id;
    if (typeof result !== 'string') throw new TypeError('calendar.id should be a string');
    return result;
  }
  function ToTemporalCalendarObject(slotValue) {
    if (Type$6(slotValue) === 'Object') return slotValue;
    var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
    return new TemporalCalendar(slotValue);
  }
  function CalendarEquals(one, two) {
    if (one === two) return true;
    var cal1 = ToTemporalCalendarIdentifier(one);
    var cal2 = ToTemporalCalendarIdentifier(two);
    return cal1 === cal2;
  }

  // This operation is not in the spec, it implements the following:
  // "If ? CalendarEquals(one, two) is false, throw a RangeError exception."
  // This is so that we can build an informative error message without
  // re-getting the .id properties.
  function ThrowIfCalendarsNotEqual(one, two, errorMessageAction) {
    if (one === two) return;
    var cal1 = ToTemporalCalendarIdentifier(one);
    var cal2 = ToTemporalCalendarIdentifier(two);
    if (cal1 !== cal2) {
      throw new RangeError("cannot ".concat(errorMessageAction, " of ").concat(cal1, " and ").concat(cal2, " calendars"));
    }
  }
  function ConsolidateCalendars(one, two) {
    if (one === two) return two;
    var sOne = ToTemporalCalendarIdentifier(one);
    var sTwo = ToTemporalCalendarIdentifier(two);
    if (sOne === sTwo || sOne === 'iso8601') {
      return two;
    } else if (sTwo === 'iso8601') {
      return one;
    } else {
      throw new RangeError('irreconcilable calendars');
    }
  }
  function CalendarDateFromFields(calendar, fields, options, dateFromFields) {
    var _dateFromFields;
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.dateFromFields%'), calendar, [fields, options]);
    }
    (_dateFromFields = dateFromFields) !== null && _dateFromFields !== void 0 ? _dateFromFields : dateFromFields = GetMethod$2(calendar, 'dateFromFields');
    var result = Call$1(dateFromFields, calendar, [fields, options]);
    if (!IsTemporalDate(result)) throw new TypeError('invalid result');
    return result;
  }
  function CalendarYearMonthFromFields(calendar, fields, options) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.yearMonthFromFields%'), calendar, [fields, options]);
    }
    var yearMonthFromFields = GetMethod$2(calendar, 'yearMonthFromFields');
    var result = Call$1(yearMonthFromFields, calendar, [fields, options]);
    if (!IsTemporalYearMonth(result)) throw new TypeError('invalid result');
    return result;
  }
  function CalendarMonthDayFromFields(calendar, fields, options) {
    if (typeof calendar === 'string') {
      var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
      calendar = new TemporalCalendar(calendar);
      return Call$1(GetIntrinsic('%Temporal.Calendar.prototype.monthDayFromFields%'), calendar, [fields, options]);
    }
    var monthDayFromFields = GetMethod$2(calendar, 'monthDayFromFields');
    var result = Call$1(monthDayFromFields, calendar, [fields, options]);
    if (!IsTemporalMonthDay(result)) throw new TypeError('invalid result');
    return result;
  }
  function ObjectImplementsTemporalTimeZoneProtocol(object) {
    if (IsTemporalTimeZone(object)) return true;
    return 'getOffsetNanosecondsFor' in object && 'getPossibleInstantsFor' in object && 'id' in object;
  }
  function ToTemporalTimeZoneSlotValue(temporalTimeZoneLike) {
    if (Type$6(temporalTimeZoneLike) === 'Object') {
      if (IsTemporalZonedDateTime(temporalTimeZoneLike)) return GetSlot(temporalTimeZoneLike, TIME_ZONE);
      if (!ObjectImplementsTemporalTimeZoneProtocol(temporalTimeZoneLike)) {
        throw new TypeError('expected a Temporal.TimeZone or object implementing the Temporal.TimeZone protocol');
      }
      return temporalTimeZoneLike;
    }
    var identifier = ToString$1(temporalTimeZoneLike);
    return ParseTemporalTimeZone(identifier);
  }
  function ToTemporalTimeZoneIdentifier(slotValue) {
    if (typeof slotValue === 'string') return slotValue;
    var result = slotValue.id;
    if (typeof result !== 'string') throw new TypeError('timeZone.id should be a string');
    return result;
  }
  function ToTemporalTimeZoneObject(slotValue) {
    if (Type$6(slotValue) === 'Object') return slotValue;
    var TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
    return new TemporalTimeZone(slotValue);
  }
  function TimeZoneEquals(one, two) {
    if (one === two) return true;
    var tz1 = ToTemporalTimeZoneIdentifier(one);
    var tz2 = ToTemporalTimeZoneIdentifier(two);
    return tz1 === tz2;
  }
  function TemporalDateTimeToDate(dateTime) {
    return CreateTemporalDate(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, CALENDAR));
  }
  function TemporalDateTimeToTime(dateTime) {
    var Time = GetIntrinsic('%Temporal.PlainTime%');
    return new Time(GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
  }
  function GetOffsetNanosecondsFor(timeZone, instant, getOffsetNanosecondsFor) {
    var _getOffsetNanoseconds;
    if (typeof timeZone === 'string') {
      var TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
      timeZone = new TemporalTimeZone(timeZone);
      return Call$1(GetIntrinsic('%Temporal.TimeZone.prototype.getOffsetNanosecondsFor%'), timeZone, [instant]);
    }
    (_getOffsetNanoseconds = getOffsetNanosecondsFor) !== null && _getOffsetNanoseconds !== void 0 ? _getOffsetNanoseconds : getOffsetNanosecondsFor = GetMethod$2(timeZone, 'getOffsetNanosecondsFor');
    var offsetNs = Call$1(getOffsetNanosecondsFor, timeZone, [instant]);
    if (typeof offsetNs !== 'number') {
      throw new TypeError('bad return from getOffsetNanosecondsFor');
    }
    if (!IsIntegralNumber$2(offsetNs) || MathAbs$1(offsetNs) >= 86400e9) {
      throw new RangeError('out-of-range return from getOffsetNanosecondsFor');
    }
    return offsetNs;
  }
  function GetOffsetStringFor(timeZone, instant) {
    var offsetNs = GetOffsetNanosecondsFor(timeZone, instant);
    return FormatTimeZoneOffsetString(offsetNs);
  }
  function GetPlainDateTimeFor(timeZone, instant, calendar) {
    var ns = GetSlot(instant, EPOCHNANOSECONDS);
    var offsetNs = GetOffsetNanosecondsFor(timeZone, instant);
    var _GetISOPartsFromEpoch = GetISOPartsFromEpoch(ns),
      year = _GetISOPartsFromEpoch.year,
      month = _GetISOPartsFromEpoch.month,
      day = _GetISOPartsFromEpoch.day,
      hour = _GetISOPartsFromEpoch.hour,
      minute = _GetISOPartsFromEpoch.minute,
      second = _GetISOPartsFromEpoch.second,
      millisecond = _GetISOPartsFromEpoch.millisecond,
      microsecond = _GetISOPartsFromEpoch.microsecond,
      nanosecond = _GetISOPartsFromEpoch.nanosecond;
    var _BalanceISODateTime2 = BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond + offsetNs);
    year = _BalanceISODateTime2.year;
    month = _BalanceISODateTime2.month;
    day = _BalanceISODateTime2.day;
    hour = _BalanceISODateTime2.hour;
    minute = _BalanceISODateTime2.minute;
    second = _BalanceISODateTime2.second;
    millisecond = _BalanceISODateTime2.millisecond;
    microsecond = _BalanceISODateTime2.microsecond;
    nanosecond = _BalanceISODateTime2.nanosecond;
    return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
  }
  function GetInstantFor(timeZone, dateTime, disambiguation) {
    var possibleInstants = GetPossibleInstantsFor(timeZone, dateTime);
    return DisambiguatePossibleInstants(possibleInstants, timeZone, dateTime, disambiguation);
  }
  function DisambiguatePossibleInstants(possibleInstants, timeZone, dateTime, disambiguation) {
    var Instant = GetIntrinsic('%Temporal.Instant%');
    var numInstants = possibleInstants.length;
    if (numInstants === 1) return possibleInstants[0];
    if (numInstants) {
      switch (disambiguation) {
        case 'compatible':
        // fall through because 'compatible' means 'earlier' for "fall back" transitions
        case 'earlier':
          return possibleInstants[0];
        case 'later':
          return possibleInstants[numInstants - 1];
        case 'reject':
          {
            throw new RangeError('multiple instants found');
          }
      }
    }
    var year = GetSlot(dateTime, ISO_YEAR);
    var month = GetSlot(dateTime, ISO_MONTH);
    var day = GetSlot(dateTime, ISO_DAY);
    var hour = GetSlot(dateTime, ISO_HOUR);
    var minute = GetSlot(dateTime, ISO_MINUTE);
    var second = GetSlot(dateTime, ISO_SECOND);
    var millisecond = GetSlot(dateTime, ISO_MILLISECOND);
    var microsecond = GetSlot(dateTime, ISO_MICROSECOND);
    var nanosecond = GetSlot(dateTime, ISO_NANOSECOND);
    var utcns = GetUTCEpochNanoseconds(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (utcns === null) throw new RangeError('DateTime outside of supported range');
    var dayBefore = new Instant(utcns.minus(86400e9));
    var dayAfter = new Instant(utcns.plus(86400e9));
    var offsetBefore = GetOffsetNanosecondsFor(timeZone, dayBefore);
    var offsetAfter = GetOffsetNanosecondsFor(timeZone, dayAfter);
    var nanoseconds = offsetAfter - offsetBefore;
    switch (disambiguation) {
      case 'earlier':
        {
          var calendar = GetSlot(dateTime, CALENDAR);
          var PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
          var earlier = AddDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, 0, 0, 0, 0, 0, 0, 0, 0, 0, -nanoseconds, undefined);
          var earlierPlainDateTime = new PlainDateTime(earlier.year, earlier.month, earlier.day, earlier.hour, earlier.minute, earlier.second, earlier.millisecond, earlier.microsecond, earlier.nanosecond, calendar);
          return GetPossibleInstantsFor(timeZone, earlierPlainDateTime)[0];
        }
      case 'compatible':
      // fall through because 'compatible' means 'later' for "spring forward" transitions
      case 'later':
        {
          var _calendar4 = GetSlot(dateTime, CALENDAR);
          var _PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
          var later = AddDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, _calendar4, 0, 0, 0, 0, 0, 0, 0, 0, 0, nanoseconds, undefined);
          var laterPlainDateTime = new _PlainDateTime(later.year, later.month, later.day, later.hour, later.minute, later.second, later.millisecond, later.microsecond, later.nanosecond, _calendar4);
          var possible = GetPossibleInstantsFor(timeZone, laterPlainDateTime);
          return possible[possible.length - 1];
        }
      case 'reject':
        {
          throw new RangeError('no such instant found');
        }
    }
    throw new Error("assertion failed: invalid disambiguation value ".concat(disambiguation));
  }
  function GetPossibleInstantsFor(timeZone, dateTime) {
    var _getPossibleInstantsF;
    var getPossibleInstantsFor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    if (typeof timeZone === 'string') {
      var TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
      timeZone = new TemporalTimeZone(timeZone);
      return Call$1(GetIntrinsic('%Temporal.TimeZone.prototype.getPossibleInstantsFor%'), timeZone, [dateTime]);
    }
    (_getPossibleInstantsF = getPossibleInstantsFor) !== null && _getPossibleInstantsF !== void 0 ? _getPossibleInstantsF : getPossibleInstantsFor = GetMethod$2(timeZone, 'getPossibleInstantsFor');
    var possibleInstants = Call$1(getPossibleInstantsFor, timeZone, [dateTime]);
    var result = [];
    var _iterator4 = _createForOfIteratorHelper(possibleInstants),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var instant = _step4.value;
        if (!IsTemporalInstant(instant)) {
          throw new TypeError('bad return from getPossibleInstantsFor');
        }
        Call$1(ArrayPrototypePush$4, result, [instant]);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return result;
  }
  function ISOYearString(year) {
    var yearString;
    if (year < 0 || year > 9999) {
      var sign = year < 0 ? '-' : '+';
      var yearNumber = MathAbs$1(year);
      yearString = sign + "000000".concat(yearNumber).slice(-6);
    } else {
      yearString = "0000".concat(year).slice(-4);
    }
    return yearString;
  }
  function ISODateTimePartString(part) {
    return "00".concat(part).slice(-2);
  }
  function FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision) {
    if (precision === 'minute') return '';
    var secs = ":".concat(ISODateTimePartString(second));
    var fraction = millisecond * 1e6 + microsecond * 1e3 + nanosecond;
    if (precision === 'auto') {
      if (fraction === 0) return secs;
      fraction = "".concat(fraction).padStart(9, '0');
      while (fraction[fraction.length - 1] === '0') fraction = fraction.slice(0, -1);
    } else {
      if (precision === 0) return secs;
      fraction = "".concat(fraction).padStart(9, '0').slice(0, precision);
    }
    return "".concat(secs, ".").concat(fraction);
  }
  function TemporalInstantToString(instant, timeZone, precision) {
    var outputTimeZone = timeZone;
    if (outputTimeZone === undefined) outputTimeZone = 'UTC';
    var dateTime = GetPlainDateTimeFor(outputTimeZone, instant, 'iso8601');
    var year = ISOYearString(GetSlot(dateTime, ISO_YEAR));
    var month = ISODateTimePartString(GetSlot(dateTime, ISO_MONTH));
    var day = ISODateTimePartString(GetSlot(dateTime, ISO_DAY));
    var hour = ISODateTimePartString(GetSlot(dateTime, ISO_HOUR));
    var minute = ISODateTimePartString(GetSlot(dateTime, ISO_MINUTE));
    var seconds = FormatSecondsStringPart(GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND), precision);
    var timeZoneString = 'Z';
    if (timeZone !== undefined) {
      var offsetNs = GetOffsetNanosecondsFor(outputTimeZone, instant);
      timeZoneString = FormatISOTimeZoneOffsetString(offsetNs);
    }
    return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds).concat(timeZoneString);
  }
  function formatAsDecimalNumber(num) {
    if (num <= NumberMaxSafeInteger) return num.toString(10);
    return bigInt(num).toString();
  }
  function TemporalDurationToString(years, months, weeks, days, hours, minutes, seconds, ms, µs, ns) {
    var precision = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 'auto';
    var sign = DurationSign(years, months, weeks, days, hours, minutes, seconds, ms, µs, ns);
    var total = TotalDurationNanoseconds(0, 0, 0, seconds, ms, µs, ns, 0);
    var _total$divmod = total.divmod(1000);
    total = _total$divmod.quotient;
    ns = _total$divmod.remainder;
    var _total$divmod2 = total.divmod(1000);
    total = _total$divmod2.quotient;
    µs = _total$divmod2.remainder;
    var _total$divmod3 = total.divmod(1000);
    seconds = _total$divmod3.quotient;
    ms = _total$divmod3.remainder;
    var datePart = '';
    if (years !== 0) datePart += "".concat(formatAsDecimalNumber(MathAbs$1(years)), "Y");
    if (months !== 0) datePart += "".concat(formatAsDecimalNumber(MathAbs$1(months)), "M");
    if (weeks !== 0) datePart += "".concat(formatAsDecimalNumber(MathAbs$1(weeks)), "W");
    if (days !== 0) datePart += "".concat(formatAsDecimalNumber(MathAbs$1(days)), "D");
    var timePart = '';
    if (hours !== 0) timePart += "".concat(formatAsDecimalNumber(MathAbs$1(hours)), "H");
    if (minutes !== 0) timePart += "".concat(formatAsDecimalNumber(MathAbs$1(minutes)), "M");
    if (!seconds.isZero() || !ms.isZero() || !µs.isZero() || !ns.isZero() || years === 0 && months === 0 && weeks === 0 && days === 0 && hours === 0 && minutes === 0 || precision !== 'auto') {
      var fraction = MathAbs$1(ms.toJSNumber()) * 1e6 + MathAbs$1(µs.toJSNumber()) * 1e3 + MathAbs$1(ns.toJSNumber());
      var decimalPart = ToZeroPaddedDecimalString$1(fraction, 9);
      if (precision === 'auto') {
        while (decimalPart[decimalPart.length - 1] === '0') {
          decimalPart = decimalPart.slice(0, -1);
        }
      } else if (precision === 0) {
        decimalPart = '';
      } else {
        decimalPart = decimalPart.slice(0, precision);
      }
      var secondsPart = seconds.abs().toString();
      if (decimalPart) secondsPart += ".".concat(decimalPart);
      timePart += "".concat(secondsPart, "S");
    }
    var result = "".concat(sign < 0 ? '-' : '', "P").concat(datePart);
    if (timePart) result = "".concat(result, "T").concat(timePart);
    return result;
  }
  function TemporalDateToString(date) {
    var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var year = ISOYearString(GetSlot(date, ISO_YEAR));
    var month = ISODateTimePartString(GetSlot(date, ISO_MONTH));
    var day = ISODateTimePartString(GetSlot(date, ISO_DAY));
    var calendar = MaybeFormatCalendarAnnotation(GetSlot(date, CALENDAR), showCalendar);
    return "".concat(year, "-").concat(month, "-").concat(day).concat(calendar);
  }
  function TemporalDateTimeToString(dateTime, precision) {
    var showCalendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var year = GetSlot(dateTime, ISO_YEAR);
    var month = GetSlot(dateTime, ISO_MONTH);
    var day = GetSlot(dateTime, ISO_DAY);
    var hour = GetSlot(dateTime, ISO_HOUR);
    var minute = GetSlot(dateTime, ISO_MINUTE);
    var second = GetSlot(dateTime, ISO_SECOND);
    var millisecond = GetSlot(dateTime, ISO_MILLISECOND);
    var microsecond = GetSlot(dateTime, ISO_MICROSECOND);
    var nanosecond = GetSlot(dateTime, ISO_NANOSECOND);
    if (options) {
      var unit = options.unit,
        increment = options.increment,
        roundingMode = options.roundingMode;
      var _RoundISODateTime = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);
      year = _RoundISODateTime.year;
      month = _RoundISODateTime.month;
      day = _RoundISODateTime.day;
      hour = _RoundISODateTime.hour;
      minute = _RoundISODateTime.minute;
      second = _RoundISODateTime.second;
      millisecond = _RoundISODateTime.millisecond;
      microsecond = _RoundISODateTime.microsecond;
      nanosecond = _RoundISODateTime.nanosecond;
    }
    year = ISOYearString(year);
    month = ISODateTimePartString(month);
    day = ISODateTimePartString(day);
    hour = ISODateTimePartString(hour);
    minute = ISODateTimePartString(minute);
    var seconds = FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
    var calendar = MaybeFormatCalendarAnnotation(GetSlot(dateTime, CALENDAR), showCalendar);
    return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds).concat(calendar);
  }
  function TemporalMonthDayToString(monthDay) {
    var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var month = ISODateTimePartString(GetSlot(monthDay, ISO_MONTH));
    var day = ISODateTimePartString(GetSlot(monthDay, ISO_DAY));
    var resultString = "".concat(month, "-").concat(day);
    var calendar = GetSlot(monthDay, CALENDAR);
    var calendarID = ToTemporalCalendarIdentifier(calendar);
    if (showCalendar === 'always' || showCalendar === 'critical' || calendarID !== 'iso8601') {
      var year = ISOYearString(GetSlot(monthDay, ISO_YEAR));
      resultString = "".concat(year, "-").concat(resultString);
    }
    var calendarString = FormatCalendarAnnotation(calendarID, showCalendar);
    if (calendarString) resultString += calendarString;
    return resultString;
  }
  function TemporalYearMonthToString(yearMonth) {
    var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var year = ISOYearString(GetSlot(yearMonth, ISO_YEAR));
    var month = ISODateTimePartString(GetSlot(yearMonth, ISO_MONTH));
    var resultString = "".concat(year, "-").concat(month);
    var calendar = GetSlot(yearMonth, CALENDAR);
    var calendarID = ToTemporalCalendarIdentifier(calendar);
    if (showCalendar === 'always' || showCalendar === 'critical' || calendarID !== 'iso8601') {
      var day = ISODateTimePartString(GetSlot(yearMonth, ISO_DAY));
      resultString += "-".concat(day);
    }
    var calendarString = FormatCalendarAnnotation(calendarID, showCalendar);
    if (calendarString) resultString += calendarString;
    return resultString;
  }
  function TemporalZonedDateTimeToString(zdt, precision) {
    var showCalendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
    var showTimeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'auto';
    var showOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'auto';
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
    var instant = GetSlot(zdt, INSTANT);
    if (options) {
      var unit = options.unit,
        increment = options.increment,
        roundingMode = options.roundingMode;
      var ns = RoundInstant(GetSlot(zdt, EPOCHNANOSECONDS), increment, unit, roundingMode);
      var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
      instant = new TemporalInstant(ns);
    }
    var tz = GetSlot(zdt, TIME_ZONE);
    var dateTime = GetPlainDateTimeFor(tz, instant, 'iso8601');
    var year = ISOYearString(GetSlot(dateTime, ISO_YEAR));
    var month = ISODateTimePartString(GetSlot(dateTime, ISO_MONTH));
    var day = ISODateTimePartString(GetSlot(dateTime, ISO_DAY));
    var hour = ISODateTimePartString(GetSlot(dateTime, ISO_HOUR));
    var minute = ISODateTimePartString(GetSlot(dateTime, ISO_MINUTE));
    var seconds = FormatSecondsStringPart(GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND), precision);
    var result = "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds);
    if (showOffset !== 'never') {
      var offsetNs = GetOffsetNanosecondsFor(tz, instant);
      result += FormatISOTimeZoneOffsetString(offsetNs);
    }
    if (showTimeZone !== 'never') {
      var identifier = ToTemporalTimeZoneIdentifier(tz);
      var flag = showTimeZone === 'critical' ? '!' : '';
      result += "[".concat(flag).concat(identifier, "]");
    }
    result += MaybeFormatCalendarAnnotation(GetSlot(zdt, CALENDAR), showCalendar);
    return result;
  }
  function IsTimeZoneOffsetString(string) {
    return OFFSET.test(String(string));
  }
  function ParseTimeZoneOffsetString(string) {
    var match = OFFSET.exec(String(string));
    if (!match) {
      throw new RangeError("invalid time zone offset: ".concat(string));
    }
    var sign = match[1] === '-' || match[1] === "\u2212" ? -1 : +1;
    var hours = +match[2];
    var minutes = +(match[3] || 0);
    var seconds = +(match[4] || 0);
    var nanoseconds = +((match[5] || 0) + '000000000').slice(0, 9);
    return sign * (((hours * 60 + minutes) * 60 + seconds) * 1e9 + nanoseconds);
  }
  function GetCanonicalTimeZoneIdentifier(timeZoneIdentifier) {
    if (IsTimeZoneOffsetString(timeZoneIdentifier)) {
      var offsetNs = ParseTimeZoneOffsetString(timeZoneIdentifier);
      return FormatTimeZoneOffsetString(offsetNs);
    }
    var formatter = getIntlDateTimeFormatEnUsForTimeZone(String(timeZoneIdentifier));
    return formatter.resolvedOptions().timeZone;
  }
  function GetNamedTimeZoneOffsetNanoseconds(id, epochNanoseconds) {
    var _GetNamedTimeZoneDate = GetNamedTimeZoneDateTimeParts(id, epochNanoseconds),
      year = _GetNamedTimeZoneDate.year,
      month = _GetNamedTimeZoneDate.month,
      day = _GetNamedTimeZoneDate.day,
      hour = _GetNamedTimeZoneDate.hour,
      minute = _GetNamedTimeZoneDate.minute,
      second = _GetNamedTimeZoneDate.second,
      millisecond = _GetNamedTimeZoneDate.millisecond,
      microsecond = _GetNamedTimeZoneDate.microsecond,
      nanosecond = _GetNamedTimeZoneDate.nanosecond;

    // The pattern of leap years in the ISO 8601 calendar repeats every 400
    // years. To avoid overflowing at the edges of the range, we reduce the year
    // to the remainder after dividing by 400, and then add back all the
    // nanoseconds from the multiples of 400 years at the end.
    var reducedYear = year % 400;
    var yearCycles = (year - reducedYear) / 400;
    var nsIn400YearCycle = bigInt(400 * 365 + 97).multiply(DAY_NANOS);
    var reducedUTC = GetUTCEpochNanoseconds(reducedYear, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    var utc = reducedUTC.plus(nsIn400YearCycle.multiply(yearCycles));
    return +utc.minus(epochNanoseconds);
  }
  function FormatTimeZoneOffsetString(offsetNanoseconds) {
    var sign = offsetNanoseconds < 0 ? '-' : '+';
    offsetNanoseconds = MathAbs$1(offsetNanoseconds);
    var nanoseconds = offsetNanoseconds % 1e9;
    var seconds = MathFloor$1(offsetNanoseconds / 1e9) % 60;
    var minutes = MathFloor$1(offsetNanoseconds / 60e9) % 60;
    var hours = MathFloor$1(offsetNanoseconds / 3600e9);
    var hourString = ISODateTimePartString(hours);
    var minuteString = ISODateTimePartString(minutes);
    var secondString = ISODateTimePartString(seconds);
    var post = '';
    if (nanoseconds) {
      var fraction = "".concat(nanoseconds).padStart(9, '0');
      while (fraction[fraction.length - 1] === '0') fraction = fraction.slice(0, -1);
      post = ":".concat(secondString, ".").concat(fraction);
    } else if (seconds) {
      post = ":".concat(secondString);
    }
    return "".concat(sign).concat(hourString, ":").concat(minuteString).concat(post);
  }
  function FormatISOTimeZoneOffsetString(offsetNanoseconds) {
    offsetNanoseconds = RoundNumberToIncrement(bigInt(offsetNanoseconds), 60e9, 'halfExpand').toJSNumber();
    var sign = offsetNanoseconds < 0 ? '-' : '+';
    offsetNanoseconds = MathAbs$1(offsetNanoseconds);
    var minutes = offsetNanoseconds / 60e9 % 60;
    var hours = MathFloor$1(offsetNanoseconds / 3600e9);
    var hourString = ISODateTimePartString(hours);
    var minuteString = ISODateTimePartString(minutes);
    return "".concat(sign).concat(hourString, ":").concat(minuteString);
  }
  function GetUTCEpochNanoseconds(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
    // Note: Date.UTC() interprets one and two-digit years as being in the
    // 20th century, so don't use it
    var legacyDate = new Date();
    legacyDate.setUTCHours(hour, minute, second, millisecond);
    legacyDate.setUTCFullYear(year, month - 1, day);
    var ms = legacyDate.getTime();
    if (NumberIsNaN(ms)) return null;
    var ns = bigInt(ms).multiply(1e6);
    ns = ns.plus(bigInt(microsecond).multiply(1e3));
    ns = ns.plus(bigInt(nanosecond));
    if (ns.lesser(NS_MIN) || ns.greater(NS_MAX)) return null;
    return ns;
  }
  function GetISOPartsFromEpoch(epochNanoseconds) {
    var _bigInt$divmod = bigInt(epochNanoseconds).divmod(1e6),
      quotient = _bigInt$divmod.quotient,
      remainder = _bigInt$divmod.remainder;
    var epochMilliseconds = +quotient;
    var nanos = +remainder;
    if (nanos < 0) {
      nanos += 1e6;
      epochMilliseconds -= 1;
    }
    var microsecond = MathFloor$1(nanos / 1e3) % 1e3;
    var nanosecond = nanos % 1e3;
    var item = new Date(epochMilliseconds);
    var year = item.getUTCFullYear();
    var month = item.getUTCMonth() + 1;
    var day = item.getUTCDate();
    var hour = item.getUTCHours();
    var minute = item.getUTCMinutes();
    var second = item.getUTCSeconds();
    var millisecond = item.getUTCMilliseconds();
    return {
      epochMilliseconds: epochMilliseconds,
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond
    };
  }
  function GetNamedTimeZoneDateTimeParts(id, epochNanoseconds) {
    var _GetISOPartsFromEpoch2 = GetISOPartsFromEpoch(epochNanoseconds),
      epochMilliseconds = _GetISOPartsFromEpoch2.epochMilliseconds,
      millisecond = _GetISOPartsFromEpoch2.millisecond,
      microsecond = _GetISOPartsFromEpoch2.microsecond,
      nanosecond = _GetISOPartsFromEpoch2.nanosecond;
    var _GetFormatterParts = GetFormatterParts(id, epochMilliseconds),
      year = _GetFormatterParts.year,
      month = _GetFormatterParts.month,
      day = _GetFormatterParts.day,
      hour = _GetFormatterParts.hour,
      minute = _GetFormatterParts.minute,
      second = _GetFormatterParts.second;
    return BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
  }
  function GetNamedTimeZoneNextTransition(id, epochNanoseconds) {
    if (epochNanoseconds.lesser(BEFORE_FIRST_DST)) {
      return GetNamedTimeZoneNextTransition(id, BEFORE_FIRST_DST);
    }
    var uppercap = SystemUTCEpochNanoSeconds().plus(DAY_NANOS.multiply(366));
    var leftNanos = epochNanoseconds;
    var leftOffsetNs = GetNamedTimeZoneOffsetNanoseconds(id, leftNanos);
    var rightNanos = leftNanos;
    var rightOffsetNs = leftOffsetNs;
    while (leftOffsetNs === rightOffsetNs && bigInt(leftNanos).compare(uppercap) === -1) {
      rightNanos = bigInt(leftNanos).plus(DAY_NANOS.multiply(2 * 7));
      if (rightNanos.greater(NS_MAX)) return null;
      rightOffsetNs = GetNamedTimeZoneOffsetNanoseconds(id, rightNanos);
      if (leftOffsetNs === rightOffsetNs) {
        leftNanos = rightNanos;
      }
    }
    if (leftOffsetNs === rightOffsetNs) return null;
    var result = bisect(function (epochNs) {
      return GetNamedTimeZoneOffsetNanoseconds(id, epochNs);
    }, leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
    return result;
  }
  function GetNamedTimeZonePreviousTransition(id, epochNanoseconds) {
    // Optimization: if the instant is more than a year in the future and there
    // are no transitions between the present day and a year from now, assume
    // there are none after
    var now = SystemUTCEpochNanoSeconds();
    var yearLater = now.plus(DAY_NANOS.multiply(366));
    if (epochNanoseconds.gt(yearLater)) {
      var prevBeforeNextYear = GetNamedTimeZonePreviousTransition(id, yearLater);
      if (prevBeforeNextYear === null || prevBeforeNextYear.lt(now)) {
        return prevBeforeNextYear;
      }
    }

    // We assume most time zones either have regular DST rules that extend
    // indefinitely into the future, or they have no DST transitions between now
    // and next year. Africa/Casablanca and Africa/El_Aaiun are unique cases
    // that fit neither of these. Their irregular DST transitions are
    // precomputed until 2087 in the current time zone database, so requesting
    // the previous transition for an instant far in the future may take an
    // extremely long time as it loops backward 2 weeks at a time.
    if (id === 'Africa/Casablanca' || id === 'Africa/El_Aaiun') {
      var lastPrecomputed = GetSlot(ToTemporalInstant('2088-01-01T00Z'), EPOCHNANOSECONDS);
      if (lastPrecomputed.lesser(epochNanoseconds)) {
        return GetNamedTimeZonePreviousTransition(id, lastPrecomputed);
      }
    }
    var rightNanos = bigInt(epochNanoseconds).minus(1);
    if (rightNanos.lesser(BEFORE_FIRST_DST)) return null;
    var rightOffsetNs = GetNamedTimeZoneOffsetNanoseconds(id, rightNanos);
    var leftNanos = rightNanos;
    var leftOffsetNs = rightOffsetNs;
    while (rightOffsetNs === leftOffsetNs && bigInt(rightNanos).compare(BEFORE_FIRST_DST) === 1) {
      leftNanos = bigInt(rightNanos).minus(DAY_NANOS.multiply(2 * 7));
      if (leftNanos.lesser(BEFORE_FIRST_DST)) return null;
      leftOffsetNs = GetNamedTimeZoneOffsetNanoseconds(id, leftNanos);
      if (rightOffsetNs === leftOffsetNs) {
        rightNanos = leftNanos;
      }
    }
    if (rightOffsetNs === leftOffsetNs) return null;
    var result = bisect(function (epochNs) {
      return GetNamedTimeZoneOffsetNanoseconds(id, epochNs);
    }, leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
    return result;
  }
  function GetFormatterParts(timeZone, epochMilliseconds) {
    var formatter = getIntlDateTimeFormatEnUsForTimeZone(timeZone);
    // Using `format` instead of `formatToParts` for compatibility with older clients
    var datetime = formatter.format(new Date(epochMilliseconds));
    var splits = datetime.split(/[^\w]+/);
    var month = splits[0];
    var day = splits[1];
    var year = splits[2];
    var era = splits[3];
    var hour = splits[4];
    var minute = splits[5];
    var second = splits[6];
    return {
      year: era.toUpperCase().startsWith('B') ? -year + 1 : +year,
      month: +month,
      day: +day,
      hour: hour === '24' ? 0 : +hour,
      // bugs.chromium.org/p/chromium/issues/detail?id=1045791
      minute: +minute,
      second: +second
    };
  }
  function GetNamedTimeZoneEpochNanoseconds(id, year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
    var ns = GetUTCEpochNanoseconds(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (ns === null) throw new RangeError('DateTime outside of supported range');
    var nsEarlier = ns.minus(DAY_NANOS);
    if (nsEarlier.lesser(NS_MIN)) nsEarlier = ns;
    var nsLater = ns.plus(DAY_NANOS);
    if (nsLater.greater(NS_MAX)) nsLater = ns;
    var earliest = GetNamedTimeZoneOffsetNanoseconds(id, nsEarlier);
    var latest = GetNamedTimeZoneOffsetNanoseconds(id, nsLater);
    var found = earliest === latest ? [earliest] : [earliest, latest];
    return found.map(function (offsetNanoseconds) {
      var epochNanoseconds = bigInt(ns).minus(offsetNanoseconds);
      var parts = GetNamedTimeZoneDateTimeParts(id, epochNanoseconds);
      if (year !== parts.year || month !== parts.month || day !== parts.day || hour !== parts.hour || minute !== parts.minute || second !== parts.second || millisecond !== parts.millisecond || microsecond !== parts.microsecond || nanosecond !== parts.nanosecond) {
        return undefined;
      }
      return epochNanoseconds;
    }).filter(function (x) {
      return x !== undefined;
    });
  }
  function LeapYear(year) {
    if (undefined === year) return false;
    var isDiv4 = year % 4 === 0;
    var isDiv100 = year % 100 === 0;
    var isDiv400 = year % 400 === 0;
    return isDiv4 && (!isDiv100 || isDiv400);
  }
  function ISODaysInMonth(year, month) {
    var DoM = {
      standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
    return DoM[LeapYear(year) ? 'leapyear' : 'standard'][month - 1];
  }
  function DayOfWeek(year, month, day) {
    var m = month + (month < 3 ? 10 : -2);
    var Y = year - (month < 3 ? 1 : 0);
    var c = MathFloor$1(Y / 100);
    var y = Y - c * 100;
    var d = day;
    var pD = d;
    var pM = MathFloor$1(2.6 * m - 0.2);
    var pY = y + MathFloor$1(y / 4);
    var pC = MathFloor$1(c / 4) - 2 * c;
    var dow = (pD + pM + pY + pC) % 7;
    return dow + (dow <= 0 ? 7 : 0);
  }
  function DayOfYear(year, month, day) {
    var days = day;
    for (var m = month - 1; m > 0; m--) {
      days += ISODaysInMonth(year, m);
    }
    return days;
  }
  function WeekOfYear(year, month, day) {
    var doy = DayOfYear(year, month, day);
    var dow = DayOfWeek(year, month, day) || 7;
    var doj = DayOfWeek(year, 1, 1);
    var week = MathFloor$1((doy - dow + 10) / 7);
    if (week < 1) {
      if (doj === 5 || doj === 6 && LeapYear(year - 1)) {
        return {
          week: 53,
          year: year - 1
        };
      } else {
        return {
          week: 52,
          year: year - 1
        };
      }
    }
    if (week === 53) {
      if ((LeapYear(year) ? 366 : 365) - doy < 4 - dow) {
        return {
          week: 1,
          year: year + 1
        };
      }
    }
    return {
      week: week,
      year: year
    };
  }
  function DurationSign(y, mon, w, d, h, min, s, ms, µs, ns) {
    var fields = [y, mon, w, d, h, min, s, ms, µs, ns];
    for (var index = 0; index < fields.length; index++) {
      var prop = fields[index];
      if (prop !== 0) return prop < 0 ? -1 : 1;
    }
    return 0;
  }
  function BalanceISOYearMonth(year, month) {
    if (!NumberIsFinite(year) || !NumberIsFinite(month)) throw new RangeError('infinity is out of range');
    month -= 1;
    year += MathFloor$1(month / 12);
    month %= 12;
    if (month < 0) month += 12;
    month += 1;
    return {
      year: year,
      month: month
    };
  }
  function BalanceISODate(year, month, day) {
    if (!NumberIsFinite(day)) throw new RangeError('infinity is out of range');
    // The pattern of leap years in the ISO 8601 calendar repeats every 400
    // years. So if we have more than 400 years in days, there's no need to
    // convert days to a year 400 times. We can convert a multiple of 400 all at
    // once.
    var _BalanceISOYearMonth = BalanceISOYearMonth(year, month);
    year = _BalanceISOYearMonth.year;
    month = _BalanceISOYearMonth.month;
    var daysIn400YearCycle = 400 * 365 + 97;
    if (MathAbs$1(day) > daysIn400YearCycle) {
      var nCycles = MathTrunc(day / daysIn400YearCycle);
      year += 400 * nCycles;
      day -= nCycles * daysIn400YearCycle;
    }
    var daysInYear = 0;
    var testYear = month > 2 ? year : year - 1;
    while (daysInYear = LeapYear(testYear) ? 366 : 365, day < -daysInYear) {
      year -= 1;
      testYear -= 1;
      day += daysInYear;
    }
    testYear += 1;
    while (daysInYear = LeapYear(testYear) ? 366 : 365, day > daysInYear) {
      year += 1;
      testYear += 1;
      day -= daysInYear;
    }
    while (day < 1) {
      var _BalanceISOYearMonth2 = BalanceISOYearMonth(year, month - 1);
      year = _BalanceISOYearMonth2.year;
      month = _BalanceISOYearMonth2.month;
      day += ISODaysInMonth(year, month);
    }
    while (day > ISODaysInMonth(year, month)) {
      day -= ISODaysInMonth(year, month);
      var _BalanceISOYearMonth3 = BalanceISOYearMonth(year, month + 1);
      year = _BalanceISOYearMonth3.year;
      month = _BalanceISOYearMonth3.month;
    }
    return {
      year: year,
      month: month,
      day: day
    };
  }
  function BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
    var deltaDays;
    var _BalanceTime = BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond);
    deltaDays = _BalanceTime.deltaDays;
    hour = _BalanceTime.hour;
    minute = _BalanceTime.minute;
    second = _BalanceTime.second;
    millisecond = _BalanceTime.millisecond;
    microsecond = _BalanceTime.microsecond;
    nanosecond = _BalanceTime.nanosecond;
    var _BalanceISODate = BalanceISODate(year, month, day + deltaDays);
    year = _BalanceISODate.year;
    month = _BalanceISODate.month;
    day = _BalanceISODate.day;
    return {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond
    };
  }
  function BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond) {
    hour = bigInt(hour);
    minute = bigInt(minute);
    second = bigInt(second);
    millisecond = bigInt(millisecond);
    microsecond = bigInt(microsecond);
    nanosecond = bigInt(nanosecond);
    var quotient;
    var _NonNegativeBigIntDiv = NonNegativeBigIntDivmod(nanosecond, 1000);
    quotient = _NonNegativeBigIntDiv.quotient;
    nanosecond = _NonNegativeBigIntDiv.remainder;
    microsecond = microsecond.add(quotient);
    var _NonNegativeBigIntDiv2 = NonNegativeBigIntDivmod(microsecond, 1000);
    quotient = _NonNegativeBigIntDiv2.quotient;
    microsecond = _NonNegativeBigIntDiv2.remainder;
    millisecond = millisecond.add(quotient);
    var _NonNegativeBigIntDiv3 = NonNegativeBigIntDivmod(millisecond, 1000);
    quotient = _NonNegativeBigIntDiv3.quotient;
    millisecond = _NonNegativeBigIntDiv3.remainder;
    second = second.add(quotient);
    var _NonNegativeBigIntDiv4 = NonNegativeBigIntDivmod(second, 60);
    quotient = _NonNegativeBigIntDiv4.quotient;
    second = _NonNegativeBigIntDiv4.remainder;
    minute = minute.add(quotient);
    var _NonNegativeBigIntDiv5 = NonNegativeBigIntDivmod(minute, 60);
    quotient = _NonNegativeBigIntDiv5.quotient;
    minute = _NonNegativeBigIntDiv5.remainder;
    hour = hour.add(quotient);
    var _NonNegativeBigIntDiv6 = NonNegativeBigIntDivmod(hour, 24);
    quotient = _NonNegativeBigIntDiv6.quotient;
    hour = _NonNegativeBigIntDiv6.remainder;
    return {
      deltaDays: quotient.toJSNumber(),
      hour: hour.toJSNumber(),
      minute: minute.toJSNumber(),
      second: second.toJSNumber(),
      millisecond: millisecond.toJSNumber(),
      microsecond: microsecond.toJSNumber(),
      nanosecond: nanosecond.toJSNumber()
    };
  }
  function TotalDurationNanoseconds(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, offsetShift) {
    if (days !== 0) nanoseconds = bigInt(nanoseconds).subtract(offsetShift);
    hours = bigInt(hours).add(bigInt(days).multiply(24));
    minutes = bigInt(minutes).add(hours.multiply(60));
    seconds = bigInt(seconds).add(minutes.multiply(60));
    milliseconds = bigInt(milliseconds).add(seconds.multiply(1000));
    microseconds = bigInt(microseconds).add(milliseconds.multiply(1000));
    return bigInt(nanoseconds).add(microseconds.multiply(1000));
  }
  function NanosecondsToDays(nanoseconds, relativeTo) {
    var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    var sign = MathSign(nanoseconds);
    nanoseconds = bigInt(nanoseconds);
    var dayLengthNs = 86400e9;
    if (sign === 0) return {
      days: 0,
      nanoseconds: bigInt.zero,
      dayLengthNs: dayLengthNs
    };
    if (!IsTemporalZonedDateTime(relativeTo)) {
      var _days;
      var _nanoseconds$divmod = nanoseconds.divmod(dayLengthNs);
      _days = _nanoseconds$divmod.quotient;
      nanoseconds = _nanoseconds$divmod.remainder;
      _days = _days.toJSNumber();
      return {
        days: _days,
        nanoseconds: nanoseconds,
        dayLengthNs: dayLengthNs
      };
    }
    var startNs = GetSlot(relativeTo, EPOCHNANOSECONDS);
    var start = GetSlot(relativeTo, INSTANT);
    var endNs = startNs.add(nanoseconds);
    var end = new TemporalInstant(endNs);
    var timeZone = GetSlot(relativeTo, TIME_ZONE);
    var calendar = GetSlot(relativeTo, CALENDAR);

    // Find the difference in days only.
    var dtStart = GetPlainDateTimeFor(timeZone, start, calendar);
    var dtEnd = GetPlainDateTimeFor(timeZone, end, calendar);
    var _DifferenceISODateTim = DifferenceISODateTime(GetSlot(dtStart, ISO_YEAR), GetSlot(dtStart, ISO_MONTH), GetSlot(dtStart, ISO_DAY), GetSlot(dtStart, ISO_HOUR), GetSlot(dtStart, ISO_MINUTE), GetSlot(dtStart, ISO_SECOND), GetSlot(dtStart, ISO_MILLISECOND), GetSlot(dtStart, ISO_MICROSECOND), GetSlot(dtStart, ISO_NANOSECOND), GetSlot(dtEnd, ISO_YEAR), GetSlot(dtEnd, ISO_MONTH), GetSlot(dtEnd, ISO_DAY), GetSlot(dtEnd, ISO_HOUR), GetSlot(dtEnd, ISO_MINUTE), GetSlot(dtEnd, ISO_SECOND), GetSlot(dtEnd, ISO_MILLISECOND), GetSlot(dtEnd, ISO_MICROSECOND), GetSlot(dtEnd, ISO_NANOSECOND), calendar, 'day', ObjectCreate$8(null)),
      days = _DifferenceISODateTim.days;
    var intermediateNs = AddZonedDateTime(start, timeZone, calendar, 0, 0, 0, days, 0, 0, 0, 0, 0, 0);
    // may disambiguate

    // If clock time after addition was in the middle of a skipped period, the
    // endpoint was disambiguated to a later clock time. So it's possible that
    // the resulting disambiguated result is later than endNs. If so, then back
    // up one day and try again. Repeat if necessary (some transitions are
    // > 24 hours) until either there's zero days left or the date duration is
    // back inside the period where it belongs. Note that this case only can
    // happen for positive durations because the only direction that
    // `disambiguation: 'compatible'` can change clock time is forwards.
    days = bigInt(days);
    if (sign === 1) {
      while (days.greater(0) && intermediateNs.greater(endNs)) {
        days = days.prev();
        intermediateNs = AddZonedDateTime(start, timeZone, calendar, 0, 0, 0, days.toJSNumber(), 0, 0, 0, 0, 0, 0);
        // may do disambiguation
      }
    }

    nanoseconds = endNs.subtract(intermediateNs);
    var isOverflow = false;
    var relativeInstant = new TemporalInstant(intermediateNs);
    do {
      // calculate length of the next day (day that contains the time remainder)
      var oneDayFartherNs = AddZonedDateTime(relativeInstant, timeZone, calendar, 0, 0, 0, sign, 0, 0, 0, 0, 0, 0);
      var relativeNs = GetSlot(relativeInstant, EPOCHNANOSECONDS);
      dayLengthNs = oneDayFartherNs.subtract(relativeNs).toJSNumber();
      isOverflow = nanoseconds.subtract(dayLengthNs).multiply(sign).geq(0);
      if (isOverflow) {
        nanoseconds = nanoseconds.subtract(dayLengthNs);
        relativeInstant = new TemporalInstant(oneDayFartherNs);
        days = days.add(sign);
      }
    } while (isOverflow);
    if (!days.isZero() && MathSign(days.toJSNumber()) != sign) {
      throw new RangeError('Time zone or calendar converted nanoseconds into a number of days with the opposite sign');
    }
    if (!nanoseconds.isZero() && MathSign(nanoseconds.toJSNumber()) != sign) {
      if (nanoseconds.lt(0) && sign === 1) {
        throw new Error('assert not reached');
      }
      throw new RangeError('Time zone or calendar ended up with a remainder of nanoseconds with the opposite sign');
    }
    if (nanoseconds.abs().geq(MathAbs$1(dayLengthNs))) {
      throw new Error('assert not reached');
    }
    return {
      days: days.toJSNumber(),
      nanoseconds: nanoseconds,
      dayLengthNs: MathAbs$1(dayLengthNs)
    };
  }
  function BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit) {
    var relativeTo = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : undefined;
    var result = BalancePossiblyInfiniteDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit, relativeTo);
    if (result === 'positive overflow' || result === 'negative overflow') {
      throw new RangeError('Duration out of range');
    } else {
      return result;
    }
  }
  function BalancePossiblyInfiniteDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit) {
    var relativeTo = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : undefined;
    if (IsTemporalZonedDateTime(relativeTo)) {
      var endNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), GetSlot(relativeTo, TIME_ZONE), GetSlot(relativeTo, CALENDAR), 0, 0, 0, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      var startNs = GetSlot(relativeTo, EPOCHNANOSECONDS);
      nanoseconds = endNs.subtract(startNs);
    } else {
      nanoseconds = TotalDurationNanoseconds(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 0);
    }
    if (largestUnit === 'year' || largestUnit === 'month' || largestUnit === 'week' || largestUnit === 'day') {
      var _NanosecondsToDays = NanosecondsToDays(nanoseconds, relativeTo);
      days = _NanosecondsToDays.days;
      nanoseconds = _NanosecondsToDays.nanoseconds;
    } else {
      days = 0;
    }
    var sign = nanoseconds.lesser(0) ? -1 : 1;
    nanoseconds = nanoseconds.abs();
    microseconds = milliseconds = seconds = minutes = hours = bigInt.zero;
    switch (largestUnit) {
      case 'year':
      case 'month':
      case 'week':
      case 'day':
      case 'hour':
        var _nanoseconds$divmod2 = nanoseconds.divmod(1000);
        microseconds = _nanoseconds$divmod2.quotient;
        nanoseconds = _nanoseconds$divmod2.remainder;
        var _microseconds$divmod = microseconds.divmod(1000);
        milliseconds = _microseconds$divmod.quotient;
        microseconds = _microseconds$divmod.remainder;
        var _milliseconds$divmod = milliseconds.divmod(1000);
        seconds = _milliseconds$divmod.quotient;
        milliseconds = _milliseconds$divmod.remainder;
        var _seconds$divmod = seconds.divmod(60);
        minutes = _seconds$divmod.quotient;
        seconds = _seconds$divmod.remainder;
        var _minutes$divmod = minutes.divmod(60);
        hours = _minutes$divmod.quotient;
        minutes = _minutes$divmod.remainder;
        break;
      case 'minute':
        var _nanoseconds$divmod3 = nanoseconds.divmod(1000);
        microseconds = _nanoseconds$divmod3.quotient;
        nanoseconds = _nanoseconds$divmod3.remainder;
        var _microseconds$divmod2 = microseconds.divmod(1000);
        milliseconds = _microseconds$divmod2.quotient;
        microseconds = _microseconds$divmod2.remainder;
        var _milliseconds$divmod2 = milliseconds.divmod(1000);
        seconds = _milliseconds$divmod2.quotient;
        milliseconds = _milliseconds$divmod2.remainder;
        var _seconds$divmod2 = seconds.divmod(60);
        minutes = _seconds$divmod2.quotient;
        seconds = _seconds$divmod2.remainder;
        break;
      case 'second':
        var _nanoseconds$divmod4 = nanoseconds.divmod(1000);
        microseconds = _nanoseconds$divmod4.quotient;
        nanoseconds = _nanoseconds$divmod4.remainder;
        var _microseconds$divmod3 = microseconds.divmod(1000);
        milliseconds = _microseconds$divmod3.quotient;
        microseconds = _microseconds$divmod3.remainder;
        var _milliseconds$divmod3 = milliseconds.divmod(1000);
        seconds = _milliseconds$divmod3.quotient;
        milliseconds = _milliseconds$divmod3.remainder;
        break;
      case 'millisecond':
        var _nanoseconds$divmod5 = nanoseconds.divmod(1000);
        microseconds = _nanoseconds$divmod5.quotient;
        nanoseconds = _nanoseconds$divmod5.remainder;
        var _microseconds$divmod4 = microseconds.divmod(1000);
        milliseconds = _microseconds$divmod4.quotient;
        microseconds = _microseconds$divmod4.remainder;
        break;
      case 'microsecond':
        var _nanoseconds$divmod6 = nanoseconds.divmod(1000);
        microseconds = _nanoseconds$divmod6.quotient;
        nanoseconds = _nanoseconds$divmod6.remainder;
        break;
      case 'nanosecond':
        break;
      default:
        throw new Error('assert not reached');
    }
    hours = hours.toJSNumber() * sign;
    minutes = minutes.toJSNumber() * sign;
    seconds = seconds.toJSNumber() * sign;
    milliseconds = milliseconds.toJSNumber() * sign;
    microseconds = microseconds.toJSNumber() * sign;
    nanoseconds = nanoseconds.toJSNumber() * sign;
    if (!NumberIsFinite(days) || !NumberIsFinite(hours) || !NumberIsFinite(minutes) || !NumberIsFinite(seconds) || !NumberIsFinite(milliseconds) || !NumberIsFinite(microseconds) || !NumberIsFinite(nanoseconds)) {
      if (sign === 1) {
        return 'positive overflow';
      } else if (sign === -1) {
        return 'negative overflow';
      }
    }
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    };
  }
  function UnbalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo) {
    var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    var sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    if (sign === 0) return {
      years: years,
      months: months,
      weeks: weeks,
      days: days
    };
    var calendar;
    if (relativeTo) {
      relativeTo = ToTemporalDate(relativeTo);
      calendar = GetSlot(relativeTo, CALENDAR);
    }
    var oneYear = new TemporalDuration(sign);
    var oneMonth = new TemporalDuration(0, sign);
    var oneWeek = new TemporalDuration(0, 0, sign);

    // Perform arithmetic in the mathematical integer domain
    years = bigInt(years);
    months = bigInt(months);
    weeks = bigInt(weeks);
    days = bigInt(days);
    switch (largestUnit) {
      case 'year':
        // no-op
        break;
      case 'month':
        {
          if (!calendar) throw new RangeError('a starting point is required for months balancing');
          // balance years down to months
          var dateAdd, dateUntil;
          if (typeof calendar !== 'string') {
            dateAdd = GetMethod$2(calendar, 'dateAdd');
            dateUntil = GetMethod$2(calendar, 'dateUntil');
          }
          while (!years.isZero()) {
            var newRelativeTo = CalendarDateAdd(calendar, relativeTo, oneYear, undefined, dateAdd);
            var untilOptions = ObjectCreate$8(null);
            untilOptions.largestUnit = 'month';
            var untilResult = CalendarDateUntil(calendar, relativeTo, newRelativeTo, untilOptions, dateUntil);
            var oneYearMonths = GetSlot(untilResult, MONTHS);
            relativeTo = newRelativeTo;
            months = months.add(oneYearMonths);
            years = years.subtract(sign);
          }
        }
        break;
      case 'week':
        {
          if (!calendar) throw new RangeError('a starting point is required for weeks balancing');
          var _dateAdd = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
          // balance years down to days
          while (!years.isZero()) {
            var oneYearDays = void 0;
            var _MoveRelativeDate = MoveRelativeDate(calendar, relativeTo, oneYear, _dateAdd);
            relativeTo = _MoveRelativeDate.relativeTo;
            oneYearDays = _MoveRelativeDate.days;
            days = days.add(oneYearDays);
            years = years.subtract(sign);
          }

          // balance months down to days
          while (!months.isZero()) {
            var oneMonthDays = void 0;
            var _MoveRelativeDate2 = MoveRelativeDate(calendar, relativeTo, oneMonth, _dateAdd);
            relativeTo = _MoveRelativeDate2.relativeTo;
            oneMonthDays = _MoveRelativeDate2.days;
            days = days.add(oneMonthDays);
            months = months.subtract(sign);
          }
        }
        break;
      default:
        {
          if (years.isZero() && months.isZero() && weeks.isZero()) break;
          if (!calendar) throw new RangeError('a starting point is required for balancing calendar units');
          var _dateAdd2 = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
          // balance years down to days
          while (!years.isZero()) {
            var _oneYearDays = void 0;
            var _MoveRelativeDate3 = MoveRelativeDate(calendar, relativeTo, oneYear, _dateAdd2);
            relativeTo = _MoveRelativeDate3.relativeTo;
            _oneYearDays = _MoveRelativeDate3.days;
            days = days.add(_oneYearDays);
            years = years.subtract(sign);
          }

          // balance months down to days
          while (!months.isZero()) {
            var _oneMonthDays = void 0;
            var _MoveRelativeDate4 = MoveRelativeDate(calendar, relativeTo, oneMonth, _dateAdd2);
            relativeTo = _MoveRelativeDate4.relativeTo;
            _oneMonthDays = _MoveRelativeDate4.days;
            days = days.add(_oneMonthDays);
            months = months.subtract(sign);
          }

          // balance weeks down to days
          while (!weeks.isZero()) {
            var oneWeekDays = void 0;
            var _MoveRelativeDate5 = MoveRelativeDate(calendar, relativeTo, oneWeek, _dateAdd2);
            relativeTo = _MoveRelativeDate5.relativeTo;
            oneWeekDays = _MoveRelativeDate5.days;
            days = days.add(oneWeekDays);
            weeks = weeks.subtract(sign);
          }
        }
        break;
    }
    return {
      years: years.toJSNumber(),
      months: months.toJSNumber(),
      weeks: weeks.toJSNumber(),
      days: days.toJSNumber()
    };
  }
  function BalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo) {
    var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    var sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    if (sign === 0) return {
      years: years,
      months: months,
      weeks: weeks,
      days: days
    };
    var calendar;
    if (relativeTo) {
      relativeTo = ToTemporalDate(relativeTo);
      calendar = GetSlot(relativeTo, CALENDAR);
    }
    var oneYear = new TemporalDuration(sign);
    var oneMonth = new TemporalDuration(0, sign);
    var oneWeek = new TemporalDuration(0, 0, sign);

    // Perform arithmetic in the mathematical integer domain
    years = bigInt(years);
    months = bigInt(months);
    weeks = bigInt(weeks);
    days = bigInt(days);
    switch (largestUnit) {
      case 'year':
        {
          if (!calendar) throw new RangeError('a starting point is required for years balancing');
          var dateAdd = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
          // balance days up to years
          var newRelativeTo, oneYearDays;
          var _MoveRelativeDate6 = MoveRelativeDate(calendar, relativeTo, oneYear, dateAdd);
          newRelativeTo = _MoveRelativeDate6.relativeTo;
          oneYearDays = _MoveRelativeDate6.days;
          while (days.abs().geq(MathAbs$1(oneYearDays))) {
            days = days.subtract(oneYearDays);
            years = years.add(sign);
            relativeTo = newRelativeTo;
            var _MoveRelativeDate7 = MoveRelativeDate(calendar, relativeTo, oneYear, dateAdd);
            newRelativeTo = _MoveRelativeDate7.relativeTo;
            oneYearDays = _MoveRelativeDate7.days;
          }

          // balance days up to months
          var oneMonthDays;
          var _MoveRelativeDate8 = MoveRelativeDate(calendar, relativeTo, oneMonth, dateAdd);
          newRelativeTo = _MoveRelativeDate8.relativeTo;
          oneMonthDays = _MoveRelativeDate8.days;
          while (days.abs().geq(MathAbs$1(oneMonthDays))) {
            days = days.subtract(oneMonthDays);
            months = months.add(sign);
            relativeTo = newRelativeTo;
            var _MoveRelativeDate9 = MoveRelativeDate(calendar, relativeTo, oneMonth, dateAdd);
            newRelativeTo = _MoveRelativeDate9.relativeTo;
            oneMonthDays = _MoveRelativeDate9.days;
          }

          // balance months up to years
          newRelativeTo = CalendarDateAdd(calendar, relativeTo, oneYear, undefined, dateAdd);
          var dateUntil = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateUntil') : undefined;
          var untilOptions = ObjectCreate$8(null);
          untilOptions.largestUnit = 'month';
          var untilResult = CalendarDateUntil(calendar, relativeTo, newRelativeTo, untilOptions, dateUntil);
          var oneYearMonths = GetSlot(untilResult, MONTHS);
          while (months.abs().geq(MathAbs$1(oneYearMonths))) {
            months = months.subtract(oneYearMonths);
            years = years.add(sign);
            relativeTo = newRelativeTo;
            newRelativeTo = CalendarDateAdd(calendar, relativeTo, oneYear, undefined, dateAdd);
            var _untilOptions = ObjectCreate$8(null);
            _untilOptions.largestUnit = 'month';
            untilResult = CalendarDateUntil(calendar, relativeTo, newRelativeTo, _untilOptions, dateUntil);
            oneYearMonths = GetSlot(untilResult, MONTHS);
          }
          break;
        }
      case 'month':
        {
          if (!calendar) throw new RangeError('a starting point is required for months balancing');
          var _dateAdd3 = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
          // balance days up to months
          var _newRelativeTo, _oneMonthDays2;
          var _MoveRelativeDate10 = MoveRelativeDate(calendar, relativeTo, oneMonth, _dateAdd3);
          _newRelativeTo = _MoveRelativeDate10.relativeTo;
          _oneMonthDays2 = _MoveRelativeDate10.days;
          while (days.abs().geq(MathAbs$1(_oneMonthDays2))) {
            days = days.subtract(_oneMonthDays2);
            months = months.add(sign);
            relativeTo = _newRelativeTo;
            var _MoveRelativeDate11 = MoveRelativeDate(calendar, relativeTo, oneMonth, _dateAdd3);
            _newRelativeTo = _MoveRelativeDate11.relativeTo;
            _oneMonthDays2 = _MoveRelativeDate11.days;
          }
          break;
        }
      case 'week':
        {
          if (!calendar) throw new RangeError('a starting point is required for weeks balancing');
          var _dateAdd4 = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
          // balance days up to weeks
          var _newRelativeTo2, oneWeekDays;
          var _MoveRelativeDate12 = MoveRelativeDate(calendar, relativeTo, oneWeek, _dateAdd4);
          _newRelativeTo2 = _MoveRelativeDate12.relativeTo;
          oneWeekDays = _MoveRelativeDate12.days;
          while (days.abs().geq(MathAbs$1(oneWeekDays))) {
            days = days.subtract(oneWeekDays);
            weeks = weeks.add(sign);
            relativeTo = _newRelativeTo2;
            var _MoveRelativeDate13 = MoveRelativeDate(calendar, relativeTo, oneWeek, _dateAdd4);
            _newRelativeTo2 = _MoveRelativeDate13.relativeTo;
            oneWeekDays = _MoveRelativeDate13.days;
          }
          break;
        }
    }
    return {
      years: years.toJSNumber(),
      months: months.toJSNumber(),
      weeks: weeks.toJSNumber(),
      days: days.toJSNumber()
    };
  }
  function CalculateOffsetShift(relativeTo, y, mon, w, d) {
    if (IsTemporalZonedDateTime(relativeTo)) {
      var instant = GetSlot(relativeTo, INSTANT);
      var timeZone = GetSlot(relativeTo, TIME_ZONE);
      var calendar = GetSlot(relativeTo, CALENDAR);
      var offsetBefore = GetOffsetNanosecondsFor(timeZone, instant);
      var after = AddZonedDateTime(instant, timeZone, calendar, y, mon, w, d, 0, 0, 0, 0, 0, 0);
      var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
      var instantAfter = new TemporalInstant(after);
      var offsetAfter = GetOffsetNanosecondsFor(timeZone, instantAfter);
      return offsetAfter - offsetBefore;
    }
    return 0;
  }
  function CreateNegatedTemporalDuration(duration) {
    var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    return new TemporalDuration(-GetSlot(duration, YEARS), -GetSlot(duration, MONTHS), -GetSlot(duration, WEEKS), -GetSlot(duration, DAYS), -GetSlot(duration, HOURS), -GetSlot(duration, MINUTES), -GetSlot(duration, SECONDS), -GetSlot(duration, MILLISECONDS), -GetSlot(duration, MICROSECONDS), -GetSlot(duration, NANOSECONDS));
  }
  function ConstrainToRange(value, min, max) {
    return MathMin(max, MathMax(min, value));
  }
  function ConstrainISODate(year, month, day) {
    month = ConstrainToRange(month, 1, 12);
    day = ConstrainToRange(day, 1, ISODaysInMonth(year, month));
    return {
      year: year,
      month: month,
      day: day
    };
  }
  function ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond) {
    hour = ConstrainToRange(hour, 0, 23);
    minute = ConstrainToRange(minute, 0, 59);
    second = ConstrainToRange(second, 0, 59);
    millisecond = ConstrainToRange(millisecond, 0, 999);
    microsecond = ConstrainToRange(microsecond, 0, 999);
    nanosecond = ConstrainToRange(nanosecond, 0, 999);
    return {
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond
    };
  }
  function RejectToRange(value, min, max) {
    if (value < min || value > max) throw new RangeError("value out of range: ".concat(min, " <= ").concat(value, " <= ").concat(max));
  }
  function RejectISODate(year, month, day) {
    RejectToRange(month, 1, 12);
    RejectToRange(day, 1, ISODaysInMonth(year, month));
  }
  function RejectDateRange(year, month, day) {
    // Noon avoids trouble at edges of DateTime range (excludes midnight)
    RejectDateTimeRange(year, month, day, 12, 0, 0, 0, 0, 0);
  }
  function RejectTime(hour, minute, second, millisecond, microsecond, nanosecond) {
    RejectToRange(hour, 0, 23);
    RejectToRange(minute, 0, 59);
    RejectToRange(second, 0, 59);
    RejectToRange(millisecond, 0, 999);
    RejectToRange(microsecond, 0, 999);
    RejectToRange(nanosecond, 0, 999);
  }
  function RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
    RejectISODate(year, month, day);
    RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
  }
  function RejectDateTimeRange(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
    RejectToRange(year, YEAR_MIN, YEAR_MAX);
    // Reject any DateTime 24 hours or more outside the Instant range
    if (year === YEAR_MIN && null == GetUTCEpochNanoseconds(year, month, day + 1, hour, minute, second, millisecond, microsecond, nanosecond - 1) || year === YEAR_MAX && null == GetUTCEpochNanoseconds(year, month, day - 1, hour, minute, second, millisecond, microsecond, nanosecond + 1)) {
      throw new RangeError('DateTime outside of supported range');
    }
  }
  function ValidateEpochNanoseconds(epochNanoseconds) {
    if (epochNanoseconds.lesser(NS_MIN) || epochNanoseconds.greater(NS_MAX)) {
      throw new RangeError('Instant outside of supported range');
    }
  }
  function RejectYearMonthRange(year, month) {
    RejectToRange(year, YEAR_MIN, YEAR_MAX);
    if (year === YEAR_MIN) {
      RejectToRange(month, 4, 12);
    } else if (year === YEAR_MAX) {
      RejectToRange(month, 1, 9);
    }
  }
  function RejectDuration(y, mon, w, d, h, min, s, ms, µs, ns) {
    var sign = DurationSign(y, mon, w, d, h, min, s, ms, µs, ns);
    var fields = [y, mon, w, d, h, min, s, ms, µs, ns];
    for (var index = 0; index < fields.length; index++) {
      var prop = fields[index];
      if (!NumberIsFinite(prop)) throw new RangeError('infinite values not allowed as duration fields');
      var propSign = MathSign(prop);
      if (propSign !== 0 && propSign !== sign) throw new RangeError('mixed-sign values not allowed as duration fields');
    }
  }
  function DifferenceISODate(y1, m1, d1, y2, m2, d2) {
    var largestUnit = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'days';
    switch (largestUnit) {
      case 'year':
      case 'month':
        {
          var sign = -CompareISODate(y1, m1, d1, y2, m2, d2);
          if (sign === 0) return {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0
          };
          var start = {
            year: y1,
            month: m1,
            day: d1
          };
          var end = {
            year: y2,
            month: m2,
            day: d2
          };
          var years = end.year - start.year;
          var mid = AddISODate(y1, m1, d1, years, 0, 0, 0, 'constrain');
          var midSign = -CompareISODate(mid.year, mid.month, mid.day, y2, m2, d2);
          if (midSign === 0) {
            return largestUnit === 'year' ? {
              years: years,
              months: 0,
              weeks: 0,
              days: 0
            } : {
              years: 0,
              months: years * 12,
              weeks: 0,
              days: 0
            };
          }
          var months = end.month - start.month;
          if (midSign !== sign) {
            years -= sign;
            months += sign * 12;
          }
          mid = AddISODate(y1, m1, d1, years, months, 0, 0, 'constrain');
          midSign = -CompareISODate(mid.year, mid.month, mid.day, y2, m2, d2);
          if (midSign === 0) {
            return largestUnit === 'year' ? {
              years: years,
              months: months,
              weeks: 0,
              days: 0
            } : {
              years: 0,
              months: months + years * 12,
              weeks: 0,
              days: 0
            };
          }
          if (midSign !== sign) {
            // The end date is later in the month than mid date (or earlier for
            // negative durations). Back up one month.
            months -= sign;
            if (months === -sign) {
              years -= sign;
              months = 11 * sign;
            }
            mid = AddISODate(y1, m1, d1, years, months, 0, 0, 'constrain');
          }
          var days = 0;
          // If we get here, months and years are correct (no overflow), and `mid`
          // is within the range from `start` to `end`. To count the days between
          // `mid` and `end`, there are 3 cases:
          // 1) same month: use simple subtraction
          // 2) end is previous month from intermediate (negative duration)
          // 3) end is next month from intermediate (positive duration)
          if (mid.month === end.month) {
            // 1) same month: use simple subtraction
            days = end.day - mid.day;
          } else if (sign < 0) {
            // 2) end is previous month from intermediate (negative duration)
            // Example: intermediate: Feb 1, end: Jan 30, DaysInMonth = 31, days = -2
            days = -mid.day - (ISODaysInMonth(end.year, end.month) - end.day);
          } else {
            // 3) end is next month from intermediate (positive duration)
            // Example: intermediate: Jan 29, end: Feb 1, DaysInMonth = 31, days = 3
            days = end.day + (ISODaysInMonth(mid.year, mid.month) - mid.day);
          }
          if (largestUnit === 'month') {
            months += years * 12;
            years = 0;
          }
          return {
            years: years,
            months: months,
            weeks: 0,
            days: days
          };
        }
      case 'week':
      case 'day':
        {
          var larger, smaller, _sign;
          if (CompareISODate(y1, m1, d1, y2, m2, d2) < 0) {
            smaller = {
              year: y1,
              month: m1,
              day: d1
            };
            larger = {
              year: y2,
              month: m2,
              day: d2
            };
            _sign = 1;
          } else {
            smaller = {
              year: y2,
              month: m2,
              day: d2
            };
            larger = {
              year: y1,
              month: m1,
              day: d1
            };
            _sign = -1;
          }
          var _days2 = DayOfYear(larger.year, larger.month, larger.day) - DayOfYear(smaller.year, smaller.month, smaller.day);
          for (var year = smaller.year; year < larger.year; ++year) {
            _days2 += LeapYear(year) ? 366 : 365;
          }
          var weeks = 0;
          if (largestUnit === 'week') {
            weeks = MathFloor$1(_days2 / 7);
            _days2 %= 7;
          }
          weeks *= _sign;
          _days2 *= _sign;
          return {
            years: 0,
            months: 0,
            weeks: weeks,
            days: _days2
          };
        }
      default:
        throw new Error('assert not reached');
    }
  }
  function DifferenceTime(h1, min1, s1, ms1, µs1, ns1, h2, min2, s2, ms2, µs2, ns2) {
    var hours = h2 - h1;
    var minutes = min2 - min1;
    var seconds = s2 - s1;
    var milliseconds = ms2 - ms1;
    var microseconds = µs2 - µs1;
    var nanoseconds = ns2 - ns1;
    var sign = DurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    hours *= sign;
    minutes *= sign;
    seconds *= sign;
    milliseconds *= sign;
    microseconds *= sign;
    nanoseconds *= sign;
    var deltaDays = 0;
    var _BalanceTime2 = BalanceTime(hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    deltaDays = _BalanceTime2.deltaDays;
    hours = _BalanceTime2.hour;
    minutes = _BalanceTime2.minute;
    seconds = _BalanceTime2.second;
    milliseconds = _BalanceTime2.millisecond;
    microseconds = _BalanceTime2.microsecond;
    nanoseconds = _BalanceTime2.nanosecond;
    if (deltaDays != 0) throw new Error('assertion failure in DifferenceTime: _bt_.[[Days]] should be 0');
    hours *= sign;
    minutes *= sign;
    seconds *= sign;
    milliseconds *= sign;
    microseconds *= sign;
    nanoseconds *= sign;
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    };
  }
  function DifferenceInstant(ns1, ns2, increment, smallestUnit, largestUnit, roundingMode) {
    var diff = ns2.minus(ns1);
    var hours = 0;
    var minutes = 0;
    var nanoseconds = diff.mod(1e3).toJSNumber();
    var microseconds = diff.divide(1e3).mod(1e3).toJSNumber();
    var milliseconds = diff.divide(1e6).mod(1e3).toJSNumber();
    var seconds = diff.divide(1e9).toJSNumber();
    var _RoundDuration = RoundDuration(0, 0, 0, 0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, increment, smallestUnit, roundingMode);
    hours = _RoundDuration.hours;
    minutes = _RoundDuration.minutes;
    seconds = _RoundDuration.seconds;
    milliseconds = _RoundDuration.milliseconds;
    microseconds = _RoundDuration.microseconds;
    nanoseconds = _RoundDuration.nanoseconds;
    return BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
  }
  function DifferenceISODateTime(y1, mon1, d1, h1, min1, s1, ms1, µs1, ns1, y2, mon2, d2, h2, min2, s2, ms2, µs2, ns2, calendar, largestUnit, options) {
    var _DifferenceTime = DifferenceTime(h1, min1, s1, ms1, µs1, ns1, h2, min2, s2, ms2, µs2, ns2),
      hours = _DifferenceTime.hours,
      minutes = _DifferenceTime.minutes,
      seconds = _DifferenceTime.seconds,
      milliseconds = _DifferenceTime.milliseconds,
      microseconds = _DifferenceTime.microseconds,
      nanoseconds = _DifferenceTime.nanoseconds;
    var timeSign = DurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    var dateSign = CompareISODate(y2, mon2, d2, y1, mon1, d1);
    if (dateSign === -timeSign) {
      var _BalanceISODate2 = BalanceISODate(y1, mon1, d1 - timeSign);
      y1 = _BalanceISODate2.year;
      mon1 = _BalanceISODate2.month;
      d1 = _BalanceISODate2.day;
      var _BalanceDuration = BalanceDuration(-timeSign, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
      hours = _BalanceDuration.hours;
      minutes = _BalanceDuration.minutes;
      seconds = _BalanceDuration.seconds;
      milliseconds = _BalanceDuration.milliseconds;
      microseconds = _BalanceDuration.microseconds;
      nanoseconds = _BalanceDuration.nanoseconds;
    }
    var date1 = CreateTemporalDate(y1, mon1, d1, calendar);
    var date2 = CreateTemporalDate(y2, mon2, d2, calendar);
    var dateLargestUnit = LargerOfTwoTemporalUnits('day', largestUnit);
    var untilOptions = CopyOptions(options);
    untilOptions.largestUnit = dateLargestUnit;
    var untilResult = CalendarDateUntil(calendar, date1, date2, untilOptions);
    var years = GetSlot(untilResult, YEARS);
    var months = GetSlot(untilResult, MONTHS);
    var weeks = GetSlot(untilResult, WEEKS);
    var days = GetSlot(untilResult, DAYS);
    // Signs of date part and time part may not agree; balance them together
    var _BalanceDuration2 = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
    days = _BalanceDuration2.days;
    hours = _BalanceDuration2.hours;
    minutes = _BalanceDuration2.minutes;
    seconds = _BalanceDuration2.seconds;
    milliseconds = _BalanceDuration2.milliseconds;
    microseconds = _BalanceDuration2.microseconds;
    nanoseconds = _BalanceDuration2.nanoseconds;
    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    };
  }
  function DifferenceZonedDateTime(ns1, ns2, timeZone, calendar, largestUnit, options) {
    var nsDiff = ns2.subtract(ns1);
    if (nsDiff.isZero()) {
      return {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0
      };
    }

    // Find the difference in dates only.
    var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    var start = new TemporalInstant(ns1);
    var end = new TemporalInstant(ns2);
    var dtStart = GetPlainDateTimeFor(timeZone, start, calendar);
    var dtEnd = GetPlainDateTimeFor(timeZone, end, calendar);
    var _DifferenceISODateTim2 = DifferenceISODateTime(GetSlot(dtStart, ISO_YEAR), GetSlot(dtStart, ISO_MONTH), GetSlot(dtStart, ISO_DAY), GetSlot(dtStart, ISO_HOUR), GetSlot(dtStart, ISO_MINUTE), GetSlot(dtStart, ISO_SECOND), GetSlot(dtStart, ISO_MILLISECOND), GetSlot(dtStart, ISO_MICROSECOND), GetSlot(dtStart, ISO_NANOSECOND), GetSlot(dtEnd, ISO_YEAR), GetSlot(dtEnd, ISO_MONTH), GetSlot(dtEnd, ISO_DAY), GetSlot(dtEnd, ISO_HOUR), GetSlot(dtEnd, ISO_MINUTE), GetSlot(dtEnd, ISO_SECOND), GetSlot(dtEnd, ISO_MILLISECOND), GetSlot(dtEnd, ISO_MICROSECOND), GetSlot(dtEnd, ISO_NANOSECOND), calendar, largestUnit, options),
      years = _DifferenceISODateTim2.years,
      months = _DifferenceISODateTim2.months,
      weeks = _DifferenceISODateTim2.weeks,
      days = _DifferenceISODateTim2.days;
    var intermediateNs = AddZonedDateTime(start, timeZone, calendar, years, months, weeks, 0, 0, 0, 0, 0, 0, 0);
    // may disambiguate
    var timeRemainderNs = ns2.subtract(intermediateNs);
    var intermediate = CreateTemporalZonedDateTime(intermediateNs, timeZone, calendar);
    // Finally, merge the date and time durations and return the merged result.
    var _NanosecondsToDays2 = NanosecondsToDays(timeRemainderNs, intermediate);
    timeRemainderNs = _NanosecondsToDays2.nanoseconds;
    days = _NanosecondsToDays2.days;
    var _BalanceDuration3 = BalanceDuration(0, 0, 0, 0, 0, 0, timeRemainderNs, 'hour'),
      hours = _BalanceDuration3.hours,
      minutes = _BalanceDuration3.minutes,
      seconds = _BalanceDuration3.seconds,
      milliseconds = _BalanceDuration3.milliseconds,
      microseconds = _BalanceDuration3.microseconds,
      nanoseconds = _BalanceDuration3.nanoseconds;
    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    };
  }
  function GetDifferenceSettings(op, options, group, disallowed, fallbackSmallest, smallestLargestDefaultUnit) {
    var ALLOWED_UNITS = SINGULAR_PLURAL_UNITS.reduce(function (allowed, unitInfo) {
      var p = unitInfo[0];
      var s = unitInfo[1];
      var c = unitInfo[2];
      if ((group === 'datetime' || c === group) && !Call$1(ArrayIncludes$1, disallowed, [s])) {
        allowed.push(s, p);
      }
      return allowed;
    }, []);
    var largestUnit = GetTemporalUnit(options, 'largestUnit', group, 'auto');
    if (Call$1(ArrayIncludes$1, disallowed, [largestUnit])) {
      throw new RangeError("largestUnit must be one of ".concat(ALLOWED_UNITS.join(', '), ", not ").concat(largestUnit));
    }
    var roundingIncrement = ToTemporalRoundingIncrement(options);
    var roundingMode = ToTemporalRoundingMode(options, 'trunc');
    if (op === 'since') roundingMode = NegateTemporalRoundingMode(roundingMode);
    var smallestUnit = GetTemporalUnit(options, 'smallestUnit', group, fallbackSmallest);
    if (Call$1(ArrayIncludes$1, disallowed, [smallestUnit])) {
      throw new RangeError("smallestUnit must be one of ".concat(ALLOWED_UNITS.join(', '), ", not ").concat(smallestUnit));
    }
    var defaultLargestUnit = LargerOfTwoTemporalUnits(smallestLargestDefaultUnit, smallestUnit);
    if (largestUnit === 'auto') largestUnit = defaultLargestUnit;
    if (LargerOfTwoTemporalUnits(largestUnit, smallestUnit) !== largestUnit) {
      throw new RangeError("largestUnit ".concat(largestUnit, " cannot be smaller than smallestUnit ").concat(smallestUnit));
    }
    var MAX_DIFFERENCE_INCREMENTS = {
      hour: 24,
      minute: 60,
      second: 60,
      millisecond: 1000,
      microsecond: 1000,
      nanosecond: 1000
    };
    var maximum = MAX_DIFFERENCE_INCREMENTS[smallestUnit];
    if (maximum !== undefined) ValidateTemporalRoundingIncrement(roundingIncrement, maximum, false);
    return {
      largestUnit: largestUnit,
      roundingIncrement: roundingIncrement,
      roundingMode: roundingMode,
      smallestUnit: smallestUnit
    };
  }
  function DifferenceTemporalInstant(operation, instant, other, options) {
    var sign = operation === 'since' ? -1 : 1;
    other = ToTemporalInstant(other);
    var resolvedOptions = CopyOptions(options);
    var settings = GetDifferenceSettings(operation, resolvedOptions, 'time', [], 'nanosecond', 'second');
    var onens = GetSlot(instant, EPOCHNANOSECONDS);
    var twons = GetSlot(other, EPOCHNANOSECONDS);
    var _DifferenceInstant = DifferenceInstant(onens, twons, settings.roundingIncrement, settings.smallestUnit, settings.largestUnit, settings.roundingMode),
      hours = _DifferenceInstant.hours,
      minutes = _DifferenceInstant.minutes,
      seconds = _DifferenceInstant.seconds,
      milliseconds = _DifferenceInstant.milliseconds,
      microseconds = _DifferenceInstant.microseconds,
      nanoseconds = _DifferenceInstant.nanoseconds;
    var Duration = GetIntrinsic('%Temporal.Duration%');
    return new Duration(0, 0, 0, 0, sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds);
  }
  function DifferenceTemporalPlainDate(operation, plainDate, other, options) {
    var sign = operation === 'since' ? -1 : 1;
    other = ToTemporalDate(other);
    var calendar = GetSlot(plainDate, CALENDAR);
    var otherCalendar = GetSlot(other, CALENDAR);
    ThrowIfCalendarsNotEqual(calendar, otherCalendar, 'compute difference between dates');
    var resolvedOptions = CopyOptions(options);
    var settings = GetDifferenceSettings(operation, resolvedOptions, 'date', [], 'day', 'day');
    resolvedOptions.largestUnit = settings.largestUnit;
    var untilResult = CalendarDateUntil(calendar, plainDate, other, resolvedOptions);
    var years = GetSlot(untilResult, YEARS);
    var months = GetSlot(untilResult, MONTHS);
    var weeks = GetSlot(untilResult, WEEKS);
    var days = GetSlot(untilResult, DAYS);
    if (settings.smallestUnit !== 'day' || settings.roundingIncrement !== 1) {
      var _RoundDuration2 = RoundDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, settings.roundingIncrement, settings.smallestUnit, settings.roundingMode, plainDate);
      years = _RoundDuration2.years;
      months = _RoundDuration2.months;
      weeks = _RoundDuration2.weeks;
      days = _RoundDuration2.days;
    }
    var Duration = GetIntrinsic('%Temporal.Duration%');
    return new Duration(sign * years, sign * months, sign * weeks, sign * days, 0, 0, 0, 0, 0, 0);
  }
  function DifferenceTemporalPlainDateTime(operation, plainDateTime, other, options) {
    var sign = operation === 'since' ? -1 : 1;
    other = ToTemporalDateTime(other);
    var calendar = GetSlot(plainDateTime, CALENDAR);
    var otherCalendar = GetSlot(other, CALENDAR);
    ThrowIfCalendarsNotEqual(calendar, otherCalendar, 'compute difference between dates');
    var resolvedOptions = CopyOptions(options);
    var settings = GetDifferenceSettings(operation, resolvedOptions, 'datetime', [], 'nanosecond', 'day');
    var _DifferenceISODateTim3 = DifferenceISODateTime(GetSlot(plainDateTime, ISO_YEAR), GetSlot(plainDateTime, ISO_MONTH), GetSlot(plainDateTime, ISO_DAY), GetSlot(plainDateTime, ISO_HOUR), GetSlot(plainDateTime, ISO_MINUTE), GetSlot(plainDateTime, ISO_SECOND), GetSlot(plainDateTime, ISO_MILLISECOND), GetSlot(plainDateTime, ISO_MICROSECOND), GetSlot(plainDateTime, ISO_NANOSECOND), GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), calendar, settings.largestUnit, resolvedOptions),
      years = _DifferenceISODateTim3.years,
      months = _DifferenceISODateTim3.months,
      weeks = _DifferenceISODateTim3.weeks,
      days = _DifferenceISODateTim3.days,
      hours = _DifferenceISODateTim3.hours,
      minutes = _DifferenceISODateTim3.minutes,
      seconds = _DifferenceISODateTim3.seconds,
      milliseconds = _DifferenceISODateTim3.milliseconds,
      microseconds = _DifferenceISODateTim3.microseconds,
      nanoseconds = _DifferenceISODateTim3.nanoseconds;
    var relativeTo = TemporalDateTimeToDate(plainDateTime);
    var _RoundDuration3 = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, settings.roundingIncrement, settings.smallestUnit, settings.roundingMode, relativeTo);
    years = _RoundDuration3.years;
    months = _RoundDuration3.months;
    weeks = _RoundDuration3.weeks;
    days = _RoundDuration3.days;
    hours = _RoundDuration3.hours;
    minutes = _RoundDuration3.minutes;
    seconds = _RoundDuration3.seconds;
    milliseconds = _RoundDuration3.milliseconds;
    microseconds = _RoundDuration3.microseconds;
    nanoseconds = _RoundDuration3.nanoseconds;
    var _BalanceDuration4 = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, settings.largestUnit);
    days = _BalanceDuration4.days;
    hours = _BalanceDuration4.hours;
    minutes = _BalanceDuration4.minutes;
    seconds = _BalanceDuration4.seconds;
    milliseconds = _BalanceDuration4.milliseconds;
    microseconds = _BalanceDuration4.microseconds;
    nanoseconds = _BalanceDuration4.nanoseconds;
    var Duration = GetIntrinsic('%Temporal.Duration%');
    return new Duration(sign * years, sign * months, sign * weeks, sign * days, sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds);
  }
  function DifferenceTemporalPlainTime(operation, plainTime, other, options) {
    var sign = operation === 'since' ? -1 : 1;
    other = ToTemporalTime(other);
    var resolvedOptions = CopyOptions(options);
    var settings = GetDifferenceSettings(operation, resolvedOptions, 'time', [], 'nanosecond', 'hour');
    var _DifferenceTime2 = DifferenceTime(GetSlot(plainTime, ISO_HOUR), GetSlot(plainTime, ISO_MINUTE), GetSlot(plainTime, ISO_SECOND), GetSlot(plainTime, ISO_MILLISECOND), GetSlot(plainTime, ISO_MICROSECOND), GetSlot(plainTime, ISO_NANOSECOND), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND)),
      hours = _DifferenceTime2.hours,
      minutes = _DifferenceTime2.minutes,
      seconds = _DifferenceTime2.seconds,
      milliseconds = _DifferenceTime2.milliseconds,
      microseconds = _DifferenceTime2.microseconds,
      nanoseconds = _DifferenceTime2.nanoseconds;
    var _RoundDuration4 = RoundDuration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, settings.roundingIncrement, settings.smallestUnit, settings.roundingMode);
    hours = _RoundDuration4.hours;
    minutes = _RoundDuration4.minutes;
    seconds = _RoundDuration4.seconds;
    milliseconds = _RoundDuration4.milliseconds;
    microseconds = _RoundDuration4.microseconds;
    nanoseconds = _RoundDuration4.nanoseconds;
    var _BalanceDuration5 = BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, settings.largestUnit);
    hours = _BalanceDuration5.hours;
    minutes = _BalanceDuration5.minutes;
    seconds = _BalanceDuration5.seconds;
    milliseconds = _BalanceDuration5.milliseconds;
    microseconds = _BalanceDuration5.microseconds;
    nanoseconds = _BalanceDuration5.nanoseconds;
    var Duration = GetIntrinsic('%Temporal.Duration%');
    return new Duration(0, 0, 0, 0, sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds);
  }
  function DifferenceTemporalPlainYearMonth(operation, yearMonth, other, options) {
    var sign = operation === 'since' ? -1 : 1;
    other = ToTemporalYearMonth(other);
    var calendar = GetSlot(yearMonth, CALENDAR);
    var otherCalendar = GetSlot(other, CALENDAR);
    ThrowIfCalendarsNotEqual(calendar, otherCalendar, 'compute difference between months');
    var resolvedOptions = CopyOptions(options);
    var settings = GetDifferenceSettings(operation, resolvedOptions, 'date', ['week', 'day'], 'month', 'year');
    resolvedOptions.largestUnit = settings.largestUnit;
    var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
    var thisFields = PrepareTemporalFields(yearMonth, fieldNames, []);
    thisFields.day = 1;
    var thisDate = CalendarDateFromFields(calendar, thisFields);
    var otherFields = PrepareTemporalFields(other, fieldNames, []);
    otherFields.day = 1;
    var otherDate = CalendarDateFromFields(calendar, otherFields);
    var _CalendarDateUntil = CalendarDateUntil(calendar, thisDate, otherDate, resolvedOptions),
      years = _CalendarDateUntil.years,
      months = _CalendarDateUntil.months;
    if (settings.smallestUnit !== 'month' || settings.roundingIncrement !== 1) {
      var _RoundDuration5 = RoundDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0, settings.roundingIncrement, settings.smallestUnit, settings.roundingMode, thisDate);
      years = _RoundDuration5.years;
      months = _RoundDuration5.months;
    }
    var Duration = GetIntrinsic('%Temporal.Duration%');
    return new Duration(sign * years, sign * months, 0, 0, 0, 0, 0, 0, 0, 0);
  }
  function DifferenceTemporalZonedDateTime(operation, zonedDateTime, other, options) {
    var sign = operation === 'since' ? -1 : 1;
    other = ToTemporalZonedDateTime(other);
    var calendar = GetSlot(zonedDateTime, CALENDAR);
    var otherCalendar = GetSlot(other, CALENDAR);
    ThrowIfCalendarsNotEqual(calendar, otherCalendar, 'compute difference between dates');
    var resolvedOptions = CopyOptions(options);
    var settings = GetDifferenceSettings(operation, resolvedOptions, 'datetime', [], 'nanosecond', 'hour');
    resolvedOptions.largestUnit = settings.largestUnit;
    var ns1 = GetSlot(zonedDateTime, EPOCHNANOSECONDS);
    var ns2 = GetSlot(other, EPOCHNANOSECONDS);
    var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
    if (settings.largestUnit !== 'year' && settings.largestUnit !== 'month' && settings.largestUnit !== 'week' && settings.largestUnit !== 'day') {
      // The user is only asking for a time difference, so return difference of instants.
      years = 0;
      months = 0;
      weeks = 0;
      days = 0;
      var _DifferenceInstant2 = DifferenceInstant(ns1, ns2, settings.roundingIncrement, settings.smallestUnit, settings.largestUnit, settings.roundingMode);
      hours = _DifferenceInstant2.hours;
      minutes = _DifferenceInstant2.minutes;
      seconds = _DifferenceInstant2.seconds;
      milliseconds = _DifferenceInstant2.milliseconds;
      microseconds = _DifferenceInstant2.microseconds;
      nanoseconds = _DifferenceInstant2.nanoseconds;
    } else {
      var timeZone = GetSlot(zonedDateTime, TIME_ZONE);
      if (!TimeZoneEquals(timeZone, GetSlot(other, TIME_ZONE))) {
        throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' " + 'or smaller because day lengths can vary between time zones due to DST or time zone offset changes.');
      }
      var _DifferenceZonedDateT = DifferenceZonedDateTime(ns1, ns2, timeZone, calendar, settings.largestUnit, resolvedOptions);
      years = _DifferenceZonedDateT.years;
      months = _DifferenceZonedDateT.months;
      weeks = _DifferenceZonedDateT.weeks;
      days = _DifferenceZonedDateT.days;
      hours = _DifferenceZonedDateT.hours;
      minutes = _DifferenceZonedDateT.minutes;
      seconds = _DifferenceZonedDateT.seconds;
      milliseconds = _DifferenceZonedDateT.milliseconds;
      microseconds = _DifferenceZonedDateT.microseconds;
      nanoseconds = _DifferenceZonedDateT.nanoseconds;
      var _RoundDuration6 = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, settings.roundingIncrement, settings.smallestUnit, settings.roundingMode, zonedDateTime);
      years = _RoundDuration6.years;
      months = _RoundDuration6.months;
      weeks = _RoundDuration6.weeks;
      days = _RoundDuration6.days;
      hours = _RoundDuration6.hours;
      minutes = _RoundDuration6.minutes;
      seconds = _RoundDuration6.seconds;
      milliseconds = _RoundDuration6.milliseconds;
      microseconds = _RoundDuration6.microseconds;
      nanoseconds = _RoundDuration6.nanoseconds;
      var _AdjustRoundedDuratio = AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, settings.roundingIncrement, settings.smallestUnit, settings.roundingMode, zonedDateTime);
      years = _AdjustRoundedDuratio.years;
      months = _AdjustRoundedDuratio.months;
      weeks = _AdjustRoundedDuratio.weeks;
      days = _AdjustRoundedDuratio.days;
      hours = _AdjustRoundedDuratio.hours;
      minutes = _AdjustRoundedDuratio.minutes;
      seconds = _AdjustRoundedDuratio.seconds;
      milliseconds = _AdjustRoundedDuratio.milliseconds;
      microseconds = _AdjustRoundedDuratio.microseconds;
      nanoseconds = _AdjustRoundedDuratio.nanoseconds;
    }
    var Duration = GetIntrinsic('%Temporal.Duration%');
    return new Duration(sign * years, sign * months, sign * weeks, sign * days, sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds);
  }
  function AddISODate(year, month, day, years, months, weeks, days, overflow) {
    year += years;
    month += months;
    var _BalanceISOYearMonth4 = BalanceISOYearMonth(year, month);
    year = _BalanceISOYearMonth4.year;
    month = _BalanceISOYearMonth4.month;
    var _RegulateISODate = RegulateISODate(year, month, day, overflow);
    year = _RegulateISODate.year;
    month = _RegulateISODate.month;
    day = _RegulateISODate.day;
    days += 7 * weeks;
    day += days;
    var _BalanceISODate3 = BalanceISODate(year, month, day);
    year = _BalanceISODate3.year;
    month = _BalanceISODate3.month;
    day = _BalanceISODate3.day;
    return {
      year: year,
      month: month,
      day: day
    };
  }
  function AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
    hour += hours;
    minute += minutes;
    second += seconds;
    millisecond += milliseconds;
    microsecond += microseconds;
    nanosecond += nanoseconds;
    var deltaDays = 0;
    var _BalanceTime3 = BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond);
    deltaDays = _BalanceTime3.deltaDays;
    hour = _BalanceTime3.hour;
    minute = _BalanceTime3.minute;
    second = _BalanceTime3.second;
    millisecond = _BalanceTime3.millisecond;
    microsecond = _BalanceTime3.microsecond;
    nanosecond = _BalanceTime3.nanosecond;
    return {
      deltaDays: deltaDays,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond
    };
  }
  function AddDuration(y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2, relativeTo) {
    var largestUnit1 = DefaultTemporalLargestUnit(y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1);
    var largestUnit2 = DefaultTemporalLargestUnit(y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2);
    var largestUnit = LargerOfTwoTemporalUnits(largestUnit1, largestUnit2);
    var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
    if (!relativeTo) {
      if (largestUnit === 'year' || largestUnit === 'month' || largestUnit === 'week') {
        throw new RangeError('relativeTo is required for years, months, or weeks arithmetic');
      }
      years = months = weeks = 0;
      var _BalanceDuration6 = BalanceDuration(d1 + d2, bigInt(h1).add(h2), bigInt(min1).add(min2), bigInt(s1).add(s2), bigInt(ms1).add(ms2), bigInt(µs1).add(µs2), bigInt(ns1).add(ns2), largestUnit);
      days = _BalanceDuration6.days;
      hours = _BalanceDuration6.hours;
      minutes = _BalanceDuration6.minutes;
      seconds = _BalanceDuration6.seconds;
      milliseconds = _BalanceDuration6.milliseconds;
      microseconds = _BalanceDuration6.microseconds;
      nanoseconds = _BalanceDuration6.nanoseconds;
    } else if (IsTemporalDate(relativeTo)) {
      var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
      var calendar = GetSlot(relativeTo, CALENDAR);
      var dateDuration1 = new TemporalDuration(y1, mon1, w1, d1, 0, 0, 0, 0, 0, 0);
      var dateDuration2 = new TemporalDuration(y2, mon2, w2, d2, 0, 0, 0, 0, 0, 0);
      var dateAdd = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
      var intermediate = CalendarDateAdd(calendar, relativeTo, dateDuration1, undefined, dateAdd);
      var end = CalendarDateAdd(calendar, intermediate, dateDuration2, undefined, dateAdd);
      var dateLargestUnit = LargerOfTwoTemporalUnits('day', largestUnit);
      var differenceOptions = ObjectCreate$8(null);
      differenceOptions.largestUnit = dateLargestUnit;
      var untilResult = CalendarDateUntil(calendar, relativeTo, end, differenceOptions);
      years = GetSlot(untilResult, YEARS);
      months = GetSlot(untilResult, MONTHS);
      weeks = GetSlot(untilResult, WEEKS);
      days = GetSlot(untilResult, DAYS);
      // Signs of date part and time part may not agree; balance them together
      var _BalanceDuration7 = BalanceDuration(days, bigInt(h1).add(h2), bigInt(min1).add(min2), bigInt(s1).add(s2), bigInt(ms1).add(ms2), bigInt(µs1).add(µs2), bigInt(ns1).add(ns2), largestUnit);
      days = _BalanceDuration7.days;
      hours = _BalanceDuration7.hours;
      minutes = _BalanceDuration7.minutes;
      seconds = _BalanceDuration7.seconds;
      milliseconds = _BalanceDuration7.milliseconds;
      microseconds = _BalanceDuration7.microseconds;
      nanoseconds = _BalanceDuration7.nanoseconds;
    } else {
      // relativeTo is a ZonedDateTime
      var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
      var timeZone = GetSlot(relativeTo, TIME_ZONE);
      var _calendar5 = GetSlot(relativeTo, CALENDAR);
      var intermediateNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, _calendar5, y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1);
      var endNs = AddZonedDateTime(new TemporalInstant(intermediateNs), timeZone, _calendar5, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2);
      if (largestUnit !== 'year' && largestUnit !== 'month' && largestUnit !== 'week' && largestUnit !== 'day') {
        // The user is only asking for a time difference, so return difference of instants.
        years = 0;
        months = 0;
        weeks = 0;
        days = 0;
        var _DifferenceInstant3 = DifferenceInstant(GetSlot(relativeTo, EPOCHNANOSECONDS), endNs, 1, 'nanosecond', largestUnit, 'halfExpand');
        hours = _DifferenceInstant3.hours;
        minutes = _DifferenceInstant3.minutes;
        seconds = _DifferenceInstant3.seconds;
        milliseconds = _DifferenceInstant3.milliseconds;
        microseconds = _DifferenceInstant3.microseconds;
        nanoseconds = _DifferenceInstant3.nanoseconds;
      } else {
        var _DifferenceZonedDateT2 = DifferenceZonedDateTime(GetSlot(relativeTo, EPOCHNANOSECONDS), endNs, timeZone, _calendar5, largestUnit, ObjectCreate$8(null));
        years = _DifferenceZonedDateT2.years;
        months = _DifferenceZonedDateT2.months;
        weeks = _DifferenceZonedDateT2.weeks;
        days = _DifferenceZonedDateT2.days;
        hours = _DifferenceZonedDateT2.hours;
        minutes = _DifferenceZonedDateT2.minutes;
        seconds = _DifferenceZonedDateT2.seconds;
        milliseconds = _DifferenceZonedDateT2.milliseconds;
        microseconds = _DifferenceZonedDateT2.microseconds;
        nanoseconds = _DifferenceZonedDateT2.nanoseconds;
      }
    }
    RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    };
  }
  function AddInstant(epochNanoseconds, h, min, s, ms, µs, ns) {
    var sum = bigInt.zero;
    sum = sum.plus(bigInt(ns));
    sum = sum.plus(bigInt(µs).multiply(1e3));
    sum = sum.plus(bigInt(ms).multiply(1e6));
    sum = sum.plus(bigInt(s).multiply(1e9));
    sum = sum.plus(bigInt(min).multiply(60 * 1e9));
    sum = sum.plus(bigInt(h).multiply(60 * 60 * 1e9));
    var result = bigInt(epochNanoseconds).plus(sum);
    ValidateEpochNanoseconds(result);
    return result;
  }
  function AddDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options) {
    // Add the time part
    var deltaDays = 0;
    var _AddTime = AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    deltaDays = _AddTime.deltaDays;
    hour = _AddTime.hour;
    minute = _AddTime.minute;
    second = _AddTime.second;
    millisecond = _AddTime.millisecond;
    microsecond = _AddTime.microsecond;
    nanosecond = _AddTime.nanosecond;
    days += deltaDays;

    // Delegate the date part addition to the calendar
    var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    var datePart = CreateTemporalDate(year, month, day, calendar);
    var dateDuration = new TemporalDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    var addedDate = CalendarDateAdd(calendar, datePart, dateDuration, options);
    return {
      year: GetSlot(addedDate, ISO_YEAR),
      month: GetSlot(addedDate, ISO_MONTH),
      day: GetSlot(addedDate, ISO_DAY),
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond
    };
  }
  function AddZonedDateTime(instant, timeZone, calendar, years, months, weeks, days, h, min, s, ms, µs, ns, options) {
    // If only time is to be added, then use Instant math. It's not OK to fall
    // through to the date/time code below because compatible disambiguation in
    // the PlainDateTime=>Instant conversion will change the offset of any
    // ZonedDateTime in the repeated clock time after a backwards transition.
    // When adding/subtracting time units and not dates, this disambiguation is
    // not expected and so is avoided below via a fast path for time-only
    // arithmetic.
    // BTW, this behavior is similar in spirit to offset: 'prefer' in `with`.
    var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    if (DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0) === 0) {
      return AddInstant(GetSlot(instant, EPOCHNANOSECONDS), h, min, s, ms, µs, ns);
    }

    // RFC 5545 requires the date portion to be added in calendar days and the
    // time portion to be added in exact time.
    var dt = GetPlainDateTimeFor(timeZone, instant, calendar);
    var datePart = CreateTemporalDate(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), calendar);
    var dateDuration = new TemporalDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    var addedDate = CalendarDateAdd(calendar, datePart, dateDuration, options);
    var dtIntermediate = CreateTemporalDateTime(GetSlot(addedDate, ISO_YEAR), GetSlot(addedDate, ISO_MONTH), GetSlot(addedDate, ISO_DAY), GetSlot(dt, ISO_HOUR), GetSlot(dt, ISO_MINUTE), GetSlot(dt, ISO_SECOND), GetSlot(dt, ISO_MILLISECOND), GetSlot(dt, ISO_MICROSECOND), GetSlot(dt, ISO_NANOSECOND), calendar);

    // Note that 'compatible' is used below because this disambiguation behavior
    // is required by RFC 5545.
    var instantIntermediate = GetInstantFor(timeZone, dtIntermediate, 'compatible');
    return AddInstant(GetSlot(instantIntermediate, EPOCHNANOSECONDS), h, min, s, ms, µs, ns);
  }
  function AddDurationToOrSubtractDurationFromDuration(operation, duration, other, options) {
    var sign = operation === 'subtract' ? -1 : 1;
    var _ToTemporalDurationRe2 = ToTemporalDurationRecord(other),
      years = _ToTemporalDurationRe2.years,
      months = _ToTemporalDurationRe2.months,
      weeks = _ToTemporalDurationRe2.weeks,
      days = _ToTemporalDurationRe2.days,
      hours = _ToTemporalDurationRe2.hours,
      minutes = _ToTemporalDurationRe2.minutes,
      seconds = _ToTemporalDurationRe2.seconds,
      milliseconds = _ToTemporalDurationRe2.milliseconds,
      microseconds = _ToTemporalDurationRe2.microseconds,
      nanoseconds = _ToTemporalDurationRe2.nanoseconds;
    options = GetOptionsObject(options);
    var relativeTo = ToRelativeTemporalObject(options);
    var _AddDuration = AddDuration(GetSlot(duration, YEARS), GetSlot(duration, MONTHS), GetSlot(duration, WEEKS), GetSlot(duration, DAYS), GetSlot(duration, HOURS), GetSlot(duration, MINUTES), GetSlot(duration, SECONDS), GetSlot(duration, MILLISECONDS), GetSlot(duration, MICROSECONDS), GetSlot(duration, NANOSECONDS), sign * years, sign * months, sign * weeks, sign * days, sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds, relativeTo);
    years = _AddDuration.years;
    months = _AddDuration.months;
    weeks = _AddDuration.weeks;
    days = _AddDuration.days;
    hours = _AddDuration.hours;
    minutes = _AddDuration.minutes;
    seconds = _AddDuration.seconds;
    milliseconds = _AddDuration.milliseconds;
    microseconds = _AddDuration.microseconds;
    nanoseconds = _AddDuration.nanoseconds;
    var Duration = GetIntrinsic('%Temporal.Duration%');
    return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
  }
  function AddDurationToOrSubtractDurationFromInstant(operation, instant, durationLike) {
    var sign = operation === 'subtract' ? -1 : 1;
    var _ToLimitedTemporalDur = ToLimitedTemporalDuration(durationLike, ['years', 'months', 'weeks', 'days']),
      hours = _ToLimitedTemporalDur.hours,
      minutes = _ToLimitedTemporalDur.minutes,
      seconds = _ToLimitedTemporalDur.seconds,
      milliseconds = _ToLimitedTemporalDur.milliseconds,
      microseconds = _ToLimitedTemporalDur.microseconds,
      nanoseconds = _ToLimitedTemporalDur.nanoseconds;
    var ns = AddInstant(GetSlot(instant, EPOCHNANOSECONDS), sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds);
    var Instant = GetIntrinsic('%Temporal.Instant%');
    return new Instant(ns);
  }
  function AddDurationToOrSubtractDurationFromPlainDateTime(operation, dateTime, durationLike, options) {
    var sign = operation === 'subtract' ? -1 : 1;
    var _ToTemporalDurationRe3 = ToTemporalDurationRecord(durationLike),
      years = _ToTemporalDurationRe3.years,
      months = _ToTemporalDurationRe3.months,
      weeks = _ToTemporalDurationRe3.weeks,
      days = _ToTemporalDurationRe3.days,
      hours = _ToTemporalDurationRe3.hours,
      minutes = _ToTemporalDurationRe3.minutes,
      seconds = _ToTemporalDurationRe3.seconds,
      milliseconds = _ToTemporalDurationRe3.milliseconds,
      microseconds = _ToTemporalDurationRe3.microseconds,
      nanoseconds = _ToTemporalDurationRe3.nanoseconds;
    options = GetOptionsObject(options);
    var calendar = GetSlot(dateTime, CALENDAR);
    var _AddDateTime = AddDateTime(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND), calendar, sign * years, sign * months, sign * weeks, sign * days, sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds, options),
      year = _AddDateTime.year,
      month = _AddDateTime.month,
      day = _AddDateTime.day,
      hour = _AddDateTime.hour,
      minute = _AddDateTime.minute,
      second = _AddDateTime.second,
      millisecond = _AddDateTime.millisecond,
      microsecond = _AddDateTime.microsecond,
      nanosecond = _AddDateTime.nanosecond;
    return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
  }
  function AddDurationToOrSubtractDurationFromPlainTime(operation, temporalTime, durationLike) {
    var sign = operation === 'subtract' ? -1 : 1;
    var _ToTemporalDurationRe4 = ToTemporalDurationRecord(durationLike),
      hours = _ToTemporalDurationRe4.hours,
      minutes = _ToTemporalDurationRe4.minutes,
      seconds = _ToTemporalDurationRe4.seconds,
      milliseconds = _ToTemporalDurationRe4.milliseconds,
      microseconds = _ToTemporalDurationRe4.microseconds,
      nanoseconds = _ToTemporalDurationRe4.nanoseconds;
    var _AddTime2 = AddTime(GetSlot(temporalTime, ISO_HOUR), GetSlot(temporalTime, ISO_MINUTE), GetSlot(temporalTime, ISO_SECOND), GetSlot(temporalTime, ISO_MILLISECOND), GetSlot(temporalTime, ISO_MICROSECOND), GetSlot(temporalTime, ISO_NANOSECOND), sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds),
      hour = _AddTime2.hour,
      minute = _AddTime2.minute,
      second = _AddTime2.second,
      millisecond = _AddTime2.millisecond,
      microsecond = _AddTime2.microsecond,
      nanosecond = _AddTime2.nanosecond;
    var _RegulateTime3 = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, 'reject');
    hour = _RegulateTime3.hour;
    minute = _RegulateTime3.minute;
    second = _RegulateTime3.second;
    millisecond = _RegulateTime3.millisecond;
    microsecond = _RegulateTime3.microsecond;
    nanosecond = _RegulateTime3.nanosecond;
    var PlainTime = GetIntrinsic('%Temporal.PlainTime%');
    return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
  }
  function AddDurationToOrSubtractDurationFromPlainYearMonth(operation, yearMonth, durationLike, options) {
    var duration = ToTemporalDurationRecord(durationLike);
    if (operation === 'subtract') {
      duration = {
        years: -duration.years,
        months: -duration.months,
        weeks: -duration.weeks,
        days: -duration.days,
        hours: -duration.hours,
        minutes: -duration.minutes,
        seconds: -duration.seconds,
        milliseconds: -duration.milliseconds,
        microseconds: -duration.microseconds,
        nanoseconds: -duration.nanoseconds
      };
    }
    var _duration = duration,
      years = _duration.years,
      months = _duration.months,
      weeks = _duration.weeks,
      days = _duration.days,
      hours = _duration.hours,
      minutes = _duration.minutes,
      seconds = _duration.seconds,
      milliseconds = _duration.milliseconds,
      microseconds = _duration.microseconds,
      nanoseconds = _duration.nanoseconds;
    var _BalanceDuration8 = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'day');
    days = _BalanceDuration8.days;
    options = GetOptionsObject(options);
    var calendar = GetSlot(yearMonth, CALENDAR);
    var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
    var fields = PrepareTemporalFields(yearMonth, fieldNames, []);
    var fieldsCopy = CopyOptions(fields);
    fields.day = 1;
    var startDate = CalendarDateFromFields(calendar, fields);
    var sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    var dateAdd = GetMethod$2(calendar, 'dateAdd');
    var Duration = GetIntrinsic('%Temporal.Duration%');
    if (sign < 0) {
      var oneMonthDuration = new Duration(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
      var nextMonth = CalendarDateAdd(calendar, startDate, oneMonthDuration, undefined, dateAdd);
      var minusDayDuration = new Duration(0, 0, 0, -1, 0, 0, 0, 0, 0, 0);
      var endOfMonth = CalendarDateAdd(calendar, nextMonth, minusDayDuration, undefined, dateAdd);
      fieldsCopy.day = CalendarDay(calendar, endOfMonth);
      startDate = CalendarDateFromFields(calendar, fieldsCopy);
    }
    var durationToAdd = new Duration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    var optionsCopy = CopyOptions(options);
    var addedDate = CalendarDateAdd(calendar, startDate, durationToAdd, options, dateAdd);
    var addedDateFields = PrepareTemporalFields(addedDate, fieldNames, []);
    return CalendarYearMonthFromFields(calendar, addedDateFields, optionsCopy);
  }
  function AddDurationToOrSubtractDurationFromZonedDateTime(operation, zonedDateTime, durationLike, options) {
    var sign = operation === 'subtract' ? -1 : 1;
    var _ToTemporalDurationRe5 = ToTemporalDurationRecord(durationLike),
      years = _ToTemporalDurationRe5.years,
      months = _ToTemporalDurationRe5.months,
      weeks = _ToTemporalDurationRe5.weeks,
      days = _ToTemporalDurationRe5.days,
      hours = _ToTemporalDurationRe5.hours,
      minutes = _ToTemporalDurationRe5.minutes,
      seconds = _ToTemporalDurationRe5.seconds,
      milliseconds = _ToTemporalDurationRe5.milliseconds,
      microseconds = _ToTemporalDurationRe5.microseconds,
      nanoseconds = _ToTemporalDurationRe5.nanoseconds;
    options = GetOptionsObject(options);
    var timeZone = GetSlot(zonedDateTime, TIME_ZONE);
    var calendar = GetSlot(zonedDateTime, CALENDAR);
    var epochNanoseconds = AddZonedDateTime(GetSlot(zonedDateTime, INSTANT), timeZone, calendar, sign * years, sign * months, sign * weeks, sign * days, sign * hours, sign * minutes, sign * seconds, sign * milliseconds, sign * microseconds, sign * nanoseconds, options);
    return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
  }
  function RoundNumberToIncrement(quantity, increment, mode) {
    if (increment === 1) return quantity;
    var _quantity$divmod = quantity.divmod(increment),
      quotient = _quantity$divmod.quotient,
      remainder = _quantity$divmod.remainder;
    if (remainder.equals(bigInt.zero)) return quantity;
    var sign = remainder.lt(bigInt.zero) ? -1 : 1;
    var tiebreaker = remainder.multiply(2).abs();
    var tie = tiebreaker.equals(increment);
    var expandIsNearer = tiebreaker.gt(increment);
    switch (mode) {
      case 'ceil':
        if (sign > 0) quotient = quotient.add(sign);
        break;
      case 'floor':
        if (sign < 0) quotient = quotient.add(sign);
        break;
      case 'expand':
        // always expand if there is a remainder
        quotient = quotient.add(sign);
        break;
      case 'trunc':
        // no change needed, because divmod is a truncation
        break;
      case 'halfCeil':
        if (expandIsNearer || tie && sign > 0) quotient = quotient.add(sign);
        break;
      case 'halfFloor':
        if (expandIsNearer || tie && sign < 0) quotient = quotient.add(sign);
        break;
      case 'halfExpand':
        // "half up away from zero"
        if (expandIsNearer || tie) quotient = quotient.add(sign);
        break;
      case 'halfTrunc':
        if (expandIsNearer) quotient = quotient.add(sign);
        break;
      case 'halfEven':
        {
          if (expandIsNearer || tie && quotient.isOdd()) quotient = quotient.add(sign);
          break;
        }
    }
    return quotient.multiply(increment);
  }
  function RoundInstant(epochNs, increment, unit, roundingMode) {
    var _NonNegativeBigIntDiv7 = NonNegativeBigIntDivmod(epochNs, 86400e9),
      remainder = _NonNegativeBigIntDiv7.remainder;
    var wholeDays = epochNs.minus(remainder);
    var roundedRemainder = RoundNumberToIncrement(remainder, nsPerTimeUnit[unit] * increment, roundingMode);
    return wholeDays.plus(roundedRemainder);
  }
  function RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode) {
    var dayLengthNs = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 86400e9;
    var deltaDays = 0;
    var _RoundTime = RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode, dayLengthNs);
    deltaDays = _RoundTime.deltaDays;
    hour = _RoundTime.hour;
    minute = _RoundTime.minute;
    second = _RoundTime.second;
    millisecond = _RoundTime.millisecond;
    microsecond = _RoundTime.microsecond;
    nanosecond = _RoundTime.nanosecond;
    var _BalanceISODate4 = BalanceISODate(year, month, day + deltaDays);
    year = _BalanceISODate4.year;
    month = _BalanceISODate4.month;
    day = _BalanceISODate4.day;
    return {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      microsecond: microsecond,
      nanosecond: nanosecond
    };
  }
  function RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode) {
    var dayLengthNs = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 86400e9;
    var quantity = bigInt.zero;
    switch (unit) {
      case 'day':
      case 'hour':
        quantity = bigInt(hour);
      // fall through
      case 'minute':
        quantity = quantity.multiply(60).plus(minute);
      // fall through
      case 'second':
        quantity = quantity.multiply(60).plus(second);
      // fall through
      case 'millisecond':
        quantity = quantity.multiply(1000).plus(millisecond);
      // fall through
      case 'microsecond':
        quantity = quantity.multiply(1000).plus(microsecond);
      // fall through
      case 'nanosecond':
        quantity = quantity.multiply(1000).plus(nanosecond);
    }
    var nsPerUnit = unit === 'day' ? dayLengthNs : nsPerTimeUnit[unit];
    var rounded = RoundNumberToIncrement(quantity, nsPerUnit * increment, roundingMode);
    var result = rounded.divide(nsPerUnit).toJSNumber();
    switch (unit) {
      case 'day':
        return {
          deltaDays: result,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
          microsecond: 0,
          nanosecond: 0
        };
      case 'hour':
        return BalanceTime(result, 0, 0, 0, 0, 0);
      case 'minute':
        return BalanceTime(hour, result, 0, 0, 0, 0);
      case 'second':
        return BalanceTime(hour, minute, result, 0, 0, 0);
      case 'millisecond':
        return BalanceTime(hour, minute, second, result, 0, 0);
      case 'microsecond':
        return BalanceTime(hour, minute, second, millisecond, result, 0);
      case 'nanosecond':
        return BalanceTime(hour, minute, second, millisecond, microsecond, result);
    }
  }
  function DaysUntil(earlier, later) {
    return DifferenceISODate(GetSlot(earlier, ISO_YEAR), GetSlot(earlier, ISO_MONTH), GetSlot(earlier, ISO_DAY), GetSlot(later, ISO_YEAR), GetSlot(later, ISO_MONTH), GetSlot(later, ISO_DAY), 'day').days;
  }
  function MoveRelativeDate(calendar, relativeTo, duration, dateAdd) {
    var later = CalendarDateAdd(calendar, relativeTo, duration, undefined, dateAdd);
    var days = DaysUntil(relativeTo, later);
    return {
      relativeTo: later,
      days: days
    };
  }
  function MoveRelativeZonedDateTime(relativeTo, years, months, weeks, days) {
    var timeZone = GetSlot(relativeTo, TIME_ZONE);
    var calendar = GetSlot(relativeTo, CALENDAR);
    var intermediateNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, calendar, years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    return CreateTemporalZonedDateTime(intermediateNs, timeZone, calendar);
  }
  function AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, increment, unit, roundingMode, relativeTo) {
    if (!IsTemporalZonedDateTime(relativeTo) || unit === 'year' || unit === 'month' || unit === 'week' || unit === 'day' || unit === 'nanosecond' && increment === 1) {
      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds
      };
    }

    // There's one more round of rounding possible: if relativeTo is a
    // ZonedDateTime, the time units could have rounded up into enough hours
    // to exceed the day length. If this happens, grow the date part by a
    // single day and re-run exact time rounding on the smaller remainder. DO
    // NOT RECURSE, because once the extra hours are sucked up into the date
    // duration, there's no way for another full day to come from the next
    // round of rounding. And if it were possible (e.g. contrived calendar
    // with 30-minute-long "days") then it'd risk an infinite loop.
    var timeRemainderNs = TotalDurationNanoseconds(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 0);
    var direction = MathSign(timeRemainderNs.toJSNumber());
    var timeZone = GetSlot(relativeTo, TIME_ZONE);
    var calendar = GetSlot(relativeTo, CALENDAR);
    var dayStart = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, calendar, years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    var dayEnd = AddZonedDateTime(new TemporalInstant(dayStart), timeZone, calendar, 0, 0, 0, direction, 0, 0, 0, 0, 0, 0);
    var dayLengthNs = dayEnd.subtract(dayStart);
    if (timeRemainderNs.subtract(dayLengthNs).multiply(direction).geq(0)) {
      var _AddDuration2 = AddDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, 0, 0, 0, direction, 0, 0, 0, 0, 0, 0, relativeTo);
      years = _AddDuration2.years;
      months = _AddDuration2.months;
      weeks = _AddDuration2.weeks;
      days = _AddDuration2.days;
      timeRemainderNs = RoundInstant(timeRemainderNs.subtract(dayLengthNs), increment, unit, roundingMode);
      var _BalanceDuration9 = BalanceDuration(0, 0, 0, 0, 0, 0, timeRemainderNs.toJSNumber(), 'hour');
      hours = _BalanceDuration9.hours;
      minutes = _BalanceDuration9.minutes;
      seconds = _BalanceDuration9.seconds;
      milliseconds = _BalanceDuration9.milliseconds;
      microseconds = _BalanceDuration9.microseconds;
      nanoseconds = _BalanceDuration9.nanoseconds;
    }
    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    };
  }
  function RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, increment, unit, roundingMode) {
    var relativeTo = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : undefined;
    var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    var calendar, zdtRelative;
    if (relativeTo) {
      if (IsTemporalZonedDateTime(relativeTo)) {
        zdtRelative = relativeTo;
        relativeTo = ToTemporalDate(relativeTo);
      } else if (!IsTemporalDate(relativeTo)) {
        throw new TypeError('starting point must be PlainDate or ZonedDateTime');
      }
      calendar = GetSlot(relativeTo, CALENDAR);
    }

    // First convert time units up to days, if rounding to days or higher units.
    // If rounding relative to a ZonedDateTime, then some days may not be 24h.
    var dayLengthNs;
    if (unit === 'year' || unit === 'month' || unit === 'week' || unit === 'day') {
      nanoseconds = TotalDurationNanoseconds(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 0);
      var intermediate;
      if (zdtRelative) {
        intermediate = MoveRelativeZonedDateTime(zdtRelative, years, months, weeks, days);
      }
      var deltaDays;
      var _NanosecondsToDays3 = NanosecondsToDays(nanoseconds, intermediate);
      deltaDays = _NanosecondsToDays3.days;
      nanoseconds = _NanosecondsToDays3.nanoseconds;
      dayLengthNs = _NanosecondsToDays3.dayLengthNs;
      days += deltaDays;
      hours = minutes = seconds = milliseconds = microseconds = 0;
    }
    var total;
    switch (unit) {
      case 'year':
        {
          if (!calendar) throw new RangeError('A starting point is required for years rounding');

          // convert months and weeks to days by calculating difference(
          // relativeTo + years, relativeTo + { years, months, weeks })
          var yearsDuration = new TemporalDuration(years);
          var dateAdd = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
          var yearsLater = CalendarDateAdd(calendar, relativeTo, yearsDuration, undefined, dateAdd);
          var yearsMonthsWeeks = new TemporalDuration(years, months, weeks);
          var yearsMonthsWeeksLater = CalendarDateAdd(calendar, relativeTo, yearsMonthsWeeks, undefined, dateAdd);
          var monthsWeeksInDays = DaysUntil(yearsLater, yearsMonthsWeeksLater);
          relativeTo = yearsLater;
          days += monthsWeeksInDays;
          var wholeDays = new TemporalDuration(0, 0, 0, days);
          var wholeDaysLater = CalendarDateAdd(calendar, relativeTo, wholeDays, undefined, dateAdd);
          var untilOptions = ObjectCreate$8(null);
          untilOptions.largestUnit = 'year';
          var yearsPassed = GetSlot(CalendarDateUntil(calendar, relativeTo, wholeDaysLater, untilOptions), YEARS);
          years += yearsPassed;
          var yearsPassedDuration = new TemporalDuration(yearsPassed);
          var daysPassed;
          var _MoveRelativeDate14 = MoveRelativeDate(calendar, relativeTo, yearsPassedDuration, dateAdd);
          relativeTo = _MoveRelativeDate14.relativeTo;
          daysPassed = _MoveRelativeDate14.days;
          days -= daysPassed;
          var oneYear = new TemporalDuration(days < 0 ? -1 : 1);
          var _MoveRelativeDate15 = MoveRelativeDate(calendar, relativeTo, oneYear, dateAdd),
            oneYearDays = _MoveRelativeDate15.days;

          // Note that `nanoseconds` below (here and in similar code for months,
          // weeks, and days further below) isn't actually nanoseconds for the
          // full date range.  Instead, it's a BigInt representation of total
          // days multiplied by the number of nanoseconds in the last day of
          // the duration. This lets us do days-or-larger rounding using BigInt
          // math which reduces precision loss.
          oneYearDays = MathAbs$1(oneYearDays);
          var divisor = bigInt(oneYearDays).multiply(dayLengthNs);
          nanoseconds = divisor.multiply(years).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);
          var rounded = RoundNumberToIncrement(nanoseconds, divisor.multiply(increment).toJSNumber(), roundingMode);
          var _nanoseconds$divmod7 = nanoseconds.divmod(divisor),
            quotient = _nanoseconds$divmod7.quotient,
            remainder = _nanoseconds$divmod7.remainder;
          total = quotient.toJSNumber() + remainder.toJSNumber() / divisor;
          years = rounded.divide(divisor).toJSNumber();
          nanoseconds = months = weeks = days = 0;
          break;
        }
      case 'month':
        {
          if (!calendar) throw new RangeError('A starting point is required for months rounding');

          // convert weeks to days by calculating difference(relativeTo +
          //   { years, months }, relativeTo + { years, months, weeks })
          var yearsMonths = new TemporalDuration(years, months);
          var _dateAdd5 = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
          var yearsMonthsLater = CalendarDateAdd(calendar, relativeTo, yearsMonths, undefined, _dateAdd5);
          var _yearsMonthsWeeks = new TemporalDuration(years, months, weeks);
          var _yearsMonthsWeeksLater = CalendarDateAdd(calendar, relativeTo, _yearsMonthsWeeks, undefined, _dateAdd5);
          var weeksInDays = DaysUntil(yearsMonthsLater, _yearsMonthsWeeksLater);
          relativeTo = yearsMonthsLater;
          days += weeksInDays;

          // Months may be different lengths of days depending on the calendar,
          // convert days to months in a loop as described above under 'years'.
          var sign = MathSign(days);
          var oneMonth = new TemporalDuration(0, days < 0 ? -1 : 1);
          var oneMonthDays;
          var _MoveRelativeDate16 = MoveRelativeDate(calendar, relativeTo, oneMonth, _dateAdd5);
          relativeTo = _MoveRelativeDate16.relativeTo;
          oneMonthDays = _MoveRelativeDate16.days;
          while (MathAbs$1(days) >= MathAbs$1(oneMonthDays)) {
            months += sign;
            days -= oneMonthDays;
            var _MoveRelativeDate17 = MoveRelativeDate(calendar, relativeTo, oneMonth, _dateAdd5);
            relativeTo = _MoveRelativeDate17.relativeTo;
            oneMonthDays = _MoveRelativeDate17.days;
          }
          oneMonthDays = MathAbs$1(oneMonthDays);
          var _divisor = bigInt(oneMonthDays).multiply(dayLengthNs);
          nanoseconds = _divisor.multiply(months).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);
          var _rounded = RoundNumberToIncrement(nanoseconds, _divisor.multiply(increment), roundingMode);
          var _nanoseconds$divmod8 = nanoseconds.divmod(_divisor),
            _quotient = _nanoseconds$divmod8.quotient,
            _remainder = _nanoseconds$divmod8.remainder;
          total = _quotient.toJSNumber() + _remainder.toJSNumber() / _divisor;
          months = _rounded.divide(_divisor).toJSNumber();
          nanoseconds = weeks = days = 0;
          break;
        }
      case 'week':
        {
          if (!calendar) throw new RangeError('A starting point is required for weeks rounding');
          // Weeks may be different lengths of days depending on the calendar,
          // convert days to weeks in a loop as described above under 'years'.
          var _sign2 = MathSign(days);
          var oneWeek = new TemporalDuration(0, 0, days < 0 ? -1 : 1);
          var _dateAdd6 = typeof calendar !== 'string' ? GetMethod$2(calendar, 'dateAdd') : undefined;
          var oneWeekDays;
          var _MoveRelativeDate18 = MoveRelativeDate(calendar, relativeTo, oneWeek, _dateAdd6);
          relativeTo = _MoveRelativeDate18.relativeTo;
          oneWeekDays = _MoveRelativeDate18.days;
          while (MathAbs$1(days) >= MathAbs$1(oneWeekDays)) {
            weeks += _sign2;
            days -= oneWeekDays;
            var _MoveRelativeDate19 = MoveRelativeDate(calendar, relativeTo, oneWeek, _dateAdd6);
            relativeTo = _MoveRelativeDate19.relativeTo;
            oneWeekDays = _MoveRelativeDate19.days;
          }
          oneWeekDays = MathAbs$1(oneWeekDays);
          var _divisor2 = bigInt(oneWeekDays).multiply(dayLengthNs);
          nanoseconds = _divisor2.multiply(weeks).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);
          var _rounded2 = RoundNumberToIncrement(nanoseconds, _divisor2.multiply(increment), roundingMode);
          var _nanoseconds$divmod9 = nanoseconds.divmod(_divisor2),
            _quotient2 = _nanoseconds$divmod9.quotient,
            _remainder2 = _nanoseconds$divmod9.remainder;
          total = _quotient2.toJSNumber() + _remainder2.toJSNumber() / _divisor2;
          weeks = _rounded2.divide(_divisor2).toJSNumber();
          nanoseconds = days = 0;
          break;
        }
      case 'day':
        {
          var _divisor3 = bigInt(dayLengthNs);
          nanoseconds = _divisor3.multiply(days).plus(nanoseconds);
          var _rounded3 = RoundNumberToIncrement(nanoseconds, _divisor3.multiply(increment), roundingMode);
          var _nanoseconds$divmod10 = nanoseconds.divmod(_divisor3),
            _quotient3 = _nanoseconds$divmod10.quotient,
            _remainder3 = _nanoseconds$divmod10.remainder;
          total = _quotient3.toJSNumber() + _remainder3.toJSNumber() / _divisor3;
          days = _rounded3.divide(_divisor3).toJSNumber();
          nanoseconds = 0;
          break;
        }
      case 'hour':
        {
          var _divisor4 = 3600e9;
          nanoseconds = bigInt(hours).multiply(3600e9).plus(bigInt(minutes).multiply(60e9)).plus(bigInt(seconds).multiply(1e9)).plus(bigInt(milliseconds).multiply(1e6)).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
          var _nanoseconds$divmod11 = nanoseconds.divmod(_divisor4),
            _quotient4 = _nanoseconds$divmod11.quotient,
            _remainder4 = _nanoseconds$divmod11.remainder;
          total = _quotient4.toJSNumber() + _remainder4.toJSNumber() / _divisor4;
          var _rounded4 = RoundNumberToIncrement(nanoseconds, _divisor4 * increment, roundingMode);
          hours = _rounded4.divide(_divisor4).toJSNumber();
          minutes = seconds = milliseconds = microseconds = nanoseconds = 0;
          break;
        }
      case 'minute':
        {
          var _divisor5 = 60e9;
          nanoseconds = bigInt(minutes).multiply(60e9).plus(bigInt(seconds).multiply(1e9)).plus(bigInt(milliseconds).multiply(1e6)).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
          var _nanoseconds$divmod12 = nanoseconds.divmod(_divisor5),
            _quotient5 = _nanoseconds$divmod12.quotient,
            _remainder5 = _nanoseconds$divmod12.remainder;
          total = _quotient5.toJSNumber() + _remainder5.toJSNumber() / _divisor5;
          var _rounded5 = RoundNumberToIncrement(nanoseconds, _divisor5 * increment, roundingMode);
          minutes = _rounded5.divide(_divisor5).toJSNumber();
          seconds = milliseconds = microseconds = nanoseconds = 0;
          break;
        }
      case 'second':
        {
          var _divisor6 = 1e9;
          nanoseconds = bigInt(seconds).multiply(1e9).plus(bigInt(milliseconds).multiply(1e6)).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
          var _nanoseconds$divmod13 = nanoseconds.divmod(_divisor6),
            _quotient6 = _nanoseconds$divmod13.quotient,
            _remainder6 = _nanoseconds$divmod13.remainder;
          total = _quotient6.toJSNumber() + _remainder6.toJSNumber() / _divisor6;
          var _rounded6 = RoundNumberToIncrement(nanoseconds, _divisor6 * increment, roundingMode);
          seconds = _rounded6.divide(_divisor6).toJSNumber();
          milliseconds = microseconds = nanoseconds = 0;
          break;
        }
      case 'millisecond':
        {
          var _divisor7 = 1e6;
          nanoseconds = bigInt(milliseconds).multiply(1e6).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
          var _nanoseconds$divmod14 = nanoseconds.divmod(_divisor7),
            _quotient7 = _nanoseconds$divmod14.quotient,
            _remainder7 = _nanoseconds$divmod14.remainder;
          total = _quotient7.toJSNumber() + _remainder7.toJSNumber() / _divisor7;
          var _rounded7 = RoundNumberToIncrement(nanoseconds, _divisor7 * increment, roundingMode);
          milliseconds = _rounded7.divide(_divisor7).toJSNumber();
          microseconds = nanoseconds = 0;
          break;
        }
      case 'microsecond':
        {
          var _divisor8 = 1e3;
          nanoseconds = bigInt(microseconds).multiply(1e3).plus(nanoseconds);
          var _nanoseconds$divmod15 = nanoseconds.divmod(_divisor8),
            _quotient8 = _nanoseconds$divmod15.quotient,
            _remainder8 = _nanoseconds$divmod15.remainder;
          total = _quotient8.toJSNumber() + _remainder8.toJSNumber() / _divisor8;
          var _rounded8 = RoundNumberToIncrement(nanoseconds, _divisor8 * increment, roundingMode);
          microseconds = _rounded8.divide(_divisor8).toJSNumber();
          nanoseconds = 0;
          break;
        }
      case 'nanosecond':
        {
          total = nanoseconds;
          nanoseconds = RoundNumberToIncrement(bigInt(nanoseconds), increment, roundingMode).toJSNumber();
          break;
        }
    }
    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds,
      total: total
    };
  }
  function CompareISODate(y1, m1, d1, y2, m2, d2) {
    if (y1 !== y2) return ComparisonResult(y1 - y2);
    if (m1 !== m2) return ComparisonResult(m1 - m2);
    if (d1 !== d2) return ComparisonResult(d1 - d2);
    return 0;
  }

  // Not abstract operations from the spec

  function NonNegativeBigIntDivmod(x, y) {
    var _x$divmod = x.divmod(y),
      quotient = _x$divmod.quotient,
      remainder = _x$divmod.remainder;
    if (remainder.lesser(0)) {
      quotient = quotient.prev();
      remainder = remainder.plus(y);
    }
    return {
      quotient: quotient,
      remainder: remainder
    };
  }
  function BigIntFloorDiv(left, right) {
    left = bigInt(left);
    right = bigInt(right);
    var _left$divmod = left.divmod(right),
      quotient = _left$divmod.quotient,
      remainder = _left$divmod.remainder;
    if (!remainder.isZero() && !left.isNegative() != !right.isNegative()) {
      return quotient.prev();
    }
    return quotient;
  }
  function BigIntIfAvailable(wrapper) {
    return typeof BigInt === 'undefined' ? wrapper : wrapper.value;
  }
  function ToBigInt(arg) {
    if (bigInt.isInstance(arg)) {
      return arg;
    }
    var prim = ToPrimitive$2(arg, Number);
    switch (_typeof(prim)) {
      case 'undefined':
      case 'object':
      case 'number':
      case 'symbol':
        throw new TypeError("cannot convert ".concat(_typeof(arg), " to bigint"));
      case 'string':
        if (!prim.match(/^\s*(?:[+-]?\d+\s*)?$/)) {
          throw new SyntaxError('invalid BigInt syntax');
        }
      // eslint: no-fallthrough: false
      case 'bigint':
        try {
          return bigInt(prim);
        } catch (e) {
          if (e instanceof Error && e.message.startsWith('Invalid integer')) throw new SyntaxError(e.message);
          throw e;
        }
      case 'boolean':
        if (prim) {
          return bigInt(1);
        } else {
          return bigInt.zero;
        }
    }
  }

  // Note: This method returns values with bogus nanoseconds based on the previous iteration's
  // milliseconds. That way there is a guarantee that the full nanoseconds are always going to be
  // increasing at least and that the microsecond and nanosecond fields are likely to be non-zero.

  var SystemUTCEpochNanoSeconds = function () {
    var ns = Date.now() % 1e6;
    return function () {
      var ms = Date.now();
      var result = bigInt(ms).multiply(1e6).plus(ns);
      ns = ms % 1e6;
      return bigInt.min(NS_MAX, bigInt.max(NS_MIN, result));
    };
  }();
  function DefaultTimeZone() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  function ComparisonResult(value) {
    return value < 0 ? -1 : value > 0 ? 1 : value;
  }
  function GetOptionsObject(options) {
    if (options === undefined) return ObjectCreate$8(null);
    if (Type$6(options) === 'Object') return options;
    throw new TypeError("Options parameter must be an object, not ".concat(options === null ? 'null' : "a ".concat(_typeof(options))));
  }
  function CopyOptions(options) {
    var optionsCopy = ObjectCreate$8(null);
    CopyDataProperties(optionsCopy, GetOptionsObject(options), []);
    return optionsCopy;
  }
  function GetOption(options, property, allowedValues, fallback) {
    var value = options[property];
    if (value !== undefined) {
      value = ToString$1(value);
      if (!allowedValues.includes(value)) {
        throw new RangeError("".concat(property, " must be one of ").concat(allowedValues.join(', '), ", not ").concat(value));
      }
      return value;
    }
    return fallback;
  }
  function IsBuiltinCalendar(id) {
    return Call$1(ArrayIncludes$1, BUILTIN_CALENDAR_IDS, [ASCIILowercase(id)]);
  }
  function ASCIILowercase(str) {
    // The spec defines this operation distinct from String.prototype.lowercase,
    // so we'll follow the spec here. Note that nasty security issues that can
    // happen for some use cases if you're comparing case-modified non-ASCII
    // values. For example, Turkish's "I" character was the source of a security
    // issue involving "file://" URLs. See
    // https://haacked.com/archive/2012/07/05/turkish-i-problem-and-why-you-should-care.aspx/.
    return Call$1(StringPrototypeReplace, str, [/[A-Z]/g, function (l) {
      var code = Call$1(StringPrototypeCharCodeAt, l, [0]);
      return StringFromCharCode(code + 0x20);
    }]);
  }
  var OFFSET = new RegExp("^".concat(offset.source, "$"));
  function bisect(getState, left, right) {
    var lstate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getState(left);
    var rstate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : getState(right);
    left = bigInt(left);
    right = bigInt(right);
    while (right.minus(left).greater(1)) {
      var middle = left.plus(right).divide(2);
      var mstate = getState(middle);
      if (mstate === lstate) {
        left = middle;
        lstate = mstate;
      } else if (mstate === rstate) {
        right = middle;
        rstate = mstate;
      } else {
        throw new Error("invalid state in bisection ".concat(lstate, " - ").concat(mstate, " - ").concat(rstate));
      }
    }
    return right;
  }
  var nsPerTimeUnit = {
    hour: 3600e9,
    minute: 60e9,
    second: 1e9,
    millisecond: 1e6,
    microsecond: 1e3,
    nanosecond: 1
  };

  var DATE = Symbol('date');
  var YM = Symbol('ym');
  var MD = Symbol('md');
  var TIME = Symbol('time');
  var DATETIME = Symbol('datetime');
  var INST = Symbol('instant');
  var ORIGINAL = Symbol('original');
  var TZ_RESOLVED = Symbol('timezone');
  var CAL_ID = Symbol('calendar-id');
  var LOCALE = Symbol('locale');
  var OPTIONS = Symbol('options');
  var descriptor$1 = function descriptor(value) {
    return {
      value: value,
      enumerable: true,
      writable: false,
      configurable: true
    };
  };
  var IntlDateTimeFormat$1 = globalThis.Intl.DateTimeFormat;
  var ObjectAssign$2 = Object.assign;

  // Construction of built-in Intl.DateTimeFormat objects is sloooooow,
  // so we'll only create those instances when we need them.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=6528
  function getPropLazy(obj, prop) {
    var val = obj[prop];
    if (typeof val === 'function') {
      val = new IntlDateTimeFormat$1(obj[LOCALE], val(obj[OPTIONS]));
      obj[prop] = val;
    }
    return val;
  }
  function DateTimeFormat() {
    var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    if (!(this instanceof DateTimeFormat)) return new DateTimeFormat(locale, options);
    var hasOptions = typeof options !== 'undefined';
    options = hasOptions ? ObjectAssign$2({}, options) : {};
    var original = new IntlDateTimeFormat$1(locale, options);
    var ro = original.resolvedOptions();

    // DateTimeFormat instances are very expensive to create. Therefore, they will
    // be lazily created only when needed, using the locale and options provided.
    // But it's possible for callers to mutate those inputs before lazy creation
    // happens. For this reason, we clone the inputs instead of caching the
    // original objects. To avoid the complexity of deep cloning any inputs that
    // are themselves objects (e.g. the locales array, or options property values
    // that will be coerced to strings), we rely on `resolvedOptions()` to do the
    // coercion and cloning for us. Unfortunately, we can't just use the resolved
    // options as-is because our options-amending logic adds additional fields if
    // the user doesn't supply any unit fields like year, month, day, hour, etc.
    // Therefore, we limit the properties in the clone to properties that were
    // present in the original input.
    if (hasOptions) {
      var clonedResolved = ObjectAssign$2({}, ro);
      for (var prop in clonedResolved) {
        if (!HasOwnProperty$1(options, prop)) delete clonedResolved[prop];
      }
      this[OPTIONS] = clonedResolved;
    } else {
      this[OPTIONS] = options;
    }
    this[LOCALE] = ro.locale;
    this[ORIGINAL] = original;
    this[TZ_RESOLVED] = ro.timeZone;
    this[CAL_ID] = ro.calendar;
    this[DATE] = dateAmend;
    this[YM] = yearMonthAmend;
    this[MD] = monthDayAmend;
    this[TIME] = timeAmend;
    this[DATETIME] = datetimeAmend;
    this[INST] = instantAmend;
  }
  DateTimeFormat.supportedLocalesOf = function () {
    return IntlDateTimeFormat$1.supportedLocalesOf.apply(IntlDateTimeFormat$1, arguments);
  };
  var properties = {
    resolvedOptions: descriptor$1(resolvedOptions),
    format: descriptor$1(format),
    formatRange: descriptor$1(formatRange)
  };
  if ('formatToParts' in IntlDateTimeFormat$1.prototype) {
    properties.formatToParts = descriptor$1(formatToParts);
  }
  if ('formatRangeToParts' in IntlDateTimeFormat$1.prototype) {
    properties.formatRangeToParts = descriptor$1(formatRangeToParts);
  }
  DateTimeFormat.prototype = Object.create(IntlDateTimeFormat$1.prototype, properties);
  Object.defineProperty(DateTimeFormat, 'prototype', {
    writable: false,
    enumerable: false,
    configurable: false
  });
  function resolvedOptions() {
    return this[ORIGINAL].resolvedOptions();
  }
  function format(datetime) {
    var _this$ORIGINAL;
    var _extractOverrides = extractOverrides(datetime, this),
      instant = _extractOverrides.instant,
      formatter = _extractOverrides.formatter;
    if (instant && formatter) {
      return formatter.format(instant.epochMilliseconds);
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    return (_this$ORIGINAL = this[ORIGINAL]).format.apply(_this$ORIGINAL, [datetime].concat(rest));
  }
  function formatToParts(datetime) {
    var _this$ORIGINAL2;
    var _extractOverrides2 = extractOverrides(datetime, this),
      instant = _extractOverrides2.instant,
      formatter = _extractOverrides2.formatter;
    if (instant && formatter) {
      return formatter.formatToParts(instant.epochMilliseconds);
    }
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    return (_this$ORIGINAL2 = this[ORIGINAL]).formatToParts.apply(_this$ORIGINAL2, [datetime].concat(rest));
  }
  function formatRange(a, b) {
    if (isTemporalObject(a) || isTemporalObject(b)) {
      if (!sameTemporalType(a, b)) {
        throw new TypeError('Intl.DateTimeFormat.formatRange accepts two values of the same type');
      }
      var _extractOverrides3 = extractOverrides(a, this),
        aa = _extractOverrides3.instant,
        aformatter = _extractOverrides3.formatter;
      var _extractOverrides4 = extractOverrides(b, this),
        bb = _extractOverrides4.instant,
        bformatter = _extractOverrides4.formatter;
      if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
        return aformatter.formatRange(aa.epochMilliseconds, bb.epochMilliseconds);
      }
    }
    return this[ORIGINAL].formatRange(a, b);
  }
  function formatRangeToParts(a, b) {
    if (isTemporalObject(a) || isTemporalObject(b)) {
      if (!sameTemporalType(a, b)) {
        throw new TypeError('Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type');
      }
      var _extractOverrides5 = extractOverrides(a, this),
        aa = _extractOverrides5.instant,
        aformatter = _extractOverrides5.formatter;
      var _extractOverrides6 = extractOverrides(b, this),
        bb = _extractOverrides6.instant,
        bformatter = _extractOverrides6.formatter;
      if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
        return aformatter.formatRangeToParts(aa.epochMilliseconds, bb.epochMilliseconds);
      }
    }
    return this[ORIGINAL].formatRangeToParts(a, b);
  }
  function amend() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var amended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options = ObjectAssign$2({}, options);
    for (var _i = 0, _arr = ['year', 'month', 'day', 'hour', 'minute', 'second', 'weekday', 'dayPeriod', 'timeZoneName', 'dateStyle', 'timeStyle']; _i < _arr.length; _i++) {
      var opt = _arr[_i];
      options[opt] = opt in amended ? amended[opt] : options[opt];
      if (options[opt] === false || options[opt] === undefined) delete options[opt];
    }
    return options;
  }
  function timeAmend(options) {
    options = amend(options, {
      year: false,
      month: false,
      day: false,
      weekday: false,
      timeZoneName: false,
      dateStyle: false
    });
    if (!hasTimeOptions(options)) {
      options = ObjectAssign$2({}, options, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    }
    return options;
  }
  function yearMonthAmend(options) {
    options = amend(options, {
      day: false,
      hour: false,
      minute: false,
      second: false,
      weekday: false,
      dayPeriod: false,
      timeZoneName: false,
      dateStyle: false,
      timeStyle: false
    });
    if (!('year' in options || 'month' in options)) {
      options = ObjectAssign$2(options, {
        year: 'numeric',
        month: 'numeric'
      });
    }
    return options;
  }
  function monthDayAmend(options) {
    options = amend(options, {
      year: false,
      hour: false,
      minute: false,
      second: false,
      weekday: false,
      dayPeriod: false,
      timeZoneName: false,
      dateStyle: false,
      timeStyle: false
    });
    if (!('month' in options || 'day' in options)) {
      options = ObjectAssign$2({}, options, {
        month: 'numeric',
        day: 'numeric'
      });
    }
    return options;
  }
  function dateAmend(options) {
    options = amend(options, {
      hour: false,
      minute: false,
      second: false,
      dayPeriod: false,
      timeZoneName: false,
      timeStyle: false
    });
    if (!hasDateOptions(options)) {
      options = ObjectAssign$2({}, options, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    }
    return options;
  }
  function datetimeAmend(options) {
    options = amend(options, {
      timeZoneName: false
    });
    if (!hasTimeOptions(options) && !hasDateOptions(options)) {
      options = ObjectAssign$2({}, options, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    }
    return options;
  }
  function instantAmend(options) {
    if (!hasTimeOptions(options) && !hasDateOptions(options)) {
      options = ObjectAssign$2({}, options, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    }
    return options;
  }
  function hasDateOptions(options) {
    return 'year' in options || 'month' in options || 'day' in options || 'weekday' in options || 'dateStyle' in options;
  }
  function hasTimeOptions(options) {
    return 'hour' in options || 'minute' in options || 'second' in options || 'timeStyle' in options || 'dayPeriod' in options;
  }
  function isTemporalObject(obj) {
    return IsTemporalDate(obj) || IsTemporalTime(obj) || IsTemporalDateTime(obj) || IsTemporalZonedDateTime(obj) || IsTemporalYearMonth(obj) || IsTemporalMonthDay(obj) || IsTemporalInstant(obj);
  }
  function sameTemporalType(x, y) {
    if (!isTemporalObject(x) || !isTemporalObject(y)) return false;
    if (IsTemporalTime(x) && !IsTemporalTime(y)) return false;
    if (IsTemporalDate(x) && !IsTemporalDate(y)) return false;
    if (IsTemporalDateTime(x) && !IsTemporalDateTime(y)) return false;
    if (IsTemporalZonedDateTime(x) && !IsTemporalZonedDateTime(y)) return false;
    if (IsTemporalYearMonth(x) && !IsTemporalYearMonth(y)) return false;
    if (IsTemporalMonthDay(x) && !IsTemporalMonthDay(y)) return false;
    if (IsTemporalInstant(x) && !IsTemporalInstant(y)) return false;
    return true;
  }
  function extractOverrides(temporalObj, main) {
    var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
    if (IsTemporalTime(temporalObj)) {
      var hour = GetSlot(temporalObj, ISO_HOUR);
      var minute = GetSlot(temporalObj, ISO_MINUTE);
      var second = GetSlot(temporalObj, ISO_SECOND);
      var millisecond = GetSlot(temporalObj, ISO_MILLISECOND);
      var microsecond = GetSlot(temporalObj, ISO_MICROSECOND);
      var nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);
      var datetime = new DateTime(1970, 1, 1, hour, minute, second, millisecond, microsecond, nanosecond, main[CAL_ID]);
      return {
        instant: GetInstantFor(main[TZ_RESOLVED], datetime, 'compatible'),
        formatter: getPropLazy(main, TIME)
      };
    }
    if (IsTemporalYearMonth(temporalObj)) {
      var isoYear = GetSlot(temporalObj, ISO_YEAR);
      var isoMonth = GetSlot(temporalObj, ISO_MONTH);
      var referenceISODay = GetSlot(temporalObj, ISO_DAY);
      var calendar = ToTemporalCalendarIdentifier(GetSlot(temporalObj, CALENDAR));
      if (calendar !== main[CAL_ID]) {
        throw new RangeError("cannot format PlainYearMonth with calendar ".concat(calendar, " in locale with calendar ").concat(main[CAL_ID]));
      }
      var _datetime = new DateTime(isoYear, isoMonth, referenceISODay, 12, 0, 0, 0, 0, 0, calendar);
      return {
        instant: GetInstantFor(main[TZ_RESOLVED], _datetime, 'compatible'),
        formatter: getPropLazy(main, YM)
      };
    }
    if (IsTemporalMonthDay(temporalObj)) {
      var referenceISOYear = GetSlot(temporalObj, ISO_YEAR);
      var _isoMonth = GetSlot(temporalObj, ISO_MONTH);
      var isoDay = GetSlot(temporalObj, ISO_DAY);
      var _calendar = ToTemporalCalendarIdentifier(GetSlot(temporalObj, CALENDAR));
      if (_calendar !== main[CAL_ID]) {
        throw new RangeError("cannot format PlainMonthDay with calendar ".concat(_calendar, " in locale with calendar ").concat(main[CAL_ID]));
      }
      var _datetime2 = new DateTime(referenceISOYear, _isoMonth, isoDay, 12, 0, 0, 0, 0, 0, _calendar);
      return {
        instant: GetInstantFor(main[TZ_RESOLVED], _datetime2, 'compatible'),
        formatter: getPropLazy(main, MD)
      };
    }
    if (IsTemporalDate(temporalObj)) {
      var _isoYear = GetSlot(temporalObj, ISO_YEAR);
      var _isoMonth2 = GetSlot(temporalObj, ISO_MONTH);
      var _isoDay = GetSlot(temporalObj, ISO_DAY);
      var _calendar2 = ToTemporalCalendarIdentifier(GetSlot(temporalObj, CALENDAR));
      if (_calendar2 !== 'iso8601' && _calendar2 !== main[CAL_ID]) {
        throw new RangeError("cannot format PlainDate with calendar ".concat(_calendar2, " in locale with calendar ").concat(main[CAL_ID]));
      }
      var _datetime3 = new DateTime(_isoYear, _isoMonth2, _isoDay, 12, 0, 0, 0, 0, 0, main[CAL_ID]);
      return {
        instant: GetInstantFor(main[TZ_RESOLVED], _datetime3, 'compatible'),
        formatter: getPropLazy(main, DATE)
      };
    }
    if (IsTemporalDateTime(temporalObj)) {
      var _isoYear2 = GetSlot(temporalObj, ISO_YEAR);
      var _isoMonth3 = GetSlot(temporalObj, ISO_MONTH);
      var _isoDay2 = GetSlot(temporalObj, ISO_DAY);
      var _hour = GetSlot(temporalObj, ISO_HOUR);
      var _minute = GetSlot(temporalObj, ISO_MINUTE);
      var _second = GetSlot(temporalObj, ISO_SECOND);
      var _millisecond = GetSlot(temporalObj, ISO_MILLISECOND);
      var _microsecond = GetSlot(temporalObj, ISO_MICROSECOND);
      var _nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);
      var _calendar3 = ToTemporalCalendarIdentifier(GetSlot(temporalObj, CALENDAR));
      if (_calendar3 !== 'iso8601' && _calendar3 !== main[CAL_ID]) {
        throw new RangeError("cannot format PlainDateTime with calendar ".concat(_calendar3, " in locale with calendar ").concat(main[CAL_ID]));
      }
      var _datetime4 = temporalObj;
      if (_calendar3 === 'iso8601') {
        _datetime4 = new DateTime(_isoYear2, _isoMonth3, _isoDay2, _hour, _minute, _second, _millisecond, _microsecond, _nanosecond, main[CAL_ID]);
      }
      return {
        instant: GetInstantFor(main[TZ_RESOLVED], _datetime4, 'compatible'),
        formatter: getPropLazy(main, DATETIME)
      };
    }
    if (IsTemporalZonedDateTime(temporalObj)) {
      throw new TypeError('Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.');
    }
    if (IsTemporalInstant(temporalObj)) {
      return {
        instant: temporalObj,
        formatter: getPropLazy(main, INST)
      };
    }
    return {};
  }

  var Intl$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DateTimeFormat: DateTimeFormat
  });

  var ObjectCreate$7 = Object.create;
  var Instant = /*#__PURE__*/function () {
    function Instant(epochNanoseconds) {
      _classCallCheck(this, Instant);
      // Note: if the argument is not passed, ToBigInt(undefined) will throw. This check exists only
      //       to improve the error message.
      if (arguments.length < 1) {
        throw new TypeError('missing argument: epochNanoseconds is required');
      }
      var ns = ToBigInt(epochNanoseconds);
      ValidateEpochNanoseconds(ns);
      CreateSlots(this);
      SetSlot(this, EPOCHNANOSECONDS, ns);
      {
        var repr = TemporalInstantToString(this, undefined, 'auto');
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(repr, ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }
    _createClass(Instant, [{
      key: "epochSeconds",
      get: function get() {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return BigIntFloorDiv(value, 1e9).toJSNumber();
      }
    }, {
      key: "epochMilliseconds",
      get: function get() {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var value = bigInt(GetSlot(this, EPOCHNANOSECONDS));
        return BigIntFloorDiv(value, 1e6).toJSNumber();
      }
    }, {
      key: "epochMicroseconds",
      get: function get() {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return BigIntIfAvailable(BigIntFloorDiv(value, 1e3));
      }
    }, {
      key: "epochNanoseconds",
      get: function get() {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return BigIntIfAvailable(GetSlot(this, EPOCHNANOSECONDS));
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromInstant('add', this, temporalDurationLike);
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromInstant('subtract', this, temporalDurationLike);
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalInstant('until', this, other, options);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalInstant('since', this, other, options);
      }
    }, {
      key: "round",
      value: function round(roundTo) {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        if (roundTo === undefined) throw new TypeError('options parameter is required');
        if (Type$6(roundTo) === 'String') {
          var stringParam = roundTo;
          roundTo = ObjectCreate$7(null);
          roundTo.smallestUnit = stringParam;
        } else {
          roundTo = GetOptionsObject(roundTo);
        }
        var roundingIncrement = ToTemporalRoundingIncrement(roundTo);
        var roundingMode = ToTemporalRoundingMode(roundTo, 'halfExpand');
        var smallestUnit = GetTemporalUnit(roundTo, 'smallestUnit', 'time', REQUIRED);
        var maximumIncrements = {
          hour: 24,
          minute: 1440,
          second: 86400,
          millisecond: 86400e3,
          microsecond: 86400e6,
          nanosecond: 86400e9
        };
        ValidateTemporalRoundingIncrement(roundingIncrement, maximumIncrements[smallestUnit], true);
        var ns = GetSlot(this, EPOCHNANOSECONDS);
        var roundedNs = RoundInstant(ns, roundingIncrement, smallestUnit, roundingMode);
        return new Instant(roundedNs);
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        other = ToTemporalInstant(other);
        var one = GetSlot(this, EPOCHNANOSECONDS);
        var two = GetSlot(other, EPOCHNANOSECONDS);
        return bigInt(one).equals(two);
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var digits = ToFractionalSecondDigits(options);
        var roundingMode = ToTemporalRoundingMode(options, 'trunc');
        var smallestUnit = GetTemporalUnit(options, 'smallestUnit', 'time', undefined);
        if (smallestUnit === 'hour') throw new RangeError('smallestUnit must be a time unit other than "hour"');
        var timeZone = options.timeZone;
        if (timeZone !== undefined) timeZone = ToTemporalTimeZoneSlotValue(timeZone);
        var _ES$ToSecondsStringPr = ToSecondsStringPrecisionRecord(smallestUnit, digits),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;
        var ns = GetSlot(this, EPOCHNANOSECONDS);
        var roundedNs = RoundInstant(ns, increment, unit, roundingMode);
        var roundedInstant = new Instant(roundedNs);
        return TemporalInstantToString(roundedInstant, timeZone, precision);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return TemporalInstantToString(this, undefined, 'auto');
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.Instant');
      }
    }, {
      key: "toZonedDateTime",
      value: function toZonedDateTime(item) {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        if (Type$6(item) !== 'Object') {
          throw new TypeError('invalid argument in toZonedDateTime');
        }
        var calendarLike = item.calendar;
        if (calendarLike === undefined) {
          throw new TypeError('missing calendar property in toZonedDateTime');
        }
        var calendar = ToTemporalCalendarSlotValue(calendarLike);
        var temporalTimeZoneLike = item.timeZone;
        if (temporalTimeZoneLike === undefined) {
          throw new TypeError('missing timeZone property in toZonedDateTime');
        }
        var timeZone = ToTemporalTimeZoneSlotValue(temporalTimeZoneLike);
        return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "toZonedDateTimeISO",
      value: function toZonedDateTimeISO(timeZone) {
        if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        timeZone = ToTemporalTimeZoneSlotValue(timeZone);
        return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, 'iso8601');
      }
    }], [{
      key: "fromEpochSeconds",
      value: function fromEpochSeconds(epochSeconds) {
        epochSeconds = ToNumber$2(epochSeconds);
        var epochNanoseconds = bigInt(epochSeconds).multiply(1e9);
        ValidateEpochNanoseconds(epochNanoseconds);
        return new Instant(epochNanoseconds);
      }
    }, {
      key: "fromEpochMilliseconds",
      value: function fromEpochMilliseconds(epochMilliseconds) {
        epochMilliseconds = ToNumber$2(epochMilliseconds);
        var epochNanoseconds = bigInt(epochMilliseconds).multiply(1e6);
        ValidateEpochNanoseconds(epochNanoseconds);
        return new Instant(epochNanoseconds);
      }
    }, {
      key: "fromEpochMicroseconds",
      value: function fromEpochMicroseconds(epochMicroseconds) {
        epochMicroseconds = ToBigInt(epochMicroseconds);
        var epochNanoseconds = epochMicroseconds.multiply(1e3);
        ValidateEpochNanoseconds(epochNanoseconds);
        return new Instant(epochNanoseconds);
      }
    }, {
      key: "fromEpochNanoseconds",
      value: function fromEpochNanoseconds(epochNanoseconds) {
        epochNanoseconds = ToBigInt(epochNanoseconds);
        ValidateEpochNanoseconds(epochNanoseconds);
        return new Instant(epochNanoseconds);
      }
    }, {
      key: "from",
      value: function from(item) {
        if (IsTemporalInstant(item)) {
          return new Instant(GetSlot(item, EPOCHNANOSECONDS));
        }
        return ToTemporalInstant(item);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ToTemporalInstant(one);
        two = ToTemporalInstant(two);
        one = GetSlot(one, EPOCHNANOSECONDS);
        two = GetSlot(two, EPOCHNANOSECONDS);
        if (bigInt(one).lesser(two)) return -1;
        if (bigInt(one).greater(two)) return 1;
        return 0;
      }
    }]);
    return Instant;
  }();
  MakeIntrinsicClass(Instant, 'Temporal.Instant');

  var ArrayIncludes = Array.prototype.includes;
  var ArrayPrototypePush$3 = Array.prototype.push;
  var IntlDateTimeFormat = globalThis.Intl.DateTimeFormat;
  var ArraySort = Array.prototype.sort;
  var MathAbs = Math.abs;
  var MathFloor = Math.floor;
  var ObjectAssign$1 = Object.assign;
  var ObjectCreate$6 = Object.create;
  var ObjectEntries = Object.entries;
  var OriginalSet = Set;
  var ReflectOwnKeys = Reflect.ownKeys;
  var SetPrototypeAdd$2 = Set.prototype.add;
  var SetPrototypeValues = Set.prototype.values;
  var impl = {};
  var Calendar = /*#__PURE__*/function () {
    function Calendar(id) {
      _classCallCheck(this, Calendar);
      // Note: if the argument is not passed, IsBuiltinCalendar("undefined") will fail. This check
      //       exists only to improve the error message.
      if (arguments.length < 1) {
        throw new RangeError('missing argument: id is required');
      }
      id = ToString$1(id);
      if (!IsBuiltinCalendar(id)) throw new RangeError("invalid calendar identifier ".concat(id));
      CreateSlots(this);
      SetSlot(this, CALENDAR_ID, ASCIILowercase(id));
      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(id, ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }
    _createClass(Calendar, [{
      key: "id",
      get: function get() {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR_ID);
      }
    }, {
      key: "dateFromFields",
      value: function dateFromFields(fields) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (Type$6(fields) !== 'Object') throw new TypeError('invalid fields');
        options = GetOptionsObject(options);
        var id = GetSlot(this, CALENDAR_ID);
        return impl[id].dateFromFields(fields, options, id);
      }
    }, {
      key: "yearMonthFromFields",
      value: function yearMonthFromFields(fields) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (Type$6(fields) !== 'Object') throw new TypeError('invalid fields');
        options = GetOptionsObject(options);
        var id = GetSlot(this, CALENDAR_ID);
        return impl[id].yearMonthFromFields(fields, options, id);
      }
    }, {
      key: "monthDayFromFields",
      value: function monthDayFromFields(fields) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (Type$6(fields) !== 'Object') throw new TypeError('invalid fields');
        options = GetOptionsObject(options);
        var id = GetSlot(this, CALENDAR_ID);
        return impl[id].monthDayFromFields(fields, options, id);
      }
    }, {
      key: "fields",
      value: function fields(_fields) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        var fieldsArray = [];
        var allowed = new Set(['year', 'month', 'monthCode', 'day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond']);
        var _iterator = _createForOfIteratorHelper(_fields),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var name = _step.value;
            if (Type$6(name) !== 'String') throw new TypeError('invalid fields');
            if (!allowed.has(name)) throw new RangeError("invalid field name ".concat(name));
            allowed.delete(name);
            Call$1(ArrayPrototypePush$3, fieldsArray, [name]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return impl[GetSlot(this, CALENDAR_ID)].fields(fieldsArray);
      }
    }, {
      key: "mergeFields",
      value: function mergeFields(fields, additionalFields) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        fields = ToObject$1(fields);
        var fieldsCopy = ObjectCreate$6(null);
        CopyDataProperties(fieldsCopy, fields, [], [undefined]);
        additionalFields = ToObject$1(additionalFields);
        var additionalFieldsCopy = ObjectCreate$6(null);
        CopyDataProperties(additionalFieldsCopy, additionalFields, [], [undefined]);
        var additionalKeys = ReflectOwnKeys(additionalFieldsCopy);
        var overriddenKeys = impl[GetSlot(this, CALENDAR_ID)].fieldKeysToIgnore(additionalKeys);
        var merged = ObjectCreate$6(null);
        var fieldsKeys = ReflectOwnKeys(fieldsCopy);
        var _iterator2 = _createForOfIteratorHelper(fieldsKeys),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var key = _step2.value;
            var propValue = undefined;
            if (Call$1(ArrayIncludes, overriddenKeys, [key])) propValue = additionalFieldsCopy[key];else propValue = fieldsCopy[key];
            if (propValue !== undefined) merged[key] = propValue;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        CopyDataProperties(merged, additionalFieldsCopy, []);
        return merged;
      }
    }, {
      key: "dateAdd",
      value: function dateAdd(date, duration) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ToTemporalDate(date);
        duration = ToTemporalDuration(duration);
        options = GetOptionsObject(options);
        var overflow = ToTemporalOverflow(options);
        var _ES$BalanceDuration = BalanceDuration(GetSlot(duration, DAYS), GetSlot(duration, HOURS), GetSlot(duration, MINUTES), GetSlot(duration, SECONDS), GetSlot(duration, MILLISECONDS), GetSlot(duration, MICROSECONDS), GetSlot(duration, NANOSECONDS), 'day'),
          days = _ES$BalanceDuration.days;
        var id = GetSlot(this, CALENDAR_ID);
        return impl[id].dateAdd(date, GetSlot(duration, YEARS), GetSlot(duration, MONTHS), GetSlot(duration, WEEKS), days, overflow, id);
      }
    }, {
      key: "dateUntil",
      value: function dateUntil(one, two) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        one = ToTemporalDate(one);
        two = ToTemporalDate(two);
        options = GetOptionsObject(options);
        var largestUnit = GetTemporalUnit(options, 'largestUnit', 'date', 'auto');
        if (largestUnit === 'auto') largestUnit = 'day';
        var _impl$GetSlot$dateUnt = impl[GetSlot(this, CALENDAR_ID)].dateUntil(one, two, largestUnit),
          years = _impl$GetSlot$dateUnt.years,
          months = _impl$GetSlot$dateUnt.months,
          weeks = _impl$GetSlot$dateUnt.weeks,
          days = _impl$GetSlot$dateUnt.days;
        var Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: "year",
      value: function year(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].year(date);
      }
    }, {
      key: "month",
      value: function month(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (IsTemporalMonthDay(date)) throw new TypeError('use monthCode on PlainMonthDay instead');
        if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].month(date);
      }
    }, {
      key: "monthCode",
      value: function monthCode(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date) && !IsTemporalMonthDay(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].monthCode(date);
      }
    }, {
      key: "day",
      value: function day(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalMonthDay(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].day(date);
      }
    }, {
      key: "era",
      value: function era(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].era(date);
      }
    }, {
      key: "eraYear",
      value: function eraYear(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].eraYear(date);
      }
    }, {
      key: "dayOfWeek",
      value: function dayOfWeek(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].dayOfWeek(date);
      }
    }, {
      key: "dayOfYear",
      value: function dayOfYear(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].dayOfYear(date);
      }
    }, {
      key: "weekOfYear",
      value: function weekOfYear(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].weekOfYear(date);
      }
    }, {
      key: "yearOfWeek",
      value: function yearOfWeek(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].yearOfWeek(date);
      }
    }, {
      key: "daysInWeek",
      value: function daysInWeek(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].daysInWeek(date);
      }
    }, {
      key: "daysInMonth",
      value: function daysInMonth(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].daysInMonth(date);
      }
    }, {
      key: "daysInYear",
      value: function daysInYear(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].daysInYear(date);
      }
    }, {
      key: "monthsInYear",
      value: function monthsInYear(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].monthsInYear(date);
      }
    }, {
      key: "inLeapYear",
      value: function inLeapYear(date) {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].inLeapYear(date);
      }
    }, {
      key: "toString",
      value: function toString() {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR_ID);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR_ID);
      }
    }], [{
      key: "from",
      value: function from(item) {
        var calendarSlotValue = ToTemporalCalendarSlotValue(item);
        return ToTemporalCalendarObject(calendarSlotValue);
      }
    }]);
    return Calendar;
  }();
  MakeIntrinsicClass(Calendar, 'Temporal.Calendar');
  DefineIntrinsic('Temporal.Calendar.from', Calendar.from);
  DefineIntrinsic('Temporal.Calendar.prototype.dateAdd', Calendar.prototype.dateAdd);
  DefineIntrinsic('Temporal.Calendar.prototype.dateFromFields', Calendar.prototype.dateFromFields);
  DefineIntrinsic('Temporal.Calendar.prototype.dateUntil', Calendar.prototype.dateUntil);
  DefineIntrinsic('Temporal.Calendar.prototype.day', Calendar.prototype.day);
  DefineIntrinsic('Temporal.Calendar.prototype.dayOfWeek', Calendar.prototype.dayOfWeek);
  DefineIntrinsic('Temporal.Calendar.prototype.dayOfYear', Calendar.prototype.dayOfYear);
  DefineIntrinsic('Temporal.Calendar.prototype.daysInMonth', Calendar.prototype.daysInMonth);
  DefineIntrinsic('Temporal.Calendar.prototype.daysInWeek', Calendar.prototype.daysInWeek);
  DefineIntrinsic('Temporal.Calendar.prototype.daysInYear', Calendar.prototype.daysInYear);
  DefineIntrinsic('Temporal.Calendar.prototype.era', Calendar.prototype.era);
  DefineIntrinsic('Temporal.Calendar.prototype.eraYear', Calendar.prototype.eraYear);
  DefineIntrinsic('Temporal.Calendar.prototype.fields', Calendar.prototype.fields);
  DefineIntrinsic('Temporal.Calendar.prototype.inLeapYear', Calendar.prototype.inLeapYear);
  DefineIntrinsic('Temporal.Calendar.prototype.mergeFields', Calendar.prototype.mergeFields);
  DefineIntrinsic('Temporal.Calendar.prototype.month', Calendar.prototype.month);
  DefineIntrinsic('Temporal.Calendar.prototype.monthCode', Calendar.prototype.monthCode);
  DefineIntrinsic('Temporal.Calendar.prototype.monthDayFromFields', Calendar.prototype.monthDayFromFields);
  DefineIntrinsic('Temporal.Calendar.prototype.monthsInYear', Calendar.prototype.monthsInYear);
  DefineIntrinsic('Temporal.Calendar.prototype.weekOfYear', Calendar.prototype.weekOfYear);
  DefineIntrinsic('Temporal.Calendar.prototype.year', Calendar.prototype.year);
  DefineIntrinsic('Temporal.Calendar.prototype.yearMonthFromFields', Calendar.prototype.yearMonthFromFields);
  DefineIntrinsic('Temporal.Calendar.prototype.yearOfWeek', Calendar.prototype.yearOfWeek);
  impl['iso8601'] = {
    dateFromFields: function dateFromFields(fields, options, calendarSlotValue) {
      fields = PrepareTemporalFields(fields, ['day', 'month', 'monthCode', 'year'], ['year', 'day']);
      var overflow = ToTemporalOverflow(options);
      fields = resolveNonLunisolarMonth(fields);
      var _fields2 = fields,
        year = _fields2.year,
        month = _fields2.month,
        day = _fields2.day;
      var _ES$RegulateISODate = RegulateISODate(year, month, day, overflow);
      year = _ES$RegulateISODate.year;
      month = _ES$RegulateISODate.month;
      day = _ES$RegulateISODate.day;
      return CreateTemporalDate(year, month, day, calendarSlotValue);
    },
    yearMonthFromFields: function yearMonthFromFields(fields, options, calendarSlotValue) {
      fields = PrepareTemporalFields(fields, ['month', 'monthCode', 'year'], ['year']);
      var overflow = ToTemporalOverflow(options);
      fields = resolveNonLunisolarMonth(fields);
      var _fields3 = fields,
        year = _fields3.year,
        month = _fields3.month;
      var _ES$RegulateISOYearMo = RegulateISOYearMonth(year, month, overflow);
      year = _ES$RegulateISOYearMo.year;
      month = _ES$RegulateISOYearMo.month;
      return CreateTemporalYearMonth(year, month, calendarSlotValue, /* referenceISODay = */1);
    },
    monthDayFromFields: function monthDayFromFields(fields, options, calendarSlotValue) {
      fields = PrepareTemporalFields(fields, ['day', 'month', 'monthCode', 'year'], ['day']);
      var overflow = ToTemporalOverflow(options);
      if (fields.month !== undefined && fields.year === undefined && fields.monthCode === undefined) {
        throw new TypeError('either year or monthCode required with month');
      }
      var useYear = fields.monthCode === undefined;
      var referenceISOYear = 1972;
      fields = resolveNonLunisolarMonth(fields);
      var _fields4 = fields,
        month = _fields4.month,
        day = _fields4.day,
        year = _fields4.year;
      var _ES$RegulateISODate2 = RegulateISODate(useYear ? year : referenceISOYear, month, day, overflow);
      month = _ES$RegulateISODate2.month;
      day = _ES$RegulateISODate2.day;
      return CreateTemporalMonthDay(month, day, calendarSlotValue, referenceISOYear);
    },
    fields: function fields(_fields5) {
      return _fields5;
    },
    fieldKeysToIgnore: function fieldKeysToIgnore(keys) {
      var result = new OriginalSet();
      for (var ix = 0; ix < keys.length; ix++) {
        var key = keys[ix];
        Call$1(SetPrototypeAdd$2, result, [key]);
        if (key === 'month') {
          Call$1(SetPrototypeAdd$2, result, ['monthCode']);
        } else if (key === 'monthCode') {
          Call$1(SetPrototypeAdd$2, result, ['month']);
        }
      }
      return _toConsumableArray(Call$1(SetPrototypeValues, result, []));
    },
    dateAdd: function dateAdd(date, years, months, weeks, days, overflow, calendarSlotValue) {
      var year = GetSlot(date, ISO_YEAR);
      var month = GetSlot(date, ISO_MONTH);
      var day = GetSlot(date, ISO_DAY);
      var _ES$AddISODate = AddISODate(year, month, day, years, months, weeks, days, overflow);
      year = _ES$AddISODate.year;
      month = _ES$AddISODate.month;
      day = _ES$AddISODate.day;
      return CreateTemporalDate(year, month, day, calendarSlotValue);
    },
    dateUntil: function dateUntil(one, two, largestUnit) {
      return DifferenceISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY), largestUnit);
    },
    year: function year(date) {
      return GetSlot(date, ISO_YEAR);
    },
    era: function era() {
      return undefined;
    },
    eraYear: function eraYear() {
      return undefined;
    },
    month: function month(date) {
      return GetSlot(date, ISO_MONTH);
    },
    monthCode: function monthCode(date) {
      return buildMonthCode(GetSlot(date, ISO_MONTH));
    },
    day: function day(date) {
      return GetSlot(date, ISO_DAY);
    },
    dayOfWeek: function dayOfWeek(date) {
      return DayOfWeek(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
    },
    dayOfYear: function dayOfYear(date) {
      return DayOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
    },
    weekOfYear: function weekOfYear(date) {
      return WeekOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY)).week;
    },
    yearOfWeek: function yearOfWeek(date) {
      return WeekOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY)).year;
    },
    daysInWeek: function daysInWeek() {
      return 7;
    },
    daysInMonth: function daysInMonth(date) {
      return ISODaysInMonth(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH));
    },
    daysInYear: function daysInYear(date) {
      if (!HasSlot(date, ISO_YEAR)) date = ToTemporalDate(date);
      return LeapYear(GetSlot(date, ISO_YEAR)) ? 366 : 365;
    },
    monthsInYear: function monthsInYear() {
      return 12;
    },
    inLeapYear: function inLeapYear(date) {
      if (!HasSlot(date, ISO_YEAR)) date = ToTemporalDate(date);
      return LeapYear(GetSlot(date, ISO_YEAR));
    }
  };

  // Note: other built-in calendars than iso8601 are not part of the Temporal
  // proposal for ECMA-262. These calendars will be standardized as part of
  // ECMA-402.

  function monthCodeNumberPart(monthCode) {
    if (!monthCode.startsWith('M')) {
      throw new RangeError("Invalid month code: ".concat(monthCode, ".  Month codes must start with M."));
    }
    var month = +monthCode.slice(1);
    if (isNaN(month)) throw new RangeError("Invalid month code: ".concat(monthCode));
    return month;
  }
  function buildMonthCode(month) {
    var leap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return "M".concat(month.toString().padStart(2, '0')).concat(leap ? 'L' : '');
  }

  /**
   * Safely merge a month, monthCode pair into an integer month.
   * If both are present, make sure they match.
   * This logic doesn't work for lunisolar calendars!
   * */
  function resolveNonLunisolarMonth(calendarDate) {
    var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var monthsPerYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
    var month = calendarDate.month,
      monthCode = calendarDate.monthCode;
    if (monthCode === undefined) {
      if (month === undefined) throw new TypeError('Either month or monthCode are required');
      // The ISO calendar uses the default (undefined) value because it does
      // constrain/reject after this method returns. Non-ISO calendars, however,
      // rely on this function to constrain/reject out-of-range `month` values.
      if (overflow === 'reject') RejectToRange(month, 1, monthsPerYear);
      if (overflow === 'constrain') month = ConstrainToRange(month, 1, monthsPerYear);
      monthCode = buildMonthCode(month);
    } else {
      var numberPart = monthCodeNumberPart(monthCode);
      if (month !== undefined && month !== numberPart) {
        throw new RangeError("monthCode ".concat(monthCode, " and month ").concat(month, " must match if both are present"));
      }
      if (monthCode !== buildMonthCode(numberPart)) {
        throw new RangeError("Invalid month code: ".concat(monthCode));
      }
      month = numberPart;
      if (month < 1 || month > monthsPerYear) throw new RangeError("Invalid monthCode: ".concat(monthCode));
    }
    return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
      month: month,
      monthCode: monthCode
    });
  }

  // Note: other built-in calendars than iso8601 are not part of the Temporal
  // proposal for ECMA-262. An implementation of these calendars is present in
  // this polyfill in order to validate the Temporal API and to get early feedback
  // about non-ISO calendars. However, non-ISO calendar implementation is subject
  // to change because these calendars are implementation-defined.

  /**
   * This prototype implementation of non-ISO calendars makes many repeated calls
   * to Intl APIs which may be slow (e.g. >0.2ms). This trivial cache will speed
   * up these repeat accesses. Each cache instance is associated (via a WeakMap)
   * to a specific Temporal object, which speeds up multiple calendar calls on the
   * same Temporal object instance.  No invalidation or pruning is necessary
   * because each object's cache is thrown away when the object is GC-ed.
   */
  var OneObjectCache = /*#__PURE__*/function () {
    function OneObjectCache() {
      var cacheToClone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      _classCallCheck(this, OneObjectCache);
      this.map = new Map();
      this.calls = 0;
      this.now = globalThis.performance ? globalThis.performance.now() : Date.now();
      this.hits = 0;
      this.misses = 0;
      if (cacheToClone !== undefined) {
        var i = 0;
        var _iterator3 = _createForOfIteratorHelper(cacheToClone.map.entries()),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _this$map;
            var entry = _step3.value;
            if (++i > OneObjectCache.MAX_CACHE_ENTRIES) break;
            (_this$map = this.map).set.apply(_this$map, _toConsumableArray(entry));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
    _createClass(OneObjectCache, [{
      key: "get",
      value: function get(key) {
        var result = this.map.get(key);
        if (result) {
          this.hits++;
          this.report();
        }
        this.calls++;
        return result;
      }
    }, {
      key: "set",
      value: function set(key, value) {
        this.map.set(key, value);
        this.misses++;
        this.report();
      }
    }, {
      key: "report",
      value: function report() {
        /*
        if (this.calls === 0) return;
        const ms = (globalThis.performance ? globalThis.performance.now() : Date.now()) - this.now;
        const hitRate = ((100 * this.hits) / this.calls).toFixed(0);
        console.log(`${this.calls} calls in ${ms.toFixed(2)}ms. Hits: ${this.hits} (${hitRate}%). Misses: ${this.misses}.`);
        */
      }
    }, {
      key: "setObject",
      value: function setObject(obj) {
        if (OneObjectCache.objectMap.get(obj)) throw new RangeError('object already cached');
        OneObjectCache.objectMap.set(obj, this);
        this.report();
      }
    }]);
    return OneObjectCache;
  }();
  OneObjectCache.objectMap = new WeakMap();
  OneObjectCache.MAX_CACHE_ENTRIES = 1000;
  /**
   * Returns a WeakMap-backed cache that's used to store expensive results
   * that are associated with a particular Temporal object instance.
   *
   * @param obj - object to associate with the cache
   */
  OneObjectCache.getCacheForObject = function (obj) {
    var cache = OneObjectCache.objectMap.get(obj);
    if (!cache) {
      cache = new OneObjectCache();
      OneObjectCache.objectMap.set(obj, cache);
    }
    return cache;
  };
  function toUtcIsoDateString(_ref) {
    var isoYear = _ref.isoYear,
      isoMonth = _ref.isoMonth,
      isoDay = _ref.isoDay;
    var yearString = ISOYearString(isoYear);
    var monthString = ISODateTimePartString(isoMonth);
    var dayString = ISODateTimePartString(isoDay);
    return "".concat(yearString, "-").concat(monthString, "-").concat(dayString, "T00:00Z");
  }
  function simpleDateDiff(one, two) {
    return {
      years: one.year - two.year,
      months: one.month - two.month,
      days: one.day - two.day
    };
  }

  /**
   * Implementation that's common to all non-trivial non-ISO calendars
   */
  var nonIsoHelperBase = {
    // The properties and methods below here should be the same for all lunar/lunisolar calendars.
    getFormatter: function getFormatter() {
      // `new Intl.DateTimeFormat()` is amazingly slow and chews up RAM. Per
      // https://bugs.chromium.org/p/v8/issues/detail?id=6528#c4, we cache one
      // DateTimeFormat instance per calendar. Caching is lazy so we only pay for
      // calendars that are used. Note that the nonIsoHelperBase object is spread
      // into each each calendar's implementation before any cache is created, so
      // each calendar gets its own separate cached formatter.
      if (typeof this.formatter === 'undefined') {
        this.formatter = new IntlDateTimeFormat("en-US-u-ca-".concat(this.id), {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          era: this.eraLength,
          timeZone: 'UTC'
        });
      }
      return this.formatter;
    },
    isoToCalendarDate: function isoToCalendarDate(isoDate, cache) {
      var _this = this;
      var isoYear = isoDate.year,
        isoMonth = isoDate.month,
        isoDay = isoDate.day;
      var key = JSON.stringify({
        func: 'isoToCalendarDate',
        isoYear: isoYear,
        isoMonth: isoMonth,
        isoDay: isoDay,
        id: this.id
      });
      var cached = cache.get(key);
      if (cached) return cached;
      var dateTimeFormat = this.getFormatter();
      var parts, isoString;
      try {
        isoString = toUtcIsoDateString({
          isoYear: isoYear,
          isoMonth: isoMonth,
          isoDay: isoDay
        });
        parts = dateTimeFormat.formatToParts(new Date(isoString));
      } catch (e) {
        throw new RangeError("Invalid ISO date: ".concat(JSON.stringify({
          isoYear: isoYear,
          isoMonth: isoMonth,
          isoDay: isoDay
        })));
      }
      var result = {};
      var _iterator4 = _createForOfIteratorHelper(parts),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _step4.value,
            type = _step4$value.type,
            value = _step4$value.value;
          if (type === 'year') result.eraYear = +value;
          if (type === 'relatedYear') result.eraYear = +value;
          if (type === 'month') {
            var matches = /^([0-9]*)(.*?)$/.exec(value);
            if (!matches || matches.length != 3 || !matches[1] && !matches[2]) {
              throw new RangeError("Unexpected month: ".concat(value));
            }
            // If the month has no numeric part (should only see this for the Hebrew
            // calendar with newer FF / Chromium versions; see
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1751833) then set a
            // placeholder month index of `1` and rely on the derived class to
            // calculate the correct month index from the month name stored in
            // `monthExtra`.
            result.month = matches[1] ? +matches[1] : 1;
            if (result.month < 1) {
              throw new RangeError("Invalid month ".concat(value, " from ").concat(isoString, "[u-ca-").concat(this.id, "]") + ' (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)');
            }
            if (result.month > 13) {
              throw new RangeError("Invalid month ".concat(value, " from ").concat(isoString, "[u-ca-").concat(this.id, "]") + ' (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)');
            }

            // The ICU formats for the Hebrew calendar no longer support a numeric
            // month format. So we'll rely on the derived class to interpret it.
            // `monthExtra` is also used on the Chinese calendar to handle a suffix
            // "bis" indicating a leap month.
            if (matches[2]) result.monthExtra = matches[2];
          }
          if (type === 'day') result.day = +value;
          if (this.hasEra && type === 'era' && value != null && value !== '') {
            // The convention for Temporal era values is lowercase, so following
            // that convention in this prototype. Punctuation is removed, accented
            // letters are normalized, and spaces are replaced with dashes.
            // E.g.: "ERA0" => "era0", "Before R.O.C." => "before-roc", "En’ō" => "eno"
            // The call to normalize() and the replacement regex deals with era
            // names that contain non-ASCII characters like Japanese eras. Also
            // ignore extra content in parentheses like JPN era date ranges.
            value = value.split(' (')[0];
            result.era = value.normalize('NFD').replace(/(?:[\0-\x1F!-,\.\/:-@\[-`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07C9\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09EF\u09F2-\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B70\u0B72-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57-\u0D5E\u0D62-\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0EDB\u0EE0-\u0EFF\u0F01-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u1040-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16F0\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u194F\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19FF\u1A17-\u1A1F\u1A55-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BFF\u1C24-\u1C4C\u1C50-\u1C59\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u2182\u2185-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3007-\u3030\u3036-\u303A\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA620-\uA629\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6E6-\uA716\uA720\uA721\uA789\uA78A\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA802\uA806\uA80B\uA823-\uA83F\uA874-\uA881\uA8B4-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF-\uA909\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9D0-\uA9DF\uA9E5\uA9F0-\uA9F9\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEFF\uDF20-\uDF2C\uDF41\uDF4A-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0-\uDFFF]|\uD801[\uDC9E-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE5-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD24-\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF46-\uDF6F\uDF82-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDD02\uDD27-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDD9\uDDDB\uDDDD-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEFF\uDF1B-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCE0-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC00-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD834\uD836\uD83C-\uD83F\uD87B-\uD87D\uD87F\uD889-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F-\uDE6F\uDEBF-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5-\uDCFF\uDD44-\uDD4A\uDD4C-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF3A-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD888[\uDFB0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, '').replace(' ', '-').toLowerCase();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      if (result.eraYear === undefined) {
        // Node 12 has outdated ICU data that lacks the `relatedYear` field in the
        // output of Intl.DateTimeFormat.formatToParts.
        throw new RangeError("Intl.DateTimeFormat.formatToParts lacks relatedYear in ".concat(this.id, " calendar. Try Node 14+ or modern browsers."));
      }
      // Translate eras that may be handled differently by Temporal vs. by Intl
      // (e.g. Japanese pre-Meiji eras). See #526 for details.
      if (this.reviseIntlEra) {
        var _this$reviseIntlEra = this.reviseIntlEra(result, isoDate),
          era = _this$reviseIntlEra.era,
          eraYear = _this$reviseIntlEra.eraYear;
        result.era = era;
        result.eraYear = eraYear;
      }
      if (this.checkIcuBugs) this.checkIcuBugs(isoDate);
      var calendarDate = this.adjustCalendarDate(result, cache, 'constrain', true);
      if (calendarDate.year === undefined) throw new RangeError("Missing year converting ".concat(JSON.stringify(isoDate)));
      if (calendarDate.month === undefined) throw new RangeError("Missing month converting ".concat(JSON.stringify(isoDate)));
      if (calendarDate.day === undefined) throw new RangeError("Missing day converting ".concat(JSON.stringify(isoDate)));
      cache.set(key, calendarDate);
      // Also cache the reverse mapping
      ['constrain', 'reject'].forEach(function (overflow) {
        var keyReverse = JSON.stringify({
          func: 'calendarToIsoDate',
          year: calendarDate.year,
          month: calendarDate.month,
          day: calendarDate.day,
          overflow: overflow,
          id: _this.id
        });
        cache.set(keyReverse, isoDate);
      });
      return calendarDate;
    },
    validateCalendarDate: function validateCalendarDate(calendarDate) {
      var era = calendarDate.era,
        month = calendarDate.month,
        year = calendarDate.year,
        day = calendarDate.day,
        eraYear = calendarDate.eraYear,
        monthCode = calendarDate.monthCode,
        monthExtra = calendarDate.monthExtra;
      // When there's a suffix (e.g. "5bis" for a leap month in Chinese calendar)
      // the derived class must deal with it.
      if (monthExtra !== undefined) throw new RangeError('Unexpected `monthExtra` value');
      if (year === undefined && eraYear === undefined) throw new TypeError('year or eraYear is required');
      if (month === undefined && monthCode === undefined) throw new TypeError('month or monthCode is required');
      if (day === undefined) throw new RangeError('Missing day');
      if (monthCode !== undefined) {
        if (typeof monthCode !== 'string') {
          throw new RangeError("monthCode must be a string, not ".concat(Type$6(monthCode).toLowerCase()));
        }
        if (!/^M([01]?\d)(L?)$/.test(monthCode)) throw new RangeError("Invalid monthCode: ".concat(monthCode));
      }
      if (this.constantEra) {
        if (era !== undefined && era !== this.constantEra) {
          throw new RangeError("era must be ".concat(this.constantEra, ", not ").concat(era));
        }
        if (eraYear !== undefined && year !== undefined && eraYear !== year) {
          throw new RangeError("eraYear ".concat(eraYear, " does not match year ").concat(year));
        }
      }
      if (this.hasEra) {
        if (calendarDate['era'] === undefined !== (calendarDate['eraYear'] === undefined)) {
          throw new RangeError("properties 'era' and 'eraYear' must be provided together");
        }
      }
    },
    /**
     * Allows derived calendars to add additional fields and/or to make
     * adjustments e.g. to set the era based on the date or to revise the month
     * number in lunisolar calendars per
     * https://github.com/tc39/proposal-temporal/issues/1203.
     *
     * The base implementation fills in missing values by assuming the simplest
     * possible calendar:
     * - no eras or a constant era defined in `.constantEra`
     * - non-lunisolar calendar (no leap months)
     * */
    adjustCalendarDate: function adjustCalendarDate(calendarDate, cache, overflow /*, fromLegacyDate = false */) {
      if (this.calendarType === 'lunisolar') throw new RangeError('Override required for lunisolar calendars');
      this.validateCalendarDate(calendarDate);
      // For calendars that always use the same era, set it here so that derived
      // calendars won't need to implement this method simply to set the era.
      if (this.constantEra) {
        // year and eraYear always match when there's only one possible era
        var _calendarDate = calendarDate,
          year = _calendarDate.year,
          eraYear = _calendarDate.eraYear;
        calendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
          era: this.constantEra,
          year: year !== undefined ? year : eraYear,
          eraYear: eraYear !== undefined ? eraYear : year
        });
      }
      var largestMonth = this.monthsInYear(calendarDate, cache);
      var _calendarDate2 = calendarDate,
        month = _calendarDate2.month,
        monthCode = _calendarDate2.monthCode;
      var _resolveNonLunisolarM = resolveNonLunisolarMonth(calendarDate, overflow, largestMonth);
      month = _resolveNonLunisolarM.month;
      monthCode = _resolveNonLunisolarM.monthCode;
      return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
        month: month,
        monthCode: monthCode
      });
    },
    regulateMonthDayNaive: function regulateMonthDayNaive(calendarDate, overflow, cache) {
      var largestMonth = this.monthsInYear(calendarDate, cache);
      var month = calendarDate.month,
        day = calendarDate.day;
      if (overflow === 'reject') {
        RejectToRange(month, 1, largestMonth);
        RejectToRange(day, 1, this.maximumMonthLength(calendarDate));
      } else {
        month = ConstrainToRange(month, 1, largestMonth);
        day = ConstrainToRange(day, 1, this.maximumMonthLength(_objectSpread2(_objectSpread2({}, calendarDate), {}, {
          month: month
        })));
      }
      return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
        month: month,
        day: day
      });
    },
    calendarToIsoDate: function calendarToIsoDate(date) {
      var _this2 = this;
      var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'constrain';
      var cache = arguments.length > 2 ? arguments[2] : undefined;
      var originalDate = date;
      // First, normalize the calendar date to ensure that (year, month, day)
      // are all present, converting monthCode and eraYear if needed.
      date = this.adjustCalendarDate(date, cache, overflow, false);

      // Fix obviously out-of-bounds values. Values that are valid generally, but
      // not in this particular year, may not be caught here for some calendars.
      // If so, these will be handled lower below.
      date = this.regulateMonthDayNaive(date, overflow, cache);
      var _date = date,
        year = _date.year,
        month = _date.month,
        day = _date.day;
      var key = JSON.stringify({
        func: 'calendarToIsoDate',
        year: year,
        month: month,
        day: day,
        overflow: overflow,
        id: this.id
      });
      var cached = cache.get(key);
      if (cached) return cached;
      // If YMD are present in the input but the input has been constrained
      // already, then cache both the original value and the constrained value.
      var keyOriginal;
      if (originalDate.year !== undefined && originalDate.month !== undefined && originalDate.day !== undefined && (originalDate.year !== date.year || originalDate.month !== date.month || originalDate.day !== date.day)) {
        keyOriginal = JSON.stringify({
          func: 'calendarToIsoDate',
          year: originalDate.year,
          month: originalDate.month,
          day: originalDate.day,
          overflow: overflow,
          id: this.id
        });
        cached = cache.get(keyOriginal);
        if (cached) return cached;
      }

      // First, try to roughly guess the result
      var isoEstimate = this.estimateIsoDate({
        year: year,
        month: month,
        day: day
      });
      var calculateSameMonthResult = function calculateSameMonthResult(diffDays) {
        // If the estimate is in the same year & month as the target, then we can
        // calculate the result exactly and short-circuit any additional logic.
        // This optimization assumes that months are continuous. It would break if
        // a calendar skipped days, like the Julian->Gregorian switchover. But the
        // only ICU calendars that currently skip days (japanese/roc/buddhist) is
        // a bug (https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)
        // that's currently detected by `checkIcuBugs()` which will throw. So
        // this optimization should be safe for all ICU calendars.
        var testIsoEstimate = _this2.addDaysIso(isoEstimate, diffDays);
        if (date.day > _this2.minimumMonthLength(date)) {
          // There's a chance that the calendar date is out of range. Throw or
          // constrain if so.
          var testCalendarDate = _this2.isoToCalendarDate(testIsoEstimate, cache);
          while (testCalendarDate.month !== month || testCalendarDate.year !== year) {
            if (overflow === 'reject') {
              throw new RangeError("day ".concat(day, " does not exist in month ").concat(month, " of year ").concat(year));
            }
            // Back up a day at a time until we're not hanging over the month end
            testIsoEstimate = _this2.addDaysIso(testIsoEstimate, -1);
            testCalendarDate = _this2.isoToCalendarDate(testIsoEstimate, cache);
          }
        }
        return testIsoEstimate;
      };
      var sign = 0;
      var roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
      var diff = simpleDateDiff(date, roundtripEstimate);
      if (diff.years !== 0 || diff.months !== 0 || diff.days !== 0) {
        var diffTotalDaysEstimate = diff.years * 365 + diff.months * 30 + diff.days;
        isoEstimate = this.addDaysIso(isoEstimate, diffTotalDaysEstimate);
        roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
        diff = simpleDateDiff(date, roundtripEstimate);
        if (diff.years === 0 && diff.months === 0) {
          isoEstimate = calculateSameMonthResult(diff.days);
        } else {
          sign = this.compareCalendarDates(date, roundtripEstimate);
        }
      }
      // If the initial guess is not in the same month, then then bisect the
      // distance to the target, starting with 8 days per step.
      var increment = 8;
      while (sign) {
        isoEstimate = this.addDaysIso(isoEstimate, sign * increment);
        var oldRoundtripEstimate = roundtripEstimate;
        roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
        var oldSign = sign;
        sign = this.compareCalendarDates(date, roundtripEstimate);
        if (sign) {
          diff = simpleDateDiff(date, roundtripEstimate);
          if (diff.years === 0 && diff.months === 0) {
            isoEstimate = calculateSameMonthResult(diff.days);
            // Signal the loop condition that there's a match.
            sign = 0;
          } else if (oldSign && sign !== oldSign) {
            if (increment > 1) {
              // If the estimate overshot the target, try again with a smaller increment
              // in the reverse direction.
              increment /= 2;
            } else {
              // Increment is 1, and neither the previous estimate nor the new
              // estimate is correct. The only way that can happen is if the
              // original date was an invalid value that will be constrained or
              // rejected here.
              if (overflow === 'reject') {
                throw new RangeError("Can't find ISO date from calendar date: ".concat(JSON.stringify(_objectSpread2({}, originalDate))));
              } else {
                // To constrain, pick the earliest value
                var order = this.compareCalendarDates(roundtripEstimate, oldRoundtripEstimate);
                // If current value is larger, then back up to the previous value.
                if (order > 0) isoEstimate = this.addDaysIso(isoEstimate, -1);
                sign = 0;
              }
            }
          }
        }
      }
      cache.set(key, isoEstimate);
      if (keyOriginal) cache.set(keyOriginal, isoEstimate);
      if (date.year === undefined || date.month === undefined || date.day === undefined || date.monthCode === undefined || this.hasEra && (date.era === undefined || date.eraYear === undefined)) {
        throw new RangeError('Unexpected missing property');
      }
      return isoEstimate;
    },
    temporalToCalendarDate: function temporalToCalendarDate(date, cache) {
      var isoDate = {
        year: GetSlot(date, ISO_YEAR),
        month: GetSlot(date, ISO_MONTH),
        day: GetSlot(date, ISO_DAY)
      };
      var result = this.isoToCalendarDate(isoDate, cache);
      return result;
    },
    compareCalendarDates: function compareCalendarDates(date1, date2) {
      // `date1` and `date2` are already records. The calls below simply validate
      // that all three required fields are present.
      date1 = PrepareTemporalFields(date1, ['day', 'month', 'year'], ['day', 'month', 'year']);
      date2 = PrepareTemporalFields(date2, ['day', 'month', 'year'], ['day', 'month', 'year']);
      if (date1.year !== date2.year) return ComparisonResult(date1.year - date2.year);
      if (date1.month !== date2.month) return ComparisonResult(date1.month - date2.month);
      if (date1.day !== date2.day) return ComparisonResult(date1.day - date2.day);
      return 0;
    },
    /** Ensure that a calendar date actually exists. If not, return the closest earlier date. */regulateDate: function regulateDate(calendarDate) {
      var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'constrain';
      var cache = arguments.length > 2 ? arguments[2] : undefined;
      var isoDate = this.calendarToIsoDate(calendarDate, overflow, cache);
      return this.isoToCalendarDate(isoDate, cache);
    },
    addDaysIso: function addDaysIso(isoDate, days) {
      var added = AddISODate(isoDate.year, isoDate.month, isoDate.day, 0, 0, 0, days, 'constrain');
      return added;
    },
    addDaysCalendar: function addDaysCalendar(calendarDate, days, cache) {
      var isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
      var addedIso = this.addDaysIso(isoDate, days);
      var addedCalendar = this.isoToCalendarDate(addedIso, cache);
      return addedCalendar;
    },
    addMonthsCalendar: function addMonthsCalendar(calendarDate, months, overflow, cache) {
      var _calendarDate3 = calendarDate,
        day = _calendarDate3.day;
      for (var i = 0, absMonths = MathAbs(months); i < absMonths; i++) {
        var _calendarDate4 = calendarDate,
          month = _calendarDate4.month;
        var oldCalendarDate = calendarDate;
        var days = months < 0 ? -Math.max(day, this.daysInPreviousMonth(calendarDate, cache)) : this.daysInMonth(calendarDate, cache);
        var isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
        var addedIso = this.addDaysIso(isoDate, days, cache);
        calendarDate = this.isoToCalendarDate(addedIso, cache);

        // Normally, we can advance one month by adding the number of days in the
        // current month. However, if we're at the end of the current month and
        // the next month has fewer days, then we rolled over to the after-next
        // month. Below we detect this condition and back up until we're back in
        // the desired month.
        if (months > 0) {
          var monthsInOldYear = this.monthsInYear(oldCalendarDate, cache);
          while (calendarDate.month - 1 !== month % monthsInOldYear) {
            addedIso = this.addDaysIso(addedIso, -1, cache);
            calendarDate = this.isoToCalendarDate(addedIso, cache);
          }
        }
        if (calendarDate.day !== day) {
          // try to retain the original day-of-month, if possible
          calendarDate = this.regulateDate(_objectSpread2(_objectSpread2({}, calendarDate), {}, {
            day: day
          }), 'constrain', cache);
        }
      }
      if (overflow === 'reject' && calendarDate.day !== day) {
        throw new RangeError("Day ".concat(day, " does not exist in resulting calendar month"));
      }
      return calendarDate;
    },
    addCalendar: function addCalendar(calendarDate, _ref2, overflow, cache) {
      var _ref2$years = _ref2.years,
        years = _ref2$years === void 0 ? 0 : _ref2$years,
        _ref2$months = _ref2.months,
        months = _ref2$months === void 0 ? 0 : _ref2$months,
        _ref2$weeks = _ref2.weeks,
        weeks = _ref2$weeks === void 0 ? 0 : _ref2$weeks,
        _ref2$days = _ref2.days,
        days = _ref2$days === void 0 ? 0 : _ref2$days;
      var year = calendarDate.year,
        day = calendarDate.day,
        monthCode = calendarDate.monthCode;
      var addedYears = this.adjustCalendarDate({
        year: year + years,
        monthCode: monthCode,
        day: day
      }, cache);
      var addedMonths = this.addMonthsCalendar(addedYears, months, overflow, cache);
      days += weeks * 7;
      var addedDays = this.addDaysCalendar(addedMonths, days, cache);
      return addedDays;
    },
    untilCalendar: function untilCalendar(calendarOne, calendarTwo, largestUnit, cache) {
      var days = 0;
      var weeks = 0;
      var months = 0;
      var years = 0;
      switch (largestUnit) {
        case 'day':
          days = this.calendarDaysUntil(calendarOne, calendarTwo, cache);
          break;
        case 'week':
          {
            var totalDays = this.calendarDaysUntil(calendarOne, calendarTwo, cache);
            days = totalDays % 7;
            weeks = (totalDays - days) / 7;
            break;
          }
        case 'month':
        case 'year':
          {
            var sign = this.compareCalendarDates(calendarTwo, calendarOne);
            if (!sign) {
              return {
                years: 0,
                months: 0,
                weeks: 0,
                days: 0
              };
            }
            var diffYears = calendarTwo.year - calendarOne.year;
            var diffDays = calendarTwo.day - calendarOne.day;
            if (largestUnit === 'year' && diffYears) {
              var diffInYearSign = 0;
              if (calendarTwo.monthCode > calendarOne.monthCode) diffInYearSign = 1;
              if (calendarTwo.monthCode < calendarOne.monthCode) diffInYearSign = -1;
              if (!diffInYearSign) diffInYearSign = Math.sign(diffDays);
              var isOneFurtherInYear = diffInYearSign * sign < 0;
              years = isOneFurtherInYear ? diffYears - sign : diffYears;
            }
            var yearsAdded = years ? this.addCalendar(calendarOne, {
              years: years
            }, 'constrain', cache) : calendarOne;
            // Now we have less than one year remaining. Add one month at a time
            // until we go over the target, then back up one month and calculate
            // remaining days and weeks.
            var current;
            var next = yearsAdded;
            do {
              months += sign;
              current = next;
              next = this.addMonthsCalendar(current, sign, 'constrain', cache);
              if (next.day !== calendarOne.day) {
                // In case the day was constrained down, try to un-constrain it
                next = this.regulateDate(_objectSpread2(_objectSpread2({}, next), {}, {
                  day: calendarOne.day
                }), 'constrain', cache);
              }
            } while (this.compareCalendarDates(calendarTwo, next) * sign >= 0);
            months -= sign; // correct for loop above which overshoots by 1
            var remainingDays = this.calendarDaysUntil(current, calendarTwo, cache);
            days = remainingDays;
            break;
          }
      }
      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days
      };
    },
    daysInMonth: function daysInMonth(calendarDate, cache) {
      // Add enough days to roll over to the next month. One we're in the next
      // month, we can calculate the length of the current month. NOTE: This
      // algorithm assumes that months are continuous. It would break if a
      // calendar skipped days, like the Julian->Gregorian switchover. But the
      // only ICU calendars that currently skip days (japanese/roc/buddhist) is a
      // bug (https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)
      // that's currently detected by `checkIcuBugs()` which will throw. So this
      // code should be safe for all ICU calendars.
      var day = calendarDate.day;
      var max = this.maximumMonthLength(calendarDate);
      var min = this.minimumMonthLength(calendarDate);
      // easiest case: we already know the month length if min and max are the same.
      if (min === max) return min;

      // Add enough days to get into the next month, without skipping it
      var increment = day <= max - min ? max : min;
      var isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
      var addedIsoDate = this.addDaysIso(isoDate, increment);
      var addedCalendarDate = this.isoToCalendarDate(addedIsoDate, cache);

      // Now back up to the last day of the original month
      var endOfMonthIso = this.addDaysIso(addedIsoDate, -addedCalendarDate.day);
      var endOfMonthCalendar = this.isoToCalendarDate(endOfMonthIso, cache);
      return endOfMonthCalendar.day;
    },
    daysInPreviousMonth: function daysInPreviousMonth(calendarDate, cache) {
      var day = calendarDate.day,
        month = calendarDate.month,
        year = calendarDate.year;

      // Check to see if we already know the month length, and return it if so
      var previousMonthYear = month > 1 ? year : year - 1;
      var previousMonthDate = {
        year: previousMonthYear,
        month: month,
        day: 1
      };
      var previousMonth = month > 1 ? month - 1 : this.monthsInYear(previousMonthDate, cache);
      previousMonthDate = _objectSpread2(_objectSpread2({}, previousMonthDate), {}, {
        month: previousMonth
      });
      var min = this.minimumMonthLength(previousMonthDate);
      var max = this.maximumMonthLength(previousMonthDate);
      if (min === max) return max;
      var isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
      var lastDayOfPreviousMonthIso = this.addDaysIso(isoDate, -day);
      var lastDayOfPreviousMonthCalendar = this.isoToCalendarDate(lastDayOfPreviousMonthIso, cache);
      return lastDayOfPreviousMonthCalendar.day;
    },
    startOfCalendarYear: function startOfCalendarYear(calendarDate) {
      return {
        year: calendarDate.year,
        month: 1,
        monthCode: 'M01',
        day: 1
      };
    },
    startOfCalendarMonth: function startOfCalendarMonth(calendarDate) {
      return {
        year: calendarDate.year,
        month: calendarDate.month,
        day: 1
      };
    },
    calendarDaysUntil: function calendarDaysUntil(calendarOne, calendarTwo, cache) {
      var oneIso = this.calendarToIsoDate(calendarOne, 'constrain', cache);
      var twoIso = this.calendarToIsoDate(calendarTwo, 'constrain', cache);
      return this.isoDaysUntil(oneIso, twoIso);
    },
    isoDaysUntil: function isoDaysUntil(oneIso, twoIso) {
      var duration = DifferenceISODate(oneIso.year, oneIso.month, oneIso.day, twoIso.year, twoIso.month, twoIso.day, 'day');
      return duration.days;
    },
    // The short era format works for all calendars except Japanese, which will
    // override.
    eraLength: 'short',
    // All built-in calendars except Chinese/Dangi and Hebrew use an era
    hasEra: true,
    monthDayFromFields: function monthDayFromFields(fields, overflow, cache) {
      var monthCode = fields.monthCode,
        day = fields.day;
      if (monthCode === undefined) {
        var year = fields.year,
          era = fields.era,
          eraYear = fields.eraYear;
        if (year === undefined && (era === undefined || eraYear === undefined)) {
          throw new TypeError('when `monthCode` is omitted, `year` (or `era` and `eraYear`) and `month` are required');
        }
        // Apply overflow behaviour to year/month/day, to get correct monthCode/day
        var _this$isoToCalendarDa = this.isoToCalendarDate(this.calendarToIsoDate(fields, overflow, cache), cache);
        monthCode = _this$isoToCalendarDa.monthCode;
        day = _this$isoToCalendarDa.day;
      }
      var isoYear, isoMonth, isoDay;
      var closestCalendar, closestIso;
      // Look backwards starting from one of the calendar years spanning ISO year
      // 1972, up to 100 calendar years prior, to find a year that has this month
      // and day. Normal months and days will match immediately, but for leap days
      // and leap months we may have to look for a while.
      var startDateIso = {
        year: 1972,
        month: 12,
        day: 31
      };
      var calendarOfStartDateIso = this.isoToCalendarDate(startDateIso, cache);
      // Note: relies on lexicographical ordering of monthCodes
      var calendarYear = calendarOfStartDateIso.monthCode > monthCode || calendarOfStartDateIso.monthCode === monthCode && calendarOfStartDateIso.day >= day ? calendarOfStartDateIso.year : calendarOfStartDateIso.year - 1;
      for (var i = 0; i < 100; i++) {
        var testCalendarDate = this.adjustCalendarDate({
          day: day,
          monthCode: monthCode,
          year: calendarYear - i
        }, cache);
        var isoDate = this.calendarToIsoDate(testCalendarDate, 'constrain', cache);
        var roundTripCalendarDate = this.isoToCalendarDate(isoDate, cache);
        isoYear = isoDate.year;
        isoMonth = isoDate.month;
        isoDay = isoDate.day;
        if (roundTripCalendarDate.monthCode === monthCode && roundTripCalendarDate.day === day) {
          return {
            month: isoMonth,
            day: isoDay,
            year: isoYear
          };
        } else if (overflow === 'constrain') {
          // non-ISO constrain algorithm tries to find the closest date in a matching month
          if (closestCalendar === undefined || roundTripCalendarDate.monthCode === closestCalendar.monthCode && roundTripCalendarDate.day > closestCalendar.day) {
            closestCalendar = roundTripCalendarDate;
            closestIso = isoDate;
          }
        }
      }
      if (overflow === 'constrain' && closestIso !== undefined) return closestIso;
      throw new RangeError("No recent ".concat(this.id, " year with monthCode ").concat(monthCode, " and day ").concat(day));
    }
  };
  var helperHebrew = ObjectAssign$1({}, nonIsoHelperBase, {
    id: 'hebrew',
    calendarType: 'lunisolar',
    inLeapYear: function inLeapYear(calendarDate /*, cache */) {
      var year = calendarDate.year;
      // FYI: In addition to adding a month in leap years, the Hebrew calendar
      // also has per-year changes to the number of days of Heshvan and Kislev.
      // Given that these can be calculated by counting the number of days in
      // those months, I assume that these DO NOT need to be exposed as
      // Hebrew-only prototype fields or methods.
      return (7 * year + 1) % 19 < 7;
    },
    monthsInYear: function monthsInYear(calendarDate) {
      return this.inLeapYear(calendarDate) ? 13 : 12;
    },
    minimumMonthLength: function minimumMonthLength(calendarDate) {
      return this.minMaxMonthLength(calendarDate, 'min');
    },
    maximumMonthLength: function maximumMonthLength(calendarDate) {
      return this.minMaxMonthLength(calendarDate, 'max');
    },
    minMaxMonthLength: function minMaxMonthLength(calendarDate, minOrMax) {
      var month = calendarDate.month,
        year = calendarDate.year;
      var monthCode = this.getMonthCode(year, month);
      var monthInfo = ObjectEntries(this.months).find(function (m) {
        return m[1].monthCode === monthCode;
      });
      if (monthInfo === undefined) throw new RangeError("unmatched Hebrew month: ".concat(month));
      var daysInMonth = monthInfo[1].days;
      return typeof daysInMonth === 'number' ? daysInMonth : daysInMonth[minOrMax];
    },
    /** Take a guess at what ISO date a particular calendar date corresponds to */estimateIsoDate: function estimateIsoDate(calendarDate) {
      var year = calendarDate.year;
      return {
        year: year - 3760,
        month: 1,
        day: 1
      };
    },
    months: {
      Tishri: {
        leap: 1,
        regular: 1,
        monthCode: 'M01',
        days: 30
      },
      Heshvan: {
        leap: 2,
        regular: 2,
        monthCode: 'M02',
        days: {
          min: 29,
          max: 30
        }
      },
      Kislev: {
        leap: 3,
        regular: 3,
        monthCode: 'M03',
        days: {
          min: 29,
          max: 30
        }
      },
      Tevet: {
        leap: 4,
        regular: 4,
        monthCode: 'M04',
        days: 29
      },
      Shevat: {
        leap: 5,
        regular: 5,
        monthCode: 'M05',
        days: 30
      },
      Adar: {
        leap: undefined,
        regular: 6,
        monthCode: 'M06',
        days: 29
      },
      'Adar I': {
        leap: 6,
        regular: undefined,
        monthCode: 'M05L',
        days: 30
      },
      'Adar II': {
        leap: 7,
        regular: undefined,
        monthCode: 'M06',
        days: 29
      },
      Nisan: {
        leap: 8,
        regular: 7,
        monthCode: 'M07',
        days: 30
      },
      Iyar: {
        leap: 9,
        regular: 8,
        monthCode: 'M08',
        days: 29
      },
      Sivan: {
        leap: 10,
        regular: 9,
        monthCode: 'M09',
        days: 30
      },
      Tamuz: {
        leap: 11,
        regular: 10,
        monthCode: 'M10',
        days: 29
      },
      Av: {
        leap: 12,
        regular: 11,
        monthCode: 'M11',
        days: 30
      },
      Elul: {
        leap: 13,
        regular: 12,
        monthCode: 'M12',
        days: 29
      }
    },
    getMonthCode: function getMonthCode(year, month) {
      if (this.inLeapYear({
        year: year
      })) {
        return month === 6 ? buildMonthCode(5, true) : buildMonthCode(month < 6 ? month : month - 1);
      } else {
        return buildMonthCode(month);
      }
    },
    adjustCalendarDate: function adjustCalendarDate(calendarDate, cache) {
      var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
      var fromLegacyDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var year = calendarDate.year,
        eraYear = calendarDate.eraYear,
        month = calendarDate.month,
        monthCode = calendarDate.monthCode,
        day = calendarDate.day,
        monthExtra = calendarDate.monthExtra;
      if (year === undefined) year = eraYear;
      if (eraYear === undefined) eraYear = year;
      if (fromLegacyDate) {
        // In Pre Node-14 V8, DateTimeFormat.formatToParts `month: 'numeric'`
        // output returns the numeric equivalent of `month` as a string, meaning
        // that `'6'` in a leap year is Adar I, while `'6'` in a non-leap year
        // means Adar. In this case, `month` will already be correct and no action
        // is needed. However, in Node 14 and later formatToParts returns the name
        // of the Hebrew month (e.g. "Tevet"), so we'll need to look up the
        // correct `month` using the string name as a key.
        if (monthExtra) {
          var monthInfo = this.months[monthExtra];
          if (!monthInfo) throw new RangeError("Unrecognized month from formatToParts: ".concat(monthExtra));
          month = this.inLeapYear({
            year: year
          }) ? monthInfo.leap : monthInfo.regular;
        }
        monthCode = this.getMonthCode(year, month);
        var result = {
          year: year,
          month: month,
          day: day,
          era: undefined,
          eraYear: eraYear,
          monthCode: monthCode
        };
        return result;
      } else {
        // When called without input coming from legacy Date output, simply ensure
        // that all fields are present.
        this.validateCalendarDate(calendarDate);
        if (month === undefined) {
          if (monthCode.endsWith('L')) {
            if (monthCode !== 'M05L') {
              throw new RangeError("Hebrew leap month must have monthCode M05L, not ".concat(monthCode));
            }
            month = 6;
            if (!this.inLeapYear({
              year: year
            })) {
              if (overflow === 'reject') {
                throw new RangeError("Hebrew monthCode M05L is invalid in year ".concat(year, " which is not a leap year"));
              } else {
                // constrain to same day of next month (Adar)
                month = 6;
                monthCode = 'M06';
              }
            }
          } else {
            month = monthCodeNumberPart(monthCode);
            // if leap month is before this one, the month index is one more than the month code
            if (this.inLeapYear({
              year: year
            }) && month >= 6) month++;
            var largestMonth = this.monthsInYear({
              year: year
            });
            if (month < 1 || month > largestMonth) throw new RangeError("Invalid monthCode: ".concat(monthCode));
          }
        } else {
          if (overflow === 'reject') {
            RejectToRange(month, 1, this.monthsInYear({
              year: year
            }));
            RejectToRange(day, 1, this.maximumMonthLength({
              year: year,
              month: month
            }));
          } else {
            month = ConstrainToRange(month, 1, this.monthsInYear({
              year: year
            }));
            day = ConstrainToRange(day, 1, this.maximumMonthLength({
              year: year,
              month: month
            }));
          }
          if (monthCode === undefined) {
            monthCode = this.getMonthCode(year, month);
          } else {
            var calculatedMonthCode = this.getMonthCode(year, month);
            if (calculatedMonthCode !== monthCode) {
              throw new RangeError("monthCode ".concat(monthCode, " doesn't correspond to month ").concat(month, " in Hebrew year ").concat(year));
            }
          }
        }
        return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
          day: day,
          month: month,
          monthCode: monthCode,
          year: year,
          eraYear: eraYear
        });
      }
    },
    // All built-in calendars except Chinese/Dangi and Hebrew use an era
    hasEra: false
  });

  /**
   * For Temporal purposes, the Islamic calendar is simple because it's always the
   * same 12 months in the same order.
   */
  var helperIslamic = ObjectAssign$1({}, nonIsoHelperBase, {
    id: 'islamic',
    calendarType: 'lunar',
    inLeapYear: function inLeapYear(calendarDate, cache) {
      // In leap years, the 12th month has 30 days. In non-leap years: 29.
      var days = this.daysInMonth({
        year: calendarDate.year,
        month: 12,
        day: 1
      }, cache);
      return days === 30;
    },
    monthsInYear: function monthsInYear() {
      return 12;
    } /* calendarYear, cache */,
    minimumMonthLength: function minimumMonthLength( /* calendarDate */) {
      return 29;
    },
    maximumMonthLength: function maximumMonthLength( /* calendarDate */) {
      return 30;
    },
    DAYS_PER_ISLAMIC_YEAR: 354 + 11 / 30,
    DAYS_PER_ISO_YEAR: 365.2425,
    constantEra: 'ah',
    estimateIsoDate: function estimateIsoDate(calendarDate) {
      var _this$adjustCalendarD = this.adjustCalendarDate(calendarDate),
        year = _this$adjustCalendarD.year;
      return {
        year: MathFloor(year * this.DAYS_PER_ISLAMIC_YEAR / this.DAYS_PER_ISO_YEAR) + 622,
        month: 1,
        day: 1
      };
    }
  });
  var helperPersian = ObjectAssign$1({}, nonIsoHelperBase, {
    id: 'persian',
    calendarType: 'solar',
    inLeapYear: function inLeapYear(calendarDate, cache) {
      // Same logic (count days in the last month) for Persian as for Islamic,
      // even though Persian is solar and Islamic is lunar.
      return helperIslamic.inLeapYear(calendarDate, cache);
    },
    monthsInYear: function monthsInYear() {
      return 12;
    } /* calendarYear, cache */,
    minimumMonthLength: function minimumMonthLength(calendarDate) {
      var month = calendarDate.month;
      if (month === 12) return 29;
      return month <= 6 ? 31 : 30;
    },
    maximumMonthLength: function maximumMonthLength(calendarDate) {
      var month = calendarDate.month;
      if (month === 12) return 30;
      return month <= 6 ? 31 : 30;
    },
    constantEra: 'ap',
    estimateIsoDate: function estimateIsoDate(calendarDate) {
      var _this$adjustCalendarD2 = this.adjustCalendarDate(calendarDate),
        year = _this$adjustCalendarD2.year;
      return {
        year: year + 621,
        month: 1,
        day: 1
      };
    }
  });
  var helperIndian = ObjectAssign$1({}, nonIsoHelperBase, {
    id: 'indian',
    calendarType: 'solar',
    inLeapYear: function inLeapYear(calendarDate /*, cache*/) {
      // From https://en.wikipedia.org/wiki/Indian_national_calendar:
      // Years are counted in the Saka era, which starts its year 0 in the year 78
      // of the Common Era. To determine leap years, add 78 to the Saka year – if
      // the result is a leap year in the Gregorian calendar, then the Saka year
      // is a leap year as well.
      return isGregorianLeapYear(calendarDate.year + 78);
    },
    monthsInYear: function monthsInYear() {
      return 12;
    } /* calendarYear, cache */,
    minimumMonthLength: function minimumMonthLength(calendarDate) {
      return this.getMonthInfo(calendarDate).length;
    },
    maximumMonthLength: function maximumMonthLength(calendarDate) {
      return this.getMonthInfo(calendarDate).length;
    },
    constantEra: 'saka',
    // Indian months always start at the same well-known Gregorian month and
    // day. So this conversion is easy and fast. See
    // https://en.wikipedia.org/wiki/Indian_national_calendar
    months: {
      1: {
        length: 30,
        month: 3,
        day: 22,
        leap: {
          length: 31,
          month: 3,
          day: 21
        }
      },
      2: {
        length: 31,
        month: 4,
        day: 21
      },
      3: {
        length: 31,
        month: 5,
        day: 22
      },
      4: {
        length: 31,
        month: 6,
        day: 22
      },
      5: {
        length: 31,
        month: 7,
        day: 23
      },
      6: {
        length: 31,
        month: 8,
        day: 23
      },
      7: {
        length: 30,
        month: 9,
        day: 23
      },
      8: {
        length: 30,
        month: 10,
        day: 23
      },
      9: {
        length: 30,
        month: 11,
        day: 22
      },
      10: {
        length: 30,
        month: 12,
        day: 22
      },
      11: {
        length: 30,
        month: 1,
        nextYear: true,
        day: 21
      },
      12: {
        length: 30,
        month: 2,
        nextYear: true,
        day: 20
      }
    },
    getMonthInfo: function getMonthInfo(calendarDate) {
      var month = calendarDate.month;
      var monthInfo = this.months[month];
      if (monthInfo === undefined) throw new RangeError("Invalid month: ".concat(month));
      if (this.inLeapYear(calendarDate) && monthInfo.leap) monthInfo = monthInfo.leap;
      return monthInfo;
    },
    estimateIsoDate: function estimateIsoDate(calendarDate) {
      // FYI, this "estimate" is always the exact ISO date, which makes the Indian
      // calendar fast!
      calendarDate = this.adjustCalendarDate(calendarDate);
      var monthInfo = this.getMonthInfo(calendarDate);
      var isoYear = calendarDate.year + 78 + (monthInfo.nextYear ? 1 : 0);
      var isoMonth = monthInfo.month;
      var isoDay = monthInfo.day;
      var isoDate = AddISODate(isoYear, isoMonth, isoDay, 0, 0, 0, calendarDate.day - 1, 'constrain');
      return isoDate;
    },
    // https://bugs.chromium.org/p/v8/issues/detail?id=10529 causes Intl's Indian
    // calendar output to fail for all dates before 0001-01-01 ISO.  For example,
    // in Node 12 0000-01-01 is calculated as 6146/12/-583 instead of 10/11/-79 as
    // expected.
    vulnerableToBceBug: new Date('0000-01-01T00:00Z').toLocaleDateString('en-US-u-ca-indian', {
      timeZone: 'UTC'
    }) !== '10/11/-79 Saka',
    checkIcuBugs: function checkIcuBugs(isoDate) {
      if (this.vulnerableToBceBug && isoDate.year < 1) {
        throw new RangeError("calendar '".concat(this.id, "' is broken for ISO dates before 0001-01-01") + ' (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)');
      }
    }
  });

  /**
   * This function adds additional metadata that makes it easier to work with
   * eras. Note that it mutates and normalizes the original era objects, which is
   * OK because this is non-observable, internal-only metadata.
   *
   *  interface Era {
   *   /** name of the era
   *   name: string;
   *
   *   // alternate name of the era used in old versions of ICU data
   *   // format is `era{n}` where n is the zero-based index of the era
   *   // with the oldest era being 0.
   *   genericName: string;
   *
   *   // Signed calendar year where this era begins. Will be 1 (or 0 for zero-based
   *   // eras) for the anchor era assuming that `year` numbering starts at the
   *   // beginning of the anchor era, which is true for all ICU calendars except
   *   // Japanese. For input, the month and day are optional. If an era starts
   *   // mid-year then a calendar month and day are included.
   *   // Otherwise `{ month: 1, day: 1 }` is assumed.
   *   anchorEpoch: { year: number; month: number; day: number };
   *
   *   // ISO date of the first day of this era
   *   isoEpoch: { year: number; month: number; day: number };
   *
   *   // If present, then this era counts years backwards like BC
   *   // and this property points to the forward era. This must be
   *   // the last (oldest) era in the array.
   *   reverseOf?: Era;
   *
   *   // If true, the era's years are 0-based. If omitted or false,
   *   // then the era's years are 1-based.
   *   hasYearZero?: boolean;
   *
   *   // Override if this era is the anchor. Not normally used because
   *   // anchor eras are inferred.
   *   isAnchor?: boolean;
   * }
   * ```
   * */
  function adjustEras(eras) {
    if (eras.length === 0) {
      throw new RangeError('Invalid era data: eras are required');
    }
    if (eras.length === 1 && eras[0].reverseOf) {
      throw new RangeError('Invalid era data: anchor era cannot count years backwards');
    }
    if (eras.length === 1 && !eras[0].name) {
      throw new RangeError('Invalid era data: at least one named era is required');
    }
    if (eras.filter(function (e) {
      return e.reverseOf != null;
    }).length > 1) {
      throw new RangeError('Invalid era data: only one era can count years backwards');
    }

    // Find the "anchor era" which is the era used for (era-less) `year`. Reversed
    // eras can never be anchors. The era without an `anchorEpoch` property is the
    // anchor.
    var anchorEra;
    eras.forEach(function (e) {
      if (e.isAnchor || !e.anchorEpoch && !e.reverseOf) {
        if (anchorEra) throw new RangeError('Invalid era data: cannot have multiple anchor eras');
        anchorEra = e;
        e.anchorEpoch = {
          year: e.hasYearZero ? 0 : 1
        };
      } else if (!e.name) {
        throw new RangeError('If era name is blank, it must be the anchor era');
      }
    });

    // If the era name is undefined, then it's an anchor that doesn't interact
    // with eras at all. For example, Japanese `year` is always the same as ISO
    // `year`.  So this "era" is the anchor era but isn't used for era matching.
    // Strip it from the list that's returned.
    eras = eras.filter(function (e) {
      return e.name;
    });
    eras.forEach(function (e) {
      // Some eras are mirror images of another era e.g. B.C. is the reverse of A.D.
      // Replace the string-valued "reverseOf" property with the actual era object
      // that's reversed.
      var reverseOf = e.reverseOf;
      if (reverseOf) {
        var reversedEra = eras.find(function (era) {
          return era.name === reverseOf;
        });
        if (reversedEra === undefined) throw new RangeError("Invalid era data: unmatched reverseOf era: ".concat(reverseOf));
        e.reverseOf = reversedEra;
        e.anchorEpoch = reversedEra.anchorEpoch;
        e.isoEpoch = reversedEra.isoEpoch;
      }
      if (e.anchorEpoch.month === undefined) e.anchorEpoch.month = 1;
      if (e.anchorEpoch.day === undefined) e.anchorEpoch.day = 1;
    });

    // Ensure that the latest epoch is first in the array. This lets us try to
    // match eras in index order, with the last era getting the remaining older
    // years. Any reverse-signed era must be at the end.
    Call$1(ArraySort, eras, [function (e1, e2) {
      if (e1.reverseOf) return 1;
      if (e2.reverseOf) return -1;
      if (!e1.isoEpoch || !e2.isoEpoch) throw new RangeError('Invalid era data: missing ISO epoch');
      return e2.isoEpoch.year - e1.isoEpoch.year;
    }]);

    // If there's a reversed era, then the one before it must be the era that's
    // being reversed.
    var lastEraReversed = eras[eras.length - 1].reverseOf;
    if (lastEraReversed) {
      if (lastEraReversed !== eras[eras.length - 2]) throw new RangeError('Invalid era data: invalid reverse-sign era');
    }

    // Finally, add a "genericName" property in the format "era{n} where `n` is
    // zero-based index, with the oldest era being zero. This format is used by
    // older versions of ICU data.
    eras.forEach(function (e, i) {
      e.genericName = "era".concat(eras.length - 1 - i);
    });
    return {
      eras: eras,
      anchorEra: anchorEra || eras[0]
    };
  }
  function isGregorianLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  /** Base for all Gregorian-like calendars. */
  var makeHelperGregorian = function makeHelperGregorian(id, originalEras) {
    var _adjustEras = adjustEras(originalEras),
      eras = _adjustEras.eras,
      anchorEra = _adjustEras.anchorEra;
    return ObjectAssign$1({}, nonIsoHelperBase, {
      id: id,
      eras: eras,
      anchorEra: anchorEra,
      calendarType: 'solar',
      inLeapYear: function inLeapYear(calendarDate /*, cache */) {
        var _this$estimateIsoDate = this.estimateIsoDate(calendarDate),
          year = _this$estimateIsoDate.year;
        return isGregorianLeapYear(year);
      },
      monthsInYear: function monthsInYear() {
        return 12;
      } /* calendarDate */,
      minimumMonthLength: function minimumMonthLength(calendarDate) {
        var month = calendarDate.month;
        if (month === 2) return this.inLeapYear(calendarDate) ? 29 : 28;
        return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31;
      },
      maximumMonthLength: function maximumMonthLength(calendarDate) {
        return this.minimumMonthLength(calendarDate);
      },
      /** Fill in missing parts of the (year, era, eraYear) tuple */completeEraYear: function completeEraYear(calendarDate) {
        var _this3 = this;
        var checkField = function checkField(name, value) {
          var currentValue = calendarDate[name];
          if (currentValue != null && currentValue != value) {
            throw new RangeError("Input ".concat(name, " ").concat(currentValue, " doesn't match calculated value ").concat(value));
          }
        };
        var eraFromYear = function eraFromYear(year) {
          var eraYear;
          var adjustedCalendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
            year: year
          });
          var matchingEra = _this3.eras.find(function (e, i) {
            if (i === _this3.eras.length - 1) {
              if (e.reverseOf) {
                // This is a reverse-sign era (like BCE) which must be the oldest
                // era. Count years backwards.
                if (year > 0) throw new RangeError("Signed year ".concat(year, " is invalid for era ").concat(e.name));
                eraYear = e.anchorEpoch.year - year;
                return true;
              }
              // last era always gets all "leftover" (older than epoch) years,
              // so no need for a comparison like below.
              eraYear = year - e.anchorEpoch.year + (e.hasYearZero ? 0 : 1);
              return true;
            }
            var comparison = nonIsoHelperBase.compareCalendarDates(adjustedCalendarDate, e.anchorEpoch);
            if (comparison >= 0) {
              eraYear = year - e.anchorEpoch.year + (e.hasYearZero ? 0 : 1);
              return true;
            }
            return false;
          });
          if (!matchingEra) throw new RangeError("Year ".concat(year, " was not matched by any era"));
          return {
            eraYear: eraYear,
            era: matchingEra.name
          };
        };
        var year = calendarDate.year,
          eraYear = calendarDate.eraYear,
          era = calendarDate.era;
        if (year != null) {
          var _eraFromYear = eraFromYear(year);
          eraYear = _eraFromYear.eraYear;
          era = _eraFromYear.era;
          checkField('era', era);
          checkField('eraYear', eraYear);
        } else if (eraYear != null) {
          var matchingEra = era === undefined ? undefined : this.eras.find(function (e) {
            return e.name === era || e.genericName === era;
          });
          if (!matchingEra) throw new RangeError("Era ".concat(era, " (ISO year ").concat(eraYear, ") was not matched by any era"));
          if (eraYear < 1 && matchingEra.reverseOf) {
            throw new RangeError("Years in ".concat(era, " era must be positive, not ").concat(year));
          }
          if (matchingEra.reverseOf) {
            year = matchingEra.anchorEpoch.year - eraYear;
          } else {
            year = eraYear + matchingEra.anchorEpoch.year - (matchingEra.hasYearZero ? 0 : 1);
          }
          checkField('year', year);
          // We'll accept dates where the month/day is earlier than the start of
          // the era or after its end as long as it's in the same year. If that
          // happens, we'll adjust the era/eraYear pair to be the correct era for
          // the `year`.
          var _eraFromYear2 = eraFromYear(year);
          eraYear = _eraFromYear2.eraYear;
          era = _eraFromYear2.era;
        } else {
          throw new RangeError('Either `year` or `eraYear` and `era` are required');
        }
        return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
          year: year,
          eraYear: eraYear,
          era: era
        });
      },
      adjustCalendarDate: function adjustCalendarDate(calendarDate, cache, overflow /*, fromLegacyDate = false */) {
        // Because this is not a lunisolar calendar, it's safe to convert monthCode to a number
        var _calendarDate5 = calendarDate,
          month = _calendarDate5.month,
          monthCode = _calendarDate5.monthCode;
        if (month === undefined) calendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
          month: monthCodeNumberPart(monthCode)
        });
        this.validateCalendarDate(calendarDate);
        calendarDate = this.completeEraYear(calendarDate);
        calendarDate = Call$1(nonIsoHelperBase.adjustCalendarDate, this, [calendarDate, cache, overflow]);
        return calendarDate;
      },
      estimateIsoDate: function estimateIsoDate(calendarDate) {
        calendarDate = this.adjustCalendarDate(calendarDate);
        var _calendarDate6 = calendarDate,
          year = _calendarDate6.year,
          month = _calendarDate6.month,
          day = _calendarDate6.day;
        var anchorEra = this.anchorEra;
        var isoYearEstimate = year + anchorEra.isoEpoch.year - (anchorEra.hasYearZero ? 0 : 1);
        return RegulateISODate(isoYearEstimate, month, day, 'constrain');
      },
      // Several calendars based on the Gregorian calendar use Julian dates (not
      // proleptic Gregorian dates) before the Julian switchover in Oct 1582. See
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1173158.
      v8IsVulnerableToJulianBug: new Date('+001001-01-01T00:00Z').toLocaleDateString('en-US-u-ca-japanese', {
        timeZone: 'UTC'
      }).startsWith('12'),
      calendarIsVulnerableToJulianBug: false,
      checkIcuBugs: function checkIcuBugs(isoDate) {
        if (this.calendarIsVulnerableToJulianBug && this.v8IsVulnerableToJulianBug) {
          var beforeJulianSwitch = CompareISODate(isoDate.year, isoDate.month, isoDate.day, 1582, 10, 15) < 0;
          if (beforeJulianSwitch) {
            throw new RangeError("calendar '".concat(this.id, "' is broken for ISO dates before 1582-10-15") + ' (see https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)');
          }
        }
      }
    });
  };
  var makeHelperOrthodox = function makeHelperOrthodox(id, originalEras) {
    var base = makeHelperGregorian(id, originalEras);
    return ObjectAssign$1(base, {
      inLeapYear: function inLeapYear(calendarDate /*, cache */) {
        // Leap years happen one year before the Julian leap year. Note that this
        // calendar is based on the Julian calendar which has a leap year every 4
        // years, unlike the Gregorian calendar which doesn't have leap years on
        // years divisible by 100 except years divisible by 400.
        //
        // Note that we're assuming that leap years in before-epoch times match
        // how leap years are defined now. This is probably not accurate but I'm
        // not sure how better to do it.
        var year = calendarDate.year;
        return (year + 1) % 4 === 0;
      },
      monthsInYear: function monthsInYear() {
        return 13;
      } /* calendarDate */,
      minimumMonthLength: function minimumMonthLength(calendarDate) {
        var month = calendarDate.month;
        // Ethiopian/Coptic calendars have 12 30-day months and an extra 5-6 day 13th month.
        if (month === 13) return this.inLeapYear(calendarDate) ? 6 : 5;
        return 30;
      },
      maximumMonthLength: function maximumMonthLength(calendarDate) {
        return this.minimumMonthLength(calendarDate);
      }
    });
  };

  // `coptic` and `ethiopic` calendars are very similar to `ethioaa` calendar,
  // with the following differences:
  // - Coptic uses BCE-like positive numbers for years before its epoch (the other
  //   two use negative year numbers before epoch)
  // - Coptic has a different epoch date
  // - Ethiopic has an additional second era that starts at the same date as the
  //   zero era of ethioaa.
  var helperEthioaa = makeHelperOrthodox('ethioaa', [{
    name: 'era0',
    isoEpoch: {
      year: -5492,
      month: 7,
      day: 17
    }
  }]);
  var helperCoptic = makeHelperOrthodox('coptic', [{
    name: 'era1',
    isoEpoch: {
      year: 284,
      month: 8,
      day: 29
    }
  }, {
    name: 'era0',
    reverseOf: 'era1'
  }]);
  // Anchor is currently the older era to match ethioaa, but should it be the newer era?
  // See https://github.com/tc39/ecma402/issues/534 for discussion.
  var helperEthiopic = makeHelperOrthodox('ethiopic', [{
    name: 'era0',
    isoEpoch: {
      year: -5492,
      month: 7,
      day: 17
    }
  }, {
    name: 'era1',
    isoEpoch: {
      year: 8,
      month: 8,
      day: 27
    },
    anchorEpoch: {
      year: 5501
    }
  }]);
  var helperRoc = ObjectAssign$1({}, makeHelperGregorian('roc', [{
    name: 'minguo',
    isoEpoch: {
      year: 1912,
      month: 1,
      day: 1
    }
  }, {
    name: 'before-roc',
    reverseOf: 'minguo'
  }]), {
    calendarIsVulnerableToJulianBug: true
  });
  var helperBuddhist = ObjectAssign$1({}, makeHelperGregorian('buddhist', [{
    name: 'be',
    hasYearZero: true,
    isoEpoch: {
      year: -543,
      month: 1,
      day: 1
    }
  }]), {
    calendarIsVulnerableToJulianBug: true
  });
  var helperGregory = ObjectAssign$1({}, makeHelperGregorian('gregory', [{
    name: 'ce',
    isoEpoch: {
      year: 1,
      month: 1,
      day: 1
    }
  }, {
    name: 'bce',
    reverseOf: 'ce'
  }]), {
    reviseIntlEra: function reviseIntlEra(calendarDate /*, isoDate*/) {
      var era = calendarDate.era,
        eraYear = calendarDate.eraYear;
      // Firefox 96 introduced a bug where the `'short'` format of the era
      // option mistakenly returns the one-letter (narrow) format instead. The
      // code below handles either the correct or Firefox-buggy format. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
      if (era === 'bc' || era === 'b') era = 'bce';
      if (era === 'ad' || era === 'a') era = 'ce';
      return {
        era: era,
        eraYear: eraYear
      };
    }
  });
  var helperJapanese = ObjectAssign$1({},
  // NOTE: Only the 5 modern eras (Meiji and later) are included. For dates
  // before Meiji 1, the `ce` and `bce` eras are used. Challenges with pre-Meiji
  // eras include:
  // - Start/end dates of older eras are not precisely defined, which is
  //   challenging given Temporal's need for precision
  // - Some era dates and/or names are disputed by historians
  // - As historical research proceeds, new eras are discovered and existing era
  //   dates are modified, leading to considerable churn which is not good for
  //   Temporal use.
  //  - The earliest era (in 645 CE) may not end up being the earliest depending
  //    on future historical scholarship
  //  - Before Meiji, Japan used a lunar (or lunisolar?) calendar but AFAIK
  //    that's not reflected in the ICU implementation.
  //
  // For more discussion: https://github.com/tc39/proposal-temporal/issues/526.
  //
  // Here's a full list of CLDR/ICU eras:
  // https://github.com/unicode-org/icu/blob/master/icu4c/source/data/locales/root.txt#L1582-L1818
  // https://github.com/unicode-org/cldr/blob/master/common/supplemental/supplementalData.xml#L4310-L4546
  //
  // NOTE: Japan started using the Gregorian calendar in 6 Meiji, replacing a
  // lunisolar calendar. So the day before January 1 of 6 Meiji (1873) was not
  // December 31, but December 2, of 5 Meiji (1872). The existing Ecma-402
  // Japanese calendar doesn't seem to take this into account, so neither do we:
  // > args = ['en-ca-u-ca-japanese', { era: 'short' }]
  // > new Date('1873-01-01T12:00').toLocaleString(...args)
  // '1 1, 6 Meiji, 12:00:00 PM'
  // > new Date('1872-12-31T12:00').toLocaleString(...args)
  // '12 31, 5 Meiji, 12:00:00 PM'
  makeHelperGregorian('japanese', [
  // The Japanese calendar `year` is just the ISO year, because (unlike other
  // ICU calendars) there's no obvious "default era", we use the ISO year.
  {
    name: 'reiwa',
    isoEpoch: {
      year: 2019,
      month: 5,
      day: 1
    },
    anchorEpoch: {
      year: 2019,
      month: 5,
      day: 1
    }
  }, {
    name: 'heisei',
    isoEpoch: {
      year: 1989,
      month: 1,
      day: 8
    },
    anchorEpoch: {
      year: 1989,
      month: 1,
      day: 8
    }
  }, {
    name: 'showa',
    isoEpoch: {
      year: 1926,
      month: 12,
      day: 25
    },
    anchorEpoch: {
      year: 1926,
      month: 12,
      day: 25
    }
  }, {
    name: 'taisho',
    isoEpoch: {
      year: 1912,
      month: 7,
      day: 30
    },
    anchorEpoch: {
      year: 1912,
      month: 7,
      day: 30
    }
  }, {
    name: 'meiji',
    isoEpoch: {
      year: 1868,
      month: 9,
      day: 8
    },
    anchorEpoch: {
      year: 1868,
      month: 9,
      day: 8
    }
  }, {
    name: 'ce',
    isoEpoch: {
      year: 1,
      month: 1,
      day: 1
    }
  }, {
    name: 'bce',
    reverseOf: 'ce'
  }]), {
    // The last 3 Japanese eras confusingly return only one character in the
    // default "short" era, so need to use the long format.
    eraLength: 'long',
    erasBeginMidYear: true,
    calendarIsVulnerableToJulianBug: true,
    reviseIntlEra: function reviseIntlEra(calendarDate, isoDate) {
      var era = calendarDate.era,
        eraYear = calendarDate.eraYear;
      var isoYear = isoDate.year;
      if (this.eras.find(function (e) {
        return e.name === era;
      })) return {
        era: era,
        eraYear: eraYear
      };
      return isoYear < 1 ? {
        era: 'bce',
        eraYear: 1 - isoYear
      } : {
        era: 'ce',
        eraYear: isoYear
      };
    }
  });
  var helperChinese = ObjectAssign$1({}, nonIsoHelperBase, {
    id: 'chinese',
    calendarType: 'lunisolar',
    inLeapYear: function inLeapYear(calendarDate, cache) {
      var months = this.getMonthList(calendarDate.year, cache);
      return ObjectEntries(months).length === 13;
    },
    monthsInYear: function monthsInYear(calendarDate, cache) {
      return this.inLeapYear(calendarDate, cache) ? 13 : 12;
    },
    minimumMonthLength: function minimumMonthLength( /* calendarDate */) {
      return 29;
    },
    maximumMonthLength: function maximumMonthLength( /* calendarDate */) {
      return 30;
    },
    getMonthList: function getMonthList(calendarYear, cache) {
      var _this4 = this;
      if (calendarYear === undefined) {
        throw new TypeError('Missing year');
      }
      var key = JSON.stringify({
        func: 'getMonthList',
        calendarYear: calendarYear,
        id: this.id
      });
      var cached = cache.get(key);
      if (cached) return cached;
      var dateTimeFormat = this.getFormatter();
      var getCalendarDate = function getCalendarDate(isoYear, daysPastFeb1) {
        var isoStringFeb1 = toUtcIsoDateString({
          isoYear: isoYear,
          isoMonth: 2,
          isoDay: 1
        });
        var legacyDate = new Date(isoStringFeb1);
        // Now add the requested number of days, which may wrap to the next month.
        legacyDate.setUTCDate(daysPastFeb1 + 1);
        var newYearGuess = dateTimeFormat.formatToParts(legacyDate);
        var calendarMonthString = newYearGuess.find(function (tv) {
          return tv.type === 'month';
        }).value;
        var calendarDay = +newYearGuess.find(function (tv) {
          return tv.type === 'day';
        }).value;
        var calendarYearToVerify = newYearGuess.find(function (tv) {
          return tv.type === 'relatedYear';
        });
        if (calendarYearToVerify !== undefined) {
          calendarYearToVerify = +calendarYearToVerify.value;
        } else {
          // Node 12 has outdated ICU data that lacks the `relatedYear` field in the
          // output of Intl.DateTimeFormat.formatToParts.
          throw new RangeError("Intl.DateTimeFormat.formatToParts lacks relatedYear in ".concat(_this4.id, " calendar. Try Node 14+ or modern browsers."));
        }
        return {
          calendarMonthString: calendarMonthString,
          calendarDay: calendarDay,
          calendarYearToVerify: calendarYearToVerify
        };
      };

      // First, find a date close to Chinese New Year. Feb 17 will either be in
      // the first month or near the end of the last month of the previous year.
      var isoDaysDelta = 17;
      var _getCalendarDate = getCalendarDate(calendarYear, isoDaysDelta),
        calendarMonthString = _getCalendarDate.calendarMonthString,
        calendarDay = _getCalendarDate.calendarDay,
        calendarYearToVerify = _getCalendarDate.calendarYearToVerify;

      // If we didn't guess the first month correctly, add (almost in some months)
      // a lunar month
      if (calendarMonthString !== '1') {
        isoDaysDelta += 29;
        var _getCalendarDate2 = getCalendarDate(calendarYear, isoDaysDelta);
        calendarMonthString = _getCalendarDate2.calendarMonthString;
        calendarDay = _getCalendarDate2.calendarDay;
      }

      // Now back up to near the start of the first month, but not too near that
      // off-by-one issues matter.
      isoDaysDelta -= calendarDay - 5;
      var result = {};
      var monthIndex = 1;
      var oldCalendarDay;
      var oldMonthString;
      var done = false;
      do {
        var _getCalendarDate3 = getCalendarDate(calendarYear, isoDaysDelta);
        calendarMonthString = _getCalendarDate3.calendarMonthString;
        calendarDay = _getCalendarDate3.calendarDay;
        calendarYearToVerify = _getCalendarDate3.calendarYearToVerify;
        if (oldCalendarDay) {
          result[oldMonthString].daysInMonth = oldCalendarDay + 30 - calendarDay;
        }
        if (calendarYearToVerify !== calendarYear) {
          done = true;
        } else {
          result[calendarMonthString] = {
            monthIndex: monthIndex++
          };
          // Move to the next month. Because months are sometimes 29 days, the day of the
          // calendar month will move forward slowly but not enough to flip over to a new
          // month before the loop ends at 12-13 months.
          isoDaysDelta += 30;
        }
        oldCalendarDay = calendarDay;
        oldMonthString = calendarMonthString;
      } while (!done);
      result[oldMonthString].daysInMonth = oldCalendarDay + 30 - calendarDay;
      cache.set(key, result);
      return result;
    },
    estimateIsoDate: function estimateIsoDate(calendarDate) {
      var year = calendarDate.year,
        month = calendarDate.month;
      return {
        year: year,
        month: month >= 12 ? 12 : month + 1,
        day: 1
      };
    },
    adjustCalendarDate: function adjustCalendarDate(calendarDate, cache) {
      var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
      var fromLegacyDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var year = calendarDate.year,
        month = calendarDate.month,
        monthExtra = calendarDate.monthExtra,
        day = calendarDate.day,
        monthCode = calendarDate.monthCode,
        eraYear = calendarDate.eraYear;
      if (fromLegacyDate) {
        // Legacy Date output returns a string that's an integer with an optional
        // "bis" suffix used only by the Chinese/Dangi calendar to indicate a leap
        // month. Below we'll normalize the output.
        year = eraYear;
        if (monthExtra && monthExtra !== 'bis') throw new RangeError("Unexpected leap month suffix: ".concat(monthExtra));
        var _monthCode = buildMonthCode(month, monthExtra !== undefined);
        var monthString = "".concat(month).concat(monthExtra || '');
        var months = this.getMonthList(year, cache);
        var monthInfo = months[monthString];
        if (monthInfo === undefined) throw new RangeError("Unmatched month ".concat(monthString, " in Chinese year ").concat(year));
        month = monthInfo.monthIndex;
        return {
          year: year,
          month: month,
          day: day,
          era: undefined,
          eraYear: eraYear,
          monthCode: _monthCode
        };
      } else {
        // When called without input coming from legacy Date output,
        // simply ensure that all fields are present.
        this.validateCalendarDate(calendarDate);
        if (year === undefined) year = eraYear;
        if (eraYear === undefined) eraYear = year;
        if (month === undefined) {
          var _months = this.getMonthList(year, cache);
          var numberPart = monthCode.replace('L', 'bis').slice(1);
          if (numberPart[0] === '0') numberPart = numberPart.slice(1);
          var _monthInfo = _months[numberPart];
          month = _monthInfo && _monthInfo.monthIndex;
          // If this leap month isn't present in this year, constrain to the same
          // day of the previous month.
          if (month === undefined && monthCode.endsWith('L') && monthCode != 'M13L' && overflow === 'constrain') {
            var withoutML = monthCode.slice(1, -1);
            if (withoutML[0] === '0') withoutML = withoutML.slice(1);
            _monthInfo = _months[withoutML];
            if (_monthInfo) {
              month = _monthInfo.monthIndex;
              monthCode = buildMonthCode(withoutML);
            }
          }
          if (month === undefined) {
            throw new RangeError("Unmatched month ".concat(monthCode, " in Chinese year ").concat(year));
          }
        } else if (monthCode === undefined) {
          var _months2 = this.getMonthList(year, cache);
          var monthEntries = ObjectEntries(_months2);
          var largestMonth = monthEntries.length;
          if (overflow === 'reject') {
            RejectToRange(month, 1, largestMonth);
            RejectToRange(day, 1, this.maximumMonthLength());
          } else {
            month = ConstrainToRange(month, 1, largestMonth);
            day = ConstrainToRange(day, 1, this.maximumMonthLength());
          }
          var matchingMonthEntry = monthEntries.find(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              v = _ref4[1];
            return v.monthIndex === month;
          });
          if (matchingMonthEntry === undefined) {
            throw new RangeError("Invalid month ".concat(month, " in Chinese year ").concat(year));
          }
          monthCode = buildMonthCode(matchingMonthEntry[0].replace('bis', ''), matchingMonthEntry[0].indexOf('bis') !== -1);
        } else {
          // Both month and monthCode are present. Make sure they don't conflict.
          var _months3 = this.getMonthList(year, cache);
          var _numberPart = monthCode.replace('L', 'bis').slice(1);
          if (_numberPart[0] === '0') _numberPart = _numberPart.slice(1);
          var _monthInfo2 = _months3[_numberPart];
          if (!_monthInfo2) throw new RangeError("Unmatched monthCode ".concat(monthCode, " in Chinese year ").concat(year));
          if (month !== _monthInfo2.monthIndex) {
            throw new RangeError("monthCode ".concat(monthCode, " doesn't correspond to month ").concat(month, " in Chinese year ").concat(year));
          }
        }
        return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
          year: year,
          eraYear: eraYear,
          month: month,
          monthCode: monthCode,
          day: day
        });
      }
    },
    // All built-in calendars except Chinese/Dangi and Hebrew use an era
    hasEra: false
  });

  // Dangi (Korean) calendar has same implementation as Chinese
  var helperDangi = ObjectAssign$1({}, _objectSpread2(_objectSpread2({}, helperChinese), {}, {
    id: 'dangi'
  }));

  /**
   * Common implementation of all non-ISO calendars.
   * Per-calendar id and logic live in `id` and `helper` properties attached later.
   * This split allowed an easy separation between code that was similar between
   * ISO and non-ISO implementations vs. code that was very different.
   */
  var nonIsoGeneralImpl = {
    dateFromFields: function dateFromFields(fields, options, calendarSlotValue) {
      var cache = new OneObjectCache();
      var fieldNames = this.fields(['day', 'month', 'monthCode', 'year']);
      fields = PrepareTemporalFields(fields, fieldNames, []);
      var overflow = ToTemporalOverflow(options);
      var _this$helper$calendar = this.helper.calendarToIsoDate(fields, overflow, cache),
        year = _this$helper$calendar.year,
        month = _this$helper$calendar.month,
        day = _this$helper$calendar.day;
      var result = CreateTemporalDate(year, month, day, calendarSlotValue);
      cache.setObject(result);
      return result;
    },
    yearMonthFromFields: function yearMonthFromFields(fields, options, calendarSlotValue) {
      var cache = new OneObjectCache();
      var fieldNames = this.fields(['month', 'monthCode', 'year']);
      fields = PrepareTemporalFields(fields, fieldNames, []);
      var overflow = ToTemporalOverflow(options);
      var _this$helper$calendar2 = this.helper.calendarToIsoDate(_objectSpread2(_objectSpread2({}, fields), {}, {
          day: 1
        }), overflow, cache),
        year = _this$helper$calendar2.year,
        month = _this$helper$calendar2.month,
        day = _this$helper$calendar2.day;
      var result = CreateTemporalYearMonth(year, month, calendarSlotValue, /* referenceISODay = */day);
      cache.setObject(result);
      return result;
    },
    monthDayFromFields: function monthDayFromFields(fields, options, calendarSlotValue) {
      var cache = new OneObjectCache();
      // For lunisolar calendars, either `monthCode` or `year` must be provided
      // because `month` is ambiguous without a year or a code.
      var fieldNames = this.fields(['day', 'month', 'monthCode', 'year']);
      fields = PrepareTemporalFields(fields, fieldNames, []);
      var overflow = ToTemporalOverflow(options);
      var _this$helper$monthDay = this.helper.monthDayFromFields(fields, overflow, cache),
        year = _this$helper$monthDay.year,
        month = _this$helper$monthDay.month,
        day = _this$helper$monthDay.day;
      // `year` is a reference year where this month/day exists in this calendar
      var result = CreateTemporalMonthDay(month, day, calendarSlotValue, /* referenceISOYear = */year);
      cache.setObject(result);
      return result;
    },
    fields: function fields(_fields6) {
      if (Call$1(ArrayIncludes, _fields6, ['year'])) _fields6 = [].concat(_toConsumableArray(_fields6), ['era', 'eraYear']);
      return _fields6;
    },
    fieldKeysToIgnore: function fieldKeysToIgnore(keys) {
      var result = new OriginalSet();
      for (var ix = 0; ix < keys.length; ix++) {
        var key = keys[ix];
        Call$1(SetPrototypeAdd$2, result, [key]);
        switch (key) {
          case 'era':
            Call$1(SetPrototypeAdd$2, result, ['eraYear']);
            Call$1(SetPrototypeAdd$2, result, ['year']);
            break;
          case 'eraYear':
            Call$1(SetPrototypeAdd$2, result, ['era']);
            Call$1(SetPrototypeAdd$2, result, ['year']);
            break;
          case 'year':
            Call$1(SetPrototypeAdd$2, result, ['era']);
            Call$1(SetPrototypeAdd$2, result, ['eraYear']);
            break;
          case 'month':
            Call$1(SetPrototypeAdd$2, result, ['monthCode']);
            // See https://github.com/tc39/proposal-temporal/issues/1784
            if (this.helper.erasBeginMidYear) {
              Call$1(SetPrototypeAdd$2, result, ['era']);
              Call$1(SetPrototypeAdd$2, result, ['eraYear']);
            }
            break;
          case 'monthCode':
            Call$1(SetPrototypeAdd$2, result, ['month']);
            if (this.helper.erasBeginMidYear) {
              Call$1(SetPrototypeAdd$2, result, ['era']);
              Call$1(SetPrototypeAdd$2, result, ['eraYear']);
            }
            break;
          case 'day':
            if (this.helper.erasBeginMidYear) {
              Call$1(SetPrototypeAdd$2, result, ['era']);
              Call$1(SetPrototypeAdd$2, result, ['eraYear']);
            }
            break;
        }
      }
      return _toConsumableArray(Call$1(SetPrototypeValues, result, []));
    },
    dateAdd: function dateAdd(date, years, months, weeks, days, overflow, calendarSlotValue) {
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      var added = this.helper.addCalendar(calendarDate, {
        years: years,
        months: months,
        weeks: weeks,
        days: days
      }, overflow, cache);
      var isoAdded = this.helper.calendarToIsoDate(added, 'constrain', cache);
      var year = isoAdded.year,
        month = isoAdded.month,
        day = isoAdded.day;
      var newTemporalObject = CreateTemporalDate(year, month, day, calendarSlotValue);
      // The new object's cache starts with the cache of the old object
      var newCache = new OneObjectCache(cache);
      newCache.setObject(newTemporalObject);
      return newTemporalObject;
    },
    dateUntil: function dateUntil(one, two, largestUnit) {
      var cacheOne = OneObjectCache.getCacheForObject(one);
      var cacheTwo = OneObjectCache.getCacheForObject(two);
      var calendarOne = this.helper.temporalToCalendarDate(one, cacheOne);
      var calendarTwo = this.helper.temporalToCalendarDate(two, cacheTwo);
      var result = this.helper.untilCalendar(calendarOne, calendarTwo, largestUnit, cacheOne);
      return result;
    },
    year: function year(date) {
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      return calendarDate.year;
    },
    month: function month(date) {
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      return calendarDate.month;
    },
    day: function day(date) {
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      return calendarDate.day;
    },
    era: function era(date) {
      if (!this.helper.hasEra) return undefined;
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      return calendarDate.era;
    },
    eraYear: function eraYear(date) {
      if (!this.helper.hasEra) return undefined;
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      return calendarDate.eraYear;
    },
    monthCode: function monthCode(date) {
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      return calendarDate.monthCode;
    },
    dayOfWeek: function dayOfWeek(date) {
      return impl['iso8601'].dayOfWeek(date);
    },
    dayOfYear: function dayOfYear(date) {
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.isoToCalendarDate(date, cache);
      var startOfYear = this.helper.startOfCalendarYear(calendarDate);
      var diffDays = this.helper.calendarDaysUntil(startOfYear, calendarDate, cache);
      return diffDays + 1;
    },
    weekOfYear: function weekOfYear(date) {
      return impl['iso8601'].weekOfYear(date);
    },
    yearOfWeek: function yearOfWeek(date) {
      return impl['iso8601'].yearOfWeek(date);
    },
    daysInWeek: function daysInWeek(date) {
      return impl['iso8601'].daysInWeek(date);
    },
    daysInMonth: function daysInMonth(date) {
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);

      // Easy case: if the helper knows the length without any heavy calculation.
      var max = this.helper.maximumMonthLength(calendarDate);
      var min = this.helper.minimumMonthLength(calendarDate);
      if (max === min) return max;

      // The harder case is where months vary every year, e.g. islamic calendars.
      // Find the answer by calculating the difference in days between the first
      // day of the current month and the first day of the next month.
      var startOfMonthCalendar = this.helper.startOfCalendarMonth(calendarDate);
      var startOfNextMonthCalendar = this.helper.addMonthsCalendar(startOfMonthCalendar, 1, 'constrain', cache);
      var result = this.helper.calendarDaysUntil(startOfMonthCalendar, startOfNextMonthCalendar, cache);
      return result;
    },
    daysInYear: function daysInYear(date) {
      if (!HasSlot(date, ISO_YEAR)) date = ToTemporalDate(date);
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      var startOfYearCalendar = this.helper.startOfCalendarYear(calendarDate);
      var startOfNextYearCalendar = this.helper.addCalendar(startOfYearCalendar, {
        years: 1
      }, 'constrain', cache);
      var result = this.helper.calendarDaysUntil(startOfYearCalendar, startOfNextYearCalendar, cache);
      return result;
    },
    monthsInYear: function monthsInYear(date) {
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      var result = this.helper.monthsInYear(calendarDate, cache);
      return result;
    },
    inLeapYear: function inLeapYear(date) {
      if (!HasSlot(date, ISO_YEAR)) date = ToTemporalDate(date);
      var cache = OneObjectCache.getCacheForObject(date);
      var calendarDate = this.helper.temporalToCalendarDate(date, cache);
      var result = this.helper.inLeapYear(calendarDate, cache);
      return result;
    }
  };
  impl['hebrew'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperHebrew
  });
  impl['islamic'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperIslamic
  });
  ['islamic-umalqura', 'islamic-tbla', 'islamic-civil', 'islamic-rgsa', 'islamicc'].forEach(function (id) {
    impl[id] = ObjectAssign$1({}, nonIsoGeneralImpl, {
      helper: _objectSpread2(_objectSpread2({}, helperIslamic), {}, {
        id: id
      })
    });
  });
  impl['persian'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperPersian
  });
  impl['ethiopic'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperEthiopic
  });
  impl['ethioaa'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperEthioaa
  });
  impl['coptic'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperCoptic
  });
  impl['chinese'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperChinese
  });
  impl['dangi'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperDangi
  });
  impl['roc'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperRoc
  });
  impl['indian'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperIndian
  });
  impl['buddhist'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperBuddhist
  });
  impl['japanese'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperJapanese
  });
  impl['gregory'] = ObjectAssign$1({}, nonIsoGeneralImpl, {
    helper: helperGregory
  });

  var PlainDate = /*#__PURE__*/function () {
    function PlainDate(isoYear, isoMonth, isoDay) {
      var calendar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'iso8601';
      _classCallCheck(this, PlainDate);
      isoYear = ToIntegerWithTruncation(isoYear);
      isoMonth = ToIntegerWithTruncation(isoMonth);
      isoDay = ToIntegerWithTruncation(isoDay);
      calendar = ToTemporalCalendarSlotValue(calendar);
      CreateTemporalDateSlots(this, isoYear, isoMonth, isoDay, calendar);
    }
    _createClass(PlainDate, [{
      key: "calendarId",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarIdentifier(GetSlot(this, CALENDAR));
      }
    }, {
      key: "era",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarEra(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "eraYear",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarEraYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "year",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "month",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarMonth(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "monthCode",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "day",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarDay(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "dayOfWeek",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarDayOfWeek(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "dayOfYear",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarDayOfYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "weekOfYear",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarWeekOfYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "yearOfWeek",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarYearOfWeek(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "daysInWeek",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInWeek(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "daysInYear",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "monthsInYear",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "inLeapYear",
      get: function get() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "with",
      value: function _with(temporalDateLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        if (Type$6(temporalDateLike) !== 'Object') {
          throw new TypeError('invalid argument');
        }
        RejectTemporalLikeObject(temporalDateLike);
        options = GetOptionsObject(options);
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['day', 'month', 'monthCode', 'year']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        var partialDate = PrepareTemporalFields(temporalDateLike, fieldNames, 'partial');
        fields = CalendarMergeFields(calendar, fields, partialDate);
        fields = PrepareTemporalFields(fields, fieldNames, []);
        return CalendarDateFromFields(calendar, fields, options);
      }
    }, {
      key: "withCalendar",
      value: function withCalendar(calendar) {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        calendar = ToTemporalCalendarSlotValue(calendar);
        return new PlainDate(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), calendar);
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var duration = ToTemporalDuration(temporalDurationLike);
        options = GetOptionsObject(options);
        return CalendarDateAdd(GetSlot(this, CALENDAR), this, duration, options);
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var duration = CreateNegatedTemporalDuration(ToTemporalDuration(temporalDurationLike));
        options = GetOptionsObject(options);
        return CalendarDateAdd(GetSlot(this, CALENDAR), this, duration, options);
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalPlainDate('until', this, other, options);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalPlainDate('since', this, other, options);
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        other = ToTemporalDate(other);
        if (GetSlot(this, ISO_YEAR) !== GetSlot(other, ISO_YEAR)) return false;
        if (GetSlot(this, ISO_MONTH) !== GetSlot(other, ISO_MONTH)) return false;
        if (GetSlot(this, ISO_DAY) !== GetSlot(other, ISO_DAY)) return false;
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var showCalendar = ToCalendarNameOption(options);
        return TemporalDateToString(this, showCalendar);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return TemporalDateToString(this);
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.PlainDate');
      }
    }, {
      key: "toPlainDateTime",
      value: function toPlainDateTime() {
        var temporalTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY);
        var calendar = GetSlot(this, CALENDAR);
        if (temporalTime === undefined) return CreateTemporalDateTime(year, month, day, 0, 0, 0, 0, 0, 0, calendar);
        temporalTime = ToTemporalTime(temporalTime);
        var hour = GetSlot(temporalTime, ISO_HOUR);
        var minute = GetSlot(temporalTime, ISO_MINUTE);
        var second = GetSlot(temporalTime, ISO_SECOND);
        var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
        var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
        var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      }
    }, {
      key: "toZonedDateTime",
      value: function toZonedDateTime(item) {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var timeZone, temporalTime;
        if (Type$6(item) === 'Object') {
          if (IsTemporalTimeZone(item)) {
            timeZone = item;
          } else {
            var timeZoneLike = item.timeZone;
            if (timeZoneLike === undefined) {
              timeZone = ToTemporalTimeZoneSlotValue(item);
            } else {
              timeZone = ToTemporalTimeZoneSlotValue(timeZoneLike);
              temporalTime = item.plainTime;
            }
          }
        } else {
          timeZone = ToTemporalTimeZoneSlotValue(item);
        }
        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY);
        var calendar = GetSlot(this, CALENDAR);
        var hour = 0,
          minute = 0,
          second = 0,
          millisecond = 0,
          microsecond = 0,
          nanosecond = 0;
        if (temporalTime !== undefined) {
          temporalTime = ToTemporalTime(temporalTime);
          hour = GetSlot(temporalTime, ISO_HOUR);
          minute = GetSlot(temporalTime, ISO_MINUTE);
          second = GetSlot(temporalTime, ISO_SECOND);
          millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
          microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
          nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        }
        var dt = CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        var instant = GetInstantFor(timeZone, dt, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "toPlainYearMonth",
      value: function toPlainYearMonth() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        return CalendarYearMonthFromFields(calendar, fields);
      }
    }, {
      key: "toPlainMonthDay",
      value: function toPlainMonthDay() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        return CalendarMonthDayFromFields(calendar, fields);
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(this, ISO_DAY),
          isoMonth: GetSlot(this, ISO_MONTH),
          isoYear: GetSlot(this, ISO_YEAR)
        };
      }
    }, {
      key: "getCalendar",
      value: function getCalendar() {
        if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarObject(GetSlot(this, CALENDAR));
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = GetOptionsObject(options);
        if (IsTemporalDate(item)) {
          ToTemporalOverflow(options); // validate and ignore
          return CreateTemporalDate(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR));
        }
        return ToTemporalDate(item, options);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ToTemporalDate(one);
        two = ToTemporalDate(two);
        return CompareISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
      }
    }]);
    return PlainDate;
  }();
  MakeIntrinsicClass(PlainDate, 'Temporal.PlainDate');

  var ObjectCreate$5 = Object.create;
  var PlainDateTime = /*#__PURE__*/function () {
    function PlainDateTime(isoYear, isoMonth, isoDay) {
      var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var minute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var second = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var millisecond = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var microsecond = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var nanosecond = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var calendar = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 'iso8601';
      _classCallCheck(this, PlainDateTime);
      isoYear = ToIntegerWithTruncation(isoYear);
      isoMonth = ToIntegerWithTruncation(isoMonth);
      isoDay = ToIntegerWithTruncation(isoDay);
      hour = hour === undefined ? 0 : ToIntegerWithTruncation(hour);
      minute = minute === undefined ? 0 : ToIntegerWithTruncation(minute);
      second = second === undefined ? 0 : ToIntegerWithTruncation(second);
      millisecond = millisecond === undefined ? 0 : ToIntegerWithTruncation(millisecond);
      microsecond = microsecond === undefined ? 0 : ToIntegerWithTruncation(microsecond);
      nanosecond = nanosecond === undefined ? 0 : ToIntegerWithTruncation(nanosecond);
      calendar = ToTemporalCalendarSlotValue(calendar);
      CreateTemporalDateTimeSlots(this, isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    _createClass(PlainDateTime, [{
      key: "calendarId",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarIdentifier(GetSlot(this, CALENDAR));
      }
    }, {
      key: "year",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "month",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarMonth(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "monthCode",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "day",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDay(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "hour",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_HOUR);
      }
    }, {
      key: "minute",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MINUTE);
      }
    }, {
      key: "second",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_SECOND);
      }
    }, {
      key: "millisecond",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MILLISECOND);
      }
    }, {
      key: "microsecond",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MICROSECOND);
      }
    }, {
      key: "nanosecond",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_NANOSECOND);
      }
    }, {
      key: "era",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarEra(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "eraYear",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarEraYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "dayOfWeek",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDayOfWeek(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "dayOfYear",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDayOfYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "weekOfYear",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarWeekOfYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "yearOfWeek",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarYearOfWeek(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "daysInWeek",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInWeek(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "daysInYear",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "monthsInYear",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "inLeapYear",
      get: function get() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "with",
      value: function _with(temporalDateTimeLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        if (Type$6(temporalDateTimeLike) !== 'Object') {
          throw new TypeError('invalid argument');
        }
        RejectTemporalLikeObject(temporalDateTimeLike);
        options = GetOptionsObject(options);
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        var partialDateTime = PrepareTemporalFields(temporalDateTimeLike, fieldNames, 'partial');
        fields = CalendarMergeFields(calendar, fields, partialDateTime);
        fields = PrepareTemporalFields(fields, fieldNames, []);
        var _ES$InterpretTemporal = InterpretTemporalDateTimeFields(calendar, fields, options),
          year = _ES$InterpretTemporal.year,
          month = _ES$InterpretTemporal.month,
          day = _ES$InterpretTemporal.day,
          hour = _ES$InterpretTemporal.hour,
          minute = _ES$InterpretTemporal.minute,
          second = _ES$InterpretTemporal.second,
          millisecond = _ES$InterpretTemporal.millisecond,
          microsecond = _ES$InterpretTemporal.microsecond,
          nanosecond = _ES$InterpretTemporal.nanosecond;
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      }
    }, {
      key: "withPlainTime",
      value: function withPlainTime() {
        var temporalTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY);
        var calendar = GetSlot(this, CALENDAR);
        if (temporalTime === undefined) return CreateTemporalDateTime(year, month, day, 0, 0, 0, 0, 0, 0, calendar);
        temporalTime = ToTemporalTime(temporalTime);
        var hour = GetSlot(temporalTime, ISO_HOUR);
        var minute = GetSlot(temporalTime, ISO_MINUTE);
        var second = GetSlot(temporalTime, ISO_SECOND);
        var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
        var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
        var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      }
    }, {
      key: "withPlainDate",
      value: function withPlainDate(temporalDate) {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        temporalDate = ToTemporalDate(temporalDate);
        var year = GetSlot(temporalDate, ISO_YEAR);
        var month = GetSlot(temporalDate, ISO_MONTH);
        var day = GetSlot(temporalDate, ISO_DAY);
        var calendar = GetSlot(temporalDate, CALENDAR);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);
        calendar = ConsolidateCalendars(GetSlot(this, CALENDAR), calendar);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      }
    }, {
      key: "withCalendar",
      value: function withCalendar(calendar) {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        calendar = ToTemporalCalendarSlotValue(calendar);
        return new PlainDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar);
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromPlainDateTime('add', this, temporalDurationLike, options);
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromPlainDateTime('subtract', this, temporalDurationLike, options);
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalPlainDateTime('until', this, other, options);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalPlainDateTime('since', this, other, options);
      }
    }, {
      key: "round",
      value: function round(roundTo) {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        if (roundTo === undefined) throw new TypeError('options parameter is required');
        if (Type$6(roundTo) === 'String') {
          var stringParam = roundTo;
          roundTo = ObjectCreate$5(null);
          roundTo.smallestUnit = stringParam;
        } else {
          roundTo = GetOptionsObject(roundTo);
        }
        var roundingIncrement = ToTemporalRoundingIncrement(roundTo);
        var roundingMode = ToTemporalRoundingMode(roundTo, 'halfExpand');
        var smallestUnit = GetTemporalUnit(roundTo, 'smallestUnit', 'time', REQUIRED, ['day']);
        var maximumIncrements = {
          day: 1,
          hour: 24,
          minute: 60,
          second: 60,
          millisecond: 1000,
          microsecond: 1000,
          nanosecond: 1000
        };
        var maximum = maximumIncrements[smallestUnit];
        var inclusive = maximum === 1;
        ValidateTemporalRoundingIncrement(roundingIncrement, maximum, inclusive);
        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);
        var _ES$RoundISODateTime = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);
        year = _ES$RoundISODateTime.year;
        month = _ES$RoundISODateTime.month;
        day = _ES$RoundISODateTime.day;
        hour = _ES$RoundISODateTime.hour;
        minute = _ES$RoundISODateTime.minute;
        second = _ES$RoundISODateTime.second;
        millisecond = _ES$RoundISODateTime.millisecond;
        microsecond = _ES$RoundISODateTime.microsecond;
        nanosecond = _ES$RoundISODateTime.nanosecond;
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, GetSlot(this, CALENDAR));
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        other = ToTemporalDateTime(other);
        if (GetSlot(this, ISO_YEAR) !== GetSlot(other, ISO_YEAR)) return false;
        if (GetSlot(this, ISO_MONTH) !== GetSlot(other, ISO_MONTH)) return false;
        if (GetSlot(this, ISO_DAY) !== GetSlot(other, ISO_DAY)) return false;
        if (GetSlot(this, ISO_HOUR) !== GetSlot(other, ISO_HOUR)) return false;
        if (GetSlot(this, ISO_MINUTE) !== GetSlot(other, ISO_MINUTE)) return false;
        if (GetSlot(this, ISO_SECOND) !== GetSlot(other, ISO_SECOND)) return false;
        if (GetSlot(this, ISO_MILLISECOND) !== GetSlot(other, ISO_MILLISECOND)) return false;
        if (GetSlot(this, ISO_MICROSECOND) !== GetSlot(other, ISO_MICROSECOND)) return false;
        if (GetSlot(this, ISO_NANOSECOND) !== GetSlot(other, ISO_NANOSECOND)) return false;
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var showCalendar = ToCalendarNameOption(options);
        var digits = ToFractionalSecondDigits(options);
        var roundingMode = ToTemporalRoundingMode(options, 'trunc');
        var smallestUnit = GetTemporalUnit(options, 'smallestUnit', 'time', undefined);
        if (smallestUnit === 'hour') throw new RangeError('smallestUnit must be a time unit other than "hour"');
        var _ES$ToSecondsStringPr = ToSecondsStringPrecisionRecord(smallestUnit, digits),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;
        return TemporalDateTimeToString(this, precision, showCalendar, {
          unit: unit,
          increment: increment,
          roundingMode: roundingMode
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return TemporalDateTimeToString(this, 'auto');
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.PlainDateTime');
      }
    }, {
      key: "toZonedDateTime",
      value: function toZonedDateTime(temporalTimeZoneLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var timeZone = ToTemporalTimeZoneSlotValue(temporalTimeZoneLike);
        options = GetOptionsObject(options);
        var disambiguation = ToTemporalDisambiguation(options);
        var instant = GetInstantFor(timeZone, this, disambiguation);
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
      }
    }, {
      key: "toPlainDate",
      value: function toPlainDate() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return TemporalDateTimeToDate(this);
      }
    }, {
      key: "toPlainYearMonth",
      value: function toPlainYearMonth() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        return CalendarYearMonthFromFields(calendar, fields);
      }
    }, {
      key: "toPlainMonthDay",
      value: function toPlainMonthDay() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        return CalendarMonthDayFromFields(calendar, fields);
      }
    }, {
      key: "toPlainTime",
      value: function toPlainTime() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return TemporalDateTimeToTime(this);
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(this, ISO_DAY),
          isoHour: GetSlot(this, ISO_HOUR),
          isoMicrosecond: GetSlot(this, ISO_MICROSECOND),
          isoMillisecond: GetSlot(this, ISO_MILLISECOND),
          isoMinute: GetSlot(this, ISO_MINUTE),
          isoMonth: GetSlot(this, ISO_MONTH),
          isoNanosecond: GetSlot(this, ISO_NANOSECOND),
          isoSecond: GetSlot(this, ISO_SECOND),
          isoYear: GetSlot(this, ISO_YEAR)
        };
      }
    }, {
      key: "getCalendar",
      value: function getCalendar() {
        if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarObject(GetSlot(this, CALENDAR));
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = GetOptionsObject(options);
        if (IsTemporalDateTime(item)) {
          ToTemporalOverflow(options); // validate and ignore
          return CreateTemporalDateTime(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND), GetSlot(item, CALENDAR));
        }
        return ToTemporalDateTime(item, options);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ToTemporalDateTime(one);
        two = ToTemporalDateTime(two);
        var slots = [ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND];
        for (var index = 0; index < slots.length; index++) {
          var slot = slots[index];
          var val1 = GetSlot(one, slot);
          var val2 = GetSlot(two, slot);
          if (val1 !== val2) return ComparisonResult(val1 - val2);
        }
        return 0;
      }
    }]);
    return PlainDateTime;
  }();
  MakeIntrinsicClass(PlainDateTime, 'Temporal.PlainDateTime');

  var ObjectCreate$4 = Object.create;
  var Duration = /*#__PURE__*/function () {
    function Duration() {
      var years = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var months = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var weeks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var days = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var hours = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var minutes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var seconds = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var milliseconds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var microseconds = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var nanoseconds = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      _classCallCheck(this, Duration);
      years = years === undefined ? 0 : ToIntegerIfIntegral(years);
      months = months === undefined ? 0 : ToIntegerIfIntegral(months);
      weeks = weeks === undefined ? 0 : ToIntegerIfIntegral(weeks);
      days = days === undefined ? 0 : ToIntegerIfIntegral(days);
      hours = hours === undefined ? 0 : ToIntegerIfIntegral(hours);
      minutes = minutes === undefined ? 0 : ToIntegerIfIntegral(minutes);
      seconds = seconds === undefined ? 0 : ToIntegerIfIntegral(seconds);
      milliseconds = milliseconds === undefined ? 0 : ToIntegerIfIntegral(milliseconds);
      microseconds = microseconds === undefined ? 0 : ToIntegerIfIntegral(microseconds);
      nanoseconds = nanoseconds === undefined ? 0 : ToIntegerIfIntegral(nanoseconds);
      RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      CreateSlots(this);
      SetSlot(this, YEARS, years);
      SetSlot(this, MONTHS, months);
      SetSlot(this, WEEKS, weeks);
      SetSlot(this, DAYS, days);
      SetSlot(this, HOURS, hours);
      SetSlot(this, MINUTES, minutes);
      SetSlot(this, SECONDS, seconds);
      SetSlot(this, MILLISECONDS, milliseconds);
      SetSlot(this, MICROSECONDS, microseconds);
      SetSlot(this, NANOSECONDS, nanoseconds);
      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(TemporalDurationToString(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }
    _createClass(Duration, [{
      key: "years",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, YEARS);
      }
    }, {
      key: "months",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, MONTHS);
      }
    }, {
      key: "weeks",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, WEEKS);
      }
    }, {
      key: "days",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, DAYS);
      }
    }, {
      key: "hours",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, HOURS);
      }
    }, {
      key: "minutes",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, MINUTES);
      }
    }, {
      key: "seconds",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, SECONDS);
      }
    }, {
      key: "milliseconds",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, MILLISECONDS);
      }
    }, {
      key: "microseconds",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, MICROSECONDS);
      }
    }, {
      key: "nanoseconds",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, NANOSECONDS);
      }
    }, {
      key: "sign",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS));
      }
    }, {
      key: "blank",
      get: function get() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS)) === 0;
      }
    }, {
      key: "with",
      value: function _with(durationLike) {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        var partialDuration = PrepareTemporalFields(durationLike, ['days', 'hours', 'microseconds', 'milliseconds', 'minutes', 'months', 'nanoseconds', 'seconds', 'weeks', 'years'], 'partial');
        var _partialDuration$year = partialDuration.years,
          years = _partialDuration$year === void 0 ? GetSlot(this, YEARS) : _partialDuration$year,
          _partialDuration$mont = partialDuration.months,
          months = _partialDuration$mont === void 0 ? GetSlot(this, MONTHS) : _partialDuration$mont,
          _partialDuration$week = partialDuration.weeks,
          weeks = _partialDuration$week === void 0 ? GetSlot(this, WEEKS) : _partialDuration$week,
          _partialDuration$days = partialDuration.days,
          days = _partialDuration$days === void 0 ? GetSlot(this, DAYS) : _partialDuration$days,
          _partialDuration$hour = partialDuration.hours,
          hours = _partialDuration$hour === void 0 ? GetSlot(this, HOURS) : _partialDuration$hour,
          _partialDuration$minu = partialDuration.minutes,
          minutes = _partialDuration$minu === void 0 ? GetSlot(this, MINUTES) : _partialDuration$minu,
          _partialDuration$seco = partialDuration.seconds,
          seconds = _partialDuration$seco === void 0 ? GetSlot(this, SECONDS) : _partialDuration$seco,
          _partialDuration$mill = partialDuration.milliseconds,
          milliseconds = _partialDuration$mill === void 0 ? GetSlot(this, MILLISECONDS) : _partialDuration$mill,
          _partialDuration$micr = partialDuration.microseconds,
          microseconds = _partialDuration$micr === void 0 ? GetSlot(this, MICROSECONDS) : _partialDuration$micr,
          _partialDuration$nano = partialDuration.nanoseconds,
          nanoseconds = _partialDuration$nano === void 0 ? GetSlot(this, NANOSECONDS) : _partialDuration$nano;
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "negated",
      value: function negated() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return CreateNegatedTemporalDuration(this);
      }
    }, {
      key: "abs",
      value: function abs() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return new Duration(Math.abs(GetSlot(this, YEARS)), Math.abs(GetSlot(this, MONTHS)), Math.abs(GetSlot(this, WEEKS)), Math.abs(GetSlot(this, DAYS)), Math.abs(GetSlot(this, HOURS)), Math.abs(GetSlot(this, MINUTES)), Math.abs(GetSlot(this, SECONDS)), Math.abs(GetSlot(this, MILLISECONDS)), Math.abs(GetSlot(this, MICROSECONDS)), Math.abs(GetSlot(this, NANOSECONDS)));
      }
    }, {
      key: "add",
      value: function add(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromDuration('add', this, other, options);
      }
    }, {
      key: "subtract",
      value: function subtract(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromDuration('subtract', this, other, options);
      }
    }, {
      key: "round",
      value: function round(roundTo) {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        if (roundTo === undefined) throw new TypeError('options parameter is required');
        var years = GetSlot(this, YEARS);
        var months = GetSlot(this, MONTHS);
        var weeks = GetSlot(this, WEEKS);
        var days = GetSlot(this, DAYS);
        var hours = GetSlot(this, HOURS);
        var minutes = GetSlot(this, MINUTES);
        var seconds = GetSlot(this, SECONDS);
        var milliseconds = GetSlot(this, MILLISECONDS);
        var microseconds = GetSlot(this, MICROSECONDS);
        var nanoseconds = GetSlot(this, NANOSECONDS);
        var defaultLargestUnit = DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        if (Type$6(roundTo) === 'String') {
          var stringParam = roundTo;
          roundTo = ObjectCreate$4(null);
          roundTo.smallestUnit = stringParam;
        } else {
          roundTo = GetOptionsObject(roundTo);
        }
        var largestUnit = GetTemporalUnit(roundTo, 'largestUnit', 'datetime', undefined, ['auto']);
        var relativeTo = ToRelativeTemporalObject(roundTo);
        var roundingIncrement = ToTemporalRoundingIncrement(roundTo);
        var roundingMode = ToTemporalRoundingMode(roundTo, 'halfExpand');
        var smallestUnit = GetTemporalUnit(roundTo, 'smallestUnit', 'datetime', undefined);
        var smallestUnitPresent = true;
        if (!smallestUnit) {
          smallestUnitPresent = false;
          smallestUnit = 'nanosecond';
        }
        defaultLargestUnit = LargerOfTwoTemporalUnits(defaultLargestUnit, smallestUnit);
        var largestUnitPresent = true;
        if (!largestUnit) {
          largestUnitPresent = false;
          largestUnit = defaultLargestUnit;
        }
        if (largestUnit === 'auto') largestUnit = defaultLargestUnit;
        if (!smallestUnitPresent && !largestUnitPresent) {
          throw new RangeError('at least one of smallestUnit or largestUnit is required');
        }
        if (LargerOfTwoTemporalUnits(largestUnit, smallestUnit) !== largestUnit) {
          throw new RangeError("largestUnit ".concat(largestUnit, " cannot be smaller than smallestUnit ").concat(smallestUnit));
        }
        var maximumIncrements = {
          hour: 24,
          minute: 60,
          second: 60,
          millisecond: 1000,
          microsecond: 1000,
          nanosecond: 1000
        };
        var maximum = maximumIncrements[smallestUnit];
        if (maximum !== undefined) ValidateTemporalRoundingIncrement(roundingIncrement, maximum, false);
        var _ES$UnbalanceDuration = UnbalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo);
        years = _ES$UnbalanceDuration.years;
        months = _ES$UnbalanceDuration.months;
        weeks = _ES$UnbalanceDuration.weeks;
        days = _ES$UnbalanceDuration.days;
        var _ES$RoundDuration = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo);
        years = _ES$RoundDuration.years;
        months = _ES$RoundDuration.months;
        weeks = _ES$RoundDuration.weeks;
        days = _ES$RoundDuration.days;
        hours = _ES$RoundDuration.hours;
        minutes = _ES$RoundDuration.minutes;
        seconds = _ES$RoundDuration.seconds;
        milliseconds = _ES$RoundDuration.milliseconds;
        microseconds = _ES$RoundDuration.microseconds;
        nanoseconds = _ES$RoundDuration.nanoseconds;
        var _ES$AdjustRoundedDura = AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo);
        years = _ES$AdjustRoundedDura.years;
        months = _ES$AdjustRoundedDura.months;
        weeks = _ES$AdjustRoundedDura.weeks;
        days = _ES$AdjustRoundedDura.days;
        hours = _ES$AdjustRoundedDura.hours;
        minutes = _ES$AdjustRoundedDura.minutes;
        seconds = _ES$AdjustRoundedDura.seconds;
        milliseconds = _ES$AdjustRoundedDura.milliseconds;
        microseconds = _ES$AdjustRoundedDura.microseconds;
        nanoseconds = _ES$AdjustRoundedDura.nanoseconds;
        var _ES$BalanceDuration = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit, relativeTo);
        days = _ES$BalanceDuration.days;
        hours = _ES$BalanceDuration.hours;
        minutes = _ES$BalanceDuration.minutes;
        seconds = _ES$BalanceDuration.seconds;
        milliseconds = _ES$BalanceDuration.milliseconds;
        microseconds = _ES$BalanceDuration.microseconds;
        nanoseconds = _ES$BalanceDuration.nanoseconds;
        var _ES$BalanceDurationRe = BalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo);
        years = _ES$BalanceDurationRe.years;
        months = _ES$BalanceDurationRe.months;
        weeks = _ES$BalanceDurationRe.weeks;
        days = _ES$BalanceDurationRe.days;
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "total",
      value: function total(totalOf) {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        var years = GetSlot(this, YEARS);
        var months = GetSlot(this, MONTHS);
        var weeks = GetSlot(this, WEEKS);
        var days = GetSlot(this, DAYS);
        var hours = GetSlot(this, HOURS);
        var minutes = GetSlot(this, MINUTES);
        var seconds = GetSlot(this, SECONDS);
        var milliseconds = GetSlot(this, MILLISECONDS);
        var microseconds = GetSlot(this, MICROSECONDS);
        var nanoseconds = GetSlot(this, NANOSECONDS);
        if (totalOf === undefined) throw new TypeError('options argument is required');
        if (Type$6(totalOf) === 'String') {
          var stringParam = totalOf;
          totalOf = ObjectCreate$4(null);
          totalOf.unit = stringParam;
        } else {
          totalOf = GetOptionsObject(totalOf);
        }
        var relativeTo = ToRelativeTemporalObject(totalOf);
        var unit = GetTemporalUnit(totalOf, 'unit', 'datetime', REQUIRED);

        // Convert larger units down to days
        // If the unit we're totalling is smaller than `days`, convert days down to that unit.
        var _ES$UnbalanceDuration2 = UnbalanceDurationRelative(years, months, weeks, days, unit, relativeTo);
        years = _ES$UnbalanceDuration2.years;
        months = _ES$UnbalanceDuration2.months;
        weeks = _ES$UnbalanceDuration2.weeks;
        days = _ES$UnbalanceDuration2.days;
        var intermediate;
        if (IsTemporalZonedDateTime(relativeTo)) {
          intermediate = MoveRelativeZonedDateTime(relativeTo, years, months, weeks, 0);
        }
        var balanceResult = BalancePossiblyInfiniteDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, unit, intermediate);
        if (balanceResult === 'positive overflow') {
          return Infinity;
        } else if (balanceResult === 'negative overflow') {
          return -Infinity;
        }
        // Finally, truncate to the correct unit and calculate remainder
        days = balanceResult.days;
        hours = balanceResult.hours;
        minutes = balanceResult.minutes;
        seconds = balanceResult.seconds;
        milliseconds = balanceResult.milliseconds;
        microseconds = balanceResult.microseconds;
        nanoseconds = balanceResult.nanoseconds;
        var _ES$RoundDuration2 = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 1, unit, 'trunc', relativeTo),
          total = _ES$RoundDuration2.total;
        return total;
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var digits = ToFractionalSecondDigits(options);
        var roundingMode = ToTemporalRoundingMode(options, 'trunc');
        var smallestUnit = GetTemporalUnit(options, 'smallestUnit', 'time', undefined);
        if (smallestUnit === 'hour' || smallestUnit === 'minute') {
          throw new RangeError('smallestUnit must be a time unit other than "hours" or "minutes"');
        }
        var _ES$ToSecondsStringPr = ToSecondsStringPrecisionRecord(smallestUnit, digits),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;
        var _ES$RoundDuration3 = RoundDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), increment, unit, roundingMode),
          years = _ES$RoundDuration3.years,
          months = _ES$RoundDuration3.months,
          weeks = _ES$RoundDuration3.weeks,
          days = _ES$RoundDuration3.days,
          hours = _ES$RoundDuration3.hours,
          minutes = _ES$RoundDuration3.minutes,
          seconds = _ES$RoundDuration3.seconds,
          milliseconds = _ES$RoundDuration3.milliseconds,
          microseconds = _ES$RoundDuration3.microseconds,
          nanoseconds = _ES$RoundDuration3.nanoseconds;
        return TemporalDurationToString(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, precision);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return TemporalDurationToString(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS));
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        if (typeof Intl !== 'undefined' && typeof Intl.DurationFormat !== 'undefined') {
          return new Intl.DurationFormat(locales, options).format(this);
        }
        console.warn('Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat.');
        return TemporalDurationToString(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS));
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() to compare Temporal.Duration');
      }
    }], [{
      key: "from",
      value: function from(item) {
        if (IsTemporalDuration(item)) {
          return new Duration(GetSlot(item, YEARS), GetSlot(item, MONTHS), GetSlot(item, WEEKS), GetSlot(item, DAYS), GetSlot(item, HOURS), GetSlot(item, MINUTES), GetSlot(item, SECONDS), GetSlot(item, MILLISECONDS), GetSlot(item, MICROSECONDS), GetSlot(item, NANOSECONDS));
        }
        return ToTemporalDuration(item);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        one = ToTemporalDuration(one);
        two = ToTemporalDuration(two);
        options = GetOptionsObject(options);
        var relativeTo = ToRelativeTemporalObject(options);
        var y1 = GetSlot(one, YEARS);
        var mon1 = GetSlot(one, MONTHS);
        var w1 = GetSlot(one, WEEKS);
        var d1 = GetSlot(one, DAYS);
        var h1 = GetSlot(one, HOURS);
        var min1 = GetSlot(one, MINUTES);
        var s1 = GetSlot(one, SECONDS);
        var ms1 = GetSlot(one, MILLISECONDS);
        var µs1 = GetSlot(one, MICROSECONDS);
        var ns1 = GetSlot(one, NANOSECONDS);
        var y2 = GetSlot(two, YEARS);
        var mon2 = GetSlot(two, MONTHS);
        var w2 = GetSlot(two, WEEKS);
        var d2 = GetSlot(two, DAYS);
        var h2 = GetSlot(two, HOURS);
        var min2 = GetSlot(two, MINUTES);
        var s2 = GetSlot(two, SECONDS);
        var ms2 = GetSlot(two, MILLISECONDS);
        var µs2 = GetSlot(two, MICROSECONDS);
        var ns2 = GetSlot(two, NANOSECONDS);
        var shift1 = CalculateOffsetShift(relativeTo, y1, mon1, w1, d1);
        var shift2 = CalculateOffsetShift(relativeTo, y2, mon2, w2, d2);
        if (y1 !== 0 || y2 !== 0 || mon1 !== 0 || mon2 !== 0 || w1 !== 0 || w2 !== 0) {
          var _ES$UnbalanceDuration3 = UnbalanceDurationRelative(y1, mon1, w1, d1, 'day', relativeTo);
          d1 = _ES$UnbalanceDuration3.days;
          var _ES$UnbalanceDuration4 = UnbalanceDurationRelative(y2, mon2, w2, d2, 'day', relativeTo);
          d2 = _ES$UnbalanceDuration4.days;
        }
        ns1 = TotalDurationNanoseconds(d1, h1, min1, s1, ms1, µs1, ns1, shift1);
        ns2 = TotalDurationNanoseconds(d2, h2, min2, s2, ms2, µs2, ns2, shift2);
        return ComparisonResult(ns1.minus(ns2).toJSNumber());
      }
    }]);
    return Duration;
  }();
  MakeIntrinsicClass(Duration, 'Temporal.Duration');

  var ArrayPrototypePush$2 = Array.prototype.push;
  var ObjectCreate$3 = Object.create;
  var SetPrototypeAdd$1 = Set.prototype.add;
  var SetPrototypeForEach$1 = Set.prototype.forEach;
  var PlainMonthDay = /*#__PURE__*/function () {
    function PlainMonthDay(isoMonth, isoDay) {
      var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iso8601';
      var referenceISOYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1972;
      _classCallCheck(this, PlainMonthDay);
      isoMonth = ToIntegerWithTruncation(isoMonth);
      isoDay = ToIntegerWithTruncation(isoDay);
      calendar = ToTemporalCalendarSlotValue(calendar);
      referenceISOYear = ToIntegerWithTruncation(referenceISOYear);
      CreateTemporalMonthDaySlots(this, isoMonth, isoDay, calendar, referenceISOYear);
    }
    _createClass(PlainMonthDay, [{
      key: "monthCode",
      get: function get() {
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "day",
      get: function get() {
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return CalendarDay(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "calendarId",
      get: function get() {
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarIdentifier(GetSlot(this, CALENDAR));
      }
    }, {
      key: "with",
      value: function _with(temporalMonthDayLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        if (Type$6(temporalMonthDayLike) !== 'Object') {
          throw new TypeError('invalid argument');
        }
        RejectTemporalLikeObject(temporalMonthDayLike);
        options = GetOptionsObject(options);
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['day', 'month', 'monthCode', 'year']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        var partialMonthDay = PrepareTemporalFields(temporalMonthDayLike, fieldNames, 'partial');
        fields = CalendarMergeFields(calendar, fields, partialMonthDay);
        fields = PrepareTemporalFields(fields, fieldNames, []);
        return CalendarMonthDayFromFields(calendar, fields, options);
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        other = ToTemporalMonthDay(other);
        if (GetSlot(this, ISO_YEAR) !== GetSlot(other, ISO_YEAR)) return false;
        if (GetSlot(this, ISO_MONTH) !== GetSlot(other, ISO_MONTH)) return false;
        if (GetSlot(this, ISO_DAY) !== GetSlot(other, ISO_DAY)) return false;
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var showCalendar = ToCalendarNameOption(options);
        return TemporalMonthDayToString(this, showCalendar);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return TemporalMonthDayToString(this);
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use equals() to compare Temporal.PlainMonthDay');
      }
    }, {
      key: "toPlainDate",
      value: function toPlainDate(item) {
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        if (Type$6(item) !== 'Object') throw new TypeError('argument should be an object');
        var calendar = GetSlot(this, CALENDAR);
        var receiverFieldNames = CalendarFields(calendar, ['day', 'monthCode']);
        var fields = PrepareTemporalFields(this, receiverFieldNames, []);
        var inputFieldNames = CalendarFields(calendar, ['year']);
        var inputFields = PrepareTemporalFields(item, inputFieldNames, []);
        var mergedFields = CalendarMergeFields(calendar, fields, inputFields);

        // TODO: Use MergeLists abstract operation.
        var uniqueFieldNames = new Set();
        for (var index = 0; index < receiverFieldNames.length; index++) {
          Call$1(SetPrototypeAdd$1, uniqueFieldNames, [receiverFieldNames[index]]);
        }
        for (var _index = 0; _index < inputFieldNames.length; _index++) {
          Call$1(SetPrototypeAdd$1, uniqueFieldNames, [inputFieldNames[_index]]);
        }
        var mergedFieldNames = [];
        Call$1(SetPrototypeForEach$1, uniqueFieldNames, [function (element) {
          return Call$1(ArrayPrototypePush$2, mergedFieldNames, [element]);
        }]);
        mergedFields = PrepareTemporalFields(mergedFields, mergedFieldNames, []);
        var options = ObjectCreate$3(null);
        options.overflow = 'reject';
        return CalendarDateFromFields(calendar, mergedFields, options);
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(this, ISO_DAY),
          isoMonth: GetSlot(this, ISO_MONTH),
          isoYear: GetSlot(this, ISO_YEAR)
        };
      }
    }, {
      key: "getCalendar",
      value: function getCalendar() {
        if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarObject(GetSlot(this, CALENDAR));
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = GetOptionsObject(options);
        if (IsTemporalMonthDay(item)) {
          ToTemporalOverflow(options); // validate and ignore
          return CreateTemporalMonthDay(GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR), GetSlot(item, ISO_YEAR));
        }
        return ToTemporalMonthDay(item, options);
      }
    }]);
    return PlainMonthDay;
  }();
  MakeIntrinsicClass(PlainMonthDay, 'Temporal.PlainMonthDay');

  var instant = function instant() {
    var Instant = GetIntrinsic('%Temporal.Instant%');
    return new Instant(SystemUTCEpochNanoSeconds());
  };
  var plainDateTime = function plainDateTime(calendarLike) {
    var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultTimeZone();
    var timeZone = ToTemporalTimeZoneSlotValue(temporalTimeZoneLike);
    var calendar = ToTemporalCalendarSlotValue(calendarLike);
    var inst = instant();
    return GetPlainDateTimeFor(timeZone, inst, calendar);
  };
  var plainDateTimeISO = function plainDateTimeISO() {
    var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultTimeZone();
    var timeZone = ToTemporalTimeZoneSlotValue(temporalTimeZoneLike);
    var inst = instant();
    return GetPlainDateTimeFor(timeZone, inst, 'iso8601');
  };
  var zonedDateTime = function zonedDateTime(calendarLike) {
    var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultTimeZone();
    var timeZone = ToTemporalTimeZoneSlotValue(temporalTimeZoneLike);
    var calendar = ToTemporalCalendarSlotValue(calendarLike);
    return CreateTemporalZonedDateTime(SystemUTCEpochNanoSeconds(), timeZone, calendar);
  };
  var zonedDateTimeISO = function zonedDateTimeISO() {
    var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultTimeZone();
    return zonedDateTime('iso8601', temporalTimeZoneLike);
  };
  var plainDate = function plainDate(calendarLike) {
    var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultTimeZone();
    return TemporalDateTimeToDate(plainDateTime(calendarLike, temporalTimeZoneLike));
  };
  var plainDateISO = function plainDateISO() {
    var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultTimeZone();
    return TemporalDateTimeToDate(plainDateTimeISO(temporalTimeZoneLike));
  };
  var plainTimeISO = function plainTimeISO() {
    var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultTimeZone();
    return TemporalDateTimeToTime(plainDateTimeISO(temporalTimeZoneLike));
  };
  var timeZoneId = function timeZoneId() {
    return DefaultTimeZone();
  };
  var Now = {
    instant: instant,
    plainDateTime: plainDateTime,
    plainDateTimeISO: plainDateTimeISO,
    plainDate: plainDate,
    plainDateISO: plainDateISO,
    plainTimeISO: plainTimeISO,
    timeZoneId: timeZoneId,
    zonedDateTime: zonedDateTime,
    zonedDateTimeISO: zonedDateTimeISO
  };
  Object.defineProperty(Now, Symbol.toStringTag, {
    value: 'Temporal.Now',
    writable: false,
    enumerable: false,
    configurable: true
  });

  var ObjectAssign = Object.assign;
  var ObjectCreate$2 = Object.create;
  function TemporalTimeToString(time, precision) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var hour = GetSlot(time, ISO_HOUR);
    var minute = GetSlot(time, ISO_MINUTE);
    var second = GetSlot(time, ISO_SECOND);
    var millisecond = GetSlot(time, ISO_MILLISECOND);
    var microsecond = GetSlot(time, ISO_MICROSECOND);
    var nanosecond = GetSlot(time, ISO_NANOSECOND);
    if (options) {
      var unit = options.unit,
        increment = options.increment,
        roundingMode = options.roundingMode;
      var _ES$RoundTime = RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);
      hour = _ES$RoundTime.hour;
      minute = _ES$RoundTime.minute;
      second = _ES$RoundTime.second;
      millisecond = _ES$RoundTime.millisecond;
      microsecond = _ES$RoundTime.microsecond;
      nanosecond = _ES$RoundTime.nanosecond;
    }
    hour = ISODateTimePartString(hour);
    minute = ISODateTimePartString(minute);
    var seconds = FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
    return "".concat(hour, ":").concat(minute).concat(seconds);
  }
  var PlainTime = /*#__PURE__*/function () {
    function PlainTime() {
      var isoHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isoMinute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var isoSecond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var isoMillisecond = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var isoMicrosecond = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var isoNanosecond = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      _classCallCheck(this, PlainTime);
      isoHour = isoHour === undefined ? 0 : ToIntegerWithTruncation(isoHour);
      isoMinute = isoMinute === undefined ? 0 : ToIntegerWithTruncation(isoMinute);
      isoSecond = isoSecond === undefined ? 0 : ToIntegerWithTruncation(isoSecond);
      isoMillisecond = isoMillisecond === undefined ? 0 : ToIntegerWithTruncation(isoMillisecond);
      isoMicrosecond = isoMicrosecond === undefined ? 0 : ToIntegerWithTruncation(isoMicrosecond);
      isoNanosecond = isoNanosecond === undefined ? 0 : ToIntegerWithTruncation(isoNanosecond);
      RejectTime(isoHour, isoMinute, isoSecond, isoMillisecond, isoMicrosecond, isoNanosecond);
      CreateSlots(this);
      SetSlot(this, ISO_HOUR, isoHour);
      SetSlot(this, ISO_MINUTE, isoMinute);
      SetSlot(this, ISO_SECOND, isoSecond);
      SetSlot(this, ISO_MILLISECOND, isoMillisecond);
      SetSlot(this, ISO_MICROSECOND, isoMicrosecond);
      SetSlot(this, ISO_NANOSECOND, isoNanosecond);
      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(TemporalTimeToString(this, 'auto'), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }
    _createClass(PlainTime, [{
      key: "hour",
      get: function get() {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_HOUR);
      }
    }, {
      key: "minute",
      get: function get() {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MINUTE);
      }
    }, {
      key: "second",
      get: function get() {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_SECOND);
      }
    }, {
      key: "millisecond",
      get: function get() {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MILLISECOND);
      }
    }, {
      key: "microsecond",
      get: function get() {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MICROSECOND);
      }
    }, {
      key: "nanosecond",
      get: function get() {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_NANOSECOND);
      }
    }, {
      key: "with",
      value: function _with(temporalTimeLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        if (Type$6(temporalTimeLike) !== 'Object') {
          throw new TypeError('invalid argument');
        }
        RejectTemporalLikeObject(temporalTimeLike);
        options = GetOptionsObject(options);
        var overflow = ToTemporalOverflow(options);
        var partialTime = ToTemporalTimeRecord(temporalTimeLike, 'partial');
        var fields = ToTemporalTimeRecord(this);
        var _ObjectAssign = ObjectAssign(fields, partialTime),
          hour = _ObjectAssign.hour,
          minute = _ObjectAssign.minute,
          second = _ObjectAssign.second,
          millisecond = _ObjectAssign.millisecond,
          microsecond = _ObjectAssign.microsecond,
          nanosecond = _ObjectAssign.nanosecond;
        var _ES$RegulateTime = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);
        hour = _ES$RegulateTime.hour;
        minute = _ES$RegulateTime.minute;
        second = _ES$RegulateTime.second;
        millisecond = _ES$RegulateTime.millisecond;
        microsecond = _ES$RegulateTime.microsecond;
        nanosecond = _ES$RegulateTime.nanosecond;
        return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromPlainTime('add', this, temporalDurationLike);
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromPlainTime('subtract', this, temporalDurationLike);
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalPlainTime('until', this, other, options);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalPlainTime('since', this, other, options);
      }
    }, {
      key: "round",
      value: function round(roundTo) {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        if (roundTo === undefined) throw new TypeError('options parameter is required');
        if (Type$6(roundTo) === 'String') {
          var stringParam = roundTo;
          roundTo = ObjectCreate$2(null);
          roundTo.smallestUnit = stringParam;
        } else {
          roundTo = GetOptionsObject(roundTo);
        }
        var roundingIncrement = ToTemporalRoundingIncrement(roundTo);
        var roundingMode = ToTemporalRoundingMode(roundTo, 'halfExpand');
        var smallestUnit = GetTemporalUnit(roundTo, 'smallestUnit', 'time', REQUIRED);
        var MAX_INCREMENTS = {
          hour: 24,
          minute: 60,
          second: 60,
          millisecond: 1000,
          microsecond: 1000,
          nanosecond: 1000
        };
        ValidateTemporalRoundingIncrement(roundingIncrement, MAX_INCREMENTS[smallestUnit], false);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);
        var _ES$RoundTime2 = RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);
        hour = _ES$RoundTime2.hour;
        minute = _ES$RoundTime2.minute;
        second = _ES$RoundTime2.second;
        millisecond = _ES$RoundTime2.millisecond;
        microsecond = _ES$RoundTime2.microsecond;
        nanosecond = _ES$RoundTime2.nanosecond;
        return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        other = ToTemporalTime(other);
        for (var _i = 0, _arr = [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i < _arr.length; _i++) {
          var slot = _arr[_i];
          var val1 = GetSlot(this, slot);
          var val2 = GetSlot(other, slot);
          if (val1 !== val2) return false;
        }
        return true;
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var digits = ToFractionalSecondDigits(options);
        var roundingMode = ToTemporalRoundingMode(options, 'trunc');
        var smallestUnit = GetTemporalUnit(options, 'smallestUnit', 'time', undefined);
        if (smallestUnit === 'hour') throw new RangeError('smallestUnit must be a time unit other than "hour"');
        var _ES$ToSecondsStringPr = ToSecondsStringPrecisionRecord(smallestUnit, digits),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;
        return TemporalTimeToString(this, precision, {
          unit: unit,
          increment: increment,
          roundingMode: roundingMode
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return TemporalTimeToString(this, 'auto');
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.PlainTime');
      }
    }, {
      key: "toPlainDateTime",
      value: function toPlainDateTime(temporalDate) {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        temporalDate = ToTemporalDate(temporalDate);
        var year = GetSlot(temporalDate, ISO_YEAR);
        var month = GetSlot(temporalDate, ISO_MONTH);
        var day = GetSlot(temporalDate, ISO_DAY);
        var calendar = GetSlot(temporalDate, CALENDAR);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      }
    }, {
      key: "toZonedDateTime",
      value: function toZonedDateTime(item) {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        if (Type$6(item) !== 'Object') {
          throw new TypeError('invalid argument');
        }
        var dateLike = item.plainDate;
        if (dateLike === undefined) {
          throw new TypeError('missing date property');
        }
        var temporalDate = ToTemporalDate(dateLike);
        var timeZoneLike = item.timeZone;
        if (timeZoneLike === undefined) {
          throw new TypeError('missing timeZone property');
        }
        var timeZone = ToTemporalTimeZoneSlotValue(timeZoneLike);
        var year = GetSlot(temporalDate, ISO_YEAR);
        var month = GetSlot(temporalDate, ISO_MONTH);
        var day = GetSlot(temporalDate, ISO_DAY);
        var calendar = GetSlot(temporalDate, CALENDAR);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);
        var PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        var dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        var instant = GetInstantFor(timeZone, dt, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return {
          isoHour: GetSlot(this, ISO_HOUR),
          isoMicrosecond: GetSlot(this, ISO_MICROSECOND),
          isoMillisecond: GetSlot(this, ISO_MILLISECOND),
          isoMinute: GetSlot(this, ISO_MINUTE),
          isoNanosecond: GetSlot(this, ISO_NANOSECOND),
          isoSecond: GetSlot(this, ISO_SECOND)
        };
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = GetOptionsObject(options);
        var overflow = ToTemporalOverflow(options);
        if (IsTemporalTime(item)) {
          return new PlainTime(GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND));
        }
        return ToTemporalTime(item, overflow);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ToTemporalTime(one);
        two = ToTemporalTime(two);
        for (var _i2 = 0, _arr2 = [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i2 < _arr2.length; _i2++) {
          var slot = _arr2[_i2];
          var val1 = GetSlot(one, slot);
          var val2 = GetSlot(two, slot);
          if (val1 !== val2) return ComparisonResult(val1 - val2);
        }
        return 0;
      }
    }]);
    return PlainTime;
  }();
  MakeIntrinsicClass(PlainTime, 'Temporal.PlainTime');

  var TimeZone = /*#__PURE__*/function () {
    function TimeZone(timeZoneIdentifier) {
      _classCallCheck(this, TimeZone);
      // Note: if the argument is not passed, GetCanonicalTimeZoneIdentifier(undefined) will throw.
      //       This check exists only to improve the error message.
      if (arguments.length < 1) {
        throw new RangeError('missing argument: identifier is required');
      }
      timeZoneIdentifier = GetCanonicalTimeZoneIdentifier(timeZoneIdentifier);
      CreateSlots(this);
      SetSlot(this, TIMEZONE_ID, timeZoneIdentifier);
      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(timeZoneIdentifier, ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }
    _createClass(TimeZone, [{
      key: "id",
      get: function get() {
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, TIMEZONE_ID);
      }
    }, {
      key: "getOffsetNanosecondsFor",
      value: function getOffsetNanosecondsFor(instant) {
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        instant = ToTemporalInstant(instant);
        var id = GetSlot(this, TIMEZONE_ID);
        if (IsTimeZoneOffsetString(id)) {
          return ParseTimeZoneOffsetString(id);
        }
        return GetNamedTimeZoneOffsetNanoseconds(id, GetSlot(instant, EPOCHNANOSECONDS));
      }
    }, {
      key: "getOffsetStringFor",
      value: function getOffsetStringFor(instant) {
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        instant = ToTemporalInstant(instant);
        return GetOffsetStringFor(this, instant);
      }
    }, {
      key: "getPlainDateTimeFor",
      value: function getPlainDateTimeFor(instant) {
        var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'iso8601';
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        instant = ToTemporalInstant(instant);
        calendar = ToTemporalCalendarSlotValue(calendar);
        return GetPlainDateTimeFor(this, instant, calendar);
      }
    }, {
      key: "getInstantFor",
      value: function getInstantFor(dateTime) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        dateTime = ToTemporalDateTime(dateTime);
        options = GetOptionsObject(options);
        var disambiguation = ToTemporalDisambiguation(options);
        return GetInstantFor(this, dateTime, disambiguation);
      }
    }, {
      key: "getPossibleInstantsFor",
      value: function getPossibleInstantsFor(dateTime) {
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        dateTime = ToTemporalDateTime(dateTime);
        var Instant = GetIntrinsic('%Temporal.Instant%');
        var id = GetSlot(this, TIMEZONE_ID);
        if (IsTimeZoneOffsetString(id)) {
          var epochNs = GetUTCEpochNanoseconds(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
          if (epochNs === null) throw new RangeError('DateTime outside of supported range');
          var offsetNs = ParseTimeZoneOffsetString(id);
          return [new Instant(epochNs.minus(offsetNs))];
        }
        var possibleEpochNs = GetNamedTimeZoneEpochNanoseconds(id, GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
        return possibleEpochNs.map(function (ns) {
          return new Instant(ns);
        });
      }
    }, {
      key: "getNextTransition",
      value: function getNextTransition(startingPoint) {
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        startingPoint = ToTemporalInstant(startingPoint);
        var id = GetSlot(this, TIMEZONE_ID);

        // Offset time zones or UTC have no transitions
        if (IsTimeZoneOffsetString(id) || id === 'UTC') {
          return null;
        }
        var epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
        var Instant = GetIntrinsic('%Temporal.Instant%');
        epochNanoseconds = GetNamedTimeZoneNextTransition(id, epochNanoseconds);
        return epochNanoseconds === null ? null : new Instant(epochNanoseconds);
      }
    }, {
      key: "getPreviousTransition",
      value: function getPreviousTransition(startingPoint) {
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        startingPoint = ToTemporalInstant(startingPoint);
        var id = GetSlot(this, TIMEZONE_ID);

        // Offset time zones or UTC have no transitions
        if (IsTimeZoneOffsetString(id) || id === 'UTC') {
          return null;
        }
        var epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
        var Instant = GetIntrinsic('%Temporal.Instant%');
        epochNanoseconds = GetNamedTimeZonePreviousTransition(id, epochNanoseconds);
        return epochNanoseconds === null ? null : new Instant(epochNanoseconds);
      }
    }, {
      key: "toString",
      value: function toString() {
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, TIMEZONE_ID);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, TIMEZONE_ID);
      }
    }], [{
      key: "from",
      value: function from(item) {
        var timeZoneSlotValue = ToTemporalTimeZoneSlotValue(item);
        return ToTemporalTimeZoneObject(timeZoneSlotValue);
      }
    }]);
    return TimeZone;
  }();
  MakeIntrinsicClass(TimeZone, 'Temporal.TimeZone');
  DefineIntrinsic('Temporal.TimeZone.prototype.getOffsetNanosecondsFor', TimeZone.prototype.getOffsetNanosecondsFor);
  DefineIntrinsic('Temporal.TimeZone.prototype.getPossibleInstantsFor', TimeZone.prototype.getPossibleInstantsFor);

  var ArrayPrototypePush$1 = Array.prototype.push;
  var ObjectCreate$1 = Object.create;
  var SetPrototypeAdd = Set.prototype.add;
  var SetPrototypeForEach = Set.prototype.forEach;
  var PlainYearMonth = /*#__PURE__*/function () {
    function PlainYearMonth(isoYear, isoMonth) {
      var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iso8601';
      var referenceISODay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      _classCallCheck(this, PlainYearMonth);
      isoYear = ToIntegerWithTruncation(isoYear);
      isoMonth = ToIntegerWithTruncation(isoMonth);
      calendar = ToTemporalCalendarSlotValue(calendar);
      referenceISODay = ToIntegerWithTruncation(referenceISODay);
      CreateTemporalYearMonthSlots(this, isoYear, isoMonth, calendar, referenceISODay);
    }
    _createClass(PlainYearMonth, [{
      key: "year",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "month",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarMonth(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "monthCode",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "calendarId",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarIdentifier(GetSlot(this, CALENDAR));
      }
    }, {
      key: "era",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarEra(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "eraYear",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarEraYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "daysInYear",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "monthsInYear",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "inLeapYear",
      get: function get() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
      }
    }, {
      key: "with",
      value: function _with(temporalYearMonthLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        if (Type$6(temporalYearMonthLike) !== 'Object') {
          throw new TypeError('invalid argument');
        }
        RejectTemporalLikeObject(temporalYearMonthLike);
        options = GetOptionsObject(options);
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['month', 'monthCode', 'year']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        var partialYearMonth = PrepareTemporalFields(temporalYearMonthLike, fieldNames, 'partial');
        fields = CalendarMergeFields(calendar, fields, partialYearMonth);
        fields = PrepareTemporalFields(fields, fieldNames, []);
        return CalendarYearMonthFromFields(calendar, fields, options);
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromPlainYearMonth('add', this, temporalDurationLike, options);
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromPlainYearMonth('subtract', this, temporalDurationLike, options);
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalPlainYearMonth('until', this, other, options);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalPlainYearMonth('since', this, other, options);
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        other = ToTemporalYearMonth(other);
        if (GetSlot(this, ISO_YEAR) !== GetSlot(other, ISO_YEAR)) return false;
        if (GetSlot(this, ISO_MONTH) !== GetSlot(other, ISO_MONTH)) return false;
        if (GetSlot(this, ISO_DAY) !== GetSlot(other, ISO_DAY)) return false;
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var showCalendar = ToCalendarNameOption(options);
        return TemporalYearMonthToString(this, showCalendar);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return TemporalYearMonthToString(this);
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.PlainYearMonth');
      }
    }, {
      key: "toPlainDate",
      value: function toPlainDate(item) {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        if (Type$6(item) !== 'Object') throw new TypeError('argument should be an object');
        var calendar = GetSlot(this, CALENDAR);
        var receiverFieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        var fields = PrepareTemporalFields(this, receiverFieldNames, []);
        var inputFieldNames = CalendarFields(calendar, ['day']);
        var inputFields = PrepareTemporalFields(item, inputFieldNames, []);
        var mergedFields = CalendarMergeFields(calendar, fields, inputFields);

        // TODO: Use MergeLists abstract operation.
        var uniqueFieldNames = new Set();
        for (var index = 0; index < receiverFieldNames.length; index++) {
          Call$1(SetPrototypeAdd, uniqueFieldNames, [receiverFieldNames[index]]);
        }
        for (var _index = 0; _index < inputFieldNames.length; _index++) {
          Call$1(SetPrototypeAdd, uniqueFieldNames, [inputFieldNames[_index]]);
        }
        var mergedFieldNames = [];
        Call$1(SetPrototypeForEach, uniqueFieldNames, [function (element) {
          return Call$1(ArrayPrototypePush$1, mergedFieldNames, [element]);
        }]);
        mergedFields = PrepareTemporalFields(mergedFields, mergedFieldNames, []);
        var options = ObjectCreate$1(null);
        options.overflow = 'reject';
        return CalendarDateFromFields(calendar, mergedFields, options);
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(this, ISO_DAY),
          isoMonth: GetSlot(this, ISO_MONTH),
          isoYear: GetSlot(this, ISO_YEAR)
        };
      }
    }, {
      key: "getCalendar",
      value: function getCalendar() {
        if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarObject(GetSlot(this, CALENDAR));
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = GetOptionsObject(options);
        if (IsTemporalYearMonth(item)) {
          ToTemporalOverflow(options); // validate and ignore
          return CreateTemporalYearMonth(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, CALENDAR), GetSlot(item, ISO_DAY));
        }
        return ToTemporalYearMonth(item, options);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ToTemporalYearMonth(one);
        two = ToTemporalYearMonth(two);
        return CompareISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
      }
    }]);
    return PlainYearMonth;
  }();
  MakeIntrinsicClass(PlainYearMonth, 'Temporal.PlainYearMonth');

  var ArrayPrototypePush = Array.prototype.push;
  var customResolvedOptions = DateTimeFormat.prototype.resolvedOptions;
  var ObjectCreate = Object.create;
  var ZonedDateTime = /*#__PURE__*/function () {
    function ZonedDateTime(epochNanoseconds, timeZone) {
      var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iso8601';
      _classCallCheck(this, ZonedDateTime);
      // Note: if the argument is not passed, ToBigInt(undefined) will throw. This check exists only
      //       to improve the error message.
      //       ToTemporalTimeZoneSlotValue(undefined) has a clear enough message.
      if (arguments.length < 1) {
        throw new TypeError('missing argument: epochNanoseconds is required');
      }
      epochNanoseconds = ToBigInt(epochNanoseconds);
      timeZone = ToTemporalTimeZoneSlotValue(timeZone);
      calendar = ToTemporalCalendarSlotValue(calendar);
      CreateTemporalZonedDateTimeSlots(this, epochNanoseconds, timeZone, calendar);
    }
    _createClass(ZonedDateTime, [{
      key: "calendarId",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarIdentifier(GetSlot(this, CALENDAR));
      }
    }, {
      key: "timeZoneId",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return ToTemporalTimeZoneIdentifier(GetSlot(this, TIME_ZONE));
      }
    }, {
      key: "year",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarYear(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "month",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarMonth(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "monthCode",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "day",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDay(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "hour",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_HOUR);
      }
    }, {
      key: "minute",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_MINUTE);
      }
    }, {
      key: "second",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_SECOND);
      }
    }, {
      key: "millisecond",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_MILLISECOND);
      }
    }, {
      key: "microsecond",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_MICROSECOND);
      }
    }, {
      key: "nanosecond",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_NANOSECOND);
      }
    }, {
      key: "era",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarEra(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "eraYear",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarEraYear(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "epochSeconds",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return BigIntFloorDiv(value, 1e9).toJSNumber();
      }
    }, {
      key: "epochMilliseconds",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return BigIntFloorDiv(value, 1e6).toJSNumber();
      }
    }, {
      key: "epochMicroseconds",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return BigIntIfAvailable(BigIntFloorDiv(value, 1e3));
      }
    }, {
      key: "epochNanoseconds",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return BigIntIfAvailable(GetSlot(this, EPOCHNANOSECONDS));
      }
    }, {
      key: "dayOfWeek",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDayOfWeek(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "dayOfYear",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDayOfYear(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "weekOfYear",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarWeekOfYear(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "yearOfWeek",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarYearOfWeek(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "hoursInDay",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var dt = dateTime(this);
        var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        var year = GetSlot(dt, ISO_YEAR);
        var month = GetSlot(dt, ISO_MONTH);
        var day = GetSlot(dt, ISO_DAY);
        var today = new DateTime(year, month, day, 0, 0, 0, 0, 0, 0);
        var tomorrowFields = AddISODate(year, month, day, 0, 0, 0, 1, 'reject');
        var tomorrow = new DateTime(tomorrowFields.year, tomorrowFields.month, tomorrowFields.day, 0, 0, 0, 0, 0, 0);
        var timeZone = GetSlot(this, TIME_ZONE);
        var todayNs = GetSlot(GetInstantFor(timeZone, today, 'compatible'), EPOCHNANOSECONDS);
        var tomorrowNs = GetSlot(GetInstantFor(timeZone, tomorrow, 'compatible'), EPOCHNANOSECONDS);
        var diffNs = tomorrowNs.subtract(todayNs);
        var _diffNs$divmod = diffNs.divmod(3.6e12),
          quotient = _diffNs$divmod.quotient,
          remainder = _diffNs$divmod.remainder;
        return quotient.toJSNumber() + remainder.toJSNumber() / 3.6e12;
      }
    }, {
      key: "daysInWeek",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInWeek(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInMonth(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "daysInYear",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarDaysInYear(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "monthsInYear",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarMonthsInYear(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "inLeapYear",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return CalendarInLeapYear(GetSlot(this, CALENDAR), dateTime(this));
      }
    }, {
      key: "offset",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetOffsetStringFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
      }
    }, {
      key: "offsetNanoseconds",
      get: function get() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetOffsetNanosecondsFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
      }
    }, {
      key: "with",
      value: function _with(temporalZonedDateTimeLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        if (Type$6(temporalZonedDateTimeLike) !== 'Object') {
          throw new TypeError('invalid zoned-date-time-like');
        }
        RejectTemporalLikeObject(temporalZonedDateTimeLike);
        options = GetOptionsObject(options);
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
        Call$1(ArrayPrototypePush, fieldNames, ['offset']);
        var fields = PrepareTemporalFields(this, fieldNames, ['offset']);
        var partialZonedDateTime = PrepareTemporalFields(temporalZonedDateTimeLike, fieldNames, 'partial');
        fields = CalendarMergeFields(calendar, fields, partialZonedDateTime);
        fields = PrepareTemporalFields(fields, fieldNames, ['offset']);
        var disambiguation = ToTemporalDisambiguation(options);
        var offset = ToTemporalOffset(options, 'prefer');
        var _ES$InterpretTemporal = InterpretTemporalDateTimeFields(calendar, fields, options),
          year = _ES$InterpretTemporal.year,
          month = _ES$InterpretTemporal.month,
          day = _ES$InterpretTemporal.day,
          hour = _ES$InterpretTemporal.hour,
          minute = _ES$InterpretTemporal.minute,
          second = _ES$InterpretTemporal.second,
          millisecond = _ES$InterpretTemporal.millisecond,
          microsecond = _ES$InterpretTemporal.microsecond,
          nanosecond = _ES$InterpretTemporal.nanosecond;
        var offsetNs = ParseTimeZoneOffsetString(fields.offset);
        var timeZone = GetSlot(this, TIME_ZONE);
        var epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, 'option', offsetNs, timeZone, disambiguation, offset, /* matchMinute = */false);
        return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
      }
    }, {
      key: "withPlainDate",
      value: function withPlainDate(temporalDate) {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        temporalDate = ToTemporalDate(temporalDate);
        var year = GetSlot(temporalDate, ISO_YEAR);
        var month = GetSlot(temporalDate, ISO_MONTH);
        var day = GetSlot(temporalDate, ISO_DAY);
        var calendar = GetSlot(temporalDate, CALENDAR);
        var thisDt = dateTime(this);
        var hour = GetSlot(thisDt, ISO_HOUR);
        var minute = GetSlot(thisDt, ISO_MINUTE);
        var second = GetSlot(thisDt, ISO_SECOND);
        var millisecond = GetSlot(thisDt, ISO_MILLISECOND);
        var microsecond = GetSlot(thisDt, ISO_MICROSECOND);
        var nanosecond = GetSlot(thisDt, ISO_NANOSECOND);
        calendar = ConsolidateCalendars(GetSlot(this, CALENDAR), calendar);
        var timeZone = GetSlot(this, TIME_ZONE);
        var PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        var dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        var instant = GetInstantFor(timeZone, dt, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "withPlainTime",
      value: function withPlainTime() {
        var temporalTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var PlainTime = GetIntrinsic('%Temporal.PlainTime%');
        temporalTime = temporalTime === undefined ? new PlainTime() : ToTemporalTime(temporalTime);
        var thisDt = dateTime(this);
        var year = GetSlot(thisDt, ISO_YEAR);
        var month = GetSlot(thisDt, ISO_MONTH);
        var day = GetSlot(thisDt, ISO_DAY);
        var calendar = GetSlot(this, CALENDAR);
        var hour = GetSlot(temporalTime, ISO_HOUR);
        var minute = GetSlot(temporalTime, ISO_MINUTE);
        var second = GetSlot(temporalTime, ISO_SECOND);
        var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
        var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
        var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        var timeZone = GetSlot(this, TIME_ZONE);
        var PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        var dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        var instant = GetInstantFor(timeZone, dt, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "withTimeZone",
      value: function withTimeZone(timeZone) {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        timeZone = ToTemporalTimeZoneSlotValue(timeZone);
        return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
      }
    }, {
      key: "withCalendar",
      value: function withCalendar(calendar) {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        calendar = ToTemporalCalendarSlotValue(calendar);
        return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), GetSlot(this, TIME_ZONE), calendar);
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromZonedDateTime('add', this, temporalDurationLike, options);
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return AddDurationToOrSubtractDurationFromZonedDateTime('subtract', this, temporalDurationLike, options);
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalZonedDateTime('until', this, other, options);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return DifferenceTemporalZonedDateTime('since', this, other, options);
      }
    }, {
      key: "round",
      value: function round(roundTo) {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        if (roundTo === undefined) throw new TypeError('options parameter is required');
        if (Type$6(roundTo) === 'String') {
          var stringParam = roundTo;
          roundTo = ObjectCreate(null);
          roundTo.smallestUnit = stringParam;
        } else {
          roundTo = GetOptionsObject(roundTo);
        }
        var roundingIncrement = ToTemporalRoundingIncrement(roundTo);
        var roundingMode = ToTemporalRoundingMode(roundTo, 'halfExpand');
        var smallestUnit = GetTemporalUnit(roundTo, 'smallestUnit', 'time', REQUIRED, ['day']);
        var maximumIncrements = {
          day: 1,
          hour: 24,
          minute: 60,
          second: 60,
          millisecond: 1000,
          microsecond: 1000,
          nanosecond: 1000
        };
        var maximum = maximumIncrements[smallestUnit];
        var inclusive = maximum === 1;
        ValidateTemporalRoundingIncrement(roundingIncrement, maximum, inclusive);

        // first, round the underlying DateTime fields
        var dt = dateTime(this);
        var year = GetSlot(dt, ISO_YEAR);
        var month = GetSlot(dt, ISO_MONTH);
        var day = GetSlot(dt, ISO_DAY);
        var hour = GetSlot(dt, ISO_HOUR);
        var minute = GetSlot(dt, ISO_MINUTE);
        var second = GetSlot(dt, ISO_SECOND);
        var millisecond = GetSlot(dt, ISO_MILLISECOND);
        var microsecond = GetSlot(dt, ISO_MICROSECOND);
        var nanosecond = GetSlot(dt, ISO_NANOSECOND);
        var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        var timeZone = GetSlot(this, TIME_ZONE);
        var calendar = GetSlot(this, CALENDAR);
        var dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0);
        var instantStart = GetInstantFor(timeZone, dtStart, 'compatible');
        var endNs = AddZonedDateTime(instantStart, timeZone, calendar, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
        var dayLengthNs = endNs.subtract(GetSlot(instantStart, EPOCHNANOSECONDS));
        if (dayLengthNs.leq(0)) {
          throw new RangeError('cannot round a ZonedDateTime in a calendar with zero- or negative-length days');
        }
        // Now reset all DateTime fields but leave the TimeZone. The offset will
        // also be retained if the new date/time values are still OK with the old
        // offset. Otherwise the offset will be changed to be compatible with the
        // new date/time values. If DST disambiguation is required, the `compatible`
        // disambiguation algorithm will be used.
        var _ES$RoundISODateTime = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode, dayLengthNs);
        year = _ES$RoundISODateTime.year;
        month = _ES$RoundISODateTime.month;
        day = _ES$RoundISODateTime.day;
        hour = _ES$RoundISODateTime.hour;
        minute = _ES$RoundISODateTime.minute;
        second = _ES$RoundISODateTime.second;
        millisecond = _ES$RoundISODateTime.millisecond;
        microsecond = _ES$RoundISODateTime.microsecond;
        nanosecond = _ES$RoundISODateTime.nanosecond;
        var offsetNs = GetOffsetNanosecondsFor(timeZone, GetSlot(this, INSTANT));
        var epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, 'option', offsetNs, timeZone, 'compatible', 'prefer', /* matchMinute = */false);
        return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, GetSlot(this, CALENDAR));
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        other = ToTemporalZonedDateTime(other);
        var one = GetSlot(this, EPOCHNANOSECONDS);
        var two = GetSlot(other, EPOCHNANOSECONDS);
        if (!bigInt(one).equals(two)) return false;
        if (!TimeZoneEquals(GetSlot(this, TIME_ZONE), GetSlot(other, TIME_ZONE))) return false;
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var showCalendar = ToCalendarNameOption(options);
        var digits = ToFractionalSecondDigits(options);
        var showOffset = ToShowOffsetOption(options);
        var roundingMode = ToTemporalRoundingMode(options, 'trunc');
        var smallestUnit = GetTemporalUnit(options, 'smallestUnit', 'time', undefined);
        if (smallestUnit === 'hour') throw new RangeError('smallestUnit must be a time unit other than "hour"');
        var showTimeZone = ToTimeZoneNameOption(options);
        var _ES$ToSecondsStringPr = ToSecondsStringPrecisionRecord(smallestUnit, digits),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;
        return TemporalZonedDateTimeToString(this, precision, showCalendar, showTimeZone, showOffset, {
          unit: unit,
          increment: increment,
          roundingMode: roundingMode
        });
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        options = GetOptionsObject(options);
        var optionsCopy = ObjectCreate(null);
        // This is not quite per specification, but this polyfill's DateTimeFormat
        // already doesn't match the InitializeDateTimeFormat operation, and the
        // access order might change anyway;
        // see https://github.com/tc39/ecma402/issues/747
        CopyDataProperties(optionsCopy, options, ['timeZone']);
        if (options.timeZone !== undefined) {
          throw new TypeError('ZonedDateTime toLocaleString does not accept a timeZone option');
        }
        if (optionsCopy.year === undefined && optionsCopy.month === undefined && optionsCopy.day === undefined && optionsCopy.weekday === undefined && optionsCopy.dateStyle === undefined && optionsCopy.hour === undefined && optionsCopy.minute === undefined && optionsCopy.second === undefined && optionsCopy.timeStyle === undefined && optionsCopy.dayPeriod === undefined && optionsCopy.timeZoneName === undefined) {
          optionsCopy.timeZoneName = 'short';
          // The rest of the defaults will be filled in by formatting the Instant
        }

        var timeZone = ToTemporalTimeZoneIdentifier(GetSlot(this, TIME_ZONE));
        if (IsTimeZoneOffsetString(timeZone)) {
          // Note: https://github.com/tc39/ecma402/issues/683 will remove this
          throw new RangeError('toLocaleString does not support offset string time zones');
        }
        timeZone = GetCanonicalTimeZoneIdentifier(timeZone);
        optionsCopy.timeZone = timeZone;
        var formatter = new DateTimeFormat(locales, optionsCopy);
        var localeCalendarIdentifier = Call$1(customResolvedOptions, formatter, []).calendar;
        var calendarIdentifier = ToTemporalCalendarIdentifier(GetSlot(this, CALENDAR));
        if (calendarIdentifier !== 'iso8601' && localeCalendarIdentifier !== 'iso8601' && localeCalendarIdentifier !== calendarIdentifier) {
          throw new RangeError("cannot format ZonedDateTime with calendar ".concat(calendarIdentifier) + " in locale with calendar ".concat(localeCalendarIdentifier));
        }
        return formatter.format(GetSlot(this, INSTANT));
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return TemporalZonedDateTimeToString(this, 'auto');
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.ZonedDateTime');
      }
    }, {
      key: "startOfDay",
      value: function startOfDay() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var dt = dateTime(this);
        var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        var calendar = GetSlot(this, CALENDAR);
        var dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0, calendar);
        var timeZone = GetSlot(this, TIME_ZONE);
        var instant = GetInstantFor(timeZone, dtStart, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "toInstant",
      value: function toInstant() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
        return new TemporalInstant(GetSlot(this, EPOCHNANOSECONDS));
      }
    }, {
      key: "toPlainDate",
      value: function toPlainDate() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return TemporalDateTimeToDate(dateTime(this));
      }
    }, {
      key: "toPlainTime",
      value: function toPlainTime() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return TemporalDateTimeToTime(dateTime(this));
      }
    }, {
      key: "toPlainDateTime",
      value: function toPlainDateTime() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return dateTime(this);
      }
    }, {
      key: "toPlainYearMonth",
      value: function toPlainYearMonth() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        return CalendarYearMonthFromFields(calendar, fields);
      }
    }, {
      key: "toPlainMonthDay",
      value: function toPlainMonthDay() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
        var fields = PrepareTemporalFields(this, fieldNames, []);
        return CalendarMonthDayFromFields(calendar, fields);
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var dt = dateTime(this);
        var tz = GetSlot(this, TIME_ZONE);
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(dt, ISO_DAY),
          isoHour: GetSlot(dt, ISO_HOUR),
          isoMicrosecond: GetSlot(dt, ISO_MICROSECOND),
          isoMillisecond: GetSlot(dt, ISO_MILLISECOND),
          isoMinute: GetSlot(dt, ISO_MINUTE),
          isoMonth: GetSlot(dt, ISO_MONTH),
          isoNanosecond: GetSlot(dt, ISO_NANOSECOND),
          isoSecond: GetSlot(dt, ISO_SECOND),
          isoYear: GetSlot(dt, ISO_YEAR),
          offset: GetOffsetStringFor(tz, GetSlot(this, INSTANT)),
          timeZone: tz
        };
      }
    }, {
      key: "getCalendar",
      value: function getCalendar() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return ToTemporalCalendarObject(GetSlot(this, CALENDAR));
      }
    }, {
      key: "getTimeZone",
      value: function getTimeZone() {
        if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return ToTemporalTimeZoneObject(GetSlot(this, TIME_ZONE));
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = GetOptionsObject(options);
        if (IsTemporalZonedDateTime(item)) {
          ToTemporalDisambiguation(options); // validate and ignore
          ToTemporalOffset(options, 'reject');
          ToTemporalOverflow(options);
          return CreateTemporalZonedDateTime(GetSlot(item, EPOCHNANOSECONDS), GetSlot(item, TIME_ZONE), GetSlot(item, CALENDAR));
        }
        return ToTemporalZonedDateTime(item, options);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ToTemporalZonedDateTime(one);
        two = ToTemporalZonedDateTime(two);
        var ns1 = GetSlot(one, EPOCHNANOSECONDS);
        var ns2 = GetSlot(two, EPOCHNANOSECONDS);
        if (bigInt(ns1).lesser(ns2)) return -1;
        if (bigInt(ns1).greater(ns2)) return 1;
        return 0;
      }
    }]);
    return ZonedDateTime;
  }();
  MakeIntrinsicClass(ZonedDateTime, 'Temporal.ZonedDateTime');
  function dateTime(zdt) {
    return GetPlainDateTimeFor(GetSlot(zdt, TIME_ZONE), GetSlot(zdt, INSTANT), GetSlot(zdt, CALENDAR));
  }

  /* global false */

  {
    // eslint-disable-next-line no-console
    console.warn('This polyfill should only be used to run tests or to experiment in the browser devtools console.\n' + 'To polyfill Temporal in your own projects, see https://github.com/tc39/proposal-temporal#polyfills.');
  }

  var Temporal = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Calendar: Calendar,
    Duration: Duration,
    Instant: Instant,
    Now: Now,
    PlainDate: PlainDate,
    PlainDateTime: PlainDateTime,
    PlainMonthDay: PlainMonthDay,
    PlainTime: PlainTime,
    PlainYearMonth: PlainYearMonth,
    TimeZone: TimeZone,
    ZonedDateTime: ZonedDateTime
  });

  var DatePrototypeValueOf = Date.prototype.valueOf;
  function toTemporalInstant() {
    var epochNanoseconds = bigInt(Call$1(DatePrototypeValueOf, this, [])).multiply(1e6);
    return new Instant(BigIntIfAvailable(epochNanoseconds));
  }

  Object.defineProperty(globalThis, 'Temporal', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true
  });
  copy(globalThis.Temporal, Temporal);
  Object.defineProperty(globalThis.Temporal, Symbol.toStringTag, {
    value: 'Temporal',
    writable: false,
    enumerable: false,
    configurable: true
  });
  copy(globalThis.Temporal.Now, Now);
  copy(globalThis.Intl, Intl$1);
  Object.defineProperty(globalThis.Date.prototype, 'toTemporalInstant', {
    value: toTemporalInstant,
    writable: true,
    enumerable: false,
    configurable: true
  });
  function copy(target, source) {
    var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(source)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        Object.defineProperty(target, prop, {
          value: source[prop],
          writable: true,
          enumerable: false,
          configurable: true
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  // Work around https://github.com/babel/babel/issues/2025.
  var types = [globalThis.Temporal.Instant, globalThis.Temporal.Calendar, globalThis.Temporal.PlainDate, globalThis.Temporal.PlainDateTime, globalThis.Temporal.Duration, globalThis.Temporal.PlainMonthDay,
  // globalThis.Temporal.Now, // plain object (not a constructor), so no `prototype`
  globalThis.Temporal.PlainTime, globalThis.Temporal.TimeZone, globalThis.Temporal.PlainYearMonth, globalThis.Temporal.ZonedDateTime];
  for (var _i = 0, _types = types; _i < _types.length; _i++) {
    var type = _types[_i];
    var descriptor = Object.getOwnPropertyDescriptor(type, 'prototype');
    if (descriptor.configurable || descriptor.enumerable || descriptor.writable) {
      descriptor.configurable = false;
      descriptor.enumerable = false;
      descriptor.writable = false;
      Object.defineProperty(type, 'prototype', descriptor);
    }
  }

  exports.Intl = Intl$1;
  exports.Temporal = Temporal;
  exports.toTemporalInstant = toTemporalInstant;

}));
//# sourceMappingURL=playground.js.map
