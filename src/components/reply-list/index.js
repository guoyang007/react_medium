'use strict';

import React from 'react';

require('./index.less');

class ReplyList extends React.Component {
    render() {
        const {replyList}=this.props;
        const replies=[];
        replyList.forEach(function(reply,i){
            console.log(reply)
            replies.push(
                <div className="com-reply clearfix" key={i}>
                    <div className="reply-left">
                        <a href="javascript:void(0);" className="avatar circle x35">
                            <img src={reply.author.avatar} />
                        </a>
                    </div>
                    <div className="reply-right">
                        <div className="name-date">
                            <a href="javascript:void(0);" className="name">{reply.author.name}</a>
                            <span className="date smart-date" data-originDate={reply.publish_date}>1分钟前</span>
                            <div className="ribbon">
                                <span className="iconfont icon-heart">{reply.praise_count}</span>
                                <span className="iconfont icon-message">{reply.message_count}</span>
                            </div>
                        </div>
                        <p className="comment-text">{reply.content}</p>
                    </div>
                </div>
            )
        })

        return (
			<div className="replies">
                {replies}
            </div>
        );
    }
}

ReplyList.displayName = 'ReplyList';

// Uncomment properties you need
ReplyList.propTypes = {};
ReplyList.defaultProps = {};

export default ReplyList;
