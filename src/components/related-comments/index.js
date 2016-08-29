'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/index.js';
import CommentList from 'components/comment-list/index'

require('./index.less');


class RelatedComments extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        const { dispatch } = this.props;

        dispatch(fetchComments());
    }

    render() {
        const { comments, count, isFetching } = this.props;
        console.log(this.props);
        return (
        	<div className="com-related-comments">
        		<div className="related-comments-hd">
        			<span className="count">{count}条评论</span>
        		</div>

        		<CommentList commentList={comments} />
        	</div>
        );
    }
}

RelatedComments.displayName = 'RelatedComments';

RelatedComments.propTypes = {
    count: PropTypes.number,
    comments: PropTypes.array,
    isFetchting: PropTypes.bool,
    dispatch: PropTypes.func
};
RelatedComments.defaultProps = {};

function mapStateToProps(state){
    const { commentsReducer } = state;

    const {
        count,
        isFetchting,
        comments
    } = commentsReducer['20160829'] || {
        count: 0,
        isFetchting: true,
        comments: []
    };

    return {
        count,
        comments,
        isFetchting
    }
}


export default connect(mapStateToProps)(RelatedComments);
