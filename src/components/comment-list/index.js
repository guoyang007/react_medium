'use strict';

import React from 'react'


import Comment from 'components/comment/index'

require('./index.less');


class CommentList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {commentList,postR}=this.props;
        const comments=[];
        if (commentList) {
            commentList.forEach(function(comment,i){
                comments.push(<Comment comment={comment} key={i} postRequest={postR}/>);
            })
        }
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
