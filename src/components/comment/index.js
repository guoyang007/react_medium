'use strict'

import React from 'react'

require('./index.less');

const createFragment=require("react-addons-create-fragment");

class Comment extends React.Component{


	render(){
			
			const datas=this.props.data;

			const data=createFragment(datas)
			console.log(data);


			return(
				<div className="com-comment">
					<div className="comment-left">
						<figure className="avatar">
							<img src={data.author.avatar} />
						</figure>
					</div>
					<div className="comment-right">
						<div className="name-date">
							<a href="javascript:void(0);" className="name">{data.author.name}</a>
							<span className="date smart-date" data-originDate={data.publish_date}></span>
							<div className="ribbon">
								<span className="iconfont icon-heart">{data.praise_count}</span>
								<span className="iconfont icon-message">{data.message_count}</span>
							</div>
						</div>
						<p className="comment-text">{data.content}</p>
						{(data.child_comments.length)
							?<span>{data.child_comments}</span>							:null
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
