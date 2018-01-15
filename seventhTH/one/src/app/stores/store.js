import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { usersReucer } from '../reducers/usersReducer';
//import { commentsReducer } from '../reducers/commentsReducer';

const middleware = applyMiddleware(promise(), logger());

const reducer = combineReducers({
    users: usersReucer,
    //comments: commentsReducer,
});

const store = createStore(reducer, middleware);

export default store;