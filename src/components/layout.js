require('normalize.css/normalize.css');
require('./layout.less');

import React from 'react';
import Header from './header/index.js';
import ArticleList from './article-list/index.js'

class Layout extends React.Component {
  render() {
    return (
      <div className="index">
      	<Header />
        <ArticleList />
        
      	{this.props.children}
      </div>
    );
  }
}

Layout.defaultProps = {
};

export default Layout;
