'use strict'

import React from 'react';
import ReplyList from '../reply-list/index.js';
import Utils from '../common/utils.js';
import {markPraise} from '../../actions/index.js';
require('./index.less');

import eventProxy from '../common/eventProxy.js';

let classNames=require('classnames');

class Comment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			praise_count:props.comment.praise_count,
			praise:props.comment.praise
		}
	}
	//点赞
	clickHeart(){
		const {comment}=this.props;
		let praiseCount=this.state.praise_count,
			isPraise;
		let self=this;
		if (this.state.praise) {
			praiseCount-=1;
			isPraise=false;
		}else{
			praiseCount+=1;
			isPraise=true;
		}
		fetch('/post_praise', {
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({
		    	articleId:1,
		        id: comment.id, 
		        praise_count: praiseCount, 
		        praise: isPraise 
		    })
		})
		.then(response=>{
			if (response.status==200) {
				response.json().then(function(json){
					self.setState({
						praise_count:json.praise_count,
						praise:json.praise
					})
				})
			}
		})

	}
	clickMessage(){
		eventProxy.trigger('Comment::Popup','to show');
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
								<span className="iconfont icon-message" onClick={this.clickMessage.bind(this)}>{comment.message_count}</span>
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
