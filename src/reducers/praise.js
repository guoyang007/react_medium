import { handleActions } from 'redux-actions';
import { POST_PRAISE } from '../actions/index.js';


export default handleActions({
    POST_PRAISE: (state, action) => {
        let payload = action.payload;
        let praiseCount,isPraise;
        if (payload.praise) {
            praiseCount=payload.praise_count-1;
            isPraise=false;
        }else{
            praiseCount=payload.praise_count+1;
            isPraise=true;
        }

        return {...state,isFecting:false,id:payload.id,praise_count:praiseCount,praise:isPraise}
    }
}, {});