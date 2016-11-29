var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    var searchTerm = this.refs.searchField.value;
    var encodedLocation = encodeURIComponent(searchTerm);
    if (encodedLocation.length > 0) {
      this.refs.searchField.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold' }}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold' }}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold' }}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather by City" ref="searchField"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
