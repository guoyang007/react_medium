import fetch from 'isomorphic-fetch'


export * from './article.js';
export * from './articles.js';
export * from './comments.js';


// //fetch-comments
// export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'

// function requestComments(page) {
//     return {
//         type: REQUEST_COMMENTS,
//         page: page
//     }
// }
// export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

// function receiveComments(page, json) {
//     return {
//         type: RECEIVE_COMMENTS,
//         page: page,
//         comments: json
//     }
// }
// export function fetchComments(page = 1) {
//     return function(dispatch) {
//         dispatch(requestComments(page));

//         return fetch(`/interfaces/comments.json?page=${page}`)
//             .then(response => response.json())
//             .then(json => dispatch(receiveComments(page, json)))
//     }
// }

//post praise
// export const REQUEST_PRAISE = 'REQUEST_PRAISE'

// function requestPraise(commentId) {
//     return {
//         type: REQUEST_PRAISE,
//         commentId: commentId
//     }
// }
// export const RECEIVE_PRAISE = 'RECEIVE_PRAISE'

// function receivePraise(json) {
//     const { commentId, praise, praise_count } = json
//     return {
//         type: RECEIVE_PRAISE,
//         commentId: commentId,
//         praise: praise,
//         praise_count: praise_count
//     }
// }
// export function markPraise(options) {
//     const { commentId } = options
//     return dispatch => {
//         dispatch(requestPraise(commentId));

//         return fetch(`/praise/${commentId}.json`, {
//                 method: "POST",
//                 body: JSON.stringify(options)
//             })
//             .then(response => response.json())
//             .then(json => dispatch(receivePraise(json)))
//     }
// }
