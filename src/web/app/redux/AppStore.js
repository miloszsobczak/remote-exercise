import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppReducer from './AppReducer'
import AppSagas from './AppSagas'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
const reducers = AppReducer.combine()

class AppStore {
    static configure () {
        const store = createStore(reducers, applyMiddleware(...middlewares))

        sagaMiddleware.run(AppSagas)

        return store
    }
}

export default AppStore