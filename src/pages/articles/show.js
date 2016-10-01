'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/index.js';
import { fetchComments } from '../../actions/index.js';

import ArticleDetail from '../../components/article-detail/index.js';
import RelatedComments from '../../components/related-comments/index.js';

require('./show.less');

class ArticlesShow extends React.Component {
	componentDidMount(){
	    const { dispatch, params } = this.props;
	    dispatch(fetchArticle(params.id));
	    dispatch(fetchComments());
	}
    render() {
    	const {article,comments}=this.props;
        let  articleCom;
        let  commentsCom;

        if (article) {
           articleCom = <ArticleDetail article_prop={article}/>
        }
        if (comments) {
           commentsCom= <RelatedComments comments_prop={comments}/>
        }
       return (
            <div className="page-articles-show">
                {articleCom}
                {commentsCom}
            </div>
        );        
    }
}

ArticlesShow.displayName = 'ArticlesShow';

ArticlesShow.propTypes = {};
ArticlesShow.defaultProps = {};

// 将全局的state映射到组件的props，相当于从store获取数据
function mapStateToProps(state,ownParams){
    const { article ,comments} = state;
    // const {
    //     article: article,
    //     isFetchting
    // } = article[ownParams.params.id] || {
    //     article: {},
    //     isFetchting:true
    // };
    // const {
    //     count,
    //     commentsIsFetchting,
    //     comments
    // } = comments[ownParams.params.id] || {
    //     count: 0,
    //     commentsIsFetchting: true,
    //     comments: []
    // };

    // return {
    //     articleId: 1,
    //     article: article,
    //     isFetchting: isFetchting,
    //     commentsIsFetchting:commentsIsFetchting,
    //     count:count,
    //     comments:comments
    // }
    return {
        article:article[ownParams.params.id],
        comments:comments
    }
}

export default connect(mapStateToProps)(ArticlesShow);
