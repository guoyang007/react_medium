import { handleActions } from 'redux-actions';
import { FETCH_COMMENTS,POST_PRAISE } from '../actions/index.js';


export default handleActions({
    FETCH_COMMENTS: (state, action) => {
        let payload = action.payload;

        // return Object.assign({}, state, {
        //     [payload.articleId]: {
        //         commentsIsFecting: false,
        //         count: payload.count,
        //         comments: payload.comments
        //     }
        // });
        return {...state,commentsIsFecting:false,count:payload.count,comments:payload.comments}
    },
    POST_PRAISE:(state,action)=>{
        let payload=action.payload;
        return{
            ...state,
            praise:true,
            praise_count:payload.praise_count+1
        }

    }
}, {});
