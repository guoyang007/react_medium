'use strict';

import 'antd-mobile/lib/refresh-control/style';

// import React from 'react';
// import { connect } from 'react-refetch'
import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { fetchArticles } from '../../actions/index.js';
import RefreshControl from 'antd-mobile/lib/refresh-control';

import Loading from '../../components/loading/index.js'
import GridArticle from '../../components/grid-article/index.js'
import GridKeyArticle from '../../components/grid-key-article/index.js'

require('./index.less');


class ArticleList extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { dispatch, page } = this.props;

        dispatch(fetchArticles(page));
    }

    // 下拉刷新函数
    // 必须用promise包装
    loadingFunction(){
        // const { dispatch, page } = this.props;

        // dispatch(fetchArticles(page));
        
        // 临时代码，不知道如何整合
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 500);
        });
    }

    render() {
        const { page, articles, isFetching } = this.props;
        const articleNodes = [];

        articles.forEach(function(article, i){
            if(article.genre == 1){
                articleNodes.push(<GridArticle key={i} article={article} />);
            }else{
                articleNodes.push(<GridKeyArticle key={i} article={article} />);
            }
        }); 

    	return (
            <RefreshControl loadingFunction={this.loadingFunction.bind(this)}>
                <div className="com-article-list">
                    {articleNodes}
                </div>
            </RefreshControl>
        );
    }
}

ArticleList.displayName = 'ArticleList';

ArticleList.propTypes = {
    page: PropTypes.number,
    articles: PropTypes.array,
    isFetchting: PropTypes.bool,
    dispatch: PropTypes.func
};
ArticleList.defaultProps = {};


// 将全局的state映射到组件的props，相当于从store获取数据
function mapStateToProps(state){
    const { articlesByPage } = state;

    const {
        isFetchting,
        articles: articles
    } = articlesByPage[1] || {
        isFetchting: true,
        articles: []
    };

    return {
        page: 1,
        articles: articles,
        isFetchting: isFetchting
    }
}

export default connect(mapStateToProps)(ArticleList);
