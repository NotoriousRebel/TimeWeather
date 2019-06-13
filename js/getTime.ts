export function calcTime(epoch_time: string, lat: string, lon: string) {
    const geoTz = require('geo-tz');
    const moment = require('moment-timezone');
    let timezone:string = geoTz(lat,lon);
    const time = moment(epoch_time).tz(timezone.toString());
    let offset:string = time.format("Z");
    let plus:boolean = false;
    let minus:boolean = false;
    if (offset.includes("+")){
        plus = true;
        offset = offset.replace("+","")
    }
    else{
        minus = true;
        offset = offset.replace("-","")
    }

    return "";
}
