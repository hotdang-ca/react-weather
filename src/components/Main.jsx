var React = require('react');
var Nav = require('Nav');

var Main = ({children}) => {
  return (
    <div>
      <h2>Main Component (Stateless)</h2>
      <Nav />
      {children}
    </div>
  );
};

module.exports = Main;
