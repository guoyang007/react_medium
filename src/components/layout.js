'use strict';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react';
import Drawer from 'material-ui/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import LoginPopup from './login-popup/index.js';
import eventProxy from './common/eventProxy.js';

require('./layout.less');

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            loginPop:false,
            userName: 'Login',
            position: 'left'
        }
    }

    componentDidMount(){
    	eventProxy.on('Login::Popup',(msg)=>{
    	    console.log(999,msg);
    	    this.loginShow();
    	})
    	eventProxy.on('Login::Close',(msg)=>{
    	    console.log(111,msg);
    	    //如果是登录成功，改变名字
    	    if (msg.name) {
    	    	this.loginSucceed(msg.name);
    	    }
    	    this.loginClose();
    	})
    }

    loginSucceed(name){
    	this.setState({
    		userName:name
    	})
    	//登录成功，则移除点击弹出登录事件？那么该在哪里退出登录呢，放在侧边栏入口吧或者小的冒泡框内
    	//this.onClick=this.loginOut()
    }

    onOpenChange() {
        this.setState({open: !this.state.open});
    }

    loginShow(){
        if (this.state.userName != 'Login') {
            return
        }
    	this.setState({loginPop:true})
    }

    loginClose(){
        this.setState({
            loginPop:false
        })
    }

    render() {

        const drawerProps = {
            open: this.state.open,
            position: this.state.position,
            onOpenChange: this.onOpenChange.bind(this)
        };

        return (
        	<div className="page-wrapper">
        		<div className="com-header">
	                <div className="header-bd">
	                    <span className="iconfont icon-menu" onClick={this.onOpenChange.bind(this)}></span>
	                    <span className="iconfont icon-logo"></span>
	                    <span className="login" onClick={this.loginShow.bind(this)}>{this.state.userName}</span>
	                </div>
	            </div>

	            <MuiThemeProvider>
		            <Drawer
		            	className="com-drawer"
		            	containerClassName="drawer-bd"
		            	overlayClassName="drawer-overlay"
		            	docked={false}
		            	open={this.state.open}
		            	onRequestChange={(open) => this.setState({open})}>
			        	<ul>
			        	<li className="cur">首页</li>
			        	<li>文章详情页</li>
				        </ul>
			        </Drawer>
		        </MuiThemeProvider>

	            <div className="page-content">
	            	{this.props.children || '空白'}
	            </div>
				<LoginPopup open={this.state.loginPop} />
        	</div>
        );
    }
}

Layout.displayName = 'Layout';

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;