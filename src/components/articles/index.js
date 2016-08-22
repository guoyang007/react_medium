'use strict'

import React, { PropTypes } from 'react'
import GridArticle from 'components/grid-article/index.js'
import GridKeyArticle from 'components/grid-key-article/index.js'

require('./index.less');

class Articles extends React.Component{
	render(){
		const { articles } = this.props;
		const articleNodes = [];

		articles.forEach(function(article, i){
			if(article.genre == 1){
                articleNodes.push(<GridArticle key={i} {...article} />);
            }else{
                articleNodes.push(<GridKeyArticle key={i} {...article} />);
            }
		});          

		return(
			<div className="com-articles">
				{articleNodes}
			</div>
		)
	}
}

Articles.displayName = 'Articles';

// Uncomment properties you need
Articles.propTypes = {};
Articles.defaultProps = {};

export default Articles;