import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers'
import DevTools from '../components/utilities/dev-tools'

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)

const enhancer = compose(middleware, DevTools.instrument())

const configureStore = state => {
  const store = createStore(reducers, state, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducer))
  }

  return store
}

export default configureStore
