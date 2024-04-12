import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'; // Your root reducer file

const store = createStore(reducer, applyMiddleware(thunk));

export default store;