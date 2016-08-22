'use strict';

import 'antd-mobile/lib/refresh-control/style';

// import React from 'react';
// import { connect } from 'react-refetch'
import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { fetchArticles } from '../../actions/index.js';
import RefreshControl from 'antd-mobile/lib/refresh-control';

import Loading from 'components/loading/index.js'
import Articles from 'components/articles/index.js'

require('./index.less');


class ArticleList extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { dispatch, page } = this.props;

        dispatch(fetchArticles(page));
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.page != this.props.page){
    //         const { dispatch, page } = nextProps;

    //         dispatch(fetchArticles(page));
    //     }
    // }

    refresh(){
        let { articlesFetch } = this.props;

        return new Promise((resolve, reject) => {
            if(articlesFetch.rejected){
                reject();
            }else if(articlesFetch.fulfilled){
                resolve();
            }
        });
    }

    render() {
        const { page, articles, isFetching } = this.props;

        console.log(this.props);

    	return (
            <RefreshControl loadingFunction={this.refresh.bind(this)}>
                <div className="com-article-list">
                    <Articles articles={articles} />
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
