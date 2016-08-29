import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index.js';


const loggerMiddleware = createLogger();

const createStoreWidthMiddleware = applyMiddleware(
    // thunkMiddleware,
    promiseMiddleware,
    loggerMiddleware
)(createStore);


export default function store(initialState) {
    return createStoreWidthMiddleware(rootReducer, initialState);
}
