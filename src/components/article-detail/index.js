'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/index.js';

import Loading from '../../components/loading/index.js'
import RelatedComments from '../../components/related-comments/index'

require('./index.less');


class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const { dispatch, articleId } = this.props;

        dispatch(fetchArticle(articleId));
    }

    render() {
        let { article } = this.props;

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
            </div>
        );
    }
}

ArticleDetail.displayName = 'ArticleDetail';

ArticleDetail.propTypes = {
    isFetching: PropTypes.bool,
    articleId: PropTypes.number,
    article: PropTypes.object,
    dispatch: PropTypes.func
};
ArticleDetail.defaultProps = {};


// 将全局的state映射到组件的props，相当于从store获取数据
function mapStateToProps(state){
    const { articleReducer } = state;

    const {
        isFetchting,
        article: article
    } = articleReducer[1] || {
        isFetchting: true,
        article: {}
    };

    return {
        articleId: 1,
        article: article,
        isFetchting: isFetchting
    }
}


export default connect(mapStateToProps)(ArticleDetail);
