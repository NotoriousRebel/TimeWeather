'use strict';

import {type} from "os";
import {getWeather} from "./getWeather";

const api_key: string = "e50dbfae2936cf8e7c75772c2f0922d3";

if(process.argv.length <= 2){
    throw{name: "NoArgumentsError", message: "No arguments entered!"};
}

try {
    let args: Array<string> = process.argv.slice(2, process.argv.length)
        .toString()
        .split(",");
    args = args.filter(String);
    args.forEach(function (value) {
        //console.log("Getting time and weather for location: " + value);
        getWeather(api_key, value);
    });
}
catch (err) {
    console.log("An error has occurred: " + err.message);
}
