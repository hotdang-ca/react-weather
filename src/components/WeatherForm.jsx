var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    var cityName = this.refs.locationField.value;
    if (typeof(cityName) === 'string' && cityName.length > 0) {
      this.refs.locationField.value = '';
      this.props.onSearch(cityName);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div><input type='search' placeholder="Search Weather by City" ref="locationField" /></div>
        <div><button className="hollow expanded button">Get Weather</button></div>
      </form>
    );
  }
});
module.exports = WeatherForm;
