import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import {rootReducer} from './rootReducer';

const configureStore = ( middlewares = [] ) => createStore(
    rootReducer,
    compose(
        applyMiddleware(
            ...middlewares,
            thunk,
            reduxLogger
        ),

        ( window as any ).__REDUX_DEVTOOLS_EXTENSION__ ? ( window as any ).__REDUX_DEVTOOLS_EXTENSION__() : ( f: any ) => f
    )
);

export default configureStore;