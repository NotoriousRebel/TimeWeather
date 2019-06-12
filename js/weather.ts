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

var temp = {
    temperature: "",
    get temp() {
        return this.temperature;
    },
    set temp(value: string){
        this.temperature = value;
    }
};

function isPostalCode(str: string){
    return /^\d+$/.test(str);
}

function getWeather(loc: string) {
    let far: string = "";
    let base_url: string = "https://api.openweathermap.org/data/2.5/weather";
    if(loc.includes(" ")){
        loc = loc.replace(" ","%20");
    }
    base_url = isPostalCode(loc) ? base_url + "?zip=" : base_url + "?q=";
    base_url += loc + '&cnt=1' + '&APPID=' + api_key;
    console.log("Base url is " + base_url);
    fetch(base_url)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            let unix_time:string = data.dt;
            let timezone:string = data.timeZone;
            far = (((parseFloat(data.main.temp)-273.15)*1.8)+32).toFixed(2);
            //Convert Kelvin To Fahrenheit
            console.log("In Degress is: " + far);
        })
        .catch(function () {
            // catch any errors
            console.log("An error has occurred, unable to get temperature and weather!")
        });
}



let args: Array<string> = process.argv.slice(2, process.argv.length)
    .toString()
    .split(",");
args = args.filter(String);
console.log("Args are: " + args);
args.forEach(function (value) {
    console.log("Getting time and weather for location: " + value);
    getWeather(value);
});

