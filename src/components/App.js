require('normalize.css/normalize.css');
require('./App.less');

import React from 'react';
import Header from './header/index.js';
import GridArticle from './grid-article/index.js'
import GridKeyArticle from './grid-key-article/index.js'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      	<Header />
      	<GridArticle />
      	<GridArticle />
      	<GridKeyArticle/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
