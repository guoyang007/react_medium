'use strict';

import React from 'react';

require('./index.less');

class Header extends React.Component {
    render() {
        return ( < div className = "com-header" >
	            < span className = "iconfont icon-menu" > < /span>
	            < span className = "iconfont icon-logo" > < /span> 
	            < span className="login"> Login < /span>
            </div>
        );
    }
}

Header.displayName = 'Header';

// Uncomment properties you need
// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
