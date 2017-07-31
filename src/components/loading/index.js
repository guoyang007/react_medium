'use strict';

import React from 'react';
import Loader from 'halogenium/BounceLoader';

require('./index.less');

class Loading extends React.Component {
    render() {
        return ( 
        	<Loader className="com-loading" color="#000000" size="32px"/>
        );
    }
}

Loading.displayName = 'Loading';

Loading.propTypes = {};
Loading.defaultProps = {};

export default Loading;
