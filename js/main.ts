'use strict';

import {type} from "os";
import {getWeather} from "./getWeather";

const api_key: string = "0162c6c7047d43c990b16813d27eae23";

if(process.argv.length <= 2){
    let err:Error = new Error("No arguments entered!");
    throw err;
}

try {
    let args: Array<string> = process.argv.slice(2, process.argv.length)
        .toString()
        .split(",");
    args = args.filter(String);
    args.forEach(function (value) {
        getWeather(api_key, value);
    });
}
catch (err) {
    console.log("An error has occurred: " + err.message);
}
