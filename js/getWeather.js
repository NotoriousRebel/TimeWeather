(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./getTime"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getTime_1 = require("./getTime");
    var fetch = require("node-fetch");
    function isPostalCode(str) {
        return /^\d+$/.test(str);
    }
    function getWeather(api_key, loc) {
        var base_url = "https://api.openweathermap.org/data/2.5/weather";
        loc = loc.includes(" ") ? loc.replace(" ", "%20") : loc;
        base_url = isPostalCode(loc) ? base_url + "?zip=" : base_url + "?q=";
        base_url += loc + '&cnt=1' + '&APPID=' + api_key;
        fetch(base_url)
            .then(function (resp) {
            return resp.json();
        })
            .then(function (data) {
            var far = (((parseFloat(data.main.temp) - 273.15) * 1.8) + 32).toFixed(2);
            //Convert Kelvin To Fahrenheit
            loc = loc.includes("%20") ? loc.replace("%20", " ") : loc;
            console.log("The temperature for " + loc + " in Fahrenheit is: " + far);
            return data;
        })
            .then(function (data) {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var time = getTime_1.calcTime(data.dt, lat, loc, lon);
            console.log("The current time in: " + loc + " is: " + time);
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