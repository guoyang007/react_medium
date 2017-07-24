'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import Utils from '../common/utils.js';
import eventProxy from '../common/eventProxy.js';
import LoginForm from '../login-form/index'

require('./index.less');

class LoginPopup extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			password:''
		}
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
							<div className="com-login-popup hide">
								<LoginForm />
							</div>
					);

				let overlayers=document.getElementsByClassName('overlay');
				ReactDOM.render(modal,overlayers[overlayers.length-1]);
			}
			
			Utils.addClass(document.getElementsByClassName('overlay')[0],'overlay-visible');
			setTimeout(function(){
				Utils.removeClass(document.getElementsByClassName('com-login-popup')[0],'hide');
			},50)
			
		}
		if (this.props.open && !nextProps.open) {

			Utils.addClass(document.getElementsByClassName('com-login-popup')[0],'hide');
			setTimeout(function(){
				Utils.removeClass(document.getElementsByClassName('overlay')[0],'overlay-visible');
			},100);
			//当关闭动画结束后直接注销掉该组件，因为登录一般只用一次
			document.getElementsByClassName('overlay')[0].addEventListener('transitionend',function(e){
				if (e.propertyName=='opacity') {
					let tar = document.getElementsByClassName('overlay')[0];
					let con = tar.parentNode;
	 				con.removeChild(tar);
				}
			})
		}

	}
	render(){
		return null;
	}
}

export default LoginPopup;