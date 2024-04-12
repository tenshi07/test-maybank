// reducers/index.js
import { combineReducers } from 'redux';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
    detailsReducer
});

export default rootReducer;