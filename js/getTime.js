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
    function calcTime(epoch_time, lat, loc, lon) {
        var geoTz = require('geo-tz');
        var moment = require('moment-timezone');
        var timezone = geoTz(lat, lon);
        //Look up timezone with latitude and longitude
        var time = moment().tz(timezone.toString());
        time = time.format("hh:mm a");
        return time;
    }
    exports.calcTime = calcTime;
});
//# sourceMappingURL=getTime.js.map