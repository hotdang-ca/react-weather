var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>It's {temp}℃ in {location}</div>
  );
};

module.exports = WeatherMessage;
