'use strict';

import React from 'react';
import CommentList from 'components/comment-list/index'

require('./index.less');


class RelatedComments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data:[
                {author: {id:232,name:'cnak',avatar:"http://www.qdaily.com/images/missing_face.png"},
                content: 'This is one comment',
                id:232,
                praise_count:0,
                comment_count:1,
                publish_time:"2016-08-18 14:28:36 +0800",
                child_comments:[
                    {author:{id:1542,name:'csa',avatar:"http://www.qdaily.com/images/missing_face.png"},
                    comment_count:0,
                    praise_count:0,
                    content:'ieviuefvi.',
                    id:89392}
                ]},
                {author: {id:2322,name:'wwww',avatar:"http://www.qdaily.com/images/missing_face.png"},
                content: 'This is two comment',
                id:1232,
                praise_count:0,
                comment_count:1,
                publish_time:"2016-08-18 21:28:36 +0800",
                child_comments:[
                    {author:{id:2,name:'csa',avatar:"http://www.qdaily.com/images/missing_face.png"},
                    comment_count:0,
                    praise_count:0,
                    content:'华为',
                    id:8392}
                ]}
            ]
        }
    }

    render() {
        return (
        	<div className="com-related-comments">
        		<div className="related-comments-hd">
        			<span className="count">72条评论</span>
        		</div>
        		<CommentList data={this.state.data} />
        	</div>
        );
    }
}

RelatedComments.displayName = 'RelatedComments';

// Uncomment properties you need
RelatedComments.propTypes = {};
RelatedComments.defaultProps = {};

export default RelatedComments;
