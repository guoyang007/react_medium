'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/index.js';
import { fetchComments } from '../../actions/index.js';

import ArticleDetail from '../../components/article-detail/index.js';
import RelatedComments from '../../components/related-comments/index.js';

require('./show.less');

class ArticlesShow extends React.Component {
	componentWillMount(){
	    const { dispatch, params } = this.props;
	    
	    dispatch(fetchArticle(params.id));
	    dispatch(fetchComments());
	}
    render() {
    	const {article,count,comments,commentsIsFetchting}=this.props;
        return (
        	<div className="page-articles-show">
        		<ArticleDetail article={article}/>
        		<RelatedComments count={count} comments={comments} commentsIsFetchting={commentsIsFetchting}/>
        	</div>
        );
    }
}

ArticlesShow.displayName = 'ArticlesShow';

ArticlesShow.propTypes = {};
ArticlesShow.defaultProps = {};

// 将全局的state映射到组件的props，相当于从store获取数据
function mapStateToProps(state,ownParams){
    const { articleReducer ,commentsReducer} = state;
    const {
        article: article,
        isFetchting
    } = articleReducer[ownParams.params.id] || {
        article: {},
        isFetchting:true
    };
    const {
        count,
        commentsIsFetchting,
        comments
    } = commentsReducer[ownParams.params.id] || {
        count: 0,
        commentsIsFetchting: true,
        comments: []
    };

    return {
        articleId: 1,
        article: article,
        isFetchting: isFetchting,
        commentsIsFetchting:commentsIsFetchting,
        count:count,
        comments:comments
    }
}

export default connect(mapStateToProps)(ArticlesShow);
