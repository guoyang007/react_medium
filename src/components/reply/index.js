'use strict';

import React from 'react';
import Utils from '../common/utils.js';

require('./index.less');
let classNames=require('classnames');


class Reply extends React.Component {

    constructor(props){
        super(props);
        this.state={
            praise:this.props.reply.praise,
            praise_count:this.props.reply.praise_count
        }
    }

    clickHeart(){
        console.log(this.state.praise);
        console.log(this.state.praise_count);
        this.setState({
            praise:!this.state.praise,
            praise_count:this.state.praise?--this.state.praise_count:++this.state.praise_count

        })
        
        // const {dispatch}=this.props
        // console.log(dispatch)
        // dispatch(markPraise({
        //  id:this.props.comment.id,
        //  praise:this.state.praise,
        //  praise_count:this.state.praise_count
        // }))
    }

    render() {
        const {reply}=this.props;
        let praiseClass=classNames({
            'iconfont icon-praise':true,
            'active':this.state.praise
        })

        return (
            <div className="com-reply clearfix">
                <div className="reply-left">
                    <a href="javascript:void(0);" className="avatar circle x35">
                        <img src={reply.author.avatar} />
                    </a>
                </div>
                <div className="reply-right">
                    <div className="name-date">
                        <a href="javascript:void(0);" className="name">{reply.author.name}</a>
                        <span className="date smart-date">{Utils.smartDate(reply.publish_time)}</span>
                        <div className="ribbon">
                            <span className={praiseClass} onClick={this.clickHeart.bind(this)}></span>
                            <span>{this.state.praise_count}</span>
                            <span className="iconfont icon-message">{reply.message_count}</span>
                        </div>
                    </div>
                    <p className="comment-text">{reply.content}</p>
                </div>
            </div>
        );
    }
}

Reply.displayName = 'Reply';

// Uncomment properties you need
Reply.propTypes = {};
Reply.defaultProps = {};

export default Reply;
