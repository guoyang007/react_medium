'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./index.less');

class GridArticle extends React.Component {
    render() {
    	const { article } = this.props;

        return ( 
        	<Link to="/articles/1" className="com-grid-article clearfix" >
	           	<div className="grid-article-left">
	           		<h2>{article.title}</h2>
	           		<div className="ribbon">
	           		<span>{article.source}</span>
	           		<span className="iconfont icon-heart">{article.praise_count}</span>
	           		<span className="iconfont icon-message">{article.comment_count}</span>
	           		<span className="smart-date">1小时前</span>
	           		</div>
	           	</div>
	           	<div className="grid-article-right">
	           		<img src={article.banner_pic} className="imgcover"/>
	           	</div>
            </Link>
        );
    }
}

GridArticle.displayName = 'GridArticle';

// Uncomment properties you need
GridArticle.propTypes = {};
GridArticle.defaultProps = {};

export default GridArticle;
