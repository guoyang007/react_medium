'use strict';

import React from 'react';
import Reply from '../reply/index.js';

require('./index.less');

class ReplyList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {replyList}=this.props;
        const replies=[];
        replyList.forEach(function(reply,i){
            replies.push(<Reply reply={reply} key={i} />)
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
