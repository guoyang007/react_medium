import { combineReducers } from 'redux';
import { REQUEST_ARTICLES, RECEIVE_ARTICLES } from '../actions/index.js';


function articles(state = {
    isFecting: false,
    articles: []
}, action) {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return Object.assign({}, state, {
                isFecting: true
            });
        case RECEIVE_ARTICLES:
            return Object.assign({}, state, {
                isFecting: false,
                articles: action.articles
            });
        default:
            return state;
    }
}


function articlesByPage(state = {

}, action) {
    switch (action.type) {
        case REQUEST_ARTICLES:
        case RECEIVE_ARTICLES:
            return Object.assign({}, state, {
                [action.page]: articles(state[action.page], action)
            });
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    articlesByPage
});


export default rootReducer;
