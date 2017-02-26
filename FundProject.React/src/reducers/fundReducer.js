import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function fundReducer(state=initialState.funds,action) {
    switch(action.type){
        case types.LOAD_FUNDS_SUCCESS:
            return action.funds;
        default:
            return state;
    }
}