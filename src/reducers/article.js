import { REQUEST_ARTICLE, RECEIVE_ARTICLE } from '../actions/index.js';


function article(state = {
    isFecting: false,
    article: {}
}, action) {
    switch (action.type) {
        case REQUEST_ARTICLE:
            return Object.assign({}, state, {
                isFecting: true
            });
        case RECEIVE_ARTICLE:
            return Object.assign({}, state, {
                isFecting: false,
                article: action.article
            });
        default:
            return state;
    }
}


function articleReducer(state = {

}, action) {
    switch (action.type) {
        case REQUEST_ARTICLE:
        case RECEIVE_ARTICLE:
            return Object.assign({}, state, {
                [action.articleId]: article(state[action.articleId], action)
            });
        default:
            return state;
    }
}


export default articleReducer;
