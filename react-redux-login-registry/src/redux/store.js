import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import Reducer from './reducers'

const store = createStore(
  Reducer, composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store