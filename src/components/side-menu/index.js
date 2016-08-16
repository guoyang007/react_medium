'use strict';

import React from 'react';

require('./index.less');

class SideMenu extends React.Component {
    render() {
        return (
        	<div className="com-side-menu">SideMenu</div>
        );
    }
}

SideMenu.displayName = 'SideMenu';

SideMenu.propTypes = {};
SideMenu.defaultProps = {};

export default SideMenu;
