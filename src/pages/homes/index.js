'use strict';

import React from 'react';
import ArticleList from '../../components/article-list/index.js';

require('./index.less');

class HomesIndex extends React.Component {
    render() {
    	console.log('home');
        return (
        	<div className="page-homes-index">
        		<ArticleList />
        	</div>
        );
    }
}

HomesIndex.displayName = 'HomesIndex';

HomesIndex.propTypes = {};
HomesIndex.defaultProps = {};

export default HomesIndex;
