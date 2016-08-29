'use strict';

import React from 'react';

require('./index.less');
let classNames=require('classnames');

class Toolbar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            praise:this.props.praise,
            praise_count:this.props.praiseCount
        }
    }
    clickHeart(){
        this.setState({
            praise:!this.state.praise,
            praise_count:this.state.praise?--this.state.praise_count:++this.state.praise_count

        })
    }
    render() {
        const {praise,praiseCount,commentCount}=this.props;
        console.log(this.state)
        console.log(this.props.praiseCount)
        let praiseClass=classNames({
            'iconfont icon-praise':true,
            'active':this.state.praise
        })
        return (
			<div className="com-toolbar clearfix">
                <div className="toolbar-left"></div>
                <div className="toolbar-right">
                    <span className={praiseClass} onClick={this.clickHeart.bind(this)}></span>
                    <span>{this.state.praise_count}</span>
                    <span className="iconfont icon-message"></span>
                    <span>{commentCount}</span>
                    <span className="iconfont icon-praise"></span>
                </div>
            </div>
        );
    }
}

Toolbar.displayName = 'Toolbar';

// Uncomment properties you need
Toolbar.propTypes = {};
Toolbar.defaultProps = {};

export default Toolbar;
