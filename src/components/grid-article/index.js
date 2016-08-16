'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router';

require('./index.less');

class GridArticle extends React.Component {
    render() {
        return ( 
        	<Link to="/articles/1" className="com-grid-article clearfix" >
	           	<div className="grid-article-left">
	           		<h2>生活不是等待暴风雨过去而是让我们学会在雨中翩翩起舞,生活不是等待暴风雨过去而是让我们学会在雨中翩翩起舞.</h2>
	           		<div className="ribbon">
	           		<span>片刻</span>
	           		<span className="iconfont icon-heart">122</span>
	           		<span className="iconfont icon-message">231</span>
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
// GridArticle.propTypes = {};
// GridArticle.defaultProps = {};

export default GridArticle;
