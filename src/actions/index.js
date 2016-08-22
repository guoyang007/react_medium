import fetch from 'isomorphic-fetch'


export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
function requestArticles(page) {
    return {
        type: REQUEST_ARTICLES,
        page: page
    }
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
function receiveArticles(page, json) {
    return {
        type: RECEIVE_ARTICLES,
        page: page,
        articles: json
    }
}

export function fetchArticles(page = 1) {
    return function(dispatch) {
        dispatch(requestArticles(page));

        return fetch(`/interfaces/articles.json?page=${page}`)
            .then(response => response.json())
            .then(json => dispatch(receiveArticles(page, json)))
    }
}
