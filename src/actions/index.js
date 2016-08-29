import fetch from 'isomorphic-fetch'


export * from './article.js';
export * from './articles.js';

// // fetch-article
// export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
// function requestArticle(articleId = 1) {
//     return {
//         type: REQUEST_ARTICLE,
//         articleId: articleId
//     }
// }

// export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
// function receiveArticle(articleId = 1, json) {
//     return {
//         type: RECEIVE_ARTICLE,
//         articleId: articleId,
//         article: json
//     }
// }

// export function fetchArticle(articleId = 1) {
//     return function(dispatch) {
//         dispatch(requestArticle(articleId));

//         return fetch(`/interfaces/articles/${articleId}.json`)
//             .then(response => response.json())
//             .then(json => dispatch(receiveArticle(articleId, json)))
//     }
// }






//fetch-comments
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'

function requestComments(page) {
    return {
        type: REQUEST_COMMENTS,
        page: page
    }
}
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

function receiveComments(page, json) {
    return {
        type: RECEIVE_COMMENTS,
        page: page,
        comments: json
    }
}
export function fetchComments(page = 1) {
    return function(dispatch) {
        dispatch(requestComments(page));

        return fetch(`/interfaces/comments.json?page=${page}`)
            .then(response => response.json())
            .then(json => dispatch(receiveComments(page, json)))
    }
}

//post praise
export const REQUEST_PRAISE = 'REQUEST_PRAISE'

function requestPraise(commentId) {
    return {
        type: REQUEST_PRAISE,
        commentId: commentId
    }
}
export const RECEIVE_PRAISE = 'RECEIVE_PRAISE'

function receivePraise(json) {
    const { commentId, praise, praise_count } = json
    return {
        type: RECEIVE_PRAISE,
        commentId: commentId,
        praise: praise,
        praise_count: praise_count
    }
}
export function markPraise(options) {
    const { commentId } = options
    return dispatch => {
        dispatch(requestPraise(commentId));

        return fetch(`/praise/${commentId}.json`, {
                method: "POST",
                body: JSON.stringify(options)
            })
            .then(response => response.json())
            .then(json => dispatch(receivePraise(json)))
    }
}
