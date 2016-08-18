'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./index.less');

class GridArticle extends React.Component {
    render() {
        return ( 
        	<Link to="/articles/1" className="com-grid-article clearfix" >
	           	<div className="grid-article-left">
	           		<h2>{this.props.title}</h2>
	           		<div className="ribbon">
	           		<span>{this.props.source}</span>
	           		<span className="iconfont icon-heart">{this.props.praise_count}</span>
	           		<span className="iconfont icon-message">{this.props.comment_count}</span>
	           		<span className="smart-date">1小时前</span>
	           		</div>
	           	</div>
	           	<div className="grid-article-right">
	           		<img src={'/images/grid-article-banner.jpg'} className="imgcover"/>
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
