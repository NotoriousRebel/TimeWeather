(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./getWeather"], factory);
    }
})(function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var getWeather_1 = require("./getWeather");
    var api_key = "e50dbfae2936cf8e7c75772c2f0922d3";
    if (process.argv.length <= 2) {
        throw { name: "NoArgumentsError", message: "No arguments entered!" };
    }
    try {
        var args = process.argv.slice(2, process.argv.length)
            .toString()
            .split(",");
        args = args.filter(String);
        args.forEach(function (value) {
            //console.log("Getting time and weather for location: " + value);
            getWeather_1.getWeather(api_key, value);
        });
    }
    catch (err) {
        console.log("An error has occurred: " + err.message);
    }
});
//# sourceMappingURL=main.js.map