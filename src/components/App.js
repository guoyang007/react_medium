require('normalize.css/normalize.css');
require('./App.css');

import React from 'react';
import Header from './header/index.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      	<Header />

        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
