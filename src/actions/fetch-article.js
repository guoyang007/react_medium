import fetch from 'isomorphic-fetch'


export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
function requestArticle(articleId = 1) {
    return {
        type: REQUEST_ARTICLE,
        articleId: articleId
    }
}

export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
function receiveArticle(articleId = 1, json) {
    return {
        type: RECEIVE_ARTICLE,
        articleId: articleId,
        article: json
    }
}

export function fetchArticle(articleId = 1) {
    return function(dispatch) {
        dispatch(requestArticle(articleId));

        return fetch(`/interfaces/articles/${articleId}.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveArticle(articleId, json)))
    }
}