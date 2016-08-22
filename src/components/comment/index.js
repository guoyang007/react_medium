'use strict'

import React from 'react'
import ReplyList from '../reply-list/index.js';

require('./index.less');

class Comment extends React.Component{


	render(){
			
			const {comment}=this.props;

			return(
				<div className="com-comment">
					<div className="comment-left">
						<figure className="avatar">
							<img src={comment.author.avatar} />
						</figure>
					</div>
					<div className="comment-right">
						<div className="name-date">
							<a href="javascript:void(0);" className="name">{comment.author.name}</a>
							<span className="date smart-date" data-originDate={comment.publish_date}></span>
							<div className="ribbon">
								<span className="iconfont icon-heart">{comment.praise_count}</span>
								<span className="iconfont icon-message">{comment.message_count}</span>
							</div>
						</div>
						<p className="comment-text">{comment.content}</p>
						{(comment.child_comments.length)
							?<ReplyList replyList={comment.child_comments} />							
							:null
						}
					</div>
				</div>
			)
		

	}
}

Comment.displayName = 'Comment';

// Uncomment properties you need
Comment.propTypes = {};
Comment.defaultProps = {};

export default Comment;
