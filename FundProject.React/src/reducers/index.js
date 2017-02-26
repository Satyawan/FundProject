import {combineReducers} from 'redux';
import funds from './fundReducer';

const rootReducer = combineReducers({
    funds
});

export default rootReducer;