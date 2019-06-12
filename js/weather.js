(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    if (process.argv.length <= 2) {
        throw "No arguments entered!";
    }
    var api_key = "";
    var fetch = require("node-fetch");
    function getTime(loc) {
        return "";
    }
    var temp = {
        temperature: "",
        get temp() {
            return this.temperature;
        },
        set temp(value) {
            this.temperature = value;
        }
    };
    function isPostalCode(str) {
        return /^\d+$/.test(str);
    }
    function getWeather(loc) {
        var far = "";
        var base_url = "https://api.openweathermap.org/data/2.5/weather";
        if (loc.includes(" ")) {
            loc = loc.replace(" ", "%20");
        }
        base_url = isPostalCode(loc) ? base_url + "?zip=" : base_url + "?q=";
        base_url += loc + '&cnt=1' + '&APPID=' + api_key;
        console.log("Base url is " + base_url);
        fetch(base_url)
            .then(function (resp) {
            return resp.json();
        })
            .then(function (data) {
            var unix_time = data.dt;
            var timezone = data.timeZone;
            far = (((parseFloat(data.main.temp) - 273.15) * 1.8) + 32).toFixed(2);
            //Convert Kelvin To Fahrenheit
            console.log("In Degress is: " + far);
        })
            .catch(function () {
            // catch any errors
            console.log("An error has occurred, unable to get temperature and weather!");
        });
    }
    var args = process.argv.slice(2, process.argv.length)
        .toString()
        .split(",");
    args = args.filter(String);
    console.log("Args are: " + args);
    args.forEach(function (value) {
        console.log("Getting time and weather for location: " + value);
        getWeather(value);
    });
});
//# sourceMappingURL=weather.js.map