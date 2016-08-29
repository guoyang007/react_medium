import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

function* fetchArticle(action) {
    try {
    	let article = yield call(fn, ...args);
    	// 创建dispatch effect
    	yield put({});
    } catch (e) {

    }
}
