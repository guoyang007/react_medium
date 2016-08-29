'use strict';

import React from 'react';

require('./index.less');
let classNames=require('classnames');

class Toolbar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            praise:true,
            praise_count:121
            //this.props.xxx赋值拿不到，全是undefined
        }
    }
    clickHeart(){
        this.setState({
            praise:!this.state.praise,
            praise_count:this.state.praise?--this.state.praise_count:++this.state.praise_count

        })
    }
    goBack(){
        window.history.back();
    }
    render() {
        const {praise,praiseCount,commentCount}=this.props;

        let praiseClass=classNames({
            'iconfont icon-praise':true,
            'active':this.state.praise
        })

        return (
			<div className="com-toolbar clearfix">
                <div className="toolbar-left" onClick={this.goBack.bind(this)}></div>
                <div className="toolbar-right">
                    <span className={praiseClass} onClick={this.clickHeart.bind(this)}></span>
                    <span>{this.state.praise_count==0?null:this.state.praise_count}</span>
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
