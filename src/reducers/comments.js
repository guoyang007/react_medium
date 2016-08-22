import {REQUEST_COMMENTS,RECEIVE_COMMENTS} from '../actions/index.js'

function comments(state = {
    isFecting: false,
    comments: []
}, action) {
    switch (action.type) {
        case REQUEST_COMMENTS:
            return Object.assign({}, state, {
                isFecting: true
            });
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, {
                isFecting: false,
                comments: action.comments
            });
        default:
            return state;
    }
}


function commentsReducer(state = {

}, action) {
    switch (action.type) {
        case REQUEST_COMMENTS:
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, {
                [action.page]: comments(state[action.page], action)
            });
        default:
            return state;
    }
}


export default commentsReducer;
