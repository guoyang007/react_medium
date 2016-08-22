'use strict';

import React from 'react'


import Comment from 'components/comment/index'

require('./index.less');


class CommentList extends React.Component {
    render() {
        const {commentList}=this.props;
        const comments = commentList.forEach(function(comment,i){
        	return (
        		<Comment comment={comment} />
        	)
        })

        return (
			<div className="com-comment-list">
				{comments}
			</div>
        );
    }
}

CommentList.displayName = 'CommentList';

// Uncomment properties you need
CommentList.propTypes = {};
CommentList.defaultProps = {};

export default CommentList;
