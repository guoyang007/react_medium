'use strict';

import React, { PropTypes } from 'react';
import CommentList from 'components/comment-list/index'

require('./index.less');


class RelatedComments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comments_prop } = this.props;
        console.log(222,comments_prop);
        const comments=comments_prop.comments,
              count=comments_prop.count,
              commentsIsFetching=comments_prop.commentsIsFetching;
        return (
        	<div className="com-related-comments">
        		<div className="related-comments-hd">
        			<span className="count">{count}条评论</span>
        		</div>

        		<CommentList commentList={comments} />
        	</div>
        );
    }
}

RelatedComments.displayName = 'RelatedComments';

RelatedComments.propTypes = {
    count: PropTypes.number,
    comments: PropTypes.array,
    isFetchting: PropTypes.bool,
};
RelatedComments.defaultProps = {};
export default RelatedComments;