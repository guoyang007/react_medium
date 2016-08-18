'use strict';

import React from 'react';
import { connect } from 'react-refetch'

import Loading from 'components/loading/index.js'

require('./index.less');

class ArticleDetail extends React.Component {
    render() {
        let { articleFetch } = this.props,
            tagNodes = [];

        if (articleFetch.pending) {
            console.log(articleFetch);
            return (<Loading />);
        } else if (articleFetch.rejected) {
            console.log(articleFetch);
            return (<Loading />);
        } else if (articleFetch.fulfilled) {
            let article = articleFetch.value,
                tags = article.tags || [];

            tagNodes = tags.forEach(function(tag, i){
                tagNodes.push(<li key={i} className="tag">{tag}</li>);
            });

            return (
                <div className="com-article-detail">
                    <div className="article-detail-hd imgcover">
                        <img src={article.banner_pic} />
                    </div>
                    <div className="article-detail-bd">
                        <div className="detail" dangerouslySetInnerHTML={{__html: article.content}}></div>
                    </div>
                    <div className="article-detail-ft">
                        <ul className="tags">
                            {tagNodes}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

ArticleDetail.displayName = 'ArticleDetail';

ArticleDetail.propTypes = {};
ArticleDetail.defaultProps = {};


export default connect(props => ({
    articleFetch: `/interfaces/articles/1.json`
}))(ArticleDetail);
