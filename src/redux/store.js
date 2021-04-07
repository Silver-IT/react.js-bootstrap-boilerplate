import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas)

export default store;
