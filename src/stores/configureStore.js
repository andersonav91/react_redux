import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore (initialState) {
    const logger = createLogger({
        collapsed: true
    });

    const middlewares = [
        thunk,
        logger
    ];

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    )
}

const store = configureStore()

module.exports = store

export default store


