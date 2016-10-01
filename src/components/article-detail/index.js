'use strict';

import React, { PropTypes } from 'react';
import Loading from '../../components/loading/index.js'
import Toolbar from '../../components/toolbar/index.js';


require('./index.less');


class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { article_prop } = this.props;
        console.log(123,article_prop);
        const article=article_prop.article,isFetching=article_prop.isFetching;
        if (isFetching) {
            return(
                <div>loading...</div>
            )
        }else{
            return (
                <div className="com-article-detail">
                    <div className="article-detail-hd imgcover">
                        <img src={article.detail_pic} />
                    </div>
                    <div className="article-detail-bd">
                        <div className="detail" dangerouslySetInnerHTML={{__html: article.content}}></div>
                    </div>
                    <div className="article-detail-ft">
                        <ul className="tags">
                        </ul>
                    </div>
                    <Toolbar praise={article.praise} praiseCount={article.praise_count} commentCount={article.comment_count}/>
                </div>
            );
        }
    }
}

ArticleDetail.displayName = 'ArticleDetail';

ArticleDetail.propTypes = {
    isFetching: PropTypes.bool,
    articleId: PropTypes.number,
    article: PropTypes.object,
};
ArticleDetail.defaultProps = {};

export default ArticleDetail;
