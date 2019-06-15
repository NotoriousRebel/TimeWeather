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
    var api_key = "0162c6c7047d43c990b16813d27eae23";
    if (process.argv.length <= 2) {
        var err = new Error("No arguments entered.");
        throw err;
    }
    if (api_key === "") {
        var err = new Error("API Key has not been entered.");
        throw err;
    }
    try {
        var args = process.argv.slice(2, process.argv.length)
            .toString()
            .split(",");
        args = args.filter(String);
        args.forEach(function (value) {
            getWeather_1.getWeather(api_key, value);
        });
    }
    catch (err) {
        console.log("An error has occurred: " + err.message);
    }
});
//# sourceMappingURL=main.js.map