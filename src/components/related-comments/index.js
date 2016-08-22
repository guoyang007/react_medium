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
        const { dispatch, page } = this.props;

        dispatch(fetchComments(page));
    }

    render() {
        const {page,comments,isFetching}=this.props;

        return (
        	<div className="com-related-comments">
        		<div className="related-comments-hd">
        			<span className="count">{comments.total_count}条评论</span>
        		</div>
        		<CommentList commentList={comments.comments} />
        	</div>
        );
    }
}

RelatedComments.displayName = 'RelatedComments';

// Uncomment properties you need
RelatedComments.propTypes = {
    page: PropTypes.number,
    comments: PropTypes.array,
    isFetchting: PropTypes.bool,
    dispatch: PropTypes.func
};
RelatedComments.defaultProps = {};

function mapStateToProps(state){
    const { commentsReducer } = state;

    const {
        isFetchting,
        comments: comments
    } = commentsReducer[1] || {
        isFetchting: true,
        comments: []
    };

    return {
        page: 1,
        comments: comments,
        isFetchting: isFetchting
    }
}


export default connect(mapStateToProps)(RelatedComments);
