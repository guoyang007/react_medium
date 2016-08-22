'use strict';

import React from 'react';
import ArticleDetail from '../../components/article-detail/index.js';

require('./show.less');

class ArticlesShow extends React.Component {
    render() {
        return (
        	<div className="page-articles-show">
        		<ArticleDetail />
        	</div>
        );
    }
}

ArticlesShow.displayName = 'ArticlesShow';

ArticlesShow.propTypes = {};
ArticlesShow.defaultProps = {};

export default ArticlesShow;
