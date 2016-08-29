import { handleActions } from 'redux-actions';
import { FETCH_ARTICLES } from '../actions/index.js';


export default handleActions({
    FETCH_ARTICLES: (state, action) => {
        let payload = action.payload;

        return Object.assign({}, state, {
            [payload.timestamp]: {
                isFecting: false,
                articles: payload.articles
            }
        });
    }
}, {});