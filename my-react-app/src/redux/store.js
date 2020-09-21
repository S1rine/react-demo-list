import { createStore, applyMiddleware } from 'redux'
// import counterReducer from './reducers'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// 1.创建 store 对象
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store