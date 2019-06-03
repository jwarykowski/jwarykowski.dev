import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers'
import DevTools from '../components/utilities/dev-tools'

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)

const enhancer = compose(middleware, DevTools.instrument())
const configureStore = state => createStore(reducers, state, enhancer)

export default configureStore
