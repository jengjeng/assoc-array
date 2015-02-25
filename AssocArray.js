/*
 * Assoac Array
 * @version v1.0.0
 */

; (function ($, window, document, undefined) {
    window.AssocArray = function () {
        this._version = 1.0;
        this.data = {};
        this.get = function (key) {
            return this.data[String(key)];
        }
        this.set = function (key, value) {
            this.data[String(key)] = value;
            return this.data[String(key)];
        }
        this.remove = function (key) {
            delete this.data[String(key)];
            return this;
        }
        this.clear = function () {
            this.data = {};
            return this;
        }
        this.clone = function () {
            if (typeof $ === undefined)
                throw "jQuery required for this method";
            return $.extend(true, {}, this, {});
        }
        this.array = function () {
            return this.map(function (e, i) { return { key: i, value: e }; });
        }
        this.keys = function () {
            return this.map(function (e, i) { return i; });
        }
        this.val = function () {
            return this.map(function (e) { return e; });
        }
        this.json = function () {
            return JSON.stringify(this.array());
        }
        this.jsonKeys = function () {
            return JSON.stringify(this.keys());
        }
        this.jsonValues = function () {
            return JSON.stringify(this.val());
        }
        this.every = function (fn) {
            if (this.length() === 0)
                return false;
            for (var i in this.data) {
                if (!fn(this.data[i], i, this.data))
                    return false;
            }
            return true;
        }
        this.filter = function (fn) {
            var a = new AssocArray();
            for (var i in this.data) {
                if (fn(this.data[i], i, this.data))
                    a.set(i, this.data[i]);
            }
            return a;
        }
        this.forEach = function (fn) {
            for (var i in this.data) {
                fn(this.data[i], i, this.data)
            }
            return this;
        }
        this.contains = function (k) {
            if (typeof k === "undefined") return false;
            var _this = this, chk = true;
            if (!(k instanceof Array))
                k = [k];
            k.forEach(function (e, i) {
                chk = (typeof _this.get(e) === "undefined");
                return !chk;
            });
            return !chk;
        }
        this.indexOf = function (key) {
            var index = 0;
            for (var i in this.data) {
                if (i === String(key)) return index;
                else index++;
            }
            return -1;
        }
        this.length = function () {
            return Object.keys(this.data).length;
        }
        this.map = function (fn) {
            var a = [];
            for (var i in this.data) {
                if (fn instanceof Function)
                    a.push(fn(this.data[i], i, this.data));
                else
                    a.push(this.data[fn]);
            }
            return a;
        }
        this.pop = function () {
            var arr = this.val();
            for (var i in this.data) {
                delete this.data[i];
                return arr.pop();
            }
            return;
        }
        this.reduce = function (fn) {
            var arr = this.val();
            return Object.keys(arr).reduce(function (sum, key) {
                if (fn instanceof Function)
                    return fn(sum, arr[key], this.data);
                else
                    return sum + key[fn];
            }, 0);
        }
        this.some = function (fn) {
            for (var i in this.data) {
                if (fn(this.data[i], i, this.data))
                    return true;
            }
            return false;
        }
        this.slice = function (t) {
            var cnt = 0, match = false, a = new AssocArray();
            for (var i in this.data) {
                if (!match) {
                    if (typeof t === "number")
                        match = cnt === t;
                    else
                        match = i === String(t);
                }
                if (match) {
                    a.set(i, this.data[i]);
                }
            }
            return a;
        }
    }
})(jQuery, window, document);