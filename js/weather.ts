'use strict';

import {type} from "os";

if(process.argv.length <= 2){
    throw "No arguments entered!";
}

const api_key: string = "";
const fetch = require("node-fetch");

function getTime(loc: string){
    return "";
}

function getWeather(loc: string) {
    let far: string = "";
    if(loc.includes(" ")){
        loc = loc.replace(" ","%20");
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + loc + '&cnt=1' + '&APPID=' + api_key)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data.main.temp);
            far = (((parseFloat(data.main.temp)-273.15)*1.8)+32).toFixed(2);
            //Convert Kelvin To Fahrenheit
            console.log("In Degress is: " + far);

        })
        .catch(function () {
            // catch any errors
        });
    return far
}

var data = getWeather("Tokyo");
console.log("data: " + data);
/*
if(data === ''){
    console.log("An error has occurred, unable to get weather for location");
}
 */


function main() {
    let args: Array<string> = process.argv.slice(2, process.argv.length)
        .toString()
        .split(",");
    args = args.filter(String);

    for (var arg in args) {
        //let weather: string = getWeather(arg);
        //let temp: string = getTime(arg);
        console.log(arg)
    }
    console.log(args);
}
