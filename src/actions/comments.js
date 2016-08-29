import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions';


export const { fetchComments } = createActions({
    FETCH_COMMENTS: async (timestamp = '20160829') => {
        try {
            let response = await fetch(`/interfaces/comments/commentmore/${timestamp}.json`);
            let json = await response.json();
            let count = json.total_count;
            let comments = json.comments;

            return { timestamp, comments, count }
        } catch (err) {
            console.log(err);
        }
    }
});