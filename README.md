# TimeWeather

* Entering in a list of cities or postal codes this <br>
  program will query the openweathermap API and <br>
  return the current time and temperature for the location.

* Currently requires an OpenWeatherMap API key can get one [here](https://openweathermap.org/api)

* Program requires geo-tz, moment-timezone, and node-fetch either install them seperately or do
   ```bash
   yarn install 
   ```
### To run  
```bash
node main.js Tokyo, 10001, Toronto, etc
```
