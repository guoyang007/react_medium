'use strict'

import React from 'react';
import ReplyList from '../reply-list/index.js';
import Utils from '../common/utils.js';
import {markPraise} from '../../actions/index.js';
require('./index.less');
let classNames=require('classnames');

class Comment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			praise:this.props.comment.praise,
			praise_count:this.props.comment.praise_count
		}
	}
	//点赞
	clickHeart(e){

		this.setState({
			praise:!this.state.praise,
			praise_count:this.state.praise?--this.state.praise_count:++this.state.praise_count

		})
		
		// const {dispatch}=this.props
		// console.log(dispatch)
		// dispatch(markPraise({
		// 	id:this.props.comment.id,
		// 	praise:this.state.praise,
		// 	praise_count:this.state.praise_count
		// }))
	}
	render(){
			const {comment}=this.props;
			let praiseClass=classNames({
				'iconfont icon-praise':true,
				'active':this.state.praise
			})
			return(
				<div className="com-comment clearfix">
					<div className="comment-left">
						<figure className="avatar x35">
							<img src={comment.author.avatar} />
						</figure>
					</div>
					<div className="comment-right">
						<div className="name-date">
							<a href="javascript:void(0);" className="name">{comment.author.name}</a>
							<span className="date smart-date">{Utils.smartDate(comment.publish_time)}</span>
							<div className="ribbon">
								<span className={praiseClass} onClick={this.clickHeart.bind(this)}></span>
								<span>{this.state.praise_count}</span>
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
