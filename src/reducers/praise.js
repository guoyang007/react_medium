import {REQUEST_PRAISE,RECEIVE_PRAISE} from '../actions/index.js'

function praise(state = {
    isFecting: false
}, action) {
    switch (action.type) {
        case REQUEST_PRAISE:
            return Object.assign({}, state, {
                isFecting: true
            });
        case RECEIVE_PRAISE:
            return Object.assign({}, state, {
                isFecting: false,
                praise: action.praise,
                praise_count:action.praise_count
            });
        default:
            return state;
    }
}


function praiseReducer(state = {

}, action) {
    switch (action.type) {
        case REQUEST_PRAISE:
        case RECEIVE_PRAISE:
            return Object.assign({}, state, {
                [action.commentId]: praise(state[action.commentId], action)
            });
        default:
            return state;
    }
}


export default praiseReducer;
