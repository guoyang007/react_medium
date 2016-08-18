'use strict';

import React from 'react';

import 'antd-mobile/lib/refresh-control/style';
import { RefreshControl } from 'antd-mobile/lib/refresh-control';

import { connect } from 'react-refetch'

import Loading from 'components/loading/index.js'
import GridArticle from 'components/grid-article/index.js'
import GridKeyArticle from 'components/grid-key-article/index.js'


require('./index.less');
let count = 1;
class ArticleList extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            items: [
	        <div key={`item-${count}`} style={{ height: 70 }}>条目 {count++}</div>
	      ]
        }
    }

	  loadingFunction() {
	    return new Promise((resolve, reject) => {
	      setTimeout(() => {
	        if (this.addItem()) {
	          resolve();
	        } else {
	          reject();
	        }
	      }, 500);
	    });
	  }

	  addItem() {
	    this.state.items.push(<div key={`item-${count}`} style={{ height: 70 }}>条目 {count++}</div>);
	    this.setState({
	      items: this.state.items
	    });
	    return true;
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
                loadingFunction={this.loadingFunction.bind(this)}
                distanceToRefresh={60}
                resistance={1}
                style={{
                    position:'relative',
                    paddingTop:20,
                    textAlign:'center'
                }}
                hammerOptions={{
                    touchAction:'auto',
                    recognizers:{
                        pan:{
                            threshold:100
                        }
                    }
                }}
            >
            <div>{this.state.items}</div>
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

export default connect(props => ({
	articlesFetch: `/interfaces/articles.json`
}))(ArticleList);
