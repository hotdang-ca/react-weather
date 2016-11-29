var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
    }
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errMessage) {
      console.log(errMessage);

      that.setState({
        isLoading: false
      });

    });
  },

  render: function() {
    var {temp, location, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return (
          <h3 className="text-center"><em>Fetching Weather...</em></h3>
        );
      } else if (location) {
        return (
          <div><WeatherMessage location={location} temp={temp}/></div>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <div><WeatherForm onSearch={ this.handleSearch }/></div>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
