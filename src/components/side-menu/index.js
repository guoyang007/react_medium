'use strict';

import React from 'react';
import { push as Menu } from 'react-burger-menu'

require('./index.less');

class SideMenu extends React.Component {
    render() {
        return (
    		<Menu className="com-side-menu">
		        <a className="menu-item" href="/">Home</a>
		        <a className="menu-item" href="/about">About</a>
		        <a className="menu-item" href="/contact">Contact</a>
		        <a className="menu-item--small" href="">Settings</a>
		    </Menu>
        );
    }
}

SideMenu.displayName = 'SideMenu';

SideMenu.propTypes = {};
SideMenu.defaultProps = {};

export default SideMenu;
