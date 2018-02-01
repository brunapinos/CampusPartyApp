import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';
// Reducers imports.


const reducers = combineReducers({

});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
