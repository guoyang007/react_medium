'use strict';

import React from 'react';

require('./index.less');

class ArticleDetail extends React.Component {
    render() {
        return (
        	<div className="com-article-detail">ArticleDetail</div>
        );
    }
}

ArticleDetail.displayName = 'ArticleDetail';

ArticleDetail.propTypes = {};
ArticleDetail.defaultProps = {};

export default ArticleDetail;
