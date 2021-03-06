// Generated by CoffeeScript 1.6.3
(function() {
  var Utils;

  module.exports = Utils = (function() {
    function Utils(api) {
      this.api = api;
      this;
    }

    Utils.prototype.countries = function(callback) {
      if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
      } else {
        this.api.request("GET", "countries", {}, callback);
        return this;
      }
    };

    Utils.prototype.verify = function(_object, callback) {
      var _i, _o, _ref;
      if (typeof _object !== "object") {
        if (typeof _object === "function") {
          callback = _object;
        }
        if (typeof callback === "function") {
          callback("Object can not be empty", null);
        } else {
          throw new Error("Object, Callback can not be empty");
        }
        return this;
      } else {
        _ref = _object.address_lines != null;
        for (_i in _ref) {
          _o = _ref[_i];
          _object["address_line" + (++_i)] = _o;
        }
        delete _object.address_lines;
        this.api.request("POST", "verify", _object, callback);
        return this;
      }
    };

    return Utils;

  })();

}).call(this);
