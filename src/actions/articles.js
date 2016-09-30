import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions';


export const { fetchArticles } = createActions({
    FETCH_ARTICLES: async () => {
        try {
            let response = await fetch('/articles');
            let articles = await response.json();

            return {  articles }
        } catch (err) {
            console.log(err);
        }
    }
});