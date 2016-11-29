var React = require('react');

var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
    buttonTitle: React.PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      title: 'Error',
      buttonTitle: 'Okay',
    };
  },
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function() {
    var {title, message, buttonTitle} = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button alert hollow" data-close="">
            {buttonTitle}
          </button>
        </p>
      </div>
    );
  },
});

module.exports = ErrorModal;
