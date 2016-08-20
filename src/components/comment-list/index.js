'use strict';

import React from 'react'


import Comment from 'components/comment/index'

require('./index.less');

const createFragment=require("react-addons-create-fragment");

class CommentList extends React.Component {

    render() {

        console.log(this.props.data)
        const comments=this.props.data.map(function(comment){
        	let commentData=createFragment(comment);
        	return (
        		<Comment data={commentData} />
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
