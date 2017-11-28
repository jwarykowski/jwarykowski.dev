import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers'

const middleware = applyMiddleware(thunkMiddleware)
const configureStore = state => createStore(reducers, state, middleware)

export default configureStore
