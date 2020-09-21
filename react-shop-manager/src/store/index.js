import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { listApi } from '@/service/products'

export const readAll = () => ({
  type: 'READ_ALL'
})

export const productLoad = data => ({
  type: 'PRODUCT_LOADED',
  data
})

export const productLoadAsync = ({ page, defaultPageSize }) => {
  return async dispatch => {
    listApi(page, defaultPageSize).then(res => {
      if (!res.products.length && page !== 1)
        return productLoadAsync({ page: page - 1, defaultPageSize })
      else dispatch(productLoad({ ...res, page }))
    })
  }
}

const notices = (state = { isAllRead: false, count: 8 }, { type, data }) => {
  switch (type) {
    case 'READ_ALL':
      return { ...state, isAllRead: true }
    default:
      return state
  }
}

const product = (state = { list: [], page: 1, total: 0 }, { type, data }) => {
  switch (type) {
    case 'PRODUCT_LOADED':
      return { page: data.page, list: data.products, total: data.totalCount }
    default:
      return state
  }
}

const store = createStore(
  combineReducers({ notices, product }),
  composeWithDevTools(compose(applyMiddleware(...[thunk])))
)

export default store
