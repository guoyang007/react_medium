import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions';


export const { postPraise } = createActions({
    POST_PRAISE: async(praiseData) => {
        try {
            let response = await fetch('/post_praise', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    id: praiseData.id, 
                    praise_count: praiseData.praise_count, 
                    praise: praiseData.praise 
                })
            });
            let praises= await response.json();

            console.log("praises",praises);
            return { praises }
        } catch (err) {
            console.log(err)
        }
    }
})
