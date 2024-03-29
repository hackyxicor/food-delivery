import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'

import saga from '../Saga/index.saga';
import reducer from '../Reducers/index.reducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware, logger))
);

// run the saga
sagaMiddleware.run(saga);

export default store;