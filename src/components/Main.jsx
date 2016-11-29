var React = require('react');
var Nav = require('Nav');

var Main = ({children}) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

module.exports = Main;
