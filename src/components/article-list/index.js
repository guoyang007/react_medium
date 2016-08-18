'use strict';

import React from 'react';
import { connect } from 'react-refetch'

import Loading from 'components/loading/index.js'
import GridArticle from 'components/grid-article/index.js'
import GridKeyArticle from 'components/grid-key-article/index.js'

require('./index.less');

class ArticleList extends React.Component {
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
        	<div className="com-article-list">
        		{articleNodes}
        	</div>
        );      
    }
}

ArticleList.displayName = 'ArticleList';

ArticleList.propTypes = {};
ArticleList.defaultProps = {};

export default connect(props => ({
	articlesFetch: `/interfaces/articles.json`
}))(ArticleList);
