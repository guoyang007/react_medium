import { handleActions } from 'redux-actions';
import { FETCH_ARTICLE } from '../actions/index.js';


export default handleActions({
    FETCH_ARTICLE: (state, action) => {
        let payload = action.payload;

        return Object.assign({}, state, {
            [payload.articleId]: {
                isFecting: false,
                article: payload.article
            }
        });
    }
}, {});
