import * as types from './actionTypes';
import fundsApi from '../api/FundsApi';

export function loadFundsSuccess(funds){
    return {type: types.LOAD_FUNDS_SUCCESS, funds};
}

export function loadFunds(search){
    return function(dispatch){
        return fundsApi.getFundsBySearch(search).then(funds=>{
            dispatch(loadFundsSuccess(funds));
        });
    };
}
