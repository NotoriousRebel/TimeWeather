(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function calcTime(epoch_time, lat, lon) {
        var geoTz = require('geo-tz');
        var moment = require('moment-timezone');
        var timezone = geoTz(lat, lon);
        var time = moment(epoch_time).tz(timezone.toString());
        var offset = time.format("Z");
        var plus = false;
        var minus = false;
        if (offset.includes("+")) {
            plus = true;
            offset = offset.replace("+", "");
        }
        else {
            minus = true;
            offset = offset.replace("-", "");
        }
        return "";
    }
    exports.calcTime = calcTime;
});
//# sourceMappingURL=getTime.js.map