import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions';


export const { fetchComments } = createActions({
    FETCH_COMMENTS: async (articleId ) => {
        try {
            let response=await fetch(`/comments/${articleId}`);
            let json = await response.json();
            let count = json.total_count;
            let comments = json.comments;
            return { articleId, comments, count }
        } catch (err) {
            console.log(err);
        }
    }
    
});