import fetch from 'isomorphic-fetch'


// fetch-article
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







// fetch-articles
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