'use strict';

import React from 'react';
import ArticleDetail from '../../components/article-detail/index.js';
import RelatedComments from '../../components/related-comments/index.js';

require('./show.less');

class ArticlesShow extends React.Component {
    render() {
        return (
        	<div className="page-articles-show">
        		<ArticleDetail params={this.props.params} />
        		<RelatedComments />
        	</div>
        );
    }
}

ArticlesShow.displayName = 'ArticlesShow';

ArticlesShow.propTypes = {};
ArticlesShow.defaultProps = {};

export default ArticlesShow;
