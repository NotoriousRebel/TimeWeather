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
    function getWeather(loc) {
        var far = "";
        if (loc.includes(" ")) {
            loc = loc.replace(" ", "%20");
        }
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + loc + '&cnt=1' + '&APPID=' + api_key)
            .then(function (resp) {
            return resp.json();
        })
            .then(function (data) {
            console.log(data.main.temp);
            far = (((parseFloat(data.main.temp) - 273.15) * 1.8) + 32).toFixed(2);
            //Convert Kelvin To Fahrenheit
            console.log("In Degress is: " + far);
        })
            .catch(function () {
            // catch any errors
        });
        return far;
    }
    var data = getWeather("Tokyo");
    console.log("data: " + data);
    /*
    if(data === ''){
        console.log("An error has occurred, unable to get weather for location");
    }
     */
    function main() {
        var args = process.argv.slice(2, process.argv.length)
            .toString()
            .split(",");
        args = args.filter(String);
        for (var arg in args) {
            //let weather: string = getWeather(arg);
            //let temp: string = getTime(arg);
            console.log(arg);
        }
        console.log(args);
    }
});
