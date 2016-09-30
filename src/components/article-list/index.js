'use strict';

import 'antd-mobile/lib/refresh-control/style';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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

    componentWillMount(){
        const { dispatch } = this.props;
        //fetchArticles是异步获取，所以即使是willMount时发请求，仍然会比render中的晚
        //所有在render中取值时要保证有值
        dispatch(fetchArticles());
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
        const { articlesProp } = this.props;
        const isFetchting=articlesProp.isFetchting;
        const articlesList=articlesProp.articles;
        const articleNodes = [];

        if (isFetchting) {articleNodes.push(<div>loading...</div>)}
        if(articlesList){
            articlesList.forEach(function(article, i){
                if(article.genre == 1){
                    articleNodes.push(<GridArticle key={i} article={article} />);
                }else{
                    articleNodes.push(<GridKeyArticle key={i} article={article} />);
                }
            }); 
        }
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
function mapStateToProps(state,ownParams){

    return{
        articlesProp:state.articles
    }
}

export default connect(mapStateToProps)(ArticleList);
