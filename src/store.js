import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './reducers';
import thunkMiddleware from 'redux-thunk'

const store = configureStore(
    combineReducers,
    applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
    )
);

export default store;