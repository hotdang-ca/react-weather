var axios = require('axios');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const APIKEY = 'e595af6e352ac9f9ad212604d7d3a39b';
const UNITS = 'metric';

module.exports = {
  getTemp: function(location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${BASE_URL}?appid=${APIKEY}&units=${UNITS}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response) {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        console.log("Weather is " + response.data.main.temp);
        return response.data.main.temp;
      }
    }, function(response) {
      // throw new Error(response.data.message);
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}
