'use strict';

import React from 'react';
import GridArticle from 'components/grid-article/index.js'
import GridKeyArticle from 'components/grid-key-article/index.js'

require('./index.less');

class ArticleList extends React.Component {
    render() {
        return (
        	<div className="com-article-list">
	        	<GridArticle />
		      	<GridArticle />
		      	<GridKeyArticle />
		      	<GridKeyArticle />
		      	<GridArticle />
		      	<GridArticle />
		      	<GridArticle />
		      	<GridArticle />
		      	<GridArticle />
		      	<GridKeyArticle />
		      	<GridArticle />
		      	<GridArticle />
		      	<GridArticle />
		      	<GridKeyArticle />
        	</div>
        );
    }
}

ArticleList.displayName = 'ArticleList';

ArticleList.propTypes = {};
ArticleList.defaultProps = {};

export default ArticleList;
