var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
    }
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
        errorMessage: undefined
      });
    }, function(e) {
      that.setState({
        errorMessage: e.message,
        isLoading: false
      });
    });
  },

  render: function() {
    var {temp, location, isLoading, errorMessage} = this.state;

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

    function renderError() {
      if (typeof(errorMessage) === 'string') {
        return (
          <ErrorModal title="Whoops" message={errorMessage} buttonTitle="Snap!" />
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <div><WeatherForm onSearch={ this.handleSearch }/></div>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
