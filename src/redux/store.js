import { createStore, applyMiddleware } from  'redux';

//persist store when refresh the page
import { persistStore } from 'redux-persist'
//console.log errors and warnings
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default {store,persistor};