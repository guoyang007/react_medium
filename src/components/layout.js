'use strict';

import 'antd-mobile/lib/drawer/style';
import 'components/common/index.js';

import React from 'react';
import Drawer from 'antd-mobile/lib/drawer';

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
                    <Drawer sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps}>
                        {this.props.children || '空白'}
                    </Drawer>
                </div>
            </div>
        );
    }
}

Layout.displayName = 'Layout';

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;