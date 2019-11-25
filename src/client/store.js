import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { noteReducer } from './reducers/noteReducer';

export const store = createStore(combineReducers({ noteReducer }), {}, applyMiddleware(createLogger()));
