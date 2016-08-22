'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./index.less');

class GridKeyArticle extends React.Component {
    render() {
    	const { article } = this.props;

        return ( 
        	<Link to="/articles/2" className="com-grid-key-article clearfix" >
	           	<div className="grid-key-article-head imgcover">
	           		<img src={article.banner_pic} />
	           	</div>
	           	<div className="grid-key-article-body">
	           		<h2>{article.title}</h2>
	           		<div className="ribbon">
	           		<span>{article.source}</span>
	           		<span className="iconfont icon-heart">{article.praise_count}</span>
	           		<span className="iconfont icon-message">{article.comment_count}</span>
	           		<span className="smart-date">1小时前</span>
	           		</div>
	           	</div>
            </Link>
        );
    }
}

GridKeyArticle.displayName = 'GridKeyArticle';

GridKeyArticle.propTypes = {};
GridKeyArticle.defaultProps = {};

export default GridKeyArticle;
