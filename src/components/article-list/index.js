'use strict';

import React from 'react';

import 'antd-mobile/lib/refresh-control/style';
import RefreshControl from 'antd-mobile/lib/refresh-control';
import { connect } from 'react-refetch'

import Loading from 'components/loading/index.js'
import GridArticle from 'components/grid-article/index.js'
import GridKeyArticle from 'components/grid-key-article/index.js'


require('./index.less');

class ArticleList extends React.Component {

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
    	let { articlesFetch } = this.props,
            articleNodes = [];

        if (articlesFetch.pending) {
    		return (<Loading />);
    	} else if (articlesFetch.rejected) {
    		return (<Loading />);
    	} else if (articlesFetch.fulfilled) {
            articlesFetch.value.forEach(function(article, i){
                if(article.genre == 1){
                    articleNodes.push(<GridArticle key={i} {...article} />);
                }else{
                    articleNodes.push(<GridKeyArticle key={i} {...article} />);
                }
            });

            articleNodes.push(<Loading key={articlesFetch.value.length} />);
    	}

    	return (
            <RefreshControl
                loadingFunction={this.refresh.bind(this)}
            >
                <div className="com-article-list">
                    {articleNodes}
                </div>
            </RefreshControl>
        );
    }
}

ArticleList.displayName = 'ArticleList';

ArticleList.propTypes = {};
ArticleList.defaultProps = {};

export default connect(props => {
    return {
        articlesFetch: `/interfaces/articles.json`,
        refreshArticles: () => ({
            articlesFetch: {
                url: `/interfaces/articles2.json`,
                force: true,
                refreshing: true
            }
        })
    }
})(ArticleList);
