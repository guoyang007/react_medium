import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions';


export const { fetchComments } = createActions({
    FETCH_COMMENTS: async (articleId =1) => {
        try {
            //let response = await fetch(`/interfaces/comments/${articleId}.json`);
            let response=await fetch(`/comments`);
            let json = await response.json();
            let count = json.total_count;
            let comments = json.comments;

            return { articleId, comments, count }
        } catch (err) {
            console.log(err);
        }
    },
    POST_PRAISE:async(id=232,praise_count:0)=>{
        try {
            await fetch('/post_praise',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({id:id,praise_count:praise_count})
            });
            return {id,praise_count}
        } catch (err){
            console.log(err)
        }
    }
});