import { combineReducers } from 'redux';

import articleReducer from './article.js';
import articlesReducer from './articles.js';
import commentsReducer from './comments.js';


const rootReducer = combineReducers({
    articleReducer,
    articlesReducer,
    commentsReducer
});

export default rootReducer;