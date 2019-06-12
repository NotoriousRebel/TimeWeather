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
    var fetch = require("node-fetch");
    function isPostalCode(str) {
        return /^\d+$/.test(str);
    }
    function getWeather(api_key, loc) {
        var base_url = "https://api.openweathermap.org/data/2.5/weather";
        if (loc.includes(" ")) {
            loc = loc.replace(" ", "%20");
        }
        base_url = isPostalCode(loc) ? base_url + "?zip=" : base_url + "?q=";
        base_url += loc + '&cnt=1' + '&APPID=' + api_key;
        fetch(base_url)
            .then(function (resp) {
            return resp.json();
        })
            .then(function (data) {
            var unix_time = data.dt;
            var timezone = data.timeZone;
            var far = (((parseFloat(data.main.temp) - 273.15) * 1.8) + 32).toFixed(2);
            //Convert Kelvin To Fahrenheit
            console.log("The temperature for " + loc + " in Fahrenheit is: " + far);
        })
            .catch(function (err) {
            // catch any errors
            console.log("An error has occurred, unable to get temperature and weather");
            console.log("Error is: " + err);
        });
    }
    exports.getWeather = getWeather;
});
//# sourceMappingURL=getWeather.js.map