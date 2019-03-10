import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from '../Saga';
import reducer from '../Reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// dev tools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
sagaMiddleware.run(saga);

export default store;
