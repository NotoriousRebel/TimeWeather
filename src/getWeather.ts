import {calcTime} from "./getTime";

const fetch = require("node-fetch");

export const isPostalCode = (str: string) => /^\d+$/.test(str);

export function getWeather (api_key: string, loc:string){
    let base_url: string = "https://api.openweathermap.org/data/2.5/weather";
    loc = loc.includes(" ") ? loc.replace(" ","%20") : loc;
    base_url = isPostalCode(loc) ? base_url + "?zip=" : base_url + "?q=";
    base_url += loc + '&cnt=1' + '&APPID=' + api_key;
    fetch(base_url)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            const resp_code:string = data.cod.toString();
            if(resp_code !== "200"){
                console.log("An error has occurred: ");
                const err:Error = new Error(data);
                throw err;
            }
            const far: string = (((parseFloat(data.main.temp)-273.15)*1.8)+32).toFixed(2);
            //Convert Kelvin To Fahrenheit
            loc = loc.includes("%20") ? loc.replace("%20"," ") : loc;
            console.log("The temperature for " + loc + " in Fahrenheit is: " + far);
            return data;
        })
        .then(function (data) {
            const lat:string = data.coord.lat;
            const lon:string = data.coord.lon;
            const time:string = calcTime(data.dt, lat, loc, lon);
            console.log("The current time in: " + loc + " is: " + time);
        })
        .catch(function (err) {
            // catch any errors
            console.log("An error has occurred, unable to get temperature and weather");
            console.log("Error is: " + err);
        });
}

