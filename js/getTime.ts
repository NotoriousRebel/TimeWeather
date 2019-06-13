export function calcTime(epoch_time: string, lat: string, loc: string, lon: string) {
    const geoTz = require('geo-tz');
    const moment = require('moment-timezone');
    const timezone:string = geoTz(lat,lon);
    //Look up timezone with latitude and longitude
    let time = moment().tz(timezone.toString());
    time = time.format("hh:mm a");
    return time;
}
