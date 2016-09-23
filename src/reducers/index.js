import { combineReducers } from 'redux';

import articleReducer from './article.js';
import articlesReducer from './articles.js';
import commentsReducer from './comments.js';


const rootReducer = combineReducers({
    article:articleReducer,
    articles:articlesReducer,
    comments:commentsReducer
});

export default rootReducer;