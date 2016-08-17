'use strict';

import 'components/common/index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react';
import Drawer from 'material-ui/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

require('./layout.less');

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            position: 'left'
        }
    }

    onOpenChange() {
        this.setState({open: !this.state.open});
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
	                    <span className="login">Login</span>
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
			                <li className="cur">精选</li>
			                <li>科技</li>
			                <li>娱乐</li>
			                <li>商业</li>
			                <li>汽车</li>
			            </ul>
			        </Drawer>
		        </MuiThemeProvider>

	            <div className="page-content">
	            	{this.props.children || '空白'}
	            </div>
        	</div>
    		
        );
    }
}

Layout.displayName = 'Layout';

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;