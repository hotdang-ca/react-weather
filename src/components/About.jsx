var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Simple weather application build on React. Built with <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/">The Complete React Web App Developer Course</a>, by <strong>Andrew Mead</strong></p>
      <div class="text-center flex-video widescreen">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/N0_T9ZdZ7yk" allowfullscreen></iframe>
      </div>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">OpenWeatherMap</a> - This was the weather data used.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
