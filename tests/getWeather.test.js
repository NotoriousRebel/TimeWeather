(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../src/getWeather"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getWeather_1 = require("../src/getWeather");
    test('Expects true to be returned as location is a postal code', function () {
        expect(getWeather_1.isPostalCode("94016")).toBeTruthy();
    });
    test('Expects false because London is a city not postal code', function () {
        expect(getWeather_1.isPostalCode("London")).toBeFalsy();
    });
});
//# sourceMappingURL=getWeather.test.js.map