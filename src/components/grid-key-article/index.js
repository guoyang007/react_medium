'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./index.less');

class GridKeyArticle extends React.Component {
    render() {
        return ( 
        	<Link to="/articles/2" className="com-grid-key-article clearfix" >
	           	<div className="grid-key-article-head imgcover">
	           		<img src={this.props.banner_pic} />
	           	</div>
	           	<div className="grid-key-article-body">
	           		<h2>{this.props.title}</h2>
	           		<div className="ribbon">
	           		<span>{this.props.source}</span>
	           		<span className="iconfont icon-heart">{this.props.praise_count}</span>
	           		<span className="iconfont icon-message">{this.props.comment_count}</span>
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
