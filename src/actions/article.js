import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions';


export const { fetchArticle } = createActions({
    FETCH_ARTICLE: async (articleId) => {
        try {
            let response = await fetch(`/interfaces/articles/${articleId}.json`);
            //let response=await fetch(`/article/${articleId}`);
            let article = await response.json();

            return { articleId, article }
        } catch (err) {
            console.log(err);
        }
    }
});