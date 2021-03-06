'use strict';

import {type} from "os";
import {getWeather} from "./getWeather";

const api_key: string = "";

if(process.argv.length <= 2){
    const err:Error = new Error("No arguments entered.");
    throw err;
}

if(api_key === ""){
    const err:Error = new Error("API Key has not been entered.");
    throw err
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
