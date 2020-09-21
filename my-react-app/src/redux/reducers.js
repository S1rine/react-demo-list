/**
 * 1. 定义 reducer
 * 作用
 * 1.服务 store 对象 为 store 对象提供初始值
 * 2.帮助 store 对象修改 state 状态值
 * 3.数据源需要捅过 actions 获取
 * 4.修改完的数据交给 store 对象的 state 重
 * 
 * action = {data: 最新的数据, type: 修改数据的类型}
 *  */
import { ADDACTION, DELACTION, SEARCHACTION } from './actions-type'
import { combineReducers } from 'redux'

const initialState = {
  list: [{ user: 'aa', content: 'nan' }, { user: 'jack', content: 'easy' }]
}

function commendReducer (state = initialState, { type, data }) {
  console.log(state)
  console.log(data)
  switch (type) {
    case ADDACTION:
      return { list: [data.list, ...state.list] }
    case DELACTION:
      let newState = [...state.list]
      newState.splice(data.index, 1)
      return { list: newState }
    default:
      return state
  }
}

const githubInitial = {
  isLoading: false,
  users: []
}

function githubReducer (state = githubInitial, { type, data }) {
  switch (type) {
    case SEARCHACTION:
      return data
    default:
      return state
  }
}

function counterReducer (state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + action.data
    case 'decrement':
      return state - action.data
    case 'set':
      return action.data
    default:
      return state
  }
}

export default combineReducers({ commendReducer, counterReducer, githubReducer })