import { combineReducers } from 'redux';

import articleReducer from './article.js';
import articlesReducer from './articles.js';


const rootReducer = combineReducers({
    articleReducer,
    articlesReducer
});

export default rootReducer;