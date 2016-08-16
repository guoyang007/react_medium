'use strict';

import React from 'react';

require('./index.less');

class ArticleList extends React.Component {
    render() {
        return (
        	<div className="com-article-list">ArticleList</div>
        );
    }
}

ArticleList.displayName = 'ArticleList';

ArticleList.propTypes = {};
ArticleList.defaultProps = {};

export default ArticleList;
