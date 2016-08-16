'use strict';

import React from 'react';
import SideMenu from 'components/side-menu/index.js';

require('./index.less');

class Header extends React.Component {
    render() {
        return (
        	<div className="com-header">
				<SideMenu />

            	<span className="iconfont icon-menu"></span>

            	<span className="iconfont icon-logo"></span>
            	<span className = "login">Login</span>
            </div>
        );
    }
}

Header.displayName = 'Header';

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
