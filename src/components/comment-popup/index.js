'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import Utils from '../common/utils.js';
import eventProxy from '../common/eventProxy.js';

require('./index.less');

class CommentPopup extends React.Component{
	constructor(props){
		super(props);
		// this.state={
		// 	open:false
		// }
	}
	cancelComment(){
		eventProxy.trigger('Comment::Hide','hide');
	}
	publishComment(){
		let self=this;
		//对数据库的存储应该新建一个表，对于praise_count等有默认值，这儿就提交几条有信息的条目即可
		fetch('/post_comment', {
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({
		    	articleId:1,
		        id: 231,
		        content:"what the fuck"
		    })
		})
		.then(response=>{
			console.log(1231,response);
			if (response.status==200) {
				//触发更新RelatedComments部分
				//self.setState({})
				//弹窗消失
				this.cancelComment();
			}
		})
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.open&&!this.props.open) {
			if (document.getElementsByClassName('overlay').length==0) {
				// 创建 DOM
				this.node = document.createElement('div');
				// 给上 ClassName
				this.node.className = 'overlay';
				// 给 body 加上刚才的 带有 className 的 div
				document.getElementsByClassName('react-container')[0].appendChild(this.node);

				let modal=(
						<div className="com-comment-popup hide">
							<div className="comment-popup-hd">
								<div className="left"><a href="javascript:void(0)" className="link close-popup" onClick={this.cancelComment.bind(this)}>取消</a></div>
								<div className="center">我有意见</div>
								<div className="right"><a href="javascript:void(0)" className="link submit" onClick={this.publishComment.bind(this)}>发布</a></div>
							</div>
							<div className="comment-popup-bd">
								<form action="/post_comment" method="post">
									<textarea name="content" placeholder="我有意见"></textarea>
								</form>
							</div>
						</div>
					);

				let allClass=document.getElementsByClassName('overlay');
				ReactDOM.render(modal,allClass[allClass.length-1]);
			}
			
			Utils.addClass(document.getElementsByClassName('overlay')[0],'overlay-visible');
			setTimeout(function(){
				Utils.removeClass(document.getElementsByClassName('com-comment-popup')[0],'hide');
			},50)
			
		}
		if (this.props.open && !nextProps.open) {
			Utils.addClass(document.getElementsByClassName('com-comment-popup')[0],'hide');
			setTimeout(function(){
				Utils.removeClass(document.getElementsByClassName('overlay')[0],'overlay-visible');
			},50);	
		}

	}
	render(){
		return null;
	}
}

export default CommentPopup;