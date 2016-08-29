import { createAction } from 'redux-act';

const requestArticle = createAction('REQUEST_ARTICLE', (articleId) => ({articleId}))
const receiveArticle = createAction('RECEIVE_ARTICLE', (articleId, json) => ({articleId, json}))