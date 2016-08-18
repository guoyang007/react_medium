import { combineReducers } from 'redux';
import { TOGGLE_DRAWER } from '../actions/drawer.js';


function drawer(state = [], action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            state.open = !this.open;
            return state;

        default:
            return false;
    }
}

export default combineReducers(drawer, drawer);
