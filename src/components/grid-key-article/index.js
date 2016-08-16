'use strict';

import React from 'react';

require('./index.less');

class GridKeyArticle extends React.Component {
    render() {
        return ( < div className = "com-grid-key-article clearfix" >
	           	<div className="grid-key-article-head imgcover">
	           		<img src={'../../images/yeoman.png'} />
	           	</div>
	           	<div className="grid-key-article-body">
	           		
	           		<h2>在无尽的旅程上，把电影写成诗的贾木许也是你让你永远忘不掉的贾木许.是你让你永远忘不掉的贾木许是你让你永远忘不掉的贾木许</h2>
	           		<div className="ribbon">
	           		<span>片刻</span>
	           		<span className="iconfont icon-heart">122</span>
	           		<span className="iconfont icon-message">231</span>
	           		<span className="smart-date">1小时前</span>
	           		</div>
	           	</div>
            </div>
        );
    }
}

GridKeyArticle.displayName = 'GridKeyArticle';

// Uncomment properties you need
// GridKeyArticle.propTypes = {};
// GridKeyArticle.defaultProps = {};

export default GridKeyArticle;
