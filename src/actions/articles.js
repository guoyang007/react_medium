import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions';


export const { fetchArticles } = createActions({
    FETCH_ARTICLES: async (timestamp = '20160829') => {
        try {
            let response = await fetch(`/interfaces/articles/articlemore/${timestamp}.json`);
            let articles = await response.json();

            return { timestamp, articles }
        } catch (err) {
            console.log(err);
        }
    }
});