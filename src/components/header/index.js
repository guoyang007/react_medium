'use strict';

import 'antd-mobile/lib/drawer/style';

import React from 'react';
import Drawer from 'antd-mobile/lib/drawer'

require('./index.less');

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            position: 'left'
        }
    }

    onOpenChange() {
        this.setState({open: !this.state.open});

        console.log(this.state.open);
    }

    render() {
        const sidebar = (
            <ul>
                <li className="cur">精选</li>
                <li>科技</li>
                <li>娱乐</li>
                <li>商业</li>
                <li>汽车</li>
            </ul>
        );

        const drawerProps = {
            open: this.state.open,
            position: this.state.position,
            onOpenChange: this.onOpenChange
        };

        return (
        	<div className="com-header">
                <div className="header-bd">
                    <span className="iconfont icon-menu" onClick={this.onOpenChange.bind(this)}></span>
                    <span className="iconfont icon-logo"></span>
                    <span className="login">Login</span>
                </div>

                <div className="header-ft">
                    <Drawer sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps}>抽屉</Drawer>
                </div>
            </div>
        );
    }
}

Header.displayName = 'Header';

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
