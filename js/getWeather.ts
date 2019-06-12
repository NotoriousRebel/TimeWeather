import {calcTime} from "./getTime";

const fetch = require("node-fetch");

function isPostalCode(str: string){
    return /^\d+$/.test(str);
}
export function getWeather (api_key: string, loc:string){
    let base_url: string = "https://api.openweathermap.org/data/2.5/weather";
    if(loc.includes(" ")){
        loc = loc.replace(" ","%20");
    }
    base_url = isPostalCode(loc) ? base_url + "?zip=" : base_url + "?q=";
    base_url += loc + '&cnt=1' + '&APPID=' + api_key;
    fetch(base_url)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            let unix_time:string = data.dt;
            let timezone:string = data.timeZone;
            let far: string = (((parseFloat(data.main.temp)-273.15)*1.8)+32).toFixed(2);
            //Convert Kelvin To Fahrenheit
            console.log("The temperature for " + loc + " in Fahrenheit is: " + far);

        })
        .catch(function (err) {
            // catch any errors
            console.log("An error has occurred, unable to get temperature and weather");
            console.log("Error is: " + err);
        });
}
